import React from 'react';
import './SearchPassword.css';

export default function SearchPassword(props) {
  return (
    <div className="search-password">
      <p>
        Total passwords: <b>{props.password.length}</b>
      </p>
      {/* <div className="search-control"> */}
      {/* <label htmlFor="search">Search</label>{' '} */}
      <input
        type="text"
        id="search"
        placeholder="Search passwords"
        onChange={(e) => props.onSearch(e)}
      />
      {/* </div> */}
    </div>
  );
}
