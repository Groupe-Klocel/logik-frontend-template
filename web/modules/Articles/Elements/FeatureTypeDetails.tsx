import { CheckCircleOutlined, CloseSquareOutlined, EyeTwoTone } from '@ant-design/icons';
import { AppTable, ContentSpin, DetailsList, LinkButton } from '@components';
import {
    DataQueryType,
    DEFAULT_ITEMS_PER_PAGE,
    DEFAULT_PAGE_NUMBER,
    PaginationType,
    pathParams,
    useFeatureTypeDetails
} from '@helpers';
import { Col, Divider, Row, Space, Typography } from 'antd';
import { useAppState } from 'context/AppContext';
import { Table } from 'generated/graphql';
import useTranslation from 'next-translate/useTranslation';
import { useCallback, useEffect, useState } from 'react';

const { Title } = Typography;

export interface IFeatureTypeDetailsProps {
    details?: any;
}

const FeatureTypeDetails = ({ details }: IFeatureTypeDetailsProps) => {
    const { t } = useTranslation();

    const { globalLocale } = useAppState();
    const searchedLanguage = globalLocale == 'en-US' ? 'en' : globalLocale;
    const refurbDetails = {
        ...details,
        value: globalLocale ? details.translation[searchedLanguage] : details.value
    };
    delete refurbDetails['translation'];
    delete refurbDetails['scope'];
    delete refurbDetails['extras'];
    delete refurbDetails['id'];

    //FeatureTypeDetails list
    const [featureTypeDetails, setFeatureTypeDetails] = useState<DataQueryType>();

    const [pagination, setPagination] = useState<PaginationType>({
        total: undefined,
        current: DEFAULT_PAGE_NUMBER,
        itemsPerPage: DEFAULT_ITEMS_PER_PAGE
    });
    const { permissions } = useAppState();
    const mode =
        !!permissions &&
        permissions.find((p: any) => {
            return p.table.toUpperCase() == Table.FeatureTypeDetail;
        })?.mode;

    // make wrapper function to give child
    const onChangePagination = useCallback(
        (currentPage, itemsPerPage) => {
            // Re fetch data for new current page or items per page
            setPagination({
                total: featureTypeDetails?.count,
                current: currentPage,
                itemsPerPage: itemsPerPage
            });
        },
        [setPagination, featureTypeDetails]
    );

    const { isLoading, data, error } = useFeatureTypeDetails(
        { featureType: parseInt(details.code) },
        pagination.current,
        pagination.itemsPerPage,
        null
    );

    useEffect(() => {
        if (data) {
            setFeatureTypeDetails(data?.featureTypeDetails);
            setPagination({
                ...pagination,
                total: data?.featureTypeDetails?.count
            });
        }
    }, [data]);

    console.log('zzz', data);

    const featureTypeDetailsColumns = [
        {
            title: 'menu:feature-code',
            dataIndex: ['featureCode', 'name'],
            key: ['featureCode', 'name']
        },
        {
            title: 'd:atReception',
            dataIndex: 'atReception',
            key: 'atReception',
            render: (text: any) =>
                text == true ? (
                    <CheckCircleOutlined style={{ color: 'green' }} />
                ) : (
                    <CloseSquareOutlined style={{ color: 'red' }} />
                )
        },
        {
            title: 'd:atPreparation',
            dataIndex: 'atPreparation',
            key: 'atPreparation',
            render: (text: any) =>
                text == true ? (
                    <CheckCircleOutlined style={{ color: 'green' }} />
                ) : (
                    <CloseSquareOutlined style={{ color: 'red' }} />
                )
        },
        {
            title: 'actions:actions',
            key: 'actions',
            render: (record: { id: string; name: string }) => (
                <Space>
                    {mode == null ? (
                        <></>
                    ) : (
                        <>
                            <LinkButton
                                icon={<EyeTwoTone />}
                                path={pathParams('/feature-type/detail/[id]', record.id)}
                            />
                        </>
                    )}
                </Space>
            )
        }
    ];

    return (
        <>
            <DetailsList details={refurbDetails} />
            <Divider />
            <Row justify="space-between">
                <Col span={6}>
                    <Title level={4}>
                        {t('common:associated', { name: t('menu:features-codes') })} (
                        {featureTypeDetails?.count})
                    </Title>
                </Col>
                <Col span={6}>
                    <LinkButton
                        title={t('actions:add2', { name: t('menu:feature-code') })}
                        path={pathParams('/add-feature-type-detail', details.id)}
                        type="primary"
                    />
                </Col>
            </Row>
            {featureTypeDetails ? (
                <AppTable
                    type="associatedFeatureTypeDetails"
                    columns={featureTypeDetailsColumns}
                    data={featureTypeDetails!.results}
                    pagination={pagination}
                    isLoading={isLoading}
                    setPagination={onChangePagination}
                    filter={false}
                />
            ) : (
                <ContentSpin />
            )}
        </>
    );
};

export { FeatureTypeDetails };
