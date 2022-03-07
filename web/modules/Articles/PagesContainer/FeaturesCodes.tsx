import { FC } from 'react';
import { Layout } from 'antd';
import { HeaderContent } from '@components';
import { featuresCodesRoutes } from 'modules/Articles/Static/articlesRoutes';
import useTranslation from 'next-translate/useTranslation';
import { FeaturesCodesList } from 'modules/Articles/Elements/FeaturesCodesList';
import styled from 'styled-components';
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';

export interface IFeatureCodesProps {}

export const FeaturesCodes: FC<IFeatureCodesProps> = ({}: IFeatureCodesProps) => {
    let { t } = useTranslation();
    return (
        <>
            <HeaderContent
                title={t('menu:features-codes')}
                routes={featuresCodesRoutes}
                actionsRight={
                    <LinkButton
                        title={t('actions:add2', { name: t('menu:feature-code') })}
                        path="/add-feature-code"
                        type="primary"
                    />
                }
            />
            <FeaturesCodesList />
        </>
    );
};
