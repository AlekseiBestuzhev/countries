import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from 'react-icons/io5'
import { useEffect, useState } from "react";
import { Button } from "components/Button";
import { countriesAPI } from "app/api";
import styled from "styled-components";
import { CountryDetailsType } from "app/types";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 2rem;

	@media (min-width: 767px) {
		flex-direction: row;
		justify-content: space-between;
	}
`;

const FlagImg = styled.img`
	flex: 0 0 40%;
`;

export const DetailsPage = () => {

	const [country, setCountry] = useState<CountryDetailsType[]>([]);

	useEffect(() => {
		if (name) {
			countriesAPI.getCountryDetails(name)
				.then((res) => setCountry(res));
		}
	}, [])

	const { name } = useParams<{ name: string }>();

	const navigate = useNavigate();
	const onClickHandler = () => navigate(-1);

	return (
		<>
			<Button onClick={onClickHandler}>
				<IoArrowBack size={'16px'} /> <span>Back</span>
			</Button>
			<Wrapper>
				<FlagImg src={country[0]?.flags.svg || ''} alt={country[0]?.flags.alt || ''} />
				<div style={{ backgroundColor: 'green', flex: '0 0 50%' }}>Details {name}</div>
			</Wrapper>
		</>
	);
}