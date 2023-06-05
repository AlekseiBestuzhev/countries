import {
	InfoCountryDataType,
	CountryResponseType,
	CountryDetailsType,
	CurrenciesType,
	NativeNameType
} from "app/types";

export const getFirst = (obj: NativeNameType = {}): string | null => {
	const key = Object.keys(obj)[0];
	if (!key) return null;
	return obj[key].common;
}

export const getCurrencies = (obj: CurrenciesType = {}): string[] | null => {
	const arr: string[] = []
	const keys = Object.keys(obj);
	if (!keys.length) return null;
	for (let item of keys) {
		arr.push(obj[item].name);
	}
	return arr;
}

export const dataHandler = (country: CountryDetailsType): InfoCountryDataType => {
	// Missing data hadler. Some types are optional because of countries haven't properties
	return {
		name: country.name.common,
		nativeName: getFirst(country.name.nativeName) || 'none',
		population: country.population,
		region: country.region,
		subRegion: country.subregion || 'none',
		capital: country.capital?.[0] || 'none',
		domain: country.tld,
		currencies: getCurrencies(country.currencies) || ['none'],
		languages: Object.values(country.languages || { lang: 'none' }),
		map: country.maps.googleMaps,
		borders: country.borders || []
	}
}

export const getFiltredCountries = (data: CountryResponseType[], search: string, region: string): CountryResponseType[] => {
	let newData = [...data];
	if (search) {
		newData = data.filter(el => el.name.common.toLowerCase().includes(search.toLowerCase()));
	}
	if (region) {
		newData = data.filter(el => el.region === region);
	}
	return newData;
}