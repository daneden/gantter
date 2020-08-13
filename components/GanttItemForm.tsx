import React, { useEffect, useState } from "react"
import { GanttItem } from "../interfaces"
import {
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
  const [endDate, setEndDate] = useState(
    dateFormatter(new Date(Number(new Date()) + daysToMilliseconds(3)))
  )
  const [dependencies, setDependencies] = useState("")
  const [transformed, setTransformed] = useState<GanttItem>()

  const itemNames = items
    .map((item) => item.name)
    .filter((itemName) => itemName !== null)

  useEffect(() => {
    setTransformed({
      name,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      dependencies: dependencies.split(/, ?/),
      id: name + startDate,
    })
  }, [name, startDate, endDate, dependencies])

  function addItem() {
    if (dispatch && name.length && startDate && transformed) {
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
            <option key={itemName} value={String(itemName)} />
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
          label="Start Date"
          value={startDate}
          onChange={handler(setStartDate)}
          type="date"
        />
        <Input
          label="End Date"
          value={endDate}
          onChange={handler(setEndDate)}
          type="date"
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
