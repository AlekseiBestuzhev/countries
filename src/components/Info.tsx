import { IoLocationSharp } from "react-icons/io5";
import { Button } from "components/Button";
import { RegionType } from "app/types";
import styled from "styled-components";
import { FC } from "react";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 2rem;

	flex 0 0 40%;
`;

const Title = styled.h2`
	font-size: var(--fs-huge);
	font-weight: var(--fw-bold);
`;

const ListSet = styled.div`
	display: flex;
	gap: 4rem;
`;

const List = styled.ul`

`;

const Item = styled.li`

`;

const ButtonBlock = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 1rem;
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
	borders: string[]
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
	borders
}) => {

	return (
		<Wrapper>
			<Title>{name}</Title>
			<ListSet>
				<List>
					<Item><b>Native Name:</b> {nativeName}</Item>
					<Item><b>Population:</b> {population}</Item>
					<Item><b>Region:</b> {region}</Item>
					<Item><b>Sub Region:</b> {subRegion}</Item>
					<Item><b>Capital:</b> {capital}</Item>
				</List>
				<List>
					<Item><b>Top Level Domain:</b> {domain}</Item>
					<Item><b>Currencies:</b> {currencies.join(', ')}</Item>
					<Item><b>Languages:</b> {languages.join(', ')}</Item>
				</List>
			</ListSet>
			<ButtonBlock>
				<b>point At Map:</b>
				<Link href={map} target="_blank">
					<span>Google </span>
					<IoLocationSharp />
				</Link>
			</ButtonBlock>
			<ButtonBlock>
				<b>Border Countries:</b>
				{
					borders.length
						? borders.map(el => <Button key={el} variant={'secondary'}>{el}</Button>)
						: <span>No border countries</span>
				}
			</ButtonBlock>


		</Wrapper>
	);
}