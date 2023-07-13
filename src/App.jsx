import { Routes , Route } from "react-router-dom"
import Login from "./components/login/index"
import Home from "./components/home"
// import Auth from "./components/login/auth"
// import User from "./components/user/user"
import Auth from "./components/login/Men"
import Ccomponent from "./components/login/auth"

function App() {

  return (
    <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home/:id" element={<Home/>} />
        {/* <Route path="/home/undefined" element={<Login/>} /> */}
        {/* <Route path="/home/auth" element={<Ccomponent/>} /> */}
    </Routes>
  )
}

export default App
