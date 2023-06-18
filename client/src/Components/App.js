import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import axios from "axios";
import NavBar from "./NavBar"
import Home from "./Home"
import Login from "./Login"
import SignUp from "./SignUp"
import CharacterList from "./CharacterList"
import CharacterCard from "./CharacterCard";
import CreateChars from "./CreateChars";

// Parent component for the application
function App() {
  // state hook to store user data
  const [user, setUser] = useState(null)

  // state hooks to store characters and errors 
  const [characters, setCharacters] = useState([])
  const [errors, setErrors] = useState()


  // useEffect hook to fetch user data AND characters on component mount using Axios API
  useEffect(() => {
    axios.get('/me').then(res => {
      if (res.status === 200) {
        setUser(res.data)
      
        axios.get('/characters')
        .then(res => {
            if (res.status === 200 || res.status === 304) {
                setCharacters(res.data)
            } else {
                setCharacters([])
            }
        })
        .catch(error => {
            setErrors(error.response.status)
    })
      }
    }) 
  }, [])

  // function to handle a new character being added to the characters array, and having the array update in state
  const createNewChar = (newCharacter) => {
    setCharacters([...characters, newCharacter])
}

// update the state by removing the deleted character from the characters array 
// then pass down to Character Card
const handleCharDelete = (deletedCharacterId) => {
  setCharacters(prevChars => prevChars.filter(character => character.id !== deletedCharacterId))
}

  return (
    <div className="App">
      <NavBar setUser={setUser} user={user} setCharacters={setCharacters}/>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<Login setUser={setUser} setCharacters={setCharacters} />} />
        <Route path="/signup" element={<SignUp setUser={setUser} />} />
        <Route path="/characters" element={<CharacterList characters={characters} errors={errors} />} />
        <Route path="/:id/:name" element={<CharacterCard onDelete={handleCharDelete} />} />
        <Route path="/create_character" element={<CreateChars onSubmit={createNewChar} setErrors={setErrors} errors={errors} />} />
      </Routes>
    </div>
  );
}

// export the App component as default
export default App;