import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import AuthLayout from '../components/layouts/AuthLayout';
import { ResetPasswordForm } from '../modules/Auth/ResetPasswordForm';

type PageComponent = FC & { layout: typeof AuthLayout };

const ResetPasswordPage: PageComponent = () => {
    return (
        <>
            <ResetPasswordForm />
        </>
    );
};

ResetPasswordPage.layout = AuthLayout;

export default ResetPasswordPage;
