import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function getParticleConfig(width) {
  if (width < 640) {
    return {
      count: 24,
      connectionDistance: 1.22,
      interactionRadius: 1.08,
      pointSize: 0.038,
      pointOpacity: 0.98,
      lineOpacity: 0.28,
      drift: 0.24,
    };
  }

  if (width < 1024) {
    return {
      count: 38,
      connectionDistance: 1.38,
      interactionRadius: 1.24,
      pointSize: 0.042,
      pointOpacity: 0.95,
      lineOpacity: 0.26,
      drift: 0.3,
    };
  }

  return {
    count: 56,
    connectionDistance: 1.58,
    interactionRadius: 1.52,
    pointSize: 0.046,
    pointOpacity: 0.93,
    lineOpacity: 0.25,
    drift: 0.36,
  };
}

function pseudoRandom(seed) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

function createParticleSeedData(count, drift, width, height) {
  const originPositions = new Float32Array(count * 3);
  const driftAmounts = new Float32Array(count);
  const phases = new Float32Array(count);
  const speeds = new Float32Array(count);
  const depthOffsets = new Float32Array(count);
  const maxConnections = (count * (count - 1)) / 2;

  for (let i = 0; i < count; i += 1) {
    const stride = i * 3;
    const baseSeed = i + width * 0.031 + height * 0.017;
    const xSeed = pseudoRandom(baseSeed + 0.11);
    const ySeed = pseudoRandom(baseSeed + 0.29);
    const zSeed = pseudoRandom(baseSeed + 0.47);
    const driftSeed = pseudoRandom(baseSeed + 0.67);
    const phaseSeed = pseudoRandom(baseSeed + 0.83);
    const speedSeed = pseudoRandom(baseSeed + 1.03);
    const depthSeed = pseudoRandom(baseSeed + 1.27);

    originPositions[stride] = (xSeed - 0.5) * width * 1.25;
    originPositions[stride + 1] = (ySeed - 0.5) * height * 1.35;
    originPositions[stride + 2] = (zSeed - 0.5) * 1.8;

    driftAmounts[i] = drift * (0.7 + driftSeed * 0.8);
    phases[i] = phaseSeed * Math.PI * 2;
    speeds[i] = 0.18 + speedSeed * 0.22;
    depthOffsets[i] = 0.12 + depthSeed * 0.18;
  }

  return {
    originPositions,
    driftAmounts,
    phases,
    speeds,
    depthOffsets,
    maxConnections,
  };
}

