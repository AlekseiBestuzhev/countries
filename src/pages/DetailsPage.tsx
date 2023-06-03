import { useParams } from "react-router-dom";

export const DetailsPage = () => {

	const { name } = useParams<{ name: string }>();

	return (
		<>
			Details {name}
		</>
	);
}