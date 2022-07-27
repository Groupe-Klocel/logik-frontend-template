import { Welcome } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import useTranslation from 'next-translate/useTranslation';

type PageComponent = FC & { layout: typeof MainLayout };

const HomePage: PageComponent = () => {
    const { t } = useTranslation();

    return (
        <>
            <Welcome text={t('common:logik')} />
        </>
    );
};

HomePage.layout = MainLayout;

export default HomePage;
