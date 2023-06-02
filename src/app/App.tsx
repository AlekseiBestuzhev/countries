import { CardDataType, CountryResponseType } from "app/types";
import { Controls } from "components/Controls";
import { CardSet } from "components/CardSet";
import { Header } from "components/Header";
import { useEffect, useState } from "react";
import { Main } from "components/Main";
import { countriesAPI } from "app/api";
import { Card } from "components/Card";

export const App = () => {

	const [countries, setCountries] = useState<CountryResponseType[]>([]);

	useEffect(() => {
		countriesAPI.getAll()
			.then((res) => setCountries(res));
	}, [])

	const displayCountries = countries.map(el => {
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
		}
		return (
			<Card
				key={cardData.name}
				{...cardData}
			/>
		)
	})

	return (
		<>
			<Header />
			<Main>
				<Controls />
				<CardSet>
					{displayCountries}
				</CardSet>
			</Main>
		</>
	);
}