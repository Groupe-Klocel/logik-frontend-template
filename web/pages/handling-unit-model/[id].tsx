import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import { SingleHandlingUnitModel } from 'modules/HandlingUnits/PagesContainer/SingleHandlingUnitModel';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const HandlingUnitPage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <SingleHandlingUnitModel router={router} id={id!} />
        </>
    );
};

HandlingUnitPage.layout = MainLayout;

export default HandlingUnitPage;
