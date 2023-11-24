import React, { createContext, useState, useEffect } from "react";


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [userName, setUserName] = useState();
    const [userPassword, setUserPassword] = useState();

    const login = async () => {
        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: `${userName}`,
                    password: `${userPassword}`
                })
            })
            const data = await response.json();
            setUser(data)
            console.log(data)
        } catch (error) {
            console.log('login server:', error)
        }
    }

    return (
        <UserContext.Provider value={{ user, login, setUserName, setUserPassword }}>
            {children}
        </UserContext.Provider>
    )
}