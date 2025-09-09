import React, { useEffect } from "react";
import useAuthStore from "../store/authStore";
import {
  ThumbsUp,
  MessageCircleMore,
  SquareArrowOutUpRight,
} from "lucide-react";

const PostsCard = () => {
  const { posts, fetchPosts } = useAuthStore();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div className="w-full mx-auto py-8 space-y-6">
      {posts.map((post) => (
        <div
          key={post._id}
          className="border border-gray-300 p-4 rounded-xl shadow-md bg-white"
        >
          {/* Author Info */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold text-gray-600">
              {post.author_name?.charAt(0) || "U"}
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                {post.author_name || "Unknown"}
              </h2>
              <p className="text-sm text-gray-500">{post.author_email}</p>
              <p className="text-xs text-gray-400">
                {new Date(post.created_at).toLocaleString()}
              </p>
            </div>
          </div>

          {/* Post Content */}
          <div className="mt-4">
            <p className="text-gray-700">{post.text}</p>
            {post.media && (
              <img
                src={post.media}
                alt="post media"
                className="mt-3 rounded-lg w-full object-cover"
              />
            )}
          </div>

          {/* Post Actions */}
          <div className="flex justify-around mt-4 text-sm text-gray-600 border-t pt-3">
            <button className="flex items-center gap-2 hover:text-blue-600 transition">
              <ThumbsUp size={18} />
              <span>{post.likes?.length || 0} Likes</span>
            </button>
            <button className="flex items-center gap-2 hover:text-green-600 transition">
              <MessageCircleMore size={18} />
              <span>{post.comments?.length || 0} Comments</span>
            </button>
            <button className="flex items-center gap-2 hover:text-purple-600 transition">
              <SquareArrowOutUpRight size={18} />
              <span>{post.shares || 0} Shares</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsCard;
