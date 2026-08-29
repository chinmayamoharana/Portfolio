import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion as Motion } from "framer-motion";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

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
          setStatus("Message sent successfully.");
          setLoading(false);
          form.current.reset();
        },
        () => {
          setStatus("Message failed to send. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section className="relative overflow-hidden px-4 py-16 text-white sm:px-6 sm:py-20 md:px-10 lg:px-16 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.12),transparent_24%)]" />

      <Motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        viewport={{ once: true }}
        className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <div className="max-w-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/70">Contact</p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-white md:text-6xl">
            Send a project idea, role opening, or collaboration note.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
            I usually respond quickly to internship and project inquiries. Keep the message short
            and specific so I can get back with useful context.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {[
              { label: "Email", value: "Use the form on this page" },
              { label: "Focus", value: "Internships and product work" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[2rem] border border-white/10 bg-black/45 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.24)] backdrop-blur-2xl"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">{item.label}</p>
                <p className="mt-3 text-lg font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <Motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          viewport={{ once: true }}
          className="rounded-[2rem] border border-white/10 bg-black/45 p-6 shadow-[0_18px_55px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:p-8 md:p-10"
        >
          <div className="grid gap-5">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white placeholder:text-slate-400 focus:border-cyan-300/50 focus:outline-none"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white placeholder:text-slate-400 focus:border-cyan-300/50 focus:outline-none"
            />

            <textarea
              name="message"
              rows="6"
              required
              placeholder="Your Message"
              className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 p-4 text-white placeholder:text-slate-400 focus:border-cyan-300/50 focus:outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 font-semibold text-slate-950 transition duration-300 hover:shadow-[0_0_26px_rgba(56,189,248,0.28)] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && <p className="text-center text-sm text-slate-300">{status}</p>}
          </div>
        </Motion.form>
      </Motion.div>
    </section>
  );
}
