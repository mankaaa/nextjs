import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white font-bold text-2xl">
            CAZN
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link
              href="/"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/register"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Register
            </Link>
            <Link
              href="/login"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Login
            </Link>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="mt-4 md:hidden">
            <Link
              href="/"
              className="block text-white hover:text-gray-300 py-2 transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/register"
              className="block text-white hover:text-gray-300 py-2 transition duration-300"
            >
              Register
            </Link>
            <Link
              href="/login"
              className="block text-white hover:text-gray-300 py-2 transition duration-300"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
