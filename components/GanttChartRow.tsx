import React, { useContext } from "react"
import { GanttItem } from "../interfaces"
import { dateFormatter, normalise, stringToColour } from "../utils/functions"
import DateRangeContext from "./DateRangeContext"
import GanttTimeline from "./GanttTimeline"

export default function GanttChartRow({
  data,
  hasTimeline = false,
}: {
  data: GanttItem
  hasTimeline?: boolean
}) {
  const { start, end } = useContext(DateRangeContext)
  const { id, name, startDate, endDate } = data
  const x = normalise(start, end, Number(startDate))
  const width = normalise(start, end, Number(endDate)) - x

  return (
    <>
      {hasTimeline && (
        <li className="timeline">
          <div>Timeline</div>
          <GanttTimeline start={start} end={end} />
        </li>
      )}
      <li className="gantt-item">
        <div className="details">
          <h3 title={name}>{name}</h3>
          <p className="range">
            {dateFormatter(startDate, true)}–{dateFormatter(endDate, true)}
          </p>
        </div>
        <figure className="duration">
          <div className="segment" />
        </figure>
      </li>

      <style jsx>{`
        li {
          display: grid;
          grid-gap: 1em;
          grid-template-columns: 150px 1fr;
          font-size: 0.8em;
        }

        .gantt-item {
          padding: 0.5em 0.5em;
          margin: 0 -0.5em;
          border-radius: 0.25em;
          transition: 0.1s ease;
        }

        .gantt-item:hover {
          background-color: var(--secondary-wash);
        }

        .segment {
          left: ${x * 100}%;
          width: ${width * 100}%;
          background-color: ${stringToColour(id)};
          border: 1px solid var(--edge-highlight);
          background-clip: border-box;
          border-radius: 0.25em;
          height: 100%;
        }

        .timeline {
          border-bottom: 1px solid;
          font-size: 0.8em;
          margin-bottom: 0.5em;
          color: rgb(128, 128, 128);
        }

        .range {
          color: rgb(128, 128, 128);
        }

        h3 {
          font-size: inherit;
          -webkit-line-clamp: 1;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  )
}
