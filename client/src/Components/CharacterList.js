import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CreateChars from './CreateChars'
import axios from 'axios'
// import CreateChars from './CreateChars'

// component that renders a list of all the characters a user has
function CharacterList() {
     // state hooks to store characters and errors 
    const [characters, setCharacters] = useState([])
    const [errors, setErrors] = useState()

    // useNavigate hook to handle programmatic navigation
    const navigate = useNavigate()

    // useEffect hook to fetch user data on component mount using Axios API
    useEffect(() => {
       axios.get('/characters')
            .then(res => {
                if (res.status === 200) {
                    setCharacters(res.data)
                } else {
                    setErrors(res.data.errors)
                }
            })
            .catch(error => {
                console.log(error)
            })
    }, []) 

    // function to handle the click on a character and navigate to its details page
    const handleClick = (character) => {
        navigate("/${character.id}/${character.name}", {state: {character}})
    }

    // map through the characters array to display them
    const displayChars = characters.map(
        (character) => (
            <div key={character.id} onClick={() => handleClick(character)}>
                <h1>{character.name}</h1>
                <h2>{character.character_class_type}</h2>
            </div>
        ))

    return(
        <div>
            { errors ?
                <CreateChars errors={errors} />
                :
                ( <div>
                    <h1>All Characters of User displayed here.</h1>
                    {displayChars}
                </div> )
            }
        </div>
    )
}

// export the CharacterList component as default
export default CharacterList