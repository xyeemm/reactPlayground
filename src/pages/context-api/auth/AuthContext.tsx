import { createContext } from "react"
export interface User {
    name: string;
    email: string;
}
interface AuthConextType {
    user: User | null;
    login: (user: User)=> void;
    logout:()=> void;
}
export const AuthContext = createContext<AuthConextType | null>(null)

