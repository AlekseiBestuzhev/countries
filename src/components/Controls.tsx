import { useState } from "react";
import styled from "styled-components";
import { Search } from "components/Search";
import { CustomSelect } from "components/CustomSelect";

const options = [
	{ value: 'Africa', label: 'Africa' },
	{ value: 'America', label: 'America' },
	{ value: 'Asia', label: 'Asia' },
	{ value: 'Europe', label: 'Europe' },
	{ value: 'Oceania', label: 'Oceania' }
];

const ControlsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	row-gap: 2rem;

	@media(min-width: 767px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;

export const Controls = () => {

	const [search, setSearch] = useState('');
	const [region, setRegion] = useState<any>('');

	return (
		<ControlsWrapper>
			<Search
				search={search}
				setSearch={setSearch}
				placeholder={"Search for a county..."}
			/>
			<CustomSelect
				options={options}
				placeholder='Filter by Region'
				isSearchable={false}
				isClearable
				value={region}
				onChange={setRegion}
			/>
		</ControlsWrapper>
	);
}