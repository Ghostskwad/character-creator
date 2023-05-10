import { useNavigate } from 'react-router-dom'

// component that renders a list of all the characters a user has
function CharacterList({ characters, errors }) {

    // useNavigate hook to handle programmatic navigation
    const navigate = useNavigate()
    
    // map through the characters array to display them
    const displayChars = characters.map(
        (character) => (
            <div key={character.id} onClick={() => handleClick(character)}>
                <h1>{character.name}</h1>
                <h2>{character.character_class_type}</h2>
            </div>
        ))
        
    // function to handle the click on a character and navigate to its details page
    const handleClick = (character) => {
        navigate(`/${character.id}/${character.name}`, {state: {character}})
    }
    // function to handle navigation to CreateChars component (the form)
    const navigateToCreate = () => {
        navigate("/create_character")
    }

    return(
        <div>
            { errors ?
                <div>
                    <h1>My Profile</h1>
                    <h2>Whoops! You don't have any characters yet!</h2>
                    <button onClick={navigateToCreate}>Create a new character!</button>
                </div>
                :
                ( <div>
                    <h1>My Profile</h1>
                    {displayChars}
                    <button onClick={navigateToCreate}>Create a new character!</button>
                </div> )
            }
        </div>
    )
}

// export the CharacterList component as default
export default CharacterList