import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import withAuth from "../auth/withAuth";

const Scenarios = () => {
  const [scenarios, setScenarios] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchScenarios = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          router.replace("/login");
          return;
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/scenarios`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch scenarios");
        }

        const data = await res.json();
        setScenarios(data.scenarios || []);
      } catch (err) {
        setError("Could not load scenarios. Please try again later.");
      }
    };

    fetchScenarios();
  }, [router]);

  if (error) {
    return <div style={{ padding: "20px", color: "red" }}>{error}</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Scenarios</h1>
      {scenarios.length === 0 ? (
        <p>No scenarios available.</p>
      ) : (
        <ul>
          {scenarios.map((scenario) => (
            <li key={scenario.id}>
              <h2>{scenario.title}</h2>
              <p>{scenario.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default withAuth(Scenarios);
