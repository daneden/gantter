import { dateFormatter, stringToColour } from "../utils/functions"
import { useGanttItems } from "./GanttItemsContext"

export default function GanttItemsList() {
  const { items, dispatch } = useGanttItems()

  function removeItem(index: number) {
    if (dispatch) {
      dispatch({
        type: "remove",
        index,
      })
    }
  }

  return items.length ? (
    <>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            <div>
              <h3>{item.name}</h3>
              <small>
                <ItemBadge id={item.id} /> {dateFormatter(item.startDate, true)}
                –{dateFormatter(item.endDate, true)}
              </small>
            </div>{" "}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <style jsx>{`
        ul {
          list-style: none;
        }

        li {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: first baseline;
          padding: 0.5em 0;
        }

        li + li {
          border-top: 1px solid var(--tertiary-wash);
        }

        h3 {
          font-size: inherit;
        }

        button {
          font: inherit;
          font-size: 0.8em;
          background: none;
          appearance: none;
          color: rgb(128, 128, 128);
          cursor: pointer;
          font-weight: 500;
          border: none;
          padding: 0.25em 0.5em;
          margin: -0.25em -0.5em;
          border-radius: 0.5em;
          transition: 0.1s ease;
        }

        button:hover,
        button:focus {
          color: tomato;
          background-color: var(--secondary-wash);
        }

        button:focus {
          box-shadow: 0 0 0 2px tomato;
        }
      `}</style>
    </>
  ) : null
}

function ItemBadge({ id }) {
  return (
    <>
      <span className="badge" />
      <style jsx>{`
        .badge {
          display: inline-block;
          width: 0.75em;
          height: 0.75em;
          border-radius: 0.75em;
          background-color: ${stringToColour(id)};
          box-shadow: inset 0 0 0 1px var(--edge-highlight);
          margin-right: 0.25em;
        }
      `}</style>
    </>
  )
}
