import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Headline Hustle
        </Link>
        <div className="space-x-4">
          <Link href="/scenarios" className="hover:text-gray-300">Scenarios</Link>
          <Link href="/leaderboard" className="hover:text-gray-300">Leaderboard</Link>
          <Link href="/profile" className="hover:text-gray-300">Profile</Link>
          <Link href="/login" className="bg-white text-blue-600 px-3 py-1 rounded-md hover:bg-gray-200">Login</Link>
        </div>
      </div>
    </nav>
  );
}
