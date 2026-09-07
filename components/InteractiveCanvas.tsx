"use client";

import React, { useEffect, useRef, useState, useCallback } from 'react';

export interface SensorNode {
  id: string;
  x: number;
  y: number;
  type: 'lidar' | 'optical';
  phase: number;
}

interface InteractiveCanvasProps {
  nodes: SensorNode[];
  onAddNode: (x: number, y: number) => void;
  colorPhase: 'blue' | 'red' | 'green' | 'multi';
}

export default function InteractiveCanvas({ nodes, onAddNode, colorPhase }: InteractiveCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const handleClick = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    onAddNode(x, y);
  }, [onAddNode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);

    const GRID_SIZE = 18;
    const cols = Math.floor(width / GRID_SIZE) + 1;
    const rows = Math.floor(height / GRID_SIZE) + 1;

    let time = 0;

    const getBaseColor = (intensity: number) => {
      if (colorPhase === 'blue') return `rgba(59, 130, 246, ${intensity})`; // Blue
      if (colorPhase === 'red') return `rgba(239, 68, 68, ${intensity})`; // Red
      if (colorPhase === 'green') return `rgba(16, 185, 129, ${intensity})`; // Green
      return `rgba(139, 92, 246, ${intensity})`; // Purple for multi
    };

    const render = () => {
      time += 0.02;
      
      // Clear background
      ctx.fillStyle = '#050508';
      ctx.fillRect(0, 0, width, height);

      // Draw Grid
      ctx.lineWidth = 1;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const px = i * GRID_SIZE;
          const py = j * GRID_SIZE;

          let influenceCount = 0;
          let maxInfluence = 0;
          let totalWave = 0;

          // Calculate sensor influences on this grid point
          for (const node of nodes) {
            const dx = px - node.x;
            const dy = py - node.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            // Base range of sensor
            const range = 250; 
            
            if (dist < range) {
              influenceCount++;
              const normalizedDist = dist / range;
              const influence = 1 - normalizedDist;
              maxInfluence = Math.max(maxInfluence, influence);
              
              // Pulsing wave originating from sensor
              const wave = Math.sin(dist * 0.05 - time * 3 + node.phase);
              totalWave += wave * influence;
            }
          }

          // Render point based on influence
          if (influenceCount > 0) {
            // FUSION ACHIEVED: Point is under multiple sensors
            if (influenceCount >= 2) {
              ctx.beginPath();
              const radius = Math.max(0.1, 2.5 + (totalWave * 1.5));
              ctx.arc(px, py, radius, 0, Math.PI * 2);
              const intensity = Math.max(0, Math.min(1, 0.8 + totalWave * 0.2));
              ctx.fillStyle = getBaseColor(intensity);
              ctx.fill();
              
              // Draw neural connections to adjacent cells if highly stimulated
              if (totalWave > 0.5) {
                ctx.beginPath();
                ctx.moveTo(px, py);
                ctx.lineTo(px + GRID_SIZE, py);
                ctx.strokeStyle = getBaseColor(0.3);
                ctx.stroke();
                
                ctx.beginPath();
                ctx.moveTo(px, py);
                ctx.lineTo(px, py + GRID_SIZE);
                ctx.strokeStyle = getBaseColor(0.3);
                ctx.stroke();
              }
            } 
            // SINGLE SENSOR: Basic scanning mode
            else {
              ctx.beginPath();
              ctx.arc(px, py, 1.5, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(255, 255, 255, ${0.1 + maxInfluence * 0.2})`;
              ctx.fill();
            }
          } else {
            // NO SENSOR: Ambient dark blueprint grid
            ctx.beginPath();
            ctx.arc(px, py, 1, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
            ctx.fill();
          }
        }
      }

      // Draw the Sensors themselves
      for (const node of nodes) {
        // Outer pulsing ring
        ctx.beginPath();
        ctx.arc(node.x, node.y, 15 + Math.sin(time * 2 + node.phase) * 5, 0, Math.PI * 2);
        ctx.strokeStyle = getBaseColor(0.5);
        ctx.lineWidth = 2;
        ctx.stroke();

        // Inner core
        ctx.beginPath();
        ctx.arc(node.x, node.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        
        // Label
        ctx.font = '10px monospace';
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.fillText(node.type.toUpperCase(), node.x + 15, node.y - 15);
        ctx.fillText(node.id, node.x + 15, node.y - 5);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [nodes, colorPhase]);

  return (
    <canvas 
      ref={canvasRef} 
      onClick={handleClick}
      className="absolute inset-0 w-full h-full block cursor-crosshair touch-none"
      style={{ background: '#050508' }}
    />
  );
}
