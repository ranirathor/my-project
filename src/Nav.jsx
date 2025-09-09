import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div>

        <div className="on">

            <ul>
                <li><Link to="/">Calculate</Link></li>
                <li><Link to="/form">to the form</Link></li>
            </ul>

        </div>


    </div>
  )
}

export default Nav