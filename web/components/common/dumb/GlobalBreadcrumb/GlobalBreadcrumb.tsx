import { BreadcrumbType } from '@helpers';
import { Breadcrumb } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { FC } from 'react';

export interface IBreadcrumbProps {
    routes: Array<BreadcrumbType>;
}

const GlobalBreadcrumb: FC<IBreadcrumbProps> = ({ routes }: IBreadcrumbProps) => {
    const { t } = useTranslation();

    return (
        <Breadcrumb>
            {routes.map((item, index) => {
                return item.path ? (
                    <Breadcrumb.Item key={index}>
                        <Link href={item.path}>{t(item.breadcrumbName)}</Link>
                    </Breadcrumb.Item>
                ) : (
                    <Breadcrumb.Item key={index}>{t(item.breadcrumbName)}</Breadcrumb.Item>
                );
            })}
        </Breadcrumb>
    );
};

GlobalBreadcrumb.displayName = 'GlobalBreadcrumb';

export { GlobalBreadcrumb };
