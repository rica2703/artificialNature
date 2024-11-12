import './iconBtn.css';
import { useContext } from 'react';
import { ThemeCtx } from '../../utils/ThemeCtx';

export default function IconBtn({icon, onClick, customClass}) {
    const { theme } = useContext(ThemeCtx)
    return (
        <button onClick={onClick} className={`iconBtnClass ${customClass} ${theme === "light" ? 'iconBtnClassLight' : 'iconBtnClassDark'}`}>
            {icon}
        </button>
    );
}