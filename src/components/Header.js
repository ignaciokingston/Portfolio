import { Link } from 'react-router-dom'
import LOGO from '../assets/LOGO.webp'
import '../style/header-footer.css'

function Header (){
    return (
        <header>
            <img  className='header__logo' src={LOGO} alt="Logo Kasa" />
            <nav>
                <li>
                    <Link to="/">Accueil</Link>
                    <Link to="/about">À propos</Link>
                    <Link to="/contact">Contact</Link>
                </li>
            </nav>
        </header>
    )
}

export default Header