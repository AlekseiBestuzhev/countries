import { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.article`

`;

const CardImg = styled.img`

`;

const CardBody = styled.div`

`;

const CardTitle = styled.h3`

`;

const CardList = styled.ul`

`;

const CardItem = styled.li`

`;

type CardPropsType = {
	img: string,
	name: string,
	info: any[],
	onClick?: () => void
}

export const Card: FC<CardPropsType> = ({ img, name, info = [], onClick }) => {

	const displayList = info.map(el => (
		<CardItem key={el.title}>
			<b>{el.title}:</b> {el.description}
		</CardItem>
	))

	return (
		<Wrapper onClick={onClick}>
			<CardImg />
			<CardBody>
				<CardTitle>{name}</CardTitle>
				<CardList>
					{displayList}
				</CardList>
			</CardBody>
		</Wrapper>
	);
}