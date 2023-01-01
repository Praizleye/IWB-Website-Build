export const animateHeading = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.15,
      duration: 1,
      delay: 0.1,
      ease: "circIn",
    },
  },
};
export const animateSubheading = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
export const animateSubtext = {
  hidden: {
    opacity: 0,
    scaleY: 0,
    originX: 0,
  },
  visible: {
    opacity: 0.8,
    scaleY: 1,
    originY: 1,
  },
};
