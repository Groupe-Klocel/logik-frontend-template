// TO REFACTOR
// TO REFACTOR
// TO REFACTOR


import { AppHead } from '@components';
import { Layout } from 'antd';
import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';

const StyledPageContent = styled(Layout.Content)`
	margin: 15px 0 ;
	max-height: 75vh;
`
const StyledActionHeader = styled(Layout.Header)`
  background-color: white;
	height:10vh;
  padding: 0 5px;
`


export interface ICarriersPageProps { }

export const CarriersPage: NextPage<ICarriersPageProps> = () => {
	let { t } = useTranslation('common')


	return (
		<>
			<AppHead title="Bee V2" />
			<div> Carriers Page </div>
		</>
	)
}

CarriersPage.displayName = 'CarriersPage'

export default CarriersPage