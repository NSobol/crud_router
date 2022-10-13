import { Routes, Route } from "react-router-dom";
import PostList from "../postlist/PostList.jsx";
import AddForm from "../addform/AddForm.jsx";
import PostEdit from "../postedit/PostEdit.jsx";
import PostView from "../postview/PostView.jsx";

function HomePage() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/new" element={<AddForm />} />
        <Route path="/posts/:id" element={<PostView />} />
        <Route path="/posts/edit" element={<PostEdit />} />
      </Routes>
    </div>
  );
}
export default HomePage;
