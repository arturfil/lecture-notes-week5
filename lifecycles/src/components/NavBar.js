import { Link } from "react-router-dom"

const NavBar = () => {
  
  return (
    <div>
      <ul>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/timer">Timer</Link> </li>
      </ul>
    </div>
  )
}

export default NavBar;