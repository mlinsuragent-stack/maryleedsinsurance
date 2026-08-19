"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Applies framer-motion's global "user" reduced-motion setting so every
 * motion component in the tree automatically respects the visitor's OS
 * prefers-reduced-motion preference, without each component needing to
 * check it individually.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
