import { CustomSelect } from "components/CustomSelect";
import { RegionOptionType } from "app/types";
import { Search } from "components/Search";
import styled from "styled-components";
import { FC } from "react";

const options: RegionOptionType[] = [
	{ value: 'Africa', label: 'Africa' },
	{ value: 'Americas', label: 'Americas' },
	{ value: 'Antarctic', label: 'Antarctic' },
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

type ControlsPropsType = {
	search: string,
	region: RegionOptionType | null,
	setRegion: any,
	setSearch: (search: string) => void
}

export const Controls: FC<ControlsPropsType> = ({ search, region, setSearch, setRegion }) => {

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