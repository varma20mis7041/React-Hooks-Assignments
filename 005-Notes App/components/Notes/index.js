import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  NotesPageBgContainer,
  MainHeading,
  NotesFormContainer,
  TitleInput,
  TextArea,
  AddButton,
  EmptyNotesListBgContainer,
  EmptyNotesImgElement,
  EmptyNotesCustomText,
  NotesUlContainer,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeTitle = event => setTitle(event.target.value)
  const onChangeNote = event => setNote(event.target.value)

  const onSubmitNotesForm = event => {
    event.preventDefault()
    if (title !== '' && note !== '') {
      const newNote = {
        id: uuidv4(),
        title,
        note,
      }
      setNotesList(prevState => [...prevState, newNote])
      setTitle('')
      setNote('')
    } else {
      alert('Please Enter Title and Note')
    }
  }

  //   console.log('notesList', notesList)

  return (
    <NotesPageBgContainer>
      <MainHeading>Notes</MainHeading>
      <NotesFormContainer onSubmit={onSubmitNotesForm}>
        <TitleInput
          type="text"
          placeholder="Title"
          value={title}
          onChange={onChangeTitle}
        />
        <TextArea
          placeholder="Take a Note..."
          rows="6"
          value={note}
          onChange={onChangeNote}
        >
          {note}
        </TextArea>
        <AddButton type="submit">Add</AddButton>
      </NotesFormContainer>
      {notesList.length === 0 ? (
        <EmptyNotesListBgContainer>
          <EmptyNotesImgElement
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <EmptyNotesCustomText heading>No Notes Yet</EmptyNotesCustomText>
          <EmptyNotesCustomText as="p">
            Notes you add will appear here
          </EmptyNotesCustomText>
        </EmptyNotesListBgContainer>
      ) : (
        <NotesUlContainer>
          {notesList.map(eachNote => (
            <NoteItem noteDetails={eachNote} key={eachNote.id} />
          ))}
        </NotesUlContainer>
      )}
    </NotesPageBgContainer>
  )
}
export default Notes
