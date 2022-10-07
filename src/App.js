import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/menu/Menu";
import PostList from "./components/postlist/PostList";
import AddForm from "./components/addform/AddForm";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/posts/new" element={<AddForm />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
