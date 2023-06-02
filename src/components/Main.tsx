import { FC, ReactNode } from "react";
import styled from "styled-components";
import { Container } from "components/Container";

type MainPropsType = {
	children: ReactNode
}

const Wrapper = styled.main`
	padding: 5rem 0 2rem;
	
	@media(min-width: 767px) {
		padding: 6rem 0;
	}
	`

export const Main: FC<MainPropsType> = ({ children }) => {

	return (
		<Wrapper>
			<Container>{children}</Container>
		</Wrapper>
	);
}