import styled from "styled-components";

export const Button = styled.button`
	display: flex;
	align-items: center;
	column-gap: 1rem;

	padding: 0.5rem 1rem;

	background-color: var(--colors-ui-base);
	border-radius: var(--rad);
	box-shadow: var(--shadow);
	color: var(--colors-text);
	cursor: pointer;
	border: none;
	outline: none;

	font-family: var(--family);
	font-size: var(--fs-md);
`;