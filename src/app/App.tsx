import { NotFoundPage } from "pages/NotFoundPage";
import { Route, Routes } from "react-router-dom";
import { DetailsPage } from "pages/DetailsPage";
import { GeneralPage } from "pages/GeneralPage";
import { ThemeProvider } from "app/context";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { Main } from "components/Main";
import styled from "styled-components";

const AppWrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

export const App = () => {

	return (
		<ThemeProvider>
			<AppWrapper>
				<Header />
				<Main>
					<Routes>
						<Route path="/" element={<GeneralPage />} />
						<Route path='/country/:name' element={<DetailsPage />} />
						<Route path='/*' element={<NotFoundPage />} />
					</Routes>
				</Main>
				<Footer />
			</AppWrapper>
		</ThemeProvider>
	);
}