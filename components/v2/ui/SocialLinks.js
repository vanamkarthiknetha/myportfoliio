import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { SOCIAL_LINKS } from "@/components/v2/lib/constants";

const ICON_BTN =
  "group/icon relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-white/[0.06] hover:text-white";

const SocialLinks = ({ size = "md" }) => {
  const sz = size === "sm" ? "h-9 w-9 text-sm" : "h-10 w-10 text-base";
  const items = [
    { href: SOCIAL_LINKS.linkedin, Icon: FaLinkedin, label: "LinkedIn" },
    { href: SOCIAL_LINKS.github, Icon: FaGithub, label: "GitHub" },
    { href: SOCIAL_LINKS.email, Icon: IoMdMail, label: "Email" },
    // {
    //   href: SOCIAL_LINKS.resume,
    //   Icon: HiOutlineDocumentText,
    //   label: "Resume",
    // },
  ];
  return (
    <ul className="flex items-center gap-3">
      {items.map(({ href, Icon, label }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`${ICON_BTN.replace("h-10 w-10", sz)}`}
          >
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
