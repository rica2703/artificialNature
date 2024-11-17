import './lateralMenu.css';
import IconTextBtn from '../../UI/iconTextBtn/iconTextBtn';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeCtx } from '../../utils/ThemeCtx';
import { PiUserLight } from "react-icons/pi";
import { CiLogout } from "react-icons/ci";
export default function LateralMenu() {
    const navigate = useNavigate();
    const { theme } = useContext(ThemeCtx);

    const cerrarSesion = () => {
        localStorage.removeItem('token')
        navigate('/');
    }
    
    return (
        <div className={`LateralMenuClass ${theme === "dark" && "LateralMenuClassDark"}`}>
            <div className='containerInfo'>
                <IconTextBtn icon={<PiUserLight />} text="Perfil"/>
                <IconTextBtn onclick={cerrarSesion} icon={<CiLogout />} text="Cerrar sesión"/>
            </div>
        </div>
    )
}