import './iconBtn.css';
import { useContext } from 'react';
import { ThemeCtx } from '../../utils/ThemeCtx';

export default function IconBtn({icon, onClick}) {
    const { theme } = useContext(ThemeCtx)
    return (
        <button onClick={onClick} className={`iconBtnClass ${theme === 'dark' && 'iconBtnClassDark'}`}>
            {icon}
        </button>
    );
}