import { NotFoundPage } from "pages/NotFoundPage";
import { Route, Routes } from "react-router-dom";
import { DetailsPage } from "pages/DetailsPage";
import { GeneralPage } from "pages/GeneralPage";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { Main } from "components/Main";
import { ThemeType } from "app/types";
import { useState } from "react";
import styled from "styled-components";

const AppWrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

export const App = () => {
	const [theme, setTheme] = useState<ThemeType>('light');

	return (
		<AppWrapper>
			<Header theme={theme} setTheme={setTheme} />
			<Main>
				<Routes>
					<Route path="/" element={<GeneralPage />} />
					<Route path='/country/:name' element={<DetailsPage theme={theme} />} />
					<Route path='/*' element={<NotFoundPage theme={theme} />} />
				</Routes>
			</Main>
			<Footer />
		</AppWrapper>
	);
}