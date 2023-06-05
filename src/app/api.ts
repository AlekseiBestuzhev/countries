import { CountryDetailsType, CountryResponseType } from "app/types";
import axios from "axios";

const BASE_URL = 'https://restcountries.com/v3.1/';

const ALL_COUNTRIES = `${BASE_URL}all?fields=name,capital,flags,population,region`;

const compareByName = (a: CountryResponseType, b: CountryResponseType) =>
	a.name.common.localeCompare(b.name.common);

export const countriesAPI = {
	async getAll() {
		const res = await axios.get<CountryResponseType[]>(ALL_COUNTRIES);
		return [...res.data].sort(compareByName);
	},
	async getCountryDetails(name: string) {
		const res = await axios.get<CountryDetailsType[]>(`${BASE_URL}name/${name}?fullText=true`);
		return res.data;
	},
	async getNeighbours(codes: string[]) {
		const res = await axios.get<CountryDetailsType[]>(`${BASE_URL}alpha?codes=${codes.join(',')}`);
		return res.data;
	}
}