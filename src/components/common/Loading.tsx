import styled from 'styled-components';
import { ThemeType } from 'app/types';
import { FC } from 'react';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	
	width: 100%;
`;

type LoadingType = {
	theme: ThemeType
}

const Loader = styled.span<LoadingType>`
	width: 52px;
	height: 52px;
	
	display: inline-block;
	position: relative;
	
	border: 3px solid ${(props) => (props.theme === 'light' ? '#000' : '#FFF')};
	border-radius: 50%;

	animation: rotation 1s linear infinite;

	&::after {
		content: '';
		box-sizing: border-box;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 40px;
		height: 40px;
		border-radius: 50%;
		border: 3px solid;
		border-color: ${(props) =>
		props.theme === 'light' ? '#000 transparent' : '#FFF transparent'};
	  }
	}

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;


export const Loading: FC<LoadingType> = ({ theme }) => {

	return (
		<Wrapper>
			<Loader theme={theme} />
		</Wrapper>
	);
}