import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function SignUp ({setUser}){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    let navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('/signup', {username: username, password: password}).then(res => {
            if (res.ok) {
            res.json()
            .then(user => setUser(user))
        }
    })
    navigate('/')   
    setUsername("")
    setPassword("")
}

    const handleUsername = (e) =>{
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    return(
        <div>
            <div>
                <h1>Sign up here!</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Enter a new username</label>
                    <input 
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={username}
                        onChange={handleUsername}
                    />
                    <label>Enter a new password</label>
                    <input 
                        type="text"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePassword}
                    />
                    <button type="submit">Signup</button>
                </form>
            </div>
        </div>
        
    )

}

export default SignUp