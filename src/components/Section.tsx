import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Gamepad2, Mail, Phone } from 'lucide-react';
import Piece from './Piece';

interface SectionProps {
  id: string;
  onBack: () => void;
}

const getAssetPath = (path: string) => {
  // Use relative path since base is './'
  return `./${path.replace(/^\//, '')}`;
};

const PortfolioSection: React.FC = () => (
  <div className="space-y-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        { 
          title: "Schleiferei Gossau", 
          desc: "A comprehensive visual identity and branding project for a local craft business.", 
          tech: ["Branding", "Graphic Design", "Typography"], 
          link: "https://www.behance.net/gallery/215895895/Schleiferei-Gossau",
          image: getAssetPath("portfolio/SchleifereiCozzio.png")
        },
        { 
          title: "Domain Of Hallucination", 
          desc: "Exploration of digital surrealism and abstract visual narratives.", 
          tech: ["Digital Art", "Creative Coding", "Visuals"], 
          link: "https://li-v-io.itch.io/domain-of-hallucination",
          image: getAssetPath("portfolio/Domainofhallucination.png")
        },
        { 
          title: "Divinactics", 
          desc: "Interactive user experience design focusing on intuitive digital interfaces.", 
          tech: ["UI/UX", "Interaction", "Prototyping"], 
          link: "https://www.behance.net/gallery/215727583/Divinactics",
          image: getAssetPath("portfolio/Divinactics.png")
        },
        { 
          title: "Nuclear Playtime", 
          desc: "Experimental game design project exploring high-energy visual aesthetics.", 
          tech: ["Game Design", "3D", "Visuals"], 
          link: "https://www.behance.net/gallery/215732523/Nuclear-Playtime",
          image: getAssetPath("portfolio/NuclearPlaytime.png")
        },
        { 
          title: "AR Drums", 
          desc: "Augmented reality musical instruments allowing for immersive performance.", 
          tech: ["AR", "Unity", "Interaction"], 
          link: "https://www.behance.net/gallery/215794111/AR-Drums",
          image: getAssetPath("portfolio/ARDrums.png")
        },
        { 
          title: "AR Piano", 
          desc: "Augmented reality musical instruments allowing for immersive performance.", 
          tech: ["AR", "Unity", "Interaction"], 
          link: "https://www.behance.net/gallery/215793875/AR-Piano",
          image: getAssetPath("portfolio/ARPiano.png")
        },
        { 
          title: "HorrAR", 
          desc: "An immersive AR horror experience pushing the boundaries of mobile spatial computing.", 
          tech: ["AR", "Mobile", "Experience"], 
          link: "https://www.behance.net/gallery/215795255/HorrAR",
          image: getAssetPath("portfolio/HorrAR.png")
        },
        { 
          title: "Beautiful Mathematics", 
          desc: "Visualizing complex mathematical patterns through algorithmic art.", 
          tech: ["Creative Coding", "Math", "Generative"], 
          link: "https://www.behance.net/gallery/215796911/Beautiful-Mathematics",
          image: getAssetPath("portfolio/BeautifulMathematics.png")
        },
        { 
          title: "Kickstart Visual Design", 
          desc: "A collection of high-impact visual assets for modern digital platforms.", 
          tech: ["Graphic Design", "Digital", "Assets"], 
          link: "https://www.behance.net/gallery/215622203/Kickstart-visual-design",
          image: getAssetPath("portfolio/KickStartVisualDesign.png")
        },
        { 
          title: "Cinema 4D", 
          desc: "A collection of 3D modeling and rendering projects using Cinema 4D.", 
          tech: ["3D", "Cinema 4D", "Rendering"], 
          link: "https://www.behance.net/gallery/215633223/Cinema-4D",
          image: getAssetPath("portfolio/Cinema4D.png")
        },
        { 
          title: "Hypnotica", 
          desc: "An exploration of hypnotic visuals and abstract motion graphics.", 
          tech: ["Motion Graphics", "Abstract", "Visuals"], 
          link: "https://www.behance.net/gallery/215730303/Hypnotica",
          image: getAssetPath("portfolio/hypnotica.png")
        },
      ].map((project, i) => (
        <motion.a
          key={i}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-card-bg rounded-2xl border border-white/5 hover:border-accent/30 transition-all group block overflow-hidden hover:translate-y-[-4px]"
        >
          <div className="aspect-video w-full overflow-hidden relative">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <ExternalLink size={24} className="text-white" />
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-serif font-bold group-hover:text-accent transition-colors">{project.title}</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="text-[10px] font-mono bg-white/5 px-2 py-1 rounded-md text-gray-300 uppercase">{t}</span>
              ))}
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  </div>
);

const AboutSection: React.FC = () => (
  <div className="max-w-2xl mx-auto space-y-6 text-gray-300 leading-relaxed">
    <p className="text-lg font-serif italic text-white">
      "Chess is the struggle against the error." — Johannes Zukertort
    </p>
    <p>
      I am a designer and developer with a background that bridges the gap between technical precision and creative vision. Having recently completed my Bachelor's degree in Digital Ideation at the Lucerne University of Applied Sciences and Arts, I am currently pursuing my Master's in the same field to further push the boundaries of interactive media.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
      <div className="bg-white/5 p-4 rounded-xl border border-white/5">
        <h4 className="text-accent font-bold text-xs uppercase tracking-widest mb-2">Education</h4>
        <ul className="text-sm text-gray-400 space-y-1">
          <li>• MA Digital Ideation (Ongoing)</li>
          <li>• BA Digital Ideation (Informatics)</li>
          <li>• Mediamatiker EFZ & BMS</li>
        </ul>
      </div>
      <div className="bg-white/5 p-4 rounded-xl border border-white/5">
        <h4 className="text-accent font-bold text-xs uppercase tracking-widest mb-2">Expertise</h4>
        <ul className="text-sm text-gray-400 space-y-1">
          <li>• Game Design & Development</li>
          <li>• AR/VR Experiences</li>
          <li>• UI/UX Design</li>
          <li>• Creative Coding</li>
          <li>• 3D Modeling (Cinema 4D)</li>
          <li>• Full-Stack Development</li>
          <li>• Adobe Creative Suite</li>
        </ul>
      </div>
    </div>
  </div>
);

