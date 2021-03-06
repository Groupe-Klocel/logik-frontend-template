import { AppHead } from '@components';
import { META_DEFAULTS } from '@helpers';
import { SingleReturnCode } from 'modules/ReturnCodes/PagesContainer/SingleReturnCode';
import { useRouter } from 'next/router';
import { FC } from 'react';
import MainLayout from '../../components/layouts/MainLayout';

type PageComponent = FC & { layout: typeof MainLayout };

const ReturnCodePage: PageComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <AppHead title={META_DEFAULTS.title} />
            <SingleReturnCode router={router} id={id!} />
        </>
    );
};

ReturnCodePage.layout = MainLayout;

export default ReturnCodePage;
