import { dateFormatter, daysToMilliseconds } from "../utils/functions"

const MAX_SUBDIVISIONS = 9
const MIN_SUBDIVISIONS = 3

export default function GanttTimeline({
  start,
  end,
}: {
  start: number
  end: number
}) {
  const dates = {
    start: new Date(start),
    end: new Date(end),
  }

  const diffInDays = Math.floor((end - start) / daysToMilliseconds(1))
  const [, ...subdivisions] = Array(diffInDays)
    .fill(0)
    .map((_, index) => index)
    .map((_, index) => {
      if (diffInDays > MAX_SUBDIVISIONS) {
        const isWhole =
          index / MAX_SUBDIVISIONS - Math.floor(index / MAX_SUBDIVISIONS) === 0
        return isWhole ? new Date(start + daysToMilliseconds(index)) : null
      } else {
        return new Date(start + daysToMilliseconds(index))
      }
    })
    .filter((el) => el !== null)

  return (
    <>
      <div>
        <span className="tick">
          <span className="label">{dateFormatter(dates.start, true)}</span>
        </span>
        {subdivisions.map((tick) => (
          <span className="tick">
            <span className="label">{dateFormatter(tick as Date, true)}</span>
          </span>
        ))}
        <span className="tick">
          <span className="label">{dateFormatter(dates.end, true)}</span>
        </span>
      </div>
      <style jsx>{`
        div {
          display: flex;
          width: 100%;
          justify-content: space-between;
          margin-bottom: 0.5em;
        }

        .tick {
          width: 1px;
          white-space: nowrap;
          display: inline-block;
          z-index: 1;
        }

        .label {
          transform: translateX(-50%);
          display: inline-block;
          padding: 0.25em 0.5em;
          margin: -0.25em 0;
          border-radius: 0.25em;
          background-color: var(--secondary-wash);
          backdrop-filter: blur(10px);
          box-shadow: inset 0 0 0 1px var(--edge-highlight);
        }

        .tick::before {
          content: "";
          position: absolute;
          width: 1px;
          height: 0.5em;
          top: 100%;
          left: 50%;
          transform: translate(-50%);
          background-color: currentColor;
        }
      `}</style>
    </>
  )
}
