import { CountryResponseType } from "app/types";
import axios from "axios";

const BASE_URL = 'https://restcountries.com/v3.1/';

const ALL_COUNTRIES = `${BASE_URL}all?fields=name,capital,flags,population,region`;

const searchByCountry = (name: string): string =>
	`${BASE_URL}name/${name}`;

const filterByCode = (codes: string[]) =>
	`${BASE_URL}alpha?codes=${codes.join(',')}`;

const compareByName = (a: CountryResponseType, b: CountryResponseType) =>
	a.name.common.localeCompare(b.name.common);

export const countriesAPI = {
	getAll() {
		return axios.get<CountryResponseType[]>(ALL_COUNTRIES)
			.then((res) => [...res.data].sort(compareByName));
	}
}