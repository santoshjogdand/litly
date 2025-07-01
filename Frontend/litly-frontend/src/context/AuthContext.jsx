// src/context/AuthContext.js
import { createContext, useState, useEffect, useContext } from 'react';
import axios from '../utils/axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // For initial auth check

    // Auto-login on first load
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get('/me');
                setUser(res.data.data);
            } catch (err) {
                console.error("Error fetching user:", err.response.data.errorMessage)
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, []);


    const login = async (email, password) => {
        try {
            await axios.post('/login', { email, password }); // sets cookie
            const res = await axios.get('/me'); // fetch user
            setUser(res.data.data);
        } catch (error) {
            throw error
        } finally {
            setLoading(false)
        }
    };

    const logout = async () => {
        await axios.post('/logout'); // clears cookie
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoggedIn: !!user, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);