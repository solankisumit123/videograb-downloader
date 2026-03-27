import { Shield, Lock, Eye, FileText, Bell } from 'lucide-react';

export function Privacy() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <main className="min-h-screen bg-[#fcfdff] py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-black text-slate-900 tracking-tight">Privacy Policy</h1>
          <p className="text-slate-500 font-medium italic">Last updated: {lastUpdated}</p>
        </div>

        <div className="bg-white rounded-[40px] p-12 border border-slate-100 shadow-2xl shadow-slate-100/50 prose prose-slate max-w-none">
          <section className="space-y-6 mb-12">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <Shield className="text-indigo-600" /> Introduction
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              At VideoGrab (VidsSave), we take your privacy seriously. This Policy explains how we handle your data when you use our video downloader. 
              Our service is designed with a "Privacy First" mindset: we want you to download what you love without worrying about who is watching.
            </p>
          </section>

          <section className="space-y-6 mb-12">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <Lock className="text-indigo-600" /> No Personal Data Collection
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              Unlike many other services, VideoGrab **does not** require an account, email address, or any personal identification to function. 
              We do not track your downloads back to your identity.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
               <li className="p-4 bg-slate-50 rounded-2xl flex items-center gap-3 font-bold text-slate-700">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" /> No Registration
               </li>
               <li className="p-4 bg-slate-50 rounded-2xl flex items-center gap-3 font-bold text-slate-700">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" /> No Email Required
               </li>
               <li className="p-4 bg-slate-50 rounded-2xl flex items-center gap-3 font-bold text-slate-700">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" /> No Tracking Cookies
               </li>
               <li className="p-4 bg-slate-50 rounded-2xl flex items-center gap-3 font-bold text-slate-700">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" /> Anonymous Storage
               </li>
            </ul>
          </section>

          <section className="space-y-6 mb-12">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <Eye className="text-indigo-600" /> Usage Data \u0026 Logging
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              To maintain our service, we collect anonymous technical data including:
            </p>
            <ul className="text-slate-500 space-y-2 font-medium">
              <li>• Browser type and version</li>
              <li>• Operating system</li>
              <li>• Referral source</li>
              <li>• Platform of the video being analyzed (e.g., YouTube, TikTok)</li>
            </ul>
            <p className="text-slate-500 text-sm">
              This data is strictly used for performance optimization and technical troubleshooting.
            </p>
          </section>

          <section className="space-y-6 mb-12">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <FileText className="text-indigo-600" /> Third-Party Services
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              Our service interacts with social media platforms (YouTube, Instagram, etc.) to fetch video data. 
              When you download a file, you are subject to the privacy policies of the originating platform. 
              We may also use third-party analytics (like Google Analytics) to understand site traffic.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <Bell className="text-indigo-600" /> Policy Changes
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              We may update this policy periodically. Significant changes will be announced on our homepage. 
              By continuing to use the service, you agree to the latest version of this Privacy Policy.
            </p>
          </section>
        </div>

        <div className="bg-indigo-600 rounded-[40px] p-12 text-center space-y-6 shadow-3xl shadow-indigo-600/20">
           <h2 className="text-3xl font-black text-white">Your Privacy Matters</h2>
           <p className="text-indigo-100 text-lg font-medium max-w-xl mx-auto">
              If you have any questions about how we handle your data, please don't hesitate to reach out.
           </p>
           <a href="mailto:vidssaveteam@gmail.com" className="inline-block px-10 py-5 bg-white text-indigo-600 rounded-2xl font-black text-lg transition-all hover:scale-105">
              CONTACT PRIVACY DEPT
           </a>
        </div>
      </div>
    </main>
  );
}
