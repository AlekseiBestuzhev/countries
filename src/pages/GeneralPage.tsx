import { CountryResponseType, CardDataType } from "app/types";
import { Controls } from "components/Controls";
import { CardSet } from "components/CardSet";
import { useEffect, FC } from "react";
import { countriesAPI } from "app/api";
import { Card } from "components/Card";
import { useNavigate } from "react-router-dom";

type GeneralPagePropsType = {
	countries: CountryResponseType[],
	setCountries: (countries: CountryResponseType[]) => void
}

export const GeneralPage: FC<GeneralPagePropsType> = ({ countries, setCountries }) => {

	const navigate = useNavigate();

	useEffect(() => {
		if (!countries.length) {
			countriesAPI.getAll()
				.then((res) => setCountries(res));
		}
	}, []);

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
			<Controls />
			<CardSet>
				{displayCountries}
			</CardSet>
		</>
	);
}