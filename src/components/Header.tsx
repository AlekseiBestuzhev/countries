import styled from 'styled-components';
import { Container } from 'components/Container';
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { useEffect, useState } from 'react';

const HeaderEl = styled.header`
	background-color: var(--colors-ui-base);
	box-shadow: var(--shadow);`;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 0;
	color: var(--colors-text);`;

const Title = styled.a.attrs({ href: '/' })`
	font-weight: var(--fw-bold);`;

const ThemeSwitcher = styled.div`
	cursor: pointer;
	text-transform: capitalize;`;

export const Header = () => {

	const [theme, setTheme] = useState<'light' | 'dark'>('light');

	const switchTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
	};

	useEffect(() => {
		document.body.setAttribute('data-theme', theme)
	}, [theme]);

	return (
		<HeaderEl>
			<Container>
				<Wrapper>
					<Title>Where is the world?</Title>
					<ThemeSwitcher onClick={switchTheme}>
						{
							theme === 'light'
								? <IoMoonOutline />
								: <IoMoon />
						}
						<span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
					</ThemeSwitcher>
				</Wrapper>
			</Container>
		</HeaderEl>
	);
}