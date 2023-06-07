import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ErrorInfo } from "components/common/ErrorInfo";
import { countriesAPI, errorHandler } from "app/api";
import { Loading } from "components/common/Loading";
import { Button } from "components/common/Button";
import { CountryDetailsType } from "app/types";
import { IoArrowBack } from 'react-icons/io5'
import { ThemeContext } from "app/context";
import { dataHandler } from "app/utils";
import styled from "styled-components";
import { Info } from "components/Info";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 2rem;

	padding: 2rem 0 0;

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
	const [error, setError] = useState<string>('');

	const { name } = useParams<{ name: string }>();
	const navigate = useNavigate();
	const onClickHandler = () => navigate(-1);

	useEffect(() => {
		(async () => {
			if (name) {
				try {
					const res = await countriesAPI.getCountryDetails(name);
					setCountry(res[0]);
					setLoading(false);
				} catch (err) {
					const errorInfo = errorHandler(err);
					setError(errorInfo);
				}
			}
		})();
	}, [name]);

	return (
		<>
			<Button onClick={onClickHandler}>
				<IoArrowBack size={'16px'} /> <span>Back</span>
			</Button>
			{error && <ErrorInfo>{error}</ErrorInfo>}
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