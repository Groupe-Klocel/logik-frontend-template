import { AppHead } from '@components';
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
            <AppHead title="Bee V2" />
            <SingleLocation router={router} id={id!} />
        </>
    );
};

LocationPage.layout = MainLayout;

export default LocationPage;
