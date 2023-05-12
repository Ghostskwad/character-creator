import { useNavigate } from 'react-router-dom'

// moved the JSX that was previously on the CharacterList component
// to its own for best practices
function CharPreview({ character }){

    const navigate = useNavigate()

    // function to handle the click on a character and navigate to its details page
    const handleClick = (character) => {
        navigate(`/${character.id}/${character.name}`, {state: {character}})
    }

    // render the JSX that was previously in CharacterList 
    return(
    <div onClick={() => handleClick(character)}>
        <h1>{character.name}</h1>
        <h2>{character.character_class_type}</h2>
    </div>
    )
}

export default CharPreview