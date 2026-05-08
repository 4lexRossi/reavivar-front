export interface SignupData {
  email: string;
  password: string;
  name: string;
  birthdate: string;
  phoneNumber?: string;
}

export interface SigninData {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  birthdate?: string;
  phoneNumber?: string;
}

export interface AuthResponse {
  access_token: string;
  user: User;
}
