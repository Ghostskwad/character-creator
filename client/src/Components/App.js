import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import axios from "axios";
import NavBar from "./NavBar.js"
import Home from "./Home.js"
import Login from "./Login.js"
import SignUp from "./SignUp.js"
import CharacterList from "./CharacterList.js"
import CharacterCard from "./CharacterCard.js";
import CreateChars from "./CreateChars.js";

// Parent component for the application
function App() {

  // state hooks to store characters and errors 
  const [characters, setCharacters] = useState([])
  const [errors, setErrors] = useState()

  // state hook to store user data
  const [user, setUser] = useState(null)

  // useEffect hook to fetch user data on component mount using Axios API
  useEffect(() => {
      axios.get('/me').then(res => {
        if (res.status === 200) {
          setUser(res.data)
        }
      })      
    }, [])

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
              setErrors(error)
          })
  }, []) 

  const createNewChar = (newCharacter) => {
    setCharacters([...characters, newCharacter])
}

  // HTTP request using Fetch API for comparison in process
  // useEffect(() => {
  //   fetch('/me')
  //   .then(res => {
  //     if (res.ok) {
  //       res.json()
  //   .then((user) => setUser(user))
  //     }
  //   })      
  // }, [])

  return (
    <div className="App">
      <NavBar setUser={setUser} user={user} />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<SignUp setUser={setUser} />} />
        <Route path="/characters" element={<CharacterList characters={characters} errors={errors} />} />
        <Route path="/:id/:name" element={<CharacterCard />} />
        <Route path="/create_character" element={<CreateChars onSubmit={createNewChar} setErrors={setErrors} errors={errors} />} />
      </Routes>
    </div>
  );
}

// export the App component as default
export default App;