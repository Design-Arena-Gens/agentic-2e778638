'use client';

import { useState } from 'react';

export default function Home() {
  const [size, setSize] = useState(300);
  const [showGrid, setShowGrid] = useState(false);

  const downloadSVG = () => {
    const svg = document.getElementById('business-logo');
    const svgData = new XMLSerializer().serializeToString(svg);
    const blob = new Blob([svgData], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'business-agent-logo.svg';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        maxWidth: '900px',
        width: '100%'
      }}>
        <h1 style={{
          fontSize: '36px',
          fontWeight: '700',
          color: '#2d3748',
          marginBottom: '10px',
          textAlign: 'center'
        }}>
          Business Agent Logo
        </h1>
        <p style={{
          fontSize: '16px',
          color: '#718096',
          marginBottom: '40px',
          textAlign: 'center'
        }}>
          Professional • Trustworthy • Modern
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '40px',
          padding: '40px',
          background: showGrid
            ? 'repeating-linear-gradient(0deg, #f7fafc 0px, #f7fafc 20px, #e2e8f0 20px, #e2e8f0 21px), repeating-linear-gradient(90deg, #f7fafc 0px, #f7fafc 20px, #e2e8f0 20px, #e2e8f0 21px)'
            : '#f7fafc',
          borderRadius: '12px',
          position: 'relative'
        }}>
          <svg
            id="business-logo"
            width={size}
            height={size}
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: 'block' }}
          >
            <defs>
              <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#1e40af', stopOpacity: 1 }} />
              </linearGradient>
              <linearGradient id="silverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#e5e7eb', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#9ca3af', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#6b7280', stopOpacity: 1 }} />
              </linearGradient>
              <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                <feOffset dx="0" dy="2" result="offsetblur"/>
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.2"/>
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Abstract human figure - circular head */}
            <circle
              cx="200"
              cy="130"
              r="35"
              fill="url(#blueGradient)"
              filter="url(#shadow)"
            />

            {/* Body - abstract geometric shape */}
            <path
              d="M 200 165 L 180 190 L 180 260 Q 180 270 190 270 L 210 270 Q 220 270 220 260 L 220 190 Z"
              fill="url(#blueGradient)"
              filter="url(#shadow)"
            />

            {/* Left arm extended for briefcase */}
            <path
              d="M 180 190 Q 150 200 140 220 L 120 230"
              stroke="url(#blueGradient)"
              strokeWidth="16"
              strokeLinecap="round"
              fill="none"
              filter="url(#shadow)"
            />

            {/* Right arm */}
            <path
              d="M 220 190 Q 240 200 245 215"
              stroke="url(#blueGradient)"
              strokeWidth="16"
              strokeLinecap="round"
              fill="none"
              filter="url(#shadow)"
            />

            {/* Left leg */}
            <path
              d="M 190 270 L 185 310"
              stroke="url(#blueGradient)"
              strokeWidth="14"
              strokeLinecap="round"
              fill="none"
            />

            {/* Right leg */}
            <path
              d="M 210 270 L 215 310"
              stroke="url(#blueGradient)"
              strokeWidth="14"
              strokeLinecap="round"
              fill="none"
            />

            {/* Briefcase - main body */}
            <rect
              x="70"
              y="220"
              width="60"
              height="45"
              rx="3"
              fill="url(#silverGradient)"
              filter="url(#shadow)"
            />

            {/* Briefcase handle */}
            <path
              d="M 85 220 Q 100 210 115 220"
              stroke="#6b7280"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />

            {/* Briefcase lock detail */}
            <rect
              x="97"
              y="235"
              width="6"
              height="10"
              rx="1"
              fill="#3b82f6"
            />

            {/* Briefcase horizontal line detail */}
            <line
              x1="70"
              y1="242"
              x2="130"
              y2="242"
              stroke="#4b5563"
              strokeWidth="2"
            />

            {/* Outer circle - professional border */}
            <circle
              cx="200"
              cy="200"
              r="185"
              fill="none"
              stroke="url(#blueGradient)"
              strokeWidth="6"
              opacity="0.3"
            />

            {/* Inner accent circle */}
            <circle
              cx="200"
              cy="200"
              r="175"
              fill="none"
              stroke="url(#silverGradient)"
              strokeWidth="2"
              opacity="0.5"
            />

            {/* Geometric accent lines - top right */}
            <path
              d="M 280 150 L 300 140 M 285 165 L 305 155"
              stroke="#3b82f6"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.4"
            />

            {/* Geometric accent lines - bottom left */}
            <path
              d="M 120 280 L 100 290 M 115 295 L 95 305"
              stroke="#3b82f6"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.4"
            />
          </svg>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          marginBottom: '30px'
        }}>
          <div>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontSize: '14px',
              fontWeight: '600',
              color: '#4a5568'
            }}>
              Logo Size: {size}px
            </label>
            <input
              type="range"
              min="200"
              max="500"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              style={{
                width: '100%',
                height: '6px',
                borderRadius: '5px',
                background: '#e2e8f0',
                outline: 'none',
                cursor: 'pointer'
              }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input
              type="checkbox"
              id="grid"
              checked={showGrid}
              onChange={(e) => setShowGrid(e.target.checked)}
              style={{ width: '18px', height: '18px', cursor: 'pointer' }}
            />
            <label htmlFor="grid" style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#4a5568',
              cursor: 'pointer'
            }}>
              Show Grid Background
            </label>
          </div>
        </div>

        <button
          onClick={downloadSVG}
          style={{
            width: '100%',
            padding: '16px',
            background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'transform 0.2s, box-shadow 0.2s',
            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.6)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.4)';
          }}
        >
          Download SVG Logo
        </button>

        <div style={{
          marginTop: '30px',
          padding: '20px',
          background: '#f7fafc',
          borderRadius: '8px',
          fontSize: '14px',
          color: '#4a5568',
          lineHeight: '1.6'
        }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '10px', color: '#2d3748' }}>
            Logo Features:
          </h3>
          <ul style={{ paddingLeft: '20px', margin: '0' }}>
            <li>Professional blue and silver color palette</li>
            <li>Abstract human figure with briefcase symbolizing business expertise</li>
            <li>Clean, minimalist vector design</li>
            <li>Scalable SVG format for any size application</li>
            <li>Modern geometric accents for contemporary feel</li>
            <li>Perfect for corporate branding and business materials</li>
          </ul>
        </div>
      </div>

      <div style={{
        marginTop: '30px',
        fontSize: '14px',
        color: 'rgba(255,255,255,0.9)',
        textAlign: 'center'
      }}>
        Scalable Vector Logo • Professional Design • Ready for Production
      </div>
    </div>
  );
}
