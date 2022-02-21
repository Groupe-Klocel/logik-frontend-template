import { ScreenSpin } from '@components';
import { Layout, Space, Button } from 'antd';
import { barcodesRoutes } from 'modules/Barcodes/Static/barcodesRoutes';
import useTranslation from 'next-translate/useTranslation';
import { useAuth } from 'context/AuthContext';
import { FC } from 'react';
import { NextRouter } from 'next/router';
import styled from 'styled-components';
import { HeaderContent } from '@components';

const StyledPageContent = styled(Layout.Content)`
	margin: 15px 30px ;
	padding: 20px
`

export interface ISingleBarcodeProps {
	bId: string | any;
	router: NextRouter;
}

const SingleBarcode: FC<ISingleBarcodeProps> = ({ bId, router }: ISingleBarcodeProps) => {
	let { t } = useTranslation()

	const breadsCrumb = [...barcodesRoutes, {
		breadcrumbName: `${bId}`,
	}
	]

	return (
		<>
			<HeaderContent
				title={`${t('common:barcode')} ${bId}`}
				routes={breadsCrumb}
				onBack={() => router.back()}
				actionsRight={
					<Space>
						<Button onClick={() => alert("Edit")} type='primary'>{t('actions:edit')}</Button>
						<Button onClick={() => alert("Delete")}>{t('actions:delete')}</Button>
					</Space>
				} />
			<StyledPageContent>

				<ScreenSpin />

			</StyledPageContent>
		</>
	);
}

SingleBarcode.displayName = 'SingleBarcode';

export { SingleBarcode };
