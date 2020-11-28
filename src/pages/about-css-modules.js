// JavaScript source code
import React from "react"
import styles from "../modules/about-css-modules.module.css"
import Container from "../components/container"
import { Link } from "gatsby"

console.log(styles)

const User = props => (
    <div className={styles.user}>
        <img src={props.avatar} className={styles.avatar} alt="" />
        <div className={styles.description}>
            <h2 className={styles.username}> {props.username} </h2>
            <p className={styles.excerpt}> {props.excerpt} </p>
        </div>
    </div>
)

export default function About() {
    return (
        <Container>
            <Link to="/">Home</Link>

            <h1>About CSS Modules</h1>
            <p>CSS Modules are cool</p>

            <User
                username="Jane Doe"
                avatar="http://www.risenmagazine.com/wp-content/uploads/2016/05/risenmagazine_summer2014_castingcrowns_megangarrett.jpg"
                excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
            <User
                username="Bob Smith"
                avatar="https://www.premierproductions.com/sites/default/files/artists/markhall_cometothewell_hi.jpg"
                excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
        </Container>
    )
}