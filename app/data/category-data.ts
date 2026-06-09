import { Bug, Lightbulb, Palette, Sparkles, Wrench } from "lucide-react";

const CATEGORIES = {
  Feature: {
    bg: "bg-gradient-to-r from-green-50 to-green-200 dark:from-green-900/50 dark:to-green-800",
    text: "text-green-700 dark:text-green-300",
    border: "border-green-400 dark:border-green-600",
    icon: Sparkles,
  },
  Improvement: {
    bg: "bg-gradient-to-r from-blue-50 to-blue-200 dark:from-blue-900/50 dark:to-blue-800",
    text: "text-blue-700 dark:text-blue-300",
    border: "border-blue-400 dark:border-blue-600",
    icon: Wrench,
  },
  Bug: {
    bg: "bg-gradient-to-r from-red-50 to-red-200 dark:from-red-900/50 dark:to-red-800",
    text: "text-red-700 dark:text-red-300",
    border: "border-red-400 dark:border-red-600",
    icon: Bug,
  },
  Design: {
    bg: "bg-gradient-to-r from-purple-50 to-purple-200 dark:from-purple-900/50 dark:to-purple-800",
    text: "text-purple-700 dark:text-purple-300",
    border: "border-purple-400 dark:border-purple-600",
    icon: Palette,
  },
  Other: {
    bg: "bg-gradient-to-r from-gray-50 to-gray-200 dark:from-gray-900/50 dark:to-gray-800",
    text: "text-gray-700 dark:text-gray-300",
    border: "border-gray-400 dark:border-gray-600",
    icon: Lightbulb,
  },
} as const;

export type CategoryType = keyof typeof CATEGORIES;

export function getCategoryDesign(
  category: string,
): (typeof CATEGORIES)[keyof typeof CATEGORIES] {
  const key = category as CategoryType;
  return CATEGORIES[key] || CATEGORIES["Other"];
}
