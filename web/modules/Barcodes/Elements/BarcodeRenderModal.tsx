import { DetailsList } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { Input, Modal, Typography } from 'antd';
import { useState } from 'react';
import {
    RenderDocumentMutation,
    RenderDocumentMutationVariables,
    useRenderDocumentMutation
} from 'generated/graphql';
import { showError } from '@helpers';
import { useAuth } from 'context/AuthContext';

export interface IBarcodeRenderModalProps {
    visible: boolean;
    code: string;
    showhideModal: () => void;
}

const BarcodeRenderModal = ({ visible, showhideModal, code }: IBarcodeRenderModalProps) => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();

    const [pageNumber, setPageNumber] = useState(1);
    const [isModalVisible, setIsModalVisible] = useState(visible);

    const { mutate } = useRenderDocumentMutation<Error>(graphqlRequestClient, {
        onSuccess: (
            data: RenderDocumentMutation,
            _variables: RenderDocumentMutationVariables,
            _context: any
        ) => {
            if (data.renderDocument.__typename == 'RenderedDocument') {
                window.open(data.renderDocument.url, '_blank');
            }
        },
        onError: () => {
            showError(t('messages:error-barcode-not-render'));
        }
    });

    const handleCancel = () => {
        setIsModalVisible(false);
        showhideModal();
    };

    const onClickOk = () => {
        // mutate({
        //     code: code,
        //     pages: pageNumber
        // });
        showhideModal();
    };
    return (
        <Modal title="Input Page Number" visible={visible} onOk={onClickOk} onCancel={handleCancel}>
            <p>{t('actions:enter-page-number')}</p>
            <Input
                name="pages"
                type="number"
                min={0}
                max={100}
                value={pageNumber}
                onChange={(e) => {
                    setPageNumber(parseInt(e.target.value));
                }}
            />
        </Modal>
    );
};

export { BarcodeRenderModal };
