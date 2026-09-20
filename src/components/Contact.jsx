import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion as Motion } from "framer-motion";
import { FaEnvelope, FaPaperPlane, FaUser, FaCommentAlt } from "react-icons/fa";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm("service_syj8omd", "template_tfoz10f", form.current, {
        publicKey: "ioTOTr-ink6bPyuAd",
      })
      .then(
        () => {
          setStatus("Message sent successfully! I'll get back to you shortly.");
          setIsSuccess(true);
          setLoading(false);
          form.current.reset();
        },
        () => {
          setStatus("Message failed to send. Please check connection and try again.");
          setIsSuccess(false);
          setLoading(false);
        }
      );
  };

  return (
    <section className="relative overflow-hidden px-4 py-16 text-white sm:px-6 sm:py-20 md:px-10 lg:px-16 lg:py-24">
      {/* Glow overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.15),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.12),transparent_30%)]" />

      <Motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        viewport={{ once: true }}
        className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300 backdrop-blur-xl">
            Get In Touch
          </div>

          <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-6xl">
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-400 bg-clip-text text-transparent">
              extraordinary together.
            </span>
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
            Available for full-time full-stack engineering roles, software development internships, and high-impact contract product work.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {[
              { label: "Direct Email", value: "Use the form or reach out via LinkedIn" },
              { label: "Target Roles", value: "Full Stack / React / Python-Django / Node.js" },
              { label: "Location Availability", value: "Remote / On-site opportunities" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[1.75rem] border border-white/10 bg-slate-900/50 p-5 shadow-xl backdrop-blur-2xl transition duration-300 hover:border-cyan-400/30"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">{item.label}</p>
                <p className="mt-2 text-base font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FORM CONTAINER */}
        <Motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          viewport={{ once: true }}
          className="rounded-[2.25rem] border border-white/10 bg-slate-900/60 p-6 shadow-[0_25px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-8 md:p-10"
        >
          <div className="grid gap-6">
            <div className="relative">
              <label htmlFor="contact-name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                Your Name
              </label>
              <div className="relative">
                <FaUser className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 py-4 pl-12 pr-4 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="contact-email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                Your Email Address
              </label>
              <div className="relative">
                <FaEnvelope className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 py-4 pl-12 pr-4 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="contact-message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                Your Message
              </label>
              <div className="relative">
                <FaCommentAlt className="pointer-events-none absolute left-4 top-5 text-slate-400" />
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Tell me about your project, team, or opportunity..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/40 py-4 pl-12 pr-4 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
            </div>

            <MagneticButton className="w-full">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 py-4 text-base font-semibold text-slate-950 transition duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-slate-950 border-t-transparent" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>
            </MagneticButton>

            {status && (
              <div
                className={`rounded-2xl border p-4 text-center text-sm font-semibold backdrop-blur-md ${
                  isSuccess
                    ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-300"
                    : "border-red-400/30 bg-red-500/10 text-red-300"
                }`}
              >
                {status}
              </div>
            )}
          </div>
        </Motion.form>
      </Motion.div>
    </section>
  );
}

