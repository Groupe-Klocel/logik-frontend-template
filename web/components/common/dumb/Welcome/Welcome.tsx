import { Page } from '@components'
import { Row, Space, Typography } from 'antd'
import { FC } from 'react'
import styled from 'styled-components'


const StyledWelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`

export interface IWelcomeProps { 
  text: string
}

const Welcome: FC<IWelcomeProps> = ({ text }: IWelcomeProps) => {
  return (
    <Page>
      <StyledWelcomeWrapper>
        <Space direction="vertical" size="large">
          <Row align="middle" justify="center">
            <Typography.Title level={3}>
             {text}
            </Typography.Title>
          </Row>

        </Space>
      </StyledWelcomeWrapper>
    </Page>
  )
}

Welcome.displayName = 'Welcome'

export { Welcome }

