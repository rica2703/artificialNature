import './userTag.css';
import { useEffect, useState } from 'react';

export default function UserTag() {
    const [data, setData] = useState();

    useEffect(() => {
        const name = localStorage.getItem('user');
        setData(name);
    }, [])

    return (
        <div className='UserTagClass'>
            <div className='userTag nS'>{data[0]}</div>
            <p className='nS'>{data}</p>
        </div>
    );
}