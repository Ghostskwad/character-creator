import { useState, useEffect } from 'react'
import CharacterCard from './CharacterCard'
import CreateChars from './CreateChars'
// import CreateChars from './CreateChars'

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
    // const displayChars = characters.map(
    //         char => <CharacterCard key={char.id} char={char} />
    //     )

    // const addNewChar = (newChar) => {
    //     setCharacters([...characters, newChar])
    // }

    return(
        <div>
            { errors ?
                <CreateChars errors={errors} />
                :
                ( <div>
                    <h1>All Characters of User displayed here.</h1>
                    {/* {displayChars} */}
                </div> )
            }
        </div>
    )
}

export default CharacterList