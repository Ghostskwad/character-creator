import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import NavBar from "./NavBar.js"
import Home from "./Home.js"
import Login from "./Login.js"
import SignUp from "./SignUp.js"
// import Users from "./Users.js"
// import Characters from "./Characters.js"
// import Templates from "./Templates.js"

function App() {

  const [user, setUser] = useState(null)

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
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login user={user} setUser={setUser} />} />
        <Route path="/signup" element={<SignUp setUser={setUser} />} />
        {/* <Route path="/users/*" element={<Users />} />  */}
        {/* <Route path="/characters/*" element={<Characters />} /> */}
        {/* <Route path="/templates/*" element={<Templates />} /> */}
      </Routes>
    </div>
  );
}

export default App;