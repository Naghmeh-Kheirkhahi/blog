
import React, {useState, useEffect, createContext} from "react";


export const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [username, setUsername] = useState(localStorage.getItem('username') || '');
    const [email, setEmail] = useState(localStorage.getItem('email') || '');

    useEffect(() => {
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
    }, [username, email]);

    return (
        <UserContext.Provider value={{username, setUsername, email, setEmail}}>
            {children}
        </UserContext.Provider>
    );
}