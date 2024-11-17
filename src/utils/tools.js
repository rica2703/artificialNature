import { jwtDecode } from "jwt-decode"
export const endPoint = "https://d4c2-2806-10ae-f-b24e-216f-4fd8-8e88-3321.ngrok-free.app"

export const decodeToken = () => {
    const token = localStorage.getItem('token');
    if(!token) 
        return null;
    const tokenDecode = jwtDecode(token)
    return tokenDecode;
}