import { useNavigate, useParams } from "react-router-dom";
import { CountryDetailsType, ThemeType } from "app/types";
import { IoArrowBack } from 'react-icons/io5'
import { FC, useEffect, useState } from "react";
import { Button } from "components/Button";
import { countriesAPI } from "app/api";
import styled from "styled-components";
import { Info } from "components/Info";
import { dataHandler } from "utils";

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
	flex: 0 0 300px;
	width: 100%;
	border-radius: var(--rad);
	box-shadow: var(--shadow);
	overflow: hidden;

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

type DetailsPagePropsType = {
	theme: ThemeType,
}

export const DetailsPage: FC<DetailsPagePropsType> = ({ theme }) => {

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
					? <p>loading</p>
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