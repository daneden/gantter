import { GanttItem } from "../interfaces"
import { daysToMilliseconds } from "./functions"

export const DEFAULT_GANTT_ITEMS: GanttItem[] = [
  {
    id: "60933e364ca7a33c89653c8e4b21bde6b694783e",
    name: "First Milestone",
    startDate: new Date(),
    endDate: new Date(Number(new Date()) + daysToMilliseconds(4)),
    dependencies: [],
  },
  {
    id: "c2ca381d13eadccd2f1d696ceb3be2fda24a67a9",
    name: "Second Milestone",
    startDate: new Date(),
    endDate: new Date(Number(new Date()) + daysToMilliseconds(6)),
    dependencies: [],
  },
  {
    id: "8c07f7de6e82145bc34391444180785d5d27ed39",
    name: "Third Milestone",
    startDate: new Date(Number(new Date()) + daysToMilliseconds(4)),
    endDate: new Date(Number(new Date()) + daysToMilliseconds(8)),
    dependencies: [],
  },
]
