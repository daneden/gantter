import { GanttItem } from "../interfaces"

interface AddGanttItemAction {
  type: "add"
  payload: GanttItem
}

interface RemoveGanttItemAction {
  type: "remove"
  index: number
}

export type GanttReducerAction = AddGanttItemAction | RemoveGanttItemAction

export default function reducer(
  state: Array<GanttItem>,
  action: GanttReducerAction
) {
  console.log(action)
  switch (action.type) {
    case "add":
      return [...state, action.payload]
    case "remove":
      return state.filter((_, i) => i !== action.index)
  }
}
