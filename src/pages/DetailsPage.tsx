import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CountryDetailsType } from "app/types";
import { Loading } from "components/Loading";
import { IoArrowBack } from 'react-icons/io5'
import { Button } from "components/Button";
import { ThemeContext } from "app/context";
import { dataHandler } from "app/utils";
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
		column-gap: 4rem;
	}
`;

const ImgWrapper = styled.div`
	width: 100%;
	overflow: hidden;
	
	flex: 0 0 250px;

	border-radius: var(--rad);
	box-shadow: var(--shadow);

	@media (min-width: 500px) {
		flex: 0 0 300px;
	}

	@media (min-width: 767px) {
		flex: 0 1 500px;
		height: 300px;
	};
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const DetailsPage = () => {
	const { theme } = useContext(ThemeContext);

	const [country, setCountry] = useState<CountryDetailsType | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	const { name } = useParams<{ name: string }>();
	const navigate = useNavigate();
	const onClickHandler = () => navigate(-1);

	useEffect(() => {
		if (name) {
			countriesAPI.getCountryDetails(name)
				.then((res) => {
					setCountry(res[0]);
					setLoading(false);
				});
		}
	}, [name])

	return (
		<>
			<Button onClick={onClickHandler}>
				<IoArrowBack size={'16px'} /> <span>Back</span>
			</Button>
			{
				loading
					? <Loading theme={theme} />
					: <Wrapper>
						<ImgWrapper>
							<Image
								src={country?.flags.svg}
								alt={country?.flags.alt}
							/>
						</ImgWrapper>
						{country && <Info {...dataHandler(country)} theme={theme} />}
					</Wrapper>
			}
		</>
	);
}