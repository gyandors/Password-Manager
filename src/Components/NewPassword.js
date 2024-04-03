import React, { useRef, useState } from 'react';
import './NewPassword.css';

export default function NewPassword({ onAddPassword }) {
  const [show, setShow] = useState(false);

  const enteredTitle = useRef('');
  const enteredPassword = useRef('');

  function handleSubmit(e) {
    e.preventDefault();

    //Reading the input data
    const title = enteredTitle.current.value;
    const password = enteredPassword.current.value;

    //Passing the input data in the form of object as an argument
    onAddPassword({ id: Date.now(), title: title, password: password });

    setShow(!show);
  }

  return (
    <div className="new-password">
      {!show ? (
        <button onClick={() => setShow(!show)}>Add</button>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="input-control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" required ref={enteredTitle} />
          </div>
          <div className="input-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              required
              ref={enteredPassword}
            />
          </div>

          <button type="submit">Save</button>
          <button type="reset" onClick={() => setShow(!show)}>
            Cancel
          </button>
        </form>
      )}
    </div>
  );
}
