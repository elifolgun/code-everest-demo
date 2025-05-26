'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

interface Bug {
  id: number;
  title: string;
  description: string;
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  status: 'Open' | 'In Progress' | 'Closed';
  tags: string[];
  assignee: string;
  createdAt: string;
}

const sampleBug: Bug = {
  id: 1,
  title: 'Login Button Not Working',
  description: 'The login button on the main page is not responding to clicks. Users are unable to log into their accounts. This appears to be affecting all browsers and devices. Steps to reproduce:\n\n1. Navigate to the login page\n2. Enter valid credentials\n3. Click the login button\n4. Nothing happens - no error message, no redirect',
  severity: 'Critical',
  status: 'Open',
  tags: ['UI', 'Authentication'],
  assignee: 'Alice Johnson',
  createdAt: '2025-01-08'
};

const sampleComments = [
  {
    id: 1,
    author: 'Alice Johnson',
    content: 'I\'ve started investigating this issue. Check the console for any JavaScript errors.',
    timestamp: '2025-01-08 10:30 AM'
  },
  {
    id: 2,
    author: 'Bob Smith',
    content: 'I can reproduce this on Chrome and Firefox. Seems like the click event handler is not attached.',
    timestamp: '2025-01-08 11:15 AM'
  }
];

export default function BugDetail() {
  const params = useParams();
  const [bug, setBug] = useState<Bug>(sampleBug);
  const [newComment, setNewComment] = useState('');
  const [showAISuggestions, setShowAISuggestions] = useState(false);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'text-red-400 bg-red-900/20 border-red-800';
      case 'High': return 'text-orange-400 bg-orange-900/20 border-orange-800';
      case 'Medium': return 'text-yellow-400 bg-yellow-900/20 border-yellow-800';
      case 'Low': return 'text-blue-400 bg-blue-900/20 border-blue-800';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open': return 'text-red-400 bg-red-900/20 border-red-800';
      case 'In Progress': return 'text-yellow-400 bg-yellow-900/20 border-yellow-800';
      case 'Closed': return 'text-green-400 bg-green-900/20 border-green-800';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-800';
    }
  };

  const handleStatusChange = (newStatus: 'Open' | 'In Progress' | 'Closed') => {
    setBug(prev => ({ ...prev, status: newStatus }));
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      // In a real app, this would add to the comments array
      alert('Comment added! (This is a demo)');
      setNewComment('');
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link href="/bugs" className="text-blue-400 hover:text-blue-300 transition-colors">
            ← Back to All Bugs
          </Link>
        </div>

        {/* Bug Header */}
        <div className="bg-gray-900 rounded-xl border border-gray-800 p-8 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-white mb-4">{bug.title}</h1>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className={`px-3 py-1 rounded-full border text-sm font-medium ${getSeverityColor(bug.severity)}`}>
                  {bug.severity}
                </div>
                <div className={`px-3 py-1 rounded-full border text-sm font-medium ${getStatusColor(bug.status)}`}>
                  {bug.status}
                </div>
                <div className="text-gray-400 text-sm flex items-center">
                  📅 Created: {bug.createdAt}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {bug.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-full border border-blue-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-400">
                Assigned to: <span className="text-white font-medium">{bug.assignee}</span>
              </p>
            </div>

            {/* Status Controls */}
            <div className="lg:w-64">
              <h3 className="text-lg font-semibold text-white mb-4">Update Status</h3>
              <div className="space-y-2">
                {(['Open', 'In Progress', 'Closed'] as const).map((status) => (
                  <button
                    key={status}
                    onClick={() => handleStatusChange(status)}
                    className={`w-full px-4 py-2 rounded-lg text-left transition-colors ${
                      bug.status === status
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-8">
              <h2 className="text-xl font-semibold text-white mb-4">Description</h2>
              <div className="text-gray-300 whitespace-pre-wrap leading-relaxed">
                {bug.description}
              </div>
            </div>

            {/* AI Summary */}
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-8">
              <h2 className="text-xl font-semibold text-white mb-4">AI Summary</h2>
              <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4">
                <p className="text-blue-200">
                  🤖 <strong>Placeholder summary:</strong> This appears to be a critical UI issue affecting user authentication. 
                  The login button's click event handler may not be properly attached, preventing users from accessing their accounts. 
                  Immediate investigation of JavaScript console errors and event binding is recommended.
                </p>
              </div>
            </div>

            {/* AI Suggestions */}
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-white">AI Suggestions</h2>
                <button
                  onClick={() => setShowAISuggestions(!showAISuggestions)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Get AI Suggestions
                </button>
              </div>
              
              {showAISuggestions ? (
                <div className="space-y-4">
                  <div className="bg-green-900/20 border border-green-800 rounded-lg p-4">
                    <h4 className="text-green-300 font-medium mb-2">💡 Suggested Fix #1</h4>
                    <p className="text-green-200 text-sm">
                      Check if the click event listener is properly attached to the login button. 
                      Verify that the JavaScript is loading correctly and there are no console errors.
                    </p>
                  </div>
                  <div className="bg-green-900/20 border border-green-800 rounded-lg p-4">
                    <h4 className="text-green-300 font-medium mb-2">💡 Suggested Fix #2</h4>
                    <p className="text-green-200 text-sm">
                      Ensure the form submission handler is preventing default behavior and properly 
                      processing the authentication request.
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-gray-400">No suggestions available. Click the button above to generate AI suggestions.</p>
              )}
            </div>

            {/* Comments */}
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-8">
              <h2 className="text-xl font-semibold text-white mb-6">Comments</h2>
              
              {/* Existing Comments */}
              <div className="space-y-4 mb-6">
                {sampleComments.map((comment) => (
                  <div key={comment.id} className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">{comment.author}</span>
                      <span className="text-gray-400 text-sm">{comment.timestamp}</span>
                    </div>
                    <p className="text-gray-300">{comment.content}</p>
                  </div>
                ))}
              </div>

              {/* Add Comment Form */}
              <form onSubmit={handleCommentSubmit} className="space-y-4">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Add a comment..."
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                />
                <button
                  type="submit"
                  className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  Add Comment
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Bug Info */}
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Bug Information</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-gray-400">Bug ID:</span>
                  <span className="text-white ml-2">#{params.id}</span>
                </div>
                <div>
                  <span className="text-gray-400">Reporter:</span>
                  <span className="text-white ml-2">John Doe</span>
                </div>
                <div>
                  <span className="text-gray-400">Priority:</span>
                  <span className="text-white ml-2">High</span>
                </div>
                <div>
                  <span className="text-gray-400">Environment:</span>
                  <span className="text-white ml-2">Production</span>
                </div>
              </div>
            </div>

            {/* Related Bugs */}
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Related Bugs</h3>
              <div className="space-y-2">
                <Link href="/bugs/2" className="block text-blue-400 hover:text-blue-300 text-sm transition-colors">
                  #2 Profile Image Not Loading
                </Link>
                <Link href="/bugs/4" className="block text-blue-400 hover:text-blue-300 text-sm transition-colors">
                  #4 Password Reset Email Not Sending
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 