import React from "react";
import BlogPost from "./BlogPost";

function BlogList() {
  const blogPosts = [
    { id: 6, title: "Post 1", content: "Content of Post 1" },
    { id: 2, title: "Post 2", content: "Content of Post 2" },
    { id: 3, title: "Post 3", content: "Content of Post 3" },
    // Add more blog posts here
  ];

  return (
    <div className="container">
      <h2 className="my-4">Blog Posts</h2>
      {blogPosts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
}

export default BlogList;
