import { FC } from 'react'
import Icon from '@ant-design/icons';
import styled from 'styled-components'

export interface ILogoProps {

}

const Logo: FC<ILogoProps> = ({ }: ILogoProps) => {
	return (
		<Icon component={() => (<img  src="/bee-logo.svg"  width={35}/>)} />
	);
}

Logo.displayName = 'Logo';

export {Logo};