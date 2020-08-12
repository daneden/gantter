import React, { useEffect, useState } from "react"
import { GanttItem } from "../interfaces"
import {
  camelize,
  dateFormatter,
  daysToMilliseconds,
  handler,
  preventDefault,
} from "../utils/functions"
import Button from "./Button"
import { useGanttItems } from "./GanttItemsContext"
import Input from "./Input"

export default function GanttItemForm() {
  const { items, dispatch } = useGanttItems()
  const [name, setName] = useState("")
  const [startDate, setStartDate] = useState(dateFormatter(new Date()))
  const [duration, setDuration] = useState("1")
  const [dependencies, setDependencies] = useState("")
  const [percentComplete, setPercentComplete] = useState("100")
  const [transformed, setTransformed] = useState<GanttItem>([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ])

  const itemNames = items
    .map((item) => item[1])
    .filter((itemName) => itemName !== null)

  useEffect(() => {
    setTransformed([
      camelize(name),
      name,
      new Date(startDate),
      null,
      daysToMilliseconds(Number(duration)),
      Number(percentComplete),
      dependencies.split(/, ?/).map(camelize).join(","),
    ])
  }, [name, duration, startDate, percentComplete, dependencies])

  function addItem() {
    if (dispatch && name.length && startDate.length) {
      dispatch({
        type: "add",
        payload: transformed,
      })
    }
  }

  return (
    <>
      <form onSubmit={preventDefault}>
        <datalist id="itemNames">
          {itemNames.map((itemName) => (
            <option value={String(itemName)} />
          ))}
        </datalist>
        <Input
          label="Item Name"
          value={name}
          onChange={handler(setName)}
          placeholder="Item Name"
          required={true}
        />
        <Input
          description="YYYY/MM/DD"
          label="Start Date"
          value={startDate}
          onChange={handler(setStartDate)}
          placeholder="2020/08/31"
        />
        <Input
          label="Duration (in days)"
          value={duration}
          onChange={handler(setDuration)}
          type="number"
        />
        <Input
          label="Percent Complete"
          value={percentComplete}
          onChange={handler(setPercentComplete)}
          placeholder="Percent complete"
          type="number"
          min={0}
          max={100}
        />
        <Input
          label="Dependencies"
          description="Enter the names of other items to make this one depend upon them"
          value={dependencies}
          onChange={handler(setDependencies)}
          list="itemNames"
        />
        <Button onClick={addItem} label="Add Item" />
      </form>
      <style jsx>{`
        form {
          font-size: 0.8em;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          grid-gap: 1em;
          align-items: start;
        }
      `}</style>
    </>
  )
}
