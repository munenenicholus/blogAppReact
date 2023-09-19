import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import BlogList from './components/BlogList';
import CreateBlogPost from './components/CreateBlogPost';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
   
      <div className="App">
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/create" element={<CreateBlogPost />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
