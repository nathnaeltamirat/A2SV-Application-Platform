"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loggedInformation } from "@/utils/login";
// import { useDispatch } from "react-redux"; // Uncomment if using Redux
// import { setUser } from "@/features/auth/authSlice"; // Adjust path as needed

export default function LoginPage() {
  const router = useRouter();
  // const dispatch = useDispatch(); // Uncomment if using Redux
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const ADMIN_EMAIL = "admin@a2sv.org";
  const ADMIN_PASSWORD = "securepassword";

  const [validationErrors, setValidationErrors] = useState<{
    [key: string]: string;
  }>({});

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (validationErrors[name]) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) return;

    setIsLoading(true);
    const { email, password } = formData;

    try {
      // Admin login
      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        localStorage.setItem("role", "admin");
        localStorage.setItem("adminLoggedIn", "true");

        // Optional Redux usage
        /*
        dispatch(
          setUser({
            id: "admin-001",
            name: "Admin",
            role: "admin",
          })
        );
        */

        router.replace("/admin");
        return;
      }

      // Student login
      const responseData = await loggedInformation(formData);
      const token = responseData.data.accessToken;
      const role = responseData.data.role;

      if (token) {
        localStorage.setItem("accessToken", token);
      }

      if (role) {
        localStorage.setItem("role", role);
      }

      router.replace("/redirect");
    } catch (err) {
      console.error("Login error:", err);
      setError("Login failed. Please check your credentials and try again.");
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
                src="/A2SV.png"
                alt="A2SV logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
            <h1 className="text-2xl font-semibold text-gray-900">
              Welcome Back
            </h1>
            <p className="text-sm mt-1 text-gray-600">
              Sign in to your A2SV account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email address"
                className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm ${
                  validationErrors.email ? "border-red-300" : "border-gray-300"
                }`}
              />
              {validationErrors.email && (
                <p className="text-xs text-red-600 mt-1">
                  {validationErrors.email}
                </p>
              )}
            </div>

            <div>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm ${
                  validationErrors.password
                    ? "border-red-300"
                    : "border-gray-300"
                }`}
              />
              {validationErrors.password && (
                <p className="text-xs text-red-600 mt-1">
                  {validationErrors.password}
                </p>
              )}
            </div>

            {error && (
              <div className="p-3 rounded-md bg-red-50 border border-red-200">
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 rounded-md text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-sm ${
                isLoading
                  ? "bg-indigo-300 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700"
              }`}
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <div className="mt-6 text-center space-y-2">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                href="/auth/signup"
                className="font-medium text-indigo-600 hover:underline"
              >
                Sign up
              </Link>
            </p>
            <p className="text-sm text-gray-600">
              <Link
                href="/auth/forgot-password"
                className="font-medium text-indigo-600 hover:underline"
              >
                Forgot your password?
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}