import './register.css';
import { ThemeCtx } from '../../utils/ThemeCtx';
import Logo from '../../../public/Logo.svg';
import Input from '../../UI/input/input';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';

export default function Register() {
    const { theme } = useContext(ThemeCtx);
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    
    const password = watch('password');

    const onSubmit = (data) => {
        console.log("Datos del formulario:", data);
    };

    return (
        <div className={`RegisterClass ${theme === 'light' ? 'RegisterLight' : 'RegisterDark'}`}>
            <img src={Logo} className='nS logo' />
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
                    <select {...register('role', { required: 'Seleccione un rol' })}>
                        <option value="Administrador">Administrador</option>
                        <option value="Investigador">Investigador</option>
                    </select>
                    {errors.role && <p className="error">{errors.role.message}</p>}

                    <button type="submit">Registrarse</button>
                    <p className='link'>
                        <a href='/'>¿Ya tienes una cuenta? Inicia sesión</a>
                    </p>
                </div>
            </form>
        </div>
    );
}
