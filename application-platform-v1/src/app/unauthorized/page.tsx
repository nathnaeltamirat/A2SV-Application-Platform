import Footer from "@/components/footer/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-gray-100">

      <div className="min-h-screen grid place-items-center ">
        <div className="w-full max-w-md  p-8  text-center my-4 items-center">
          <h1 className="text-7xl font-bold text-indigo-600 mb-2 my-7">401</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            UnAuthorized
          </h2>
          <p className="text-gray-600 mb-6">
            Sorry, You aren&apos;t authorized to view this page.
          </p>
          <Link
            href="/"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Go Home
          </Link>
        </div>
      </div>
  
    </div>
  );
}
