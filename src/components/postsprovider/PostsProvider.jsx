import PostsContext from "../../context/PostsContext.js";

export default function CrudProvider(props) {
  return (
    <PostsContext.Provider value={{}}>{props.children}</PostsContext.Provider>
  );
}
