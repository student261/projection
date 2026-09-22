"use client";

import React, { useEffect, useRef } from 'react';

export interface SensorNode {
  id: string;
  x: number;
  y: number;
  type: 'lidar' | 'optical';
  phase: number;
  range?: number;
}

export type ColorPhase = 'blue' | 'red' | 'green' | 'multi';

interface InteractiveCanvasProps {
  nodes: SensorNode[];
  onAddNode: (x: number, y: number) => void;
  onUpdateNodePosition?: (id: string, x: number, y: number) => void;
  onSelectNode?: (id: string | null) => void;
  selectedNodeId?: string | null;
  colorPhase: ColorPhase;
}

export default function InteractiveCanvas({ 
  nodes, 
  onAddNode, 
  onUpdateNodePosition,
  onSelectNode,
  selectedNodeId,
  colorPhase
}: InteractiveCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Persistent refs for smooth 60 FPS rendering
  const mousePosRef = useRef<{ x: number; y: number } | null>(null);
  const draggingNodeIdRef = useRef<string | null>(null);
  const dragStartPosRef = useRef<{ x: number; y: number } | null>(null);
  const hasDraggedRef = useRef<boolean>(false);

  // Sync latest props into ref so animation loop runs uninterrupted
  const stateRef = useRef({
    nodes,
    colorPhase,
    selectedNodeId
  });

  useEffect(() => {
    stateRef.current = {
      nodes,
      colorPhase,
      selectedNodeId
    };
  }, [nodes, colorPhase, selectedNodeId]);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const currentNodes = stateRef.current.nodes;
    const clickedNode = currentNodes.find(n => Math.hypot(n.x - x, n.y - y) < 32);

    if (clickedNode) {
      draggingNodeIdRef.current = clickedNode.id;
      dragStartPosRef.current = { x, y };
      hasDraggedRef.current = false;
      if (onSelectNode) onSelectNode(clickedNode.id);
    } else {
      draggingNodeIdRef.current = null;
      dragStartPosRef.current = { x, y };
      hasDraggedRef.current = false;
      if (onSelectNode) onSelectNode(null);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    mousePosRef.current = { x, y };

    if (draggingNodeIdRef.current) {
      if (dragStartPosRef.current) {
        const distMoved = Math.hypot(x - dragStartPosRef.current.x, y - dragStartPosRef.current.y);
        if (distMoved > 4) {
          hasDraggedRef.current = true;
        }
      }
      if (onUpdateNodePosition) {
        onUpdateNodePosition(draggingNodeIdRef.current, x, y);
      }
    }
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (!draggingNodeIdRef.current && !hasDraggedRef.current) {
      onAddNode(x, y);
    }

    draggingNodeIdRef.current = null;
    dragStartPosRef.current = null;
    hasDraggedRef.current = false;
  };

  const handleMouseLeave = () => {
    mousePosRef.current = null;
    draggingNodeIdRef.current = null;
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    const currentNodes = stateRef.current.nodes;
    const clickedNode = currentNodes.find(n => Math.hypot(n.x - x, n.y - y) < 40);

    if (clickedNode) {
      draggingNodeIdRef.current = clickedNode.id;
      dragStartPosRef.current = { x, y };
      hasDraggedRef.current = false;
      if (onSelectNode) onSelectNode(clickedNode.id);
    } else {
      draggingNodeIdRef.current = null;
      dragStartPosRef.current = { x, y };
      hasDraggedRef.current = false;
      if (onSelectNode) onSelectNode(null);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    mousePosRef.current = { x, y };

    if (draggingNodeIdRef.current) {
      if (dragStartPosRef.current) {
        const distMoved = Math.hypot(x - dragStartPosRef.current.x, y - dragStartPosRef.current.y);
        if (distMoved > 6) {
          hasDraggedRef.current = true;
        }
      }
      if (onUpdateNodePosition) {
        onUpdateNodePosition(draggingNodeIdRef.current, x, y);
      }
    }
  };

  const handleTouchEnd = () => {
    if (dragStartPosRef.current && !draggingNodeIdRef.current && !hasDraggedRef.current) {
      onAddNode(dragStartPosRef.current.x, dragStartPosRef.current.y);
    }
    draggingNodeIdRef.current = null;
    dragStartPosRef.current = null;
    hasDraggedRef.current = false;
  };

  // High-performance animation loop running ONCE on mount
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

    const GRID_SIZE = 28;
    let time = 0;

    const getColorTheme = (color: ColorPhase) => {
      switch (color) {
        case 'blue':
          return { hex: '#00f0ff', rgb: '0, 240, 255' };
        case 'red':
          return { hex: '#ff0055', rgb: '255, 0, 85' };
        case 'green':
          return { hex: '#00ff88', rgb: '0, 255, 136' };
        default:
          return { hex: '#b026ff', rgb: '176, 38, 255' };
      }
    };

    const render = () => {
      time += 0.025;
      const { 
        nodes: currentNodes, 
        colorPhase: currentColor, 
        selectedNodeId: currentSelectedId 
      } = stateRef.current;

      const mouse = mousePosRef.current;
      const theme = getColorTheme(currentColor);

      // 1. CLEAR BACKGROUND
      ctx.fillStyle = '#050508';
      ctx.fillRect(0, 0, width, height);

      const cols = Math.floor(width / GRID_SIZE) + 1;
      const rows = Math.floor(height / GRID_SIZE) + 1;

      // 2. AMBIENT BLUEPRINT DOTS (1 fast batched call)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.beginPath();
      for (let i = 0; i < cols; i++) {
        const px = i * GRID_SIZE;
        for (let j = 0; j < rows; j++) {
          ctx.rect(px, j * GRID_SIZE, 1.2, 1.2);
        }
      }
      ctx.fill();

      // 3. SCAN FIELD INTERSECTION RIPPLES
      if (currentNodes.length > 0) {
        ctx.fillStyle = `rgba(${theme.rgb}, 0.85)`;
        ctx.beginPath();

        for (let i = 0; i < cols; i++) {
          const px = i * GRID_SIZE;
          for (let j = 0; j < rows; j++) {
            const py = j * GRID_SIZE;

            let influenceCount = 0;
            let waveTotal = 0;

            for (let k = 0; k < currentNodes.length; k++) {
              const node = currentNodes[k];
              const dx = px - node.x;
              const dy = py - node.y;
              const distSq = dx * dx + dy * dy;
              const range = node.range || 260;

              if (distSq < range * range) {
                influenceCount++;
                const dist = Math.sqrt(distSq);
                const norm = 1 - dist / range;
                waveTotal += Math.sin(dist * 0.05 - time * 3 + node.phase) * norm;
              }
            }

            if (influenceCount >= 2) {
              // Intersecting generative fusion point
              const r = Math.max(0.8, 2.2 + waveTotal * 1.5);
              ctx.moveTo(px + r, py);
              ctx.arc(px, py, r, 0, Math.PI * 2);
            } else if (influenceCount === 1 && waveTotal > 0.25) {
              ctx.moveTo(px + 1.3, py);
              ctx.arc(px, py, 1.3, 0, Math.PI * 2);
            }
          }
        }
        ctx.fill();
      }

      // 4. LASER TRIANGULATION BETWEEN NODES
      if (currentNodes.length > 1) {
        ctx.lineWidth = 1.2;
        for (let a = 0; a < currentNodes.length; a++) {
          for (let b = a + 1; b < currentNodes.length; b++) {
            const na = currentNodes[a];
            const nb = currentNodes[b];
            const dist = Math.hypot(na.x - nb.x, na.y - nb.y);

            if (dist < 480) {
              const alpha = Math.max(0.12, (1 - dist / 480) * 0.65);
              ctx.strokeStyle = `rgba(${theme.rgb}, ${alpha})`;
              ctx.beginPath();
              ctx.moveTo(na.x, na.y);
              ctx.lineTo(nb.x, nb.y);
              ctx.stroke();

              // Moving photon data packet
              const packetPos = (time * 1.4 + (a * 7 + b * 11)) % 1;
              const px = na.x + (nb.x - na.x) * packetPos;
              const py = na.y + (nb.y - na.y) * packetPos;

              ctx.fillStyle = '#ffffff';
              ctx.beginPath();
              ctx.arc(px, py, 2.5, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      // 5. SENSORS WITH RADAR SWEEPS & RANGE RINGS
      for (let i = 0; i < currentNodes.length; i++) {
        const node = currentNodes[i];
        const isSelected = node.id === currentSelectedId;
        const range = node.range || 260;

        // Concentric distance rings
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, range * 0.45, 0, Math.PI * 2);
        ctx.arc(node.x, node.y, range * 0.8, 0, Math.PI * 2);
        ctx.arc(node.x, node.y, range, 0, Math.PI * 2);
        ctx.stroke();

        // Smooth rotating radar beam
        const sweepAngle = (time * 1.6 + node.phase) % (Math.PI * 2);
        const sweepWedge = Math.PI / 4.5; // ~40 degree sector

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.arc(node.x, node.y, range, sweepAngle - sweepWedge, sweepAngle);
        ctx.closePath();
        ctx.fillStyle = `rgba(${theme.rgb}, 0.12)`;
        ctx.fill();

        // Radar leading edge line
        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(node.x + Math.cos(sweepAngle) * range, node.y + Math.sin(sweepAngle) * range);
        ctx.strokeStyle = `rgba(${theme.rgb}, 0.65)`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.restore();

        // Pulsing sensor core
        const pulseSize = 16 + Math.sin(time * 3 + node.phase) * 5;
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2);
        ctx.strokeStyle = isSelected ? '#ffffff' : theme.hex;
        ctx.lineWidth = isSelected ? 2.5 : 1.5;
        ctx.stroke();

        // White center dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();

        // Clean label
        ctx.font = 'bold 10px monospace';
        ctx.fillStyle = isSelected ? '#ffffff' : 'rgba(255, 255, 255, 0.9)';
        ctx.textAlign = 'left';
        ctx.fillText(`[${node.id}]`, node.x + 16, node.y - 8);

        ctx.font = '9px monospace';
        ctx.fillStyle = theme.hex;
        ctx.fillText(node.type.toUpperCase(), node.x + 16, node.y + 3);
      }

      // 6. SUBTLE CURSOR SCANNER (Clean & minimal)
      if (mouse && !draggingNodeIdRef.current) {
        const { x: mx, y: my } = mouse;

        ctx.save();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.lineWidth = 1;

        // Small crosshair
        ctx.beginPath();
        ctx.moveTo(mx - 8, my);
        ctx.lineTo(mx + 8, my);
        ctx.moveTo(mx, my - 8);
        ctx.lineTo(mx, my + 8);
        ctx.stroke();

        // Raycast from sensors to cursor
        for (let i = 0; i < currentNodes.length; i++) {
          const n = currentNodes[i];
          const dist = Math.hypot(n.x - mx, n.y - my);
          const range = n.range || 260;

          if (dist < range) {
            ctx.beginPath();
            ctx.setLineDash([3, 5]);
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(mx, my);
            ctx.strokeStyle = `rgba(${theme.rgb}, 0.35)`;
            ctx.stroke();
            ctx.setLineDash([]);
          }
        }
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="absolute inset-0 w-full h-full block cursor-crosshair touch-none select-none"
      style={{ background: '#050508' }}
    />
  );
}

