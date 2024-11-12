import './lateralMenu.css';
import { useContext } from 'react';
import { ThemeCtx } from '../../utils/ThemeCtx';
export default function LateralMenu() {
    const { theme } = useContext(ThemeCtx);
    
    return (
        <div className={`LateralMenuClass ${theme === "dark" && "LateralMenuClassDark"}`}>
            dsfaf
        </div>
    )
}