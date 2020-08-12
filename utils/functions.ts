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

export function dateFormatter(date: Date) {
  const dateTimeFormat = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  })
  const [
    { value: month },
    ,
    { value: day },
    ,
    { value: year },
  ] = dateTimeFormat.formatToParts(date)
  return `${year}/${month}/${day}`
}
