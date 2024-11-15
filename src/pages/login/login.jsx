import './login.css';
import IconBtn from '../../UI/IconBtn/iconBtn';
import Input from '../../UI/Input/Input';
import TextLogo from '../../UI/textLogo/textLogo';
import axios from 'axios';
import { endPoint } from '../../utils/tools';
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ThemeCtx } from '../../utils/ThemeCtx';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Loader from '../../UI/Loader/loader';

export default function Login() {
    const [loader, setLoader] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const navigate = useNavigate();
    const { theme, toggleTheme } = useContext(ThemeCtx);
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        document.title = 'Login';
    }, []);

    const onSubmit = async (data) => {
        setLoader(true);
        if (data.rememberMe) {
            localStorage.setItem('user', data.user);
            localStorage.setItem('email', data.email);
        }
        const sendData = {
            name: data.user,
            email: data.email,
            password: data.password
        }
        await axios.post(`${endPoint}/auth/access`, sendData)
            .then((response) => {
                localStorage.setItem('token', response.data.data.token);
                setLoader(false);
                navigate('/dashboard')
            })
            .catch(() => {
                setLoader(false);
                setNotFound(true);
            });
    };

    return (
        <div className={`LoginClass ${theme === 'light' ? 'loginLight' : 'loginDark'}`}>
            {loader && <Loader />}
            <IconBtn onClick={toggleTheme} icon={theme === 'light' ? <CiLight /> : <CiDark />} customClass="themeCust" />
            <TextLogo />
            <div className='Decoration'>
            </div>
            <form className='LoginForm' onSubmit={handleSubmit(onSubmit)}>
                <div className='formContainer'>
                    <h3 style={{ color: "#8d8d8d" }}>¡Bienvenido!</h3>
                    <p className='Title'>Iniciar sesión</p>
                    <Input
                        register={register('user', { required: 'El usuario es obligatorio' })}
                        name="Usuario" error={errors.user}
                        value={localStorage.getItem('user')}
                    />
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
                        name="E-mail"
                    />
                    <Input
                        register={register('password', { required: 'La contraseña es obligatoria' })}
                        name="Contraseña"
                        error={errors.password}
                        value={localStorage.getItem('password')}
                        type="password"
                    />

                    <div className='Elements'>
                        <label style={{ color: "#8d8d8d" }}>
                            <input
                                type="checkbox"
                                {...register('rememberMe')}
                            />
                            Recordarme
                        </label>
                        <a href='/forgotMyPassword' style={{ color: "#8d8d8d" }}>¿Olvidaste tu contraseña?</a>
                    </div>
                    <button className={`SendBtn ${theme === 'light' ? 'lightSendBtn' : 'darkSendBtn'}`} type="submit">Iniciar sesión</button>
                    <p className='link'>
                        <a href='/register'>¿Todavía no tienes una cuenta? Registrate</a>
                    </p>
                    { notFound && <p className='nS' style={{color: '#ff4747', fontSize: '16px'}}>Credenciales incorrectas</p> }
                </div>
            </form>
        </div>
    );
}
