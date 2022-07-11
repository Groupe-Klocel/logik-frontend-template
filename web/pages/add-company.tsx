import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { AddCompany } from '../modules/Companies/PagesContainer/AddCompany';

type PageComponent = FC & { layout: typeof MainLayout };

const AddCompanyPage: PageComponent = () => {
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <AddCompany />
        </>
    );
};

AddCompanyPage.layout = MainLayout;

export default AddCompanyPage;
