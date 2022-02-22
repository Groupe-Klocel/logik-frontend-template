import { Welcome } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';

type PageComponent = FC & { layout: typeof MainLayout };

const ContentsPage: PageComponent = () => {
    return (
        <>
            <Welcome text="You are on Contents Page" />
        </>
    );
};

ContentsPage.layout = MainLayout;

export default ContentsPage;
