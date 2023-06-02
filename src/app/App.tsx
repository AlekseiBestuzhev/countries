import { Controls } from "components/Controls";
import { CardSet } from "components/CardSet";
import { Header } from "components/Header";
import { useEffect, useState } from "react";
import { Main } from "components/Main";
import { countriesAPI } from "app/api";
import { CountryResponseType } from "./types";
import { Card } from "components/Card";

type CardDataType = {
	img: string
	name: string
	info: { title: string; description: string }[]
}

export const App = () => {

	const [countries, setCountries] = useState<CountryResponseType[]>([]);

	useEffect(() => {
		countriesAPI.getAll()
			.then((res: any) => setCountries(res));
	}, [])

	const displayCountries = countries.map(el => {
		const cardData: CardDataType = {
			img: el.flags.svg,
			name: el.name.official,
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