import styled from 'styled-components'

export const LeaderboardTableContainer = styled.ul`
  border-radius: 12px;
  padding-left: 0px;
  list-style-type: none;
  overflow: hidden;
`

export const LeaderboardHeader = styled.li`
  display: flex;
  background-color: #378caf;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 50px;
  @media screen and (max-width: 768px) {
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  overflow-x: auto;
`

export const TableHeadingText = styled.p`
  color: #f1f5f9;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  width: 20%;
  margin: 0px;
  padding-right: 30px;
  @media screen and (max-width: 768px) {
    padding-right: 10px;
    font-size: 14px;
  }
`

export const Rank = styled(TableHeadingText)`
  width: 15%;
`

export const Name = styled(TableHeadingText)`
  width: 30%;
  @media screen and (max-width: 768px) {
    width: 28%;
  }
`

export const Score = styled(TableHeadingText)`
  width: 15%;
  @media screen and (max-width: 768px) {
    width: 14%;
  }
`

export const Language = styled(TableHeadingText)`
  @media screen and (max-width: 768px) {
    width: 25%;
  }
`

export const TimeSpent = styled(TableHeadingText)`
  @media screen and (max-width: 768px) {
    width: 10%;
  }
`
