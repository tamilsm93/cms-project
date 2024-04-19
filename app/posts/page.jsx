'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import PostList from '../components/PostList'

export default function Posts() {
  return (
    <div>
      <PostList />
    </div>
  );
}
