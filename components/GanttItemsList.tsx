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
          <li>
            <div>
              <h3>{item[1]}</h3>
              <small>Starts {item[2]?.toLocaleDateString()}</small>
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
          border-top: 1px solid rgba(128, 128, 128, 0.2);
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
        }

        button:hover {
          color: tomato;
        }
      `}</style>
    </>
  ) : null
}
