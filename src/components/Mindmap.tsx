
import React, { useCallback, useEffect, useState } from 'react';
import ReactFlow, { 
  Background, 
  Controls, 
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
  ReactFlowInstance
} from 'reactflow';
import 'reactflow/dist/style.css';
import { Maximize, MousePointer2, Move } from 'lucide-react';
import { MindmapNode, MindmapEdge } from '../data/content';

interface MindmapProps {
  nodes: MindmapNode[];
  edges: MindmapEdge[];
}

export default function Mindmap({ nodes: initialNodes, edges: initialEdges }: MindmapProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes as Node[]);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges as Edge[]);
  const [rfInstance, setRfInstance] = useState<ReactFlowInstance | null>(null);

  useEffect(() => {
    setNodes(initialNodes as Node[]);
    setEdges(initialEdges as Edge[]);
  }, [initialNodes, initialEdges, setNodes, setEdges]);

  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onInit = (instance: ReactFlowInstance) => {
    setRfInstance(instance);
  };

  const handleReset = () => {
    if (rfInstance) {
      rfInstance.fitView({ duration: 800, padding: 0.2 });
    }
  };

  return (
    <div className="relative group">
      <div className="h-[500px] w-full bg-slate-950 rounded-2xl border border-white/5 overflow-hidden shadow-2xl relative cursor-grab active:cursor-grabbing">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onInit={onInit}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          minZoom={0.2}
          maxZoom={1.5}
          defaultViewport={{ x: 0, y: 0, zoom: 1 }}
          attributionPosition="bottom-left"
          panOnScroll={false}
          zoomOnScroll={true}
          zoomOnPinch={true}
          panOnDrag={true}
          selectionOnDrag={false}
          nodesDraggable={true}
          nodesConnectable={false}
          elementsSelectable={true}
        >
          <Background color="#1e293b" gap={20} />
          <Controls showInteractive={false} />
          <MiniMap 
            nodeColor={(n) => {
              if (n.type === 'input') return '#dc2626';
              return '#1e293b';
            }}
            maskColor="rgba(2, 6, 23, 0.7)"
            style={{ background: '#0f172a' }}
          />
        </ReactFlow>

        {/* Custom Overlay Controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
          <button
            onClick={handleReset}
            className="p-2 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-lg text-slate-400 hover:text-white hover:border-red-500/50 transition-all shadow-lg"
            title="Reset View"
          >
            <Maximize className="w-4 h-4" />
          </button>
        </div>

        {/* Interaction Hint */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-full text-[10px] text-slate-500 flex items-center gap-4 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="flex items-center gap-1">
            <Move className="w-3 h-3" /> Kéo để di chuyển
          </span>
          <span className="flex items-center gap-1">
            <MousePointer2 className="w-3 h-3" /> Cuộn để phóng to
          </span>
        </div>
      </div>
    </div>
  );
}
