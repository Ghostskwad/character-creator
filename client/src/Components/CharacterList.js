import { useNavigate } from 'react-router-dom'
import CharPreview from './CharPreview'

// component that renders a list of all the characters a user has
function CharacterList({ characters, errors }) {

    // useNavigate hook to handle programmatic navigation
    const navigate = useNavigate()
    
    // map through the characters array to display them
    const displayChars = characters.map(
        (character) => (
            <CharPreview key={character.id} character={character}/>
        ))

    // function to handle navigation to CreateChars component (the form)
    const navigateToCreate = () => {
        navigate("/create_character")
    }

    return(
        <div>
            <h1>My Profile</h1>
            { errors ?
                <div>
                    <h2>Whoops! You don't have any characters yet!</h2>
                    <button onClick={navigateToCreate}>Create a new character!</button>
                </div>
                :
                ( <div>
                    {displayChars}
                    <button onClick={navigateToCreate}>Create a new character!</button>
                </div> )
            }
        </div>
    )
}

// export the CharacterList component as default
export default CharacterList