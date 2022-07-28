import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { HandlingUnitModels } from 'modules/HandlingUnits/PagesContainer/HandlingUnitModels';
import { FC } from 'react';

type PageComponent = FC & { layout: typeof MainLayout };

const HandlingUnitModelsPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <HandlingUnitModels />
        </>
    );
};

HandlingUnitModelsPage.layout = MainLayout;

export default HandlingUnitModelsPage;
