import { Page } from '@components';
import MainLayout from 'components/layouts/MainLayout';
import { FC } from 'react';
import { Row, Col } from 'antd';
import { HeaderContent, MenuCard } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { TagOutlined } from '@ant-design/icons';

type PageComponent = FC & { layout: typeof MainLayout };

const menuDatas = [
    {
        title: 'menu:stock-management',
        icon: <TagOutlined />,
        path: '/'
    },
    {
        title: 'menu:preparation-management',
        icon: <TagOutlined />,
        path: '/'
    },
    {
        title: 'menu:cycle-counts',
        icon: <TagOutlined />,
        path: '/'
    },
    {
        title: 'menu:preparatory-tour',
        icon: <TagOutlined />,
        path: '/'
    },
    {
        title: 'menu:shipping',
        icon: <TagOutlined />,
        path: '/'
    },
    {
        title: 'menu:reception',
        icon: <TagOutlined />,
        path: '/'
    },
    {
        title: 'menu:fabrication',
        icon: <TagOutlined />,
        path: '/'
    },
    {
        title: 'menu:change-package',
        icon: <TagOutlined />,
        path: '/'
    },
    {
        title: 'menu:personal-info',
        icon: <TagOutlined />,
        path: '/'
    },
    {
        title: 'menu:vocal-preparation',
        icon: <TagOutlined />,
        path: '/'
    },
    {
        title: 'menu:palletisation',
        icon: <TagOutlined />,
        path: '/'
    },
    {
        title: 'menu:misc',
        icon: <TagOutlined />,
        path: '/misc'
    }
];

const HomePage: PageComponent = () => {
    const { t } = useTranslation();
    return (
        <>
            <HeaderContent title={t('common:menu')} />
            {/* Menu items */}
            <Page>
                <Row style={{ alignItems: 'center' }}>
                    {menuDatas.map(function (mdata, index) {
                        return (
                            <Col key={index} xs={12} sm={8} md={6} lg={6}>
                                <MenuCard
                                    title={t(mdata.title)}
                                    icon={mdata.icon}
                                    path={mdata.path}
                                />
                            </Col>
                        );
                    })}
                </Row>
            </Page>
        </>
    );
};

HomePage.layout = MainLayout;

export default HomePage;
