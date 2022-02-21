import { FC } from 'react'
import { Layout } from 'antd'
import { HeaderContent } from '@components'
import { addFeatureTypeRoutes } from 'modules/Articles/Static/articlesRoutes'
import useTranslation from 'next-translate/useTranslation';
import { AddFeatureTypeForm } from 'modules/Articles/Elements/AddFeatureTypeForm'
import styled from 'styled-components'
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';

export interface IAddFeatureTypeProps {

}

export const AddFeatureType: FC<IAddFeatureTypeProps> = ({ }: IAddFeatureTypeProps) => {
	let { t } = useTranslation('actions')
	return (
		<>
			<HeaderContent title={t('add2', { name: "Feature Type" })} routes={addFeatureTypeRoutes} />
				<AddFeatureTypeForm />
		</>
	);
}