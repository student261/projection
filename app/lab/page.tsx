"use client";

import React, { useState, useEffect } from 'react';
import InteractiveCanvas, { SensorNode, ColorPhase } from '@/components/InteractiveCanvas';
import Link from 'next/link';
import { Settings, X, Terminal, Radio, Network } from 'lucide-react';

export default function LabPage() {
  const [colorPhase, setColorPhase] = useState<ColorPhase>('blue');
  const [nodes, setNodes] = useState<SensorNode[]>([]);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [showControls, setShowControls] = useState(true);

  // Initial central deployment
  useEffect(() => {
    if (typeof window === 'undefined') return;
    setNodes([
      {
        id: 'SYS-00',
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        type: 'lidar',
        phase: 0,
        range: 280
      }
    ]);
  }, []);

  const handleAddNode = (x: number, y: number) => {
    if (nodes.length >= 8) return;
    const isLidar = Math.random() > 0.4;
    const newNode: SensorNode = {
      id: `SYS-${Math.floor(Math.random() * 900 + 100)}`,
      x,
      y,
      type: isLidar ? 'lidar' : 'optical',
      phase: Math.random() * Math.PI * 2,
      range: isLidar ? 280 : 220
    };
    setNodes(prev => [...prev, newNode]);
    setSelectedNodeId(newNode.id);
  };

  const handleUpdateNodePosition = (id: string, x: number, y: number) => {
    setNodes(prev => prev.map(n => (n.id === id ? { ...n, x, y } : n)));
  };

  const handleDeleteNode = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setNodes(prev => prev.filter(n => n.id !== id));
    if (selectedNodeId === id) setSelectedNodeId(null);
  };

  const handleClearNodes = () => {
    setNodes([]);
    setSelectedNodeId(null);
  };

  const fusionActive = nodes.length > 1;

  return (
    <main className="fixed inset-0 overflow-hidden bg-[#050508] text-white selection:bg-white selection:text-black font-mono">
      {/* Background Spatial Grid Canvas */}
      <InteractiveCanvas 
        nodes={nodes} 
        onAddNode={handleAddNode} 
        onUpdateNodePosition={handleUpdateNodePosition}
        onSelectNode={setSelectedNodeId}
        selectedNodeId={selectedNodeId}
        colorPhase={colorPhase} 
      />

      {/* Terminal Overlay UI */}
      <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-6 sm:p-10">
        
        {/* Top Header */}
        <header className="flex justify-between items-start pointer-events-auto">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl sm:text-2xl font-black uppercase tracking-widest text-white flex items-center gap-3">
              <Terminal className="w-5 h-5 text-white/50" />
              <span>SENSOR FUSION LAB</span>
            </h1>
            <div className="flex flex-col gap-1">
              <p className="text-[10px] text-white/50 uppercase tracking-[0.3em] flex items-center gap-2 mb-2">
                <span className={`w-1.5 h-1.5 rounded-full ${fusionActive ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                <span>{fusionActive ? 'GENERATIVE INTERSECTION ACTIVE' : 'WAITING FOR MULTIPLE SENSORS'}</span>
              </p>
              <p className="text-sm font-medium text-white/80 max-w-md">
                Try our motion-sensor technology yourself — click anywhere to deploy a sensor node.
              </p>
            </div>
          </div>
          
          <Link 
            href="/"
            className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors text-xs font-bold uppercase tracking-widest bg-black/50 backdrop-blur-sm"
          >
            <X className="w-3.5 h-3.5" />
            <span>EXIT LAB</span>
          </Link>
        </header>

        {/* Bottom / Left Telemetry Control Panel */}
        <div className="pointer-events-auto self-end sm:self-start w-full sm:w-80 bg-[#050508]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl relative">
          
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2">
              <Settings className="w-4 h-4 text-white/40" />
              <span>NETWORK TELEMETRY</span>
            </h2>
            <button 
              onClick={() => setShowControls(!showControls)}
              className="text-[10px] text-white/40 hover:text-white uppercase tracking-widest border border-white/10 px-2 py-1 rounded"
            >
              {showControls ? 'HIDE' : 'SHOW'}
            </button>
          </div>

          {showControls && (
            <div className="space-y-6">
              
              {/* Sensor Status */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-white/50">
                    ACTIVE NODES
                  </label>
                  <span className="text-[10px] text-white font-bold">{nodes.length} OF 8</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {nodes.map(n => (
                    <div 
                      key={n.id} 
                      onClick={() => setSelectedNodeId(n.id)}
                      className={`text-[9px] px-2 py-1 border rounded flex items-center gap-1.5 cursor-pointer transition-all ${
                        selectedNodeId === n.id 
                          ? 'border-white text-white bg-white/20' 
                          : 'border-white/20 text-white/80 bg-white/5 hover:border-white/40'
                      }`}
                    >
                      <Radio className="w-2.5 h-2.5 text-white/70" />
                      <span>{n.id}</span>
                      <button 
                        onClick={(e) => handleDeleteNode(n.id, e)}
                        className="text-white/40 hover:text-white ml-0.5"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                  {nodes.length === 0 && <div className="text-[10px] text-red-400">No sensors deployed.</div>}
                </div>

                <button 
                  onClick={handleClearNodes}
                  className="text-[9px] uppercase tracking-widest border border-red-500/50 text-red-400 hover:bg-red-500/20 px-3 py-1.5 rounded transition-colors w-full"
                >
                  PURGE NETWORK
                </button>
              </div>

              {/* Color Phase Control */}
              <div className="pt-4 border-t border-white/10">
                <label className="block text-[10px] uppercase tracking-[0.2em] text-white/50 mb-3">
                  OPTICAL FREQUENCY
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {(['blue', 'red', 'green', 'multi'] as ColorPhase[]).map((phase) => (
                    <button
                      key={phase}
                      onClick={() => setColorPhase(phase)}
                      className={`py-2 border text-[10px] uppercase font-bold tracking-wider rounded transition-all ${
                        colorPhase === phase 
                          ? 'border-white text-white bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.2)]' 
                          : 'border-white/10 text-white/40 hover:border-white/40'
                      }`}
                    >
                      {phase.slice(0, 3)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Instructions */}
              <div className="pt-4 border-t border-white/10 bg-white/5 -mx-6 -mb-6 p-6 rounded-b-2xl">
                <p className="text-[10px] text-white/60 leading-relaxed uppercase tracking-wider flex items-start gap-2">
                  <Network className="w-4 h-4 text-white/40 shrink-0 mt-0.5" />
                  <span>Click anywhere to deploy a sensor node. Drag nodes to reshape scan zones.</span>
                </p>
              </div>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}

