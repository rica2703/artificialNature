import './textLogo.css';
import Logo from '../../../public/Logo.svg';

export default function TextLogo() {
    return(
        <div className='TextLogoClass'>
            <img className='nS' src={Logo}/>
            <p className='nS'>Artificial Nature</p>
        </div>
    )
}