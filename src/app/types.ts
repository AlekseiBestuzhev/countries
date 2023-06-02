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

export type CardDataType = {
	img: string,
	name: string,
	info: { title: string; description: string }[]
}

export type CardPropsType = {
	img: string,
	name: string,
	info: any[],
	onClick?: () => void
}