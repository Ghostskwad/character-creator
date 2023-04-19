import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import axios from 'axios'

function Login({ setUser }){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    let navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/login', {username: username, password: password}).then(res => {
            if (res.ok) {
            res.json()
            .then(user => setUser(user))
        }
    })
    navigate('/characters')   
        setUsername("")
        setPassword("")
    }

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    return(
        <div className="login_form">
            <h1>Login Page here!</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    name="username" 
                    placeholder="Username" 
                    value={username} 
                    onChange={handleUsername}
                />
                <label htmlFor="password">Password</label>
                <input 
                    type="text"
                    name="password" 
                    placeholder="Password"
                    value={password}
                    onChange={handlePassword}
                />
                <br/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
