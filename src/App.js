import React from "react";
import { BrowserRouter } from "react-router-dom";
import PostsProvider from "./components/postsprovider/PostsProvider.jsx";
import HomePage from "./components/homepage/HomePage.jsx";
import "./App.css";

function App() {
  return (
    <PostsProvider>
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </PostsProvider>
  );
}

export default App;
