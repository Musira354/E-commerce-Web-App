import React from 'react'
import { Route, Routes, Link } from "react-router-dom";


function About() {
  return (
    <div>
        <main>
            <h2>Who are we?</h2>
            <p>
            That feels like an existential question, don't you
            think?
            </p>
        </main>
        <nav>
            <Link to="/">HomePage</Link>
        </nav>
    </div>
  )
}

export default About
