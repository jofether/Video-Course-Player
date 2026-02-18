export default function CourseCard({ course, progressPercentage, lessonCount, currentLessonId }) {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden shadow-xl">
      {/* Course Header Image */}
      <div className="relative h-40 bg-gradient-to-br from-cyan-500 to-blue-600 overflow-hidden">
        <div className="absolute inset-0 opacity-20 flex items-center justify-center text-8xl">
          💻
        </div>
      </div>

      {/* Course Details */}
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="font-bold text-lg">{course.title}</h2>
            <p className="text-sm text-slate-400 mt-1">{course.instructor}</p>
          </div>
          <span className="text-cyan-400 text-2xl flex-shrink-0">🏆</span>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex space-x-0.5">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400">★</span>
            ))}
          </div>
          <span className="text-sm font-medium">{course.rating}</span>
          <span className="text-xs text-slate-500">({course.reviewCount} reviews)</span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 py-4 border-y border-slate-700">
          <div>
            <p className="text-xs text-slate-400">Level</p>
            <p className="font-semibold">{course.level}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400">Duration</p>
            <p className="font-semibold">{course.duration}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400">Students</p>
            <p className="font-semibold flex items-center space-x-1">
              <span>👥</span>
              <span>{(course.students / 1000).toFixed(0)}k</span>
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-400">Price</p>
            <p className="font-semibold text-cyan-400">{course.price}</p>
          </div>
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-400">Course Progress</span>
            <span className="font-bold">{Math.round(progressPercentage)}%</span>
          </div>
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <p className="text-xs text-slate-400">Lesson {currentLessonId} of {lessonCount}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/20 transition flex items-center justify-center space-x-2">
            <span>📤</span>
            <span>Share</span>
          </button>
          <button className="flex-1 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg font-medium transition flex items-center justify-center space-x-2">
            <span>💾</span>
            <span>Save</span>
          </button>
        </div>
      </div>
    </div>
  );
}
