import { IoLocationOutline, IoLocationSharp } from "react-icons/io5";
import { Button } from "components/Button";
import { RegionType, ThemeType } from "app/types";
import styled from "styled-components";
import { FC } from "react";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 2rem;

	flex 0 1 470px;
`;

const Title = styled.h2`
	font-size: var(--fs-huge);
	font-weight: var(--fw-bold);
`;

const ListSet = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 2rem;

	@media(min-width: 1024px) {
		flex-direction: row;
		column-gap: 4rem;
	}
`;

const ListItem = styled.li`
	line-height: 1.8;

	& > b {
		font-weight: var(--fw-bold);
	}
`;

const ButtonBlock = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 1rem;

	& > b {
		font-weight: var(--fw-bold);
	}
`;

const Link = styled.a`
	display: flex;
	align-items: center;
	column-gap: 1rem;

	padding: 0.5rem 1rem;

	background-color: var(--colors-ui-base);
	border-radius: var(--rad);
	box-shadow: var(--shadow);
	color: var(--colors-text);
	cursor: pointer;
	border: none;
	outline: none;

	font-family: var(--family);
	font-size: var(--fs-md);
`;

export type InfoPropsType = {
	name: string,
	nativeName: string,
	population: number,
	region: RegionType,
	subRegion: string,
	capital: string,
	domain: string[],
	currencies: string[],
	languages: string[],
	map: string,
	borders: string[],
	theme: ThemeType
}

export const Info: FC<InfoPropsType> = ({
	name,
	nativeName,
	population,
	region,
	subRegion,
	capital,
	domain,
	currencies,
	languages,
	map,
	borders,
	theme
}) => {

	const displayButtons = borders
		.map(el => <Button key={el} variant={'secondary'}>{el}</Button>);

	return (
		<Wrapper>
			<Title>{name}</Title>
			<ListSet>
				<ul>
					<ListItem><b>Native Name:</b> {nativeName}</ListItem>
					<ListItem><b>Population:</b> {population}</ListItem>
					<ListItem><b>Region:</b> {region}</ListItem>
					<ListItem><b>Sub Region:</b> {subRegion}</ListItem>
					<ListItem><b>Capital:</b> {capital}</ListItem>
				</ul>
				<ul>
					<ListItem><b>Top Level Domain:</b> {domain}</ListItem>
					<ListItem><b>Currencies:</b> {currencies.join(', ')}</ListItem>
					<ListItem><b>Languages:</b> {languages.join(', ')}</ListItem>
				</ul>
			</ListSet>
			<ButtonBlock>
				<b>Point At Map:</b>
				<Link href={map} target="_blank">
					<span>Google </span>
					{
						theme === 'light'
							? <IoLocationOutline />
							: <IoLocationSharp />
					}
				</Link>
			</ButtonBlock>
			<ButtonBlock>
				<b>Border Countries:</b>
				{
					borders.length
						? displayButtons
						: <span>No border countries</span>
				}
			</ButtonBlock>


		</Wrapper>
	);
}