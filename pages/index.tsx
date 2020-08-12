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
          background-color: rgba(128, 128, 128, 0.05);
          min-height: 100%;
          align-items: start;
          grid-auto-rows: min-content;
        }

        .chart {
          min-height: 100%;
          display: grid;
          place-items: center;
        }
      `}</style>
      <style global jsx>
        {`
          * {
            margin: 0;
            padding: 0;
            position: relative;
            box-sizing: border-box;
          }

          html {
            font: 100%/1.4 system-ui, -apple-system, BlinkMacSystemFont,
              sans-serif;
          }
        `}
      </style>
    </GanttItemsProvider>
  )
}

export default IndexPage
