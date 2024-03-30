import React, { useState } from 'react';
import './App.css';
import NewPassword from './Components/NewPassword';
import Passwords from './Components/Passwords';

export default function App() {
  const [password, setPassword] = useState([
    { id: 1, title: 'Google', password: 'HGDa665s' },
    { id: 2, title: 'Adobe', password: '546^%4gfs' },
    { id: 3, title: 'Microsoft', password: '*&hgs544@' },
    { id: 4, title: 'Sharpener', password: 'khahgFFa%4' },
    { id: 5, title: 'Acer', password: '5Hd%4a5' },
    { id: 6, title: 'Aadhaar', password: 'DRj24af$' },
  ]);

  function handleAddPassword(newData) {
    setPassword((prevPassword) => {
      return [newData, ...prevPassword];
    });
  }

  function handleDeletePassword(delId) {
    const updatedPassword = password.filter((pass) => pass.id !== delId);
    setPassword(updatedPassword);
  }

  function handleEditPassword(editedTitle, editedPass, id) {
    console.log(editedTitle, editedPass, id);
    for (let pass of password) {
      // console.log(pass);
      for (let key in pass) {
        console.log(pass[key]);
      }
    }
    // setPassword((prevPass) => {
    // });
    // console.log(password);
  }

  const [search, setSearch] = useState('');

  function handleChange(e) {
    setSearch(e.target.value);
  }

  const searchedPassword = password.filter((pass) => {
    return pass.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="App">
      <h3>Password Manager</h3>
      <p>Total passwords: {password.length}</p>
      <label htmlFor="search">Search</label>
      <input type="text" id="search" onChange={handleChange} />
      <NewPassword onAddPassword={handleAddPassword} />
      <Passwords
        password={searchedPassword}
        onDeletePassword={handleDeletePassword}
        onEditPassword={handleEditPassword}
      />
    </div>
  );
}
