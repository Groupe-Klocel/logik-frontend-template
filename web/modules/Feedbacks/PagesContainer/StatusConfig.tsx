import { FC } from 'react';
import { Layout } from 'antd';
import { HeaderContent } from '@components';
import { statusConfigRoutes } from 'modules/Feedbacks/Static/feedbacksRoutes';
import useTranslation from 'next-translate/useTranslation';
import { StatusConfigList } from 'modules/Feedbacks/Elements/StatusConfigList';
import styled from 'styled-components';
import { LinkButton } from 'components/common/dumb/Buttons/LinkButton';

export interface IStatusConfigProps {}

export const StatusConfig: FC<IStatusConfigProps> = ({}: IStatusConfigProps) => {
    let { t } = useTranslation();
    return (
        <>
            <HeaderContent
                title={t('menu:status-config')}
                routes={statusConfigRoutes}
                actionsRight={
                    <LinkButton
                        title={t('actions:add-status-config-feedback')}
                        path="/add-status-config-feedback"
                    />
                }
            />
            <StatusConfigList />
        </>
    );
};
