// pages/scenarios/[id].js
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function WritingChallenge() {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState('');

  return (
  <div className="container mx-auto p-6">
    <h1 className="text-3xl font-bold mb-4">Writing Challenge {id}</h1>
    <textarea
      className="w-full h-64 p-4 border rounded-md"
      placeholder="Start writing..."
      value={article}
      onChange={(e) => setArticle(e.target.value)}
    />
    <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md">Submit</button>
  </div>
);
}
