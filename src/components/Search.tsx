import { FC } from 'react';
import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';

type SearchPropsType = {
	search: string;
	setSearch: (str: string) => void,
	placeholder: string
}

type InputPropsType = {
	placeholder: string
}

const InputContainer = styled.label`
	display: flex;
	align-items: center;

	width: 100%;
	margin-bottom: 1.rem;
	padding: 1rem 2rem;

	background-color: var(--colors-ui-base);
	border-radius: var(--rad);
	box-shadow: var(--shadow);

	@media(min-width: 767px) {
		margin-bottom: 0;
		width: 280px;
	}
`;

const Input = styled.input.attrs<InputPropsType>(({ placeholder }) => ({
	type: 'search',
	placeholder: placeholder
}))`
	color: var(--colors-text);
	background-color: var(--colors-ui-base);
	margin-left: 2rem;
	border: none;
	outline: none;
`;

export const Search: FC<SearchPropsType> = ({ search, setSearch, placeholder }) => {

	return (
		<InputContainer>
			<IoSearch />
			<Input placeholder={placeholder} />
		</InputContainer>
	);
}