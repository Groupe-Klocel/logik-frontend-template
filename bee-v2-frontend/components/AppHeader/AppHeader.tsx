
import { META_DEFAULTS } from '@configs/misc'
import { Layout, Space } from 'antd'
import React, { FC } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Link from 'next/link'


const StyledAppHeader = styled(Layout.Header)`
  background-color: white;
  padding: 0 15px;
`

export interface IAppHeaderProps { }


export const AppHeader: FC<IAppHeaderProps> = ({ }: IAppHeaderProps) => {

  let router = useRouter()

  return (
    <StyledAppHeader>

      <Space>
        {META_DEFAULTS.title}

        <Link href={router.asPath} locale="en-US">English</Link>
        <Link href={router.asPath} locale="fr">Français</Link>
      </Space>
    </StyledAppHeader>
  )
}

AppHeader.displayName = 'AppHeader'

export default AppHeader
