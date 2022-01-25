import { FC } from 'react'
import Icon from '@ant-design/icons';
import styled from 'styled-components'

const StyledImage = styled.img`
	fill: white
`;

export interface ILogoProps {

}

export const Logo: FC<ILogoProps> = ({ }: ILogoProps) => {
	return (
		<Icon component={() => (<img  src="/bee-logo.svg"  width={35}/>)} />
	);
}