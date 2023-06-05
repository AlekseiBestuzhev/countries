import { ThemeType } from "app/types";
import { FC } from "react";
import errorDark from 'assets/error-black.svg';
import errorLight from 'assets/error-white.svg';
import styled from "styled-components";

const Wrapper = styled.div`
	text-align: center;
`;

type NotFoundPageType = {
	theme: ThemeType
}

export const NotFoundPage: FC<NotFoundPageType> = ({ theme }) => {

	return (
		<Wrapper>
			{
				theme === 'light'
					? <img src={errorDark} alt="Not found" style={{ maxWidth: '400px' }} />
					: <img src={errorLight} alt="Not found" style={{ maxWidth: '400px' }} />
			}
		</Wrapper>
	);
}