export const animateImg1 = {
  initialPos: {
    opacity: 0,
    x: 250,
    y: 290,
  },
  normalPos: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: 0.1,
      duration: 0.25,
      ease: "circIn",
      type: "spring",
      bounce: 0.25,
    },
  },
};
export const animateImg2 = {
  initialPos: {
    opacity: 0,
    x: -245,
    y: 200,
  },
  normalPos: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: 0.15,
      duration: 0.25,
      ease: "circIn",
      type: "spring",
      bounce: 0.25,
    },
  },
};
export const animateImg3 = {
  initialPos: {
    opacity: 0,
    x: 250,
    y: -200,
  },
  normalPos: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: 0.25,
      duration: 0.25,
      ease: "circIn",
      type: "spring",
      bounce: 0.25,
    },
  },
};
export const animateImg4 = {
  initialPos: {
    opacity: 0,
    x: -250,
    y: -290,
  },
  normalPos: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: 0.15,
      duration: 0.25,
      ease: "circIn",
      type: "spring",
      bounce: 0.25,
    },
  },
};
export const animateText = {
  hidden: {
    opacity: 0,
    scaleX: 0,
    x: 25,
    transformOrigin: "right 0",
  },
  visible: {
    opacity: 1,
    scaleX: 1,
    x: 0,
    transformOrigin: "0",
    transition: {
      duration: 0.25,
      delay: 0.35,
      ease: "easeIn",
    },
  },
};
