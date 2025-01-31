// pages/scenarios/index.js
import Link from 'next/link';

export default function Scenarios() {
  const scenarios = [
    { id: 1, title: 'Breaking: Major Earthquake Hits California' },
    { id: 2, title: 'Tech Giant Announces Revolutionary AI Model' },
    { id: 3, title: 'Election Results: Shocking Turn of Events' }
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Select a Breaking News Challenge</h1>
      <ul className="space-y-4">
        {scenarios.map((scenario) => (
          <li key={scenario.id} className="border p-4 rounded-md hover:bg-gray-100">
            <Link href={`/scenarios/${scenario.id}`} className="text-xl font-semibold text-blue-600">
              {scenario.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
