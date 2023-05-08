import { useLocation } from "react-router-dom"

// component that renders the details of a single character
function CharacterCard () {
    // useLocation hook to access the state passed in from CharacterList component and save it to a variable
    const { state } = useLocation()
    const character = state.character
    
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
                </div>
        </div>
    )
}

// export the CharacterCard component as default
export default CharacterCard