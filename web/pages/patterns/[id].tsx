import { AppHead } from '@components';
import { SinglePattern } from 'modules/Patterns/PagesContainer/SinglePattern';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const PatternPage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <AppHead title="Bee V2" />
            <SinglePattern router={router} id={id!} />
        </>
    );
};

PatternPage.layout = MainLayout;

export default PatternPage;
