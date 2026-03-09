import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ChessBoard from './components/ChessBoard';
import Section from './components/Section';
import { SectionId } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');

  return (
    <div className="min-h-screen flex flex-col selection:bg-accent selection:text-black">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <header className="relative z-10 p-6 md:p-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-8xl font-serif font-bold tracking-tighter leading-none"
          >
            LIVIO <br />
            <span className="text-accent">COZZIO</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-xs uppercase tracking-[0.3em] text-gray-500 font-mono"
          >
            Grandmaster of design
          </motion.p>
        </div>
      </header>

      <main className="relative z-10 flex-grow flex items-center justify-center p-6 pb-24">
        <AnimatePresence mode="wait">
          {activeSection === 'home' ? (
            <motion.div
              key="board"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              className="w-full"
            >
              <div className="text-center mb-12 space-y-4">
                <h2 className="text-2xl font-serif italic text-gray-400">Make your move.</h2>
                <div className="flex justify-center gap-8 text-[10px] uppercase tracking-widest text-gray-600 font-bold">
                  {[
                    { label: 'About Me', from: 'f1', to: 'e3' },
                    { label: 'Portfolio', from: 'd1', to: 'g4' },
                    { label: 'Contact', from: 'a1', to: 'a5' }
                  ].map((hint, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <span className="text-gray-500">{hint.label}</span>
                      <div className="flex items-center gap-2 text-xs font-mono">
                        <span className="text-gray-400">{hint.from}</span>
                        <span className="text-accent">→</span>
                        <span className="text-accent">{hint.to}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <ChessBoard onSectionChange={setActiveSection} />
            </motion.div>
          ) : (
            <Section 
              key="section" 
              id={activeSection} 
              onBack={() => setActiveSection('home')} 
            />
          )}
        </AnimatePresence>
      </main>

      <footer className="relative z-10 p-6 md:p-12 flex justify-between items-center border-t border-white/5">
        <div className="text-[10px] uppercase tracking-widest text-gray-600 font-bold">
          © 2026 / ALL RIGHTS RESERVED
        </div>
        <div className="flex flex-wrap gap-4">
          {[
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/livio-cozzio-2a8538371/' },
            { name: 'Behance', url: 'https://www.behance.net/cozziolivio' },
            { name: 'itch.io', url: 'https://li-v-io.itch.io/' }
          ].map(link => (
            <a 
              key={link.name} 
              href={link.url} 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-black text-white font-bold rounded-xl hover:bg-white hover:text-black border border-white transition-all duration-300 uppercase tracking-widest text-[10px]"
            >
              {link.name}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
