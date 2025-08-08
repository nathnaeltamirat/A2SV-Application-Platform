// index.html
import Link from "next/link";

const LandingHeader = () => {
  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-around items-center">
            <img src="/Images/a2sv.png" className="w-20" />
          <div className="relative flex items-center space-x-4">
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
              href="#"
              className="text-sm text-white bg-indigo-600 px-3.5 py-1.5 rounded"
              style={{ background: "#4f46e5" }}
            >
              Apply Now
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default LandingHeader;
