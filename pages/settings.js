// pages/settings.js
export default function Settings() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Settings</h1>
      <label className="block mb-2">
        <input type="checkbox" className="mr-2" /> Enable notifications
      </label>
      <label className="block mb-2">
        <input type="checkbox" className="mr-2" /> Show my profile on the leaderboard
      </label>
    </div>
  );
}
