import styled from 'styled-components'
import { Layout } from 'antd'

const WrapperForm = styled.div`
	padding: 20px;
  max-height: 30vh;
`
const WrapperStepContent = styled.div`
	margin: 40px auto;
`
const WrapperStickyActions = styled.div`
  position:absolute;
  right:0;
  margin-right: 15px;
  align-self:flex-end;
`

const WrapperLogin = styled.div`
	display: flex;
  align-items: flex-start;
	justify-items:center;
  padding: 5%;
  padding-top: 50px;
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  flex-direction: column;
  width: 100%;
  background:white;
  @media only screen 
    and (min-device-width: 320px) 
    and (min-width: 360px)
    and (max-device-width: 480px) {
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
    height: 70%;
  }
`

const PageContentWrapper = styled.div`
	margin: 15px 30px ;
`
const PageTableContentWrapper = styled(Layout.Content)`
	margin:  15px 40px 15px 15px ;
`
export { PageContentWrapper, PageTableContentWrapper, WrapperLogin, WrapperForm, WrapperStepContent, WrapperStickyActions }
