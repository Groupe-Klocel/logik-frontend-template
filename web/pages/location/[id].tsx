import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import { SingleLocation } from 'modules/Cartography/PagesContainer/SingleLocation';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const LocationPage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <SingleLocation router={router} id={id!} />
        </>
    );
};

LocationPage.layout = MainLayout;

export default LocationPage;
