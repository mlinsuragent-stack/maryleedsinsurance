"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Fades and slides content up slightly as it enters the viewport.
 * Content is passed in as children from a Server Component so only this
 * small wrapper needs to run on the client.
 */
export function FadeInSection({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
