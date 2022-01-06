import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {
  const [value, setValue] = useState('Original Value')

  const buttonClick = () => {
    setValue('New Value')
  }

  const [blogs, setBlogs] = useState(null)
  const [isLoading, setIsLoading] = useState(true) //for "loading" message
  const [error, setError] = useState(null)

  // code for deleting without endpoints
  //const handleDelete = id => {
  //   const updatedBlogs = blogs.filter(blog => blog.id !== id) //if blog id doesn't match it is NOT filtered out and stays
  //   setBlogs(updatedBlogs) //updates the state to the new, filtered collection of blogs
  // }

  useEffect(() => {
    //putting fetch in a setTimeout so loading message effect is visible, simulating a call to external server
    setTimeout(() => {
      fetch('http://localhost:8000/blogs') //returns a promise and .then()fires a function once promise resolves(once we get the data)
        .then(res => {
          //checking response object-- if ok:false in object, throw error
          if (!res.ok) {
            throw Error('Sorry, unable to retrieve data for that resource')
          }
          return res
            .json() //gets the data by pas ing json into js object & returns another promise
            .then(data => {
              setBlogs(data)
              setIsLoading(false)
              setError(null) //sets error to be null if get data
            }) //fires function taking in the json data once the above is complete AND it updates blog state w/ the data the array
        })
        // catch for error above
        .catch(err => {
          setIsLoading(false) //stops loading message when there's an error
          setError(err.message) //changes the state from null to the error message
        })
    }, 1000) //makes fetch fire after 1 second so you can see message effect
  }, [])

  return (
    <div className='home'>
      {/* displays error if there is one */}
      {error && <div>{error}</div>}
      {/* when isLoading is true, the message will appear */}
      {isLoading && <div>Data is loading...</div>}

      {/* logical && evaluates left first, if false it doesn't look at other
      condition. Since it starts off as null it doesn't initially output the 2nd condition and error avoided. */}
      {blogs && (
        <BlogList
          blogs={blogs}
          title='All Blog Posts'
          // handleDelete={handleDelete}
        />
      )}
      {/* passing blogs props from Home parent component to BlogList component, also handleDelete props for deleting posts */}
      {blogs && (
        <BlogList
          blogs={blogs.filter(blog => blog.author === 'tina')}
          title="Tina's Blogs"
          // handleDelete={handleDelete} //only pass in for delete w/out endpoints...in order for the delete button to work on filtered section, you need to pass this prop here too
        />
      )}
      {/* created a new title and used filter method so we can post blogs in sections by author */}
      <button onClick={buttonClick}>Click to update value</button>
      <p>{value}</p>
      {/* to add an input, wrap in anonymous function so it does not just post the name */}
    </div>
  )
}

export default Home
