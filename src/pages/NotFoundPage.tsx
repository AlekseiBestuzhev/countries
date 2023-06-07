import errorLight from 'assets/error-white.svg';
import errorDark from 'assets/error-black.svg';
import { ThemeContext } from 'app/context';
import styled from "styled-components";
import { useContext } from "react";

const Wrapper = styled.div`
	text-align: center;

		img {
			max-width: 400px;
		}
`;

export const NotFoundPage = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<Wrapper>
			{
				theme === 'light'
					? <img src={errorDark} alt="Not found" />
					: <img src={errorLight} alt="Not found" />
			}
		</Wrapper>
	);
}