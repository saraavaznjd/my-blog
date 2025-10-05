import { useParams } from "react-router-dom";
import {
  useGetPostsQuery,
  useGetCommentsQuery,
} from "../services/api";

export default function PostDetail() {
  const { id } = useParams();
  const { data: posts, isLoading, error } = useGetPostsQuery();
  const { data: comments } = useGetCommentsQuery(id);

  if (isLoading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error loading post.</p>;

  const post = posts?.find((p) => p.id === Number(id));

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
      <h3 className="text-2xl font-bold text-blue-600 mb-3">{post?.title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-6">{post?.body}</p>

      <div className="border-t border-gray-300 dark:border-gray-600 pt-4">
        <h4 className="text-lg font-semibold mb-2">Comments:</h4>
        {comments?.map((comment) => (
          <p key={comment.id} className="border-b border-gray-200 py-2">
            {comment.body}
          </p>
        ))}
      </div>
    </div>
  );
}
