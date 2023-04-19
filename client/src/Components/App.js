import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
// import axios from "axios";
import NavBar from "./NavBar.js"
import Home from "./Home.js"
import Login from "./Login.js"
import SignUp from "./SignUp.js"
import Characters from "./Characters.js"

function App() {

  const [user, setUser] = useState(null)

  // useEffect(() => {
  //     axios.get('/me').then(res => {
  //       if (res.ok) {
  //         res.json()
  //     .then((user) => setUser(user))
  //       }
  //     })      
  //   }, [])
  

  useEffect(() => {
    fetch('/me')
    .then(res => {
      if (res.ok) {
        res.json()
    .then((user) => setUser(user))
      }
    })      
  }, [])

  return (
    <div className="App">
      <NavBar setUser={setUser} user={user} />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<SignUp setUser={setUser} />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </div>
  );
}

export default App;