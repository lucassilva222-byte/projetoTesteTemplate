import { Link } from "react-router-dom"
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/estadios">Estadios</Link>
        <Link to="/jogadores">Jogadores </Link>
        <Link to="/selecoes">Seleções</Link>
        <Link to="/jogos">jogos</Link>
    </nav>
  )
}

export default Navbar
