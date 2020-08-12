import React, { createContext, ReactNode, useContext, useReducer } from "react"
import { GanttItem } from "../interfaces"
import ganttReducer, { GanttReducerAction } from "../reducers/ganttReducer"

interface GanttItemsContextType {
  items: Array<GanttItem>
  dispatch?: React.Dispatch<GanttReducerAction> | null
}

const GanttItemsContext = createContext<GanttItemsContextType>({
  items: [],
  dispatch: null,
})

const GanttItemsProvider = ({ children }: { children: ReactNode }) => {
  const [items, dispatch] = useReducer(ganttReducer, [])

  return (
    <GanttItemsContext.Provider value={{ items, dispatch }}>
      {children}
    </GanttItemsContext.Provider>
  )
}

export const useGanttItems = () => useContext(GanttItemsContext)

export default GanttItemsProvider
