import React, { useState } from 'react';

function App() {
  const [activeLesson, setActiveLesson] = useState(1);
  
  const lessons = [
    { id: 1, title: 'Introduction to Multimodal AI', duration: '10:05' },
    { id: 2, title: 'Setting up the Environment', duration: '15:30' },
    { id: 3, title: 'Understanding Vision Transformers', duration: '22:15' },
    { id: 4, title: 'Building the Dataset', duration: '18:00' },
    { id: 5, title: 'Training the Gating Network', duration: '25:45' },
  ];

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-900 text-white font-sans">
      
      {/* MAIN CONTENT: Video Player Area */}
      <main className="flex-1 flex flex-col p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold">Advanced AI Engineering</h1>
          <p className="text-gray-400">Lesson {activeLesson}: {lessons[activeLesson-1].title}</p>
        </header>

        {/* VIDEO CONTAINER: Uses aspect-ratio to maintain shape */}
        {/* FUTURE BUG: Remove 'relative' or 'aspect-video' to break layout */}
        <div className="relative w-full aspect-video bg-black rounded-xl shadow-2xl border border-gray-800 overflow-hidden group">
          
          {/* Mock Video Content */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
            <span className="text-gray-600 font-bold text-4xl opacity-20">VIDEO FEED</span>
          </div>

          {/* CENTER PLAY BUTTON: Absolute positioning */}
          {/* FUTURE BUG: Remove 'absolute' - button will jump to top-left */}
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center hover:scale-110 transition shadow-lg z-10">
            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </button>

          {/* CONTROLS BAR: Absolute at bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="text-white hover:text-indigo-400">❚❚</button>
            <div className="flex-1 h-1 bg-gray-600 rounded-full relative">
              <div className="absolute top-0 left-0 h-full w-1/3 bg-indigo-500 rounded-full"></div>
            </div>
            <span className="text-xs text-gray-300">04:20 / {lessons[activeLesson-1].duration}</span>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gray-800 rounded-xl">
          <h3 className="font-bold mb-2">Lesson Notes</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            In this module, we explore how to fuse textual embeddings from CodeBERT with visual embeddings from ViT. 
            Ensure you have your environment variables set before running the examples.
          </p>
        </div>
      </main>

      {/* SIDEBAR: Playlist (Scrollable) */}
      <aside className="w-full md:w-80 bg-gray-800 border-l border-gray-700 flex flex-col">
        <div className="p-6 border-b border-gray-700 font-bold text-lg">Course Content</div>
        <div className="flex-1 overflow-y-auto">
          {lessons.map((lesson) => (
            <div 
              key={lesson.id}
              onClick={() => setActiveLesson(lesson.id)}
              className={`p-4 border-b border-gray-700 cursor-pointer hover:bg-gray-700 transition flex items-start space-x-3 
                ${activeLesson === lesson.id ? 'bg-gray-700 border-l-4 border-l-indigo-500' : 'border-l-4 border-l-transparent'}`}
            >
              <div className="mt-1 w-6 h-6 rounded-full border border-gray-500 flex items-center justify-center text-xs text-gray-400">
                {lesson.id}
              </div>
              <div>
                <h4 className={`text-sm font-medium ${activeLesson === lesson.id ? 'text-white' : 'text-gray-300'}`}>
                  {lesson.title}
                </h4>
                <span className="text-xs text-gray-500">{lesson.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </aside>

    </div>
  );
}

export default App;