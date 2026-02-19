import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_syj8omd",
        "template_tfoz10f",
        form.current,
        {
          publicKey: "ioTOTr-ink6bPyuAd",
        }
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setLoading(false);
          form.current.reset();
        },
        () => {
          setStatus("❌ Failed to send. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
  <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white px-4 sm:px-6 md:px-12">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
        Contact Me
      </h2>

      <p className="text-gray-400 mt-3 sm:mt-4 text-base sm:text-lg">
        Have a project idea or job opportunity? Let’s connect.
      </p>
    </motion.div>

    <motion.form
      ref={form}
      onSubmit={sendEmail}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      viewport={{ once: true }}
      className="max-w-xl mx-auto mt-8 sm:mt-10 md:mt-12 
      bg-white/5 backdrop-blur-xl border border-white/10 
      p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl 
      shadow-2xl space-y-6 sm:space-y-8"
    >
      {/* Name */}
      <div>
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="w-full bg-transparent border border-gray-600 
          p-3 sm:p-4 rounded-lg sm:rounded-xl 
          text-sm sm:text-base
          focus:outline-none focus:border-blue-400 
          transition-all duration-300"
        />
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="w-full bg-transparent border border-gray-600 
          p-3 sm:p-4 rounded-lg sm:rounded-xl 
          text-sm sm:text-base
          focus:outline-none focus:border-blue-400 
          transition-all duration-300"
        />
      </div>

      {/* Message */}
      <div>
        <textarea
          name="message"
          rows="4"
          required
          placeholder="Your Message"
          className="w-full bg-transparent border border-gray-600 
          p-3 sm:p-4 rounded-lg sm:rounded-xl 
          text-sm sm:text-base
          focus:outline-none focus:border-blue-400 
          transition-all duration-300 resize-none"
        ></textarea>
      </div>

      {/* Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 sm:py-4 
        text-sm sm:text-base
        rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 
        font-semibold text-white 
        hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/40 
        transition-all duration-300 disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {/* Status Message */}
      {status && (
        <p className="text-center text-xs sm:text-sm mt-2 text-gray-300">
          {status}
        </p>
      )}
    </motion.form>
  </section>
);

  
}
