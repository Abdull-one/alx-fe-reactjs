import { useQuery } from "@tanstack/react-query";

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}

export default function PostsComponent() {
  const { data, error, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60, // 1 min
    cacheTime: 1000 * 60 * 5, // 5 mins
    refetchOnWindowFocus: false, // don't auto-refetch on tab focus
    keepPreviousData: true, // keep old data while fetching new
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  return (
    <div style={{ padding: "1rem", background: "white", borderRadius: "8px" }}>
      <h2>Posts {isFetching && <span style={{ fontSize: "0.8rem" }}>(Updating...)</span>}</h2>
      <button
        onClick={() => refetch()}
        style={{
          marginBottom: "1rem",
          padding: "8px 12px",
          borderRadius: "6px",
          background: "#111827",
          color: "white",
        }}
      >
        Refetch Posts
      </button>
      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id} style={{ marginBottom: "12px" }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
