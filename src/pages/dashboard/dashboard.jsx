import './dashboard.css';
import { useEffect } from 'react';
import LateralMenu from '../../components/lateralMenu/lateralMenu';
import Header from '../../components/header/header';

export default function Dashboard() {
    useEffect(() => {
        document.title = "Dashboard";
    }, []);

    return (
        <div className={`DashBoardClass`}>
            <LateralMenu />
            <div className='container'>
                <Header />
            </div>
        </div>
    );
}
