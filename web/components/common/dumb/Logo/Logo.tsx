import { FC } from 'react';
import Icon from '@ant-design/icons';
import Image from 'next/image';

export interface ILogoProps {
    width: number;
}

const Logo: FC<ILogoProps> = ({ width }: ILogoProps) => {
    return <Icon component={() => <Image alt="logo" src="/bee-logo.svg" width={width} />} />;
};

Logo.displayName = 'Logo';

export { Logo };
