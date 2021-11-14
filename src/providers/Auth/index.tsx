import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { History } from 'history'
import jwtDecode from "jwt-decode";

interface AuthProviderProps {
    children: ReactNode;
}

interface User {
    id?: number;
    email: string;
    password: string;
    token?: any;
}

interface Response {
    accessToken?: any;
    user?: any;
}

interface AuthProviderData {
    authToken: string;
    signIn: (userData: User) => void;
    logout: () => void;
    history?: History;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({children}: AuthProviderProps) => {
    const history = useHistory();
    const [authToken, setAuthToken] = useState(localStorage.getItem("token") || "");
    

    const signIn = (userData: User) => {
        axios   
            .post<Response>("https://hamburgueria-api-maria.herokuapp.com/signin", userData)
            .then((response) => {
                localStorage.setItem("token", response.data.accessToken);
                setAuthToken(response.data.accessToken);
                history.push('/dashboard');
            })
            .catch((err) => console.log(err));
    }

    const logout = () => {
        history.push("/");
        localStorage.clear();
        setAuthToken("");
    };

    return (
        <AuthContext.Provider value={{authToken, logout, signIn }}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => useContext(AuthContext);