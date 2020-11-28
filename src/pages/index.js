import React from "react"
import Layout from "../components/layout.js"
import { Link } from "gatsby"

export default function Home() {
    return (
        <Layout>
            <Link to="./about-css-modules">About</Link>
            <div>
                <h1>Hello world!</h1>
            </div>
        </Layout>
    )
}
