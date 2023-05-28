import { useNavigate } from 'react-router-dom'

// Displays preview of each character associated with user
function CharPreview({ character }){

    // useNavigate hook to handle programmatic navigation
    const navigate = useNavigate()

    // function to handle the click on a character and navigate to its details page
    const handleClick = (character) => {
        navigate(`/${character.id}/${character.name}`, {state: {character}})
    }

    return(
    <div onClick={() => handleClick(character)}>
        <h1>{character.name}</h1>
        <h2>{character.character_class_type}</h2>
    </div>
    )
}

export default CharPreview