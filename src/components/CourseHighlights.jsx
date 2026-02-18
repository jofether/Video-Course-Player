export default function CourseHighlights({ highlights }) {
  return (
    <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-4 space-y-3">
      <p className="text-sm font-semibold text-cyan-400">What's Included</p>
      {highlights.map((highlight, i) => (
        <div key={i} className="flex items-start space-x-3 text-sm">
          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0"></div>
          <span className="text-slate-300">{highlight}</span>
        </div>
      ))}
    </div>
  );
}
