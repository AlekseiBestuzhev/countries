import { CountryResponseType, CardDataType, RegionOptionType } from "app/types";
import { useContext, useEffect, useState } from "react";
import { getFiltredCountries } from "app/utils";
import { useNavigate } from "react-router-dom";
import { Controls } from "components/Controls";
import { CardSet } from "components/CardSet";
import { Loading } from "components/Loading";
import { ThemeContext } from "app/context";
import { countriesAPI } from "app/api";
import { Card } from "components/Card";

export const GeneralPage = () => {
	const { theme } = useContext(ThemeContext);

	const [countries, setCountries] = useState<CountryResponseType[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [search, setSearch] = useState('');
	const [region, setRegion] = useState<RegionOptionType | null>(null);
	const regionValue = region?.value || '';
	const filteredCountries = getFiltredCountries(countries, search, regionValue);

	useEffect(() => {
		countriesAPI.getAll()
			.then((res) => {
				setCountries(res);
				setLoading(false);
			});
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
			{
				loading
					? <Loading theme={theme} />
					: <CardSet>
						{displayCountries}
					</CardSet>
			}
		</>
	);
}