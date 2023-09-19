import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import Navbar from "./Sections/Navbar";
import BlogList from "./components/BlogList";
import Login from "./Authentification/Login";
import Footer from "./Sections/Footer";
import About from "./pages/About";
import Register from "./Authentification/Register";
import CreateBlogPost from "./pages/CreateBlogPost";
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
