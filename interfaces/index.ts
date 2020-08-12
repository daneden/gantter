// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type GanttItem = [
  /** Item ID */
  string | null,
  /** Item Name */
  string | null,
  /** Start Date */
  Date | null,
  /** End Date */
  Date | null,
  /** Duration */
  number | null,
  /** Percent Complete */
  number | null,
  /** Dependencies */
  string | null
]

export interface GanttColumn {
  type: "string" | "number" | "date"
  label: string
}

export type GanttColumns = Array<GanttColumn>

export type GanttChartData = Array<GanttColumn | GanttItem>
