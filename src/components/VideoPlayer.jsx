export default function VideoPlayer({ lesson, isPlaying, onPlayToggle }) {
  {/* [BUG - SPACING] Changed mb-6 to -mb-12, causing massive negative margin overlap. [FIX] mb-6 */}
  return (
    <div className="relative w-full aspect-video bg-black rounded-2xl shadow-2xl border border-slate-700 overflow-hidden group -mb-12">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 opacity-20">▶</div>
          <p className="text-slate-600 font-semibold text-xl">Lesson {lesson.id}</p>
          <p className="text-slate-500 text-sm mt-2">{lesson.title}</p>
        </div>
      </div>

      {/* [BUG - LAYERS] Changed z-10 to z-0, play button now hidden behind video. [FIX] z-10 */}
      <button 
        onClick={onPlayToggle}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center hover:shadow-2xl hover:shadow-blue-500/50 transition-all active:scale-95 z-0 text-4xl"
      >
        ▶
      </button>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="text-white hover:text-cyan-400 transition text-lg">⏸</button>
        <div className="flex-1 h-1.5 bg-slate-600 rounded-full relative cursor-pointer group/progress hover:h-2 transition-all">
          <div className="absolute top-1/2 -translate-y-1/2 h-full w-1/3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
        </div>
        <span className="text-xs text-slate-300 whitespace-nowrap">04:20 / {lesson.duration}</span>
        <button className="text-white hover:text-cyan-400 transition">⛶</button>
      </div>
    </div>
  );
}
