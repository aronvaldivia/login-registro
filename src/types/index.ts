export interface Person {
  id: string;
  dni: string;
  firstName: string;
  lastName: string;
  position: string;
  birthDate: string;
  age: number;
}

export interface LoginCredentials {
  username: string;
  password: string;
}