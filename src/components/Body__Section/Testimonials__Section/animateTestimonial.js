export const animateStars = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5,
      staggerDirection: -1,
      duration: 1.5,
      ease: "circIn",
    },
  },
};

export const animateStar = {
  hide: {
    scale: [0.85, 0.95],
  },
  show: {
    scale: [0.85, 0.95, 1],
    transition: {
      duration: 0.5,
      ease: "circIn",
    },
  },
};
