"use client";

import { motion } from "motion/react";

type Props = {
  delay?: number;
  className?: string;
  as?: "div" | "p" | "footer" | "section";
  children: React.ReactNode;
};

export default function FadeIn({
  delay = 0,
  children,
  className,
  as = "div",
}: Props) {
  const Component = motion.create(as);

  return (
    <Component
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1], // quint-out — smooth, confident
      }}
      className={className}
    >
      {children}
    </Component>
  );
}
