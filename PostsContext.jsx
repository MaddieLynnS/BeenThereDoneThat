import * as React from 'react';

const PostsContext = React.createContext();

export function PostsProvider({ children }) {
  const [posts, setPosts] = React.useState([]);

  const addPost = (text) => {
    setPosts((prev) => [{ id: Date.now().toString(), text }, ...prev]);
  };

  return (
    <PostsContext.Provider value={{ posts, addPost }}>
      {children}
    </PostsContext.Provider>
  );
}

export function usePosts() {
  const ctx = React.useContext(PostsContext);
  if (!ctx) throw new Error('usePosts must be used within PostsProvider');
  return ctx;
}

export default PostsContext;
