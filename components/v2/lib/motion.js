export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const stagger = (delay = 0.08) => ({
  visible: { transition: { staggerChildren: delay } },
});

export const viewportOnce = { once: true, margin: "-80px" };
