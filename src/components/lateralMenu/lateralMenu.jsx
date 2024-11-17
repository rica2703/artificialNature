import './lateralMenu.css';
import IconTextBtn from '../../UI/iconTextBtn/iconTextBtn';
import UserTag from '../../UI/userTag/userTag';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeCtx } from '../../utils/ThemeCtx';
import { PiUserLight } from "react-icons/pi";
import { CiLogout } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { PiBookBookmarkLight } from "react-icons/pi";
export default function LateralMenu() {
    const navigate = useNavigate();
    const { theme } = useContext(ThemeCtx);

    const cerrarSesion = () => {
        localStorage.removeItem('token')
        navigate('/');
    }
    
    return (
        <div className={`LateralMenuClass ${theme === "dark" && "LateralMenuClassDark"}`}>
            <UserTag />
            <div className='containerInfo'>
                <IconTextBtn icon={<PiUserLight />} text="Perfil"/>
                <IconTextBtn onclick={cerrarSesion} icon={<CiLogout />} text="Cerrar sesión"/>
                <IconTextBtn icon={<CiSettings />} text="Ajustes"/>
                <IconTextBtn icon={<PiBookBookmarkLight />} text="Manual"/>
            </div>
        </div>
    )
}