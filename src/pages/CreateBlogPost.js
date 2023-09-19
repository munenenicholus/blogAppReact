import React, { useState } from 'react';

function CreateBlogPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleCreatePost = () => {
    // Implement the logic to create a new blog post here
    // For example, you can send a POST request to a server API
    // with the title and content as data.
    // You can also update your application's state with the new post.
    // This is just a placeholder, you need to replace it with your actual logic.
    const newPost = {
      title: title,
      content: content,
    };
    console.log('New Blog Post:', newPost);

    // Clear the input fields after creating the post
    setTitle('');
    setContent('');
  };

  return (
    <div className="container">
      <h2 className="my-4">Create a New Blog Post</h2>
      <form>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleCreatePost}
        >
          Create Post
        </button>
      </form>
    </div>
  );
}

export default CreateBlogPost;