function ParticleNetwork({
  count,
  connectionDistance,
  interactionRadius,
  pointSize,
  pointOpacity,
  lineOpacity,
  drift,
}) {
  const pointsRef = useRef(null);
  const linesRef = useRef(null);
  const pointerTarget = useRef(new THREE.Vector3(999, 999, 0));
  const pointerCurrent = useRef(new THREE.Vector3(999, 999, 0));
  const pointerActive = useRef(false);
  const positionsRef = useRef(new Float32Array(0));
  const linePositionsRef = useRef(new Float32Array(0));
  const { viewport } = useThree();

  const seedData = useMemo(
    () =>
      createParticleSeedData(count, drift, viewport.width, viewport.height),
    [count, drift, viewport.height, viewport.width]
  );
  const initialPositions = useMemo(
    () => new Float32Array(seedData.originPositions),
    [seedData]
  );
  const initialLinePositions = useMemo(
    () => new Float32Array(seedData.maxConnections * 6),
    [seedData]
  );

  useEffect(() => {
    const positions = initialPositions;
    const linePositions = initialLinePositions;

    positionsRef.current = positions;
    linePositionsRef.current = linePositions;

    if (pointsRef.current) {
      pointsRef.current.geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
    }

    if (linesRef.current) {
      linesRef.current.geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(linePositions, 3)
      );
      linesRef.current.geometry.setDrawRange(0, 0);
    }
  }, [initialLinePositions, initialPositions]);

  useEffect(() => {
    const updatePointer = (clientX, clientY) => {
      pointerTarget.current.set(
        ((clientX / window.innerWidth) - 0.5) * viewport.width,
        (0.5 - clientY / window.innerHeight) * viewport.height,
        0
      );
    };

    const handlePointerMove = (event) => {
      pointerActive.current = true;
      updatePointer(event.clientX, event.clientY);
    };

    const handlePointerLeave = () => {
      pointerActive.current = false;
      pointerTarget.current.set(999, 999, 0);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [viewport.height, viewport.width]);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    const positions = positionsRef.current;
    const linePositions = linePositionsRef.current;

    if (!positions.length || !linePositions.length) {
      return;
    }

    pointerCurrent.current.lerp(
      pointerTarget.current,
      pointerActive.current ? 0.09 : 0.04
    );

    for (let i = 0; i < count; i += 1) {
      const stride = i * 3;
      let x =
        seedData.originPositions[stride] +
        Math.sin(elapsed * seedData.speeds[i] + seedData.phases[i]) *
          seedData.driftAmounts[i];
      let y =
        seedData.originPositions[stride + 1] +
        Math.cos(
          elapsed * (seedData.speeds[i] * 0.85) + seedData.phases[i] * 1.2
        ) *
          seedData.driftAmounts[i] *
          0.7;
      let z =
        seedData.originPositions[stride + 2] +
        Math.sin(
          elapsed * (seedData.speeds[i] * 0.65) + seedData.phases[i]
        ) *
          seedData.depthOffsets[i];

      if (pointerActive.current) {
        const dx = x - pointerCurrent.current.x;
        const dy = y - pointerCurrent.current.y;
        const distance = Math.hypot(dx, dy);

        if (distance < interactionRadius) {
          const force = (1 - distance / interactionRadius) ** 2;
          const safeDistance = Math.max(distance, 0.0001);
          x += (dx / safeDistance) * force * 0.3;
          y += (dy / safeDistance) * force * 0.3;
          z += force * 0.16;
        }
      }

      positions[stride] = x;
      positions[stride + 1] = y;
      positions[stride + 2] = z;
    }

    let lineIndex = 0;
    const connectionDistanceSquared = connectionDistance * connectionDistance;

    for (let i = 0; i < count; i += 1) {
      const a = i * 3;

      for (let j = i + 1; j < count; j += 1) {
        const b = j * 3;
        const dx = positions[a] - positions[b];
        const dy = positions[a + 1] - positions[b + 1];
        const dz = positions[a + 2] - positions[b + 2];
        const distanceSquared = dx * dx + dy * dy + dz * dz;

        if (distanceSquared > connectionDistanceSquared) {
          continue;
        }

        linePositions[lineIndex] = positions[a];
        linePositions[lineIndex + 1] = positions[a + 1];
        linePositions[lineIndex + 2] = positions[a + 2];
        linePositions[lineIndex + 3] = positions[b];
        linePositions[lineIndex + 4] = positions[b + 1];
        linePositions[lineIndex + 5] = positions[b + 2];
        lineIndex += 6;
      }
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    linesRef.current.geometry.attributes.position.needsUpdate = true;
    linesRef.current.geometry.setDrawRange(0, lineIndex / 3);
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[initialPositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#b9ecff"
          size={pointSize}
          transparent
          opacity={pointOpacity}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[initialLinePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#8fdbff"
          transparent
          opacity={lineOpacity}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}

export default function ParticleBackground() {
  const [windowWidth, setWindowWidth] = useState(() =>
    typeof window === "undefined" ? 1440 : window.innerWidth
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const config = useMemo(() => getParticleConfig(windowWidth), [windowWidth]);

  return (
    <div className="particle-background" aria-hidden="true">
      <div className="particle-background__veil" />
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6.4], fov: 48 }}
        gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
      >
        <fog attach="fog" args={["#020617", 9, 18]} />
        <ParticleNetwork {...config} />
      </Canvas>
    </div>
  );
}
