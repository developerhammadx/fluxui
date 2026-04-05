const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, 'assets');

// Ensure assets directory exists
if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

// Color palette
const COLORS = {
  background: '#000000',
  cyan: '#00D9A3',
  royalBlue: '#1E3A8A',
  cyanGlow: '#00FFCC',
  blueGlow: '#3B82F6',
};

// Create gradient
function createGradient(ctx, x, y, width, height) {
  const gradient = ctx.createLinearGradient(x, y, x + width, y + height);
  gradient.addColorStop(0, COLORS.cyan);
  gradient.addColorStop(0.5, '#0080FF');
  gradient.addColorStop(1, COLORS.royalBlue);
  return gradient;
}

// Draw glassmorphic F logo
function drawGlassmorphicF(ctx, centerX, centerY, size) {
  const strokeWidth = size * 0.12;
  const glowSize = strokeWidth * 1.5;
  
  // Glow effect
  ctx.shadowColor = COLORS.cyanGlow;
  ctx.shadowBlur = glowSize;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  
  // Main gradient stroke
  ctx.strokeStyle = createGradient(ctx, centerX - size/2, centerY - size/2, size, size);
  ctx.lineWidth = strokeWidth;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  
  // Draw geometric F
  const startX = centerX - size * 0.3;
  const startY = centerY - size * 0.4;
  const lineLen = size * 0.6;
  
  ctx.beginPath();
  
  // Vertical line (left side of F)
  ctx.moveTo(startX, startY);
  ctx.lineTo(startX, startY + lineLen);
  
  // Top horizontal
  ctx.moveTo(startX, startY);
  ctx.lineTo(startX + lineLen * 0.8, startY);
  
  // Middle horizontal
  ctx.moveTo(startX, startY + lineLen * 0.5);
  ctx.lineTo(startX + lineLen * 0.6, startY + lineLen * 0.5);
  
  ctx.stroke();
  
  // Inner glow line (thinner, brighter)
  ctx.shadowBlur = glowSize * 0.5;
  ctx.lineWidth = strokeWidth * 0.4;
  ctx.strokeStyle = COLORS.cyanGlow;
  
  ctx.beginPath();
  ctx.moveTo(startX + strokeWidth * 0.3, startY + strokeWidth * 0.3);
  ctx.lineTo(startX + strokeWidth * 0.3, startY + lineLen - strokeWidth * 0.3);
  ctx.moveTo(startX + strokeWidth * 0.3, startY + strokeWidth * 0.3);
  ctx.lineTo(startX + lineLen * 0.8 - strokeWidth * 0.3, startY + strokeWidth * 0.3);
  ctx.moveTo(startX + strokeWidth * 0.3, startY + lineLen * 0.5);
  ctx.lineTo(startX + lineLen * 0.6 - strokeWidth * 0.3, startY + lineLen * 0.5);
  ctx.stroke();
  
  // Reset shadow
  ctx.shadowBlur = 0;
}

// Generate logo
function generateLogo(width, height, filename, iconOnly = false) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Black background
  ctx.fillStyle = COLORS.background;
  ctx.fillRect(0, 0, width, height);
  
  // Center point
  const centerX = width / 2;
  const centerY = height / 2;
  
  // Icon size
  const iconSize = Math.min(width, height) * 0.5;
  
  // Draw F icon
  drawGlassmorphicF(ctx, centerX, centerY, iconSize);
  
  // Add text if not icon-only
  if (!iconOnly && width >= 512) {
    ctx.font = `bold ${width * 0.12}px Arial, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Text gradient
    const textGradient = createGradient(ctx, centerX - width * 0.3, centerY + iconSize * 0.8, width * 0.6, width * 0.1);
    ctx.fillStyle = textGradient;
    ctx.fillText('FluxUI', centerX, centerY + iconSize * 0.9);
    
    // Subtitle
    ctx.font = `${width * 0.04}px Arial, sans-serif`;
    ctx.fillStyle = '#888888';
    ctx.fillText('UI/UX Framework', centerX, centerY + iconSize * 1.15);
  }
  
  // Save
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(ASSETS_DIR, filename), buffer);
  console.log(`✓ Generated ${filename} (${width}×${height})`);
}

// Generate all logos
console.log('🎨 Generating FluxUI Professional Logo...\n');

// Main app icon (1024x1024)
generateLogo(1024, 1024, 'logo.png', false);

// Icon only version (1024x1024 - no text)
generateLogo(1024, 1024, 'icon-only.png', true);

// Favicon (48x48)
generateLogo(48, 48, 'favicon.png', true);

// Smaller icon sizes
generateLogo(512, 512, 'logo-512.png', false);
generateLogo(192, 192, 'logo-192.png', true);
generateLogo(144, 144, 'logo-144.png', true);

console.log('\n✅ All logos generated successfully!');
console.log('\nFiles created in assets/ folder:');
console.log('  • logo.png (1024×1024) - Main logo with text');
console.log('  • icon-only.png (1024×1024) - Icon only, no text');
console.log('  • favicon.png (48×48) - Browser favicon');
console.log('  • logo-512.png (512×512) - Medium size');
console.log('  • logo-192.png (192×192) - Android icon');
console.log('  • logo-144.png (144×144) - Small icon');
