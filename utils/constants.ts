import { GanttColumns, GanttItem } from "../interfaces"
import { daysToMilliseconds } from "./functions"

export const GANTT_COLUMNS: GanttColumns = [
  { type: "string", label: "Task ID" },
  { type: "string", label: "Task Name" },
  { type: "date", label: "Start Date" },
  { type: "date", label: "End Date" },
  { type: "number", label: "Duration" },
  { type: "number", label: "Percent Complete" },
  { type: "string", label: "Dependencies" },
]

export const DEFAULT_GANTT_ITEMS: Array<GanttItem> = [
  ["firstMilestone", "First Milestone", new Date(), null, 259200000, 100, ""],
  [
    "secondMilestone",
    "Second Milestone",
    new Date(Number(new Date()) + daysToMilliseconds(2)),
    null,
    259200000,
    100,
    "firstMilestone",
  ],
  [
    "thirdMilestone",
    "Third Milestone",
    new Date(Number(new Date()) + daysToMilliseconds(3)),
    null,
    172800000,
    100,
    "firstMilestone",
  ],
  [
    "fourthMilestone",
    "Fourth Milestone",
    new Date(Number(new Date()) + daysToMilliseconds(5)),
    null,
    86400000,
    80,
    "thirdMilestone",
  ],
]
