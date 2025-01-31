// pages/auth/login.js
import Link from 'next/link';

export default function Login() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <input className="block w-full p-2 border rounded-md mb-4" placeholder="Email" />
      <input className="block w-full p-2 border rounded-md mb-4" placeholder="Password" type="password" />
      <button className="bg-blue-600 text-white px-6 py-2 rounded-md">Login</button>
      <p className="mt-4">Don&apos;t have an account? <Link href="/auth/register" className="text-blue-600">Register</Link></p>
    </div>
  );
}
