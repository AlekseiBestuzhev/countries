import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { Container } from 'components/Container';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FC, useEffect } from 'react';
import { ThemeType } from "app/types";

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

type HeaderPropsType = {
	theme: ThemeType,
	setTheme: (theme: ThemeType) => void
}

export const Header: FC<HeaderPropsType> = ({ theme, setTheme }) => {

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