import {assets} from "../../assets/assets.js"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <img src={assets.logo} alt="" className="logo" />
    </div>
  )
}

export default Navbar