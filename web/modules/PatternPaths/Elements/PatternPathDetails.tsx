import { AppTable, ContentSpin, DetailsList, LinkButton } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { Divider, Space, Typography } from 'antd';
import { useEffect, useState, useCallback } from 'react';
import { DataQueryType, DEFAULT_ITEMS_PER_PAGE, DEFAULT_PAGE_NUMBER, PaginationType, pathParams, useLocations, usePatternPathLocations } from '@helpers';
import { useAppState } from 'context/AppContext';
import { Table } from 'generated/graphql';
import { EyeTwoTone } from '@ant-design/icons';

const { Title } = Typography;

export interface IPatternPathsDetailsProps {
    details?: any;
}

const PatternPathDetails = ({ details }: IPatternPathsDetailsProps) => {
    const { t } = useTranslation();

    const [locations, setLocations] = useState<DataQueryType>();

    const [pagination, setPagination] = useState<PaginationType>({
        total: undefined,
        current: DEFAULT_PAGE_NUMBER,
        itemsPerPage: DEFAULT_ITEMS_PER_PAGE
    });

    const { isLoading, data, error } = usePatternPathLocations(
        { patternPathId: details.id },
        pagination.current,
        pagination.itemsPerPage,
        null
    );

    // make wrapper function to give child
    const onChangePagination = useCallback(
        (currentPage, itemsPerPage) => {
            // Re fetch data for new current page or items per page
            setPagination({
                total: locations?.count,
                current: currentPage,
                itemsPerPage: itemsPerPage
            });
        },
        [setPagination, locations]
    );

    // Remove locations from all other details
    const locationColumns = [
        {
            title: 'd:id',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'd:order',
            dataIndex: 'order',
            key: 'order'
        },
        // {
        //     title: 'd:flagDouble',
        //     dataIndex: 'flagDouble',
        //     key: 'flagDouble'
        // },
        {
            title: 'actions:actions',
            key: 'actions',
            render: (record: { id: string; name: string }) => (
                <LinkButton
                    icon={<EyeTwoTone />}
                    path={pathParams('/locations/[id]', record.id)}
                />

            )
        }
    ];

    // For pagination
    useEffect(() => {
        if (data) {
            console.log(data)
            setLocations(data?.patternPathLocations);
            setPagination({
                ...pagination,
                total: data?.patternPathLocations?.count
            });
        }
    }, [data]);

    return (
        <>
            <DetailsList details={details} />
            <Divider />
            <Title level={4}>{t('common:associated', { name: t('common:locations') })}</Title>
            {locations ? (
                <AppTable
                    type="associatedLocations"
                    columns={locationColumns}
                    data={locations!.results}
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

export { PatternPathDetails };
