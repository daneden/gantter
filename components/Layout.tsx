import Head from "next/head"
import React, { ReactNode } from "react"

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <>
    <div className="layout">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </div>
    <style jsx>{`
      .layout {
        display: grid;
        grid-template-columns: 300px 1fr;
        min-height: 100vh;
        align-items: start;
      }
    `}</style>
  </>
)

export default Layout
