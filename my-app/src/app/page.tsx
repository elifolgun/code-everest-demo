import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center py-20 animate-fade-in">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-2xl mb-6">
              <span className="text-4xl">⛰️</span>
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-6">
            Code Everest Bug Tracker
          </h1>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Scale your development process by tracking and resolving bugs efficiently.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/log-bug"
              className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Log a Bug
            </Link>
            <Link 
              href="/bugs"
              className="border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
            >
              View Bugs
            </Link>
          </div>
        </div>
        
        {/* Key Features Section */}
        <div className="py-20">
          <h2 className="text-3xl font-bold text-white text-center mb-16">
            Key Features
          </h2>
          
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Everything you need to manage bugs effectively and improve your development workflow.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <div className="text-2xl mb-4">🐛</div>
              <h3 className="text-lg font-semibold text-white mb-2">Log Bugs</h3>
              <p className="text-gray-400 text-sm">
                Quickly report bugs with detailed descriptions, severity levels, and assignee information.
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <div className="text-2xl mb-4">📊</div>
              <h3 className="text-lg font-semibold text-white mb-2">Track Progress</h3>
              <p className="text-gray-400 text-sm">
                Monitor bug status, view detailed information, and track resolution progress.
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <div className="text-2xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold text-white mb-2">Sort & Filter</h3>
              <p className="text-gray-400 text-sm">
                Organize bugs by severity, status, tags, and other criteria for better management.
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <div className="text-2xl mb-4">📈</div>
              <h3 className="text-lg font-semibold text-white mb-2">Analytics</h3>
              <p className="text-gray-400 text-sm">
                Visualize bug trends and team performance with comprehensive dashboard insights.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="border-t border-gray-800 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500">Code Everest Bug Tracker © 2025</p>
        </div>
      </footer>
    </div>
  );
}
