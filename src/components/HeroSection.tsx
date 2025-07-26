import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "Full-Stack Developer",
    "UI/UX Designer", 
    "Problem Solver",
    "Tech Enthusiast"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      >
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-slide-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Hi, I'm{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-shift bg-300%">
              Alex Johnson
            </span>
          </h1>
          
          <div className="h-16 mb-8">
            <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 animate-fade-in">
              I'm a{' '}
              <span 
                key={currentText}
                className="text-blue-300 font-semibold animate-scale-in inline-block"
              >
                {texts[currentText]}
              </span>
            </p>
          </div>

          <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate computer science student crafting digital experiences through clean code, 
            innovative design, and cutting-edge technology solutions.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/projects">
              <Button variant="hero" size="xl" className="animate-scale-in group">
                View My Work
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button variant="glass" size="xl" className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
                Get In Touch
                <Mail className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Social links */}
          <div className="flex justify-center space-x-6 mb-12">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:alex@example.com", label: "Email" },
            ].map(({ icon: Icon, href, label }, index) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-3 rounded-full hover:scale-110 transition-bounce group animate-scale-in"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                aria-label={label}
              >
                <Icon className="w-6 h-6 text-white group-hover:text-blue-300 transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          aria-label="Scroll to content"
        >
          <div className="glass p-2 rounded-full">
            <ArrowDown className="w-6 h-6 text-white" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;