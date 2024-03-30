import React, { useState } from 'react';
import './PasswordItems.css';

export default function PasswordItems(props) {
  const [editing, setEditing] = useState(false);

  const [editTitle, setEditTitle] = useState(props.title);
  const [editPassword, setEditPassword] = useState(props.password);

  function handleEditClick() {
    setEditing(true);
  }

  function handleSaveClick(e) {
    e.preventDefault();
    props.onEditPassword(
      e.target.editTitle.value,
      e.target.editPassword.value,
      props.id
    );
    setEditing(false);
  }

  function handleDeleteClick() {
    props.onDeletePassword(props.id);
  }

  return (
    <li>
      {editing ? (
        <form onSubmit={handleSaveClick}>
          <input
            type="text"
            name="editTitle"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <input
            type="text"
            name="editPassword"
            value={editPassword}
            onChange={(e) => setEditPassword(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <span>{props.title}</span> <span>{props.password}</span>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleDeleteClick}>Delete</button>
        </>
      )}
    </li>
  );
}
