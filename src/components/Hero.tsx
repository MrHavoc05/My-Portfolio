import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/50 to-transparent"></div>
      </div>

      {/* 3D Floating Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-3d opacity-80 float animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-3d opacity-60 float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/6 w-12 h-12 bg-gradient-to-br from-primary-glow to-accent-glow rounded-3d opacity-70 float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/4 left-1/6 w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-3d opacity-50 animate-rotate-3d"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll animate-slide-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 gradient-text">
            Aditya Upadhyay
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Full Stack Developer & UI/UX Designer creating beautiful digital experiences with modern technologies
          </p>
        </div>

        <div className="animate-on-scroll animate-scale-in" style={{animationDelay: '0.2s'}}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="btn-hero">
              View My Work
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold rounded-full transition-all duration-300 hover:scale-105">
              Download CV
            </button>
          </div>
        </div>

        {/* Social Links */}
        <div className="animate-on-scroll animate-slide-up" style={{animationDelay: '0.4s'}}>
          <div className="flex items-center justify-center space-x-6 mb-12">
            {[
              { icon: Github, href: 'https://github.com/MrHavoc05', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/aditya-upadhyay-73a46b358?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
              { icon: Mail, href: 'uaditya489@gmail.com', label: 'Email' },
            ].map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                className="w-12 h-12 bg-card/50 backdrop-blur-sm border border-border/20 rounded-full flex items-center justify-center text-foreground hover:text-primary hover:bg-card/80 hover:scale-110 hover:shadow-glow transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-on-scroll animate-scale-in" style={{animationDelay: '0.6s'}}>
          <a 
            href="#about"
            className="inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};