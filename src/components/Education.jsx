import { motion } from "framer-motion";

export default function Education() {

  const educationData = [
    {
      institute: "College of Engineering Bhubaneswar",
      location: "Bhubaneswar",
      duration: "Jul 2021 – May 2025",
      degree: "B.Tech in Computer Science and Engineering"
    },
    {
      institute: "Saheed Higher Secondary School",
      location: "Barapur, Bhadrak",
      duration: "Apr 2019 – Mar 2021",
      degree: "Intermediate in Science"
    },
    {
      institute: "Siba Prasad Nodal High School",
      location: "Saud, Balasore",
      duration: "Mar 2018 – Mar 2019",
      degree: "Matriculation"
    }
  ];

  return (
    <section className="py-20 px-6 bg-black text-white">
      
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 
        bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 
        bg-clip-text text-transparent"
      >
        Education
      </motion.h2>

      <div className="max-w-5xl mx-auto space-y-10">

        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-8 bg-gray-900 rounded-2xl shadow-lg 
            border border-gray-800 hover:border-blue-500 
            transition-all duration-300"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-cyan-400">
              {edu.institute}
            </h3>

            <p className="text-gray-400 mt-2">
              {edu.location} | {edu.duration}
            </p>

            <p className="text-gray-300 mt-3 text-lg">
              {edu.degree}
            </p>

          </motion.div>
        ))}

      </div>
    </section>
  );
}