import { FC } from 'react';
import { Descriptions } from 'antd'
import { CheckCircleOutlined, CloseSquareOutlined } from '@ant-design/icons';
import useTranslation from 'next-translate/useTranslation';

export interface IDetailsListProps {
	details: any
}

const DetailsList: FC<IDetailsListProps> = ({ details }: IDetailsListProps) => {
	let {t} = useTranslation()
	return (

		<Descriptions
			column={{ xxl: 3, xl: 3, lg: 2, md: 2, sm: 2, xs: 1 }}
			size="small"
			bordered
		>
			{
				Object.keys(details).map((key) => (
					<Descriptions.Item label={t(`database:${key}`)}>
						{
							details[key] == true ? <CheckCircleOutlined style={{ color: 'green' }} />
								: details[key] == false ?
									<CloseSquareOutlined style={{ color: 'red' }} /> : details[key]
						}

					</Descriptions.Item>
				))
			}
		</Descriptions>
	);
}

DetailsList.displayName = 'DetailsList'

export { DetailsList };

