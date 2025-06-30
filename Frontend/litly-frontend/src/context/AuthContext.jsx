// src/context/AuthContext.js
import { createContext, useState, useEffect, useContext } from 'react';
import axios from '../utils/axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // const [loading, setLoading] = useState(true); // ✅ Added loading state

    // Auto-login on first load
    // useEffect(() => {
    //     const fetchUser = async () => {
    //         try {
    //             const res = await axios.get('/me'); // returns user if token is valid
    //             setUser(res.data.data);
    //         } catch {
    //             setUser(null); // not logged in
    //         } finally {
    //             setLoading(false); // ✅ Finished loading
    //         }
    //     };
    //     fetchUser();
    // }, []);

    const login = async (email, password) => {
        await axios.post('/login', { email, password }); // sets cookie
        const res = await axios.get('/me'); // fetch user
        // setLoading(true); // ✅ Finished loading
        setUser(res.data.data);
        console.log(user)
    };

    const logout = async () => {
        await axios.post('/logout'); // clears cookie
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoggedIn: !!user}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
