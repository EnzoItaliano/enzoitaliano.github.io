export default function StackSection() {
  return (
    <section id="stack" className="mb-24 scroll-mt-32">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-2xl font-bold tracking-tighter bg-white/20 dark:bg-black/20 px-4 py-1 rounded backdrop-blur-sm">
          .stack()
        </h2>
        <div className="h-px flex-grow bg-indigo-500/30" />
      </div>
      <div className="bg-white/30 dark:bg-zinc-900/40 border border-white/30 dark:border-white/10 rounded-2xl p-8 grid grid-cols-2 lg:grid-cols-4 gap-8 backdrop-blur-md shadow-xl">
        <div className="space-y-3">
          <div className="text-xs text-indigo-500 font-bold uppercase tracking-widest border-b border-indigo-500/20 pb-2">
            Languages
          </div>
          <div className="font-bold opacity-90">Python</div>
          <div className="font-bold opacity-90">TypeScript</div>
          <div className="font-bold opacity-90">JavaScript</div>
        </div>
        <div className="space-y-3">
          <div className="text-xs text-indigo-500 font-bold uppercase tracking-widest border-b border-indigo-500/20 pb-2">
            Backend
          </div>
          <div className="font-bold opacity-90">FastAPI</div>
          <div className="font-bold opacity-90">NestJS</div>
          <div className="font-bold opacity-90">Express.js</div>
        </div>
        <div className="space-y-3">
          <div className="text-xs text-indigo-500 font-bold uppercase tracking-widest border-b border-indigo-500/20 pb-2">
            Frontend
          </div>
          <div className="font-bold opacity-90">Vue.js</div>
          <div className="font-bold opacity-90">React</div>
          <div className="font-bold opacity-90">Streamlit</div>
        </div>
        <div className="space-y-3">
          <div className="text-xs text-indigo-500 font-bold uppercase tracking-widest border-b border-indigo-500/20 pb-2">
            AI Tools
          </div>
          <div className="font-bold opacity-90">Selenium</div>
          <div className="font-bold opacity-90">OpenAI API</div>
          <div className="font-bold opacity-90">Antigravity</div>
          <div className="font-bold opacity-90">ClaudeCode</div>
        </div>
      </div>
    </section>
  );
}
