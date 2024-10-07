import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    } else {
      // Here you could decode the token or make a backend request to get user info
      setUser({ username: "exampleUser" });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>Welcome, {user.username}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
