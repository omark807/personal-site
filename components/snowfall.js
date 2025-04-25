import { useEffect, useRef } from 'react';

const Snowfall = ({ isVisible }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isVisible) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Snowflake properties
    const maxSnowflakes = 100;
    const snowflakes = Array.from({ length: maxSnowflakes }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      speed: Math.random() * 1 + 0.5,
    }));

    const drawSnowflakes = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.beginPath();
      
      snowflakes.forEach(snowflake => {
        ctx.moveTo(snowflake.x, snowflake.y);
        ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2, true);
        
        // Update position
        snowflake.y += snowflake.speed;
        snowflake.x += Math.sin(snowflake.y * 0.01) * 0.5;

        // Reset if snowflake goes off screen
        if (snowflake.y > canvas.height) {
          snowflake.y = -5;
          snowflake.x = Math.random() * canvas.width;
        }
      });
      
      ctx.fill();
    };

    const animate = () => {
      if (!isVisible) return;
      drawSnowflakes();
      animationFrameId = requestAnimationFrame(animate);
    };

    if (isVisible) {
      animate();
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isVisible]);

  return isVisible ? (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  ) : null;
};

export default Snowfall;