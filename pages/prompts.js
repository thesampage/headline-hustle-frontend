import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Prompts() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, []);

  return (
    <div>
      <h1>Welcome to Prompts</h1>
      <p>This page is protected!</p>
    </div>
  );
}
