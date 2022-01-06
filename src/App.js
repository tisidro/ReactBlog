import Navbar from './Navbar'
import Home from './Home'

function App () {
  const title = 'My test Blog Site'
  const likes = 10
  const link = 'http://www.terriisidro.com'

  return (
    <div className='App'>
      <Navbar />

      <div className='content'>
        {/* playing with adding some dynamic values here */}
        <h1>{title}</h1>
      </div>
      <Home />
      <p>Likes: {likes}</p>
      <p>Today's lucky number is: {Math.floor(Math.random() * 10)}</p>
      <p>
        Check out my{' '}
        <a href={link} target='blank'>
          website
        </a>
      </p>
    </div>
  )
}

export default App
