import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { HeaderContent, MenuItem } from '@components';
import useTranslation from 'next-translate/useTranslation';

type PageComponent = FC & { layout: typeof MainLayout };

const menuItemDatas = [
    {
        title: 'menu:location-check',
        path: '/'
    },
    {
        title: 'menu:article-check',
        path: '/article-get'
    },
    {
        title: 'menu:box-check',
        path: '/'
    },
    {
        title: 'menu:equipment-check',
        path: '/'
    },
    {
        title: 'menu:set-unbuilding',
        path: '/'
    },
    {
        title: 'menu:set-building',
        path: '/'
    }
];

const MiscPage: PageComponent = () => {
    const { t } = useTranslation();
    return (
        <>
            <HeaderContent title={t('menu:misc')} />
            {menuItemDatas.map(function (data, index) {
                return <MenuItem key={index} title={t(data.title)} path={data.path} />;
            })}
        </>
    );
};

MiscPage.layout = MainLayout;

export default MiscPage;
