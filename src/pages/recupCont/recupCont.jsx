import './recupCont.css';
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { ThemeCtx } from '../../utils/ThemeCtx';
import IconBtn from '../../UI/IconBtn/iconBtn';
import TextLogo from '../../UI/textLogo/textLogo';
import Input from '../../UI/Input/Input';

export default function RecupCont() {
    const { theme, toggleTheme } = useContext(ThemeCtx);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log("Datos del formulario:", data);
        localStorage.setItem('email', data.email);
    };
    return (
        <div className='RecupContClass'>
            <TextLogo />
            <IconBtn onClick={toggleTheme} icon={theme === 'light' ? <CiLight /> : <CiDark />} customClass="themeCust" />
            <form className='forgotForm' onSubmit={handleSubmit(onSubmit)}>
                <a href='/' style={{ textDecoration: 'none', color: theme === 'light' ? 'black' : 'white' }}><MdOutlineArrowBackIosNew /> Volver a login</a>
                <h2 style={{ margin: '10px 0' }}>¿Olvidaste tu contraseña?</h2>
                <h5>No te preocupes, nos pasa a todos. Ingrese su correo electrónico a continuación para recuperar su contraseña</h5>
                <Input
                    register={register('email', {
                        required: 'El correo electrónico es obligatorio',
                        pattern: {
                            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                            message: 'Correo electrónico inválido'
                        }
                    })}
                    error={errors.email}
                    value={localStorage.getItem('email')}
                    name="E-mail" />
                <button className={`SendBtn ${theme === 'light' ? 'lightSendBtn' : 'darkSendBtn'}`}>Enviar</button>
            </form>
        </div>
    )
}