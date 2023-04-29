import '../Style/Footer.css';
import LogoFoot from '../Assets/Images/LogoNoir.webp'

function Footer() 
{
    return (
        <footer>
            <div className='Div-Footer'>
                <img src={LogoFoot} alt="Logo kasa footer" />
                <span>© 2020 Kasa. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer;