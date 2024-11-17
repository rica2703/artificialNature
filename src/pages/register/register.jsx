import './register.css';
import { ThemeCtx } from '../../utils/ThemeCtx';
import { endPoint } from '../../utils/tools';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Input from '../../UI/Input/Input';
import IconBtn from '../../UI/iconBtn/iconBtn';
import { CiLight } from 'react-icons/ci';
import { CiDark } from 'react-icons/ci';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import TextLogo from '../../UI/textLogo/textLogo';
import Loader from '../../UI/Loader/loader';
import { useState } from 'react';

export default function Register() {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeCtx);
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const onSubmit = (data) => {
        setLoader(true);
        const url = `${endPoint}/auth/create`;
        const objet = {
            name: data.user,
            email: data.email,
            password: data.password
        }
        axios.post(url, objet).then(() => {
            setLoader(false);
            navigate('/');
        }).catch(() => {
            setLoader(false);
        });
    };

    return (
        <div className={`RegisterClass ${theme === 'light' ? 'RegisterLight' : 'RegisterDark'}`}>
            {loader && <Loader />}
            <IconBtn onClick={toggleTheme} icon={theme === 'light' ? <CiLight /> : <CiDark />} customClass="themeCust"/>
            <TextLogo />
            <form className='RegisterForm' onSubmit={handleSubmit(onSubmit)}>
                <div className='formContainer'>
                    <h3 style={{ color: "#8d8d8d" }}>¡Bienvenido!</h3>
                    <p className='Title'>Registráte</p>

                    <Input
                        register={register('user', { required: 'El usuario es obligatorio' })}
                        name="Usuario"
                        error={errors.user}
                    />
                    <Input
                        register={register('email', {
                            required: 'El correo electrónico es obligatorio',
                            pattern: {
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                message: 'Correo electrónico inválido'
                            }
                        })}
                        name="E-Mail"
                        error={errors.email}
                    />
                    <div className='PasswordSection'>
                        <Input
                            type="password"
                            register={register('password', { required: 'La contraseña es obligatoria',
                                validate: value =>
                                    value === watch('confirmPassword') || 'Las contraseñas no coinciden'
                             })}
                            name="Contraseña"
                            error={errors.password}
                        />
                        <Input
                            type="password"
                            register={register('confirmPassword', {
                                required: 'Confirma tu contraseña',
                                validate: value =>
                                    value === watch('password') || 'Las contraseñas no coinciden'
                            })}
                            name="Confirmar contraseña"
                            error={errors.confirmPassword}
                        />
                    </div>

                    <p className='titleRol'>Seleccione su rol</p>
                    {errors.role && <p className="error">{errors.role.message}</p>}

                    <button className={`SendBtn ${theme === 'light' ? 'lightSendBtn' : 'darkSendBtn'}`}  type="submit">Registrarse</button>
                    <p className='link'>
                        <a href='/'>¿Ya tienes una cuenta? Inicia sesión</a>
                    </p>
                </div>
            </form>
        </div>
    );
}
