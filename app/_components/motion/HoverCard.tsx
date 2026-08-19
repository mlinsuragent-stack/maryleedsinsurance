"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Subtle scale lift on hover/tap for cards and buttons. Combine with a
 * Tailwind `hover:shadow-*` class on the child (or via className) for a
 * shadow lift; the scale itself is handled by framer-motion.
 *
 * `MotionConfig reducedMotion="user"` (see MotionProvider) already makes
 * transform-based animations - including this scale - resolve instantly
 * instead of easing in when the visitor has requested reduced motion.
 * We additionally read `useReducedMotion` directly here so the gesture is
 * disabled outright rather than relying on that internal behavior, which
 * keeps this component correct even if framer-motion's handling of
 * transform keys changes in a future version.
 */
export function HoverCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
