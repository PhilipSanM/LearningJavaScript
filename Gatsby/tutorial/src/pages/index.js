import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
//My mistake the name of that
export default function Home() {
  return (
    <Layout>
      {/* Doble {}because is JS nOT css */}
      {/* So now You can add color like JS  */}
      <h1 style={{ color: "blue", textTransform: "capitalize" }}>
        Hello world! :), shit Home page
      </h1>
      <Link to="/about"> About </Link>
      <div>
        <a href="/about">reg Link</a>
      </div>
      <div>
        <Link to="/company/history">history</Link>
      </div>

      <h1>Hello again</h1>
      {/* Lets apply the class so: */}
      <div className="home-heading">
        <h1>Hello, but this have a class</h1>
      </div>
    </Layout>
  )
}
