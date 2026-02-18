import TabContent from './TabContent';

const TABS = ['overview', 'resources', 'discussion'];

export default function LessonInfo({ lesson, activeTab, onTabChange }) {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-3xl font-bold mb-2">Lesson {lesson.id}: {lesson.title}</h1>
        <p className="text-slate-400">{lesson.description}</p>
      </div>

      <div className="flex space-x-1 border-b border-slate-700 mt-8">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`px-6 py-3 font-medium border-b-2 transition ${
              activeTab === tab
                ? 'border-cyan-500 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-300'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <TabContent activeTab={activeTab} lessonId={lesson.id} />
    </div>
  );
}
