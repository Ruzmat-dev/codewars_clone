import { Routes , Route } from "react-router-dom"
import Login from "./components/login/index"
import Home from "./components/home"
import Auth from "./components/login/auth"
// import User from "./components/user/user"

function App() {

  return (
    <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home/:id" element={<Home/>} />
        <Route path="/home/undefined" element={<Login/>} />
    </Routes>
  )
}

export default App
