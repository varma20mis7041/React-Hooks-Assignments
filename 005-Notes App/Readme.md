# Notes App
## Concepts Used : useState() 
#### [webpage url](https://bvreacthooks05.ccbp.tech/)

## Functionality Overview

- The app allows users to add notes with a title and content.
- Initially, the title and note inputs are empty, and the Empty Notes View is displayed.
- When non-empty values are provided for the title and notes, and the Add button is clicked, a new note item is added to the list of notes with the provided details.

## App Structure

- The `Notes` component utilizes React hooks, including `useState`.
- It uses the `uuid` library for generating unique IDs.
- Notes are stored in the `notesList` state.
- Users can input a title and note, click "Add" to create a new note.
- The app displays a list of notes or an empty view based on the existence of notes.

## Styled Components

- The app uses styled-components for styling, including containers, inputs, buttons, and custom text.

## NoteItem Component

- Each note in the list is rendered using the `NoteItem` component, passing the note details as a prop.

