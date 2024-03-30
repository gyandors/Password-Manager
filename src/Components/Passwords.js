import React from 'react';
import './Passwords.css';
import PasswordItems from './PasswordItems';

export default function Passwords(props) {
  return (
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
  );
}
