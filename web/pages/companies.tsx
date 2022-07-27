import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { Companies } from '../modules/Companies/PagesContainer/Companies';

type PageComponent = FC & { layout: typeof MainLayout };

const CompaniesPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <Companies />
        </>
    );
};

CompaniesPage.layout = MainLayout;

export default CompaniesPage;
