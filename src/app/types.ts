type FlagsType = {
	png: string,
	svg: string,
	alt: string
}

type NativeNameType = {
	[K in string]: {
		official: string,
		common: string
	}
}

type NameType = {
	common: string,
	nativeName: NativeNameType,
	official: string,
}

export type CountryResponseType = {
	name: NameType,
	capital: string[],
	flags: FlagsType,
	population: number,
	region: string
}