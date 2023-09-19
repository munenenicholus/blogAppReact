import React from 'react';

function BlogPost({ post }) {
  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  };

  return (
    <div className="card mb-4" style={cardStyle}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.content}</p>
      </div>
      <div className="card-footer">
        <a href="#" className="btn btn-primary">Read More</a>
      </div>
    </div>
  );
}

export default BlogPost;
