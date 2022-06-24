import {
    ApartmentOutlined,
    AuditOutlined,
    ExportOutlined,
    HourglassOutlined,
    QuestionCircleOutlined,
    SettingOutlined,
    SlidersOutlined
} from '@ant-design/icons';
import { useAuth } from 'context/AuthContext';
import { Menu } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';
import { useAppState } from 'context/AppContext';
import { GetMyInfoQuery, Table, useGetMyInfoQuery } from 'generated/graphql';

const { SubMenu } = Menu;

const SideMenu: FC = () => {
    const { t } = useTranslation('menu');
    const { logout } = useAuth();
    const { permissions } = useAppState();

    const checkPermissionExistance = (tableName: string) => {
        if (!permissions) {
            return false;
        }
        const permission = permissions.find((p: any) => {
            return p.table.toUpperCase() == tableName;
        });
        if (permission) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <Menu mode="inline" className="menu">
            <SubMenu icon={<AuditOutlined />} key="administration" title={t('administration')}>
                <SubMenu key="administration-access-management" title={t('access-management')}>
                    {checkPermissionExistance(Table.WarehouseWorker) ? (
                        <Menu.Item key="administration-access-management-users">
                            <Link href="/users">{t('users')}</Link>
                        </Menu.Item>
                    ) : (
                        <></>
                    )}
                    <Menu.Item key="administration-access-management-groups">
                        <Link href="/groups">{t('groups')}</Link>
                    </Menu.Item>
                    <SubMenu key="administration-rights" title={t('rights')}>
                        <Menu.Item key="administration-rights-group-of-users">
                            <Link href="/groups-of-users">{t('groups-of-users')}</Link>
                        </Menu.Item>
                        <Menu.Item key="administration-rights-group-rights">
                            <Link href="/groups-rights">{t('groups-rights')}</Link>
                        </Menu.Item>
                        <Menu.Item key="administration-rights-users-rights">
                            <Link href="/users-rights">{t('users-rights')}</Link>
                        </Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="administration-feedbacks" title={t('feedbacks')}>
                    <Menu.Item key="administration-feedbacks-movements-config">
                        <Link href="/movements-config">{t('movements-config')}</Link>
                    </Menu.Item>
                    <Menu.Item key="administration-feedbacks-status-config">
                        <Link href="/status-config">{t('status-config')}</Link>
                    </Menu.Item>
                    <Menu.Item key="administration-feedbacks-force-reading">
                        <Link href="/force-reading">{t('force-reading')}</Link>
                    </Menu.Item>
                    <Menu.Item key="administration-feedbacks-force-writing">
                        <Link href="/force-writing">{t('force-writing')}</Link>
                    </Menu.Item>
                    <Menu.Item key="administration-feedbacks-send-stock-image">
                        <Link href="/send-stock-image">{t('send-stock-image')}</Link>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key="administration-settings">
                    <Link href="/settings">{t('settings')}</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu key="configuration" icon={<SettingOutlined />} title={t('configuration')}>
                <Menu.Item key="configuration-companies">
                    <Link href="/companies">{t('companies')}</Link>
                </Menu.Item>
                <SubMenu key="configuration-cartography" title={t('cartography')}>
                    <Menu.Item key="configuration-cartography-blocs">
                        <Link href="/blocs">{t('blocs')}</Link>
                    </Menu.Item>
                    <Menu.Item key="configuration-cartography-locations">
                        <Link href="/locations">{t('locations')}</Link>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key="configuration-carriers">
                    <Link href="/carriers">{t('carriers')}</Link>
                </Menu.Item>
                <Menu.Item key="configuration-stock-statuses">
                    <Link href="/stock-statuses">{t('stock-statuses')}</Link>
                </Menu.Item>
                <SubMenu key="configuration-articles" title={t('articles')}>
                    <SubMenu key="configuration-articles-features" title={t('features')}>
                        <Menu.Item key="configuration-articles-features-codes">
                            <Link href="/features-codes">{t('features-codes')}</Link>
                        </Menu.Item>
                        <Menu.Item key="configuration-articles-features-types">
                            <Link href="/features-types">{t('features-types')}</Link>
                        </Menu.Item>
                    </SubMenu>
                    {checkPermissionExistance(Table.Article) ? (
                        <Menu.Item key="configuration-articles-articles">
                            {' '}
                            <Link href="/articles">{t('articles')}</Link>
                        </Menu.Item>
                    ) : (
                        <></>
                    )}
                    {checkPermissionExistance(Table.Barcode) ? (
                        <Menu.Item key="configuration-articles-barcodes">
                            {' '}
                            <Link href="/barcodes">{t('barcodes')}</Link>
                        </Menu.Item>
                    ) : (
                        <></>
                    )}

                    <Menu.Item key="configuration-articles-blacklisted-barcodes">
                        {' '}
                        <Link href="/blacklisted-barcodes">{t('blacklisted-barcodes')}</Link>
                    </Menu.Item>
                    <Menu.Item key="configuration-articles-sets">
                        {' '}
                        <Link href="/sets">{t('sets')}</Link>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key="configuration-packagings">
                    <Link href="/packagings">{t('packagings')}</Link>
                </Menu.Item>
                <Menu.Item key="configuration-equipments">
                    <Link href="/equipments">{t('equipments')}</Link>
                </Menu.Item>
                <Menu.Item key="configuration-return-codes">
                    <Link href="/return-codes">{t('return-codes')}</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu
                icon={<ApartmentOutlined />}
                key="stock-management"
                title={t('stock-management')}
            >
                <Menu.Item key="stock-management-contents">
                    <Link href="/contents">{t('contents')}</Link>
                </Menu.Item>
                <Menu.Item key="stock-management-purchase-orders">
                    <Link href="/purchase-orders">{t('purchase-orders')}</Link>
                </Menu.Item>
                <Menu.Item key="stock-management-goods-ins">
                    <Link href="/goods-ins">{t('goods-ins')}</Link>
                </Menu.Item>
                <Menu.Item key="stock-management-movements">
                    <Link href="/movements">{t('movements')}</Link>
                </Menu.Item>
                <SubMenu key="stock-management-cycle-counts" title={t('cycle-counts')}>
                    <Menu.Item key="stock-management-cycle-counts-cyle-counts">
                        <Link href="/cycle-counts">{t('cycle-counts')}</Link>
                    </Menu.Item>
                    <Menu.Item key="stock-management-cycle-counts-recommended">
                        <Link href="/recommended">{t('recommended')}</Link>
                    </Menu.Item>
                </SubMenu>
            </SubMenu>
            <SubMenu
                icon={<HourglassOutlined />}
                key="preparation-management"
                title={t('preparation-management')}
            >
                <Menu.Item key="preparation-management-deliveries">
                    <Link href="/deliveries">{t('deliveries')}</Link>
                </Menu.Item>
                <Menu.Item key="preparation-management-boxes">
                    <Link href="/boxes">{t('boxes')}</Link>
                </Menu.Item>
                <Menu.Item key="preparation-management-rounds">
                    <Link href="/rounds">{t('rounds')}</Link>
                </Menu.Item>
                <Menu.Item key="preparation-management-box-checking">
                    <Link href="/box-checking">{t('box-checking')}</Link>
                </Menu.Item>
                <Menu.Item key="preparation-management-manual-recubing">
                    <Link href="/manual-recubing">{t('manual-recubing')}</Link>
                </Menu.Item>
                <Menu.Item key="preparation-management-loads">
                    <Link href="/loads">{t('loads')}</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu icon={<SlidersOutlined />} key="monitoring" title={t('monitoring')}>
                <Menu.Item key="monitoring-dashboard">
                    <Link href="/dashboard">{t('dashboard')}</Link>
                </Menu.Item>
                <Menu.Item key="monitoring-warnings">
                    <Link href="/warning">{t('warning')}</Link>
                </Menu.Item>
                <Menu.Item key="monitoring-status-evolutions">
                    <Link href="/status-evolutions">{t('status-evolutions')}</Link>
                </Menu.Item>
            </SubMenu>
            <Menu.Item icon={<QuestionCircleOutlined />} key="about">
                <Link href="/about">{t('about')}</Link>
            </Menu.Item>
            <Menu.Item icon={<ExportOutlined />} key="logout" onClick={() => logout()}>
                {t('logout')}
            </Menu.Item>
            <Menu.Item key="end" /> {/* Need an empty item for scroll behavior */}
        </Menu>
    );
};

SideMenu.displayName = 'SideMenu';

export { SideMenu };
