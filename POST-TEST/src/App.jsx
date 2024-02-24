import React, { useState } from 'react';
import './App.css';
import Post from './components/Post';

function App() {
  const [people, setPeople] = useState([
    { name: 'Samee', description: 'Excited to learn React!' },
    { name: 'John', description: 'Looking forward to JavaScript!' },
    { name: 'Alice', description: 'Passionate about CSS!' },
  ]);

  return (
    <> 
      <h1>Welcome to Web 02</h1>
      <h1>Write a post about what you're excited to learn about :P</h1>
      {people.map((person, index) => (
        <Post key={index} name={person.name} description={person.description} />
      ))}
    </>
  );
}

export default App;
