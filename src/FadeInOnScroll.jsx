import React, { useRef, useState, useEffect } from 'react';

const FadeInOnScroll = ({ children, delay = 'delay-0' }) => {
  // 1. State to track if the element is visible
  const [isVisible, setIsVisible] = useState(false);
  
  // 2. Ref to attach to the DOM element
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // If the entry is intersecting (i.e., visible in the viewport)
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once it's visible to ensure it only animates once
          observer.unobserve(domRef.current); 
        }
      });
    });

    // Start observing the current DOM element
    if (domRef.current) {
        observer.observe(domRef.current);
    }
    
    // Cleanup function: stop observing when the component unmounts
    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  // 3. Conditional Tailwind Classes
  const animationClasses = isVisible
    ? 'opacity-100 translate-y-0' // Final (Visible) state
    : 'opacity-0 translate-y-16'; // Initial (Hidden) state

  return (
    <div
      ref={domRef}
      // Combine static transition classes with the dynamic animation classes
      className={`transition-all duration-1000 ${delay} ${animationClasses}`}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;