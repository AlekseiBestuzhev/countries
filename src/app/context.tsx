import { FC, ReactNode, createContext, useState } from 'react';
import { ThemeType } from 'app/types';

type ThemeContextType = {
	theme: ThemeType,
	setTheme: (theme: ThemeType) => void
};

export const ThemeContext = createContext<ThemeContextType>({
	theme: 'light',
	setTheme: () => { }
});

type ProviderType = {
	children: ReactNode
};

export const ThemeProvider: FC<ProviderType> = ({ children }) => {
	const [theme, setTheme] = useState<ThemeType>('light');

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
