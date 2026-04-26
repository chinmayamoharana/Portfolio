import { motion as Motion, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";

export default function MagneticButton({
  children,
  className = "",
  strength = 18,
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });
  const [active, setActive] = useState(false);

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const moveX = event.clientX - rect.left - rect.width / 2;
    const moveY = event.clientY - rect.top - rect.height / 2;

    x.set((moveX / rect.width) * strength);
    y.set((moveY / rect.height) * strength);
    setActive(true);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
    setActive(false);
  };

  return (
    <Motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className={className}
      animate={{ scale: active ? 1.02 : 1 }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
    >
      {children}
    </Motion.div>
  );
}
