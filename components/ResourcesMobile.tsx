import React from 'react';
import { MobileHeader } from './MobileHeader';

const ResourcesMobile: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#082421] text-white px-6 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <MobileHeader currentPage="resources" />
        
        <header className="mb-12 mt-20">
          <div className="text-center">
            <h1 className="text-4xl font-black text-mello-light mb-3">Resources</h1>
            <p className="text-lg text-white/70">Guides, articles, and tools to help you succeed</p>
          </div>
        </header>

        {/* Resources List */}
        <div className="space-y-6 mb-12">
          
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-xl font-bold text-mello-yellow mb-2">Getting Started</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-3">
              New to MelloMinds? Start here with our comprehensive onboarding guide.
            </p>
            <a href="#" className="text-mello-light hover:text-mello-yellow transition-colors font-semibold text-sm">
              Read guide →
            </a>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-3">✨</div>
            <h3 className="text-xl font-bold text-mello-yellow mb-2">Best Practices</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-3">
              Learn proven strategies to optimize your therapy practice workflow.
            </p>
            <a href="#" className="text-mello-light hover:text-mello-yellow transition-colors font-semibold text-sm">
              Explore tips →
            </a>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-3">🎥</div>
            <h3 className="text-xl font-bold text-mello-yellow mb-2">Video Tutorials</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-3">
              Watch step-by-step video guides to master every feature.
            </p>
            <a href="#" className="text-mello-light hover:text-mello-yellow transition-colors font-semibold text-sm">
              Watch now →
            </a>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-3">📚</div>
            <h3 className="text-xl font-bold text-mello-yellow mb-2">Documentation</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-3">
              Detailed technical documentation for all platform features.
            </p>
            <a href="#" className="text-mello-light hover:text-mello-yellow transition-colors font-semibold text-sm">
              View docs →
            </a>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-3">📝</div>
            <h3 className="text-xl font-bold text-mello-yellow mb-2">Blog</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-3">
              Stay updated with the latest insights, tips, and industry news.
            </p>
            <a href="#" className="text-mello-light hover:text-mello-yellow transition-colors font-semibold text-sm">
              Read articles →
            </a>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-3">💬</div>
            <h3 className="text-xl font-bold text-mello-yellow mb-2">Support Center</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-3">
              Get help from our support team and community forums.
            </p>
            <a href="#" className="text-mello-light hover:text-mello-yellow transition-colors font-semibold text-sm">
              Get support →
            </a>
          </div>

        </div>

        {/* Featured Resource */}
        <div className="bg-gradient-to-r from-mello-yellow/20 to-mello-light/20 rounded-2xl p-8 border border-mello-yellow/30 mb-12">
          <div className="text-4xl mb-3">📖</div>
          <h2 className="text-2xl font-bold text-mello-light mb-3">Therapy Practice Management Guide</h2>
          <p className="text-white/80 mb-6 text-sm">
            Download our comprehensive guide to building and scaling a successful therapy practice.
          </p>
          <a 
            href="#" 
            className="inline-block bg-mello-yellow text-mello-bg px-6 py-3 rounded-full font-bold hover:bg-mello-yellow/90 transition-colors shadow-lg"
          >
            Download free guide →
          </a>
        </div>

        {/* Footer */}
        <footer className="pt-8 border-t border-white/10">
          <div className="flex flex-col items-center gap-4 text-xs text-white/50 text-center">
            <span>© 2026 MelloMinds LLP. All rights reserved.</span>
            <div className="flex items-center gap-3">
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

export default ResourcesMobile;
