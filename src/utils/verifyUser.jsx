import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function VeryfyUser({ element, route = '/' }) {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, []);

    useEffect(() => {
        
    }, [isAuthenticated]);

    if (isAuthenticated === null) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        return <Navigate to={route} replace />;
    }

    return element;
}
