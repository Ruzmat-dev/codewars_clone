import { Routes , Route } from "react-router-dom"
import Login from "./components/login/index"
import Home from "./components/home"

function App() {

  return (
    <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home/:id" element={<Home/>} />
    </Routes>
  )
}

export default App
