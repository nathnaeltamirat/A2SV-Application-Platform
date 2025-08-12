"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AuthHeader from "@/components/auth/authHeader";
import Footer from "@/components/footer/Footer";
import { SignedInfo } from "@/app/api/auth/register/register";

export default function SignupPage() {
  useEffect(() => {
    localStorage.clear();
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [validationErrors, setValidationErrors] = useState<{
    [key: string]: string;
  }>({});

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!formData.full_name.trim()) {
      errors.full_name = "Full name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
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

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const responseData = await SignedInfo(formData);
      if (responseData && responseData.success) {
        window.location.href = "/auth/login";
      } else {
        setError(responseData?.message || "Registration failed. Try again.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AuthHeader login={false} />
      <div className="min-h-screen bg-gray-50 flex flex-row items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="bg-white py-10 px-8 shadow-lg rounded-xl">
            <div className="text-center mb-6">
              <div className="flex justify-center mb-4">
                <img
                  src="/Images/a2sv.png"
                  alt="A2SV logo"
                  width={120}
                  height={40}
                />
              </div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Create a new applicant account
              </h1>
              <p className="text-sm mt-1 text-gray-600">
                Or{" "}
                <Link
                  href="/auth/login"
                  className="font-medium text-indigo-600 hover:underline"
                >
                  sign in to your existing account
                </Link>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  id="full_name"
                  name="full_name"
                  type="text"
                  value={formData.full_name}
                  onChange={handleInputChange}
                  placeholder="Full name"
                  className={`appearance-none block w-full px-3 py-2 text-black border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm ${
                    validationErrors.full_name
                      ? "border-red-300"
                      : "border-gray-300"
                  }`}
                />
                {validationErrors.full_name && (
                  <p className="text-xs text-red-600 mt-1">
                    {validationErrors.full_name}
                  </p>
                )}
              </div>

              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email address"
                  className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm text-black ${
                    validationErrors.email
                      ? "border-red-300"
                      : "border-gray-300"
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
                  autoComplete="off"
                  placeholder="Password"
                  className={` text-black appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm ${
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

              <div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm password"
                  className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm  text-black ${
                    validationErrors.confirmPassword
                      ? "border-red-300"
                      : "border-gray-300"
                  }`}
                />
                {validationErrors.confirmPassword && (
                  <p className="text-xs text-red-600 mt-1">
                    {validationErrors.confirmPassword}
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
                {isLoading ? "Creating Account..." : "Create account"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
