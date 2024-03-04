// Style your elements here
import styled from 'styled-components'

export const UnlockBgContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #161617, #0b0c1e, #3c2940);
`
export const UnlockCardContainer = styled.div`
  height: 50vh;
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ImageElement = styled.img`
  height: 150px;
  width: 150px;
`
export const UnlockDescription = styled.p`
  font-size: 25px;
  font-family: 'Roboto';
  color: #e2e8f0;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
export const CustomButton = styled.button`
  height: 35px;
  width: 80px;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 600;
  background-color: #06b6d4;
  color: #ffffff;
  border-radius: 15px;
  border-width: 0px;
  cursor: pointer;
  outline: none;
  @media screen and (max-width: 768px) {
    font-weight: 500;
  }
`
