import React from 'react'
import Header from '../../components/header/header';
import IconBtn from '../../UI/iconBtn/iconBtn';
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { useContext } from 'react';
import { ThemeCtx } from '../../utils/ThemeCtx';
import TextLogo from '../../UI/textLogo/textLogo';
import VerifyCodeImg from '../../images/verifyCode.png';
import './verifyCode.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
export default function VerifyCode() {
    const { theme, toggleTheme } = useContext(ThemeCtx);
    const texto = "< regresar al login"
    // alert(theme);
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
                    {/* <a href="" className={` ${theme === 'dark' ?'lightText':'darkText'}`}>{texto}</a> */}
                    <a
                        href=""
                        className={theme === 'light' ? 'text-black ' : 'text-white '}

                    >
                        {texto}{theme}
                    </a>

                    <h1>Verificar código</h1>
                    <p className='textGray'> Se ha enviado un código de autenticación a su correo electrónico.</p>

                    <div className="input-container">
                        <input type={isPasswordVisible ? 'text' : 'password'} id="codigo" placeholder=" "/>
                        <label htmlFor="codigo">Ingresa el código</label>
                        <button type="button" className="toggle-visibility" onClick={togglePasswordVisibility}> {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}</button>
                    </div>
                    <div className='oneLine'>
                        <p>¿No recibiste un código?</p><a href="" className='red'> Reenviar</a>
                    </div>
                    <button className='botonRadial'>Verificar</button>
                </div>
                <div>
                    <img className='imgV' src={VerifyCodeImg} alt="" />
                </div>
            </div>
        </div>
    );
}
