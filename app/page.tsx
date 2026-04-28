import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F9FF] font-sans">
      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-full blur-3xl" />
          </div>

          {/* Pillars - Abstract */}
          <div className="absolute left-10 top-1/3 w-2 h-64 bg-gradient-to-b from-primary/20 to-transparent rounded-full" />
          <div className="absolute right-10 top-1/4 w-2 h-80 bg-gradient-to-b from-secondary/20 to-transparent rounded-full" />
          <div className="absolute right-20 bottom-32 w-1.5 h-48 bg-gradient-to-b from-primary/15 to-transparent rounded-full" />

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
            <div className="animate-float mb-8">
              <div className="relative">
                {/* Stack Icon - 3 layered blocks */}
                <div className="flex flex-col items-center gap-1">
                  <div className="w-20 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-lg shadow-lg shadow-primary/30 transform rotate-3" />
                  <div className="w-24 h-10 bg-gradient-to-br from-primary to-[#6C63FF] rounded-lg shadow-lg shadow-primary/40 transform -translate-y-1" />
                  <div className="w-28 h-12 bg-gradient-to-br from-[#6C63FF] to-primary rounded-xl shadow-xl shadow-primary/50 transform rotate-2" />
                </div>
                {/* Glow ring */}
                <div className="absolute -inset-4 border-2 border-primary/20 rounded-full animate-pulse-soft" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="gradient-text">StackMon</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-xl">
              Stack your way to victory in this beautifully crafted minimalist mobile game
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 rounded-full gradient-bg text-white font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:-translate-y-1">
                Download Now
              </button>
              <button className="px-8 py-4 rounded-full bg-white/60 glass text-gray-700 font-semibold hover:bg-white/80 transition-all hover:-translate-y-1">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                <span className="gradient-text">Beautiful Design</span>
              </h2>
              <p className="text-gray-600 text-lg">Crafted with attention to every detail</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Minimalist UI",
                  desc: "Clean, elegant interface that puts gameplay first",
                  icon: "◈",
                },
                {
                  title: "Smooth Controls",
                  desc: "Intuitive touch controls for seamless stacking",
                  icon: "◇",
                },
                {
                  title: "Stunning Visuals",
                  desc: "Beautiful gradients and glassmorphism effects",
                  icon: "○",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="glass rounded-2xl p-8 hover:scale-[1.02] transition-transform"
                >
                  <div className="text-4xl mb-4 gradient-text">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mobile Mockup Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl font-bold mb-4">
                <span className="gradient-text">Play Anywhere</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Experience the joy of stacking on your mobile device. Beautiful on every screen, 
                optimized for smooth performance.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="glass rounded-full px-6 py-3 flex items-center gap-2">
                  <span className="text-2xl">◉</span>
                  <span className="font-medium">Casual Mode</span>
                </div>
                <div className="glass rounded-full px-6 py-3 flex items-center gap-2">
                  <span className="text-2xl">◎</span>
                  <span className="font-medium">Challenge</span>
                </div>
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="relative">
                {/* Phone Mockup */}
                <div className="w-48 h-96 rounded-[3rem] bg-gray-900 p-3 shadow-2xl">
                  <div className="w-full h-full rounded-[2.5rem] bg-[#F7F9FF] overflow-hidden relative">
                    {/* Screen content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                      <div className="flex flex-col items-center gap-1 mb-8">
                        <div className="w-12 h-5 bg-primary/70 rounded-md" />
                        <div className="w-14 h-6 bg-primary rounded-md" />
                        <div className="w-16 h-7 bg-primary/80 rounded-lg" />
                      </div>
                      <div className="text-xs text-gray-400">StackMon</div>
                    </div>
                    {/* Notch */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-gray-900 rounded-full" />
                  </div>
                </div>
                {/* Decorative rings */}
                <div className="absolute -inset-4 border border-primary/20 rounded-[3rem]" />
                <div className="absolute -inset-8 border border-secondary/10 rounded-[3.5rem]" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-3xl p-12 flex flex-wrap justify-center gap-12">
              {[
                { value: "1M+", label: "Downloads" },
                { value: "4.8★", label: "App Rating" },
                { value: "50+", label: "Countries" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="glass-dark rounded-3xl p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to <span className="gradient-text">Stack</span>?
                </h2>
                <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
                  Join millions of players worldwide. Download StackMon today and start stacking!
                </p>
                <button className="px-10 py-5 rounded-full gradient-bg text-white font-semibold text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:-translate-y-1">
                  Download for Free
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-gray-200/50">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500">© 2025 StackMon. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}