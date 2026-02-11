import React from "react";

interface LivePreviewProps {
  html: string;
  css: string;
}

export function LivePreview({ html, css, js }: { html: string, css: string, js?: string }) {
  const srcDoc = `
    <html>
      <head>
        <style>
          /* Force the internal content to be at least as large as the scaled-up iframe */
          html, body { 
            margin: 0; 
            padding: 0; 
            width: 100%;
            height: 100%;
            display: flex; 
            justify-content: center; 
            align-items: center; 
            background: transparent; 
            overflow: hidden;
          }
          /* This ensures backgrounds like gradients/grids fill the entire view */
          body > * {
            flex-shrink: 0;
          }
          ${css}
        </style>
      </head>
      <body>
        ${html}
        <script>${js || ""}</script>
      </body>
    </html>
  `;

  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
      <iframe
        srcDoc={srcDoc}
        className="
          /* 1. We make the iframe exactly 2x the size of the container */
          w-[200%] h-[200%] 
          absolute
          top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          border-none 
          bg-transparent 
          /* 2. Scale it down by 0.5 to fit perfectly (1/2 = 0.5) */
          scale-[0.5] 
          pointer-events-none
          transition-transform 
          duration-500
        "
        title="preview"
        sandbox="allow-scripts"
      />
    </div>
  );
}