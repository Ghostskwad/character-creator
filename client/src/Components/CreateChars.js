import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function CreateChars({ onSubmit, setErrors, errors }){

    const [name, setName] = useState("")
    const [history, setHistory] = useState("")
    const [characterClass, setCharacterClass] = useState("Select A Class")

    const navigate = useNavigate()

    const handleNewCharForm = (e) => {
        e.preventDefault()
        axios.post('/characters', {
            name, 
            history, 
            character_class: characterClass
        })
        .then(res => {
            if (res.status === 201) { 
                onSubmit(res.data)
            } else {
                setErrors(res.data.errors)
            }
        })
        .catch (error => {
        error.message = "Please select a class."
        setErrors(error.message)
        })
        navigate('/characters')

    }

    const handleCharacterClass = (e) => {
        setCharacterClass(e.target.value)
        }

    return (
        <div>
            <h1>Let's create a new character!</h1>
            <div className='form'>
                <form onSubmit={handleNewCharForm}>
                    <label>Create A New Character</label>
                    <br/>
                    <input 
                        type="text"
                        name="name" 
                        placeholder="New Character Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br/>
                    <input 
                        type="text"
                        name="history" 
                        placeholder="New Character History"
                        value={history}
                        onChange={(e) => setHistory(e.target.value)}
                    />
                    <br/>
                    <select onChange={handleCharacterClass}>
                        <option value="Select A Class">Select a class</option>
                        <option value="Barbarian">Barbarian</option>
                        <option value="Bard">Bard</option>
                        <option value="Cleric">Cleric</option>
                        <option value="Druid">Druid</option>
                        <option value="Rogue">Rogue</option>
                        <option value="Wizard">Wizard</option>
                    </select>
                    <br/>
                    <button type="submit">Submit</button>            
                </form>
                { errors === "Please select a class." ? <label className="errors" >{errors}</label> : null }
                <br/>
            </div>
        </div>
    )
}

export default CreateChars