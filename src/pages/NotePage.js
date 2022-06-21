import React from 'react';
import { useParams } from 'react-router-dom';
import notes from '../assets/data';

const NotePage = () => {
  const {id} = useParams();
  const note = notes.find(note => note.id === Number(id))  // create note object
  return (
    <div>
        <h1>{note.body}</h1>
    </div>
  )
}

export default NotePage;