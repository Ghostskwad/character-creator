import { useNavigate, useLocation } from "react-router-dom"
import axios from 'axios'

// component that renders the details of a single character
function CharacterCard () {

    // useLocation hook to access the state passed in from CharacterList component and save it to a variable
    const { state } = useLocation()
    const character = state.character

    // useNavigate to move back to the character preview component and trigger re-render
    // which currently is not re-rendering
    const navigate = useNavigate()

    // Deletes the character card on a click event
        const handleDelete = (character) => {
        axios.delete(`/characters/${character.id}`)
        navigate('/characters')
    }
    
    return (
        <div>
                <div>
                    <h3>{character.name}</h3>
                    <h5>{character.character_class_type}</h5>
                    <label>Character's History: <br/> {character.history}</label>
                    <p>Character's Stats: 
                        <li>Constitution: {character.stats.constitution}</li>
                        <li>Strength: {character.stats.strength}</li>
                        <li>Dexterity: {character.stats.dexterity}</li>
                        <li>Intelligence: {character.stats.intelligence}</li>
                        <li>Charisma: {character.stats.charisma}</li>
                        <li>Wisdom: {character.stats.wisdom}</li>
                    </p>
                    <button onClick={() => handleDelete(character)}>X</button>
                </div>
        </div>
    )
}

// export the CharacterCard component as default
export default CharacterCard