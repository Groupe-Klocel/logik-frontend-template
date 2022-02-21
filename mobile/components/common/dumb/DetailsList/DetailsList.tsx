import { FC } from 'react';
import { Row, Col, Divider, Typography } from 'antd'

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
					<Col span={12}>
						<Typography style={{color: 'grey', fontSize: '18px'}}>{key}</Typography>
					</Col>
					<Col span={12}>
						<Typography style={{fontSize: '18px'}}>{details[key]}</Typography>
					</Col>
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

