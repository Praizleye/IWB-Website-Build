export const animateText = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeIn",
    },
  },
};
export const animateText2 = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeIn",
    },
  },
};

export const animateSvgPath = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

export const animateBtn = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 1,
    transition: {
      duration: 1.5,
      ease: [0.17, 0.67, 0.83, 0.67],
    },
  },
};

export const animateIlluminate = {
  hidden: {
    opacity: [0, 0.25, 0.5, 0.75],
    rotateZ: 0,
  },
  visible: {
    opacity: [1, 0.75, 1, 0.6, 0.75, 1, 1, 0.75, 1, 0.6, 0.75, 1],
    x: [10, -10, 0],
    y: [5, 0, 10],
    rotateZ: [10, 0, -2, 0, 0],
    transition: {
      duration: 3,
      ease: "easeInOut",
      yoyo: "1",
      delay: 2,
    },
  },
};
