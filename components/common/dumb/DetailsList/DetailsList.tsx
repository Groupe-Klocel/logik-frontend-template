import { FC } from 'react';
import { Row, Col, Divider } from 'antd'

export interface IDetailsListProps {
	details: any
}

const DetailsList: FC<IDetailsListProps> = ({ details }: IDetailsListProps) => {
	return (
		<>
			{Object.keys(details).map((key) =>
			(
				<>
				<Row key={key}>
					<Col span={12}>{key}</Col>
					<Col span={12}>{details[key]}</Col>
				</Row>
				<Divider />
				</>
			)
			)
			}
		</>
	);
}

DetailsList.displayName = 'DetailsList'

export { DetailsList };

