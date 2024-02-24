import React from 'react';

const Post = ({ name, description }) => {
  return (
    <section style={{ border: '3px solid white' }}>
      <h3>{name}</h3>
      <p>{description}</p>
    </section>
  );
};

export default Post;
