import { CountryResponseType, CardDataType } from "app/types";
import { useNavigate } from "react-router-dom";
import { Controls } from "components/Controls";
import { CardSet } from "components/CardSet";
import { useEffect, useState } from "react";
import { countriesAPI } from "app/api";
import { Card } from "components/Card";

const getFiltredCountries = (data: CountryResponseType[], search: string, region: string) => {
	let newData = [...data];
	if (search) {
		newData = data.filter(el => el.name.common.toLowerCase().includes(search.toLowerCase()));
	}
	if (region) {
		newData = data.filter(el => el.region === region);
	}
	return newData;
}

export const GeneralPage = () => {

	const navigate = useNavigate();

	useEffect(() => {
		countriesAPI.getAll()
			.then((res) => setCountries(res));
	}, []);

	const [countries, setCountries] = useState<CountryResponseType[]>([]);
	const [search, setSearch] = useState('');
	const [region, setRegion] = useState<any>('');
	const regionValue = region?.value || '';
	const filteredCountries = getFiltredCountries(countries, search, regionValue);

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
					description: el.capital[0]
				},
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