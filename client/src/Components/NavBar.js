import React from "react"
import {Link} from "react-router-dom"


function NavBar(){

    return(
        <div>
            <nav>
                <Link to="/">Home</Link>

                <Link to="/signup">Sign Up</Link>

                <Link to="/login">Login In</Link>
            </nav>
        </div>
    )
}

export default NavBar;