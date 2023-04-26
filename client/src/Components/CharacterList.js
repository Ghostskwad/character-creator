import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CreateChars from './CreateChars'
import axios from 'axios'
// import CreateChars from './CreateChars'

function CharacterList(){
    const [characters, setCharacters] = useState([])
    const [errors, setErrors] = useState()
    const navigate = useNavigate()

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

    const handleClick = (character) => {
        navigate("/${character.id}/${character.name}", {state: {character}})
    }
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

export default CharacterList