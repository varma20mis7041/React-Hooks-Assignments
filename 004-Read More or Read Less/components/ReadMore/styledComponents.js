import styled from 'styled-components'

export const ReadMoreComponentBgContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ReactHookInfoCardContainer = styled.div`
  height: 95vh;
  width: 35vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #1e293b;
  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`
export const MainHeading = styled.h1`
  font-size: 35px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const CustomText = styled.p`
  font-size: ${props => (props.description ? '16px' : '20px')};
  line-height: 1.5;
  font-family: 'Roboto';
  color: #334155;
  text-align: ${props => (props.description ? 'left' : 'center')};
  @media screen and (max-width: 768px) {
    line-height: 1.4;
  }
`
export const ReactHookImgElement = styled.img`
  height: 40vh;
  width: 35vw;
  @media screen and (max-width: 768px) {
    width: 90vw;
    height: 25vh;
  }
`
export const CustomButton = styled.button`
  height: 35px;
  width: 110px;
  border-width: 0px;
  border-radius: 5px;
  background-color: #1f81ff;
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  outline: none;
  @media screen and (max-width: 768px) {
    font-weight: 500px;
  }
`
