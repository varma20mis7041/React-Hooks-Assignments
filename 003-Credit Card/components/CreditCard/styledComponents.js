import styled from 'styled-components'

export const CreditCardBgContainer = styled.div`
  height: 100vh;
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
export const CustomCreditCardPageSideContainer = styled.div`
  height: 100vh;
  width: 50%;
  background-color: ${props => (props.left ? '#3b4b69' : 'normal')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const CreditCardImageContainer = styled.div`
  height: 40%;
  width: 60%;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  border-radius: 20px;
  box-shadow: 0 0 10px #344e7a;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 90%;
    height: 60%;
    padding: 20px;
  }
`
export const CardNumberText = styled.p`
  font-size: 40px;
  font-weight: 700;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`
export const CardImageCustomText = styled.p`
  font-size: ${props => (props.name ? '25px' : '20px')};
  font-weight: ${props => (props.name ? '500' : '400')};
  margin-bottom: 0px;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    font-size: ${props => (props.name ? '20px' : '16px')};
  }
`

export const CreditCardPaymentFormCardContainer = styled.form`
  height: 40vh;
  width: 70%;
  box-shadow: 0 0 10px #d3d9e0;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 90%;
    padding: 30px;
  }
`
export const FormHeading = styled.h1`
  font-size: 28px;
  font-family: 'Roboto';
  font-weight: 700;
  color: #344e7a;
`
export const InputElement = styled.input`
  height: 50px;
  width: 80%;
  border: 1px solid #344e7a;
  margin-top: 20px;
  margin-bottom: 5px;
  outline: none;
  color: #344e7a;
  padding: 10px;
  font-size: 15px;
  font-family: 'Roboto';
  border-radius: 3px;

  @media screen and (max-width: 768px) {
    height: 40px;
    width: 90%;
  }
`
export const MainHeading = styled.h1`
  font-size: 35px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 100px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80%;
    height: 3px;
    background-color: #ffd773;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 15px;
  }
`
export const ErrorContainer = styled.div`
  width: 80%;
`

export const ErrorMsg = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  color: #ef4444;
  margin: 0px;
  align-self: flex-start;
  @media screen and (max-width: 768px) {
    font-size: 11px;
  }
`
