import React from "react"
import {Link} from "react-router-dom"


function NavBar(){

    return(
        <div>
            <nav>
                <Link to="/">Home</Link>
                <br />
                <Link to="/signup">Sign Up</Link>
                <br />
                <Link to="/login">Login In</Link>
            </nav>
        </div>
    )
}

export default NavBar;