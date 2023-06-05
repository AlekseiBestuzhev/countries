import { CountryDetailsType, CurrenciesType, NativeNameType } from "app/types";
import { InfoPropsType } from "components/Info";

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

export const dataHandler = (country: CountryDetailsType): InfoPropsType => {
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