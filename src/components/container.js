// JavaScript source code
import React from "react"
import containerStyles from "../modules/container.module.css"

export default function Container({ children }) {
    return <div className={containerStyles.container}> {children} </div>
}