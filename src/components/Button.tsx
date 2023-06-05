import styled from 'styled-components';

type ButtonProps = {
	variant?: 'primary' | 'secondary';
}

export const Button = styled.button<ButtonProps>`
	display: flex;
	align-items: center;
	column-gap: 1rem;
	padding: 0.5rem 1rem;

	background-color: var(--colors-ui-base);border-radius: var(--rad);box-shadow: var(--shadow);
	color: var(--colors-text);
	cursor: pointer;
	border: none;
	outline: none;

	font-family: var(--family);
	font-size: var(--fs-md);

	${({ variant }) =>
		variant === 'secondary' &&
		`
		font-size: var(--fs-sm);
		padding: 0 0.5rem;
	`}
`;
