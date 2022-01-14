import { FC } from 'react'
import Icon from '@ant-design/icons';
export interface ILogoProps {

}

export const Logo: FC<ILogoProps> = ({ }: ILogoProps) => {
	return (
		<Icon component={() => (<img src="/bee-logo.svg"  width={35}/>)} />
	);
}