'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Define error state

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('http://localhost:3000/api/posts');
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setPosts(data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="PostList grid grid-cols-3 gap-4" style={{marginLeft: '200px', marginTop: '50px'}}>
    <h1 className="text-4xl font-bold  mb-4">Posts</h1>
    {posts.length > 0 && (
    posts.map((post) => (
      <div className="col-span-1 bg-gray-200 pg-4" key={post.id} style={{ marginTop: '15px' , padding: '10px' }}>
      <h2 className="text-4x1 font-extrabold text-gray-900 mb-8">  {post.title} </h2>
      <p className="text-base text-gray-800 font-semibold my-4">{post.content} </p> <br />
          <a href={`/posts/${post.id}`} class="text-blue-500 hover:text-blue-700"> view  </a>
          </div>
        ))
      )}
      </div>
    );
  }
