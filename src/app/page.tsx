export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="text-center space-y-8 p-8 max-w-2xl mx-auto">
        {/* Main Greeting */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
            Hello World!
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light">
            Welcome to your beautiful Next.js application
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center space-x-4">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>

        {/* Description Card */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            🚀 Ready to Build Something Amazing
          </h2>
          <p className="text-gray-600 leading-relaxed">
            This is your starting point for creating incredible web applications. 
            Built with Next.js, styled with Tailwind CSS, and ready for your creative touch.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              Next.js 15
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
              React 19
            </span>
            <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
              Tailwind CSS
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              TypeScript
            </span>
          </div>
        </div>

        {/* Footer Message */}
        <p className="text-sm text-gray-500 italic">
          Made with ❤️ using modern web technologies
        </p>
      </div>
    </main>
  )
}