import apiClient from './api/client';
import { SignupData, SigninData, AuthResponse } from '@/types/auth';
import * as SecureStore from 'expo-secure-store';

export const authService = {
  async signup(data: SignupData): Promise<AuthResponse> {
    const response = await apiClient.post('/auth/signup', data);
    return response.data;
  },

  async signin(data: SigninData): Promise<AuthResponse> {
    const response = await apiClient.post('/auth/signin', data);
    const { access_token, user } = response.data;
    
    // Store token and user data
    await SecureStore.setItemAsync('userToken', access_token);
    await SecureStore.setItemAsync('userData', JSON.stringify(user));
    
    return response.data;
  },

  async logout() {
    await SecureStore.deleteItemAsync('userToken');
    await SecureStore.deleteItemAsync('userData');
  },

  async isAuthenticated() {
    const token = await SecureStore.getItemAsync('userToken');
    return !!token;
  },

  async getUserData() {
    const data = await SecureStore.getItemAsync('userData');
    return data ? JSON.parse(data) : null;
  }
};
