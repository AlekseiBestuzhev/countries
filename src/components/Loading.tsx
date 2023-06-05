import styled from 'styled-components'
import loadingDark from 'assets/loading-dark.svg'
import loadingLight from 'assets/loading-light.svg'
import { ThemeType } from 'app/types'
import { FC } from 'react'

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
		
	width: 100%;	
`
type LoadingType = {
	theme: ThemeType
}

export const Loading: FC<LoadingType> = ({ theme }) => {

	return (
		<Wrapper>
			{
				theme === 'light'
					? <img src={loadingDark} alt="Loading" />
					: <img src={loadingLight} alt="Loading" />
			}
		</Wrapper>
	);
}