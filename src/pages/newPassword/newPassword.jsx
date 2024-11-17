import TextLogo from '../../UI/textLogo/textLogo'
import React from 'react'
import IconBtn from '../../UI/iconBtn/iconBtn'
import { useContext } from 'react';
import { ThemeCtx } from '../../utils/ThemeCtx';
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import candadoArtificial from '../../images/candadoArtificial.png';
import './newPassword.css';
function NewPassword() {
    const { theme, toggleTheme } = useContext(ThemeCtx);

    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    };
    return (
        <div className={` ${theme === 'dark' && 'HeaderClassDark'}`}>
            <IconBtn onClick={toggleTheme} icon={theme === 'light' ? <CiLight /> : <CiDark />} />
            <TextLogo />
            <div className='container'>
                <div className='formulario'>

                <h1>Establecer una contraseña</h1>
                <p className='textGray'> Su contraseña anterior ha sido restablecida.  Establezca una <br/> nueva contraseña para su cuenta.</p>
                <div className="input-container">
                    <input className='inputeye' type={isPasswordVisible ? 'text' : 'password'} id="codigo" placeholder=" " />
                    <label htmlFor="codigo">Create password</label>
                    <button type="button" className="toggle-visibility" onClick={togglePasswordVisibility}> {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}</button>
                </div>
                <div className="input-container">
                    <input className='inputeye' type={isPasswordVisible ? 'text' : 'password'} id="codigo" placeholder=" " />
                    <label htmlFor="codigo">Re-enter Password</label>
                    <button type="button" className="toggle-visibility" onClick={togglePasswordVisibility}> {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}</button>
                </div>
                <button className='botonRadialNewPassword'>Establecer contraseña</button>

                </div>
                <img className='imgCandado' src={candadoArtificial} alt="" />

            </div>
        </div>
    )
}

export default NewPassword
