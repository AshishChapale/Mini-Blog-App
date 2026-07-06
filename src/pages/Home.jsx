import { useEffect, useState } from "react";
import PostList from "../components/PostList";


function Home() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );
  <PostList posts={filteredPosts} />

  if (loading) {
    return <h2>Loading posts...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }


  return (
    <div className="container">
      <h1>All Posts</h1>

      <input
        className="search-input"
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredPosts.length === 0 && <p className="message">No posts found</p>}

      <PostList posts={filteredPosts} />
    </div>
  );
}

export default Home;