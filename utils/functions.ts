import { ChangeEvent } from "react"

export const daysToMilliseconds = (days: number) => days * 24 * 60 * 60 * 1000

export function camelize(str: string) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase()
    })
    .replace(/\s+/g, "")
}

export function handler(
  setState: React.Dispatch<React.SetStateAction<string>>
) {
  return (e: ChangeEvent<HTMLInputElement>) => {
    setState(e?.currentTarget?.value)
  }
}

export function preventDefault(event: React.BaseSyntheticEvent) {
  event.preventDefault()
}

export function dateFormatter(date: Date, shorthand: boolean = false) {
  if (shorthand) {
    return date.toLocaleDateString(undefined, {
      day: "numeric",
      month: "short",
    })
  } else {
    const dateTimeFormat = new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    const [
      { value: month },
      ,
      { value: day },
      ,
      { value: year },
    ] = dateTimeFormat.formatToParts(date)
    return `${year}-${month}-${day}`
  }
}

export function normalise(min: number, max: number, val: number) {
  return (val - min) / (max - min)
}

export function lerp(start: number, end: number, t: number) {
  return start * (1 - t) + end * t
}

export function stringToColour(str: string) {
  var hash = 0
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  var colour = "#"
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xff
    colour += ("00" + value.toString(16)).substr(-2)
  }
  return colour
}

export function wrap(
  x: number,
  range: [number, number],
  includeMax: boolean = false
) {
  var max = range[1],
    min = range[0],
    d = max - min
  return x === max && includeMax ? x : ((((x - min) % d) + d) % d) + min
}
