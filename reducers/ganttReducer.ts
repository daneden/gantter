import { GanttItem } from "../interfaces"

interface AddGanttItemAction {
  type: "add"
  payload: Omit<GanttItem, "id">
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
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          ...action.payload,
          id: btoa(
            JSON.stringify(action.payload.name + action.payload.startDate)
          ),
        },
      ]
    case "remove":
      return state.filter((_, i) => i !== action.index)
  }
}
