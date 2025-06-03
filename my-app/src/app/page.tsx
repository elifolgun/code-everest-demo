// src/app/page.tsx

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <h1 className="text-4xl font-bold mb-6 text-indigo-800">🐛 Code Everest Bug Tracker</h1>
      <p className="text-gray-600 mb-8 text-center max-w-lg">
        Hoş geldin! Aşağıdaki butonlarla temel işlemleri gerçekleştirebilirsin. UI şu anda geliştirme aşamasında. 🚀
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-md">
        <button className="bg-white rounded-2xl shadow p-4 hover:bg-indigo-50 transition text-center text-indigo-700 font-medium">
          🐞 Bug Listele
        </button>
        <button className="bg-white rounded-2xl shadow p-4 hover:bg-indigo-50 transition text-center text-indigo-700 font-medium">
          ➕ Bug Ekle
        </button>
        <button className="bg-white rounded-2xl shadow p-4 hover:bg-indigo-50 transition text-center text-indigo-700 font-medium">
          📊 Dashboard
        </button>
        <button className="bg-white rounded-2xl shadow p-4 hover:bg-indigo-50 transition text-center text-indigo-700 font-medium">
          💬 Yorumlar
        </button>
        <button className="bg-white rounded-2xl shadow p-4 hover:bg-indigo-50 transition text-center text-indigo-700 font-medium">
          🤖 AI Özellikleri
        </button>
      </div>
    </main>
  );
}