import React, { createContext, ReactNode, useContext, useReducer } from "react"
import { GanttItem } from "../interfaces"
import ganttReducer, { GanttReducerAction } from "../reducers/ganttReducer"
import { DEFAULT_GANTT_ITEMS } from "../utils/constants"

interface GanttItemsContextType {
  items: Array<GanttItem>
  dispatch?: React.Dispatch<GanttReducerAction> | null
}

const GanttItemsContext = createContext<GanttItemsContextType>({
  items: DEFAULT_GANTT_ITEMS,
  dispatch: null,
})

const GanttItemsProvider = ({ children }: { children: ReactNode }) => {
  const [items, dispatch] = useReducer(ganttReducer, DEFAULT_GANTT_ITEMS)

  return (
    <GanttItemsContext.Provider value={{ items, dispatch }}>
      {children}
    </GanttItemsContext.Provider>
  )
}

export const useGanttItems = () => useContext(GanttItemsContext)

export default GanttItemsProvider
