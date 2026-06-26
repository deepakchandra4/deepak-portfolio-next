'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

interface Star {
  x: number;
  y: number;
  size: number;
  alpha: number;
  speed: number;
}

export default function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const particles: Particle[] = [];
    const stars: Star[] = [];

    // Initialize particles (Neural Net)
    const particleCount = Math.min(60, Math.floor((dimensions.width * dimensions.height) / 25000));
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
      });
    }

    // Initialize stars
    const starCount = Math.min(80, Math.floor((dimensions.width * dimensions.height) / 20000));
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * 1.5,
        alpha: Math.random(),
        speed: Math.random() * 0.05 + 0.01,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // Render stars
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      stars.forEach((star) => {
        star.alpha += star.speed;
        if (star.alpha > 1 || star.alpha < 0) {
          star.speed = -star.speed;
        }
        ctx.save();
        ctx.globalAlpha = Math.max(0.1, Math.min(1, star.alpha));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Slowly drift stars downward
        star.y += 0.05;
        if (star.y > dimensions.height) {
          star.y = 0;
          star.x = Math.random() * dimensions.width;
        }
      });

      // Update and render particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Boundary checks
        if (p.x < 0 || p.x > dimensions.width) p.vx = -p.vx;
        if (p.y < 0 || p.y > dimensions.height) p.vy = -p.vy;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(6, 182, 212, 0.4)';
        ctx.fill();
      });

      // Draw lines between particles and to mouse
      ctx.lineWidth = 0.5;
      const maxDistance = 120;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Connection to mouse
        const dxMouse = p1.x - mouseRef.current.x;
        const dyMouse = p1.y - mouseRef.current.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 180) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
          ctx.strokeStyle = `rgba(6, 182, 212, ${0.2 * (1 - distMouse / 180)})`;
          ctx.stroke();
        }

        // Connection between particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.15 * (1 - dist / maxDistance)})`;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [dimensions]);

  return (
    <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden bg-[#050816] pointer-events-none">
      {/* Canvas for Particles and Stars */}
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="absolute inset-0 block"
      />

      {/* Futuristic Animated Grid Mesh with Radial Gradient Fade */}
      <div className="absolute inset-0 grid-lines mask-radial opacity-60" />

      {/* Floating Aurora Blobs (Glassmorphism blobs) */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -60, 30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-primary/10 via-transparent to-transparent blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -60, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[40%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-bl from-accent/10 via-transparent to-transparent blur-[140px]"
      />
      <motion.div
        animate={{
          x: [0, 30, -40, 0],
          y: [0, -30, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -bottom-[10%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-secondary/10 via-transparent to-transparent blur-[120px]"
      />

      {/* Noise Texture Overlay */}
      <div className="noise-overlay" />
    </div>
  );
}
