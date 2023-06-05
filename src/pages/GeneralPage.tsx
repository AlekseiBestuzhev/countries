import { CountryResponseType, CardDataType, RegionOptionType } from "app/types";
import { useNavigate } from "react-router-dom";
import { Controls } from "components/Controls";
import { CardSet } from "components/CardSet";
import { getFiltredCountries } from "utils";
import { useEffect, useState } from "react";
import { countriesAPI } from "app/api";
import { Card } from "components/Card";

export const GeneralPage = () => {
	const [countries, setCountries] = useState<CountryResponseType[]>([]);
	const [search, setSearch] = useState('');
	const [region, setRegion] = useState<RegionOptionType | null>(null);
	const regionValue = region?.value || '';
	const filteredCountries = getFiltredCountries(countries, search, regionValue);

	useEffect(() => {
		countriesAPI.getAll()
			.then((res) => setCountries(res));
	}, []);

	const navigate = useNavigate();

	const displayCountries = filteredCountries.map(el => {
		const cardData: CardDataType = {
			img: el.flags.svg,
			name: el.name.common,
			info: [
				{
					title: 'Population',
					description: el.population.toString()
				},
				{
					title: 'Region',
					description: el.region
				},
				{
					title: 'Capital',
					description: el.capital[0] || 'none'
				}
			]
		};

		const onClickHandler = () => {
			navigate(`/country/${el.name.common}`);
		}

		return (
			<Card
				key={cardData.name}
				{...cardData}
				onClick={onClickHandler}
			/>
		)
	});

	return (
		<>
			<Controls
				search={search}
				region={region}
				setSearch={setSearch}
				setRegion={setRegion}
			/>
			<CardSet>
				{displayCountries}
			</CardSet>
		</>
	);
}