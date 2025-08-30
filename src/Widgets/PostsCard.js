import React from 'react'
import postsData from '../assets/JSONs/postsData'

const PostsCard = () => {
  return (
    <div className="grid grid-cols-1 md:grids-cols-2 gap-4 p-4">
      {postsData.map((post) => (
        <div
          key={post.id}
          className="border border-gray-300 p-4 rounded-lg shadow-md bg-white"
        >
          <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
          <p className="text-sm text-gray-500">
            By {post.author} • {post.date}
          </p>
          <p className="mt-2 text-gray-700">{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsCard

