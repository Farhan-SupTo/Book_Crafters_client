import { Outlet } from "react-router-dom"
import Navbar from "./Components/Shared/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"

function App() {


  return (
    <>
    <Navbar></Navbar>
<div className="min-h-screen">
<Outlet></Outlet>
</div>
<Footer></Footer>
    </>
  )
}

export default App
