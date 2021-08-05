import React from 'react'
import { NavLink } from 'react-router-dom'
import './NAvbar.css'

const Navbar = () => {
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <ul >
                        <li className="list nav-item active">
                            <NavLink className="nav-link" to="search"><button type="button" class="btn btn-primary btn1">SEARCH</button></NavLink>
                        </li>

                        <li className="list nav-item active">
                            <NavLink className=" nav-link" to="submit"><button type="button" class="btn btn-primary btn2">SUBMIT</button></NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar