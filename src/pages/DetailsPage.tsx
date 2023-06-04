import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from 'react-icons/io5'
import { useEffect, useState } from "react";
import { CountryDetailsType, CurrenciesType, LanguagesType, NativeNameType } from "app/types";
import { Button } from "components/Button";
import { countriesAPI } from "app/api";
import styled from "styled-components";
import { Info } from "components/Info";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 2rem;

	padding: 2rem 0;

	@media (min-width: 767px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
	}
`;

const ImgWrapper = styled.div`
	flex: 0 0 250px;
	width: 100%;
	border-radius: var(--rad);
	box-shadow: var(--shadow);
	overflow: hidden;

	@media (min-width: 767px) {
		flex: 0 0 40%;
	};
`;

export const DetailsPage = () => {

	const [country, setCountry] = useState<CountryDetailsType | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (name) {
			countriesAPI.getCountryDetails(name)
				.then((res) => {
					setCountry(res[0]);
					setLoading(false);
				});
		}
	}, [])

	const { name } = useParams<{ name: string }>();

	const navigate = useNavigate();
	const onClickHandler = () => navigate(-1);

	const getFirst = (obj: NativeNameType): string => {
		const key = Object.keys(obj)[0];
		if (!key) return 'none';
		return obj[key].common;
	}

	const getCurrencies = (obj: CurrenciesType): string[] => {
		const arr: string[] = []
		const keys = Object.keys(obj);
		if (!keys.length) return ['none'];
		for (let item of keys) {
			arr.push(obj[item].name);
		}
		return arr;
	}

	return (
		<>
			<Button onClick={onClickHandler}>
				<IoArrowBack size={'16px'} /> <span>Back</span>
			</Button>
			{
				loading
					? <p>loading</p>
					: <Wrapper>
						<ImgWrapper>
							<img
								style={{ width: '100%' }}
								src={country?.flags.svg}
								alt={country?.flags.alt}
							/>
						</ImgWrapper>
						{country && <Info
							name={country.name.common}
							nativeName={getFirst(country.name.nativeName || {})}
							population={country.population}
							region={country.region}
							subRegion={country.subregion || 'none'}
							capital={country.capital?.[0] || 'none'}
							domain={country.tld}
							currencies={Object.values(getCurrencies(country.currencies || {}))}
							languages={Object.values(country.languages || { lang: 'none' })}
							map={country.maps.googleMaps}
							borders={country.borders || []}
						/>}
					</Wrapper>
			}
		</>
	);
}