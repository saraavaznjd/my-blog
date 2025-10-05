import { useState } from "react";
import { Link } from "react-router-dom";
import {
  useGetPostsQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} from "../services/api";

export default function Posts({ searchPosts = null }) {
  const [index, setIndex] = useState(0);
  const { data: posts, isLoading } = useGetPostsQuery();
  const targetPosts = searchPosts || posts;
  const [createPost] = useAddPostMutation();
  const [updatePost] = useUpdatePostMutation();
  const [deletePost] = useDeletePostMutation();

  if (isLoading) return <p className="text-center text-gray-500">Loading posts...</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-blue-500">Posts</h2>
        <button
          onClick={() =>
            createPost({ title: "New Post", body: "Some content", userId: 1 })
          }
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl"
        >
          + Add Post
        </button>
      </div>

      {targetPosts?.slice(index, index + 5).map((post) => (
        <div
          key={post.id}
          className="border border-gray-300 dark:border-gray-600 rounded-xl p-4 mb-4 bg-white dark:bg-gray-800 shadow-sm"
        >
          <Link to={`/postDetail/${post.id}`}>
            <h3 className="text-xl font-semibold text-blue-600 mb-2 hover:underline">
              {post.title}
            </h3>
          </Link>
          <p className="text-gray-700 dark:text-gray-300 mb-3">{post.body}</p>
          <div className="flex gap-2">
            <button
              onClick={() =>
                updatePost({ id: post.id, title: "Updated", body: post.body })
              }
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg"
            >
              Update
            </button>
            <button
              onClick={() => deletePost(post.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <div className="flex justify-between mt-4">
        <button
          onClick={() => setIndex(Math.max(0, index - 5))}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg"
        >
          Prev
        </button>
        <button
          onClick={() => setIndex(index + 5)}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
}
