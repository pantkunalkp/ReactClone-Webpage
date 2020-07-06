import React from 'react'
import './Jumbotron.css'
import {Link} from 'react-router-dom'

const Jumbotron = () => {
    return (
        <div className = "main-jumbotron">
        <div className = "text">
            <h1>React Bootstrap</h1>
            <span className = "text2">
            <p>The most popular front-end framework<br/ > <strong>Rebuilt </strong> for React.</p>
            </span>
            <span className = "buttons-jumbo">
            <button> <Link to = '/GettingStarted'>Get Started</Link></button>
            <button> <Link to = '/Components'>Components</Link> </button>
            </span>

        </div>
        </div>
    )
}

export default Jumbotron
