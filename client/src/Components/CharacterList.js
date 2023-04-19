import { useState, useEffect } from 'react'
import CharacterCard from './CharacterCard'

function CharacterList(){

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch('/characters')
            .then(res => res.json())
            .then(characters => setCharacters(characters))
    }, []) 

    const displayChars = characters.map(
            char => <CharacterCard key={char.id} char={char} />
        )


    return(
        <div>
            <h1>All Characters of User displayed here.</h1>
            <div>{displayChars}</div>
        </div>
    )
}

export default CharacterList