import { DetailsList, LinkButton, ContentSpin, AppTable } from '@components';
import { EyeTwoTone, PrinterOutlined } from '@ant-design/icons';
import {
    pathParams,
    useBarcodes,
    DataQueryType,
    PaginationType,
    DEFAULT_ITEMS_PER_PAGE,
    DEFAULT_PAGE_NUMBER
} from '@helpers';
import useTranslation from 'next-translate/useTranslation';
import { Button, Divider, Space, Typography } from 'antd';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from 'context/AuthContext';
import { BarcodeRenderModal } from 'modules/Barcodes/Elements/BarcodeRenderModal';
import { useAppState } from 'context/AppContext';
import { Table } from 'generated/graphql';
import { ListTableComponent } from './Components/ListTableComponent';

const { Title } = Typography;

export interface IArticleDetailsProps {
    details?: any;
}

const ItemDetails = ({ details }: IArticleDetailsProps) => {
    const { t } = useTranslation();

    const [barcodes, setBarcodes] = useState<DataQueryType>();

    const [pagination, setPagination] = useState<PaginationType>({
        total: undefined,
        current: DEFAULT_PAGE_NUMBER,
        itemsPerPage: DEFAULT_ITEMS_PER_PAGE
    });
    const [showModal, setShowModal] = useState(false);
    const [barcodeName, setBarcodeName] = useState('');
    const { permissions } = useAppState();
    const mode =
        !!permissions &&
        permissions.find((p: any) => {
            return p.table.toUpperCase() == Table.Barcode;
        })?.mode;

    const { isLoading, data, error } = useBarcodes(
        { articleId: details.id },
        pagination.current,
        pagination.itemsPerPage,
        null
    );

    // make wrapper function to give child
    const onChangePagination = useCallback(
        (currentPage, itemsPerPage) => {
            // Re fetch data for new current page or items per page
            setPagination({
                total: barcodes?.count,
                current: currentPage,
                itemsPerPage: itemsPerPage
            });
        },
        [setPagination, barcodes]
    );

    // For pagination
    useEffect(() => {
        if (data) {
            setBarcodes(data?.barcodes);
            setPagination({
                ...pagination,
                total: data?.barcodes?.count
            });
        }
    }, [data]);

    return (
        <>
            <DetailsList details={details} />
            <Divider />
            <Title level={4}>{t('common:associated', { name: t('common:barcodes') })}</Title>
            <ListTableComponent
                useColumns={['id', 'name']}
                sortableColumns={[]}
                queryName={'barcodes'}
                resolverName={'Barcode'}
                actionColumns={[
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
                                            path={pathParams('/barcode/[id]', record.id)}
                                        />
                                        <Button
                                            icon={<PrinterOutlined />}
                                            onClick={() => {
                                                setBarcodeName(record.name);
                                                setShowModal(true);
                                            }}
                                        />
                                    </>
                                )}
                            </Space>
                        )
                    }
                ]}
            />
            <BarcodeRenderModal
                visible={showModal}
                code={barcodeName}
                showhideModal={() => {
                    setShowModal(!showModal);
                }}
            />
        </>
    );
};

export { ItemDetails };
