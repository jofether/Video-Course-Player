export default function Footer() {
  return (
    <footer className="border-t border-slate-700 mt-12 py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="font-bold mb-4 flex items-center space-x-2">
            <span className="text-cyan-400 text-lg">⚡</span>
            <span>CourseHub</span>
          </h3>
          <p className="text-sm text-slate-400">Learn advanced AI and machine learning from industry experts.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Platform</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li className="hover:text-white transition cursor-pointer">Browse Courses</li>
            <li className="hover:text-white transition cursor-pointer">Analytics</li>
            <li className="hover:text-white transition cursor-pointer">My Learning</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li className="hover:text-white transition cursor-pointer">Help Center</li>
            <li className="hover:text-white transition cursor-pointer">Contact Us</li>
            <li className="hover:text-white transition cursor-pointer">Feedback</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li className="hover:text-white transition cursor-pointer">Terms of Service</li>
            <li className="hover:text-white transition cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white transition cursor-pointer">Cookie Settings</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-500">
        <p>© 2026 CourseHub. Empowering learners worldwide. Built with ❤️</p>
      </div>
    </footer>
  );
}
