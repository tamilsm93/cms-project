'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Posts = () => {
  const pathname = usePathname();
  const parts = pathname.split('/');
  const id = parts[parts.length-1];
  const [posts, setPosts] = useState(null);

  const fetchData = async (categoryId) => {
    try {
      if (!categoryId) {
        return;
      }
      const response = await fetch(`http://localhost:3000/api/posts?category_id=${categoryId}`);
      const postData = await response.json();
      setPosts(postData);
    } catch (error) {
      console.error('Error fetching post data:', error);
    }
  };

  React.useEffect(() => {
    fetchData(id);
  }, [id]);
  return (
    <div className="max-w-2x1 mx-auto bg-white shadow-md rounded-lg overflow-hidden p-6" style={{marginLeft: '200px', marginTop: '50px', padding: '10px', width: '60rem'}}>
    <p className="text-gray-600 mb-4">Posts</p>
    { posts && posts.length > 0 ?  (posts.map((post) => (
      <div style={{marginLeft: '20px', marginTop: '25px'}}>
      <h2 className="text-x1 font-semibold text-grey-800 mb-4"> {post.title}</h2>
      <p className="text-gray-700 leading-relaxed mb-4">{post.content}</p>
    </div>
      )) 
    ) : (
        <p> No posts </p>
      )
    }
  </div>
  );
};

export default Posts;