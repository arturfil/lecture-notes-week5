import { Link } from "react-router"

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