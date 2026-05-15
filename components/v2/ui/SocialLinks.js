import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { SOCIAL_LINKS } from "@/components/v2/lib/constants";

const SocialLinks = ({ size = "md" }) => {
  const sz = size === "sm" ? "h-9 w-9 text-sm" : "h-10 w-10 text-base";
  const items = [
    { href: SOCIAL_LINKS.linkedin, Icon: FaLinkedin, label: "LinkedIn" },
    { href: SOCIAL_LINKS.github, Icon: FaGithub, label: "GitHub" },
    { href: SOCIAL_LINKS.email, Icon: IoMdMail, label: "Email" },
  ];
  return (
    <ul className="flex items-center gap-2">
      {items.map(({ href, Icon, label }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-ln-muted transition-colors duration-200 hover:border-ln-blue/50 hover:bg-ln-blue/10 hover:text-ln-blue ${sz}`}
          >
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
