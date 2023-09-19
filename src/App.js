import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import BlogList from "./components/BlogList";
import Login from "./Authentification/Login";
import Footer from "./components/Footer";
import About from "./components/About";
import Register from "./Authentification/Register";
import CreateBlogPost from "./components/CreateBlogPost";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<BlogList />} />;
          <Route path="/login" element={<Login />} />;
          <Route path="/Register" element={<Register />} />;
          <Route path="/about" element={<About />} />;
          <Route path="/create" element={<CreateBlogPost />} />;
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
