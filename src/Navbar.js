const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>Terri's Blog Site With React!</h1>
      <div className='links'>
        <a href='/'>Home</a>
        <a
          href='/create'
          style={{
            color: 'blue'
          }}
        >
          New Blog
        </a>
      </div>
    </nav>
  )
}

export default Navbar
