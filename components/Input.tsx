interface Props {
  value: string | number
  onChange: (arg: any) => any
  label: string
  type?: "text" | "number" | "password" | "date"
  placeholder?: string
  min?: number
  max?: number
  description?: string
  required?: boolean
  list?: string
}
export default function Input({
  value = "",
  onChange = () => null,
  label,
  description,
  type = "text",
  placeholder,
  min,
  max,
  required = false,
  list,
}: Props) {
  return (
    <>
      <label>
        <span className="label">{label}</span>
        <input
          list={list}
          type={type}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          min={min}
          max={max}
          required={required}
        />
        {description && <span className="description">{description}</span>}
      </label>
      <style jsx>{`
        .label {
          display: block;
          margin-bottom: 0.25em;
        }

        input {
          width: 100%;
          display: block;
          appearance: none;
          font: inherit;
          border-radius: 0.25em;
          padding: 0.25em 0.5em;
          border: 1px solid var(--quarternary-wash);
          margin-bottom: 0.05em;
          background-color: var(--wash-color);
          color: inherit;
        }

        @media (prefers-color-scheme: dark) {
          input {
            background-color: var(--edge-highlight);
          }
        }

        label {
          display: block;
          margin-bottom: 0.15em;
        }

        .description {
          font-size: 0.85em;
          opacity: 0.75;
          display: block;
        }
      `}</style>
    </>
  )
}
