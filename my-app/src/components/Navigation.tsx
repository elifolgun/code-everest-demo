import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors">
            <span className="text-2xl">⛰️</span>
            <span className="font-semibold text-lg">Code Everest</span>
          </Link>
          
          <div className="flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/log-bug" 
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Log a Bug
            </Link>
            <Link 
              href="/bugs" 
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              View Bugs
            </Link>
            <Link 
              href="/dashboard" 
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 