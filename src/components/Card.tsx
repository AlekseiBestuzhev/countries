import { CardPropsType } from "app/types";
import styled from "styled-components";
import { FC } from "react";

const Wrapper = styled.article`
	background-color: var(--colors-ui-base);
	box-shadow: var(--shadow);
	border-radius: var(--rad);
	overflow: hidden;
	cursor: pointer;
`;

const CardImg = styled.img`
	width: 100%;
	height: 150px;
	object-fit: cover;
	box-shadow: var(--shadow);
`;

const CardBody = styled.div`
	padding: 1rem 2rem 2rem;

	@media (min-width: 767px) {
		padding: 1rem 1.5rem 2rem;
	}
`;

const CardTitle = styled.h3`
	font-size: var(--fs-md);
	font-weight: var(--fw-bold);
`;

const CardList = styled.ul`
	padding: 1rem 0 0;
`;

const CardItem = styled.li`
	line-height: 1.5;

	& > b {
		font-weight: var(--fw-bold);
	}
`;

export const Card: FC<CardPropsType> = ({ img, name, info = [], onClick }) => {

	const displayList = info.map(el => (
		<CardItem key={el.title}>
			<b>{el.title}:</b> {el.description}
		</CardItem>
	))

	return (
		<Wrapper onClick={onClick}>
			<CardImg src={img} alt={'Flag'} />
			<CardBody>
				<CardTitle>{name}</CardTitle>
				<CardList>
					{displayList}
				</CardList>
			</CardBody>
		</Wrapper>
	);
}