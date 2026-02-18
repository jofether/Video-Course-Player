export default function TabContent({ activeTab, lessonId }) {
  if (activeTab === 'overview') {
    return (
      <div className="space-y-4 py-6">
        {/* [BUG - TYPO] Changed rounded-xl to rounded-xll (invalid class). [FIX] rounded-xl */}
        <div className="bg-slate-800/50 p-6 rounded-xll border border-slate-700">
          <h3 className="font-bold mb-3 flex items-center space-x-2">
            <span className="text-cyan-400 text-lg">📚</span>
            <span>What You'll Learn</span>
          </h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li className="flex items-start space-x-2">
              <span className="text-green-400 flex-shrink-0 mt-0.5">✓</span>
              <span>Core concepts of multimodal machine learning</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-400 flex-shrink-0 mt-0.5">✓</span>
              <span>Advanced PyTorch and Transformers implementation</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-400 flex-shrink-0 mt-0.5">✓</span>
              <span>Building production-ready AI models</span>
            </li>
          </ul>
        </div>

        <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
          <h3 className="font-bold mb-3 flex items-center space-x-2">
            <span className="text-cyan-400 text-lg">💻</span>
            <span>Lesson Resources</span>
          </h3>
          <div className="space-y-2">
            <button className="w-full text-left px-4 py-3 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition flex items-center justify-between">
              <span className="text-sm">lecture-{lessonId}-notes.pdf</span>
              <span className="text-lg">⬇</span>
            </button>
            <button className="w-full text-left px-4 py-3 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition flex items-center justify-between">
              <span className="text-sm">source-code.zip</span>
              <span className="text-lg">⬇</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (activeTab === 'resources') {
    return (
      <div className="py-6 space-y-3">
        <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-cyan-500/30 transition cursor-pointer">
          <p className="font-medium">📚 Required Reading: Vision Transformers Paper</p>
          <p className="text-sm text-slate-400 mt-1">An Image is Worth 16x16 Words - Dosovitskiy et al.</p>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-cyan-500/30 transition cursor-pointer">
          <p className="font-medium">🔗 External Resources</p>
          <p className="text-sm text-slate-400 mt-1">HuggingFace Model Hub - Pre-trained Transformers</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-6">
      <button className="w-full bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 hover:border-cyan-500 px-4 py-3 rounded-lg transition font-medium">
        Join Discussion (Opening soon)
      </button>
    </div>
  );
}
