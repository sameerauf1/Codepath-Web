function Post({ name, description, likes })  {

  return (
    <section style={{ border: '3px solid white', marginBottom: '8px' }}>
        <h3>{name}</h3>
        <h4>{description}</h4>
        <p>Likes: {likes}</p>
    </section>
  )
}

export default Post