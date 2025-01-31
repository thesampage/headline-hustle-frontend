// pages/index.js
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to scenarios if user is logged in
    const isLoggedIn = !!localStorage.getItem("token");
    if (isLoggedIn) {
      router.push("/scenarios");
    } else {
      router.push("/login");
    }
  }, []);

  return <p>Redirecting...</p>;
}
