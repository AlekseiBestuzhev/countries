import { CountryDetailsType, CountryResponseType } from "app/types";
import axios, { AxiosError } from "axios";

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

export const errorHandler = (error: any) => {
	// It is necessary to use the type 'any' for the argument as 'unknown' type is used in the catch block.
	if (axios.isAxiosError(error)) {
		const axiosError = error as AxiosError;
		if (axiosError.response) {
			return `HTTP Error: ${axiosError.response.status}`;
		} else {
			return `Network Error: ${axiosError.message}`;
		}
	} else {
		return `Error: ${error.message}`;
	}
}