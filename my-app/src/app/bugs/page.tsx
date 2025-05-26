'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

interface Bug {
  id: number;
  title: string;
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  status: 'Open' | 'In Progress' | 'Closed';
  tags: string[];
  assignee: string;
}

const sampleBugs: Bug[] = [
  {
    id: 1,
    title: 'Login Button Not Working',
    severity: 'Critical',
    status: 'Open',
    tags: ['UI', 'Authentication'],
    assignee: 'Alice Johnson'
  },
  {
    id: 2,
    title: 'Profile Image Not Loading',
    severity: 'Medium',
    status: 'In Progress',
    tags: ['UI', 'Assets'],
    assignee: 'Bob Smith'
  },
  {
    id: 3,
    title: 'Incorrect Total in Cart',
    severity: 'High',
    status: 'Open',
    tags: ['Calculation', 'Payment'],
    assignee: 'Charlie Brown'
  },
  {
    id: 4,
    title: 'Password Reset Email Not Sending',
    severity: 'Critical',
    status: 'In Progress',
    tags: ['Email', 'Authentication'],
    assignee: 'Diana Wilson'
  },
  {
    id: 5,
    title: 'Search Results Pagination Error',
    severity: 'Low',
    status: 'Closed',
    tags: ['UI', 'Search'],
    assignee: 'Alice Johnson'
  }
];

export default function Bugs() {
  const [bugs, setBugs] = useState<Bug[]>(sampleBugs);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'severity' | 'status' | 'title'>('severity');

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'text-red-400';
      case 'High': return 'text-orange-400';
      case 'Medium': return 'text-yellow-400';
      case 'Low': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open': return 'text-red-400';
      case 'In Progress': return 'text-yellow-400';
      case 'Closed': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const sortBugs = (criteria: 'severity' | 'status' | 'title') => {
    const severityOrder = { 'Critical': 4, 'High': 3, 'Medium': 2, 'Low': 1 };
    const statusOrder = { 'Open': 3, 'In Progress': 2, 'Closed': 1 };

    const sorted = [...bugs].sort((a, b) => {
      if (criteria === 'severity') {
        return severityOrder[b.severity] - severityOrder[a.severity];
      } else if (criteria === 'status') {
        return statusOrder[b.status] - statusOrder[a.status];
      } else {
        return a.title.localeCompare(b.title);
      }
    });

    setBugs(sorted);
    setSortBy(criteria);
  };

  const filteredBugs = bugs.filter(bug =>
    bug.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bug.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">All Bugs</h1>
          <p className="text-gray-400">View and manage all reported bugs.</p>
        </div>

        {/* Search and Sort Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search bugs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <button
            onClick={() => sortBugs('severity')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              sortBy === 'severity' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            🔽 Sort by Severity
          </button>
        </div>

        {/* Bugs Table */}
        {filteredBugs.length === 0 ? (
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-12 text-center">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">No bugs found</h3>
            <p className="text-gray-400">Try adjusting your search criteria or log a new bug.</p>
          </div>
        ) : (
          <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                      Severity
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                      Tags
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {filteredBugs.map((bug) => (
                    <tr 
                      key={bug.id} 
                      className="hover:bg-gray-800 transition-colors cursor-pointer"
                    >
                      <td className="px-6 py-4">
                        <Link href={`/bugs/${bug.id}`} className="block">
                          <div className="text-white font-medium hover:text-blue-400 transition-colors">
                            {bug.title}
                          </div>
                          <div className="text-sm text-gray-400 mt-1">
                            Assigned to {bug.assignee}
                          </div>
                        </Link>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`font-medium ${getSeverityColor(bug.severity)}`}>
                          {bug.severity}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`font-medium ${getStatusColor(bug.status)}`}>
                          {bug.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-2">
                          {bug.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-full border border-blue-800"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 