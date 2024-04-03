import React, { useState } from 'react';
import './App.css';
import NewPassword from './Components/NewPassword';
import Passwords from './Components/Passwords';
import SearchPassword from './Components/SearchPassword';

export default function App() {
  const [password, setPassword] = useState([
    { id: 1, title: 'Google', password: 'HGDa665s' },
    { id: 2, title: 'Adobe', password: '546^%4gfs' },
    { id: 3, title: 'Microsoft', password: '*&hgs544@' },
    { id: 4, title: 'Sharpener', password: 'khahgFFa%4' },
    { id: 5, title: 'Acer', password: '5Hd%4a5' },
    { id: 6, title: 'Aadhaar', password: 'DRj24af$' },
  ]);

  function handleAddPassword(newPass) {
    setPassword((prevPassword) => {
      return [newPass, ...prevPassword];
    });
  }

  function handleDeletePassword(delId) {
    const updatedPassword = password.filter((p) => p.id !== delId);
    setPassword(updatedPassword);
  }

  function handleEditPassword(editedTitle, editedPass, editId) {
    const updatedPassword = password.map((p) => {
      if (p.id === editId) {
        return { id: editId, title: editedTitle, password: editedPass };
      }
      return p;
    });
    setPassword(updatedPassword);
  }

  const [search, setSearch] = useState('');
  function handleSearch(e) {
    setSearch(e.target.value);
  }

  const searchedPassword = password.filter((p) => {
    return p.title.toLowerCase().includes(search.toLowerCase());
  });

  //Sorting the passwords based on title
  searchedPassword.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
    if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
    return 0;
  });

  return (
    <div className="App">
      <h3 className="heading">Password Manager</h3>
      <SearchPassword password={password} onSearch={handleSearch} />
      <NewPassword onAddPassword={handleAddPassword} />
      <Passwords
        password={searchedPassword}
        onDeletePassword={handleDeletePassword}
        onEditPassword={handleEditPassword}
      />
    </div>
  );
}
