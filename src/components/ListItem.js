import React from "react";
import { Link } from 'react-router-dom';

const ListItem = ({note}) => {  // access to the note directly, w/o any variable
    return (
        <Link to={`/note/${note.id}`}>
            <h3>{note.id}</h3>
        </Link>
    )
}

export default ListItem