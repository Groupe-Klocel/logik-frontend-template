import { Button } from 'antd';
import Link from 'next/link';
import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { RightOutlined } from '@ant-design/icons';
import CSS from 'csstype';

const ButtonContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex
`;

const buttonStyle: CSS.Properties = {
  height: '80px',
  background: 'transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
};


export interface IMenuItemProps {
  title: string
  path: string
}
const MenuItem: FC<IMenuItemProps> = ({title, path}: IMenuItemProps) => {
  return(
    <ButtonContainer>
      <Link href={path}>
        <Button block style={buttonStyle}>
          {title}
          <RightOutlined />
        </Button>
      </Link>
    </ButtonContainer>
  )
} 


MenuItem.displayName = 'MenuItem'

export { MenuItem };