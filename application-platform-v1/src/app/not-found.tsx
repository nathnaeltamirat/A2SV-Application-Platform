import Footer from "@/components/footer/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-gray-100">
      <header
        className="flex justify-evenly p-3 flex-wrap bg-white"
      >
        <img src="/Images/a2sv.png" className="w-20" />
        <div className="flex flex-wrap gap-8">
          <Link href="#" style={{ color: "#374151" }} className="text-sm">
            The Journey
          </Link>
          <Link href="#" style={{ color: "#374151" }} className="text-sm">
            About
          </Link>
          <Link href="#" style={{ color: "#374151" }} className="text-sm">
            Testimonials
          </Link>
          <Link
            href="/dashboard"
            className="text-white font-semibold p-1 text-sm px-2   rounded-md"
            style={{ background: "#4f46e5" }}
          >
            Apply Now
          </Link>
        </div>
      </header>
      <div className="min-h-screen grid place-items-center ">
        <div className="w-full max-w-md  p-8  text-center my-4 items-center">
          <h1 className="text-7xl font-bold text-indigo-600 mb-2 my-7">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <Link
            href="/"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Go Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
