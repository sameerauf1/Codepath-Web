import React, { useState } from 'react';
import './App.css';
import Post from './components/Post';

function App() {

  const students = [
    {
      name: 'Aaa Bbb',
      description: 'Lorem Ipsum',
      likes: '19981'
    },
    {
      name: 'djksaljd dsajidsji',
      description: 'Lorem Ipsum TWOOOO',
      likes: '-192193'
    },
    {
      name: 'Aaa Bbb',
      description: 'Lorem Ipsum THREEE',
      likes: '31337'
    }
  ]

  return (
    <>
      <h1>Welcome to Web102</h1>
      <h2>Write a post about what you are excited to learn about :P</h2>
      {
        students.map((student, i) => {
          return (<Post 
            name={student.name} 
            key={i}
            description={student.description} 
            likes={student.likes} />)

        })
      }

    </>
  )
}

export default App







