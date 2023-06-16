import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import axios from 'axios'

// component that renders the details of a single character
function CharacterCard({ onDelete }) {
    const [editable, setEditable] = useState(false)
    const [points, setPoints] = useState(0)

    // useLocation hook to access the state passed in from CharacterList component and save it to a variable
    const { state } = useLocation()
    const character = state.character
    
    // useNavigate to move back to the character preview component and trigger re-render
    // which currently is not re-rendering
    const navigate = useNavigate()
    
    // Deletes the character card on a click event
    const handleDelete = () => {

        axios.delete(`/characters/${character.id}`)
            .then(() => {
                onDelete(character.id)
            })
            .catch((error) => {
                console.error('Error deleting character:', error)
            })
        navigate('/characters')
    }

    const handleSubtract = (stat) => {
        if (points < 30 && character.stats[stat] > 0) {
            setPoints(points + 1)
            console.log(points)
            character.stats[stat] = character.stats[stat] - 1
        }
    }

    const handleAdd = (stat) => {
        if (points > 0) {
            setPoints(points - 1)
            character.stats[stat] = character.stats[stat] + 1
        }
    }

    const handleUpdate = () => {
        if (points === 0) {
            axios.patch(`/characters/${character.id}`, { stats: character.stats })
        } else {
            alert("Please spend the rest of your points.")
        }
    }

    const handleEditable = () => {
        setEditable(!editable)
    }

    console.log(character)

    const stats = Object.keys(character.stats).map((stat) => (
        <li key={stat}>
          {stat.charAt(0).toUpperCase() + stat.slice(1)}: {character.stats[stat]}
        </li>
      ))

      const updateStats = Object.keys(character.stats).map((stat) => (
        <li key={stat}>
          {stat.charAt(0).toUpperCase() + stat.slice(1)}: {character.stats[stat]}
            <button onClick={() => handleSubtract(stat)} disabled={points === 30 || character.stats[stat] === 0}>
            Subtract
            </button>
            <button onClick={() => handleAdd(stat)} disabled={points === 0}>
            Add
            </button>
        </li>
      ))


    return (
        <div>
                <div>
                    <h3>{character.name}</h3>
                    <h5>{character.character_class_type}</h5>
                    <label>Character's History: <br/> {character.history}</label>
                    <p>Character's Stats: 
                        <li>Level: {character.level} </li>
                        {editable ? 
                        <div>
                            {updateStats}
                            <button onClick={handleUpdate}>{`Update ${character.name}`}</button>
                            <p>Available Points: {points}</p>
                        </div> : 
                        <div>
                            {stats}
                        </div>}
                    </p>
                    <button onClick={handleEditable}>{editable ? "Cancel" : `Edit ${character.name}`}</button>
                    <button onClick={handleDelete}>{`Delete ${character.name}`}</button>
                </div>
        </div>
    )
}

// export the CharacterCard component as default
export default CharacterCard