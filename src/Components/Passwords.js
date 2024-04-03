import React from 'react';
import './Passwords.css';
import PasswordItems from './PasswordItems';

export default function Passwords(props) {
  return (
    <div className="password-items">
      {props.password.length === 0 && <h4>Nothing to show.</h4>}
      <ul>
        {props.password.map((pass) => {
          return (
            <PasswordItems
              key={pass.id}
              id={pass.id}
              title={pass.title}
              password={pass.password}
              onDeletePassword={props.onDeletePassword}
              onEditPassword={props.onEditPassword}
            />
          );
        })}
      </ul>
    </div>
  );
}
