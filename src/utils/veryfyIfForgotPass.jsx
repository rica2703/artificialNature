import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const VerifyForgotPassword = (element, route = '/') => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    useEffect(() => {
        const password = localStorage.getItem('forgotMyPassword');
        if (password && password === 'true') {
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