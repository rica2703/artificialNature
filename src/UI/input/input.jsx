import './input.css'
import { IoEyeOff, IoEye } from "react-icons/io5";
import { useState, useEffect, useContext } from 'react';
import { ThemeCtx } from '../../utils/ThemeCtx';

export default function Input({ name, placeholder, type, register, error, value }) {
    const { theme } = useContext(ThemeCtx);
    const inputType = type === 'password';
    const [eye, setEye] = useState(false);
    const [show, setShow] = useState(eye);
    const [inputValue, setInputValue] = useState(value || '');

    useEffect(() => {
        setInputValue(value);
    }, [value]);

    const toggleEye = () => {
        setEye(!eye);
        setShow(!eye);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className={`InputClass ${theme === 'light' ? 'lightInput' : 'darkInput'}`}>
            <p>{name}</p>
            <div className='field' style={{ border: error && "1px solid rgb(255, 0, 0)" }}>
                <input 
                    {...register}
                    value={inputValue}
                    onChange={handleInputChange}
                    type={inputType ? (show ? 'text' : 'password') : type} 
                    placeholder={placeholder || (error && error.message)} 
                />
                <div className='showData'>
                    {inputType && (
                        eye ? 
                        <IoEye onClick={toggleEye} className="eye nS" /> 
                        : 
                        <IoEyeOff onClick={toggleEye} className="eye nS" />
                    )}
                </div>
            </div>
            {error && <p className='error'>{error.message}</p>}
        </div>
    );
}
