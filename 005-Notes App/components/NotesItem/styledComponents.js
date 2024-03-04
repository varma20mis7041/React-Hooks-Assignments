import styled from 'styled-components'

export const NoteItemContainer = styled.li`
  border: 2px solid #aab8c8;
  padding: 15px;
  list-style-type: none;
  border-radius: 10px;
  height: 20vh;
  width: 31%;
  margin-right: 25px;
  margin-bottom: 25px;
  overflow-y: auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-right: 0px;
    margin-bottom: 15px;
    padding: 10px;
  }
`

export const TitleHeading = styled.h1`
  font-size: 22px;
  font-family: 'Roboto';
  font-weight: 500;
  color: #1e293b;
`

export const TitleDescription = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  color: #334155;
  line-height: 1.4;
`
