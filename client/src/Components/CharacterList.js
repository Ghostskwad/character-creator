import { useState, useEffect } from 'react'
import CharacterCard from './CharacterCard'

function CharacterList(){

    const [characters, setCharacters] = useState([])
    const [errors, setErrors] = useState()
    // console.log(characters)

    useEffect(() => {
        fetch('/characters')
        .then(res => {
            if (res.ok) {
                res.json()
        .then(characters => setCharacters(characters)) 
            } else {
                res.json()
                .then(json => setErrors(json.error))
            }
        })
            
    }, []) 

    // console.log(errors)
    const displayChars = characters.map(
            char => <CharacterCard key={char.id} char={char} errors={errors} />
        )


    return(
        <div>
            <h1>All Characters of User displayed here.</h1>
            { errors ? 
                (<div>
                    <h2>Whoops! You don't have any characters yet!</h2>
                    <p>Let's go ahead and make one here.</p>
                </div>)
            :
                (<div>
                    {displayChars}
                </div>)
            }
        </div>
    )
}

export default CharacterList