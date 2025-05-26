import Navigation from '@/components/Navigation';

export default function Dashboard() {
  const stats = [
    {
      title: 'Total Bugs',
      value: '25',
      change: '↓ 12% from last week',
      changeColor: 'text-red-400',
      icon: '🐛'
    },
    {
      title: 'Open Bugs',
      value: '12',
      change: '↓ 8% from last week',
      changeColor: 'text-red-400',
      icon: '⭕'
    },
    {
      title: 'In Progress',
      value: '8',
      change: '↑ 5% from last week',
      changeColor: 'text-green-400',
      icon: '⏳'
    },
    {
      title: 'Closed Bugs',
      value: '5',
      change: '↑ 24% from last week',
      changeColor: 'text-green-400',
      icon: '✅'
    }
  ];

  const ChartPlaceholder = ({ title, description }: { title: string; description: string }) => (
    <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
      <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
      <div className="h-64 bg-gray-800 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-700">
        <div className="text-center">
          <div className="text-4xl mb-2">📊</div>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-gray-400">Overview of bug tracking metrics and trends.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-400">{stat.title}</h3>
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <p className={`text-sm ${stat.changeColor}`}>{stat.change}</p>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <ChartPlaceholder 
            title="Bugs by Status" 
            description="Chart Placeholder - Pie chart showing distribution of Open, In Progress, and Closed bugs"
          />
          <ChartPlaceholder 
            title="Bugs by Severity" 
            description="Chart Placeholder - Pie chart showing distribution of Critical, High, Medium, and Low severity bugs"
          />
        </div>

        {/* Weekly Trends */}
        <div className="mb-12">
          <ChartPlaceholder 
            title="Bugs Reported This Week" 
            description="Chart Placeholder - Line chart showing daily bug reports over the past week"
          />
        </div>

        {/* Recent Activity */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Bugs */}
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Recent Bugs</h3>
            <div className="space-y-4">
              {[
                { id: 1, title: 'Login Button Not Working', severity: 'Critical', time: '2 hours ago' },
                { id: 2, title: 'Profile Image Not Loading', severity: 'Medium', time: '4 hours ago' },
                { id: 3, title: 'Incorrect Total in Cart', severity: 'High', time: '6 hours ago' }
              ].map((bug) => (
                <div key={bug.id} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <div>
                    <p className="text-white font-medium text-sm">{bug.title}</p>
                    <p className="text-gray-400 text-xs">{bug.time}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    bug.severity === 'Critical' ? 'bg-red-900/30 text-red-300' :
                    bug.severity === 'High' ? 'bg-orange-900/30 text-orange-300' :
                    'bg-yellow-900/30 text-yellow-300'
                  }`}>
                    {bug.severity}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Team Performance */}
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Team Performance</h3>
            <div className="space-y-4">
              {[
                { name: 'Alice Johnson', resolved: 8, assigned: 12 },
                { name: 'Bob Smith', resolved: 6, assigned: 9 },
                { name: 'Charlie Brown', resolved: 4, assigned: 7 },
                { name: 'Diana Wilson', resolved: 3, assigned: 5 }
              ].map((member, index) => (
                <div key={index} className="p-3 bg-gray-800 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{member.name}</span>
                    <span className="text-gray-400 text-xs">
                      {member.resolved}/{member.assigned} resolved
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${(member.resolved / member.assigned) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 bg-gray-900 rounded-xl border border-gray-800 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              📊 Generate Report
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
              📧 Send Weekly Summary
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
              🔄 Sync with External Tools
            </button>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors">
              ⚙️ Configure Alerts
            </button>
          </div>
        </div>
      </main>
    </div>
  );
} 