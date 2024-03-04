import {
  NoteItemContainer,
  TitleHeading,
  TitleDescription,
} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, note} = noteDetails

  return (
    <NoteItemContainer>
      <TitleHeading>{title}</TitleHeading>
      <TitleDescription>{note}</TitleDescription>
    </NoteItemContainer>
  )
}

export default NoteItem
