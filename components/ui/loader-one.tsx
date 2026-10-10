"use client";

import { motion } from "framer-motion";

export default function LoaderOne() {
  return (
    <div className="flex items-center justify-center gap-1" aria-label="Loading" role="status">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="size-3 rounded-full bg-[color:var(--foreground)]"
          initial={{ x: 0, opacity: 0.5, scale: 1 }}
          animate={{ x: [0, 10, 0], opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity, delay: index * 0.2 }}
        />
      ))}
      <span className="sr-only">Loading portfolio</span>
    </div>
  );
}

export function PortfolioLoadingScreen({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[color:var(--background)]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 0.9, duration: 0.35 }}
      onAnimationComplete={onComplete}
      aria-label="Loading portfolio"
      role="status"
    >
      <LoaderOne />
    </motion.div>
  );
}
