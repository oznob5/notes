import React from "react";
import { Link } from 'react-router-dom';

const ListItem = ({note}) => {  // access to the note directly, w/o any variable
    return (
        <Link to={`/note/${note.id}`}>
            <div className="notes-list-item">
                <h3>{note.body}</h3>
            </div>
        </Link>
    )
}

export default ListItem