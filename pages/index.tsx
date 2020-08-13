import GanttChart from "../components/GanttChart"
import GanttItemForm from "../components/GanttItemForm"
import GanttItemsProvider from "../components/GanttItemsContext"
import GanttItemsList from "../components/GanttItemsList"
import Layout from "../components/Layout"

const IndexPage = () => {
  return (
    <GanttItemsProvider>
      <Layout title="Home">
        <div className="form">
          <GanttItemForm />
          <GanttItemsList />
        </div>
        <div className="chart">
          <GanttChart />
        </div>
      </Layout>
      <style jsx>{`
        .form {
          display: grid;
          grid-gap: 1.4rem;
          padding: 1.4rem;
          background-color: var(--secondary-wash);
          height: 100vh;
          align-items: start;
          grid-auto-rows: min-content;
          overflow-y: scroll;
        }

        .chart {
          min-height: 100%;
          display: grid;
          place-items: center stretch;
        }
      `}</style>
      <style global jsx>
        {`
          :root {
            --wash-color: #fefefe;
            --text-color: #111;
            --edge-highlight: rgba(0, 0, 0, 0.1);
            --secondary-wash: rgba(128, 128, 128, 0.1);
            --tertiary-wash: rgba(128, 128, 128, 0.2);
            --quarternary-wash: rgba(128, 128, 128, 0.3);
            --divider-color: rgba(128, 128, 128, 0.05);
          }

          @media (prefers-color-scheme: dark) {
            :root {
              --wash-color: #111;
              --text-color: #fefefe;
              --edge-highlight: rgba(255, 255, 255, 0.15);
            }
          }
          * {
            margin: 0;
            padding: 0;
            position: relative;
            box-sizing: border-box;
          }

          html {
            font: 100%/1.4 system-ui, -apple-system, BlinkMacSystemFont,
              sans-serif;
            color: var(--text-color);
            background-color: var(--wash-color);
          }

          *:focus {
            box-shadow: 0 0 0 2px royalblue;
            border-color: transparent !important;
            outline: none;
          }
        `}
      </style>
    </GanttItemsProvider>
  )
}

export default IndexPage
