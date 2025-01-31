// pages/leaderboard.js
export default function Leaderboard() {
  const leaderboard = [
    { name: 'Alice', score: 95 },
    { name: 'Bob', score: 90 },
    { name: 'Charlie', score: 85 }
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Leaderboard</h1>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Rank</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((user, index) => (
            <tr key={index} className="text-center">
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
