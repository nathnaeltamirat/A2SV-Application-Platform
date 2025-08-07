'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function ForgotPasswordPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Email is required');
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    try {
      
      router.push(`/auth/reset?email=${encodeURIComponent(email)}`);
    } catch (err) {
      console.error('Forgot password error:', err);
      setError('Failed to send reset link. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white py-10 px-8 shadow-lg rounded-xl">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              <img
                src= "/A2SV.png"
                alt="A2SV logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
            <h1 className="text-2xl font-semibold text-gray-900">Forgot your password?</h1>
            <p className="text-sm mt-1 text-gray-600">
              Enter your email and we'll send you a link to get back into your account.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email address"
                className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm border-gray-300"
                aria-label="Email address"
              />
            </div>

            {error && (
              <div className="p-3 rounded-md bg-red-50 border border-red-200">
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}
             <Link href="/auth/reset" className="font-medium hover:underline">
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 rounded-md text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-sm ${
                isLoading
                  ? 'bg-indigo-300 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
            >
              {isLoading ? 'Sending...' : 'Send reset link'}
            </button>
            </Link>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-indigo-600">
              <Link href="/auth/login" className="font-medium hover:underline">
                Back to login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
