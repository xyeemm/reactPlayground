import { createContext } from 'react'

interface ThemeContextType {
    theme: string
    toggleTheme: () => void
}
const themeContext = createContext<ThemeContextType | null>(null)

export default themeContext
