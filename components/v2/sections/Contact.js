import { useState } from "react";
import { motion } from "framer-motion";
import { Slide, toast } from "react-toastify";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { IoMdMail } from "react-icons/io";
import Container from "@/components/v2/ui/Container";
import GlassCard from "@/components/v2/ui/GlassCard";
import SectionHeading from "@/components/v2/ui/SectionHeading";
import { fadeUp, viewportOnce } from "@/components/v2/lib/motion";
import { SOCIAL_LINKS } from "@/components/v2/lib/constants";

const inputCls =
  "block w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-all focus:border-cyan-300/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-cyan-300/20";

const SocialChip = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] py-2 pl-2.5 pr-4 text-sm text-white/80 transition-all hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-white/[0.06] hover:text-white"
  >
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white">
      <Icon />
    </span>
    {label}
  </a>
);

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const tid = toast.info("Sending...", {
      position: "bottom-center",
      autoClose: false,
      theme: "dark",
      transition: Slide,
    });
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3_ACCESS_KEY,
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      });
      const result = await response.json();
      toast.dismiss(tid);
      if (result.success) {
        toast.success("Message sent — talk soon!", {
          position: "bottom-center",
          autoClose: 4000,
          theme: "dark",
          transition: Slide,
        });
        e.target.reset();
      } else {
        toast.error("Something went wrong. Try again?", {
          position: "bottom-center",
          autoClose: 4000,
          theme: "dark",
          transition: Slide,
        });
      }
    } catch {
      toast.dismiss(tid);
      toast.error("Network error. Try again?", {
        position: "bottom-center",
        autoClose: 4000,
        theme: "dark",
        transition: Slide,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something that matters."
          description="Have an opportunity, a project, or just want to say hi? My inbox is open."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-5">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ duration: 0.55 }}
            className="lg:col-span-2"
          >
            <GlassCard className="flex h-full flex-col p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                Direct
              </p>
              <a
                href={SOCIAL_LINKS.email}
                className="group mt-3 flex items-start gap-3"
              >
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 transition-colors group-hover:border-cyan-300/30 group-hover:bg-white/[0.06] group-hover:text-cyan-200">
                  <IoMdMail />
                </span>
                <span>
                  <span className="block break-all text-[15px] font-medium text-white/85 transition-colors group-hover:text-white">
                    vanamkarthiknetha@gmail.com
                  </span>
                  <span className="block text-xs text-white/40">
                    Replies usually within 24h
                  </span>
                </span>
              </a>

              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                  Social
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <SocialChip
                    href={SOCIAL_LINKS.linkedin}
                    icon={FaLinkedin}
                    label="LinkedIn"
                  />
                  <SocialChip
                    href={SOCIAL_LINKS.github}
                    icon={FaGithub}
                    label="GitHub"
                  />
                </div>
              </div>

              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                  Coding
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <SocialChip
                    href={SOCIAL_LINKS.leetcode}
                    icon={SiLeetcode}
                    label="LeetCode"
                  />
                  <SocialChip
                    href={SOCIAL_LINKS.gfg}
                    icon={SiGeeksforgeeks}
                    label="GeeksforGeeks"
                  />
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <GlassCard className="p-7 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-white/55"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-white/55"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="you@somewhere.com"
                      className={inputCls}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-white/55"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me what you're working on..."
                    className={`${inputCls} resize-none`}
                  />
                </div>
                <div className="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <p className="text-xs text-white/40 sm:flex-1">
                    No spam, ever. I respond personally.
                  </p>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="group inline-flex w-full flex-none items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:py-2.5"
                  >
                    {submitting ? "Sending..." : "Send message"}
                    {!submitting && (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform group-hover:translate-x-1"
                      >
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    )}
                  </button>
                </div>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
