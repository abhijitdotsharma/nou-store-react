import { useAuth } from "../context/auth-context"
import { Navigate, useLocation } from "react-router-dom";


export default function RequiresAuth({children}) {

    const {isLoggedIn} = useAuth();
    const location = useLocation();


    return isLoggedIn? children : <Navigate to="/login" state={{from: location}} replace />
}