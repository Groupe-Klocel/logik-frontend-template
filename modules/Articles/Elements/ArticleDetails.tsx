import { DetailsList, LinkButton } from '@components';
import { EyeTwoTone } from '@ant-design/icons';
import { pathParams} from "@helpers"
import useTranslation from 'next-translate/useTranslation';
import { Divider , Table, Typography} from 'antd'

const { Title } = Typography;


export interface IArticleDetailsProps {
	details?: any
}

const ArticleDetails = ({ details }: IArticleDetailsProps) => {
	const { t } = useTranslation()

	// Remove barcodes from all other details 
	const {barcodes, ...adetails} = details
	const barcodeColumns =[
		{
			title: t('d:id'),
			dataIndex: 'id',
			key: 'id',
		},
		{
			title: t('common:name'),
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: t('d:flagDouble'),
			dataIndex: 'flagDouble',
			key: 'flagDouble',
		},
		{
			title: t("actions:actions"),
			key: 'actions',
			render: (record: { id: string }) => (
					<LinkButton icon={<EyeTwoTone />} path={pathParams('/barcode/[id]', record.id)} />
			)
		}
	]

	return (
		<>    
			<DetailsList details={adetails} />
			<Divider/>
			<Title level={4}>{ t('common:associated',{name:t('common:barcodes')})}</Title>
			<Table
			 size="small" 
			 rowKey='id' 
			 dataSource={barcodes}  
			 columns={barcodeColumns}/>
		</>
	);
}

export { ArticleDetails };

