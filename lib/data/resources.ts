export interface Resource {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription?: {
    overview: string;
    keyFeatures: string[];
    howToUse: string;
  };
  downloads: number;
  likes: number;
  image: string;
  downloadUrl: string;
  code?: string;
}

export const resources: Resource[] = [
  {
    id: "1",
    slug: "glassmorphism-card",
    title: "Glassmorphism Card",
    category: "UI Component",
    description: "Modern glass-effect card with blur and transparency",
    longDescription: {
      overview: "The Glassmorphism Card is a sleek, modern UI component designed to bring a frosted glass aesthetic to your web applications. Inspired by the latest design trends, this component creates a stunning visual effect using backdrop blur and semi-transparent backgrounds. It is perfect for dashboards, portfolios, and modern landing pages that require a sophisticated touch. The card adapts seamlessly to various content types, making it versatile for displaying information, images, or interactive elements with an elegant glass-like appearance.",
      keyFeatures: [
        "Backdrop blur effect for authentic glassmorphism",
        "Semi-transparent background with subtle border",
        "Responsive design that works on all screen sizes",
        "Smooth shadow effects for depth perception",
        "Easy to customize colors and opacity levels",
        "Lightweight and performance-optimized code"
      ],
      howToUse: "To implement the Glassmorphism Card, simply copy the provided code snippet and paste it into your React or Tailwind project. Adjust the background opacity values to match your design needs. For best results, place the card over colorful or gradient backgrounds to maximize the glass effect visibility. Ensure you have the Tailwind CSS backdrop-blur utilities enabled in your configuration."
    },
    downloads: 1234,
    likes: 89,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop",
    downloadUrl: "/downloads/glassmorphism-card.zip",
    code: `<div className="relative p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl">
  <h3 className="text-xl font-bold text-white">Glass Card</h3>
  <p className="mt-2 text-white/80">Beautiful frosted glass effect.</p>
</div>`,
  },
  {
    id: "2",
    slug: "animated-navbar",
    title: "Animated Navbar",
    category: "Navigation",
    description: "Sticky navigation with smooth animations",
    longDescription: {
      overview: "The Animated Navbar component provides a professional sticky navigation solution that enhances user experience with smooth entrance and scroll-based animations. This responsive navigation bar stays fixed at the top of your page as users scroll, ensuring important links are always accessible. Built with performance in mind, it features subtle fade-in effects and hover states that create a polished, modern feel. Ideal for corporate websites, SaaS platforms, and personal portfolios requiring intuitive navigation.",
      keyFeatures: [
        "Sticky positioning that follows user scroll",
        "Smooth backdrop blur for modern aesthetics",
        "Responsive design for mobile and desktop",
        "Animated hover states on navigation links",
        "Logo placement with flexible alignment options",
        "Lightweight implementation with minimal dependencies"
      ],
      howToUse: "Copy the navbar code and place it at the top of your page layout. Customize the background opacity and blur values based on your color scheme. Update the navigation links in the flex container to match your site structure. For mobile responsiveness, consider adding a hamburger menu toggle using the same styling approach."
    },
    downloads: 987,
    likes: 76,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    downloadUrl: "/downloads/animated-navbar.zip",
    code: `<nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-white/10 z-50">
  <div className="flex items-center justify-between px-6 py-4">
    <span className="text-white font-bold">Logo</span>
    <div className="flex gap-6 text-sm text-white/80">
      <a href="#" className="hover:text-white transition">Home</a>
      <a href="#" className="hover:text-white transition">About</a>
    </div>
  </div>
</nav>`,
  },
  {
    id: "3",
    slug: "dashboard-layout",
    title: "Dashboard Layout",
    category: "Project",
    description: "Complete admin dashboard with sidebar and charts",
    longDescription: {
      overview: "The Dashboard Layout is a comprehensive admin panel template designed for data-intensive applications. This full-featured layout includes a collapsible sidebar navigation system and a spacious main content area perfect for displaying analytics, charts, and management interfaces. The dark theme aesthetic with neon green accents creates a professional developer-friendly environment. Suitable for SaaS dashboards, content management systems, and analytics platforms requiring organized navigation.",
      keyFeatures: [
        "Collapsible sidebar with navigation menu",
        "Responsive grid system for widgets and charts",
        "Dark theme optimized for long usage sessions",
        "Active state highlighting for current page",
        "Flexible main content area for various components",
        "Clean typography hierarchy for data presentation"
      ],
      howToUse: "Implement the dashboard by placing the sidebar component alongside your main content wrapper. Customize the navigation items in the sidebar to match your application's sections. Use the provided color scheme or adjust the Tailwind classes to match your brand. The layout is fully responsive and will adapt to mobile devices with appropriate breakpoints."
    },
    downloads: 2156,
    likes: 134,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    downloadUrl: "/downloads/dashboard-layout.zip",
    code: `<div className="flex h-screen bg-[#0a0a0a]">
  <aside className="w-64 bg-[#111] border-r border-[#222] p-6">
    <h2 className="text-white font-bold text-lg">Dashboard</h2>
    <nav className="mt-6 space-y-2">
      <a href="#" className="block px-4 py-2 rounded-lg bg-[#00D9A3]/10 text-[#00D9A3]">Overview</a>
      <a href="#" className="block px-4 py-2 rounded-lg text-[#888] hover:bg-[#1a1a1a]">Analytics</a>
    </nav>
  </aside>
  <main className="flex-1 p-8">
    <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
  </main>
</div>`,
  },
  {
    id: "4",
    slug: "login-modal",
    title: "Login Modal",
    category: "UI Component",
    description: "Beautiful animated authentication modal",
    longDescription: {
      overview: "The Login Modal is an elegant authentication dialog designed to enhance user onboarding and security experiences. This component features a centered, card-based layout with carefully crafted form elements including email input fields and submit buttons. The dark theme with neon green accent colors creates a modern aesthetic that aligns with contemporary design standards. Smooth focus states and hover effects provide visual feedback that guides users through the authentication process seamlessly.",
      keyFeatures: [
        "Centered modal layout with max-width constraints",
        "Custom styled input fields with focus states",
        "Eye-catching call-to-action button design",
        "Responsive sizing for mobile and desktop screens",
        "Semantic HTML structure for accessibility",
        "Customizable color scheme and border styles"
      ],
      howToUse: "Integrate the Login Modal into your authentication flow by copying the component code. Wrap the modal in an overlay div with backdrop blur for a professional effect. Connect the input fields to your form state management solution. Customize the button colors and border radius values to match your application's design system. Ensure proper form validation is implemented for production use."
    },
    downloads: 1543,
    likes: 92,
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&h=400&fit=crop",
    downloadUrl: "/downloads/login-modal.zip",
    code: `<div className="w-full max-w-md p-8 rounded-2xl bg-[#0a0a0a] border border-[#1a1a1a]">
  <h2 className="text-2xl font-bold text-white text-center">Welcome Back</h2>
  <p className="mt-2 text-[#888] text-center">Sign in to your account</p>
  <div className="mt-6 space-y-4">
    <input 
      type="email" 
      placeholder="Email" 
      className="w-full px-4 py-3 rounded-xl bg-[#111] border border-[#222] text-white placeholder-[#666] focus:border-[#00D9A3] focus:outline-none"
    />
    <button className="w-full py-3 rounded-xl bg-[#00D9A3] text-black font-semibold hover:bg-[#00D9A3]/90 transition">
      Sign In
    </button>
  </div>
</div>`,
  },
  {
    id: "5",
    slug: "ecommerce-template",
    title: "E-commerce Template",
    category: "Project",
    description: "Full-featured online store template",
    longDescription: {
      overview: "The E-commerce Template provides a complete product showcase layout designed for online stores and digital marketplaces. This responsive grid system displays product cards with images, names, pricing, and call-to-action buttons in an organized, visually appealing manner. The dark theme aesthetic creates a premium shopping experience while maintaining excellent readability. Each product card is designed to drive conversions with prominent pricing and clear purchase buttons.",
      keyFeatures: [
        "Responsive grid layout for product displays",
        "Product image placeholders with aspect ratios",
        "Prominent pricing with neon green accent color",
        "Clear call-to-action add-to-cart buttons",
        "Card-based design with subtle borders",
        "Optimized spacing for visual hierarchy"
      ],
      howToUse: "Deploy the E-commerce Template by copying the grid code into your product listing page. Replace the placeholder images with your actual product photos. Connect the pricing display to your product data source. Customize the button colors and hover states to match your brand identity. The grid automatically adapts from single column on mobile to multiple columns on larger screens."
    },
    downloads: 3210,
    likes: 198,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    downloadUrl: "/downloads/ecommerce-template.zip",
    code: `<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl overflow-hidden">
    <div className="h-48 bg-[#111] flex items-center justify-center">
      <span className="text-[#444]">Product Image</span>
    </div>
    <div className="p-4">
      <h3 className="text-white font-medium">Product Name</h3>
      <p className="mt-1 text-[#00D9A3] font-bold">$99.00</p>
      <button className="mt-3 w-full py-2 rounded-lg bg-[#00D9A3] text-black text-sm font-medium">
        Add to Cart
      </button>
    </div>
  </div>
</div>`,
  },
  {
    id: "6",
    slug: "pricing-table",
    title: "Pricing Table",
    category: "UI Component",
    description: "Comparison pricing cards with toggle",
    longDescription: {
      overview: "The Pricing Table component presents a professional pricing comparison layout ideal for SaaS products and subscription services. This three-tier comparison system displays plan names, pricing amounts, feature lists, and call-to-action buttons in a clean, scannable format. The dark theme design with subtle borders and neon green accents creates a premium feel that encourages conversions. Each pricing tier is clearly distinguished while maintaining visual consistency across the entire component.",
      keyFeatures: [
        "Three-tier pricing comparison layout",
        "Clear pricing display with monthly indicators",
        "Feature list with checkmark indicators",
        "Prominent call-to-action buttons per tier",
        "Responsive grid that stacks on mobile",
        "Professional typography hierarchy"
      ],
      howToUse: "Implement the Pricing Table by copying the grid layout code into your pricing page. Customize the plan names, pricing amounts, and feature lists to match your service offerings. Adjust the button styles to indicate recommended or popular tiers. For monthly and annual toggle functionality, wrap the component in a state container that updates pricing values dynamically."
    },
    downloads: 876,
    likes: 65,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    downloadUrl: "/downloads/pricing-table.zip",
    code: `<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-[#1a1a1a]">
    <h3 className="text-[#888] font-medium">Basic</h3>
    <p className="mt-2 text-3xl font-bold text-white">$9<span className="text-lg text-[#666]">/mo</span></p>
    <ul className="mt-4 space-y-2 text-[#888] text-sm">
      <li className="flex items-center gap-2">✓ 5 Projects</li>
      <li className="flex items-center gap-2">✓ 10GB Storage</li>
    </ul>
    <button className="mt-6 w-full py-3 rounded-xl border border-[#333] text-white hover:bg-[#1a1a1a] transition">
      Get Started
    </button>
  </div>
</div>`,
  },
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}

export function getResourceById(id: string): Resource | undefined {
  return resources.find((r) => r.id === id);
}
