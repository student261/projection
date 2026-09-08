import { SolutionFullData } from "@/components/MasterSolutionContent";

export const solutionDetails: Record<string, SolutionFullData> = {
  // -------------------------------------------------------------------------
  // 1. INTERACTIVE SPACES (Overview)
  // -------------------------------------------------------------------------
  "interactive-spaces": {
    slug: "interactive-spaces",
    solutionLabel: "Interactive Architecture",
    heroHeading: "Interactive Spaces & Motion Floors",
    heroSubtitle: "Transform Every Physical Surface into an Intelligently Responsive Experience",
    heroDescription: "Transform architectural flooring, vertical walls, and ceilings into living digital ecosystems that respond with sub-millimeter accuracy to human presence and footfall.",
    heroImg: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1920&q=80",

    whatIsHeading: "What Are Interactive Spaces?",
    whatIsDescription: "Interactive Spaces combine optical depth sensors, high-lumen laser projection, and generative computing to transform ordinary static surfaces into responsive physical-digital playgrounds.",
    whatIsVideoPlaceholder: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    whatIsFeatures: [
      { title: "Optical Depth Sensing", desc: "Overhead 3D LiDAR and optical tracking detect multiple visitors instantly." },
      { title: "Zero Wearables", desc: "Pure touchless interaction—visitors use natural body movement and footsteps." },
      { title: "Ultra-Low Latency", desc: "Sub-16ms response time ensures fluid visual synchronization." },
      { title: "Modular Architecture", desc: "Engineered for rapid deployment across floors, walls, ceilings, and windows." }
    ],

    experienceHeading: "Spatial Interaction Catalog",
    experienceIntro: "From dynamic ripple water ponds in corporate atriums to gamified educational installations, explore our diverse interactive architectural portfolio.",
    featuredExperience: {
      category: "Education & Edutainment",
      title: "Active Learning Motion Floor",
      desc: "Turn classroom floors into solar system explorers, dynamic math puzzles, and collaborative physical games.",
      img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80"
    },
    experienceCards: [
      { category: "Museums & Culture", title: "Living Natural Biomes", desc: "Interactive flora and fauna that react, bloom, and scatter as visitors walk.", img: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=800&q=80" },
      { category: "Retail Flagships", title: "Footfall-Activated Catalogs", desc: "Dynamic light footprints illuminating shoes and luxury products as customers step near.", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80" },
      { category: "Healthcare & Wellness", title: "Pediatric Distraction Floors", desc: "Gentle aquatic animations reducing stress and anxiety in hospital waiting zones.", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" },
      { category: "Public Atriums", title: "Generative Ripple Canopy", desc: "Connecting floor footsteps with overhead ceiling visual acoustics in real-time.", img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=800&q=80" }
    ],

    featuresHeading: "Hardware Precision & System Architecture",
    keyFeaturesIntro: "Industrial-grade hardware paired with proprietary real-time computer vision engines engineered for continuous commercial duty cycles.",
    keyFeatures: [
      { title: "Sub-Millimeter Tracking", desc: "High-frequency depth cameras deliver ultra-precise visitor coordinate mapping." },
      { title: "High-Lumen Laser Optics", desc: "10,000+ ANSI lumen commercial projectors with 20,000-hour solid-state lifespans." },
      { title: "Multi-User Concurrency", desc: "Flawlessly processes over 50 simultaneous participants without frame drops." },
      { title: "Dynamic Ambient Calibration", desc: "Auto-adapts to variable daylight and artificial room lighting changes." },
      { title: "Custom Content SDK", desc: "Easily load new games, seasonal campaigns, and brand assets via cloud CMS." },
      { title: "Zero Maintenance Footprint", desc: "Hardware mounts safely out of reach on ceilings, preserving pristine floor aesthetics." }
    ],

    howItWorksHeading: "From Footstep Detection to Optical Wonder",
    howItWorksIntro: "A multi-layered pipeline turning visitor movement into breathtaking digital physics simulations in real time.",
    howItWorksSteps: [
      { title: "Arrival & Proximity", desc: "Visitor enters the interactive projection perimeter." },
      { title: "Depth Acquisition", desc: "Ceiling LiDAR sensors capture coordinate clouds at 60 FPS." },
      { title: "Physics Simulation", desc: "Proprietary engine renders real-time particle and fluid dynamics." },
      { title: "Optical Projection", desc: "Laser projection engines cast synchronized imagery onto the surface." },
      { title: "Shared Feedback", desc: "Surround spatial acoustics harmonize with every visual impact." }
    ],

    industriesHeading: "Architectural Environments We Transform",
    industriesIntro: "Engineered for high-traffic environments where captivating physical engagement is essential.",
    featuredIndustry: { title: "Education", desc: "Immersive classrooms driving kinesthetic learning through active physical gameplay.", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80", href: "/industries/education" },
    industryCards: [
      { title: "Museums & Culture", desc: "Engaging exhibits that encourage tactile exploration of history and science.", img: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=800&q=80", href: "/industries/museums-culture" },
      { title: "Retail & Showrooms", desc: "Turn store floor space into interactive branded product showcases.", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80", href: "/industries/retail-showrooms" },
      { title: "Healthcare", desc: "Therapeutic spaces that foster movement and comfort young patients.", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80", href: "/industries/healthcare" }
    ],

    outcomesHeading: "Tangible Engagement Metrics & ROI",
    benefitsIntro: "Interactive spaces consistently elevate visitor dwell time, brand memorability, and social sharing.",
    featuredBenefit: { title: "Measurable Physical Engagement", desc: "Spaces with interactive motion surfaces experience up to a 300% increase in visitor dwell time and unprompted social sharing.", img: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80" },
    benefits: [
      { title: "300% Dwell Time", desc: "Visitors stay significantly longer interacting with responsive environments." },
      { title: "Zero Physical Wear", desc: "Light replaces mechanical touchscreens, eliminating breakage risks." },
      { title: "Remote CMS Control", desc: "Update visual assets and seasonal campaigns across branches instantly." },
      { title: "Universal Inclusivity", desc: "Accessible to all ages and mobility levels without complex instructions." }
    ],
    techStack: ["3D LiDAR Depth Array", "12,000 ANSI Laser Projectors", "Real-Time Unity / Notch Pipeline", "Sub-16ms Vision Tracking"],

    projectsHeading: "Selected Spatial Deployments",
    projectsIntro: "Discover our landmark interactive spaces across corporate headquarters, prestigious museums, and educational centers.",
    featuredProject: {
      industry: "Education",
      title: "Interactive STEM Discovery Floor",
      desc: "A multi-zone interactive floor installation transforming student participation with interactive science models.",
      location: "Dubai Knowledge Park",
      img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
      tech: ["Interactive Floor", "Optical Tracking", "Laser Projection", "Educational CMS"],
      href: "/projects"
    },
    projects: [
      { industry: "Museum", title: "Living Wetland Ecosystem", desc: "Floor projection reacting to visitor footsteps with fish and lily pads.", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Retail", title: "Luxury Sneaker Portal", desc: "Interactive floor illuminating shoe specifications when walked upon.", img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Healthcare", title: "Pediatric Wellness Garden", desc: "Calming interactive light paths in main hospital atrium.", img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Corporate", title: "Dynamic Brand Welcome Matrix", desc: "Sensory floor welcoming VIPs with generative graphics.", img: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80", href: "/projects" }
    ],

    faqsIntro: "Frequently asked questions regarding architectural requirements, ceiling heights, and day-to-day operation.",
    faqs: [
      { q: "What ceiling height is required for interactive floors?", a: "Standard installations typically require a minimum ceiling clearance of 2.8m (9.2 ft) to achieve an optimal projection throw, though ultra-short-throw mirror assemblies can be adapted for lower ceilings." },
      { q: "Can the interactive floor work in bright ambient light?", a: "Yes. We use commercial laser projectors ranging from 8,000 to 15,000 lumens, paired with high-contrast floor coatings that maintain vivid color reproduction even under commercial retail lighting." },
      { q: "Can we change the interactive games and themes ourselves?", a: "Yes. Our systems come equipped with a web-based CMS, allowing you to switch between branded themes, educational games, and seasonal templates with a single click." },
      { q: "Is any maintenance required on the floor itself?", a: "None. Because all hardware is mounted on the ceiling out of reach, the floor remains completely standard and can be cleaned using regular commercial cleaning procedures." }
    ]
  },

  // -------------------------------------------------------------------------
  // 2. INTERACTIVE FLOOR (Dedicated Sub-Solution)
  // -------------------------------------------------------------------------
  "interactive-floor": {
    slug: "interactive-floor",
    solutionLabel: "Ground-Level Interactivity",
    heroHeading: "Interactive Motion Floor",
    heroSubtitle: "Transform Every Footstep into Fluid Light & Dynamic Interaction",
    heroDescription: "Our signature Interactive Floor system turns static ground surfaces into responsive interactive light canvases. Ideal for museums, flagship stores, schools, and children's amusement centers.",
    heroImg: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1920&q=80",

    whatIsHeading: "What Is an Interactive Floor?",
    whatIsDescription: "An Interactive Floor is an overhead laser-projected system paired with optical depth sensors that detects visitor foot movements in real-time, casting responsive animations, games, and ripples directly beneath their feet.",
    whatIsVideoPlaceholder: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    whatIsFeatures: [
      { title: "Instant Footfall Response", desc: "Sub-16ms latency ensures footsteps trigger instant ripples, animations, or game actions." },
      { title: "Multi-Player Gaming", desc: "Supports up to 30 people playing educational or competitive games simultaneously." },
      { title: "No Wear or Tear", desc: "Nothing on the floor can break—all electronics are safely mounted on the ceiling." },
      { title: "50+ Preloaded Themes", desc: "Includes soccer, koi fish pond, piano keys, galaxy stars, dynamic water, and seasonal holidays." }
    ],

    experienceHeading: "Interactive Floor Game & Theme Suite",
    experienceIntro: "Choose from dozens of interactive physics simulations, sports games, and educational modules.",
    featuredExperience: {
      category: "Sports & Play",
      title: "Interactive Virtual Soccer & Hockey",
      desc: "Visitors kick a virtual projected ball into dynamic goals with realistic bounce physics and cheering crowds.",
      img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80"
    },
    experienceCards: [
      { category: "Nature & Zen", title: "Koi Pond & Water Lilies", desc: "Gentle water ripples follow every step as virtual koi fish swim around feet.", img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80" },
      { category: "Music & Art", title: "Giant Foot Piano", desc: "Step on illuminated piano keys to compose symphonies with synchronized lighting.", img: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80" },
      { category: "Retail", title: "Autumn Leaves & Snow Particles", desc: "Kick through virtual fallen leaves or fresh snow to reveal promotional discount codes.", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80" },
      { category: "Edutainment", title: "Math & Solar System Hopscotch", desc: "Children learn planets and arithmetic through active physical jumping games.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" }
    ],

    featuresHeading: "Floor Tracking Engine & Optical Specs",
    keyFeaturesIntro: "Engineered for harsh commercial foot-traffic environments with zero maintenance required on the ground.",
    keyFeatures: [
      { title: "LiDAR Foot-Tracking", desc: "High-speed 2D/3D LiDAR sweeps the ground plane at 100 Hz." },
      { title: "Laser Solid-State Projectors", desc: "20,000-hour operational life with instant on/off and minimal thermal output." },
      { title: "Seamless Multi-Projector Blend", desc: "Expand to any size—from 3x2m up to 30x10m single continuous interactive floors." },
      { title: "Auto-Geometry Warping", desc: "Software corrects for floor unevenness and projector mounting angles." },
      { title: "Integrated Audio Output", desc: "Synchronized sound effects accompany every step, kick, and splash." },
      { title: "Cloud Management", desc: "Schedule theme changes automatically by time of day or special event calendar." }
    ],

    howItWorksHeading: "How Interactive Floor Tracking Works",
    howItWorksIntro: "From the moment a foot touches the floor to the burst of colorful digital sparks.",
    howItWorksSteps: [
      { title: "Ceiling Sensor Detection", desc: "The overhead infrared depth camera detects the exact X/Y coordinate of each foot." },
      { title: "Touchless Coordinates", desc: "Data is filtered to eliminate shadows and background ambient light noise." },
      { title: "Game Engine Physics", desc: "Unity-based interactive engine simulates fluids, objects, or score counters." },
      { title: "Laser Downward Throw", desc: "The high-lumen projector displays the visual effect precisely at the foot coordinate." },
      { title: "Continuous Tracking", desc: "As the user walks or runs, the visual trails follow smoothly without lag." }
    ],

    industriesHeading: "Where Interactive Floors Excel",
    industriesIntro: "Proven impact across family entertainment centers, retail malls, pediatric clinics, and school halls.",
    featuredIndustry: { title: "Family Entertainment Centers", desc: "High-energy games that keep children engaged for hours.", img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80", href: "/industries/entertainment" },
    industryCards: [
      { title: "Shopping Malls & Retail", desc: "Draw foot traffic into central atriums with joyful interactive attractions.", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80", href: "/industries/retail-showrooms" },
      { title: "Schools & Kindergartens", desc: "Physical exercise combined with interactive cognitive learning.", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80", href: "/industries/education" },
      { title: "Museums & Exhibitions", desc: "Engaging walk-through pathways that educate through play.", img: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=800&q=80", href: "/industries/museums-culture" }
    ],

    outcomesHeading: "Floor Installation Benefits & Impact",
    benefitsIntro: "Interactive floors deliver high engagement while requiring zero floor modifications.",
    featuredBenefit: { title: "Durable & Zero Floor Hazard", desc: "Because all electronics are overhead, the floor remains flat, safe, easy to clean, and ADA compliant.", img: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80" },
    benefits: [
      { title: "Zero Wearable Gear", desc: "No controllers, shoes, or glasses needed—just walk and play." },
      { title: "Hygienic & Touchless", desc: "No glass screens to disinfect; ideal for post-pandemic healthcare and malls." },
      { title: "Multi-Child Play", desc: "Promotes social interaction and cooperative physical play among kids." },
      { title: "Fast Installation", desc: "Can be mounted and calibrated in under 48 hours in most commercial facilities." }
    ],
    techStack: ["Hokuyo LiDAR Scanner", "Barco / Epson Laser Engines", "Unity Interactive Runtime", "Auto-Calibration Matrix"],

    projectsHeading: "Recent Interactive Floor Case Studies",
    projectsIntro: "Explore recent successful deployments in schools, play areas, and flagship stores.",
    featuredProject: {
      industry: "Family Entertainment",
      title: "PlayZone Interactive Ocean Floor",
      desc: "A massive 8x5m interactive floor with 20 multiplayer games for a premiere amusement venue.",
      location: "Riyadh, Saudi Arabia",
      img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      tech: ["Twin Laser Projectors", "LiDAR Tracking", "Custom Ocean Physics"],
      href: "/projects"
    },
    projects: [
      { industry: "Education", title: "Primary School Active Gym", desc: "Interactive floor integrated into physical education curriculum.", img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Retail", title: "Sporting Goods Shoe Test Track", desc: "Floor that tests agility and measures foot speed.", img: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Healthcare", title: "Children's Clinic Waiting Oasis", desc: "Calming interactive light pond in main lobby.", img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Museum", title: "Prehistoric Walkway", desc: "Walk on digital lava and ancient fossils.", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80", href: "/projects" }
    ],

    faqsIntro: "Frequently asked questions regarding interactive floor installation and operation.",
    faqs: [
      { q: "What surface color works best?", a: "White, light grey, or neutral matte flooring provides the highest brightness and color saturation. For dark carpet or wood, we can apply an architectural vinyl overlay." },
      { q: "Can people slip on the projection?", a: "No. The projection is pure light cast onto your existing floor, so the slip coefficient of your flooring does not change." },
      { q: "How many games come included?", a: "Our system includes 50+ pre-built games spanning sports, education, sensory effects, and puzzles, plus an easy creator tool to add your logos and branding." },
      { q: "Is the system covered under warranty?", a: "Yes, we provide a comprehensive 3-year commercial warranty on laser projector engines and sensor arrays." }
    ]
  },

  // -------------------------------------------------------------------------
  // 3. INTERACTIVE WALL (Dedicated Sub-Solution)
  // -------------------------------------------------------------------------
  "interactive-wall": {
    slug: "interactive-wall",
    solutionLabel: "Vertical Surface Interactivity",
    heroHeading: "Interactive Touch & Gesture Wall",
    heroSubtitle: "Transform Plain Walls into Expansive Multi-Touch Canvases",
    heroDescription: "Convert any vertical interior wall into an interactive touch-sensitive or gesture-reactive digital powerhouse. Support multi-user collaboration, digital graffiti, and corporate storytelling.",
    heroImg: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&w=1920&q=80",

    whatIsHeading: "What Is an Interactive Wall?",
    whatIsDescription: "An Interactive Wall combines ultra-short-throw laser projectors with laser touch curtains or LiDAR sensors to detect hand touches and body gestures directly against a vertical wall, converting drywall, glass, or brick into a responsive touch screen.",
    whatIsVideoPlaceholder: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=80",
    whatIsFeatures: [
      { title: "Laser Touch Curtain", desc: "Creates an invisible infrared laser plane parallel to the wall for multi-touch accuracy." },
      { title: "Touchless Gesture Mode", desc: "Optional body-tracking mode allowing interaction from up to 5 meters away." },
      { title: "Digital Spray Can / Stylus", desc: "Support for digital spray cans, brushes, or direct finger touch." },
      { title: "Massive Canvas Scale", desc: "Edge-blend multiple projectors to create 20m+ continuous interactive murals." }
    ],

    experienceHeading: "Interactive Wall Experiences & Activations",
    experienceIntro: "From interactive corporate history timelines to high-energy digital spray paint graffiti walls.",
    featuredExperience: {
      category: "Creative Activations",
      title: "Digital Graffiti & Spray Art Wall",
      desc: "Guests use infrared digital spray cans to paint on a massive wall with authentic dripping paint and stencil effects.",
      img: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=1200&q=80"
    },
    experienceCards: [
      { category: "Corporate Briefing", title: "Executive Interactive Timeline", desc: "Touch milestones across a company's century of innovation to expand video case studies.", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80" },
      { category: "Museums", title: "Tactile Living Artifacts", desc: "Touch ancient artifacts projected on museum walls to rotate 3D models and hear audio.", img: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=800&q=80" },
      { category: "Brand Flagships", title: "Generative Living Floral Wall", desc: "Standing in front of the wall causes virtual vines and exotic blossoms to grow around your silhouette.", img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80" },
      { category: "Education", title: "Collaborative Science Sandbox", desc: "Multiple students manipulate chemical elements and gravity simulations side-by-side.", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80" }
    ],

    featuresHeading: "Wall Sensor Mechanics & Laser Calibration",
    keyFeaturesIntro: "State-of-the-art optical laser arrays delivering sub-millimeter touch precision across any flat or curved wall.",
    keyFeatures: [
      { title: "Laser Curtain Precision", desc: "Detects finger touch with less than 2mm margin of error across 100+ points." },
      { title: "Ultra-Short Throw Projection", desc: "Projectors mount inches from the wall, preventing presenter shadows from blocking the light." },
      { title: "Scratch-Resistant Projection Paint", desc: "Specially formulated high-gain architectural wall coatings for extreme contrast." },
      { title: "4K UHD Resolution", desc: "Crystal-clear typography and architectural line art even when standing 6 inches away." },
      { title: "Multi-User Windowing", desc: "Allows up to 10 independent users to work simultaneously on different wall sections." },
      { title: "Native Web & App Support", desc: "Compatible with standard Windows, HTML5, TouchDesigner, and Unity applications." }
    ],

    howItWorksHeading: "How Interactive Wall Sensing Operates",
    howItWorksIntro: "Seamless conversion of a physical drywall into a 40-point multi-touch interactive surface.",
    howItWorksSteps: [
      { title: "Laser Beam Emission", desc: "An invisible infrared laser module projects a microscopic plane of light 2mm off the wall surface." },
      { title: "Finger or Hand Interruption", desc: "When a finger touches the wall, it reflects the infrared laser back toward the sensor." },
      { title: "Optical Camera Triangulation", desc: "A high-speed camera calculates the exact X/Y coordinate of the touch point at 120 FPS." },
      { title: "OS Signal Injection", desc: "The software translates coordinates into standard multi-touch taps, swipes, and pinches." },
      { title: "Instant Visual Response", desc: "Projector updates the graphic immediately with zero visible delay." }
    ],

    industriesHeading: "Key Sectors for Interactive Walls",
    industriesIntro: "High-value applications across corporate briefing centers, universities, and brand exhibits.",
    featuredIndustry: { title: "Corporate Briefing Centers", desc: "Impress clients with dynamic executive timelines and strategy pitch walls.", img: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&w=1200&q=80", href: "/industries/corporate" },
    industryCards: [
      { title: "Museums & Cultural Centers", desc: "Interactive history walls that make archives accessible to the public.", img: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=800&q=80", href: "/industries/museums-culture" },
      { title: "Automotive & Retail Showrooms", desc: "Full-scale vehicle configurators and interactive product walls.", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80", href: "/industries/retail-showrooms" },
      { title: "Universities & Research", desc: "Collaborative brainstorming and data visualization rooms.", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80", href: "/industries/education" }
    ],

    outcomesHeading: "Interactive Wall Business Outcomes",
    benefitsIntro: "Replace static bulletin boards and expensive LED displays with versatile projection walls.",
    featuredBenefit: { title: "Fraction of the Cost of Giant LED", desc: "Projected interactive walls deliver huge surface areas (10m+) at a fraction of the hardware cost and energy consumption of LED panels.", img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80" },
    benefits: [
      { title: "Seamless Zero-Bezel Canvas", desc: "No bezel grid lines cutting through corporate presentations or artwork." },
      { title: "Low Power Consumption", desc: "Consumes up to 70% less electricity than large-format LED videowalls." },
      { title: "Dual Mode: Touch & Gesture", desc: "Seamlessly switch between close-up touch and distant body gesture modes." },
      { title: "Easy Surface Repair", desc: "Damaged wall? Simply repaint the surface without replacing expensive electronics." }
    ],
    techStack: ["UST Laser Projection (0.23 Throw)", "Infrared Laser Touch Curtain", "Windows Multi-Touch Driver", "TouchDesigner Engine"],

    projectsHeading: "Featured Wall Installations",
    projectsIntro: "Discover some of our flagship multi-touch wall installations around the world.",
    featuredProject: {
      industry: "Corporate",
      title: "Bank Innovation Center Interactive Wall",
      desc: "A 12-meter continuous multi-touch wall showcasing financial history and real-time global market transactions.",
      location: "London, UK",
      img: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&w=1200&q=80",
      tech: ["Triple Blended UST Projectors", "Laser Curtains", "Custom HTML5 Financial Dashboard"],
      href: "/projects"
    },
    projects: [
      { industry: "Museum", title: "National History Touch Wall", desc: "Touch ancient historical figures to hear narrated speeches.", img: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Retail", title: "Flagship Apparel Color Wall", desc: "Touch color swatches to recolor digital mannequins.", img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Education", title: "Interactive Medical Anatomy Wall", desc: "Medical students dissect 3D human models on a 5m wall.", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Events", title: "Expo Digital Graffiti Wall", desc: "Over 5,000 visitors painted custom art during a 3-day conference.", img: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=800&q=80", href: "/projects" }
    ],

    faqsIntro: "Frequently asked questions regarding interactive wall implementation and projection surfaces.",
    faqs: [
      { q: "Can presenters cast shadows on the interactive wall?", a: "We use Ultra-Short-Throw (UST) projectors mounted only inches away above the wall, which eliminates virtually all user shadows while standing directly at the wall." },
      { q: "Does the wall need special construction?", a: "Standard smooth drywall with a high-gain matte white paint works excellently. For best optical contrast, we supply specialized projection screen paint." },
      { q: "Can we connect our own laptops to present on the wall?", a: "Yes. Our systems include HDMI/USB-C inputs and wireless AirPlay/Miracast streaming, allowing you to use the giant wall as a regular interactive monitor." },
      { q: "Can it work on curved walls?", a: "Yes. Our optical warping software can map touch curtains onto cylindrical or gently curved architectural walls." }
    ]
  },

  // -------------------------------------------------------------------------
  // 4. INTERACTIVE CEILING (Dedicated Sub-Solution)
  // -------------------------------------------------------------------------
  "interactive-ceiling": {
    slug: "interactive-ceiling",
    solutionLabel: "Overhead Digital Canopies",
    heroHeading: "Interactive Ceiling & Skyward Canopies",
    heroSubtitle: "Transform Ceilings into Dynamic Skyward Digital Skylights & Generative Art",
    heroDescription: "Casting dynamic celestial skies, responsive digital canopies, and ambient generative visuals overhead. Controlled by visitor movement and sound below.",
    heroImg: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1920&q=80",

    whatIsHeading: "What Is an Interactive Ceiling?",
    whatIsDescription: "An Interactive Ceiling turns blank architectural ceilings, domes, or tension-fabric canopies into living digital skies. Upward-firing or mirror-folded laser projectors cast breathtaking celestial phenomena that shift as people walk below.",
    whatIsVideoPlaceholder: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80",
    whatIsFeatures: [
      { title: "Dynamic Sky Simulation", desc: "Simulates time of day, atmospheric clouds, auroras, and starry galaxies." },
      { title: "Motion-Coupled Overhead", desc: "Visitor walking patterns below steer flocking birds or cosmic nebulae above." },
      { title: "Architectural Dome Mapping", desc: "Custom geometric warping tailored to arches, barrel vaults, and coffered ceilings." },
      { title: "Biophilic Wellness", desc: "Proven to lower cortisol and induce calm in healthcare and subterranean spaces." }
    ],

    experienceHeading: "Celestial & Overhead Canopy Shows",
    experienceIntro: "Bring the wonder of open nature and cosmic journeys inside enclosed architectural spaces.",
    featuredExperience: {
      category: "Wellness & Ambiance",
      title: "Biophilic Digital Sky & Canopy",
      desc: "Sunlight filtering through swaying forest leaves and clouds that mimic real-time outdoor weather.",
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80"
    },
    experienceCards: [
      { category: "Luxury Hospitality", title: "Aurora Borealis Hotel Atrium", desc: "Northern lights dancing across a 30m lobby ceiling synchronized to ambient music.", img: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80" },
      { category: "Planetariums & Domes", title: "Cosmic Nebula Fly-Through", desc: "Visitors lie back and journey through 3D mapped stellar nurseries and distant constellations.", img: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80" },
      { category: "Transit Hubs", title: "Subterranean Skylight Portal", desc: "Creating the illusion of natural open sky in windowless underground subway concourses.", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80" },
      { category: "Retail Atriums", title: "Interactive Particle Murmuration", desc: "Flocks of digital starlings that scatter whenever a crowd gathers beneath.", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80" }
    ],

    featuresHeading: "Ceiling Projection Optics & Biophilic Engine",
    keyFeaturesIntro: "Custom periscope optics and edge-blending matrices engineered to fit inside minimal ceiling cavities.",
    keyFeatures: [
      { title: "Periscope Mirror Assemblies", desc: "Allows horizontal projector mounting to fit inside tight ceiling interstitial spaces." },
      { title: "Real-Time Weather Sync", desc: "Fetches local meteorological data to mirror actual outdoor weather in real-time." },
      { title: "Circadian Lighting Cycle", desc: "Gradually transitions color temperature from warm morning gold to cool midday blue to sunset amber." },
      { title: "Acoustic Synchronization", desc: "Overhead multi-channel directional speakers cast matching environmental audio." },
      { title: "High Dynamic Range (HDR)", desc: "Deep blacks and radiant peak brightness for realistic starfields." },
      { title: "Continuous 24/7 Reliability", desc: "Equipped with dust-sealed optical engines designed for uninterrupted commercial operation." }
    ],

    howItWorksHeading: "How Ceiling Canopy Projections Function",
    howItWorksIntro: "Transforming standard overhead architecture into an illusion of infinite vertical depth.",
    howItWorksSteps: [
      { title: "Architectural 3D Scan", desc: "Laser scanning maps the exact curve and dimensions of the ceiling structure." },
      { title: "Concealed Rigging", desc: "Laser projectors are mounted behind architectural coves or baffles." },
      { title: "Floor Presence Sensing", desc: "Subtle optical sensors monitor visitor density and walking vectors on the ground." },
      { title: "Generative Rendering", desc: "Real-time engine generates non-repeating sky, cloud, or cosmic animations." },
      { title: "Omnidirectional Illusion", desc: "Seamless geometric blending eliminates visual seams across the entire ceiling expanse." }
    ],

    industriesHeading: "Ideal Sectors for Interactive Ceilings",
    industriesIntro: "From windowless basements to grand luxury hotel lobbies and wellness resorts.",
    featuredIndustry: { title: "Luxury Hospitality", desc: "Captivate hotel guests the moment they enter grand lobbies.", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80", href: "/industries/hospitality" },
    industryCards: [
      { title: "Healthcare & MRI Suites", desc: "Calm patients with soothing digital skylights during stressful treatments.", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80", href: "/industries/healthcare" },
      { title: "Corporate Headquarters", desc: "Transform executive atriums into memorable architectural landmarks.", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80", href: "/industries/corporate" },
      { title: "High-End Retail & Spas", desc: "Create serene, otherworldly relaxation environments that encourage longer stays.", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80", href: "/industries/retail-showrooms" }
    ],

    outcomesHeading: "Architectural & Psychological Outcomes",
    benefitsIntro: "Enhance spatial perception, well-being, and architectural grandeur.",
    featuredBenefit: { title: "Expand Perceived Room Height", desc: "Digital sky ceilings eliminate the claustrophobic feel of low ceilings, making rooms feel visually open to the sky.", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80" },
    benefits: [
      { title: "Proven Stress Reduction", desc: "Biophilic blue sky and moving clouds reduce heart rates and stress levels." },
      { title: "Invisible Hardware", desc: "All projectors are concealed in architectural soffits or perimeter coves." },
      { title: "Ever-Changing Atmosphere", desc: "Never feels repetitive—visuals continuously change with real-time generative algorithms." },
      { title: "Premium Brand Prestige", desc: "Establishes your facility as a technologically sophisticated destination." }
    ],
    techStack: ["Specialized Fisheye & Mirror Optics", "Circadian Biophilic CMS", "Sub-Surface Tension Fabric", "TouchDesigner Shaders"],

    projectsHeading: "Landmark Ceiling Installations",
    projectsIntro: "Explore architectural digital canopies installed across prestigious venues.",
    featuredProject: {
      industry: "Hospitality",
      title: "Grand Hotel Celestial Atrium",
      desc: "A 40-meter barrel vault ceiling mapped with generative auroras and meteor showers responding to lobby piano music.",
      location: "Geneva, Switzerland",
      img: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80",
      tech: ["6x 15K Laser Projectors", "Acoustic Reactive Shaders", "Concealed Cove Mounts"],
      href: "/projects"
    },
    projects: [
      { industry: "Healthcare", title: "Pediatric Hospital Digital Skyway", desc: "Illuminated digital sky over young patient transport corridors.", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Retail", title: "Luxury Mall Sky Canopy", desc: "Seasonal weather and fireworks projected overhead.", img: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Corporate", title: "Innovation Lab Stargate Dome", desc: "Interactive hemispherical ceiling for executive brainstorms.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Museum", title: "Ancient Astronomy Dome", desc: "Interactive night sky showing historical star alignments.", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80", href: "/projects" }
    ],

    faqsIntro: "Frequently asked questions regarding ceiling projection and architectural integration.",
    faqs: [
      { q: "Can we install this on an existing drop ceiling?", a: "Yes. We replace standard ceiling tiles with seamless tensioned projection fabric or apply lightweight projection finishes directly to existing acoustic tiles." },
      { q: "How are the projectors hidden from view?", a: "Projectors are typically concealed inside perimeter wall coves or recessed into ceiling bulkheads with customized periscope mirrors." },
      { q: "Can the ceiling interact with sound or music?", a: "Yes. We can integrate real-time audio FFT spectrum analyzers so visuals pulse, shimmer, and ripple in harmony with ambient music or live performances." },
      { q: "Is it suitable for bright daylight lobbies?", a: "For glass atriums with direct sunlight, we engineer high-lumen clusters with custom gain fabrics, or schedule the experience to activate as natural light levels transition." }
    ]
  },

  // -------------------------------------------------------------------------
  // 5. INTERACTIVE WINDOW (Dedicated Sub-Solution)
  // -------------------------------------------------------------------------
  "interactive-window": {
    slug: "interactive-window",
    solutionLabel: "Storefront Glass Activations",
    heroHeading: "Interactive Storefront Windows",
    heroSubtitle: "Turn Plain Glass Windows into Touchless 24/7 Digital Billboards",
    heroDescription: "Transform exterior retail glass into touch-through or gesture-reactive interactive digital displays that captivate street pedestrians even when your store is closed.",
    heroImg: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1920&q=80",

    whatIsHeading: "What Is an Interactive Window?",
    whatIsDescription: "An Interactive Window utilizes specialized rear-projection holographic film applied directly to retail glass, paired with high-lumen laser projectors and through-glass touch foils or gesture sensors to create an interactive touch screen on the sidewalk side.",
    whatIsVideoPlaceholder: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80",
    whatIsFeatures: [
      { title: "Through-Glass Touch Foil", desc: "Detects finger touches through glass up to 20mm thick with zero exterior wiring." },
      { title: "24/7 Storefront Window Shopping", desc: "Pedestrians can browse products, watch lookbooks, and scan QR codes overnight." },
      { title: "Switchable Smart Film", desc: "Glass turns from clear transparent window to opaque projection screen on command." },
      { title: "Touchless Gesture Tracking", desc: "Pedestrians can wave hands to flip catalog pages without touching the glass." }
    ],

    experienceHeading: "Window Shopping & Street Engagement",
    experienceIntro: "Stop pedestrians in their tracks and turn passerby foot traffic into active buyers.",
    featuredExperience: {
      category: "Retail Streetfront",
      title: "24/7 Touch-Through Digital Showroom",
      desc: "Shoppers browse seasonal fashion collections through the exterior glass, send products to their phones, and buy online.",
      img: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=1200&q=80"
    },
    experienceCards: [
      { category: "Real Estate & Agencies", title: "Property Explorer Window", desc: "Search property listings, floorplans, and 3D virtual tours directly on the high street.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" },
      { category: "Automotive", title: "Night Window Car Customizer", desc: "Customize vehicle colors and trims projected onto real showroom glass at midnight.", img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80" },
      { category: "Gaming & Brand Promos", title: "Street Gesture Arcade", desc: "Pedestrians use hand waves to play branded street games and win discount coupons.", img: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80" },
      { category: "Banks & Travel", title: "Interactive Currency & Holiday Planner", desc: "Browse flight deals and exchange rates touchlessly outside branch offices.", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80" }
    ],

    featuresHeading: "Optical Film & Sensor Engineering",
    keyFeaturesIntro: "Designed specifically for high-contrast visibility through insulated glass units and safety glass.",
    keyFeatures: [
      { title: "Optical Rear-Projection Film", desc: "High-contrast diffusion layer absorbs sunlight while rejecting internal ambient light." },
      { title: "Capacitive Through-Glass Foil", desc: "Immune to moisture, condensation, vandalism, and extreme weather outside." },
      { title: "High-Lumen Daylight Laser", desc: "10,000+ ANSI lumens for readable graphics in direct outdoor sun and streetlights." },
      { title: "Vandal-Proof Design", desc: "All sensitive electronics and projectors stay safely locked inside the store." },
      { title: "Dynamic QR Code Hand-Off", desc: "Shoppers seamlessly transfer items to their smartphone cart with a quick camera scan." },
      { title: "Pedestrian Analytics", desc: "Integrated computer vision counts pedestrian glance time and engagement rates." }
    ],

    howItWorksHeading: "How Interactive Window Projection Works",
    howItWorksIntro: "Transforming standard retail glass into an interactive touchscreen with zero exterior components.",
    howItWorksSteps: [
      { title: "Film Application", desc: "Micro-optic rear-projection film and touch foil are applied to the inside surface of the window." },
      { title: "Interior Projector Throw", desc: "An interior ceiling-mounted laser projector fires directly onto the rear-projection film." },
      { title: "Capacitive Sensing", desc: "The touch foil senses the electrical disturbance of a finger through the glass." },
      { title: "CMS Processing", desc: "The interactive retail application updates product details and dynamic animations." },
      { title: "Smartphone Synchronization", desc: "User scans a QR code to finish checkout or save coupons to their Apple Wallet." }
    ],

    industriesHeading: "Industries Utilizing Interactive Windows",
    industriesIntro: "Drive revenue when stores are closed and maximize prime high-street commercial rent.",
    featuredIndustry: { title: "High-Street Retail & Fashion", desc: "Turn after-hours window shopping into direct e-commerce sales.", img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1200&q=80", href: "/industries/retail-showrooms" },
    industryCards: [
      { title: "Real Estate Brokerages", desc: "Allow buyers to browse home listings 24/7 on prime streetfront corners.", img: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80", href: "/industries/corporate" },
      { title: "Automotive Dealerships", desc: "Showcase new vehicle models in stunning high definition after hours.", img: "https://images.unsplash.com/photo-1605335198270-b74955776d6c?auto=format&fit=crop&w=800&q=80", href: "/industries/retail-showrooms" },
      { title: "Travel Agencies & Airlines", desc: "Inspire travelers with interactive destination videos and flight deals.", img: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80", href: "/industries/hospitality" }
    ],

    outcomesHeading: "Storefront Window ROI & Benefits",
    benefitsIntro: "Monetize after-hours foot traffic and distinguish your brand on crowded commercial streets.",
    featuredBenefit: { title: "Capture Sales 24 Hours a Day", desc: "Stores with interactive window systems generate up to 25% of their digital leads outside normal operating hours.", img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1200&q=80" },
    benefits: [
      { title: "100% Vandalism Proof", desc: "Everything is inside your locked storefront; exterior is just your regular window glass." },
      { title: "Instant Campaign Updates", desc: "Push new sale prices or campaigns to 50 store windows in seconds via cloud CMS." },
      { title: "Pedestrian Stopping Power", desc: "Motion visuals attract 4x more glances than traditional static vinyl decals." },
      { title: "Omnichannel Bridge", desc: "Bridges physical street presence with instant mobile e-commerce sales." }
    ],
    techStack: ["Opticlear Rear Projection Film", "Through-Glass Projected Capacitive Foil", "High-Lumen Laser Engine", "PWA Mobile Hand-off"],

    projectsHeading: "Recent Window Case Studies",
    projectsIntro: "See how retailers and brokers transformed their street presence.",
    featuredProject: {
      industry: "Retail",
      title: "Fifth Avenue 24/7 Interactive Storefront",
      desc: "An interactive window installation for a flagship cosmetics boutique allowing nighttime product browsing.",
      location: "New York, USA",
      img: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80",
      tech: ["Through-Glass Touch", "High-Lumen Laser", "Mobile Checkout QR"],
      href: "/projects"
    },
    projects: [
      { industry: "Real Estate", title: "Prime Property Street Kiosk", desc: "Interactive window generating 150+ buyer inquiries weekly.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Automotive", title: "Midnight Car Configurator", desc: "Pedestrians customize electric vehicles on high-street glass.", img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Telecom", title: "Touchless Phone Upgrade Portal", desc: "Customers compare mobile plans touchlessly outside the store.", img: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Tourism", title: "Destination Virtual Window", desc: "Interactive window showcasing tropical beach deals.", img: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80", href: "/projects" }
    ],

    faqsIntro: "Frequently asked questions regarding interactive storefront windows and glass compatibility.",
    faqs: [
      { q: "Does it work through double or triple pane glass?", a: "Yes. Our projected capacitive touch foils are calibrated to work through double-glazed insulated units up to 20mm thick." },
      { q: "Can people use it while wearing gloves?", a: "Yes. The capacitive sensitivity can be adjusted to support gloved hands during cold winter months." },
      { q: "Is the film visible from inside the store?", a: "Yes, from the inside it appears as a frosted or dark tinted film. When using switchable smart film, it can turn completely transparent during the day." },
      { q: "What happens if someone vandalizes the exterior glass?", a: "Your expensive equipment remains completely safe inside the building. Simply clean or replace the glass without replacing the projection system." }
    ]
  },

  // -------------------------------------------------------------------------
  // 6. INTERACTIVE MIRROR & TABLE (Dedicated Sub-Solution)
  // -------------------------------------------------------------------------
  "interactive-mirror-table": {
    slug: "interactive-mirror-table",
    solutionLabel: "Tactile Smart Surfaces",
    heroHeading: "Interactive Smart Mirror & Touch Tables",
    heroSubtitle: "Capacitive Multi-Touch Surfaces & Reflective Smart Mirror Displays",
    heroDescription: "Multi-user capacitive touch tables for collaborative strategy and smart mirrors that combine crystal reflection with high-brightness digital interfaces for fashion, fitness, and hospitality.",
    heroImg: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1920&q=80",

    whatIsHeading: "What Are Smart Mirrors & Touch Tables?",
    whatIsDescription: "Smart Mirrors utilize specialized dielectric two-way optical glass overlaid on ultra-bright commercial displays to show information while serving as a mirror. Touch Tables integrate multi-touch surfaces that support object recognition (tangibles) for collaborative group interaction.",
    whatIsVideoPlaceholder: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    whatIsFeatures: [
      { title: "Dielectric Optical Mirror Glass", desc: "Flawless mirror reflection when off; brilliant digital display when activated." },
      { title: "Object Recognition (Tangibles)", desc: "Place physical artifacts on the table to trigger customized digital specs." },
      { title: "40-Point Multi-Touch Surface", desc: "Multiple executives or shoppers can touch and collaborate simultaneously." },
      { title: "Waterproof & Spill-Proof", desc: "Commercial IP65-rated surface withstands spilled coffee, water, and sanitizer." }
    ],

    experienceHeading: "Smart Mirror & Touch Table Applications",
    experienceIntro: "From smart fitting room mirrors to collaborative board room strategy tables.",
    featuredExperience: {
      category: "Retail Dressing Rooms",
      title: "Smart Fitting Room Magic Mirror",
      desc: "Shoppers request different sizes, adjust fitting room lighting, and view accessory recommendations directly on the mirror glass.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    },
    experienceCards: [
      { category: "Museums & Archives", title: "Interactive Tangible History Table", desc: "Visitors place physical 3D-printed artifacts on the glass to unlock archival documents.", img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80" },
      { category: "Corporate Boardrooms", title: "4K Architectural Masterplan Table", desc: "Inspect 3D building models, rotate blueprints, and pinch-to-zoom satellite terrain.", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80" },
      { category: "Hospitality & Bars", title: "Interactive Dining & Cocktail Table", desc: "Order cocktails, view chef preparation videos, and play multiplayer casual games while dining.", img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80" },
      { category: "Fitness & Wellness", title: "Interactive Smart Gym Mirror", desc: "Displays virtual personal trainers, posture correction graphics, and heart rate telemetry.", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" }
    ],

    featuresHeading: "Surface Hardware & Tangible Engine",
    keyFeaturesIntro: "Premium architectural glass finishes paired with industrial PCAP capacitive touch controllers.",
    keyFeatures: [
      { title: "Commercial Dielectric Glass", desc: "High transmission and high reflectance for crystal-clear clarity." },
      { title: "Fiducial Puck Recognition", desc: "Recognizes physical pucks, tags, and product bases placed anywhere on screen." },
      { title: "Toughened 6mm Safety Glass", desc: "Impact-resistant tempered glass built to endure heavy public handling." },
      { title: "Anti-Fingerprint Oleophobic Coating", desc: "Resists smudges, oil, and glare under bright commercial lighting." },
      { title: "Integrated Wireless Charging", desc: "Charge customer smartphones wirelessly right on the wooden table perimeter." },
      { title: "Motorized Height Adjustment", desc: "Easily switch table height between sitting coffee table, desk, and standing podium." }
    ],

    howItWorksHeading: "How Smart Surfaces Process Touch & Objects",
    howItWorksIntro: "Fusing capacitive grid sensing with optical fiducials for natural physical-digital manipulation.",
    howItWorksSteps: [
      { title: "Capacitive Grid Scanning", desc: "The micro-mesh sensor grid scans for skin contact or conductive tags at 200 Hz." },
      { title: "Object Identification", desc: "Underlying software identifies the geometric pattern of conductive pads on physical objects." },
      { title: "Instant Radial Menu", desc: "A circular digital menu blossoms around the placed object with relevant specifications." },
      { title: "Multi-User Gestures", desc: "Users swipe photos, compare products, or draw annotations with ultra-low latency." },
      { title: "Cloud Data Sync", desc: "Saved selections or designs can be emailed to visitors or pushed to store POS." }
    ],

    industriesHeading: "Industries Using Smart Mirrors & Tables",
    industriesIntro: "High-impact deployments across luxury retail, executive centers, and boutique hospitality.",
    featuredIndustry: { title: "Luxury Retail & Fitting Rooms", desc: "Enhance fitting room conversion rates with interactive mirrors.", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80", href: "/industries/retail-showrooms" },
    industryCards: [
      { title: "Museums & Cultural Archives", desc: "Hands-on artifact exploration tables that fascinate visitors of all ages.", img: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=800&q=80", href: "/industries/museums-culture" },
      { title: "Corporate Briefing & Architecture", desc: "Collaborative masterplan tables for reviewing city-scale CAD models.", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80", href: "/industries/corporate" },
      { title: "Luxury Hospitality & Spas", desc: "Smart vanity mirrors displaying hotel services, weather, and spa bookings.", img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80", href: "/industries/hospitality" }
    ],

    outcomesHeading: "Proven Business Outcomes & Value",
    benefitsIntro: "Deliver unprecedented collaborative depth and personalized retail service.",
    featuredBenefit: { title: "Increase Fitting Room Conversion by 40%", desc: "Smart mirrors allow shoppers to request alternative sizes without dressing, dramatically reducing fitting room abandonment.", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80" },
    benefits: [
      { title: "Tangible Tangibility", desc: "Bridges tactile physical objects with deep rich digital data." },
      { title: "Multi-User Collaboration", desc: "Group discussions flow naturally without everyone staring at individual phones." },
      { title: "Spill-Proof Reliability", desc: "Sealed commercial glass stands up to spilled drinks and everyday hospitality use." },
      { title: "Bespoke Millwork Integration", desc: "We integrate components into custom marble, solid wood, or brushed steel tables." }
    ],
    techStack: ["PCAP 40-Point Touch Sensors", "Dielectric Optical Glass", "Fiducial Object Software", "Industrial 4K Panels"],

    projectsHeading: "Selected Smart Surface Case Studies",
    projectsIntro: "Discover bespoke tables and mirrors deployed in world-class environments.",
    featuredProject: {
      industry: "Retail",
      title: "Luxury Flagship Smart Fitting Rooms",
      desc: "Deployment of 12 interactive smart mirrors across a premier European department store fitting suite.",
      location: "Milan, Italy",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      tech: ["Dielectric Mirror Glass", "RFID Garment Detection", "Store POS Integration"],
      href: "/projects"
    },
    projects: [
      { industry: "Museum", title: "Archaeology Tangible Exploration Table", desc: "Visitors place pottery shards to reveal complete historical 3D vases.", img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Corporate", title: "Smart City Masterplan Touch Table", desc: "85-inch 4K collaborative touch table for urban planners.", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Hospitality", title: "Interactive VIP Lounge Tables", desc: "Cocktail ordering and gaming touch tables in an upscale lounge.", img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Automotive", title: "Dealership Material Selection Table", desc: "Place real leather and paint samples on table to see them applied to 3D cars.", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80", href: "/projects" }
    ],

    faqsIntro: "Frequently asked questions regarding smart mirrors, touch tables, and object recognition.",
    faqs: [
      { q: "How does the smart mirror look when it is turned off?", a: "When turned off, it looks like a standard high-end silver architectural mirror with no visible screen underneath." },
      { q: "How does object recognition work on the touch table?", a: "We attach small 3D-printed conductive pads to the bottom of your physical products or pucks. When placed on the table, the touch controller recognizes the pattern." },
      { q: "Can hot coffee or cold water damage the touch table?", a: "No. The entire surface is covered by a continuous sheet of tempered safety glass that is IP65 waterproof and heat-resistant." },
      { q: "Can we customize the table's furniture design?", a: "Absolutely. We provide both turnkey standalone tables and drop-in electronic kits for custom cabinetry, woodworkers, and stone fabricators." }
    ]
  },

  // -------------------------------------------------------------------------
  // 7. IMMERSIVE ENVIRONMENT (Overview)
  // -------------------------------------------------------------------------
  "immersive-environment": {
    slug: "immersive-environment",
    solutionLabel: "Immersive Architectural Experiences",
    heroHeading: "Projection Mapping & Immersive Rooms",
    heroSubtitle: "Transport Audiences with 360-Degree Architectural Storytelling",
    heroDescription: "Create monumental visual illusions that bend physical space, wrapping historic facades, theatrical stages, and 360-degree exhibition rooms in seamless ultra-HD digital narratives.",
    heroImg: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=1920&q=80",

    whatIsHeading: "What Is Projection Mapping & Immersive Tech?",
    whatIsDescription: "Projection Mapping transforms complex physical structures into dynamic video canvases. By precisely scanning 3D geometry with LiDAR and aligning multiple laser projectors, static architecture appears to crumble, transform, and come alive.",
    whatIsVideoPlaceholder: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1200&q=80",
    whatIsFeatures: [
      { title: "Geometric Mesh Calibration", desc: "Software warps video pixels to match physical corners, curves, and relief details." },
      { title: "Edge Blending Technology", desc: "Seamlessly blends multiple projectors into one gigantic ultra-HD resolution canvas." },
      { title: "Naked-Eye Shared Illusion", desc: "Hundreds of people experience massive spectacle simultaneously without wearing VR headsets." },
      { title: "Spatial Audio Synchronization", desc: "Visual animations align with 3D multi-channel audio arrays for total sensory immersion." }
    ],

    experienceHeading: "Immersive Production Portfolio",
    experienceIntro: "From monumental municipal facade shows to 360-degree museum galleries that transport audiences.",
    featuredExperience: {
      category: "Museums & Fine Art",
      title: "360° Living Impressionist Exhibition",
      desc: "Step directly inside iconic masterpieces as paintings animate across floor-to-ceiling walls with spatial orchestral sound.",
      img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1200&q=80"
    },
    experienceCards: [
      { category: "Public Art", title: "Civic Facade Mapping Spectacle", desc: "Turn historic city halls, cathedrals, and monuments into monumental video landmarks.", img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80" },
      { category: "Corporate Keynotes", title: "Dynamic Shifting Event Stages", desc: "Transform corporate stage backdrops into shifting, three-dimensional digital environments.", img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80" },
      { category: "Brand Launches", title: "Automotive Product Mapping", desc: "Project dynamic animated textures, speed lines, and internal mechanics onto physical vehicles.", img: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80" },
      { category: "Entertainment Venues", title: "Interactive LED Light Tunnels", desc: "Curved high-density archways that pulse with color as visitors pass through.", img: "https://images.unsplash.com/photo-1598040795256-03d22d952f4d?auto=format&fit=crop&w=800&q=80" }
    ],

    featuresHeading: "Engineered for Massive Scale & Optical Precision",
    keyFeaturesIntro: "Enterprise media server clusters handling uncompressed 12K playback and sub-millimeter geometric alignment.",
    keyFeatures: [
      { title: "LiDAR 3D Point Cloud Scanning", desc: "Millimeter-accurate architectural scanning forms the foundation of all content creation." },
      { title: "Media Server Clustering", desc: "Disguise / Dataton WATCHOUT servers driving dozens of synchronized 4K video outputs." },
      { title: "Auto-Camera Calibration", desc: "Automated dome and surface recalibration ensures pixels stay crisp over months of operation." },
      { title: "High-Lumen Laser Stacking", desc: "Stacking 30,000+ ANSI lumen laser projectors for intense brightness against city lighting." },
      { title: "Weatherproof Outdoor Enclosures", desc: "Climate-controlled housings engineered for sub-zero snow and scorching desert heat." },
      { title: "Low Dwell Distortion", desc: "Custom anamorphic perspectives create realistic 3D optical depth illusions from audience viewpoints." }
    ],

    howItWorksHeading: "From 3D Scanning to Architectural Transformation",
    howItWorksIntro: "A rigorous precision pipeline turning physical buildings into living digital spectacles.",
    howItWorksSteps: [
      { title: "LiDAR Scanning", desc: "We scan the building facade or interior room to capture every architectural millimeter." },
      { title: "3D Animation Pipeline", desc: "CGI artists model content specifically tailored to the physical building's features." },
      { title: "Optical Simulation", desc: "Projector placement, lens throw, and shadow studies are verified in CAD." },
      { title: "Edge Blending & Warping", desc: "Calibration software blends overlapping projector beams into one continuous surface." },
      { title: "Show Showtime", desc: "The space transforms, delivering a seamless optical illusion synchronized to audio." }
    ],

    industriesHeading: "Where Immersive Environments Thrive",
    industriesIntro: "Transforming cultural institutions, tourism landmarks, and premier corporate events.",
    featuredIndustry: { title: "Museums & Cultural Centers", desc: "Create ticketed blockbuster exhibitions that attract global audiences.", img: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=1200&q=80", href: "/industries/museums-culture" },
    industryCards: [
      { title: "Tourism & Municipal Landmarks", desc: "City festival attractions that stimulate regional nighttime economies.", img: "https://images.unsplash.com/photo-1506461883276-594543d0e228?auto=format&fit=crop&w=800&q=80", href: "/industries/public-spaces" },
      { title: "Entertainment & Live Events", desc: "Concert stage mapping and theme park dark ride experiences.", img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=800&q=80", href: "/industries/entertainment" },
      { title: "Corporate Product Launches", desc: "Dramatic vehicle reveals and brand keynote presentations.", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80", href: "/industries/corporate" }
    ],

    outcomesHeading: "Monumental Audience Reach & Impact",
    benefitsIntro: "Projection mapping delivers jaw-dropping scale and viral global social media attention.",
    featuredBenefit: { title: "Massive Organic Social Reach", desc: "Projection mapping spectacles are intensely photogenic, driving millions of organic views across Instagram and TikTok.", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80" },
    benefits: [
      { title: "No Headsets Required", desc: "Entire crowds share the emotional journey together without wearing isolating goggles." },
      { title: "Zero Structural Damage", desc: "Light wraps around historic protected buildings without requiring physical nails or screws." },
      { title: "Dynamic Night Economy", desc: "Drives nighttime foot traffic, restaurant bookings, and tourism revenue to city centers." },
      { title: "Reconfigurable Shows", desc: "Run a Christmas show in December, an art exhibition in April, and corporate events in June." }
    ],
    techStack: ["Barco 30K Lumen Laser Fleet", "Disguise D3 Media Servers", "Leica LiDAR Scanners", "Sub-Millimeter Edge Blending"],

    projectsHeading: "Selected Immersive Environments",
    projectsIntro: "Explore monumental architectural mapping projects executed worldwide.",
    featuredProject: {
      industry: "Museum",
      title: "Masterpieces in Motion 360° Exhibition",
      desc: "A 1,200 sq. meter multi-room immersive exhibition transforming fine art into a cinematic 360-degree journey.",
      location: "Paris, France",
      img: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=1200&q=80",
      tech: ["24x 4K Projectors", "Surround Spatial Audio", "Disguise Media Servers"],
      href: "/projects"
    },
    projects: [
      { industry: "Public Art", title: "Historic Cathedral Facade Mapping", desc: "Celebrated anniversary light show seen by 200,000 spectators.", img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Automotive", title: "Electric Hypercar Launch Reveal", desc: "Projection mapping dynamic aero simulation onto prototype vehicle.", img: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Entertainment", title: "Interactive LED Archway Tunnel", desc: "Pedestrian entrance tunnel with responsive visual fluid dynamics.", img: "https://images.unsplash.com/photo-1598040795256-03d22d952f4d?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Hospitality", title: "Immersive Culinary Dining Dome", desc: "Dining table and 360-degree wall mapping narrating each dish.", img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80", href: "/projects" }
    ],

    faqsIntro: "Frequently asked questions regarding projection mapping, logistics, and technical feasibility.",
    faqs: [
      { q: "What surface materials are best for projection mapping?", a: "Matte stone, concrete, light plaster, and white architectural surfaces yield the best light reflection. Dark glass or mirror surfaces require specialized removable projection film." },
      { q: "Can projection mapping happen outdoors in rain or snow?", a: "Yes. Our outdoor projection rigs use IP65 climate-controlled tempest enclosures with automated dehumidifiers and heating elements." },
      { q: "How long does it take to produce a projection mapping show?", a: "Depending on scale, content creation and calibration typically span 4 to 12 weeks from initial 3D LiDAR scan to opening night." },
      { q: "Does projection mapping damage historic architecture?", a: "Not at all. Projection mapping involves only light; no permanent fixtures or screws touch the facade, making it fully approved by heritage protection committees." }
    ]
  },

  // -------------------------------------------------------------------------
  // 8. PROJECTION MAPPING (Dedicated Sub-Solution)
  // -------------------------------------------------------------------------
  "projection-mapping": {
    slug: "projection-mapping",
    solutionLabel: "Architectural Video Illusions",
    heroHeading: "Architectural Projection Mapping",
    heroSubtitle: "Transform Any 3D Building or Physical Object into a Living Canvas",
    heroDescription: "Bend optical physics to create breathtaking optical illusions on building facades, indoor architectural features, vehicles, and stage sculptures without touching the physical structure.",
    heroImg: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1920&q=80",

    whatIsHeading: "What Is Architectural Projection Mapping?",
    whatIsDescription: "Architectural Projection Mapping is an optical technique that turns complex 3D structures—such as historic facades, indoor curved ceilings, or product models—into interactive video display surfaces with pixel-perfect geometric alignment.",
    whatIsVideoPlaceholder: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
    whatIsFeatures: [
      { title: "Sub-Millimeter Warping", desc: "Software precisely warps video pixels to match architectural cornices, pillars, and arches." },
      { title: "Anamorphic 3D Illusions", desc: "Creates the illusion of buildings collapsing, expanding, or revealing mechanical interiors." },
      { title: "Ultra-High Lumen Projector Arrays", desc: "Stacking 20,000 to 40,000 ANSI lumen laser engines to overpower ambient city light." },
      { title: "Historic Preservation Approved", desc: "Pure light; zero nails, adhesive, or permanent fixtures touch the historic heritage facade." }
    ],

    experienceHeading: "Projection Mapping Show Formats",
    experienceIntro: "From small indoor sculpture mapping to monumental skyscrapers and public light festivals.",
    featuredExperience: {
      category: "Municipal Landmarks",
      title: "Skyscraper Facade Transformation",
      desc: "Transform a 30-story commercial tower into an animated digital waterfall and futuristic digital organism.",
      img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80"
    },
    experienceCards: [
      { category: "Product Reveals", title: "Automotive 3D Vehicle Mapping", desc: "Map realistic aerodynamic airflow, metallic paint variations, and engine diagnostics onto cars.", img: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80" },
      { category: "Concerts & Theatre", title: "Stage Sculpture Video Warping", desc: "Complex geometric stage sets that shift visual appearance between scenes in real-time.", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80" },
      { category: "Luxury Events", title: "Illuminated Banquet Table Shows", desc: "Tiny animated chefs that prepare miniature meals directly on guest dining plates.", img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80" },
      { category: "Museums", title: "Relic & Statue Restoration Mapping", desc: "Project the lost original vibrant colors back onto faded ancient classical marble statues.", img: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=800&q=80" }
    ],

    featuresHeading: "Geometric Calibration & Media Server Specs",
    keyFeaturesIntro: "Enterprise media server clusters handling high bit-rate 8K video pipelines with zero frame stutter.",
    keyFeatures: [
      { title: "LiDAR Point Cloud Ingestion", desc: "Direct integration of laser scans into 3D DCC software (Maya, Houdini, Cinema4D)." },
      { title: "Camera-Based Auto Alignment", desc: "Re-calibrates projector alignment in under 5 minutes using computer vision cameras." },
      { title: "Multi-Projector Soft Edge Blending", desc: "Smooth blending curves ensure zero visible seams between projector beams." },
      { title: "Laser Color Consistency", desc: "RGB laser illumination ensures matching white points and deep primary color reproduction." },
      { title: "SMPTE Timecode Sync", desc: "Harmonizes video projection with pyrotechnics, moving stage lights, and surround sound." },
      { title: "Redundant Media Playback", desc: "Hot-standby redundant servers guarantee show continuity without interruption." }
    ],

    howItWorksHeading: "Step-by-Step Mapping Pipeline",
    howItWorksIntro: "How we turn a real-world architectural structure into an animated digital illusion.",
    howItWorksSteps: [
      { title: "LiDAR 3D Survey", desc: "A terrestrial scanner creates a sub-millimeter 3D mesh of the facade or object." },
      { title: "Optical Throw Simulation", desc: "We place virtual projectors in CAD to calculate exact lux levels and avoid shadows." },
      { title: "Custom CGI Content", desc: "3D animators model custom visual effects specifically aligned to each architectural relief." },
      { title: "Hardware Installation", desc: "Laser projectors are mounted on custom towers or indoor ceiling trusses." },
      { title: "Live Calibration & Show", desc: "Software warps the output to lock perfectly onto physical corners, delivering the illusion." }
    ],

    industriesHeading: "Where Projection Mapping Dominates",
    industriesIntro: "From government tourism spectacles to private automotive brand launches.",
    featuredIndustry: { title: "Tourism & Municipalities", desc: "Monumental light festivals that draw millions of international visitors.", img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80", href: "/industries/public-spaces" },
    industryCards: [
      { title: "Automotive & Industrial", desc: "High-impact vehicle unveiling shows and factory floor design reviews.", img: "https://images.unsplash.com/photo-1605335198270-b74955776d6c?auto=format&fit=crop&w=800&q=80", href: "/industries/retail-showrooms" },
      { title: "Live Concerts & Festivals", desc: "Dynamic stage mapping that adapts to artist setlists and crowd tempo.", img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=800&q=80", href: "/industries/entertainment" },
      { title: "Museums & History", desc: "Project lost colors onto ancient sculptures and animate historical murals.", img: "https://images.unsplash.com/photo-1555529733-0e67056058e1?auto=format&fit=crop&w=800&q=80", href: "/industries/museums-culture" }
    ],

    outcomesHeading: "Proven Spectacle Value & Impact",
    benefitsIntro: "Deliver iconic public moments that live forever in photos and videos.",
    featuredBenefit: { title: "Instant Global Media Attention", desc: "Monumental facade mapping generates millions of impressions across news outlets and social media channels.", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80" },
    benefits: [
      { title: "100% Non-Invasive", desc: "Protects historic heritage architecture with pure harmless optical light." },
      { title: "High-Lumen Clarity", desc: "Visible even across vast city plazas under streetlights and moonlight." },
      { title: "Shared Communal Experience", desc: "Thousands of spectators experience the show together without any isolating devices." },
      { title: "Reusable Investment", desc: "Load new holiday shows, national day tributes, or brand events onto the same hardware." }
    ],
    techStack: ["Barco UDX 4K Laser", "Disguise D3 VX4+ Servers", "Resolume / TouchDesigner", "Leica Geosystems LiDAR"],

    projectsHeading: "Featured Projection Mapping Projects",
    projectsIntro: "See our projection mapping spectacles in action around the globe.",
    featuredProject: {
      industry: "Municipal",
      title: "City Hall Heritage Facade Mapping",
      desc: "A 45-minute historical journey projected across the ornate 80-meter facade of a 19th-century municipal hall.",
      location: "Vienna, Austria",
      img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
      tech: ["16x 32,000 Lumen Projectors", "LiDAR Mesh Mapping", "Spatial Audio Array"],
      href: "/projects"
    },
    projects: [
      { industry: "Automotive", title: "Luxury SUV Worldwide Reveal", desc: "3D mapping dynamic mountain terrain across the vehicle body.", img: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Museum", title: "Egyptian Temple Column Restoration", desc: "Digital light reconstruction of faded hieroglyphics.", img: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Entertainment", title: "Electronic Music Festival Castle Mapping", desc: "3-night continuous live visual mapping across castle battlements.", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Hospitality", title: "Dining Room Animated Banquet", desc: "Bespoke projection mapping onto guest dinnerware.", img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80", href: "/projects" }
    ],

    faqsIntro: "Frequently asked questions regarding projection mapping technology and production logistics.",
    faqs: [
      { q: "How far away do the projectors need to be?", a: "Depending on the lens selected, projectors can be placed as close as 10 meters with wide-angle lenses, or over 100 meters away across a river or plaza with telephoto optics." },
      { q: "Can projection mapping happen during daytime?", a: "Outdoor daylight sunshine overpower projection light. Outdoor facade mapping requires dusk, twilight, or night. Indoor mapping can occur 24/7 in controlled lighting." },
      { q: "Can windows on the building be included in the projection?", a: "Yes, we can either mask windows out digitally in software or apply specialized micro-perforated projection film so the entire building becomes an unbroken canvas." },
      { q: "How do you protect projectors from bad weather?", a: "We utilize industrial Tempest outdoor enclosures that automatically regulate temperature, filter dust, and shield against rain, snow, and sandstorms." }
    ]
  },

  // -------------------------------------------------------------------------
  // 9. IMMERSIVE ROOM (Dedicated Sub-Solution)
  // -------------------------------------------------------------------------
  "immersive-room": {
    slug: "immersive-room",
    solutionLabel: "360-Degree Sensory Rooms",
    heroHeading: "360° Immersive Projection Rooms",
    heroSubtitle: "Surround Visitors in Seamless 4-Wall & Floor Visual Wonder",
    heroDescription: "Step inside a completely seamless visual sanctuary where walls, floors, and ceilings blend into one unified virtual realm with directional spatial audio and tactile floor vibrations.",
    heroImg: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=1920&q=80",

    whatIsHeading: "What Is a 360° Immersive Room?",
    whatIsDescription: "An Immersive Room (often termed a CAVE environment) surrounds visitors on all four walls and the floor with synchronized ultra-HD laser projection. Visitors feel physically transported into underwater trenches, alien planets, or microscopic cells without VR headsets.",
    whatIsVideoPlaceholder: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1200&q=80",
    whatIsFeatures: [
      { title: "Floor-to-Ceiling Coverage", desc: "Zero gaps or borders between vertical walls and horizontal floor projection." },
      { title: "Shared Group Immersion", desc: "Up to 50 visitors can enter and explore simultaneously without motion sickness." },
      { title: "Dolby Atmos Spatial Audio", desc: "Multi-channel directional sound sources move with the visuals around the room." },
      { title: "Optional Scent & Haptics", desc: "Subtle environmental scent diffusion and sub-floor bass transducers deepen immersion." }
    ],

    experienceHeading: "Immersive Room Exhibition Concepts",
    experienceIntro: "Transport your visitors into environments impossible to visit in physical reality.",
    featuredExperience: {
      category: "Deep Sea Exploration",
      title: "Abyssal Ocean Trench 360°",
      desc: "Surround visitors with giant bioluminescent jellyfish, whales, and deep-sea coral reefs with dynamic water physics.",
      img: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=1200&q=80"
    },
    experienceCards: [
      { category: "Art Exhibitions", title: "Living Classical Art Sanctuary", desc: "Van Gogh's starry night brushstrokes swirl along the walls and across visitors' shoes.", img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=800&q=80" },
      { category: "Space & Science", title: "Mars Rover Expedition", desc: "Stand on the red dunes of Mars as dust devils swirl and robotic landers touch down.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" },
      { category: "Corporate Briefing", title: "The Executive Holographic Holodeck", desc: "Surround executives with real-time global supply chain data and 3D product prototypes.", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80" },
      { category: "Sensory Therapy", title: "Calming Biophilic Rainforest Retreat", desc: "Gentle rain showers, swaying bamboo, and meditative ambient sound for mental wellness.", img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80" }
    ],

    featuresHeading: "Optics, Blending & Room Calibration",
    keyFeaturesIntro: "Precision corner blending and color matching ensure the physical room boundaries completely disappear.",
    keyFeatures: [
      { title: "90° Corner Blending Optics", desc: "Specialized geometric algorithms blend wall corners seamlessly so corners vanish." },
      { title: "Floor-to-Wall Color Matching", desc: "Spectrophotometer calibration ensures wall and floor projectors match in color temp." },
      { title: "Ultra-Short Throw Laser Projection", desc: "Visitors can stand within 12 inches of the wall without casting shadows." },
      { title: "High Dynamic Contrast", desc: "Laser dimming delivers pitch-black scenes for dramatic cinematic transitions." },
      { title: "Interactive Motion Tracking", desc: "Overhead depth cameras turn walls and floor into interactive responsive surfaces." },
      { title: "One-Touch Tablet Master Control", desc: "Staff control lights, show selection, volume, and emergency exits from an iPad." }
    ],

    howItWorksHeading: "Engineering an Immersive Room",
    howItWorksIntro: "From acoustic room treatment to millimeter-precision corner alignment.",
    howItWorksSteps: [
      { title: "Room Acoustic & Surface Prep", desc: "Walls and floor are coated with high-gain projection materials and acoustic insulation." },
      { title: "Concealed Projector Grid", desc: "Ultra-short throw projectors are rigged into ceiling perimeter coves." },
      { title: "Automated Camera Blending", desc: "Calibration cameras read test grids and compute seamless warping maps in minutes." },
      { title: "Spatial Audio Balancing", desc: "Multi-channel surround audio is tuned to the room's specific acoustic decay." },
      { title: "Show Deployment", desc: "Turnkey media servers run uncompressed 8K playback with continuous diagnostic monitoring." }
    ],

    industriesHeading: "Applications for 360° Immersive Rooms",
    industriesIntro: "Turn ordinary real estate into high-ticket experiential destinations.",
    featuredIndustry: { title: "Museums & Ticketed Exhibitions", desc: "Proven blockbuster ticket sales and viral visitor word of mouth.", img: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=1200&q=80", href: "/industries/museums-culture" },
    industryCards: [
      { title: "Corporate Experience Centers", desc: "The ultimate immersive storytelling chamber for Fortune 500 visitors.", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80", href: "/industries/corporate" },
      { title: "Hospitality & Dining Concepts", desc: "360-degree dining experiences where room themes change with every course.", img: "https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?auto=format&fit=crop&w=800&q=80", href: "/industries/hospitality" },
      { title: "Wellness & Therapeutic Sanctuaries", desc: "Immersive sensory relaxation chambers for luxury spas and clinics.", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80", href: "/industries/healthcare" }
    ],

    outcomesHeading: "Immersive Room Return on Investment",
    benefitsIntro: "Deliver unforgettable emotional journeys that convert visitors into brand advocates.",
    featuredBenefit: { title: "Turnkey Commercial Scalability", desc: "Our modular immersive room kits fit into any standard rectangular or circular commercial space from 50 to 500 sq. meters.", img: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=1200&q=80" },
    benefits: [
      { title: "Zero Motion Sickness", desc: "Unlike VR headsets, natural peripheral vision remains intact, preventing nausea." },
      { title: "Shared Social Bonding", desc: "Friends and families experience and photograph the environment together." },
      { title: "Rapid Content Rotation", desc: "Change the entire room exhibit from a dinosaur forest to a Mars colony in seconds." },
      { title: "High Visitor Throughput", desc: "Accommodates large groups efficiently for scheduled 15-minute show cycles." }
    ],
    techStack: ["Epson / Panasonic UST Laser Fleet", "7.1.4 Dolby Atmos Spatial Array", "VIOSO Anyblend Auto-Calibration", "Unreal Engine 5 Server"],

    projectsHeading: "Landmark Immersive Room Deployments",
    projectsIntro: "Discover our turnkey immersive rooms operating worldwide.",
    featuredProject: {
      industry: "Museum",
      title: "The Oceanic Abyss 360° Sanctuary",
      desc: "A 180 sq. meter 5-surface immersive room delivering a deep-sea sensory journey for a national maritime museum.",
      location: "Sydney, Australia",
      img: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=1200&q=80",
      tech: ["12x 4K UST Laser Engines", "Spatial Audio Array", "Haptic Floor Subwoofers"],
      href: "/projects"
    },
    projects: [
      { industry: "Corporate", title: "Global Energy Experience CAVE", desc: "360-degree holographic room visualizing worldwide energy grids.", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Hospitality", title: "Multi-Sensory Gastronomy Chamber", desc: "12-seat dining room with synchronized 360 visuals and scents.", img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Healthcare", title: "Mindfulness & Anxiety Reduction Pod", desc: "Immersive nature sanctuary in a modern cancer treatment center.", img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Entertainment", title: "Haunted Hollow Dark Room", desc: "Interactive horror attraction with reactive wall and floor creatures.", img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80", href: "/projects" }
    ],

    faqsIntro: "Frequently asked questions regarding room dimensions, projectors, and content management.",
    faqs: [
      { q: "What is the minimum room size required?", a: "We can build immersive rooms starting from 4x4 meters (16 sq. meters) up to massive multi-room halls exceeding 500 sq. meters." },
      { q: "Do people have to take their shoes off to walk on the floor?", a: "No. We utilize commercial-grade scratch-resistant floor coatings engineered for heavy public foot-traffic and high heels." },
      { q: "Can we produce our own content for the room?", a: "Yes. We supply your media team with a 3D master template canvas that works seamlessly with After Effects, Premiere, Unity, and Unreal Engine." },
      { q: "How are the projectors maintained?", a: "Solid-state laser engines require virtually no maintenance for 20,000 hours (over 5 years of daily 10-hour operation)." }
    ]
  },

  // -------------------------------------------------------------------------
  // 10. LED TUNNEL (Dedicated Sub-Solution)
  // -------------------------------------------------------------------------
  "led-tunnel": {
    slug: "led-tunnel",
    solutionLabel: "Curved Architectural LED",
    heroHeading: "Interactive Curved LED Tunnels",
    heroSubtitle: "Walk-Through Archways of Seamless High-Density Digital Light",
    heroDescription: "Curved high-density LED archways with floor-to-ceiling visual immersion and integrated motion proximity tracking. Turn entrances and corridors into unforgettable threshold portals.",
    heroImg: "https://images.unsplash.com/photo-1598040795256-03d22d952f4d?auto=format&fit=crop&w=1920&q=80",

    whatIsHeading: "What Is an Interactive LED Tunnel?",
    whatIsDescription: "An LED Tunnel is a curved architectural archway constructed from flexible, ultra-fine pixel pitch LED panels. Combined with spatial sound and walk-through motion sensors, it envelops visitors overhead and on both flanks with radiant, daylight-visible graphics.",
    whatIsVideoPlaceholder: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80",
    whatIsFeatures: [
      { title: "Flexible Seamless Modules", desc: "Curved LED tiles create smooth semicircular or elliptical archways with zero seams." },
      { title: "Ultra-Fine Pixel Pitch (P1.2 - P1.8)", desc: "Hyper-crisp graphics even when visitors' eyes are only inches from the panels." },
      { title: "Integrated Floor LED", desc: "Reinforced high-load tempered glass floor LED panels matching the wall curve." },
      { title: "Speed-Responsive Visuals", desc: "Tunnel graphics accelerate and pulse forward as visitors walk through the portal." }
    ],

    experienceHeading: "LED Tunnel Concepts & Portals",
    experienceIntro: "Create a magnetic entrance corridor that commands attention and inspires awe.",
    featuredExperience: {
      category: "Futuristic Portals",
      title: "Warp Speed Hyperspace Tunnel",
      desc: "Visitors feel propelled through a cosmic starfield with streak lines and quantum particles bending overhead.",
      img: "https://images.unsplash.com/photo-1598040795256-03d22d952f4d?auto=format&fit=crop&w=1200&q=80"
    },
    experienceCards: [
      { category: "Nature & Biophilic", title: "Subterranean Coral Reef Arch", desc: "Walk beneath a curved transparent ocean archway where sea turtles and rays glide overhead.", img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80" },
      { category: "Brand Entrances", title: "The Red Carpet Prism Corridor", desc: "Reflective kaleidoscopic patterns and brand logos swirling around guests at galas.", img: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80" },
      { category: "Sports Stadiums", title: "Player Walkout Thunder Portal", desc: "High-voltage lightning and roaring crowd energy surrounding athletes before they take the field.", img: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80" },
      { category: "Shopping Malls", title: "Seasonal Blossom Canopy Tunnel", desc: "Interactive cherry blossoms that drift across the curved archway as pedestrians stroll.", img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80" }
    ],

    featuresHeading: "Panel Architecture & Structural Engineering",
    keyFeaturesIntro: "Engineered for rapid modular assembly with precision curved internal aluminum sub-frames.",
    keyFeatures: [
      { title: "GOB / COB Surface Protection", desc: "Glue-on-board encapsulation resists moisture, impact, and public touching." },
      { title: "High Refresh Rate (3,840 Hz)", desc: "Flawless video recording without flicker or scan lines on visitor smartphone cameras." },
      { title: "1,200 Nit Daylight Brightness", desc: "Vibrant high-contrast visuals that maintain brilliance under atrium daylight." },
      { title: "Walk-Over Floor LED", desc: "Toughened optical glass floor tiles support up to 2,000 kg per square meter load." },
      { title: "Directional Optical Radar", desc: "Tracks walking velocity and triggers dynamic wave effects that follow visitors." },
      { title: "Energy-Efficient Common Cathode", desc: "Runs up to 40% cooler and consumes significantly less electricity than traditional LED." }
    ],

    howItWorksHeading: "How LED Tunnel Portals Operate",
    howItWorksIntro: "From structural curved framework to real-time generative lighting physics.",
    howItWorksSteps: [
      { title: "Precision Frame Rigging", desc: "Engineered curved aluminum truss framework is anchored to the building slab." },
      { title: "Magnetic Flexible Tile Mount", desc: "Flexible silicone-backed LED modules snap magnetically onto the curved frame." },
      { title: "Fiber Optic Data Loop", desc: "Redundant high-bandwidth 10G fiber cables distribute uncompressed video data." },
      { title: "LiDAR Proximity Sensing", desc: "Entrance sensors detect visitor entry and calculate walking velocity." },
      { title: "Synchronized Sonic Boom", desc: "Directional horn speakers cast synchronized sound effects directly along the tunnel path." }
    ],

    industriesHeading: "Where LED Tunnels Create Maximum Impact",
    industriesIntro: "The ultimate transitional threshold for premier entertainment and corporate venues.",
    featuredIndustry: { title: "Aquariums & Theme Parks", desc: "Enchant visitors with unforgettable walk-through threshold portals.", img: "https://images.unsplash.com/photo-1598040795256-03d22d952f4d?auto=format&fit=crop&w=1200&q=80", href: "/industries/entertainment" },
    industryCards: [
      { title: "Sports Arenas & Stadiums", desc: "Electrify player walkouts and VIP tunnel clubs.", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80", href: "/industries/entertainment" },
      { title: "Flagship Shopping Malls", desc: "Command high-street attention and draw foot traffic between retail wings.", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80", href: "/industries/retail-showrooms" },
      { title: "Corporate Headquarters & Expos", desc: "A visionary entrance corridor welcoming partners to global summits.", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80", href: "/industries/corporate" }
    ],

    outcomesHeading: "The Power of an Iconic Architectural Threshold",
    benefitsIntro: "Transforming ordinary transitional hallways into primary social media destinations.",
    featuredBenefit: { title: "#1 Self-Promoting Attraction", desc: "Visitors instinctively film themselves walking through LED tunnels, generating astronomical social media engagement.", img: "https://images.unsplash.com/photo-1598040795256-03d22d952f4d?auto=format&fit=crop&w=1200&q=80" },
    benefits: [
      { title: "100,000-Hour Lifespan", desc: "Solid-state commercial LED diodes engineered for over 10 years of 24/7 run time." },
      { title: "Zero Shadow Blocking", desc: "Because light emits directly from the panels, visitors never cast shadows on the graphics." },
      { title: "Extreme Daylight Visibility", desc: "Overpowers bright indoor lighting and sunlit atrium windows effortlessly." },
      { title: "Modular Length Scalability", desc: "Can be designed anywhere from a 4m short threshold up to an 80m grand tunnel." }
    ],
    techStack: ["Flexible GOB P1.5 LED Modules", "Novastar COEX VMP Processors", "Optical Floor Glass Panels", "Real-Time Notch / Unity Server"],

    projectsHeading: "Selected LED Tunnel Deployments",
    projectsIntro: "Discover our curved LED archways built for premier commercial spaces.",
    featuredProject: {
      industry: "Entertainment",
      title: "The Odyssey 25-Meter LED Portal",
      desc: "A breathtaking 25-meter walk-through LED archway with interactive floor panels for a world-class aquarium.",
      location: "Singapore",
      img: "https://images.unsplash.com/photo-1598040795256-03d22d952f4d?auto=format&fit=crop&w=1200&q=80",
      tech: ["P1.5 Flexible GOB", "Reinforced Floor LED", "Spatial Audio Array"],
      href: "/projects"
    },
    projects: [
      { industry: "Sports", title: "Championship Tunnel Walkout", desc: "Curved LED tunnel with synchronized strobe lighting for an NBA arena.", img: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Retail", title: "Luxury Mall Entrance Atrium", desc: "Archway tunnel generating 10,000+ customer selfies weekly.", img: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Corporate", title: "Tech Campus Innovation Gateway", desc: "Connecting two main buildings with a responsive data stream tunnel.", img: "https://images.unsplash.com/photo-1598040795256-03d22d952f4d?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Theme Park", title: "Starlight Time Machine Corridor", desc: "Walk-through portal between theme park fantasy zones.", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80", href: "/projects" }
    ],

    faqsIntro: "Frequently asked questions regarding LED tunnel structural requirements, power, and maintenance.",
    faqs: [
      { q: "How much power does an LED tunnel require?", a: "With modern common-cathode LED technology, average power consumption is roughly 150-250W per square meter, making it surprisingly efficient." },
      { q: "What happens if a single LED pixel fails?", a: "Our panels feature magnetic front-service modules. If a tile is damaged, it can be magnetically replaced from inside the tunnel in under 30 seconds." },
      { q: "Can the floor handle heavy crowds and luggage?", a: "Yes. The floor LED modules are sealed under 12mm anti-slip tempered architectural glass tested to support heavy hand trucks, wheelchairs, and stiletto heels." },
      { q: "Can the tunnel display 3D anamorphic depth content?", a: "Yes. Custom perspective animations can be engineered so viewers looking down the tunnel perceive immense 3D depth and floating objects." }
    ]
  },

  // -------------------------------------------------------------------------
  // 11. HOLOGRAPHIC DISPLAY (Dedicated Sub-Solution)
  // -------------------------------------------------------------------------
  "holographic-display": {
    slug: "holographic-display",
    solutionLabel: "Mid-Air Volumetric Visuals",
    heroHeading: "3D Holographic Displays",
    heroSubtitle: "Floating Volumetric Visuals in Mid-Air Without 3D Glasses",
    heroDescription: "Deliver the magic of free-floating 3D digital objects. From hyper-realistic transparent OLED showcases and holographic fans to monumental Holo-Gauze stage illusions.",
    heroImg: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1920&q=80",

    whatIsHeading: "What Is a 3D Holographic Display?",
    whatIsDescription: "A Holographic Display projects or renders true-to-life 3D visuals that appear to float in physical space. Using transparent OLED, high-speed persistence-of-vision LED blades, or specialized optical Holo-Gauze meshes, objects hover mid-air with complete depth perception.",
    whatIsVideoPlaceholder: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
    whatIsFeatures: [
      { title: "Transparent OLED Technology", desc: "45% see-through self-emitting OLED panels showing real products behind floating graphics." },
      { title: "Holo-Gauze Mesh Projection", desc: "Invisible theatrical mesh creating 10-meter giant floating holographic characters." },
      { title: "Persistence-of-Vision LED Rotors", desc: "High-speed spinning LED blades creating crisp floating 3D logos and product models." },
      { title: "Touchless Gesture Control", desc: "Visitors pinch and rotate floating 3D holographic objects with hand gestures in mid-air." }
    ],

    experienceHeading: "Holographic Showcases & Stage Magic",
    experienceIntro: "Bring futuristic sci-fi visuals into physical retail flagships, museum exhibits, and keynote stages.",
    featuredExperience: {
      category: "Retail Luxury Showcases",
      title: "Floating Luxury Watch Showcase",
      desc: "A physical luxury watch rests inside a transparent display as animated holographic gears and water droplets hover around it.",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
    },
    experienceCards: [
      { category: "Keynotes & Events", title: "Monumental Holo-Gauze Stage Illusion", desc: "A CEO or pop star performs alongside gigantic 10-meter floating holographic avatars on stage.", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80" },
      { category: "Museums & History", title: "Resurrected Historical Figures", desc: "Life-sized holographic historical figures stand and converse with museum visitors in mid-air.", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80" },
      { category: "Medical & Science", title: "Floating 3D Organ & Molecular Viewer", desc: "Doctors and students rotate floating 3D beating hearts and DNA helixes in real space.", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" },
      { category: "Automotive Showrooms", title: "Exploded View Engine Hologram", desc: "A floating vehicle engine that disassembles itself into 500 individual parts hovering in air.", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80" }
    ],

    featuresHeading: "Optical Physics & Volumetric Specs",
    keyFeaturesIntro: "Precision illumination control designed to maximize optical contrast against real-world backgrounds.",
    keyFeatures: [
      { title: "True Optical Transparency", desc: "Transparent OLED panels deliver true black levels and rich 10-bit color accuracy." },
      { title: "Metallic Holographic Mesh", desc: "Holo-Gauze fabric contains real silver particles for extreme reflection and invisible see-through." },
      { title: "Leap Motion Gesture Tracking", desc: "Sub-millimeter optical hand tracking detects finger pinches, rotations, and swipes in air." },
      { title: "No Wearables Required", desc: "No 3D shutter glasses or AR headsets needed—visible to all onlookers simultaneously." },
      { title: "Integrated Interior Spotlights", desc: "DMX-controlled micro-LED spotlights illuminate physical products placed behind the glass." },
      { title: "Modular Hologram Video Walls", desc: "Tile multiple transparent screens together to form life-sized interactive glass vitrines." }
    ],

    howItWorksHeading: "How Mid-Air Holograms Function",
    howItWorksIntro: "Harnessing the physics of optical reflection and persistence of vision.",
    howItWorksSteps: [
      { title: "Physical Object Placement", desc: "Real physical product is placed inside the dark exhibition chamber." },
      { title: "Holographic Plane Projection", desc: "Specialized high-lumen projection fires at an exact angle onto transparent optical mesh." },
      { title: "Background Occlusion", desc: "Light passes through transparent sections while reflecting vividly off the mesh fibers." },
      { title: "Mid-Air Gesture Sensing", desc: "Optical sensor reads hand coordinates above or in front of the display." },
      { title: "Volumetric Illusion", desc: "The human eye synthesizes the floating light and real product into one magical composite." }
    ],

    industriesHeading: "Where Holographic Displays Excel",
    industriesIntro: "High-end product launches, museum storytelling, and keynote presentations.",
    featuredIndustry: { title: "Luxury Retail & Jewelry", desc: "Elevate high-value jewelry and watches with magical floating narratives.", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80", href: "/industries/retail-showrooms" },
    industryCards: [
      { title: "Museums & Historical Exhibits", desc: "Bring ancient pharaohs and extinct creatures back to life before visitors' eyes.", img: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=800&q=80", href: "/industries/museums-culture" },
      { title: "Concerts, Theatres & Keynotes", desc: "Deliver jaw-dropping stage moments with life-sized holographic performances.", img: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&w=800&q=80", href: "/industries/entertainment" },
      { title: "Medical & Technical Briefing", desc: "Review 3D anatomical scans or engineering parts in true floating space.", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80", href: "/industries/corporate" }
    ],

    outcomesHeading: "Holographic Impact & Dwell Time",
    benefitsIntro: "Holographic visuals stop 90% of passersby, elevating brand prestige to futuristic heights.",
    featuredBenefit: { title: "Maximum Stopping Power", desc: "Shoppers stop and stare 5x longer at holographic displays compared to traditional 2D flat video screens.", img: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80" },
    benefits: [
      { title: "Instant Sci-Fi Wonder", desc: "Delivers an undeniable wow-factor that sets your brand years ahead of competitors." },
      { title: "Touchless Gesture Magic", desc: "Visitors feel like superheroes manipulating floating graphics in mid-air." },
      { title: "Physical Product Protection", desc: "Valuable jewelry or watches stay securely locked behind toughened display glass." },
      { title: "Compact Footprint", desc: "Fits into existing retail display plinths without requiring complex architectural remodeling." }
    ],
    techStack: ["LG 55-Inch Transparent OLED", "Silver Holo-Gauze Theatrical Mesh", "Ultraleap 3Di Hand Tracking", "Unreal Engine 5 Real-Time"],

    projectsHeading: "Selected Holographic Case Studies",
    projectsIntro: "Discover our floating holographic installations across retail and entertainment.",
    featuredProject: {
      industry: "Retail",
      title: "Swiss Horology Floating Holographic Vitrine",
      desc: "A bespoke transparent OLED showcase revealing the complex inner escapement mechanics of a luxury tourbillon watch.",
      location: "Geneva, Switzerland",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      tech: ["Transparent OLED Vitrine", "Mid-Air Gesture Control", "Integrated DMX Lighting"],
      href: "/projects"
    },
    projects: [
      { industry: "Entertainment", title: "Symphony Hall Holographic Soloist", desc: "Deceased maestro resurrected as a 5-meter holographic stage presence.", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Museum", title: "Floating T-Rex Hologram", desc: "Life-sized dinosaur hologram that roars and lunges toward visitors.", img: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Corporate", title: "Automotive EV Battery Exploded View", desc: "Holographic showcase demonstrating lithium battery cell chemistry.", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Trade Show", title: "Holographic Fan 3D Logo Matrix", desc: "40 synchronized spinning fans creating a massive floating corporate emblem.", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80", href: "/projects" }
    ],

    faqsIntro: "Frequently asked questions regarding holographic displays, lighting conditions, and content requirements.",
    faqs: [
      { q: "Do holographic displays require complete darkness?", a: "No. Transparent OLED and holographic fan displays are self-illuminating and work wonderfully in typical retail lighting. Stage Holo-Gauze illusions simply require dark backdrops." },
      { q: "Can we display our existing 3D CAD files?", a: "Yes. We can import standard 3D CAD and OBJ/FBX models directly into our real-time rendering engine for instant holographic viewing." },
      { q: "How do visitors interact with the hologram?", a: "We integrate optical hand-tracking sensors (Leap Motion) so visitors can use intuitive air gestures—pinching, rotating, and swiping without touching anything." },
      { q: "Is the transparent OLED glass safe for public retail?", a: "Yes. The active transparent OLED panel is laminated behind optical tempered safety glass to protect against public impact." }
    ]
  },

  // -------------------------------------------------------------------------
  // 12. AI EXPERIENCE (Overview)
  // -------------------------------------------------------------------------
  "ai-experience": {
    slug: "ai-experience",
    solutionLabel: "Artificial Intelligence Architecture",
    heroHeading: "AI Avatars & Generative Art",
    heroSubtitle: "Real-Time Conversational Avatars, Computer Vision & Generative Art",
    heroDescription: "Move beyond pre-rendered video loops. Our spatial AI systems utilize real-time computer vision and Large Language Models to analyze visitors, converse intelligently in 50+ languages, and generate never-repeating reactive artwork.",
    heroImg: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1920&q=80",

    whatIsHeading: "What Is an AI Experience Installation?",
    whatIsDescription: "An AI Experience combines computer vision, real-time Large Language Models, and generative neural rendering engines. Visitors interact with autonomous 3D Metahumans that hear, see, speak, and adapt their personality based on who is standing in front of them.",
    whatIsVideoPlaceholder: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    whatIsFeatures: [
      { title: "Real-Time NLP & Speech", desc: "Powered by advanced LLMs for fluid, unscripted, brand-safe voice conversations." },
      { title: "Computer Vision Audience Sensing", desc: "Detects visitor age, emotion, posture, and gaze direction in milliseconds." },
      { title: "Generative Living Visuals", desc: "Background environments that paint themselves in real-time based on visitor footfall." },
      { title: "Unreal Engine 5 Metahumans", desc: "Photorealistic digital humans with hyper-realistic facial micro-expressions and eye contact." }
    ],

    experienceHeading: "Spatial AI Deployments & Showcase",
    experienceIntro: "From autonomous corporate receptionists to interactive generative art photo booths.",
    featuredExperience: {
      category: "Corporate Briefing",
      title: "Autonomous AI Reception Concierge",
      desc: "A lifelike digital avatar greets arriving executives by name, manages visitor badges, and answers complex corporate questions.",
      img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80"
    },
    experienceCards: [
      { category: "Retail Flagships", title: "Personalized AI Style Advisor", desc: "A digital stylist that scans customer outfit colors and recommends matching boutique apparel.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80" },
      { category: "Museums & History", title: "Conversational Historical Figures", desc: "Visitors hold unscripted spoken interviews with AI replicas of Leonardo da Vinci and Marie Curie.", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80" },
      { category: "Public Atriums", title: "Generative Art Kinetic Murals", desc: "Massive lobby video walls that dynamically paint abstract artwork driven by real-time footfall patterns.", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" },
      { category: "Events & Activations", title: "AI Neural Style Photo Booth", desc: "Guests step into a booth and are instantly restyled into Renaissance oil paintings or cyberpunk heroes in 4K.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80" }
    ],

    featuresHeading: "Neural Architecture & Latency Optimization",
    keyFeaturesIntro: "Sub-second conversational response loops running on high-performance local edge GPU clusters.",
    keyFeatures: [
      { title: "Sub-Second Voice Latency", desc: "Edge-accelerated Whisper speech-to-text and streaming TTS for natural conversational banter." },
      { title: "Brand-Guarded Knowledge Base", desc: "RAG (Retrieval-Augmented Generation) prevents hallucinations and enforces brand policy." },
      { title: "Computer Vision Gaze Tracking", desc: "The avatar establishes and holds natural eye contact as visitors move around the room." },
      { title: "50+ Supported Languages", desc: "Real-time multilingual translation allows instant communication with international guests." },
      { title: "Local Edge GPU Deployment", desc: "Can be deployed fully on-premises without internet dependency for maximum data privacy." },
      { title: "Comprehensive Audience Analytics", desc: "Aggregates anonymized foot-traffic data, dwell time, and sentiment without storing PII." }
    ],

    howItWorksHeading: "The Real-Time Spatial AI Pipeline",
    howItWorksIntro: "From visual presence sensing to photorealistic lip-sync speech delivery.",
    howItWorksSteps: [
      { title: "Visitor Approach & Sensing", desc: "Wide-angle camera detects a visitor stopping in front of the installation." },
      { title: "Visual & Gaze Alignment", desc: "The 3D Metahuman turns its head, makes eye contact, and speaks a personalized greeting." },
      { title: "Acoustic Speech-to-Text", desc: "Directional microphone array isolates the visitor's voice and converts speech to text." },
      { title: "LLM Reasoning & Guardrails", desc: "Brand-tuned model analyzes the query and retrieves accurate corporate knowledge." },
      { title: "Metahuman Facial Performance", desc: "Audio stream drives synchronized real-time facial blendshapes and emotional expressions." }
    ],

    industriesHeading: "Where Spatial AI Reinvents Engagement",
    industriesIntro: "Transforming corporate lobbies, museums, luxury retail, and premier events.",
    featuredIndustry: { title: "Corporate Headquarters", desc: "Automate executive reception and impress visiting clients with futuristic AI hosts.", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80", href: "/industries/corporate" },
    industryCards: [
      { title: "Museums & Cultural Archives", desc: "Enable unscripted, natural conversations with figures from history.", img: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=800&q=80", href: "/industries/museums-culture" },
      { title: "Retail Showrooms & Boutiques", desc: "AI brand ambassadors that recommend products and answer technical specs.", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80", href: "/industries/retail-showrooms" },
      { title: "Conferences & Galas", desc: "High-throughput interactive photo booths and automated bilingual event emcees.", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80", href: "/industries/entertainment" }
    ],

    outcomesHeading: "Measurable Value of Spatial AI",
    benefitsIntro: "Deliver 24/7 personalized service while gathering rich anonymized behavioral intelligence.",
    featuredBenefit: { title: "Global Fluency Around the Clock", desc: "One AI concierge communicates effortlessly in over 50 languages 24 hours a day without fatigue or variance.", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80" },
    benefits: [
      { title: "Infinite Product Knowledge", desc: "Never forgets a technical specification, price, or historical archive fact." },
      { title: "Zero Hallucination Guardrails", desc: "Strict system prompt architecture guarantees 100% brand-compliant answers." },
      { title: "Anonymized Demographic Insights", desc: "Collects aggregate foot traffic and interest trends without storing photos." },
      { title: "Evergreen Technology Stack", desc: "Easily update the underlying model or add new skills via simple prompt configuration." }
    ],
    techStack: ["NVIDIA RTX Ada Generation GPUs", "Unreal Engine 5 Metahuman SDK", "OpenAI / Claude LLM RAG Pipeline", "Deepgram Streaming Voice"],

    projectsHeading: "Selected Spatial AI Deployments",
    projectsIntro: "Discover our autonomous AI avatars and generative art installations.",
    featuredProject: {
      industry: "Corporate",
      title: "Fortune 500 Global Briefing AI Host",
      desc: "An autonomous photorealistic digital human welcoming international delegations in Tokyo, London, and New York.",
      location: "New York, USA",
      img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
      tech: ["Unreal Metahuman", "Local LLM Inference", "Directional Audio Array"],
      href: "/projects"
    },
    projects: [
      { industry: "Museum", title: "Albert Einstein Interactive Encounter", desc: "Visitors ask theoretical physics questions directly to an AI Einstein avatar.", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Retail", title: "Generative Art Storefront Window", desc: "AI generates abstract street art matching the clothing colors of passerby pedestrians.", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Events", title: "AI Renaissance Photo Studio", desc: "Transformed 2,400 gala guests into museum-quality digital portraits.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Healthcare", title: "Hospital Wayfinding Concierge", desc: "Bilingual avatar guiding patients to clinics and department appointments.", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80", href: "/projects" }
    ],

    faqsIntro: "Frequently asked questions regarding AI avatars, corporate safety, and edge computing.",
    faqs: [
      { q: "Can the AI say something inappropriate or off-brand?", a: "No. We implement multi-layered safety guardrails and strict RAG knowledge boundaries that prevent off-topic chatter or inappropriate responses." },
      { q: "Can the avatar be customized to look like our founder or brand mascot?", a: "Yes. We can photogrammetrically 3D scan a real person to create a digital double, or sculpt bespoke stylized 3D characters and mascots." },
      { q: "Can it operate without an active internet connection?", a: "Yes. For high-security defense or banking environments, we deploy localized edge-AI models running 100% offline on on-premises GPUs." },
      { q: "How fast is the voice conversational response?", a: "Our optimized streaming audio pipeline achieves an average turnaround of 600 to 800 milliseconds, mirroring natural human conversation pauses." }
    ]
  },

  // -------------------------------------------------------------------------
  // 13. AI AVATAR & PHOTO BOOTH (Dedicated Sub-Solution)
  // -------------------------------------------------------------------------
  "ai-avatar-photobooth": {
    slug: "ai-avatar-photobooth",
    solutionLabel: "Conversational & Generative Media",
    heroHeading: "AI Avatar & Generative Photo Booth",
    heroSubtitle: "Real-Time Conversational Avatars & Instant Neural Art Transformations",
    heroDescription: "Combine conversational Metahumans that converse with guests and generative AI photo booths that transform visitor portraits into viral branded digital art in seconds.",
    heroImg: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1920&q=80",

    whatIsHeading: "What Is an AI Avatar & Photo Booth Activation?",
    whatIsDescription: "This turnkey solution merges an autonomous voice-driven 3D Metahuman host with an instant generative AI portrait studio. Guests converse with an intelligent brand avatar, pose for a high-res photo, and receive custom stylized artwork directly to their smartphones.",
    whatIsVideoPlaceholder: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
    whatIsFeatures: [
      { title: "Instant Neural Restyling", desc: "Transforms guest portraits into 3D Pixar, cyberpunk, oil painting, or comic book heroes in under 5 seconds." },
      { title: "Voice-Driven Emcee Host", desc: "An intelligent digital avatar guides guests through the experience with humor and charm." },
      { title: "Zero-App Mobile Delivery", desc: "Guests scan an on-screen QR code or tap NFC to download print-ready high-res images." },
      { title: "GDPR & Privacy Compliant", desc: "Photos are processed ephemerally and automatically wiped according to data compliance standards." }
    ],

    experienceHeading: "Photo Booth Styles & Avatar Personas",
    experienceIntro: "Deliver unforgettable branded keepsakes that flood social media feeds.",
    featuredExperience: {
      category: "Gala & Event Magic",
      title: "The Royal Renaissance Portrait Studio",
      desc: "Guests stand before the mirror, the AI avatar directs their pose, and transforms them into 17th-century aristocrat oil portraits.",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80"
    },
    experienceCards: [
      { category: "Tech Conferences", title: "Cyberpunk Holographic Identity", desc: "Attendees receive futuristic biometric badge portraits complete with glowing cyberware.", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" },
      { category: "Entertainment & Film", title: "Movie Superhero Poster Generator", desc: "Puts guests directly into movie posters as the lead protagonist with authentic title typography.", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80" },
      { category: "Corporate Briefing", title: "Conversational Executive Concierge", desc: "A sleek digital receptionist answering questions and providing event schedules in real-time.", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80" },
      { category: "Retail Pop-Ups", title: "Haute Couture Magazine Cover", desc: "Shoppers pose and receive an animated Vogue-style digital magazine cover with custom branding.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80" }
    ],

    featuresHeading: "Diffusion Engine & Hardware Specs",
    keyFeaturesIntro: "Custom fine-tuned Stable Diffusion / Flux pipelines running on localized enterprise hardware.",
    keyFeatures: [
      { title: "Custom LoRA Model Training", desc: "We train bespoke AI models on your brand colors, uniforms, and art aesthetics." },
      { title: "Studio Lighting & 4K Camera", desc: "Professional high-CRI ring lighting and Sony mirrorless optics for studio-grade inputs." },
      { title: "Sub-5 Second Generation", desc: "Dual RTX 4090 GPUs generate full 4K images with facial identity preservation in seconds." },
      { title: "Face Identity Preservation", desc: "ControlNet and IP-Adapter ensure the guest's likeness is unmistakably recognizable." },
      { title: "Integrated Thermal Dye-Sub Printing", desc: "Optional instant 4x6-inch physical photo prints dispensed in 10 seconds." },
      { title: "Automated Lead Capture", desc: "Gathers verified opt-in marketing emails and social handles seamlessly during image download." }
    ],

    howItWorksHeading: "How the AI Portrait Flow Operates",
    howItWorksIntro: "A frictionless 30-second guest journey designed for maximum throughput at busy events.",
    howItWorksSteps: [
      { title: "Avatar Greeting", desc: "The AI avatar speaks to the guest, explains the concept, and invites them to choose an art style." },
      { title: "Pose & Countdown", desc: "The avatar counts down '3, 2, 1' as the studio camera captures an ultra-sharp portrait." },
      { title: "Neural Processing", desc: "The image is processed through custom fine-tuned diffusion models preserving facial features." },
      { title: "Instant Reveal", desc: "The stunning transformed portrait appears on the giant screen with a customized QR code." },
      { title: "Download & Print", desc: "Guest scans the QR code on their phone to download and share the image instantly." }
    ],

    industriesHeading: "Where AI Avatars & Photo Booths Shine",
    industriesIntro: "High-volume corporate galas, trade show booths, and brand activations.",
    featuredIndustry: { title: "Trade Shows & Expos", desc: "Generate massive booth queues and collect hundreds of qualified B2B leads daily.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80", href: "/industries/corporate" },
    industryCards: [
      { title: "Brand Pop-Ups & Retail", desc: "Create viral user-generated content that spreads across Instagram and TikTok.", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80", href: "/industries/retail-showrooms" },
      { title: "Galas & Entertainment Events", desc: "Give VIP guests a luxurious, memorable keepsake from the evening.", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80", href: "/industries/entertainment" },
      { title: "Museums & Science Centers", desc: "Let visitors imagine themselves in historical eras or alien environments.", img: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=800&q=80", href: "/industries/museums-culture" }
    ],

    outcomesHeading: "Unrivaled Event ROI & Social Footprint",
    benefitsIntro: "Achieve record-setting social sharing and high-quality lead generation.",
    featuredBenefit: { title: "Over 85% Social Sharing Rate", desc: "Because the generated portraits are genuinely artistic and flattering, over 85% of guests post them directly to social media.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80" },
    benefits: [
      { title: "High-Throughput Lead Capture", desc: "Easily processes 80 to 120 guests per hour with frictionless digital delivery." },
      { title: "100% Brand Customization", desc: "Every delivered image features your logos, event hashtags, and sponsor marks." },
      { title: "Zero Awkward Pauses", desc: "The conversational AI avatar entertains the crowd while the image renders." },
      { title: "Turnkey Event Staffing", desc: "We provide complete hardware, custom software styling, and on-site technical operators." }
    ],
    techStack: ["Stable Diffusion SDXL / Flux", "ControlNet & IP-Adapter", "Sony Alpha 4K Studio Cameras", "Thermal Dye-Sublimation Printers"],

    projectsHeading: "Recent AI Photo Booth Activations",
    projectsIntro: "Discover our AI photo booth activations at premiere international events.",
    featuredProject: {
      industry: "Events",
      title: "Tech Summit Cyberpunk Avatar Studio",
      desc: "Transformed 3,200 tech summit attendees into futuristic digital avatars with 92% social sharing rate.",
      location: "San Francisco, USA",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
      tech: ["Dual RTX 4090 Rigs", "Bespoke Cyberpunk LoRA", "Instant QR Cloud Delivery"],
      href: "/projects"
    },
    projects: [
      { industry: "Retail", title: "Luxury Fashion Week Cover Studio", desc: "1,500 VIP attendees received animated digital magazine covers.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Entertainment", title: "Blockbuster Movie Premiere Studio", desc: "Fans placed directly alongside actors in movie poster format.", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Corporate", title: "Automotive Dealer Gala Avatar Emcee", desc: "Interactive AI host greeting guests and taking executive portraits.", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Museum", title: "Time Travel Historical Studio", desc: "Visitors transformed into Victorian-era historical figures.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80", href: "/projects" }
    ],

    faqsIntro: "Frequently asked questions regarding AI photo generation, latency, and photo privacy.",
    faqs: [
      { q: "How long does a guest have to wait for their photo?", a: "The entire process—from stepping in front of the camera to receiving the finished styled image on their phone—takes under 25 seconds." },
      { q: "Does the AI preserve the guest's real face?", a: "Yes. We use advanced ControlNet and facial landmark preservation models so the person's real facial structure and identity remain clearly recognizable." },
      { q: "Can we print physical photo prints on the spot?", a: "Yes. Our turnkey setups can include high-speed thermal dye-sublimation printers that output crisp 4x6-inch prints in just 10 seconds." },
      { q: "Are guest photos stored or used for training?", a: "No. In strict compliance with GDPR and international privacy regulations, images are automatically deleted from server memory after delivery." }
    ]
  },

  // -------------------------------------------------------------------------
  // 14. SOLUTION ENGAGEMENT (Overview)
  // -------------------------------------------------------------------------
  "solution-engagement": {
    slug: "solution-engagement",
    solutionLabel: "Audience Engagement Architecture",
    heroHeading: "Smart Gamification & Kiosks",
    heroSubtitle: "Drive Measurable Physical Engagement with Custom Branded Gamification",
    heroDescription: "High-throughput interactive installations for commercial flagships, expos, and venues. We build custom branded 3D games, RFID lift-and-learn discovery stations, and reward leaderboards that captivate crowds.",
    heroImg: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1920&q=80",

    whatIsHeading: "What Are Smart Engagement Solutions?",
    whatIsDescription: "Smart Engagement combines multi-touch kiosks, RFID sensor triggers, and gamified digital mechanics. These installations turn passive store visitors into active players who explore product features, compete on leaderboards, and willingly share contact data.",
    whatIsVideoPlaceholder: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
    whatIsFeatures: [
      { title: "RFID Lift-and-Learn", desc: "Lifting a physical product instantly displays specs, reviews, and videos on adjacent screens." },
      { title: "Branded Mini-Games", desc: "Custom 2D/3D games that reward high scores with instant discount codes or prizes." },
      { title: "Frictionless Lead Capture", desc: "Seamless opt-in via QR code leaderboards and Apple/Google Wallet vouchers." },
      { title: "Fleet Cloud CMS", desc: "Update game assets, discounts, and product catalogs across 100 stores with one click." }
    ],

    experienceHeading: "Commercial Gamification Suite",
    experienceIntro: "From retail lift-and-learn counters to arena-scale multi-user motion gaming.",
    featuredExperience: {
      category: "Retail Tech",
      title: "Interactive Sneaker Lift-and-Learn Wall",
      desc: "Shoppers lift a sneaker off the shelf; an adjacent 4K display instantly shows cushion technology and athlete reviews.",
      img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80"
    },
    experienceCards: [
      { category: "Expos & Booths", title: "Trade Show Motion Racing Game", desc: "Visitors steer branded race cars using body movement to compete for top leaderboard spots.", img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80" },
      { category: "Corporate Briefing", title: "Multi-Touch Strategy Wall", desc: "Executives explore historical milestones and global supply chains on an 85-inch touch array.", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80" },
      { category: "Public Transit & Malls", title: "Smart 3D Wayfinding Kiosks", desc: "Interactive directories that send personalized 3D walking routes directly to smartphones.", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80" },
      { category: "Sports Arenas", title: "Interactive Halftime Trivia Challenge", desc: "Thousands in the concourse play live trivia challenges on giant video walls to win prizes.", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80" }
    ],

    featuresHeading: "Industrial Hardware & Cloud Telemetry",
    keyFeaturesIntro: "Enterprise hardware designed to withstand millions of public touches with zero downtime.",
    keyFeatures: [
      { title: "Commercial PCAP Touch (40-Point)", desc: "Smooth capacitive glass with anti-glare, anti-microbial, and scratch-resistant treatment." },
      { title: "RFID / NFC Near-Field Sensors", desc: "Sub-millisecond detection of tagged merchandise placed on or lifted from pedestals." },
      { title: "Global Cloud Fleet Management", desc: "Monitor hardware health, update promotions, and analyze interactions remotely." },
      { title: "Live Leaderboards & CRM Sync", desc: "Syncs game scores and customer opt-ins directly into Salesforce, HubSpot, or Shopify." },
      { title: "Custom Physics & Animation Engine", desc: "Smooth 60 FPS visuals developed in modern HTML5, Unity, and React frameworks." },
      { title: "Tamper-Proof Kiosk Enclosures", desc: "Heavy-gauge powder-coated steel chassis with concealed locking mechanisms." }
    ],

    howItWorksHeading: "The Frictionless Engagement Loop",
    howItWorksIntro: "From magnetic visual attract loop to qualified marketing conversion.",
    howItWorksSteps: [
      { title: "Attract Loop", desc: "Vibrant high-contrast animations catch pedestrian eyes from across the concourse." },
      { title: "Tactile Trigger", desc: "User touches the screen or lifts an RFID-tagged product from its display stand." },
      { title: "Active Gamification", desc: "User plays a fast 45-second branded mini-game or explores customized specifications." },
      { title: "Reward & Data Capture", desc: "User inputs their phone number or scans a QR code to claim an instant discount voucher." },
      { title: "Real-Time Telemetry", desc: "Interaction duration and product lift counts are securely synced to your corporate dashboard." }
    ],

    industriesHeading: "Key Verticals for Smart Engagement",
    industriesIntro: "Proven revenue uplift across retail flagships, automotive showrooms, and sports stadiums.",
    featuredIndustry: { title: "Retail & Consumer Electronics", desc: "Accelerate high-ticket purchase decisions through interactive product comparison.", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80", href: "/industries/retail-showrooms" },
    industryCards: [
      { title: "Trade Shows & Exhibitions", desc: "Turn passive booth visitors into qualified, badge-scanned B2B sales leads.", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80", href: "/industries/corporate" },
      { title: "Sports Venues & Arenas", desc: "Monetize stadium concourses with branded sponsor gamification and leaderboards.", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80", href: "/industries/entertainment" },
      { title: "Museums & Visitor Centers", desc: "Engage visitors through interactive touch kiosks and discovery quests.", img: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=800&q=80", href: "/industries/museums-culture" }
    ],

    outcomesHeading: "Hard Engagement Data & ROI",
    benefitsIntro: "Gamification activates dopamine, leaving lasting positive brand associations and actionable leads.",
    featuredBenefit: { title: "120% Increase in In-Store Dwell Time", desc: "Interactive gamification and lift-and-learn stations significantly increase the time customers spend exploring your core products.", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80" },
    benefits: [
      { title: "First-Party Opt-In Data", desc: "Customers willingly exchange contact info for high scores, discounts, and prizes." },
      { title: "Dramatically Higher Recall", desc: "Physical interaction yields 70% higher brand recall than passive video signage." },
      { title: "Real-Time Product Interest Metrics", desc: "Know exactly which products are picked up most frequently at every retail location." },
      { title: "Commercial 24/7 Durability", desc: "Hardware is built for 5+ years of intense public usage without failure." }
    ],
    techStack: ["Capacitive Multi-Touch Screens", "RFID / NFC Reader Modules", "Cloud CMS & Telemetry", "Unity / WebGL Engines"],

    projectsHeading: "Selected Engagement Deployments",
    projectsIntro: "Discover our branded gamification activations around the world.",
    featuredProject: {
      industry: "Retail",
      title: "Interactive Flagship Sneaker Wall",
      desc: "A custom RFID lift-and-learn video wall installation boosting conversion across 15 flagship retail stores.",
      location: "London, UK",
      img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
      tech: ["RFID Product Triggers", "4K Video Wall", "Instant Mobile Checkout"],
      href: "/projects"
    },
    projects: [
      { industry: "Expos", title: "Industrial Drone Racing Simulator", desc: "Captured 4,000+ B2B leads at an international aerospace expo.", img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Cosmetics", title: "Lift-and-Learn Skincare Bar", desc: "Lifting cosmetic bottles triggers customized skin tutorials.", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Corporate", title: "Interactive ESG Sustainability Kiosk", desc: "Lobby touchscreen tracking real-time building solar generation.", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Public Space", title: "Airport Interactive Wayfinding Kiosks", desc: "Smart 3D directories guiding 50,000 travelers daily.", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80", href: "/projects" }
    ],

    faqsIntro: "Frequently asked questions regarding gamification design, RFID hardware, and POS integration.",
    faqs: [
      { q: "How do products trigger the screen when lifted?", a: "We embed miniature, passive RFID tags inside or beneath your physical products. A discreet sensor antenna hidden under the display shelf detects removal in under 100 milliseconds." },
      { q: "Can you build custom branded games matching our guidelines?", a: "Yes. Our in-house game design studio builds bespoke 2D and 3D games tailored strictly to your brand aesthetic, gameplay mechanics, and campaign goals." },
      { q: "How do users receive prizes or discounts?", a: "Upon winning or completing the game, users scan a dynamic QR code on screen that saves a digital discount voucher directly into their Apple Wallet or Google Wallet." },
      { q: "Can the kiosk integrate with our e-commerce inventory?", a: "Yes. We regularly connect our systems with Shopify, Magento, Salesforce Commerce Cloud, and custom ERPs to show real-time stock levels." }
    ]
  },

  // -------------------------------------------------------------------------
  // 15. BRAND GAMIFICATION (Dedicated Sub-Solution)
  // -------------------------------------------------------------------------
  "brand-gamification": {
    slug: "brand-gamification",
    solutionLabel: "Branded Digital Mini-Games",
    heroHeading: "Brand Gamification & Activations",
    heroSubtitle: "Transform Brand Campaigns into Addictive Interactive Mini-Games",
    heroDescription: "Custom branded mini-games for trade shows, retail flagships, and pop-up activations. Drive dopamine, viral competition, and high-volume first-party lead capture.",
    heroImg: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1920&q=80",

    whatIsHeading: "What Is Brand Gamification?",
    whatIsDescription: "Brand Gamification turns your marketing message into an engaging, playable digital experience. From touchscreen reflex tests and trivia battles to motion-controlled sports challenges, customers actively participate in your brand story instead of passively walking past.",
    whatIsVideoPlaceholder: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
    whatIsFeatures: [
      { title: "Addictive 45-Second Loops", desc: "Carefully paced game loops designed for rapid throughput and instant gratification." },
      { title: "Live Real-Time Leaderboards", desc: "Fosters friendly competition among attendees with top scores displayed prominently." },
      { title: "Instant Reward Integration", desc: "Dispenses digital discount coupons, gift cards, or physical promotional prizes." },
      { title: "White-Label Brand Theming", desc: "Every visual asset, sound effect, character, and 3D model is 100% custom-branded." }
    ],

    experienceHeading: "Game Mechanics & Activation Archetypes",
    experienceIntro: "Pick from proven addictive game genres adapted specifically for your brand.",
    featuredExperience: {
      category: "Reflex & Skill",
      title: "The Lightning Reflex Reaction Challenge",
      desc: "Players tap illuminated targets on a giant touch wall to test their hand-eye speed and win VIP tickets.",
      img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80"
    },
    experienceCards: [
      { category: "Sports & Fitness", title: "Virtual Penalty Kick Arena", desc: "Players kick a physical soccer ball into a virtual net with high-speed optical tracking.", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80" },
      { category: "Arcade Nostalgia", title: "Branded 3D Retro Runner", desc: "A Subway Surfers-style custom runner where players collect brand products while dodging obstacles.", img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80" },
      { category: "Quiz & Discovery", title: "Live Interactive Brand Trivia", desc: "Multiplayer timed quiz stations educating players on your brand's innovation and sustainability.", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80" },
      { category: "Puzzle & Strategy", title: "Product Assembly Time Attack", desc: "Assemble complex engineering or luxury products in a 3D digital puzzle before time runs out.", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80" }
    ],

    featuresHeading: "Game Engine & Multiplayer Tech",
    keyFeaturesIntro: "Built on high-performance Unity and WebGL frameworks supporting touch, motion, and mobile syncing.",
    keyFeatures: [
      { title: "Cross-Platform Unity Pipeline", desc: "Runs seamlessly on kiosks, giant LED video walls, touch tables, or mobile web." },
      { title: "WebSocket Real-Time Sync", desc: "Connects multiple player stations to a central broadcast scoreboard with zero latency." },
      { title: "Automated Fraud Detection", desc: "Prevents duplicate score submissions and fraudulent prize redemptions." },
      { title: "Dynamic Difficulty Adjustment", desc: "Keeps gameplay challenging yet accessible for children, casual players, and hardcore gamers." },
      { title: "Enterprise CRM Connectors", desc: "Automatically streams lead capture data into Marketo, HubSpot, or Salesforce." },
      { title: "Offline Fallback Mode", desc: "Games continue functioning smoothly even during intermittent venue WiFi drops." }
    ],

    howItWorksHeading: "Game Activation Execution Flow",
    howItWorksIntro: "From initial brief to thrilling game day execution.",
    howItWorksSteps: [
      { title: "Game Design Concepting", desc: "We select the optimal game mechanic tailored to your event objectives and audience." },
      { title: "3D Art & UI Skinning", desc: "Our 3D artists build custom branded models, animations, and sound effects." },
      { title: "Hardware Integration", desc: "Deploy games onto commercial kiosks, giant LED walls, or motion sensor rigs." },
      { title: "Live Player Engagement", desc: "Attendees play, compete on leaderboards, and enter their contact info." },
      { title: "Instant Analytics Reporting", desc: "Review total plays, average dwell time, and conversion metrics in real-time." }
    ],

    industriesHeading: "Where Brand Gamification Thrives",
    industriesIntro: "Turn any public space into a magnetic competitive arena.",
    featuredIndustry: { title: "Trade Shows & Exhibitions", desc: "Draw the largest crowd on the expo floor and double your qualified sales leads.", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80", href: "/industries/corporate" },
    industryCards: [
      { title: "Retail Flagships & Malls", desc: "Drive store foot traffic and reward purchases with instant interactive discounts.", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80", href: "/industries/retail-showrooms" },
      { title: "Sports Venues & Fan Zones", desc: "Engage thousands of passionate fans before kickoff with branded stadium games.", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80", href: "/industries/entertainment" },
      { title: "Automotive Launches", desc: "Create competitive driving simulators that highlight vehicle horsepower and agility.", img: "https://images.unsplash.com/photo-1605335198270-b74955776d6c?auto=format&fit=crop&w=800&q=80", href: "/industries/retail-showrooms" }
    ],

    outcomesHeading: "Gamification Metrics That Matter",
    benefitsIntro: "Playful interactions build emotional brand loyalty that traditional ads cannot replicate.",
    featuredBenefit: { title: "4x Greater Lead Capture Rate", desc: "Attendees are 400% more likely to provide accurate contact information to save game scores and claim rewards.", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80" },
    benefits: [
      { title: "Spontaneous Crowd Energy", desc: "Spectators naturally gather to cheer on players, creating an irresistible social buzz." },
      { title: "Direct Purchase Motivation", desc: "In-game reward coupons drive immediate same-day retail conversions." },
      { title: "Deep Product Education", desc: "Players learn product benefits organically as core gameplay mechanics." },
      { title: "Turnkey Event Deployment", desc: "We provide complete hardware, custom software, and on-site event staff." }
    ],
    techStack: ["Unity 3D Engine", "WebGL Kiosk Client", "WebSockets Real-Time Sync", "Apple / Google Wallet API"],

    projectsHeading: "Featured Gamification Activations",
    projectsIntro: "Discover branded mini-games executed for world-class brands.",
    featuredProject: {
      industry: "Retail",
      title: "Global Sneaker Launch Reaction Game",
      desc: "A giant touch wall game deployed across 20 flagship stores where shoppers competed to unlock exclusive limited sneakers.",
      location: "New York, USA",
      img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
      tech: ["Unity 3D Kiosk", "Live Cloud Leaderboard", "NFC Shoe Unlock"],
      href: "/projects"
    },
    projects: [
      { industry: "Expos", title: "Semiconductor Drone Racing Game", desc: "Generated 3,500 qualified engineering leads during a 4-day tech expo.", img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Beverage", title: "Summer Festival Catch Challenge", desc: "Multiplayer arcade game with instant canned beverage rewards.", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Automotive", title: "EV Battery Efficiency Simulator", desc: "Interactive game educating drivers on regenerative braking.", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Sports", title: "Stadium Concourse Penalty Shootout", desc: "Virtual soccer game played by over 12,000 fans on matchday.", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80", href: "/projects" }
    ],

    faqsIntro: "Frequently asked questions regarding game development timelines, hardware, and lead capture.",
    faqs: [
      { q: "How long does it take to develop a custom brand game?", a: "We have a library of proven, pre-built game mechanics that can be fully re-skinned with your brand assets in 2 to 3 weeks. Bespoke from-scratch games typically take 6 to 8 weeks." },
      { q: "Can players use their own smartphones as controllers?", a: "Yes. We support 'bring-your-own-device' mode where players scan a QR code on the big screen, turning their smartphone into a wireless game controller without downloading any app." },
      { q: "How do you handle game prize fulfillment?", a: "Prizes can be dispensed digitally via SMS / Apple Wallet voucher codes, or physically via integrated IoT prize dispensers and token printers." },
      { q: "Can the game run without internet?", a: "Yes. All our games feature local offline caching so the event never stalls even if the convention center WiFi fails." }
    ]
  },

  // -------------------------------------------------------------------------
  // 16. MOTION GAMES (Dedicated Sub-Solution)
  // -------------------------------------------------------------------------
  "motion-games": {
    slug: "motion-games",
    solutionLabel: "Touchless Body Tracking",
    heroHeading: "Multi-User Motion Games",
    heroSubtitle: "Controller-Free Full-Body Spatial Gaming for Public Venues",
    heroDescription: "Use your body as the game controller. Optical infrared depth cameras and computer vision track jumps, kicks, and gestures in real time across giant video walls and projection floors.",
    heroImg: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1920&q=80",

    whatIsHeading: "What Are Motion Games?",
    whatIsDescription: "Motion Games utilize optical depth sensors (such as LiDAR and 3D depth cameras) and AI skeleton tracking to detect human body movements without any handheld controllers or wearables. Players jump, duck, and wave to control giant on-screen action naturally.",
    whatIsVideoPlaceholder: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
    whatIsFeatures: [
      { title: "100% Controller-Free", desc: "No remotes, gamepads, or wearables to drop, break, sanitize, or steal." },
      { title: "Full Skeletal Tracking", desc: "Tracks 32 anatomical joints per player simultaneously with sub-millimeter precision." },
      { title: "Simultaneous Multiplayer", desc: "Allows up to 8 players to jump and compete together in front of the same display." },
      { title: "Physical Active Play", desc: "Promotes healthy cardiovascular exercise, movement, and laughter in public venues." }
    ],

    experienceHeading: "Motion Gaming Catalog",
    experienceIntro: "From energetic trampoline jump games to cooperative wall-dodging adventures.",
    featuredExperience: {
      category: "High-Energy Fitness",
      title: "The Virtual Obstacle Course Run",
      desc: "Players physically run in place, jump over virtual hurdles, and duck beneath laser beams on a giant 10-meter screen.",
      img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80"
    },
    experienceCards: [
      { category: "Sports Arenas", title: "Goalkeeper Penalty Defense", desc: "Step into the shoes of a goalkeeper, diving and swatting away virtual soccer balls in real time.", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80" },
      { category: "Theme Parks", title: "Dragon Flight Body Steering", desc: "Spread your arms like wings to steer a mythical dragon through mountain canyons.", img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80" },
      { category: "Family Entertainment", title: "Fruit Slicer & Bubble Pop", desc: "Wave your hands rapidly in mid-air to slice floating fruit and pop bubbles with realistic particle physics.", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80" },
      { category: "Museums & Science", title: "Zero-Gravity Space Spacewalk", desc: "Float through an interactive space station using gentle swimming body motions.", img: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80" }
    ],

    featuresHeading: "Optical Tracking & Vision Hardware",
    keyFeaturesIntro: "Industrial depth sensors paired with high-frame-rate computer vision AI pipelines.",
    keyFeatures: [
      { title: "Orbbec / Azure Kinect Depth Cameras", desc: "Time-of-flight depth cameras operating at 60 FPS with wide 120° field of view." },
      { title: "AI Skeletal Rigging", desc: "Machine learning neural networks accurately track joint positions even in loose clothing." },
      { title: "Immune to Ambient Lighting", desc: "Infrared time-of-flight technology operates reliably in dark rooms or bright indoor lighting." },
      { title: "Multi-Screen Wall Support", desc: "Deploy across massive LED video walls, projection surfaces, or multi-screen arrays." },
      { title: "Ultra-Low Latency Physics", desc: "Sub-20ms sensor-to-screen pipeline ensures zero perceived input lag." },
      { title: "Automated Attract Loop", desc: "When no players are detected, the system displays captivating invitation loops." }
    ],

    howItWorksHeading: "How Motion Body Tracking Works",
    howItWorksIntro: "Converting human kinetic movement into real-time digital game action.",
    howItWorksSteps: [
      { title: "Optical Depth Capture", desc: "The overhead infrared depth camera projects millions of invisible IR light pulses." },
      { title: "Point Cloud Generation", desc: "Software creates a live 3D depth map of the player's physical silhouette." },
      { title: "AI Skeletal Fitting", desc: "Neural networks fit a 32-joint digital skeleton to the player's body in real time." },
      { title: "Physics Interaction", desc: "Virtual hands, feet, and head collide with on-screen game obstacles and physics objects." },
      { title: "Immediate Feedback", desc: "The high-refresh screen responds instantly with particle explosions and score popups." }
    ],

    industriesHeading: "Where Motion Games Excel",
    industriesIntro: "High-traffic family destinations, entertainment centers, and brand pavilions.",
    featuredIndustry: { title: "Family Entertainment Centers", desc: "Deliver high-energy active attractions that keep children and parents entertained.", img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80", href: "/industries/entertainment" },
    industryCards: [
      { title: "Museums & Science Centers", desc: "Physical interactive exhibits that educate through energetic bodily participation.", img: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=800&q=80", href: "/industries/museums-culture" },
      { title: "Shopping Malls & Atriums", desc: "Free public play areas that boost mall foot traffic and parental dwell time.", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80", href: "/industries/retail-showrooms" },
      { title: "Healthcare & Physical Rehab", desc: "Gamify physical therapy and mobility exercises for pediatric and senior patients.", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80", href: "/industries/healthcare" }
    ],

    outcomesHeading: "Operational Advantages of Motion Games",
    benefitsIntro: "Zero hardware replacement costs and 100% hygienic touchless entertainment.",
    featuredBenefit: { title: "Zero Hardware Replacement Costs", desc: "Because players touch nothing physical, there are no broken controllers, snapped cables, or worn-out buttons.", img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80" },
    benefits: [
      { title: "100% Hygienic & Germ-Free", desc: "No shared physical controllers to sanitize between players." },
      { title: "Zero Explanation Required", desc: "Intuitive gameplay—players immediately understand how to jump, duck, and wave." },
      { title: "Multi-Generational Fun", desc: "Appeals equally to young children, teenagers, parents, and seniors." },
      { title: "High Venue Throughput", desc: "Fast 60-second game rounds allow hundreds of players to experience the game per hour." }
    ],
    techStack: ["Orbbec 3D Depth Cameras", "AI Skeleton Pose Neural Net", "Unity 3D Physics Engine", "High-Refresh LED Walls"],

    projectsHeading: "Selected Motion Game Deployments",
    projectsIntro: "Discover our motion gaming attractions installed in world-class entertainment centers.",
    featuredProject: {
      industry: "Entertainment",
      title: "SuperHero Arena Multi-Player Motion Wall",
      desc: "A 12-meter motion tracking video wall where 6 players simultaneously dodge laser beams and unleash superpowers.",
      location: "Dubai Mall, UAE",
      img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
      tech: ["Triple Orbbec Depth Sensors", "P1.8 LED Video Wall", "Custom Superpower Physics"],
      href: "/projects"
    },
    projects: [
      { industry: "Museum", title: "Prehistoric Predator Escape Game", desc: "Kids run and jump to outpace virtual dinosaurs on a massive screen.", img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Retail", title: "Activewear Jump & Agility Challenge", desc: "Shoppers test new running shoes on an interactive agility course.", img: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Healthcare", title: "Pediatric Physical Therapy Wall", desc: "Transforming rehabilitation exercises into fun dragon-catching games.", img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80", href: "/projects" },
      { industry: "Sports", title: "Winter Olympics Downhill Ski Simulator", desc: "Body-steering ski simulator in a ski resort lodge.", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80", href: "/projects" }
    ],

    faqsIntro: "Frequently asked questions regarding motion tracking camera placement, player tracking, and lighting.",
    faqs: [
      { q: "How far from the screen do players need to stand?", a: "Optimal tracking occurs between 2.5 and 5 meters from the sensor camera, allowing players plenty of space to jump and move freely." },
      { q: "Can players crash into the screen?", a: "We clearly mark a floor boundary line 2 meters away from the screen, and the sensor will gently pause or alert players if they step too close." },
      { q: "Does clothing color or skin tone affect tracking?", a: "No. Time-of-flight depth cameras use infrared light pulses that measure physical distance, meaning clothing color, skin tone, or dark rooms do not affect tracking accuracy." },
      { q: "Can the system track players in wheelchairs?", a: "Yes. Our skeletal engine includes upper-body tracking modes that detect arm, hand, and head movements independently of leg movement." }
    ]
  }
};
