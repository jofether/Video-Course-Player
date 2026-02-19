export default function Navigation() {
  return (
    <nav className="sticky top-0 z-0 border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center text-xl font-bold">
            ⚡
          </div>
          <span className="font-bold text-xl">CourseHub</span>
        </div>
        <div className="hidden md:flex-col items-center space-x-8">
          <button className="text-slate-400 hover:text-white transition">Browse</button>
          <button className="text-slate-400 hover:text-white transition">My Learning</button>
          <button className="text-slate-400 hover:text-white transition">Community</button>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/20 transition">Profile</button>
        </div>
      </div>
    </nav>
  );
}
