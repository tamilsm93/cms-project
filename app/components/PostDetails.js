'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const PostDetails = () => {
  const pathname = usePathname();
  const parts = pathname.split('/');
  console.log(parts);
  const id = parts[parts.length-1];
  const [post, setPost] = useState(null);

  const fetchData = async (postId) => {
    try {
      if (!postId) {
        return;
      }
      const response = await fetch(`http://localhost:3000/api/posts/${postId}`);
      const postData = await response.json();
      console.log(postData)
      setPost(postData);
    } catch (error) {
      console.error('Error fetching post data:', error);
    }
  };

  React.useEffect(() => {
    fetchData(id);
  }, [id]);

  return (
    <div>
    {post?  (
      <div className="max-w-2x1 mx-auto bg-white shadow-md rounded-lg overflow-hidden p-6" style={{marginLeft: '200px', marginTop: '50px', width: '60rem'}}>
      <h1 class="text-4xl font-bold text-black bg-center mb-4">Blog post {post.id}</h1>
        <h2 class="text-x1 font-semibold text-gray-800 mb-4"> {post.title}</h2>
        <p class="text-gray-700 leading-relaxed mb-4"> {post.content}</p>
      </div>
    ) : (
      <div className="text-center mt-8">
      <p className="text-gray-600"> No posts</p>
    </div>
    )}
  </div>
  );
};

export default PostDetails;


