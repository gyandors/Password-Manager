import React, { useRef } from 'react';
import './NewPassword.css';

export default function NewPassword(props) {
  const enteredTitle = useRef('');
  const enteredPassword = useRef('');

  function handleSubmit(e) {
    e.preventDefault();
    const title = enteredTitle.current.value;
    const pass = enteredPassword.current.value;
    props.onAddPassword({ id: Date.now(), title: title, password: pass });
    enteredTitle.current.value = '';
    enteredPassword.current.value = '';
  }

  return (
    <form className="new-password" onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" ref={enteredTitle} />

      <label htmlFor="password">Password</label>
      <input type="text" id="password" ref={enteredPassword} />

      <button type="submit">Save</button>
    </form>
  );
}
