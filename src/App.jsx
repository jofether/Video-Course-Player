import { useState } from 'react';
import { COURSE_DATA, LESSONS } from './constants/courseData';
import Navigation from './components/Navigation';
import VideoPlayer from './components/VideoPlayer';
import LessonInfo from './components/LessonInfo';
import CourseCard from './components/CourseCard';
import CourseHighlights from './components/CourseHighlights';
import LessonsList from './components/LessonsList';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeLesson, setActiveLesson] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentLesson = LESSONS[activeLesson - 1];
  const progressPercentage = (activeLesson / LESSONS.length) * 100;
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white font-sans">
      <Navigation />

      <div className="max-w-7xl mx-auto">
        {/* Hero Section with Video Player */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
          {/* Main Content Column */}
          <div className="lg:col-span-2">
            <VideoPlayer 
              lesson={currentLesson}
              isPlaying={isPlaying}
              onPlayToggle={() => setIsPlaying(!isPlaying)}
            />
            <LessonInfo 
              lesson={currentLesson}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <CourseCard 
              course={COURSE_DATA}
              progressPercentage={progressPercentage}
              lessonCount={LESSONS.length}
              currentLessonId={activeLesson}
            />
            <CourseHighlights highlights={COURSE_DATA.highlights} />
          </div>
        </div>

        {/* Lessons Playlist */}
        <LessonsList 
          lessons={LESSONS}
          activeLesson={activeLesson}
          onLessonSelect={setActiveLesson}
        />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;