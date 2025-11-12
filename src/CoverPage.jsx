import React from 'react';

// Main component must be named CoverPage and be the default export.
const CoverPage = () => {
  // Define the animation keyframes using a style block.
  // In a real project, these would be defined in your global CSS or tailwind.config.js
  // We use inline CSS here to ensure the animation is self-contained and runnable.
  const animationStyles = `
    
    @keyframes draw-and-fill {
      /* STEP 1: Start Hidden */
      0% {
        stroke-dashoffset: 600; /* Start hidden */
        fill: transparent;
      }
      /* STEP 2: Outline Drawing Slowly (0% to 70%) */
      70% {
        stroke-dashoffset: 0;   /* Outline fully drawn (takes 2.8s) */
        fill: transparent;      /* Keep fill invisible until this point */
      }
      /* STEP 3: Color Filling Slowly (70% to 100%) */
      100% {
        stroke-dashoffset: 0;   /* Outline remains drawn */
        fill: #BA4AF4;          /* Fill gradually appears (takes 1.2s) */
      }
    }

    .animate-draw-and-fill {
      stroke-dasharray: 600;   /* Set a dash length larger than the VP path */
      stroke: #BA4AF4;         /* Outline color: Blue-400 */
      stroke-width: 2px;
      animation: draw-and-fill 4s linear infinite; /* 4s long, repeats infinitely. 'linear' provides smooth, constant speed. */
      /* Removed separate fill transition as it's now controlled by keyframes */
    }
  `;

  return (
    <div className="flex bg-black flex-col items-center justify-center min-h-screen font-inter">
      <style>{animationStyles}</style>
      <div className=" rounded-3xl shadow-2xl w-full text-center">
        <svg width="80%" height="80%" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" className="mx-auto" >
          <text x="100" y="55" fontSize="80" fontWeight="900" textAnchor="middle" dominantBaseline="central" className=" cover-text tracking-wider animate-draw-and-fill  " >
            V P
          </text>
        </svg>
      </div>
<h1 className="text-3xl font-bold text-gray-500 mb-6 text-center font-mono">
          Welcome to the portfolio
        </h1>
    </div>
  );
};

export default CoverPage;