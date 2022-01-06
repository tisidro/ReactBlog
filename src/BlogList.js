//would need to pass in handleDelete if running code w/out endpoints
const BlogList = ({ blogs, title }) => {
  //const blogs = props.blogs
  //const title = props.title instead of these I just destructured properties I want from the props,can do it either way

  return (
    <div className='blog-list'>
      <h2>{title}</h2>

      {blogs.map(blog => (
        //key attribute is unique identifier for each item in array
        <div className='blog-preview' key={blog.id}>
          {/* //dynamically generate title/author for each post */}
          <h2>{blog.title}</h2>
          <p>written by: {blog.author}</p>
          {/* <button onClick={() => handleDelete(blog.id)}> delete post</button> */}
          {/* this button would only be used for delete code w/out endpoints */}
        </div>
      ))}
    </div>
  )
}

export default BlogList
