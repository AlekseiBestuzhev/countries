import styled from 'styled-components';
import Select from 'react-select';

export const CustomSelect = styled(Select).attrs({
	styles: {
		control: (provided: any) => ({
			...provided,
			backgroundColor: 'var(--colors-ui-base)',
			color: 'var(--colors-text)',
			borderRadius: 'var(--rad)',
			padding: '0.25rem',
			border: 'none',
			boxShadow: 'var(--shadow)',
			height: '50px'
		}),
		option: (provided: any, state: any) => ({
			...provided,
			cursor: 'pointer',
			color: 'var(--colors-text)',
			backgroundColor: state.isSelected
				? 'var(--colors-bg)'
				: 'var(--colors-ui-base)'
		})
	}
})`
	width: 180px;
	
	& > * {
		box-shadow: var(--shadow);
	}

	& input {
		padding-left: 0.25rem;
	}

	& * {
		color: var(--colors-text) !important;
	}

	& > div[id] {
		background-color: var(--colors-ui-base);
	}
`;