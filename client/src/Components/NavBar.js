import React from "react"
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios'

// component that handles the display of all navigation links
function NavBar({ setUser, user, setCharacters }){
    const navigate = useNavigate()
    
    // function to handle the logout for a user, clearing the user state AND characters associated with user state
    // after logging out successfully, navigates to home page
    const handleLogout = () => {
        axios.delete('/logout').then(res => {
            if (res.status === 204) {
                setUser(null)
                setCharacters([])
            }
        })
        navigate('/')
    }

    return(
        <nav>
            {/* ternary to handle which navigation links to display depending on if a user is logged in or not */}
                {user ?
                (<div className="nav">
                    <button className="nav" onClick={handleLogout}>Logout</button>
                    
                    <Link to="/characters">My Profile</Link>

                    <Link to="/">Home</Link>

                </div>)
                :
                (<div className="nav">
                    <Link to="/">Home</Link>

                    <Link to="/signup">Sign Up</Link>

                    <Link to="/login">Login In</Link> 
                </div>)
                }
        </nav>
    )
}

export default NavBar;