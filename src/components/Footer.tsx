import styled from 'styled-components';

const FooterEl = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	padding: 0.5rem 0;
	min-height: var(--header-height);

	background-color: var(--colors-ui-base);
	box-shadow: var(--shadow);
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	row-gap: 0.5rem;
`;

const Links = styled.ul`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	align-items: center;
	
	@media (min-width: 767px) {
		flex-direction: row;
		column-gap: 2rem;
	}
`;

const Link = styled.a`
	font-weight: var(--fw-bold);
`;

export const Footer = () => {

	return (
		<FooterEl>
			<Wrapper>
				<Links>
					<li><Link href="https://restcountries.com/" target='_blank'>REST Countries API Docs</Link></li>
					<li><Link href="https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca" target='_blank'>Frontend Mentor Challenge</Link></li>
					<li><Link href="https://github.com/AlekseiBestuzhev/countries" target='_blank'>Code of this project</Link></li>
				</Links>
				<p>2023</p>
			</Wrapper>
		</FooterEl>
	);
}