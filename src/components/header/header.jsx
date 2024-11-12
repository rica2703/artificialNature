import './header.css';
import { useContext } from 'react';
import IconBtn from '../../UI/iconBtn/iconBtn';
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { ThemeCtx } from '../../utils/ThemeCtx';
import { CiBellOn } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";

export default function Header() {
    const { theme, toggleTheme } = useContext(ThemeCtx);
    return (
        <div className={`HeaderClass ${theme === 'dark' && 'HeaderClassDark'}`}>
            <div className='icons'>
                <IconBtn icon={<CiMenuBurger />} />
                <div className='constainerHeader'>
                    <IconBtn onClick={toggleTheme} icon={theme === 'light' ? <CiLight /> : <CiDark />} />
                    <IconBtn icon={<CiBellOn />} />
                </div>
            </div>
        </div>
    );
}