export const cinematicTransition = {
  duration: 1.2,
  ease: "easeInOut",
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: cinematicTransition 
  },
};
