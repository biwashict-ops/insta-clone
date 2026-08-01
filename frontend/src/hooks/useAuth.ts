import { useState, useCallback } from "react";
import axios from "axios";

const API_URL = "http://localhost:3001";

interface LoginCredentials {
  username: string;
  password: string;
}

interface RegisterCredentials {
  username: string;
  email: string;
  fullName: string;
  password: string;
  phoneNumber?: string;
}

interface AuthResponse {
  accessToken: string;
  user: {
    id: string;
    username: string;
    email: string;
    fullName: string;
  };
}

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = useCallback(
    async (credentials: LoginCredentials): Promise<AuthResponse | null> => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.post<AuthResponse>(
          `${API_URL}/auth/login`,
          credentials,
        );
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        return response.data;
      } catch (err: any) {
        const message =
          err.response?.data?.message || "Login failed. Please try again.";
        setError(message);
        return null;
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const register = useCallback(
    async (credentials: RegisterCredentials): Promise<AuthResponse | null> => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.post<AuthResponse>(
          `${API_URL}/auth/register`,
          credentials,
        );
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        return response.data;
      } catch (err: any) {
        const message =
          err.response?.data?.message ||
          "Registration failed. Please try again.";
        setError(message);
        return null;
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  }, []);

  return { login, register, logout, loading, error };
};
