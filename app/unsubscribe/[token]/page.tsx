"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function UnsubscribePage() {
  const { token } = useParams<{ token: string }>();

  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!token) return;

    const unsubscribe = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE}/subscriber/unsubscribe/${token}`,
        );

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Invalid unsubscribe link");
        }

        setSuccess(true);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };

    unsubscribe();
  }, [token]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="max-w-md w-full bg-black/60 border border-white/10 rounded-2xl p-8 text-center backdrop-blur">
        {loading && (
          <>
            <h1 className="text-white text-2xl mb-3">
              Processing your request…
            </h1>
            <p className="text-gray-400 text-sm">
              Please wait while we unsubscribe you.
            </p>
          </>
        )}

        {!loading && success && (
          <>
            <h1 className="text-green-400 text-2xl mb-3">
              You’re Unsubscribed ✅
            </h1>
            <p className="text-gray-300 text-sm mb-6">
              You have successfully unsubscribed from our emails.
            </p>

            <Link
              href="/"
              className="inline-block px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
            >
              Go Back Home
            </Link>
          </>
        )}

        {!loading && error && (
          <>
            <h1 className="text-red-400 text-2xl mb-3">Unsubscribe Failed</h1>
            <p className="text-gray-300 text-sm mb-6">{error}</p>

            <Link
              href="/"
              className="inline-block px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
            >
              Go Back Home
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
