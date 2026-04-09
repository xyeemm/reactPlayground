import { useState } from 'react'
import themeContext from './themeContext'

;``

const themeProvider = ({children}:{children: React.ReactNode}) => {
	const [theme, setTheme] = useState('light')
	const toggleTheme = () => {
		setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
	}
	return (
		<themeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</themeContext.Provider>
	)
}

export default themeProvider

// createContext
// provider
// useContext

