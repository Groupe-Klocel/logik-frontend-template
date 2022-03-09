import { FC } from 'react'
import Icon from '@ant-design/icons';
import styled from 'styled-components'
import { Space, Typography } from 'antd';
const { Text } = Typography;

export interface ILogoProps {
	title?: string
}

const Logo: FC<ILogoProps> = ({ title }: ILogoProps) => {
	return (
		<Space align='center' size='middle'>
			<Icon component={() => (<img alt="logo" src="/bee-logo.svg" width={30} />)} />
			<Text style={{ fontSize: '18px', fontWeight: 'bold' }}>{title}</Text>
		</Space>
	);
}

Logo.displayName = 'Logo';

export { Logo };