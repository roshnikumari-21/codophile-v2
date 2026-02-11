import React from "react";

export const HeroIllustration = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 500 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#8b5cf6", stopOpacity: 0.2 }} />
                <stop offset="100%" style={{ stopColor: "#6366f1", stopOpacity: 0.05 }} />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
        </defs>

        {/* Background Pattern */}
        <circle cx="250" cy="200" r="180" fill="url(#grad1)" />

        {/* Laptop Base */}
        <path d="M100 280 L400 280 L380 300 L120 300 Z" fill="#334155" />
        <rect x="120" y="100" width="260" height="180" rx="10" fill="#1e293b" stroke="#475569" strokeWidth="2" />

        {/* Screen Content */}
        <rect x="130" y="110" width="240" height="160" rx="5" fill="#0f172a" />

        {/* Code Lines */}
        <g opacity="0.8">
            <rect x="150" y="130" width="80" height="8" rx="4" fill="#60a5fa" />
            <rect x="150" y="150" width="120" height="6" rx="3" fill="#94a3b8" />
            <rect x="150" y="165" width="100" height="6" rx="3" fill="#94a3b8" />
            <rect x="150" y="180" width="140" height="6" rx="3" fill="#94a3b8" />

            <rect x="150" y="210" width="60" height="8" rx="4" fill="#a78bfa" />
            <rect x="150" y="230" width="160" height="6" rx="3" fill="#94a3b8" />
        </g>

        {/* Floating Elements (representing playground) */}
        <g transform="translate(320, 160)">
            <rect x="0" y="0" width="60" height="60" rx="8" fill="#8b5cf6" opacity="0.8" filter="url(#glow)">
                <animate attributeName="y" values="0; -10; 0" dur="3s" repeatCount="indefinite" />
            </rect>
            <path d="M15 20 L30 40 L45 20" stroke="white" strokeWidth="3" fill="none">
                <animate attributeName="y" values="20; 10; 20" dur="3s" repeatCount="indefinite" />
            </path>
        </g>

        <g transform="translate(100, 200)">
            <circle cx="20" cy="20" r="25" fill="#06b6d4" opacity="0.6" filter="url(#glow)">
                <animate attributeName="cy" values="20; 30; 20" dur="4s" repeatCount="indefinite" />
            </circle>
        </g>

        {/* Stylized Person Head */}
        <circle cx="380" cy="280" r="30" fill="#f43f5e" opacity="0.8" />
        {/* Stylized Body */}
        <path d="M350 310 Q380 360 410 310 V350 H350 Z" fill="#f43f5e" opacity="0.6" />

    </svg>
);

export const MissionIllustration = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="missionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#f59e0b", stopOpacity: 0.2 }} />
                <stop offset="100%" style={{ stopColor: "#ef4444", stopOpacity: 0.05 }} />
            </linearGradient>
        </defs>

        {/* Target Circles */}
        <circle cx="200" cy="150" r="100" fill="url(#missionGrad)" />
        <circle cx="200" cy="150" r="70" stroke="#fbbf24" strokeWidth="2" fill="none" strokeDasharray="5 5">
            <animateTransform attributeName="transform" type="rotate" from="0 200 150" to="360 200 150" dur="20s" repeatCount="indefinite" />
        </circle>
        <circle cx="200" cy="150" r="40" fill="#f59e0b" opacity="0.2" />

        {/* Arrow hitting target */}
        <path d="M280 230 L220 170" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
        <path d="M200 150 L220 170" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />

        {/* Ascending Graphs */}
        <rect x="80" y="200" width="20" height="40" rx="2" fill="#3b82f6" opacity="0.5">
            <animate attributeName="height" values="40; 60; 40" dur="3s" repeatCount="indefinite" />
            <animate attributeName="y" values="200; 180; 200" dur="3s" repeatCount="indefinite" />
        </rect>
        <rect x="110" y="180" width="20" height="60" rx="2" fill="#8b5cf6" opacity="0.6">
            <animate attributeName="height" values="60; 80; 60" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="y" values="180; 160; 180" dur="2.5s" repeatCount="indefinite" />
        </rect>
        <rect x="140" y="150" width="20" height="90" rx="2" fill="#ec4899" opacity="0.7">
            <animate attributeName="height" values="90; 110; 90" dur="4s" repeatCount="indefinite" />
            <animate attributeName="y" values="150; 130; 150" dur="4s" repeatCount="indefinite" />
        </rect>

        {/* Connecting Dots */}
        <circle cx="300" cy="100" r="4" fill="#10b981" />
        <circle cx="340" cy="80" r="4" fill="#10b981" />
        <path d="M300 100 L340 80" stroke="#10b981" strokeWidth="1" opacity="0.5" />
    </svg>
);

export const CommunityIllustration = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="commGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#06b6d4", stopOpacity: 0.2 }} />
                <stop offset="100%" style={{ stopColor: "#3b82f6", stopOpacity: 0.05 }} />
            </linearGradient>
        </defs>

        {/* Network Mesh */}
        <circle cx="200" cy="150" r="120" fill="url(#commGrad)" />

        {/* Nodes */}
        <g>
            <circle cx="100" cy="150" r="20" fill="#3b82f6" opacity="0.8" />
            <circle cx="300" cy="150" r="20" fill="#06b6d4" opacity="0.8" />
            <circle cx="200" cy="80" r="20" fill="#8b5cf6" opacity="0.8" />
            <circle cx="200" cy="220" r="20" fill="#ec4899" opacity="0.8" />

            {/* Small orbiting nodes */}
            <circle cx="150" cy="115" r="8" fill="#64748b" />
            <circle cx="250" cy="115" r="8" fill="#64748b" />
            <circle cx="150" cy="185" r="8" fill="#64748b" />
            <circle cx="250" cy="185" r="8" fill="#64748b" />
        </g>

        {/* Connections */}
        <path d="M100 150 L200 80 L300 150 L200 220 Z" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4" fill="none" opacity="0.5">
            <animate attributeName="stroke-dashoffset" from="0" to="100" dur="20s" repeatCount="indefinite" />
        </path>
        <path d="M100 150 L200 220" stroke="#94a3b8" strokeWidth="1" opacity="0.3" />
        <path d="M300 150 L200 80" stroke="#94a3b8" strokeWidth="1" opacity="0.3" />

    </svg>
);
