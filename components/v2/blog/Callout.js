import {
  HiOutlineInformationCircle,
  HiOutlineLightBulb,
  HiOutlineExclamationTriangle,
  HiOutlineExclamationCircle,
} from "react-icons/hi2";

/**
 * A styled aside for notes/tips/warnings inside MDX posts.
 *
 *   <Callout type="tip" title="Pro tip">Keep posts short.</Callout>
 *   <Callout>Defaults to a neutral "note".</Callout>
 */
const TONES = {
  note: {
    icon: HiOutlineInformationCircle,
    label: "Note",
    border: "border-ln-blue/25",
    bg: "bg-ln-blue/[0.06]",
    accent: "text-ln-blue",
  },
  tip: {
    icon: HiOutlineLightBulb,
    label: "Tip",
    border: "border-emerald-400/25",
    bg: "bg-emerald-400/[0.06]",
    accent: "text-emerald-300",
  },
  warning: {
    icon: HiOutlineExclamationTriangle,
    label: "Warning",
    border: "border-amber-400/25",
    bg: "bg-amber-400/[0.06]",
    accent: "text-amber-300",
  },
  important: {
    icon: HiOutlineExclamationCircle,
    label: "Important",
    border: "border-rose-400/25",
    bg: "bg-rose-400/[0.06]",
    accent: "text-rose-300",
  },
};

const Callout = ({ type = "note", title, children }) => {
  const tone = TONES[type] ?? TONES.note;
  const Icon = tone.icon;
  return (
    <div
      className={`my-6 flex gap-3 rounded-lg border ${tone.border} ${tone.bg} px-4 py-3.5`}
    >
      <Icon className={`mt-0.5 flex-none text-lg ${tone.accent}`} />
      <div className="min-w-0 flex-1 [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
        <p
          className={`mb-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] ${tone.accent}`}
        >
          {title || tone.label}
        </p>
        <div className="text-[15px] leading-relaxed text-ln-muted">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Callout;
