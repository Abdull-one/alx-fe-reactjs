import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();

  return (
    <div style={{ padding: "1rem" }}>
      <h2>BlogPost</h2>
      <p>Now viewing blog post with ID: {id}</p>
    </div>
  );
}
