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
import { trackEvent } from "@/components/v2/lib/analytics";

const inputCls =
  "block w-full rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ln-text placeholder:text-ln-dim outline-none transition-colors focus:border-ln-blue focus:bg-white/[0.05]";

const SocialChip = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] py-1.5 pl-2 pr-4 text-sm text-ln-muted transition-colors hover:border-ln-blue/40 hover:bg-ln-blue/10 hover:text-ln-text"
  >
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.06] text-ln-text">
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
        trackEvent("contact_form_submit");
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
    <section id="contact" className="relative scroll-mt-24 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something that matters."
          description="Have an opportunity, a project, or just want to say hi? My inbox is open."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-5">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <GlassCard className="flex h-full flex-col p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ln-dim">
                Direct
              </p>
              <a
                href={SOCIAL_LINKS.email}
                className="group mt-3 flex items-start gap-3"
              >
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-ln-muted transition-colors group-hover:border-ln-blue/40 group-hover:bg-ln-blue/10 group-hover:text-ln-blue">
                  <IoMdMail />
                </span>
                <span>
                  <span className="block break-all text-[15px] font-medium text-ln-text transition-colors group-hover:text-ln-blue">
                    vanamkarthiknetha@gmail.com
                  </span>
                  <span className="block text-xs text-ln-dim">
                    Replies usually within 24h
                  </span>
                </span>
              </a>

              <div className="mt-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ln-dim">
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

              <div className="mt-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ln-dim">
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
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <GlassCard className="p-6 sm:p-7">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-ln-muted"
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
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-ln-muted"
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
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-ln-muted"
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
                  <p className="text-xs text-ln-dim sm:flex-1">
                    No spam, ever. I respond personally.
                  </p>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="group inline-flex w-full flex-none items-center justify-center gap-2 whitespace-nowrap rounded-full bg-ln-blue px-5 py-2.5 text-sm font-semibold text-ln-bg transition-colors hover:bg-ln-blue-hover disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
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
                        className="transition-transform group-hover:translate-x-0.5"
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
