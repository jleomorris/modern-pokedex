export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      // when: "beforeChildren",
      staggerChildren: 1,
    },
  },
};

export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    // y: 300,
    transition: {
      duration: 0.5,
    },
  },
};

export const projectBannerAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    // y: 300,
    transition: {
      duration: 0.5,
    },
  },
};

export const titleAnimation = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: { duration: 0.75, ease: 'easeOut' },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.75, ease: 'easeOut' },
  },
};

export const photoAnimation = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.75, ease: 'easeOut' },
  },
};

export const lineAnimation = {
  hidden: { width: '0%' },
  show: { width: '100%', transition: { duration: 1.5 } },
};

export const sliderAnimation = {
  hidden: { x: '-130%', skew: '45deg' },
  show: {
    x: '100%',
    skew: '0deg',
    transition: { duration: 0.75, ease: 'easeOut' },
  },
};

export const sliderContainer = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, ease: 'easeOut' } },
};

export const scrollRevealRight = {
  hidden: { opacity: 0, x: 100, transition: { duration: 0.5 } },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

export const scrollRevealLeft = {
  hidden: { opacity: 0, x: -100, transition: { duration: 0.5 } },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

export const scrollRevealBottom = {
  hidden: { opacity: 0, y: 100, transition: { duration: 0.5 } },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

export const rotatingAnimation = {
  hidden: { scale: 0.8, opacity: 0, rotate: 40 },
  show: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: { duration: 1, ease: 'easeOut' },
  },
};
