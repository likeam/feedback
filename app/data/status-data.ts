import {
  Calendar,
  Clock,
  Clock,
  Eye,
  ListChecks,
  ListChecks,
} from "lucide-react";
import { bgCyan } from "next/dist/lib/picocolors";

export const STATUS_ORDER = [
  "under-review",
  "planned",
  "in-progress",
  "completed",
];

export const STATUS_GROUPS = {
  "under-review": {
    title: "Under Review",
    description: "New suggestions that are being reviewed by the team.",
    icon: Eye,
    color: "bg-gray-400 dark:bg-gray-600",
    bgColor:
      "bg-gradient-to-r from-gray-50 to-gray-200 dark:from-gray-900/50 dark:to-gray-800",
    textColor: "text-gray-700 dark:text-gray-300",
    countColor: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",
  },
  planned: {
    title: "Planned",
    description: "Suggestions that are planned for future development.",
    icon: ListChecks,
    color: "bg-yellow-400 dark:bg-yellow-600",
    bgColor:
      "bg-gradient-to-r from-yellow-50 to-yellow-200 dark:from-yellow-900/50 dark:to-yellow-800",
    textColor: "text-yellow-700 dark:text-yellow-300",
    countColor:
      "bg-yellow-100 dark:bg-yellow-800 text-yellow-700 dark:text-yellow-300",
  },
  "in-progress": {
    title: "In Progress",
    description: "Suggestions that are currently being worked on.",
    icon: Clock,
    color: "bg-blue-400 dark:bg-blue-600",
    bgColor:
      "bg-gradient-to-r from-blue-50 to-blue-200 dark:from-blue-900/50 dark:to-blue-800",
    textColor: "text-blue-700 dark:text-blue-300",
    countColor: "bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300",
  },
  completed: {
    title: "Completed",
    description: "Suggestions that have been completed and released.",
    icon: Calendar,
    color: "bg-green-400 dark:bg-green-600",
    bgColor:
      "bg-gradient-to-r from-green-50 to-green-200 dark:from-green-900/50 dark:to-green-800",
    textColor: "text-green-700 dark:text-green-300",
    countColor:
      "bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-300",
  },
};
