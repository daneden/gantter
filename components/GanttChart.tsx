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
      height={"100%"}
      loader={<div>Loading chart</div>}
      options={{
        gantt: {
          backgroundColor: {
            fill: "transparent",
          },
          innerGridTrack: { fill: "transparent" },
          innerGridDarkTrack: { fill: "rgba(128, 128, 128, .9)" },
          labelStyle: {
            fontName:
              "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
            fontSize: 14,
            color: "#757575",
          },
        },
      }}
    />
  ) : (
    <>
      <p>No items added yet</p>
      <style jsx>{`
        p {
          place-self: center;
          opacity: 0.5;
        }
      `}</style>
    </>
  )
}
