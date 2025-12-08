"use client"
import { motion } from 'framer-motion';

export default function FadeIn({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Mulai: transparan & agak di bawah
      animate={{ opacity: 1, y: 0 }}  // Akhir: terlihat & posisi normal
      transition={{ 
        duration: 2, 
        delay: delay, 
        ease: "backInOut" 
      }}
    >
      {children}
    </motion.div>
  );
}