import { useEffect } from "react"
import Chart from "react-google-charts"
import { GANTT_COLUMNS } from "../utils/constants"
import { useGanttItems } from "./GanttItemsContext"

export default function GanttChart() {
  const { items } = useGanttItems()

  useEffect(() => {
    console.log("items changed", items)
  }, [items])

  return items.length ? (
    <Chart
      data={[GANTT_COLUMNS, ...items]}
      chartType="Gantt"
      width={"100%"}
      loader={<div>Loading chart</div>}
    />
  ) : null
}
