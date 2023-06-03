import { Main } from "components/Main";
import { Header } from "components/Header";
import { DetailsPage } from "pages/DetailsPage";
import { GeneralPage } from "pages/GeneralPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { CountryResponseType } from "app/types";


export const App = () => {

	const [countries, setCountries] = useState<CountryResponseType[]>([]);

	return (
		<>
			<Header />
			<Main>
				<Routes>
					<Route path="/" element={
						<GeneralPage
							countries={countries}
							setCountries={setCountries}
						/>}
					/>
					<Route path='/country/:name' element={<DetailsPage />} />
					<Route path='/*' element={<NotFoundPage />} />
				</Routes>
			</Main>
		</>
	);
}