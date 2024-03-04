import styled from 'styled-components'

export const NotesPageBgContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const MainHeading = styled.h1`
  font-size: 35px;
  font-family: Bree Serif;
  font-weight: 600;
  color: #4c63b6;
`
export const NotesFormContainer = styled.form`
  height: 32vh;
  width: 60vw;
  box-shadow: 0 0 20px #d8d8d8;
  border: none;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`
export const TitleInput = styled.input`
  height: 35px;
  border: none;
  margin-bottom: 25px;
  font-size: 17px;
  font-family: 'Roboto';
  color: '#475569';
  font-weight: 500;
  padding: 5px;
`
export const TextArea = styled.textarea`
  border: none;
  font-size: 17px;
  font-family: 'Roboto';
  color: '#475569';
  padding: 5px;
`
export const AddButton = styled.button`
  height: 40px;
  width: 60px;
  font-size: 16px;
  font-weight: 500;
  background-color: #4c63b6;
  border-width: 0px;
  border-radius: 3px;
  color: #ffffff;
  align-self: flex-end;
  margin-top: 15px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`

export const EmptyNotesListBgContainer = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
`
export const EmptyNotesImgElement = styled.img`
  height: 45%;
  width: 180px;
  @media screen and (max-width: 768px) {
    width: 140px;
  }
`
export const EmptyNotesCustomText = styled.h1`
  font-size: ${props => (props.heading ? '26px' : '18px')};
  font-weight: ${props => (props.heading ? '500' : 'normal')};
  color: #334155;
  margin-bottom: 0px;
  @media screen and (max-width: 768px) {
    font-size: ${props => (props.heading ? '22px' : '16px')};
  }
`

export const NotesUlContainer = styled.ul`
  min-height: 55vh;
  width: 60vw;
  display: flex;
  flex-wrap: wrap;
  padding-top: 30px;
  padding-left: 0px;
  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`
