import './login.css';
import Input from '../../UI/input/input';
import Logo from '../../../public/Logo.svg';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeCtx } from '../../utils/ThemeCtx';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';

export default function Login() {
    const navigate = useNavigate();
    const { theme, toggleTheme } = useContext(ThemeCtx);
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        document.title = 'Login';
    }, []);

    const onSubmit = (data) => {
        if(data.rememberMe) {
            localStorage.setItem('user', data.user);
            localStorage.setItem('email', data.email);
            localStorage.setItem('password', data.password);
        }

        localStorage.setItem('token', 'token');
        navigate('/dashboard')
    };

    return (
        <div className={`LoginClass ${theme === 'light' ? 'loginLight' : 'loginDark'}`}>
            <img src={Logo} className='nS logo' />
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
                        <a href='' style={{ color: "#8d8d8d" }}>¿Olvidaste tu contraseña?</a>
                    </div>
                    <button type="submit">Iniciar sesión</button>
                    <p className='link'>
                        <a href='/register'>¿Todavía no tienes una cuenta? Registrate</a>
                    </p>
                </div>
            </form>
            <button onClick={toggleTheme}>Cambiar tema</button>
        </div>
    );
}
