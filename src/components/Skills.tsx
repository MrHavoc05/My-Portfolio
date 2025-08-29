import React from 'react';

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 50, icon: '⚛️' },
        { name: 'TypeScript', level: 40, icon: '📘' },
        { name: 'Next.js', level: 40, icon: '▲' },
        { name: 'Tailwind CSS', level: 60, icon: '🎨' },
        
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 60, icon: '🟢' },
        { name: 'Express.js', level: 65, icon: '🟢' },
        { name: 'PostgreSQL', level: 60, icon: '🐘' },
        { name: 'MongoDB', level: 65, icon: '🍃' },
        { name: 'Python', level: 50, icon: '🐍' },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 50, icon: '📝' },
        { name: 'AWS', level: 40, icon: '☁️' },
        { name: 'Figma', level: 55, icon: '🎨' },
        { name: 'Linux', level: 50, icon: '🐧' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="animate-on-scroll animate-scale-in"
              style={{animationDelay: `${categoryIndex * 0.2}s`}}
            >
              <div className="card-3d p-6 h-full hover:shadow-glow">
                <h3 className="text-2xl font-bold mb-6 text-center gradient-text">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <div key={skill.name} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="font-medium text-foreground">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out transform origin-left group-hover:scale-x-110"
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.2) + (index * 0.1)}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <div className="mt-16 animate-on-scroll animate-slide-up" style={{animationDelay: '0.6s'}}>
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              'JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'GraphQL',
              'Webpack', 'Vite', 'Framer Motion', 'Three.js', 'Python'
              
            ].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-card/50 border border-border/20 rounded-full text-sm font-medium text-foreground hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 hover:border-primary/50 hover:scale-105 transition-all duration-300 cursor-default"
                style={{
                  animationDelay: `${index * 0.05}s`,
                  animation: 'scale-in 0.3s ease-out forwards'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};