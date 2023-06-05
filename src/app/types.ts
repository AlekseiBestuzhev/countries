//__________________________RESPONSE_TYPES__________________________

import { InfoPropsType } from "components/Info";

type DayType = "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";

export type RegionType = 'Asia' | 'Oceania' | 'Europe' | 'Americas' | 'Antarctic' | 'Africa';

export type ContinentType = 'Asia' | 'Oceania' | 'Europe' | 'North America' | 'Antarctica' | 'South America' | 'Africa';

type FlagsType = {
	png: string,
	svg: string,
	alt: string
}

type DemonymsItem = {
	f: string,
	m: string
}

export type CurrenciesType = {
	[key: string]: {
		name: string,
		symbol: string
	}
}

export type NativeNameType = {
	[key: string]: {
		official: string,
		common: string
	}
}

export type NameType = {
	common: string,
	nativeName?: NativeNameType,
	official: string,
}

export type LanguagesType = {
	[key: string]: string
}

export type CountryResponseType = {
	name: NameType,
	capital: string[],
	flags: FlagsType,
	population: number,
	region: RegionType
}

export type MapsType = {
	googleMaps: string,
	openStreetMaps: string
}

export type CountryDetailsType = {
	altSpellings: string[],
	area: number,
	borders?: string[],
	capital?: string[],
	capitalInfo: { latlng: number[] },
	car: { signs: string[], side: 'right' | 'left' },
	cca2: string,
	cca3: string,
	ccn3: string,
	cioc?: string,
	coatOfArms: Omit<FlagsType, "alt">,
	continents: ContinentType[],
	currencies?: CurrenciesType,
	demonyms: { eng: DemonymsItem, fra: DemonymsItem },
	fifa?: string,
	flag: string,
	flags: FlagsType,
	gini?: { [key: string]: number },
	idd: { root: string, suffixes: string[] },
	independent: boolean,
	landlocked: boolean,
	languages?: LanguagesType,
	latlng: number[],
	maps: { googleMaps: string, openStreetMaps: string },
	name: NameType,
	population: number,
	postalCode?: { format: string, regex: string },
	region: RegionType,
	startOfWeek: DayType,
	status: string,
	subregion?: string,
	timezones: string[],
	tld: string[],
	translations: NativeNameType,
	unMember: boolean
}





//__________________________OTHER_TYPES__________________________

export type ThemeType = 'light' | 'dark';

export type CardDataType = {
	img: string,
	name: string,
	info: { title: string; description: string }[]
}

export type CardPropsType = {
	img: string,
	name: string,
	info: any[],
	onClick: () => void
}

export type RegionOptionType = {
	value: RegionType,
	label: RegionType
}

export type InfoCountryDataType = Omit<InfoPropsType, 'theme'>;