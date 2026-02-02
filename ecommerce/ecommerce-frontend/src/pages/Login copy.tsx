import { useState } from "react";
import { NavLink } from "react-router";

export default function LoginChoice() {
  const [userType, setUserType] = useState<"buyer" | "seller" | null>(null);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      {!userType ? (
        // Choice Screen
        <div className="w-full max-w-md rounded-xl bg-white p-6 text-center shadow-lg">
          <h2 className="mb-6 text-2xl font-semibold">Login As</h2>
          <div className="flex flex-col gap-4">
            <button
              className="rounded bg-blue-500 py-2 text-white transition hover:bg-blue-600"
              onClick={() => setUserType("buyer")}
            >
              Buyer Login
            </button>
            <button
              className="rounded bg-green-500 py-2 text-white transition hover:bg-green-600"
              onClick={() => setUserType("seller")}
            >
              Seller Login
            </button>
          </div>
        </div>
      ) : (
        // Login Form
        <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold capitalize">
            {userType} Login
          </h2>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded bg-blue-500 py-2 text-white transition hover:bg-blue-600"
            >
              Login
            </button>
          </form>

          <p>
            <NavLink
              to="/signup"
              className="font-small text-blue-500 hover:text-blue-700 hover:underline"
            >
              Don’t have an account? Create account
            </NavLink>
          </p>

          <button
            className="mt-4 text-sm text-gray-500 hover:underline"
            onClick={() => setUserType(null)}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
}
