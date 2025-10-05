import { useGetUsersQuery } from "../services/api";

export default function Users() {
  const { data: users, isLoading } = useGetUsersQuery();

  if (isLoading) return <p className="text-center text-gray-500">Loading users...</p>;

  return (
    <div>
      <h2 className="text-2xl font-semibold text-blue-500 mb-3">Users</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
        {users?.map((user) => (
          <p
            key={user.id}
            className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-center shadow-sm"
          >
            {user.name}
          </p>
        ))}
      </div>
    </div>
  );
}
