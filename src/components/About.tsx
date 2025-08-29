import React from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';
import Aditya_Profile_Photo from "../assets/Aditya_Profile_Photo.jpg";

export const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code'
    },
    {
      icon: Palette,
      title: 'Design Focus',
      description: 'Creating beautiful and intuitive user experiences'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Building fast and optimized web applications'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Loving what I do and continuously learning'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="animate-on-scroll animate-slide-in-left">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm Aditya, a passionate Full Stack Developer Currently Learning and 
                creating digital experiences that combine beautiful design with robust functionality.
              </p>
              <p>
                I specialize in React, Node.js, and modern web technologies. My journey started 
                with a curiosity about how websites work, which evolved into a deep love for 
                crafting elegant solutions to complex problems.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">What I bring to the table:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <div 
                    key={item.title}
                    className="flex items-start space-x-3 p-4 card-3d hover:shadow-glow transition-all duration-300"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3D Profile Card */}
          <div className="animate-on-scroll animate-scale-in">
            <div className="card-3d p-8 text-center hover:shadow-3d">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary via-accent to-primary p-1">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-card to-card/80 flex items-center justify-center">
                   <img 
                      src={Aditya_Profile_Photo} 
                      alt="Aditya Upadhyay" 
                      className="w-40 h-40 rounded-full object-cover"
                    />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-2 text-foreground">Aditya Upadhyay</h3>
              <p className="text-primary font-medium mb-4">Full Stack Developer</p>
              
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📍 Mumbai, India</p>
                <p>🎓 Pursuing CSE(AIML) Degree</p>
                <p>💼 Fresher</p>
                <p>🚀 Available for Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};