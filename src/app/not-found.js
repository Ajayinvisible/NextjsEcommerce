import Link from "next/link";

function NotFoundPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-red-100">
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-gray-700">
        Sorry, the page you are looking for does not exist.
      </p>
      <p className="mt-2 text-lg text-gray-700">
        Please check the URL or return to the homepage.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-900"
      >
        Go to Homepage
      </Link>
    </div>
  );
}

export default NotFoundPage;
