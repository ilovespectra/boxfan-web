'use client';

import Link from 'next/link';
import { Download, Github, Smartphone } from 'lucide-react';

export default function Home() {
  const handleDownload = () => {
    // Use API route for better binary handling and headers
    window.location.href = '/api/download';
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-slate-700 backdrop-blur-sm bg-slate-900/80 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <img 
              src="/favicon.ico" 
              alt="BoxFan" 
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg border border-blue-500/30"
            />
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              BoxFan
            </h1>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#install" className="text-slate-300 hover:text-white transition-colors">
              Installation
            </a>
            <a
              href="https://github.com/ilovespectra/BoxFan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors flex items-center gap-2"
            >
              <Github size={20} />
              GitHub
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-16 md:py-24">
        {/* Hero Section */}
        <section className="text-center mb-12 sm:mb-20">
          <div className="mb-6 sm:mb-8 inline-block">
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center text-3xl sm:text-4xl font-bold shadow-2xl">
              🎵
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Sleep Better with{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              BoxFan
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
            Experience soothing ambient fan noise with an integrated sleep timer. 
            The perfect companion for relaxation and peaceful sleep.
          </p>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="btn-download hover:shadow-blue-500/50 mx-auto w-full sm:w-auto"
          >
            <span>
              <Download size={24} />
              Download .apk
            </span>
          </button>

          <p className="text-xs sm:text-sm text-slate-400 mt-3 sm:mt-4">
            Android 8.0+ • ~10MB • Free
          </p>
        </section>

        {/* Features Section */}
        <section id="features" className="mb-12 sm:mb-20 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          <div className="bg-slate-800/50 backdrop-blur border-2 border-slate-700 rounded-2xl p-6 sm:p-8 hover:border-blue-500/50 transition-colors">
            <div className="text-2xl sm:text-3xl mb-4">🔊</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">High-Quality Audio</h3>
            <p className="text-slate-300 text-sm sm:text-base">
              Crystal-clear ambient fan noise for a calming experience
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur border-2 border-slate-700 rounded-2xl p-6 sm:p-8 hover:border-blue-500/50 transition-colors">
            <div className="text-2xl sm:text-3xl mb-4">⏱️</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Smart Sleep Timer</h3>
            <p className="text-slate-300 text-sm sm:text-base">
              Flexible hour and minute controls (0-23h, 0-59m)
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur border-2 border-slate-700 rounded-2xl p-6 sm:p-8 hover:border-blue-500/50 transition-colors">
            <div className="text-2xl sm:text-3xl mb-4">🎚️</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Volume Control</h3>
            <p className="text-slate-300 text-sm sm:text-base">
              Adjust volume with the slider or hardware buttons
            </p>
          </div>
        </section>

        {/* Installation Section */}
        <section id="install" className="bg-slate-800/30 border-2 border-slate-700 rounded-3xl p-6 sm:p-10 mb-12 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-3">
            <Smartphone size={28} className="sm:w-8 sm:h-8" />
            How to Install
          </h3>

          <div className="space-y-4 sm:space-y-6">
            <div className="flex gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                1
              </div>
              <div className="min-w-0">
                <h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Download the APK</h4>
                <p className="text-slate-300 text-sm sm:text-base">
                  Click the <span className="font-semibold text-blue-400">Download .apk</span> button above to download BoxFan.apk to your device
                </p>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                2
              </div>
              <div className="min-w-0">
                <h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Transfer to Your Android Phone</h4>
                <p className="text-slate-300 text-sm sm:text-base">
                  Send the BoxFan.apk file to your Android device via email, cloud storage, messaging app, or USB cable
                </p>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                3
              </div>
              <div className="min-w-0">
                <h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Enable Unknown Sources</h4>
                <p className="text-slate-300 text-sm sm:text-base">
                  On your Android device, go to <span className="font-mono bg-slate-900 px-2 py-1 rounded text-xs sm:text-sm">Settings → Security → Unknown Sources</span> and enable it to install apps from outside the Play Store
                </p>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                4
              </div>
              <div className="min-w-0">
                <h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Install</h4>
                <p className="text-slate-300 text-sm sm:text-base">
                  Open the BoxFan.apk file on your Android device and tap <span className="font-semibold text-blue-400">Install</span>. The app will be ready to use!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GitHub Link */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl border-2 border-slate-700 p-10">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Interested in the Source Code?</h3>
          <p className="text-slate-300 mb-4 sm:mb-6 text-sm sm:text-base">
            BoxFan is open source. Check out the GitHub repository for more details.
          </p>
          <Link
            href="https://github.com/ilovespectra/BoxFan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 bg-slate-700 hover:bg-slate-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors font-semibold text-sm sm:text-base"
          >
            <Github size={20} className="sm:w-6 sm:h-6" />
            View on GitHub
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/50 mt-12 sm:mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 text-center text-slate-400">
          <p className="text-sm sm:text-base">BoxFan — Simple fan sounds for better sleep</p>
          <p className="text-xs sm:text-sm mt-2">
            Built with ❤️ • Android 8.0+ Required
          </p>
        </div>
      </footer>
    </div>
  );
}
