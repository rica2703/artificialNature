import { jwtDecode } from "jwt-decode"
export const endPoint = "https://26f3-189-150-49-114.ngrok-free.app"

export const decodeToken = () => {
    const token = localStorage.getItem('token');
    if(!token) 
        return null;
    return jwtDecode(token);
}