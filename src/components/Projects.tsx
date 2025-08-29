import React from 'react';
import { Github, ExternalLink, Calendar, Code } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: 'GetMeds',
      description: 'Full-stack Medicine Delivery solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      tags: ['React', 'Node.js', 'Mongo DB', 'Razorpay', 'Redis'],
      github: 'https://github.com/MrHavoc05/Medicine-Delivery',
      demo: '#',
      date: '2025',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      tags: ['Next.js', 'TypeScript', 'Socket.io', 'MongoDB'],
      github: '#',
      demo: '#',
      date: '2024'
    },
    {
      title: 'AI Chat Interface',
      description: 'Modern chat application with AI integration, featuring real-time messaging, voice notes, and intelligent responses.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      tags: ['Python', 'GeminiAi', 'WebSocket', 'Tailwind'],
      github: '#',
      demo: '#',
      date: '2025'
    },
    {
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with 3D animations, dark/light mode, and modern design principles.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      tags: ['React', 'Three.js', 'Framer Motion', 'Tailwind'],
      github: '#',
      demo: '#',
      date: '2025'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather application with beautiful visualizations, forecasts, and location-based services.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      tags: ['Java', 'Chart.js', 'Weather API', 'PWA'],
      github: '#',
      demo: '#',
      date: '2024'
    },
  //{
   //   title: 'Crypto Tracker',
  //   description: 'Real-time cryptocurrency tracking application with portfolio management and price alerts.',
  //    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&h=400&fit=crop',
  //    tags: ['React', 'Redux', 'CoinGecko API', 'Chart.js'],
  //    github: '#',
  //    demo: '#',
  //    date: '2022'
  //  }
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid gap-8">
          {/* Featured Project */}
          {projects.filter(p => p.featured).map((project, index) => (
            <div 
              key={project.title}
              className="animate-on-scroll animate-scale-in"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="card-3d overflow-hidden hover:shadow-3d group">
                <div className="lg:flex">
                  <div className="lg:w-1/2">
                    <div className="relative h-64 lg:h-full overflow-hidden">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-semibold rounded-full">
                        FEATURED
                      </span>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {project.date}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-card border border-border/20 rounded-full text-sm text-foreground hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="flex items-center space-x-2 px-4 py-2 bg-card border border-border/20 rounded-lg hover:bg-card/80 hover:scale-105 transition-all duration-300"
                      >
                        <Github className="h-4 w-4" />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                      <a
                        href={project.demo}
                        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg hover:scale-105 transition-all duration-300"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span className="text-sm font-medium">Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-12">
            {projects.filter(p => !p.featured).map((project, index) => (
              <div 
                key={project.title}
                className="animate-on-scroll animate-scale-in"
                style={{animationDelay: `${(index + 1) * 0.1}s`}}
              >
                <div className="card-3d overflow-hidden hover:shadow-glow group h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-foreground">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {project.date}
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4 flex-1">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-muted/50 rounded text-xs text-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 bg-muted/50 rounded text-xs text-muted-foreground">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex space-x-2">
                      <a
                        href={project.github}
                        className="flex-1 flex items-center justify-center space-x-1 py-2 bg-card border border-border/20 rounded hover:bg-card/80 hover:scale-105 transition-all duration-300"
                      >
                        <Github className="h-3 w-3" />
                        <span className="text-xs font-medium">Code</span>
                      </a>
                      <a
                        href={project.demo}
                        className="flex-1 flex items-center justify-center space-x-1 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded hover:scale-105 transition-all duration-300"
                      >
                        <ExternalLink className="h-3 w-3" />
                        <span className="text-xs font-medium">Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More */}
        <div className="text-center mt-12 animate-on-scroll animate-slide-up" style={{animationDelay: '0.8s'}}>
          <a
            href="#"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-card border border-border/20 rounded-lg hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 hover:border-primary/50 hover:scale-105 transition-all duration-300"
          >
            <Code className="h-4 w-4" />
            <span className="font-medium">View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};
