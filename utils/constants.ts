import { GanttItem } from "../interfaces"
import { daysToMilliseconds } from "./functions"

const today = new Date()
today.setHours(0)
today.setMinutes(0)
today.setSeconds(0)
today.setMilliseconds(0)

export const DEFAULT_GANTT_ITEMS: GanttItem[] = [
  {
    id: "60933e364ca7a33c89653c8e4b21bde6b694783e",
    name: "First Milestone",
    startDate: today,
    endDate: new Date(Number(today) + daysToMilliseconds(4)),
    dependencies: [],
  },
  {
    id: "c2ca381d13eadccd2f1d696ceb3be2fda24a67a9",
    name: "Second Milestone",
    startDate: today,
    endDate: new Date(Number(today) + daysToMilliseconds(6)),
    dependencies: [],
  },
  {
    id: "8c07f7de6e82145bc34391444180785d5d27ed39",
    name: "Third Milestone",
    startDate: new Date(Number(today) + daysToMilliseconds(4)),
    endDate: new Date(Number(today) + daysToMilliseconds(8)),
    dependencies: [],
  },
]
