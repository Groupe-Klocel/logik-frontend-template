import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { Locations } from '../modules/Cartography/PagesContainer/Locations';

type PageComponent = FC & { layout: typeof MainLayout };

const LocationsPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <Locations />
        </>
    );
};

LocationsPage.layout = MainLayout;

export default LocationsPage;
