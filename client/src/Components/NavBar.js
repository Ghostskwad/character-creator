import React from "react"
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios'

function NavBar({ setUser, user }){
const navigate = useNavigate()

    const handleLogout = () => {
        axios.delete('/logout').then(res => {
            if (res.ok) {
                setUser("")
            }
        })
        navigate('/')
    }



    return(
        <div>
                { user ?
                (<nav>
                    <Link to="/">Home</Link>

                    <Link to="/characters">My Profile</Link>

                    <button onClick={handleLogout}>Logout</button>
                </nav>)
                :
                (<nav>
                    <Link to="/">Home</Link>

                    <Link to="/signup">Sign Up</Link>

                    <Link to="/login">Login In</Link> 
                </nav>)
                }
        </div>
    )
}

export default NavBar;