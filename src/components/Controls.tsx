import { useState } from "react";
import { Main } from "./Main";
import { Search } from "components/Search";

export const Controls = () => {

	const [search, setSearch] = useState('');

	return (
		<Main>
			<Search
				search={search}
				setSearch={setSearch}
				placeholder={"Search for a county..."}
			/>
		</Main>
	);
}