import { useEffect, useState } from 'react';
import PostForm from '../components/PostForm';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const addPost = async (post) => {
    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    });
    const newPost = await res.json();
    setPosts((prev) => [...prev, newPost]);
  };

  return (
    <div>
      <h1>Posts</h1>
      <PostForm onSubmit={addPost} />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
