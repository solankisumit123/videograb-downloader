import { FileCheck, Gavel, AlertTriangle, Scale, Globe } from 'lucide-react';

export function Terms() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <main className="min-h-screen bg-[#fcfdff] py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-black text-slate-900 tracking-tight">Terms of Service</h1>
          <p className="text-slate-500 font-medium italic">Last updated: {lastUpdated}</p>
        </div>

        <div className="bg-white rounded-[40px] p-12 border border-slate-100 shadow-2xl shadow-slate-100/50 prose prose-slate max-w-none">
          <section className="space-y-6 mb-12">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <Scale className="text-indigo-600" /> Acceptance of Terms
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              By accessing and using VideoGrab (VidsSave), you are agreeing to comply with and be bound by the following terms and conditions. 
              If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          <section className="space-y-6 mb-12">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <FileCheck className="text-indigo-600" /> Permitted Use
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              VideoGrab is a technical tool designed for **personal, non-commercial use only**. Our goal is to help users store memories, educational content, or personal media for offline access.
            </p>
            <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100 border-dashed">
               <h3 className="font-bold text-emerald-900 mb-2">You ARE allowed to:</h3>
               <ul className="text-emerald-700/80 space-y-2 list-none p-0 font-medium">
                  <li>• Download public videos for personal offline viewing</li>
                  <li>• Backup your own content from social platforms</li>
                  <li>• Use the tool for educational research purposes</li>
               </ul>
            </div>
          </section>

          <section className="space-y-6 mb-12">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <AlertTriangle className="text-amber-600" /> Prohibited Activities
            </h2>
            <p className="text-lg text-slate-600 font-medium border-l-4 border-amber-500 pl-4">
              Users are strictly prohibited from using VideoGrab for any illegal purposes or to infringe upon intellectual property rights.
            </p>
            <div className="p-6 bg-amber-50 rounded-3xl border border-amber-100 border-dashed">
               <h3 className="font-bold text-amber-900 mb-2">You ARE NOT allowed to:</h3>
               <ul className="text-amber-700/80 space-y-2 list-none p-0 font-medium">
                  <li>• Download copyrighted material without the owner's permission</li>
                  <li>• Redistribute or sell any media downloaded via VideoGrab</li>
                  <li>• Use automated tools (bots, scrapers) to access our service</li>
                  <li>• Bypass any security features integrated into our platform</li>
               </ul>
            </div>
          </section>

          <section className="space-y-6 mb-12">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <Gavel className="text-indigo-600" /> Intellectual Property
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              VideoGrab does not own any of the content processed through its interface. 
              Content ownership remains with the original publisher or copyright holder. 
              Users are solely responsible for ensuring their use of the content follows platform-specific guidelines and laws.
            </p>
          </section>

          <section className="space-y-6 mb-12">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <Globe className="text-indigo-600" /> Disclaimer of Warranties
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              VideoGrab is provided "as is" and "as available". We do not guarantee that the service will always be available, secure, or free from errors. 
              We are not responsible for any platform changes that may cause the service to stop functioning temporarily.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-black text-slate-900">Limitation of Liability</h2>
            <p className="text-lg text-slate-600 font-medium">
              Under no circumstances shall VideoGrab or its parent company be liable for any direct, indirect, or consequential damages resulting from your use of the service or the media downloaded through it.
            </p>
          </section>
        </div>

        <div className="p-12 text-center space-y-6 bg-slate-900 rounded-[40px] shadow-3xl shadow-slate-900/10">
           <h2 className="text-3xl font-black text-white">Agreement to Terms</h2>
           <p className="text-slate-400 text-lg font-medium max-w-xl mx-auto">
              By using VideoGrab, you acknowledge that you have read and understood these terms.
           </p>
           <button onClick={() => window.history.back()} className="inline-block px-10 py-5 bg-indigo-600 text-white rounded-2xl font-black text-lg transition-all hover:scale-105 shadow-xl shadow-indigo-600/20">
              I AGREE \u0026 GO BACK
           </button>
        </div>
      </div>
    </main>
  );
}
