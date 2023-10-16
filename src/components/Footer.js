
import LOGO from '../assets/LOGO.webp'
import '../style/header-footer.css'

function Footer (){
    return (
        <footer>
            <div className='footer__items'>
                <img src={LOGO} alt="Logo Kasa noir et blanc" />
                <p>© Ignacio Kingston 2023</p>
            </div>
        </footer>
    )
}

export default Footer