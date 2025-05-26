'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';

export default function LogBug() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    severity: '',
    assignee: ''
  });

  const [showDuplicateWarning, setShowDuplicateWarning] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Show duplicate warning for demo purposes when title contains "login"
    if (name === 'title' && value.toLowerCase().includes('login')) {
      setShowDuplicateWarning(true);
    } else if (name === 'title') {
      setShowDuplicateWarning(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission
    alert('Bug logged successfully! (This is a demo)');
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Log a Bug</h1>
          <p className="text-gray-400">Report a new bug to help improve our application.</p>
        </div>

        <div className="bg-gray-900 rounded-xl border border-gray-800 p-8">
          <h2 className="text-xl font-semibold text-white mb-6">Log a New Bug</h2>
          
          {showDuplicateWarning && (
            <div className="bg-yellow-900/20 border border-yellow-600 rounded-lg p-4 mb-6">
              <div className="flex items-center">
                <span className="text-yellow-500 mr-2">⚠️</span>
                <span className="text-yellow-200">
                  Potential duplicate: Bug #123 - "Login Button Not Working"
                </span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter a descriptive title"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe the bug in detail. Include steps to reproduce if possible."
                rows={6}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="severity" className="block text-sm font-medium text-gray-300 mb-2">
                  Severity
                </label>
                <select
                  id="severity"
                  name="severity"
                  value={formData.severity}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select severity</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="critical">Critical</option>
                </select>
              </div>

              <div>
                <label htmlFor="assignee" className="block text-sm font-medium text-gray-300 mb-2">
                  Assignee
                </label>
                <select
                  id="assignee"
                  name="assignee"
                  value={formData.assignee}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select assignee</option>
                  <option value="alice">Alice Johnson</option>
                  <option value="bob">Bob Smith</option>
                  <option value="charlie">Charlie Brown</option>
                  <option value="diana">Diana Wilson</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Submit Bug
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
} 