import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function SignUp ({setUser}){
    // state to handle input fields
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    // state to handle errors
    const [errors, setErrors] = useState()

    // useNavigate hook to handle programmatic navigation
    let navigate = useNavigate()
    
    // function to submit a new user to the database using a form
    const handleSubmit = (e) => {
        e.preventDefault()
        
        axios.post('/signup', {username: username, password: password})
        .then(res => {
            if (res.status === 201) {
                setUser(res.data)
                navigate('/')   
        } else {
            setErrors(res.data.errors)
        }
    })
    .catch(error => {
        setErrors(error.response.data.errors)
    })
    setUsername("")
    setPassword("")
}

    // functions to handle state changes to input fields
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
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePassword}
                    />
                    <br />
                    {/* ternary to handle error messages if a user does not include a username or password */}
                    { errors ? errors.map(err =>
                        <div>
                            <label className='errors'>{err}</label>
                        </div>) 
                    : null }
                    <br />
                    <button type="submit">Signup</button>
                </form>
            </div>
        </div>
        
    )
}

export default SignUp