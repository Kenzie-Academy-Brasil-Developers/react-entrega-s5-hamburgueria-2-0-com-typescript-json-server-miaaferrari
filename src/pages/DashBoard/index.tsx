import axios from "axios";
import { useEffect, useState } from "react"
import { useAuth } from "../../providers/Auth";
import jwtDecode from 'jwt-decode';

interface Preference {
    title: string;
    userId?: string;
    id?: number;
}

interface PreferencesList {
    preferences: Preference[];
    data?: any;
    
} 

interface User {
    name: string;
    email: string;
    id: number;
    password: string;
}

export const Dashboard = () => {
    const [preferenceList, setPreferenceList] = useState<Preference[]>([]);
    const [userInfos, setUserInfos] = useState<User>({} as User)
    const { authToken } = useAuth();
    const decoded: any = jwtDecode(authToken);

    useEffect(() => {
        axios
            .get<User>(`https://hamburgueria-api-maria.herokuapp.com/users/${decoded.sub}`, {
                headers: {
                    Authorization: `Bearer ${authToken}`
                },
            })
            .then((response) => setUserInfos(response.data))
            .catch((error) => console.log(error));
    }, [userInfos]);

    useEffect(() => {
        axios
            .get<PreferencesList>('https://hamburgueria-api-maria.herokuapp.com/preferences', {
                headers: {
                    Authorization: `Bearer ${authToken}`
                },
            })
            .then((response) => console.log(response.data))
            .catch((error) => console.log(error));
    }, [preferenceList]);

    return (
        <div>
            <h1>Bem-vindo(a) {userInfos.name}!</h1>
            <div>
                <h3>As Preferências da maioria de nossos clientes são:</h3>
                {preferenceList.map((item, index) => (
                    <p key={index}>{item.title}</p>
                ))}
            </div>
        </div>
    )
}