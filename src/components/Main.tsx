import { Container } from "components/common/Container";
import styled from "styled-components";
import { FC, ReactNode } from "react";

const Wrapper = styled.main`
	flex: 1 0 100%;
	padding: 2rem 0;
	
	@media(min-width: 767px) {
		padding: 4rem 0;
	}
	`

type MainPropsType = {
	children: ReactNode
}

export const Main: FC<MainPropsType> = ({ children }) => {

	return (
		<Wrapper>
			<Container>{children}</Container>
		</Wrapper>
	);
}