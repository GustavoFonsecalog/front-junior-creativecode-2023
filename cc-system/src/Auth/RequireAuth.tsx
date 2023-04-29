import { useContext } from 'react'
import { AuthContext } from "./authContext";
import { Login } from '../pages/Login/login';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth = useContext(AuthContext);

    if (!auth.user) {
        return <Login />
    }

    return children;
}