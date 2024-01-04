import { Outlet } from "react-router-dom"
import Navbar from "./Components/Shared/Navbar/Navbar"

function App() {


  return (
    <>
    <Navbar></Navbar>
<Outlet></Outlet>
    </>
  )
}

export default App
