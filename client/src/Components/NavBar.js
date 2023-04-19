import React from "react"
import {Link, useNavigate} from "react-router-dom"
// import axios from 'axios'

function NavBar({ setUser, user }){
    const navigate = useNavigate()
    
    // const handleLogout = () => {
    //     axios.delete('/logout').then(res => {
    //         if (res.ok) {
    //             setUser("")
    //         }
    //     })
    //     navigate('/')
    // }
    
    
    const handleLogout = () => {
        fetch('/logout', {
            method: 'DELETE'
        })
        .then(res => {
            if (res.ok) {
                setUser(null)
            }
        })
        navigate('/')
    }

    return(
        <nav>
                {user ?
                (<div className="nav">
                    <button className="nav" onClick={handleLogout}>Logout</button>
                    
                    <Link to="/">Home</Link>

                    <Link to="/characters">My Profile</Link>

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