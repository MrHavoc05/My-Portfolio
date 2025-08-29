import { useEffect } from 'react';

export const useScrollAnimations = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          
          if (target.classList.contains('animate-on-scroll')) {
            // Determine animation type based on classes
            if (target.classList.contains('animate-slide-up')) {
              target.classList.add('animate-slide-up');
            } else if (target.classList.contains('animate-slide-left')) {
              target.classList.add('animate-slide-left');
            } else if (target.classList.contains('animate-scale-in')) {
              target.classList.add('animate-scale-in');
            } else {
              // Default animation
              target.classList.add('animate-slide-up');
            }
            
            // Remove from observer after animation triggers
            observer.unobserve(target);
          }
        }
      });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
};

export const ScrollAnimations: React.FC = () => {
  useScrollAnimations();
  return null;
};