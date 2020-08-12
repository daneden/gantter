import { createContext } from "react"

const DateRangeContext = createContext({
  start: 0,
  end: Number.MAX_SAFE_INTEGER,
})

export default DateRangeContext
