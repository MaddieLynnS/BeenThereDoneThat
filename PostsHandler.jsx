import * as React from 'react';
import * as FileSystem from 'expo-file-system/legacy';

const PostsContext = React.createContext();

export function PostsProvider({ children }) {
  const [posts, setPosts] = React.useState([]);

  const addPost = (text) => {
    setPosts((prev) => [{ id: Date.now().toString(), text }, ...prev]);
  };
  const savePosts = async (filename) => {
    try {
      const name = (filename || 'posts').toString();
      const path = FileSystem.documentDirectory + name + '.json';
      await FileSystem.writeAsStringAsync(path, JSON.stringify(posts));
      return path;
    } catch (err) {
      throw err;
    }
  };

  const loadPosts = async (filename) => {
    try {
      const name = (filename || 'posts').toString();
      const path = FileSystem.documentDirectory + name + '.json';
      const info = await FileSystem.getInfoAsync(path);
      if (!info.exists) throw new Error('File not found');
      const content = await FileSystem.readAsStringAsync(path);
      const parsed = JSON.parse(content);
      setPosts(parsed);
      return parsed;
    } catch (err) {
      throw err;
    }
  };

  const resetPosts = () => setPosts([]);

  return (
    <PostsContext.Provider value={{ posts, addPost, savePosts, loadPosts, resetPosts }}>
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
