"use client";

import { useEffect, useState } from 'react';

interface Dot {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  shape: 'circle' | 'square' | 'triangle';
}

export default function FloatingDots() {
  const [dots, setDots] = useState<Dot[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    console.log('FloatingDots: Starting animation setup');
    
    const generateDots = () => {
      const newDots: Dot[] = [];
      const width = typeof window !== 'undefined' ? window.innerWidth : 1200;
      const height = typeof window !== 'undefined' ? window.innerHeight : 800;
      
      for (let i = 0; i < 150; i++) {
        newDots.push({
          id: i,
          x: Math.random() * width,
          y: Math.random() * height, // Start dots across the entire screen
          size: Math.random() * 12 + 8, // Make dots bigger
          speed: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.7 + 0.3, // Make more visible
          shape: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)] as 'circle' | 'square' | 'triangle'
        });
      }
      console.log('FloatingDots: Generated', newDots.length, 'dots');
      setDots(newDots);
    };

    generateDots();

    const animateDots = () => {
      setDots(prevDots => 
        prevDots.map(dot => {
          let newY = dot.y - dot.speed;
          let newX = dot.x;
          
          const width = typeof window !== 'undefined' ? window.innerWidth : 1200;
          const height = typeof window !== 'undefined' ? window.innerHeight : 800;
          
          if (newY < -50) {
            newY = height + 50;
            newX = Math.random() * width;
          }
          
          return { ...dot, y: newY, x: newX };
        })
      );
    };

    const interval = setInterval(animateDots, 50);
    
    return () => clearInterval(interval);
  }, [mounted]);

  const renderShape = (dot: Dot) => {
    const baseStyle = {
      position: 'absolute' as const,
      left: `${dot.x}px`,
      top: `${dot.y}px`,
      width: `${dot.size}px`,
      height: `${dot.size}px`,
      opacity: dot.opacity,
      pointerEvents: 'none' as const,
    };

    switch (dot.shape) {
      case 'circle':
        return (
          <div
            key={dot.id}
            style={{
              ...baseStyle,
              backgroundColor: '#f97316',
              borderRadius: '50%',
              boxShadow: '0 0 10px rgba(249, 115, 22, 0.3)',
            }}
          />
        );
      case 'square':
        return (
          <div
            key={dot.id}
            style={{
              ...baseStyle,
              backgroundColor: '#ea580c',
              borderRadius: '2px',
              boxShadow: '0 0 8px rgba(234, 88, 12, 0.3)',
            }}
          />
        );
      case 'triangle':
        return (
          <div
            key={dot.id}
            style={{
              ...baseStyle,
              width: 0,
              height: 0,
              borderLeft: `${dot.size / 2}px solid transparent`,
              borderRight: `${dot.size / 2}px solid transparent`,
              borderBottom: `${dot.size}px solid #fb923c`,
              filter: 'drop-shadow(0 0 6px rgba(251, 146, 60, 0.3))',
            }}
          />
        );
    }
  };

  if (!mounted) {
    return null;
  }

  console.log('FloatingDots: Rendering', dots.length, 'dots');

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" style={{backgroundColor: 'rgba(255, 0, 0, 0.1)'}}>
      {dots.map(dot => (
        <div
          key={dot.id}
          style={{
            position: 'absolute',
            left: `${dot.x}px`,
            top: `${dot.y}px`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            backgroundColor: '#f97316',
            borderRadius: '50%',
            opacity: dot.opacity,
            pointerEvents: 'none',
            zIndex: 1
          }}
        />
      ))}
    </div>
  );
}