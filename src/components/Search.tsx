import { ChangeEvent, FC } from 'react';
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
	padding: 1rem 2rem;

	background-color: var(--colors-ui-base);
	border-radius: var(--rad);
	box-shadow: var(--shadow);

	@media(min-width: 767px) {

		width: 350px;
	}
`;

const Input = styled.input.attrs<InputPropsType>(({ placeholder }) => ({
	type: 'search',
	placeholder: placeholder
}))`
	width: 100%;
	color: var(--colors-text);
	background-color: var(--colors-ui-base);
	margin-left: 2rem;
	border: none;
	outline: none;

	&::placeholder {
		color: var(--colors-text);
	}
`;

export const Search: FC<SearchPropsType> = ({ search, setSearch, placeholder }) => {

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	}

	return (
		<InputContainer>
			<IoSearch size={'16px'} />
			<Input
				onChange={onChangeHandler}
				placeholder={placeholder}
				value={search}
			/>
		</InputContainer>
	);
}