const ContactSection: React.FC = () => {
  const [rookPos, setRookPos] = useState(0);
  const [isSelected, setIsSelected] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const submitForm = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    
    try {
      // Since GitHub Pages is static, we'll use mailto as a fallback
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:livio.cozzio@bluewin.ch?subject=${subject}&body=${body}`;
      
      setIsSent(true);
      setRookPos(4);
      setIsSelected(false);
      setTimeout(() => {
        setIsSent(false);
        setRookPos(0);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSquareClick = (index: number) => {
    if (isSent || isSubmitting) return;

    // If clicking the target "Send" square directly
    if (index === 4) {
      if (!formData.name || !formData.email || !formData.message) {
        alert("Please fill in all fields before sending.");
        return;
      }
      submitForm();
      return;
    }

    if (index === rookPos) {
      setIsSelected(!isSelected);
    } else if (isSelected) {
      // Rook moves in straight lines, so any square in the row is legal
      setRookPos(index);
      setIsSelected(false);
      
      if (index === 4) {
        if (!formData.name || !formData.email || !formData.message) {
          alert("Please fill in all fields before sending.");
          setRookPos(0);
          return;
        }
        submitForm();
      }
    }
  };

  return (
    <div className="max-w-md mx-auto space-y-8">
      <div className="space-y-4">
        {[
          { icon: Mail, label: "Email", value: "livio.cozzio@bluewin.ch", href: "mailto:livio.cozzio@bluewin.ch" },
          { icon: Phone, label: "Phone", value: "+41 79 137 70 03", href: "tel:+41791377003" },
          { icon: Gamepad2, label: "itch.io", value: "li-v-io.itch.io", href: "https://li-v-io.itch.io/" },
        ].map((item, i) => (
          <a 
            key={i} 
            href={item.href}
            target={item.href.startsWith('http') ? "_blank" : undefined}
            rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
            className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-transparent hover:border-white/10 transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-colors">
              <item.icon size={20} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{item.label}</p>
              <p className="text-white font-medium">{item.value}</p>
            </div>
          </a>
        ))}
      </div>
      
      <form className="space-y-4 pt-4 border-t border-white/10" onSubmit={(e) => e.preventDefault()}>
        <input 
          type="text" 
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Your Name" 
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors" 
        />
        <input 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Your Email" 
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors" 
        />
        <textarea 
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Your Message" 
          rows={4} 
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors resize-none" 
        />
        
        <div className="pt-4 space-y-4">
          <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold text-center">
            {isSent ? "Message Sent!" : isSubmitting ? "Sending..." : "Move rook to send"}
          </p>
          
          <div className="grid grid-cols-5 gap-1 bg-card-bg p-2 rounded-xl border border-white/10 shadow-xl max-w-[300px] mx-auto">
            {[0, 1, 2, 3, 4].map((i) => {
              const isDark = i % 2 === 1;
              const isTarget = i === 4;
              const hasRook = rookPos === i;
              
              return (
                <div
                  key={i}
                  onClick={() => handleSquareClick(i)}
                  className={`aspect-square rounded-md relative flex items-center justify-center cursor-pointer transition-all duration-300 ${
                    isDark ? 'bg-[#779556]' : 'bg-[#ebecd0]'
                  } ${isTarget && !hasRook ? 'border-2 border-dashed border-[#ff9f1c]' : ''}`}
                >
                  {isTarget && !hasRook && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[8px] font-black uppercase text-black/40 text-center leading-tight tracking-tighter">
                        {isSent ? "Sent" : "Send"}
                      </span>
                    </div>
                  )}
                  
                  {hasRook && (
                    <Piece
                      type="rook"
                      color="white"
                      isSelected={isSelected}
                      onClick={() => handleSquareClick(i)}
                    />
                  )}
                  
                  {isSelected && !hasRook && (
                    <div className="w-2 h-2 bg-black/20 rounded-full" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </form>
    </div>
  );
};

const Section: React.FC<SectionProps> = ({ id, onBack }) => {
  const getTitle = () => {
    switch (id) {
      case 'portfolio': return 'Selected Works';
      case 'about': return 'About me';
      case 'contact': return 'Contact';
      default: return '';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="w-full max-w-4xl mx-auto relative overflow-hidden"
    >
      {/* Decorative background piece */}
      <div className="absolute -right-20 -bottom-20 opacity-[0.03] pointer-events-none select-none">
        <img src={getAssetPath("queen.png")} alt="" className="w-96 h-96 grayscale" referrerPolicy="no-referrer" />
      </div>

      <div className="flex items-center justify-between mb-12 relative z-10">
        <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tight">{getTitle()}</h2>
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 hover:text-white transition-colors group"
        >
          <span className="w-8 h-[1px] bg-gray-500 group-hover:bg-white transition-colors" />
          Reset Board
        </button>
      </div>

      {id === 'portfolio' && <PortfolioSection />}
      {id === 'about' && <AboutSection />}
      {id === 'contact' && <ContactSection />}
    </motion.div>
  );
};

export default Section;
