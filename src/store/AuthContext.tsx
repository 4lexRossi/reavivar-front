import React, { createContext, useState, useContext, useEffect } from 'react';
import { authService } from '../services/auth.service';
import { User, SigninData, SignupData } from '../types/auth';

interface AuthContextData {
  user: User | null;
  loading: boolean;
  signIn(data: SigninData): Promise<void>;
  signUp(data: SignupData): Promise<void>;
  signOut(): void;
  forgotPassword(email: string): Promise<{ message: string }>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const isAuth = await authService.isAuthenticated();
      if (isAuth) {
        const userData = await authService.getUserData();
        setUser(userData);
      }
      setLoading(false);
    }
    loadStorageData();
  }, []);

  async function signIn(data: SigninData) {
    const response = await authService.signin(data);
    setUser(response.user);
  }

  async function signUp(data: SignupData) {
    await authService.signup(data);
    // Optionally sign in automatically after signup
    await signIn({ email: data.email, password: data.password });
  }

  function signOut() {
    authService.logout();
    setUser(null);
  }

  async function forgotPassword(email: string) {
    return authService.forgotPassword(email);
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut, forgotPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
