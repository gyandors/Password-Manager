import React from 'react';
import './PasswordItems.css';

export default function PasswordItems(props) {
  function handleClick() {
    props.onDeletePassword(props.id);
  }

  return (
    <li>
      <span>{props.title}</span> <span>{props.password}</span>
      <button>Edit</button>
      <button onClick={handleClick}>Delete</button>
    </li>
  );
}
