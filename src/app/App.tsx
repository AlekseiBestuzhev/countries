import { Main } from "components/Main";
import { Header } from "components/Header";
import { DetailsPage } from "pages/DetailsPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { Route, Routes } from "react-router-dom";
import { GeneralPage } from "pages/GeneralPage";
import { ThemeType } from "app/types";
import { useState } from "react";

export const App = () => {

	const [theme, setTheme] = useState<ThemeType>('light');

	return (
		<>
			<Header theme={theme} setTheme={setTheme} />
			<Main>
				<Routes>
					<Route path="/" element={<GeneralPage />} />
					<Route path='/country/:name' element={<DetailsPage theme={theme} />} />
					<Route path='/*' element={<NotFoundPage />} />
				</Routes>
			</Main>
		</>
	);
}