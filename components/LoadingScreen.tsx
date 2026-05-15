import { motion } from "framer-motion";

export const LoadingScreen = () => {
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-serif text-4xl tracking-widest text-foreground">LUMINA</h1>
        <motion.div 
          className="mt-4 h-px w-24 bg-primary"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        />
      </motion.div>
    </motion.div>
  );
};
