import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error("Failed to login");

      const data = await res.json();
      if (data.token) {
        localStorage.setItem("token", data.token);
        window.location.href = "/scenarios";
      } else {
        setErrorMessage(data.message || "Invalid credentials!");
      }
    } catch (error) {
      setErrorMessage("An error occurred during login.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
}
