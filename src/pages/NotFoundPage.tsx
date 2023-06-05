import { ThemePropsType } from 'pages/DetailsPage';
import errorLight from 'assets/error-white.svg';
import errorDark from 'assets/error-black.svg';
import styled from "styled-components";
import { FC } from "react";

const Wrapper = styled.div`
	text-align: center;

		img {
			max-width: 400px;
		}
`;

export const NotFoundPage: FC<ThemePropsType> = ({ theme }) => {

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