export default function LessonsList({ lessons, activeLesson, onLessonSelect }) {
  const totalMinutes = lessons.reduce((sum, l) => sum + parseInt(l.duration), 0);

  return (
    <div className="p-6 pt-0">
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden">
        <div className="p-6 border-b border-slate-700 rounded-2x">
          <h2 className="text-2xl font-bold flex items-center space-x-3">
            <span className="text-cyan-400 text-3xl">📖</span>
            <span>Course Curriculum</span>
          </h2>
          <p className="text-slate-400 mt-2">{lessons.length} lessons • {totalMinutes} minutes total</p>
        </div>
        <div className="divide-y divide-slate-700">
          {lessons.map((lesson) => (
            <LessonItem 
              key={lesson.id}
              lesson={lesson}
              isActive={activeLesson === lesson.id}
              isCompleted={lesson.id < activeLesson}
              onSelect={onLessonSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function LessonItem({ lesson, isActive, isCompleted, onSelect }) {
  return (
    <button
      onClick={() => onSelect(lesson.id)}
      className={`w-full text-left p-5 hover:bg-slate-700/50 transition flex items-start space-x-4 group ${
        isActive ? 'bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border-l-4 border-l-cyan-500' : ''
      }`}
    >
      <div className="flex-shrink-0 flex items-center justify-center">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${
          isActive 
            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white' 
            : 'bg-slate-700 text-slate-400 group-hover:bg-slate-600'
        }`}>
          {lesson.id}
        </div>
      </div>

      <div className="flex-1">
        <h3 className={`font-semibold ${isActive ? 'text-cyan-400' : 'text-slate-50 group-hover:text-white'}`}>
          {lesson.title}
        </h3>
        <p className="text-sm text-slate-500 mt-1">{lesson.description}</p>
        <div className="flex items-center mt-3 space-x-4 text-xs text-slate-500">
          <span className="flex items-center space-x-1">
            <span>⏱</span>
            <span>{lesson.duration}</span>
          </span>
          {isCompleted && <span className="text-green-400">✓ Completed</span>}
          {isActive && <span className="text-cyan-400">● In Progress</span>}
        </div>
      </div>

      <div className="flex-shrink-0">
        {isCompleted && <span className="text-green-400 text-xl">✓</span>}
      </div>
    </button>
  );
}
