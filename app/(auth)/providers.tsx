'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { clearCookies } from '../lib/actions';

// Create context

interface IAuthContext {
    login: () => void;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext({
    login: () => {},
    logout: () => {},
    isAuthenticated: false,
} as IAuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // const { data } = await instance.get('auth/me', {
                //     withCredentials: true,
                // });
                // if (data) {
                //     setIsAuthenticated(true);
                // }
            } catch (error) {
                setIsAuthenticated(false);
                console.error('Ошибка загрузки данных пользователя:', error);
            }
        };
        fetchUserData();
    }, [isAuthenticated]);

    const login = async () => {};

    const logout = () => {
        clearCookies();
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// custom hook fot AuthContext
export function useAuth() {
    return useContext(AuthContext);
}
