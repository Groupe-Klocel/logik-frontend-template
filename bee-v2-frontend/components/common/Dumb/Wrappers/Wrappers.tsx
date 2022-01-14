import styled from 'styled-components'
import {Layout} from 'antd'

export const WrapperForm = styled.div`
	background-color: white;
	padding: 20px;
`
export const WrapperLogin = styled.div`
	display: flex;
	background-color: white;
  align-items: center;
	justify-items:center;
  padding: 3%;
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  flex-direction: column;
  height: 80vh;
  width: 40vw;
	@media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`

export const PageContentWrapper = styled.div`
	margin: 15px 30px ;
`