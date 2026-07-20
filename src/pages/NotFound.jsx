import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-white py-20">
      <div className="max-w-md text-center px-4">
        <h1 className="text-7xl font-extrabold text-gray-200 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-700 to-primary-500 text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
