interface Props {
  label: string
  onClick: (arg: any) => any
}

export default function Button({ label, onClick }: Props) {
  return (
    <>
      <button onClick={onClick}>{label}</button>
      <style jsx>{`
        button {
          font: inherit;
          font-weight: bold;
          color: #fff;
          background-color: royalblue;
          border-radius: 0.25em;
          border: 0;
          appearance: none;
          cursor: pointer;
          grid-column: 1 / -1;
          padding: 0.5em 1em;
        }
      `}</style>
    </>
  )
}
