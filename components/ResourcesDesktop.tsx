import React from 'react';
import { Logo } from './Logo';

const ResourcesDesktop: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#082421] text-white">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-[#082421]/80 backdrop-blur-md border-b border-white/5">
        <a href="/" className="inline-block">
          <Logo />
        </a>
        <div className="flex items-center gap-4">
          <nav className="flex items-center gap-1 bg-white rounded-full px-2 py-2">
            <a href="/features" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors font-medium text-sm">
              Features
            </a>
            <a href="/resources" className="px-4 py-2 text-gray-700 bg-gray-100 rounded-full transition-colors font-medium text-sm">
              Resources
            </a>
            <a href="/contact" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors font-medium text-sm">
              Contact Us
            </a>
          </nav>
          <a 
            href="https://app.mellominds.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-mello-yellow text-mello-bg px-6 py-2.5 rounded-full font-semibold hover:bg-mello-yellow/90 transition-colors shadow-lg"
          >
            Get early access →
          </a>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-28">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-mello-light mb-4">Resources</h1>
          <p className="text-xl text-white/70">Guides, articles, and tools to help you succeed</p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          
          {/* Getting Started */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-mello-yellow/50 transition-all hover:transform hover:scale-105">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-mello-yellow mb-3">Getting Started</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              New to MelloMinds? Start here with our comprehensive onboarding guide.
            </p>
            <a href="#" className="text-mello-light hover:text-mello-yellow transition-colors font-semibold">
              Read guide →
            </a>
          </div>

          {/* Best Practices */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-mello-yellow/50 transition-all hover:transform hover:scale-105">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-2xl font-bold text-mello-yellow mb-3">Best Practices</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              Learn proven strategies to optimize your therapy practice workflow.
            </p>
            <a href="#" className="text-mello-light hover:text-mello-yellow transition-colors font-semibold">
              Explore tips →
            </a>
          </div>

          {/* Video Tutorials */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-mello-yellow/50 transition-all hover:transform hover:scale-105">
            <div className="text-4xl mb-4">🎥</div>
            <h3 className="text-2xl font-bold text-mello-yellow mb-3">Video Tutorials</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              Watch step-by-step video guides to master every feature.
            </p>
            <a href="#" className="text-mello-light hover:text-mello-yellow transition-colors font-semibold">
              Watch now →
            </a>
          </div>

          {/* Documentation */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-mello-yellow/50 transition-all hover:transform hover:scale-105">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-mello-yellow mb-3">Documentation</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              Detailed technical documentation for all platform features.
            </p>
            <a href="#" className="text-mello-light hover:text-mello-yellow transition-colors font-semibold">
              View docs →
            </a>
          </div>

          {/* Blog */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-mello-yellow/50 transition-all hover:transform hover:scale-105">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-2xl font-bold text-mello-yellow mb-3">Blog</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              Stay updated with the latest insights, tips, and industry news.
            </p>
            <a href="#" className="text-mello-light hover:text-mello-yellow transition-colors font-semibold">
              Read articles →
            </a>
          </div>

          {/* Support Center */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-mello-yellow/50 transition-all hover:transform hover:scale-105">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-2xl font-bold text-mello-yellow mb-3">Support Center</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              Get help from our support team and community forums.
            </p>
            <a href="#" className="text-mello-light hover:text-mello-yellow transition-colors font-semibold">
              Get support →
            </a>
          </div>

        </div>

        {/* Featured Resource Section */}
        <div className="bg-gradient-to-r from-mello-yellow/20 to-mello-light/20 rounded-2xl p-12 border border-mello-yellow/30 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="text-5xl mb-4">📖</div>
              <h2 className="text-3xl font-bold text-mello-light mb-4">Therapy Practice Management Guide</h2>
              <p className="text-white/80 mb-6 text-lg">
                Download our comprehensive guide to building and scaling a successful therapy practice. Includes templates, checklists, and expert advice.
              </p>
              <a 
                href="#" 
                className="inline-block bg-mello-yellow text-mello-bg px-8 py-4 rounded-full font-bold text-lg hover:bg-mello-yellow/90 transition-colors shadow-lg"
              >
                Download free guide →
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-white/50">
            <span>© 2026 MelloMinds LLP. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <a href="/" className="hover:text-white/70 transition-colors">Home</a>
              <span>•</span>
              <a href="/privacy-policy" className="hover:text-white/70 transition-colors underline">Privacy Policy</a>
              <span>•</span>
              <a href="/terms-of-service" className="hover:text-white/70 transition-colors underline">Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ResourcesDesktop;
