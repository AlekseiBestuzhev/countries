import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { Container } from 'components/Container';
import { useContext, useEffect } from 'react';
import { ThemeContext } from "app/context";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderEl = styled.header`
	background-color: var(--colors-ui-base);
	box-shadow: var(--shadow);

	width: 100%;

	position: fixed;
	z-index: 10;
	top: 0;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	height: var(--header-height);

	color: var(--colors-text);
`;

const Title = styled(Link).attrs({ to: '/' })`
	font-weight: var(--fw-norm);
	font-size: var(--fs-md);

	@media(min-width: 767px) {
		font-size: var(--fs-large);
	}
`;

const ThemeSwitcher = styled.div`
	cursor: pointer;
	text-transform: capitalize;
`;

export const Header = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	const switchTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	useEffect(() => {
		document.body.setAttribute('data-theme', theme);
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