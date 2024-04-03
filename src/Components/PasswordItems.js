import React, { useState } from 'react';
import './PasswordItems.css';

export default function PasswordItems(props) {
  const [editing, setEditing] = useState(false);

  const [editTitle, setEditTitle] = useState(props.title);
  const [editPassword, setEditPassword] = useState(props.password);

  function handleSaveClick(e) {
    e.preventDefault();
    props.onEditPassword(
      e.target.editTitle.value,
      e.target.editPassword.value,
      props.id
    );
    setEditing(false);
  }

  return (
    <li>
      {editing ? (
        <form className="edit-password" onSubmit={handleSaveClick}>
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
          <span>{props.title}</span>
          <span>{props.password}</span>
          <div>
            <button onClick={() => setEditing(true)}>Edit</button>
            <button onClick={() => props.onDeletePassword(props.id)}>
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}
