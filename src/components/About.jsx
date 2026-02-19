import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 px-6 md:px-16 bg-gradient-to-b from-black via-gray-950 to-gray-900 text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Professional Overview & Technical Expertise
          </p>
        </div>

        {/* Glass Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-xl">

          <p className="max-w-4xl mx-auto mt-10 text-gray-300 text-lg md:text-xl leading-relaxed">
            I am a motivated <span className="text-blue-400 font-semibold">Full Stack Developer  </span>
            with strong foundations in modern web technologies. I build responsive and scalable
            applications using <span className="text-cyan-400 font-semibold">React</span>,
            <span className="text-green-400 font-semibold"> MERN Stack</span>,
            <span className="text-yellow-400 font-semibold"> Django</span>, and
            <span className="text-red-400 font-semibold"> Python</span>.

            I have developed academic and personal projects demonstrating clean UI design,
            secure backend development, and efficient database integration.
            I am eager to contribute my technical skills in a professional environment
            while continuously learning and growing as a developer.
          </p>

          {/* Tech Tags */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {["React", "MERN", "Node.js", "Django", "Python", "MongoDB", "MySQL", "REST APIs"].map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-sm font-medium hover:bg-blue-500/20 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 mt-14 text-center">
            <div>
              <h3 className="text-3xl font-bold text-blue-400">Fresher</h3>
              <p className="text-gray-400 mt-2">Development Experience</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-purple-400">10+ Projects</h3>
              <p className="text-gray-400 mt-2">Completed Applications</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">Full Stack</h3>
              <p className="text-gray-400 mt-2">Frontend & Backend Expertise</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
