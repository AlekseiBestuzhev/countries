import { FC, ReactNode } from "react";
import styled from "styled-components";
import { Container } from "components/Container";

type MainPropsType = {
	children: ReactNode
}

const Wrapper = styled.main`
	padding: 2rem 0;
	
	@media(min-width: 767px) {
		padding: 4rem 0;
	}
	`

export const Main: FC<MainPropsType> = ({ children }) => {

	return (
		<Wrapper>
			<Container>{children}</Container>
		</Wrapper>
	);
}