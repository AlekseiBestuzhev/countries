import { CountryResponseType, CardDataType, RegionOptionType } from "app/types";
import { useContext, useEffect, useState } from "react";
import { ErrorInfo } from "components/common/ErrorInfo";
import { countriesAPI, errorHandler } from "app/api";
import { Loading } from "components/common/Loading";
import { getFiltredCountries } from "app/utils";
import { useNavigate } from "react-router-dom";
import { Controls } from "components/Controls";
import { CardSet } from "components/CardSet";
import { ThemeContext } from "app/context";
import { Card } from "components/Card";

export const GeneralPage = () => {
	const { theme } = useContext(ThemeContext);

	const [countries, setCountries] = useState<CountryResponseType[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string>('');

	const [search, setSearch] = useState('');
	const [region, setRegion] = useState<RegionOptionType | null>(null);
	const regionValue = region?.value || '';
	const filteredCountries = getFiltredCountries(countries, search, regionValue);

	useEffect(() => {
		(async () => {
			try {
				const res = await countriesAPI.getAll();
				setCountries(res);
				setLoading(false);
			} catch (err) {
				const errorInfo = errorHandler(err);
				setError(errorInfo);
			}
		})();
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
			{error && <ErrorInfo>{error}</ErrorInfo>}
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