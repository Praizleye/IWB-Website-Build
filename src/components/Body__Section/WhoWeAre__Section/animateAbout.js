export const animateHeading = {
  hidden: {
    opacity: 0,
    x: 15,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeIn",
      delay: 0.2,
    },
  },
};

export const animateImg = {
  hidden: {
    opacity: 0,
    scaleX: 0,
    transformOrigin: "left 0",
  },
  visible: {
    opacity: 1,
    scaleX: 1,
    transformOrigin: "0",
    transition: {
      duration: 0.2,
      delay: 0.1,
      ease: "easeIn",
    },
  },
};
export const animateImg2 = {
  hidden: {
    opacity: 0,
    scaleX: 0,
    transformOrigin: "right 0",
  },
  visible: {
    opacity: 1,
    scaleX: 1,
    transformOrigin: "0",
    transition: {
      duration: 0.2,
      delay: 0.1,
      ease: "easeIn",
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
      delay: 0.65,
      ease: "easeIn",
    },
  },
};
export const animateText2 = {
  hidden: {
    opacity: 0,
    scaleX: 0,
    x: -25,
    transformOrigin: "left 0",
  },
  visible: {
    opacity: 1,
    scaleX: 1,
    x: 0,
    transformOrigin: "0",
    transition: {
      duration: 0.25,
      delay: 0.15,
      ease: "easeIn",
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
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.17, 0.67, 0.83, 0.67],
    },
  },
};
