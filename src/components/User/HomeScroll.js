import { useEffect } from 'react';

function HomeScroll() {
  useEffect(() => {
    const handleOrientationChange = () => {
      if (window.innerWidth <= 640) {
        // Lock the orientation on small screens
        document.documentElement.style.setProperty('--orientation-lock', 'fixed');
      } else {
        // Allow rotation on larger screens
        document.documentElement.style.setProperty('--orientation-lock', 'auto');
      }
    };

    handleOrientationChange(); // Initial check
    window.addEventListener('resize', handleOrientationChange);

    return () => {
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, []);
}

export default HomeScroll;
