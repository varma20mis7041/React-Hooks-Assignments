
import styled from 'styled-components'

export const PasswordValidatorBgContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
`
export const ValidationCardContainer = styled.div`
  height: 30vh;
  width: 30vw;
  background-color: #383a4e;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px #434451;
  @media screen and (max-width: 768px) {
    height: 40vh;
    width: 90vw;
  }
`

export const PasswordInputElement = styled.input`
  height: 40px;
  width: 80%;
  background-color: #edeeff;
  border: none;
  outline: none;
  border-radius: 4px;
  margin-top: 35px;
  margin-bottom: 5px;
  color: #475569;
  padding: 5px;
  font-size: 16px;
`
export const TextElement = styled.h1`
  font-size: ${props => (props.heading ? '35px' : '20px')};
  font-weight: ${props => (props.heading ? '600' : 'normal')};
  font-family: 'Roboto';
  color: ${props => (props.heading ? '#f8fafc' : '#ffffff')};
  margin-bottom: 10px;
  margin-top: 10px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: ${props => (props.heading ? '28px' : '17px')};
    font-weight: ${props => (props.heading ? '500' : 'normal')};
  }
`

export const ErrorMsg = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  color: #ef4444;
  margin: 0px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`
