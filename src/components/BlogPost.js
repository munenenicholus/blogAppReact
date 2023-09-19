import React from "react";

function BlogPost({ post }) {
  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    width: "25%",
    background: "linear-gradient(to bottom, #ff6a00, #ee0979)", // Gradient background
    borderRadius: "15px", // Rounded corners
    color: "white", // Text color
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Box shadow
  };

  return (
    <div className="card mb-4" style={cardStyle}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.content}</p>
      </div>
      <div className="card-footer">
        <a href="#" className="btn btn-light">
          Read More
        </a>{" "}
        {/* Light button */}
      </div>
    </div>
  );
}

export default BlogPost;
