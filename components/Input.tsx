interface Props {
  value: string | number
  onChange: (arg: any) => any
  label: string
  type?: "text" | "number" | "password"
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
        }

        input {
          width: 100%;
          display: block;
          appearance: none;
          font: inherit;
          border-radius: 0.25em;
          padding: 0.25em 0.5em;
          border: 1px solid rgba(128, 128, 128, 0.3);
          margin-bottom: 0.05em;
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
