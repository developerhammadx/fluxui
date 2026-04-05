const fs = require('fs');
const path = require('path');

// Simple SVG-based favicon generator
function generateSVGLogo(size, filename, publicDir) {
  const strokeWidth = size * 0.12;
  const padding = size * 0.25;
  const lineLen = size * 0.5;
  const startX = padding;
  const startY = padding;
  
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad${size}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#00D9A3;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#0080FF;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1E3A8A;stop-opacity:1" />
    </linearGradient>
    <filter id="glow${size}" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="${size * 0.03}" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <rect width="${size}" height="${size}" fill="#000000"/>
  <path d="M${startX} ${startY} L${startX} ${startY + lineLen} M${startX} ${startY} L${startX + lineLen * 0.8} ${startY} M${startX} ${startY + lineLen * 0.5} L${startX + lineLen * 0.6} ${startY + lineLen * 0.5}" 
        stroke="url(#grad${size})" 
        stroke-width="${strokeWidth}" 
        stroke-linecap="round" 
        stroke-linejoin="round"
        filter="url(#glow${size})"/>
  <path d="M${startX + strokeWidth * 0.3} ${startY + strokeWidth * 0.3} L${startX + strokeWidth * 0.3} ${startY + lineLen - strokeWidth * 0.3} M${startX + strokeWidth * 0.3} ${startY + strokeWidth * 0.3} L${startX + lineLen * 0.8 - strokeWidth * 0.3} ${startY + strokeWidth * 0.3} M${startX + strokeWidth * 0.3} ${startY + lineLen * 0.5} L${startX + lineLen * 0.6 - strokeWidth * 0.3} ${startY + lineLen * 0.5}" 
        stroke="#00FFCC" 
        stroke-width="${strokeWidth * 0.4}" 
        stroke-linecap="round" 
        stroke-linejoin="round"
        opacity="0.6"/>
</svg>`;
  
  fs.writeFileSync(path.join(publicDir, filename), svg);
  console.log(`✓ Generated ${filename} (${size}×${size})`);
}

const publicDir = path.join(__dirname, 'public');

console.log('🎨 Generating FluxUI SVG Logo...\n');

// Generate favicon as SVG (browsers support SVG favicons)
generateSVGLogo(48, 'favicon.svg', publicDir);
generateSVGLogo(180, 'apple-touch-icon.svg', publicDir);
generateSVGLogo(192, 'icon-only.svg', publicDir);

console.log('\n✅ SVG logos generated successfully!');
