import { GanttItem } from "../interfaces"
import DateRangeContext from "./DateRangeContext"
import GanttChartRow from "./GanttChartRow"
import { useGanttItems } from "./GanttItemsContext"

function processItems(items: GanttItem[]) {
  const start = items.reduce((prev, curr) => {
    return Math.min(prev, Number(curr.startDate))
  }, Number.MAX_SAFE_INTEGER)
  const end = items.reduce((prev, curr) => {
    return Math.max(prev, Number(curr.endDate))
  }, Number.MIN_SAFE_INTEGER)

  return {
    dateRange: {
      start,
      end,
    },
  }
}

export default function GanttChartNext() {
  const { items } = useGanttItems()
  const { dateRange } = processItems(items)

  const sortedItems = items.sort((a, b) => {
    return Number(a.startDate) - Number(b.startDate)
  })

  return (
    <DateRangeContext.Provider value={dateRange}>
      <div className="container" role="presentation">
        <ul>
          {sortedItems.map((item, index) => (
            <GanttChartRow
              key={item.id}
              data={item}
              hasTimeline={index === 0}
            />
          ))}
        </ul>
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
          overflow: scroll;
          padding: 1.4em 2.8em 1.4em 1.4em;
        }

        ul {
          display: grid;
          list-style: none;
        }
      `}</style>
    </DateRangeContext.Provider>
  )
}
