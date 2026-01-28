'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NetworkNode {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  category: string;
  color: string;
  connections: string[];
  label?: string;
}

const CATEGORY_COLORS: Record<string, string> = {
  A: '#ff6b6b',
  B: '#ffd93d',
  C: '#6bcb77',
  D: '#4d96ff',
  E: '#9b59b6',
  F: '#e17055',
  G: '#00cec9',
  H: '#fd79a8',
};

const CATEGORY_LABELS: Record<string, { en: string; ko: string }> = {
  A: { en: 'Foundation', ko: '기초 설계' },
  B: { en: 'Literature', ko: '문헌 검토' },
  C: { en: 'Methodology', ko: '방법론' },
  D: { en: 'Data', ko: '데이터' },
  E: { en: 'Analysis', ko: '분석' },
  F: { en: 'Quality', ko: '품질 관리' },
  G: { en: 'Publication', ko: '출판' },
  H: { en: 'Specialized', ko: '특수' },
};

interface AgentNetworkProps {
  locale?: string;
  height?: number;
  interactive?: boolean;
}

export function AgentNetwork({
  locale = 'en',
  height = 500,
  interactive = true
}: AgentNetworkProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredNode, setHoveredNode] = useState<NetworkNode | null>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height });
  const nodesRef = useRef<NetworkNode[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  // Generate initial node positions
  const generateNodes = useCallback((width: number, height: number): NetworkNode[] => {
    const categories = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const nodes: NetworkNode[] = [];
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) * 0.35;

    // Agent counts per category (approximate real counts)
    const agentCounts: Record<string, number> = {
      A: 6, B: 5, C: 7, D: 4, E: 5, F: 5, G: 6, H: 2
    };

    categories.forEach((cat, catIndex) => {
      const count = agentCounts[cat];
      const categoryAngle = (catIndex / categories.length) * Math.PI * 2 - Math.PI / 2;

      for (let i = 0; i < count; i++) {
        const spreadAngle = categoryAngle + (i - count / 2) * 0.12;
        const spreadRadius = radius + (Math.random() - 0.5) * 60;

        nodes.push({
          id: `${cat}${i + 1}`,
          x: centerX + Math.cos(spreadAngle) * spreadRadius,
          y: centerY + Math.sin(spreadAngle) * spreadRadius,
          vx: 0,
          vy: 0,
          category: cat,
          color: CATEGORY_COLORS[cat],
          connections: [],
          label: `${cat}${i + 1}`,
        });
      }
    });

    // Generate connections (within category and some cross-category)
    nodes.forEach((node) => {
      const sameCategory = nodes.filter((n) => n.category === node.category && n.id !== node.id);
      const otherNodes = nodes.filter((n) => n.category !== node.category);

      // Connect to nodes in same category
      sameCategory.forEach((n) => {
        if (!node.connections.includes(n.id)) {
          node.connections.push(n.id);
        }
      });

      // Connect to 1-2 random nodes from adjacent categories
      const adjacentCategories = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
      const catIndex = adjacentCategories.indexOf(node.category);
      const adjacentCats = [
        adjacentCategories[(catIndex + 1) % 8],
        adjacentCategories[(catIndex + 7) % 8],
      ];

      const crossConnections = otherNodes
        .filter((n) => adjacentCats.includes(n.category))
        .sort(() => Math.random() - 0.5)
        .slice(0, 2);

      crossConnections.forEach((n) => {
        if (!node.connections.includes(n.id)) {
          node.connections.push(n.id);
        }
      });
    });

    return nodes;
  }, []);

  // Initialize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setDimensions({ width, height });
        nodesRef.current = generateNodes(width, height);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [height, generateNodes]);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = dimensions.width * dpr;
    canvas.height = dimensions.height * dpr;
    canvas.style.width = `${dimensions.width}px`;
    canvas.style.height = `${dimensions.height}px`;
    ctx.scale(dpr, dpr);

    const getNodeById = (id: string) => nodesRef.current.find((n) => n.id === id);

    const draw = () => {
      ctx.fillStyle = '#050508';
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);

      const nodes = nodesRef.current;
      const mouse = mouseRef.current;

      // Apply forces and update positions
      if (interactive) {
        nodes.forEach((node) => {
          // Mouse attraction/repulsion
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150 && dist > 0) {
            const force = (150 - dist) / 150 * 0.3;
            node.vx += (dx / dist) * force;
            node.vy += (dy / dist) * force;
          }

          // Friction
          node.vx *= 0.95;
          node.vy *= 0.95;

          // Update position
          node.x += node.vx;
          node.y += node.vy;

          // Boundaries
          const margin = 30;
          if (node.x < margin) { node.x = margin; node.vx *= -0.5; }
          if (node.x > dimensions.width - margin) { node.x = dimensions.width - margin; node.vx *= -0.5; }
          if (node.y < margin) { node.y = margin; node.vy *= -0.5; }
          if (node.y > dimensions.height - margin) { node.y = dimensions.height - margin; node.vy *= -0.5; }
        });
      }

      // Draw connections
      nodes.forEach((node) => {
        node.connections.forEach((targetId) => {
          const target = getNodeById(targetId);
          if (!target) return;

          const isHighlighted = hoveredNode &&
            (node.id === hoveredNode.id || target.id === hoveredNode.id);

          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(target.x, target.y);
          ctx.strokeStyle = isHighlighted
            ? `${node.color}60`
            : 'rgba(136, 136, 170, 0.08)';
          ctx.lineWidth = isHighlighted ? 2 : 1;
          ctx.stroke();
        });
      });

      // Draw nodes
      nodes.forEach((node) => {
        const isHovered = hoveredNode?.id === node.id;
        const isConnected = hoveredNode?.connections.includes(node.id);

        const size = isHovered ? 16 : isConnected ? 12 : 10;
        const alpha = hoveredNode
          ? (isHovered || isConnected ? 1 : 0.3)
          : 1;

        // Glow effect
        if (isHovered) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, size + 10, 0, Math.PI * 2);
          const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, size + 10);
          gradient.addColorStop(0, `${node.color}40`);
          gradient.addColorStop(1, 'transparent');
          ctx.fillStyle = gradient;
          ctx.fill();
        }

        // Node circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `${node.color}`;
        ctx.globalAlpha = alpha;
        ctx.fill();
        ctx.globalAlpha = 1;

        // Node label
        if (isHovered || isConnected) {
          ctx.font = '10px "JetBrains Mono", monospace';
          ctx.fillStyle = '#050508';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(node.id, node.x, node.y + 1);
        }
      });

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(animationRef.current);
  }, [dimensions, hoveredNode, interactive]);

  // Mouse handlers
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseRef.current = { x, y };

    // Check for hover
    const hovered = nodesRef.current.find((node) => {
      const dx = node.x - x;
      const dy = node.y - y;
      return Math.sqrt(dx * dx + dy * dy) < 15;
    });

    setHoveredNode(hovered || null);
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { x: -1000, y: -1000 };
    setHoveredNode(null);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-void-deep"
      style={{ height }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Tooltip */}
      <AnimatePresence>
        {hoveredNode && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="pointer-events-none absolute z-10 border border-stellar-faint/20 bg-void-surface/95 p-3 backdrop-blur-sm"
            style={{
              left: hoveredNode.x + 20,
              top: hoveredNode.y - 40,
            }}
          >
            <div className="flex items-center gap-2">
              <div
                className="h-3 w-3"
                style={{ backgroundColor: hoveredNode.color }}
              />
              <span className="font-display text-sm font-semibold text-stellar-core">
                Agent {hoveredNode.id}
              </span>
            </div>
            <p className="mt-1 font-mono text-micro text-stellar-faint">
              {CATEGORY_LABELS[hoveredNode.category][locale as 'en' | 'ko']}
            </p>
            <p className="mt-1 font-mono text-micro text-stellar-dim">
              {hoveredNode.connections.length} connections
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Category Legend */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap justify-center gap-x-4 gap-y-2">
        {Object.entries(CATEGORY_COLORS).map(([cat, color]) => (
          <div key={cat} className="flex items-center gap-2">
            <div
              className="h-2.5 w-2.5"
              style={{ backgroundColor: color }}
            />
            <span className="font-mono text-micro text-stellar-faint">
              {cat}: {CATEGORY_LABELS[cat][locale as 'en' | 'ko']}
            </span>
          </div>
        ))}
      </div>

      {/* Title */}
      <div className="absolute left-4 top-4">
        <span className="font-mono text-micro uppercase tracking-widest text-stellar-faint">
          {locale === 'ko' ? '27 에이전트 네트워크' : '27 Agent Network'}
        </span>
      </div>
    </div>
  );
}
