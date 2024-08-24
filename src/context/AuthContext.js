import { createContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const checkAuth = () => {
            try {
                const token = localStorage.getItem("token");
                if (token) {
                    setIsAuthenticated(true);
                    if (location.pathname === "/login") {
                        navigate("/", { replace: true });
                    }
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                console.error("Failed to retrieve token from localStorage:", error);
            } finally {
                setLoading(false);
            }
        };
        checkAuth();
    }, [navigate, location.pathname]);

    const login = async (credentials) => {
        try {
            const clientId = uuidv4();
            credentials.client_id = clientId;
            const response = await axios.post('http://localhost:13013/user/login', credentials);
            const { token, user_id, role, refresh_token, username, email, name, server_unique_id } = response.data;
            const localStorageItems = {
                user_id, email, username, token,
                refresh_token, role, name, clientId, server_unique_id
            };
            Object.entries(localStorageItems).forEach(([key, value]) => localStorage.setItem(key, value));
            toast.success("Login successfully.");
            setIsAuthenticated(true);
            navigate("/", { replace: true });

        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    const logout = async (payload) => {
        try {
            const token = localStorage.getItem("token");
            const config = {
                headers: {
                    Authorization: token,
                    "Content-Type": "application/json",
                },
            };
            const response = await axios.post('http://localhost:13013/user/logout', payload, config);
            toast.success(response?.data?.message);
            localStorage.clear();
            setIsAuthenticated(false);
            navigate("/login", { replace: true });
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
