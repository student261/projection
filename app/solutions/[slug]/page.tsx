import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import MasterSolutionContent, { SolutionFullData } from "@/components/MasterSolutionContent";

const solutionDetails: Record<string, SolutionFullData> = {
  "interactive-spaces": {
    slug: "interactive-spaces",
    solutionLabel: "Interactive Solutions",
    heroHeading: "Interactive Floor & Wall",
    heroSubtitle: "Transform Every Step into an Interactive Experience",
    heroDescription: "Create immersive environments that respond instantly to movement, transforming classrooms, museums, retail spaces, healthcare facilities, and public venues into engaging interactive experiences.",
    heroImg: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1920&q=80",

    whatIsHeading: "What Is an Interactive Floor?",
    whatIsDescription: "An Interactive Floor is a motion-responsive digital system that transforms ordinary surfaces into engaging interactive environments. Every movement is detected in real time, creating immersive experiences that encourage learning, collaboration, play, and exploration.",
    whatIsVideoPlaceholder: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    whatIsFeatures: [
      { title: "Motion Tracking", desc: "Advanced sensors detect every movement instantly." },
      { title: "Real-Time Interaction", desc: "Visuals respond naturally to every step." },
      { title: "Multi-User Experience", desc: "Supports multiple participants simultaneously." },
      { title: "Fully Customizable", desc: "Experiences can be designed for education, retail, museums, healthcare, and more." }
    ],

    experienceIntro: "Every space tells a different story. Whether it's a classroom, museum, retail store, or entertainment venue, our Interactive Floor creates immersive experiences that encourage movement, curiosity, and meaningful engagement.",
    featuredExperience: {
      category: "Education",
      title: "Interactive Classroom",
      desc: "Learning becomes an adventure as students interact with educational games, science simulations, and collaborative activities through movement.",
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80"
    },
    experienceCards: [
      { category: "Museum Experience", title: "Digital Storytelling", desc: "Transform museum visits into immersive storytelling journeys.", img: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=800&q=80" },
      { category: "Retail Experience", title: "Product Interaction", desc: "Increase engagement through interactive shopping experiences.", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80" },
      { category: "Healthcare", title: "Pediatric Waiting Areas", desc: "Reduce anxiety by turning waiting time into playful interaction.", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" },
      { category: "Entertainment", title: "Gaming Arenas", desc: "Deliver unforgettable attractions for family entertainment centers.", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80" }
    ],

    keyFeaturesIntro: "Every interactive environment is powered by advanced technology working seamlessly behind the scenes. From real-time motion tracking to fully customizable content, our solutions are designed to deliver engaging, reliable, and scalable experiences across every industry.",
    keyFeatures: [
      { title: "Motion Tracking", desc: "Advanced motion sensors accurately detect every movement, creating smooth, responsive interactions without requiring controllers or wearable devices." },
      { title: "Multi-User Interaction", desc: "Supports multiple users simultaneously, making it ideal for collaborative learning, public installations, retail experiences, and entertainment environments." },
      { title: "Ultra-HD Visual Experience", desc: "Deliver vibrant visuals with high-resolution projection, creating immersive environments that capture attention and enhance engagement." },
      { title: "Fully Customizable Content", desc: "Every experience can be customized to match your objectives, branding, educational content, campaigns, or visitor journey." },
      { title: "Instant Real-Time Response", desc: "Every step, gesture, or movement is processed instantly, ensuring a natural and seamless interactive experience." },
      { title: "Easy Installation & Scalability", desc: "Designed to integrate into existing environments with minimal disruption while allowing future expansion as your needs grow." }
    ],

    howItWorksIntro: "Every interaction begins with movement. Using advanced motion tracking, intelligent software, and high-quality projection technology, the system instantly detects user movement and transforms it into a dynamic digital experience.",
    howItWorksSteps: [
      { title: "Movement", desc: "The experience begins the moment someone walks into the interactive area." },
      { title: "Motion Detection", desc: "Advanced infrared sensors and cameras instantly detect every movement with high precision." },
      { title: "Real-Time Processing", desc: "The software processes movement data in real time and determines the appropriate visual response." },
      { title: "Projection Engine", desc: "High-performance projectors display immersive visuals directly onto the floor, perfectly synchronized with movement." },
      { title: "Interactive Experience", desc: "Every movement creates a responsive digital experience that encourages exploration, learning, and engagement." }
    ],

    industriesIntro: "From classrooms and museums to retail stores, healthcare facilities, entertainment venues, and public spaces, our Interactive Floor adapts seamlessly to different environments. Every installation is customized to meet the unique goals, audience, and experience of each industry.",
    featuredIndustry: { title: "Education", desc: "Create engaging learning environments where students actively participate through movement, collaboration, and immersive educational content.", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80", href: "/industries/education" },
    industryCards: [
      { title: "Healthcare", desc: "Transform waiting areas into calming and engaging spaces that improve patient experiences.", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80", href: "/industries/healthcare" },
      { title: "Museums", desc: "Bring history, science, and culture to life through immersive interactive installations.", img: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=800&q=80", href: "/industries/museums-culture" },
      { title: "Retail", desc: "Increase customer engagement and create memorable shopping experiences.", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80", href: "/industries/retail-showrooms" },
      { title: "Entertainment", desc: "Deliver exciting attractions that encourage movement, participation, and repeat visits.", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80", href: "/industries/entertainment" }
    ],

    benefitsIntro: "Every interactive installation is designed with a purpose—to create meaningful engagement, encourage participation, and transform ordinary environments into memorable experiences.",
    featuredBenefit: { title: "Create Experiences People Remember", desc: "Every interaction is designed to capture attention, encourage participation, and create lasting memories. From education and museums to retail and entertainment, the experience becomes the highlight of every space.", img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80" },
    benefits: [
      { title: "Higher Engagement", desc: "Visitors naturally interact with immersive environments, increasing participation and creating more memorable experiences." },
      { title: "Collaborative Learning", desc: "Encourages teamwork, communication, and active participation through movement-based experiences." },
      { title: "Fully Customizable", desc: "Content, themes, branding, and interactions can be tailored to suit your audience and objectives." },
      { title: "Easy to Integrate", desc: "Designed to fit seamlessly into existing environments with minimal disruption during installation." },
      { title: "Scalable Solution", desc: "From a single classroom to a large entertainment venue, the solution grows with your requirements." },
      { title: "Future Ready", desc: "Built with modern technology that supports updates, new content, and evolving interactive experiences." }
    ],
    techStack: ["Infrared Optical Sensors", "High-Lumen Laser Projection", "Real-Time Tracking Engine", "Edge Blending"],

    projectsIntro: "Every project tells a unique story. Explore how our Interactive Floor solution has transformed classrooms, museums, retail spaces, healthcare facilities, and entertainment venues into engaging, immersive environments that leave lasting impressions.",
    featuredProject: {
      industry: "Education",
      title: "Interactive Learning Environment",
      desc: "An immersive classroom installation designed to improve student participation through movement-based educational experiences.",
      location: "Dubai International School",
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
      tech: ["Interactive Floor", "Motion Tracking", "Projection System", "Interactive Software"],
      href: "/projects/interactive-learning-environment"
    },
    projects: [
      { industry: "Museum", title: "Interactive History Gallery", desc: "Visitors activate digital storytelling through movement.", href: "/projects" },
      { industry: "Retail", title: "Interactive Brand Activation", desc: "Customers engage with products using projection-based experiences.", href: "/projects" },
      { industry: "Healthcare", title: "Interactive Pediatric Zone", desc: "Children enjoy engaging games while waiting for appointments.", href: "/projects" },
      { industry: "Entertainment", title: "Interactive Gaming Arena", desc: "An immersive play experience for family entertainment centers.", href: "/projects" }
    ],

    faqsIntro: "Have questions about our Interactive Floor solution? Here are answers to some of the most common questions regarding installation, customization, maintenance, industries, and technical requirements.",
    faqs: [
      { q: "What is an Interactive Floor?", a: "An Interactive Floor is a motion-responsive projection system that transforms ordinary floors into immersive digital environments. It detects movement in real time and responds with interactive visuals, creating engaging experiences for learning, entertainment, and customer interaction." },
      { q: "Which industries can use this solution?", a: "Our Interactive Floor is suitable for Education, Museums, Retail, Healthcare, Entertainment, Corporate Offices, Events & Exhibitions, and Public Spaces." },
      { q: "Can the content be customized?", a: "Yes. Every experience can be fully customized to match your branding, educational objectives, campaigns, games, themes, or visitor journey." },
      { q: "How many people can interact at the same time?", a: "The system supports multiple users simultaneously, making it ideal for collaborative activities and high-traffic environments." },
      { q: "Is the system suitable for permanent installations?", a: "Yes. Our solutions are designed for both temporary events and permanent installations, depending on your project requirements." },
      { q: "Do you provide installation and support?", a: "Yes. We provide consultation, installation, testing, training, and ongoing technical support to ensure the solution operates smoothly." },
      { q: "Can the solution integrate with existing spaces?", a: "Absolutely. Our solutions are designed to integrate seamlessly into existing environments with minimal disruption." },
      { q: "How do I get started?", a: "Simply contact our team for a consultation. We'll understand your goals, recommend the right solution, and guide you through the complete project process." }
    ]
  },
  "immersive-environment": {
    slug: "immersive-environment",
    solutionLabel: "Immersive Solutions",
    heroHeading: "Projection Mapping",
    heroSubtitle: "Transport Audiences with 360-Degree Architectural Storytelling",
    heroDescription: "Create immersive environments that respond instantly to movement, transforming museums, events, retail spaces, and public venues into engaging interactive experiences.",
    heroImg: "https://images.unsplash.com/photo-1543332143-4e8c27e32a0c?auto=format&fit=crop&w=1920&q=80",

    whatIsHeading: "What Is Projection Mapping?",
    whatIsDescription: "Projection Mapping transforms complex physical structures into dynamic video displays. By precisely wrapping light around geometry, it creates optical illusions that turn static buildings, stages, and rooms into living digital environments.",
    whatIsVideoPlaceholder: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80",
    whatIsFeatures: [
      { title: "Geometric Calibration", desc: "Software precisely aligns pixels to physical corners and curves." },
      { title: "360° Surround Projection", desc: "Wraps entire rooms in narrative content without VR headsets." },
      { title: "Edge Blending", desc: "Seamlessly merges multiple projectors into one giant canvas." },
      { title: "Real-Time Rendering", desc: "Visuals can react dynamically to environmental triggers." }
    ],

    experienceIntro: "Every space tells a different story. Whether it's a historic facade, an event stage, or a museum gallery, projection mapping creates immersive experiences that encourage movement, curiosity, and meaningful engagement.",
    featuredExperience: {
      category: "Museums",
      title: "Immersive Art Exhibitions",
      desc: "Step inside a masterpiece as classical paintings are mapped dynamically across floor-to-ceiling walls.",
      img: "https://images.unsplash.com/photo-1518998053401-878c735c084c?auto=format&fit=crop&w=1200&q=80"
    },
    experienceCards: [
      { category: "Corporate Events", title: "Stage Mapping", desc: "Transform flat stages into dynamic, shifting environments.", img: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&w=800&q=80" },
      { category: "Public Spaces", title: "Facade Mapping", desc: "Turn entire buildings into monumental light shows.", img: "https://images.unsplash.com/photo-1522442642191-2dc04a292850?auto=format&fit=crop&w=800&q=80" },
      { category: "Retail", title: "Product Mapping", desc: "Highlight shoes or vehicles with dynamic animated textures.", img: "https://images.unsplash.com/photo-1605335198270-b74955776d6c?auto=format&fit=crop&w=800&q=80" },
      { category: "Hospitality", title: "Dining Experiences", desc: "Map animated stories directly onto dining tables.", img: "https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?auto=format&fit=crop&w=800&q=80" }
    ],

    keyFeaturesIntro: "Every immersive environment is powered by advanced technology working seamlessly behind the scenes. From real-time rendering to multi-projector edge blending, our solutions are designed to deliver massive scale.",
    keyFeatures: [
      { title: "Geometric Calibration", desc: "Advanced calibration ensures pixels align flawlessly with complex physical architecture." },
      { title: "Multi-Projector Synchronization", desc: "Sync dozens of projectors to act as one single, continuous digital canvas." },
      { title: "Ultra-HD Visual Experience", desc: "Deliver vibrant visuals with high-resolution laser projection." },
      { title: "Fully Customizable Content", desc: "Every experience can be customized to match your objectives, branding, or visitor journey." },
      { title: "Spatial Audio Integration", desc: "Synchronize visual mapping with 360-degree spatial audio." },
      { title: "Easy Installation & Scalability", desc: "Designed to integrate into existing environments with minimal disruption." }
    ],

    howItWorksIntro: "From 3D scanning to the final show, turning a physical space into a digital canvas requires precision engineering and creative mastery.",
    howItWorksSteps: [
      { title: "3D Scanning", desc: "The physical space is scanned using LIDAR to create an exact digital replica." },
      { title: "Content Creation", desc: "Animators build custom 3D content tailored exactly to the geometry." },
      { title: "Hardware Integration", desc: "High-lumen projectors are strategically mounted to cover all surfaces." },
      { title: "Calibration", desc: "Software warps and blends the projection grid to match the physical walls." },
      { title: "The Show", desc: "The space transforms, delivering a seamless immersive illusion." }
    ],

    industriesIntro: "From museums and retail stores to entertainment venues and public spaces, Projection Mapping adapts seamlessly to different environments. Every installation is customized.",
    featuredIndustry: { title: "Museums", desc: "Bring history, science, and culture to life through immersive projection storytelling.", img: "https://images.unsplash.com/photo-1555529733-0e67056058e1?auto=format&fit=crop&w=1200&q=80", href: "/industries/museums-culture" },
    industryCards: [
      { title: "Retail", desc: "Increase customer engagement with immersive brand activations.", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80", href: "/industries/retail-showrooms" },
      { title: "Entertainment", desc: "Deliver exciting attractions and live concert visuals.", img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=800&q=80", href: "/industries/entertainment" },
      { title: "Corporate", desc: "Transform lobbies and event stages.", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80", href: "/industries/corporate" },
      { title: "Public Spaces", desc: "Create monumental city landmarks.", img: "https://images.unsplash.com/photo-1506461883276-594543d0e228?auto=format&fit=crop&w=800&q=80", href: "/industries/public-spaces" }
    ],

    benefitsIntro: "Every installation is designed with a purpose—to create meaningful engagement, encourage participation, and transform ordinary environments into memorable experiences.",
    featuredBenefit: { title: "Create Experiences People Remember", desc: "Projection mapping turns passive observation into an emotional, cinematic journey that visitors naturally want to film and share.", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80" },
    benefits: [
      { title: "Higher Engagement", desc: "Visitors naturally interact with immersive environments, increasing participation." },
      { title: "Viral Social Sharing", desc: "Creates highly photogenic moments that drive organic social media reach." },
      { title: "No Headsets Required", desc: "Unlike VR, projection mapping allows massive crowds to experience it together naturally." },
      { title: "Easy to Integrate", desc: "Designed to fit seamlessly into existing environments." },
      { title: "Scalable Solution", desc: "From a single table to a massive skyscraper facade." },
      { title: "Future Ready", desc: "Built with modern technology that supports updates and new content." }
    ],
    techStack: ["Ultra-Short Throw Optics", "Mesh Deformation Mapping", "Media Server Clustering", "LIDAR Scanning"],

    projectsIntro: "Every project tells a unique story. Explore how our Projection Mapping has transformed museums, retail spaces, and entertainment venues into engaging, immersive environments.",
    featuredProject: {
      industry: "Museum",
      title: "Immersive Art Exhibition",
      desc: "A massive 360-degree projection mapping installation bringing classical impressionist paintings to life.",
      location: "Paris, France",
      img: "https://images.unsplash.com/photo-1563050860-87d45eaae3d1?auto=format&fit=crop&w=1200&q=80",
      tech: ["360 Projection", "Edge Blending", "Media Servers", "Spatial Audio"],
      href: "/projects/immersive-museum-experience"
    },
    projects: [
      { industry: "Retail", title: "Sneaker Mapping", desc: "Projection mapping onto blank physical sneakers to show customizations.", href: "/projects" },
      { industry: "Events", title: "Corporate Stage Transformation", desc: "A shifting, dynamic stage environment for a tech keynote.", href: "/projects" },
      { industry: "Hospitality", title: "Le Petit Chef", desc: "Animated dining experience mapped onto plates.", href: "/projects" },
      { industry: "Public Art", title: "City Hall Facade", desc: "A massive light show projected onto municipal architecture.", href: "/projects" }
    ],

    faqsIntro: "Have questions about our Projection Mapping solutions? Here are answers to some of the most common questions regarding installation, requirements, and capabilities.",
    faqs: [
      { q: "What is Projection Mapping?", a: "Projection Mapping transforms complex physical structures into dynamic video displays. By precisely wrapping light around geometry, it creates optical illusions that turn static buildings, stages, and rooms into living digital environments." },
      { q: "Which industries can use this solution?", a: "It is widely used in Museums, Retail, Entertainment, Corporate Events, Concerts, and Public Art Installations." },
      { q: "Do we need VR headsets?", a: "No. Projection mapping is a shared, naked-eye experience. It transforms the physical room itself, meaning hundreds of people can enjoy it simultaneously without any wearables." },
      { q: "Can you map onto dark or black surfaces?", a: "Projection requires light reflection, so mapping works best on light, matte surfaces (white, grey). Mapping onto glossy black surfaces is not feasible." },
      { q: "Is the system suitable for permanent installations?", a: "Yes. Our solutions are designed for both temporary events (festivals) and permanent installations (museums)." },
      { q: "Do you provide installation and support?", a: "Yes. We provide full consultation, 3D scanning, installation, calibration, and ongoing support." },
      { q: "Can the solution integrate with existing spaces?", a: "Absolutely. We can map almost any existing architectural feature." },
      { q: "How do I get started?", a: "Contact us with photos of your space and your goals. We'll recommend a projector layout and content strategy." }
    ]
  },
  "ai-experience": {
    slug: "ai-experience",
    solutionLabel: "Artificial Intelligence",
    heroHeading: "AI Avatars & Generative Art",
    heroSubtitle: "Real-time generative media, computer vision, and autonomous digital avatars.",
    heroDescription: "Move beyond pre-rendered video loops. Our AI experience systems utilize real-time computer vision to analyze audience behavior, feeding data into generative art engines that create never-repeating visuals.",
    heroImg: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1920&q=80",

    whatIsHeading: "What Is an AI Avatar Experience?",
    whatIsDescription: "An AI Avatar is an autonomous, photorealistic 3D character capable of holding real-time, voice-driven conversations with visitors. Paired with Generative Art systems, the environment dynamically reacts to the avatar's mood and the audience's sentiment.",
    whatIsVideoPlaceholder: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    whatIsFeatures: [
      { title: "Real-Time NLP", desc: "Powered by Large Language Models for fluid conversations." },
      { title: "Computer Vision", desc: "The avatar can 'see' and react to visitor expressions." },
      { title: "Generative Environments", desc: "Backgrounds that shift and evolve based on real-time data." },
      { title: "Photorealistic Rendering", desc: "Built on Unreal Engine 5 for lifelike digital humans." }
    ],

    experienceIntro: "Every space tells a different story. Whether it's a corporate lobby, a retail flagship, or an exhibition booth, AI Avatars create intelligent, personalized interactions.",
    featuredExperience: {
      category: "Corporate",
      title: "AI Receptionist Concierge",
      desc: "A lifelike digital avatar greets guests by name, checks them in, and provides dynamic wayfinding.",
      img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80"
    },
    experienceCards: [
      { category: "Retail Experience", title: "AI Style Assistant", desc: "Recommends products based on a quick visual scan of the customer.", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" },
      { category: "Museums", title: "Historical Figures", desc: "Talk directly to an AI-powered replica of historical figures.", img: "https://images.unsplash.com/photo-1582559937107-1e56b826b527?auto=format&fit=crop&w=800&q=80" },
      { category: "Public Spaces", title: "Generative Art Walls", desc: "A massive lobby wall that paints itself based on foot traffic data.", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" },
      { category: "Events", title: "Interactive Photo Booth", desc: "AI instantly stylizes guest portraits in real-time.", img: "https://images.unsplash.com/photo-1633534571987-9bc401b44ec9?auto=format&fit=crop&w=800&q=80" }
    ],

    keyFeaturesIntro: "Every AI environment is powered by cutting-edge neural networks working seamlessly behind the scenes.",
    keyFeatures: [
      { title: "Computer Vision", desc: "Advanced sensors detect audience demographics, mood, and attention." },
      { title: "Large Language Models", desc: "Enables unscripted, highly intelligent verbal interactions." },
      { title: "Unreal Engine 5 Graphics", desc: "Delivers Metahuman-level photorealism." },
      { title: "Fully Customizable Knowledge", desc: "Train the AI exclusively on your brand's data." },
      { title: "Instant Real-Time Response", desc: "Sub-second latency for natural conversational flow." },
      { title: "Scalable Deployment", desc: "Run locally or scale globally via cloud infrastructure." }
    ],

    howItWorksIntro: "Fusing visual sensing with intelligent processing to create a lifelike encounter.",
    howItWorksSteps: [
      { title: "Visitor Approach", desc: "Computer vision detects a person approaching the screen." },
      { title: "Greeting & Sensing", desc: "The avatar establishes 'eye contact' and greets the user." },
      { title: "Voice Interaction", desc: "User speaks; speech-to-text processes the query." },
      { title: "LLM Processing", desc: "The AI formulates an intelligent, brand-safe response." },
      { title: "Lifelike Delivery", desc: "The avatar responds with synchronized lip-sync and body language." }
    ],

    industriesIntro: "From corporate headquarters and museums to retail stores, AI Avatars adapt seamlessly to different environments.",
    featuredIndustry: { title: "Corporate", desc: "Create engaging corporate lobbies with AI receptionists.", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80", href: "/industries/corporate" },
    industryCards: [
      { title: "Retail", desc: "AI brand ambassadors driving product discovery.", img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80", href: "/industries/retail-showrooms" },
      { title: "Museums", desc: "Conversational historical guides.", img: "https://images.unsplash.com/photo-1565510619895-00c7eaf2a944?auto=format&fit=crop&w=800&q=80", href: "/industries/museums-culture" },
      { title: "Events", desc: "Autonomous booth attract loops.", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80", href: "/industries/entertainment" },
      { title: "Healthcare", desc: "Intelligent digital triage and wayfinding.", img: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80", href: "/industries/healthcare" }
    ],

    benefitsIntro: "AI solutions are designed with a purpose—to create deeply personalized engagement and collect invaluable visitor data.",
    featuredBenefit: { title: "Personalized Encounters at Scale", desc: "An AI Avatar can speak 50 languages and remember infinite product catalogs, providing a perfect brand interaction every time.", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80" },
    benefits: [
      { title: "24/7 Availability", desc: "Digital concierges never take breaks." },
      { title: "Multilingual Support", desc: "Instantly converse in the user's native language." },
      { title: "Anonymized Analytics", desc: "Collect data on visitor demographics and sentiment." },
      { title: "Easy to Update", desc: "Update the AI's knowledge base via a simple prompt interface." },
      { title: "Brand Consistency", desc: "Ensure your brand messaging is delivered perfectly every time." },
      { title: "Future Ready", desc: "Easily swap avatar models or upgrade the LLM engine as tech evolves." }
    ],
    techStack: ["Computer Vision Engine", "Unreal Engine 5", "LLM Voice Integration", "Generative Shaders"],

    projectsIntro: "Explore how our AI Avatars have transformed corporate spaces, retail stores, and entertainment venues.",
    featuredProject: {
      industry: "Corporate",
      title: "AI-Powered Brand Concierge",
      desc: "An autonomous Metahuman receptionist managing a Fortune 500 executive briefing center.",
      location: "New York, USA",
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
      tech: ["Unreal Engine", "OpenAI Integration", "Computer Vision", "Transparent OLED"],
      href: "/projects/interactive-brand-experience"
    },
    projects: [
      { industry: "Museum", title: "Einstein Reborn", desc: "An interactive exhibit letting visitors interview Albert Einstein.", href: "/projects" },
      { industry: "Retail", title: "Generative Window", desc: "A storefront window that generates art based on passerby clothing colors.", href: "/projects" },
      { industry: "Events", title: "AI Photo Booth", desc: "Real-time stylistic transformations at a gala.", href: "/projects" },
      { industry: "Public Space", title: "Digital Wayfinder", desc: "An intelligent avatar guiding airport travelers.", href: "/projects" }
    ],

    faqsIntro: "Have questions about our AI Avatar solutions? Here are answers to some of the most common questions.",
    faqs: [
      { q: "What is an AI Avatar?", a: "An AI Avatar is an autonomous, photorealistic 3D character capable of holding real-time, voice-driven conversations with visitors using LLMs." },
      { q: "Is the AI safe for my brand?", a: "Yes. We implement strict guardrails and system prompts to ensure the AI stays perfectly on-topic and cannot be jailbroken into saying inappropriate things." },
      { q: "Can the avatar look like our CEO?", a: "Yes. We can scan and rig bespoke avatars based on real people, or design custom stylized mascots." },
      { q: "What languages does it support?", a: "The underlying LLMs and text-to-speech engines support over 50 major languages with real-time translation." },
      { q: "Does it require internet?", a: "For the most advanced LLM reasoning, a stable internet connection is required. However, we can deploy localized edge-AI models for offline secure environments." },
      { q: "Do you provide installation and support?", a: "Yes. We provide the complete package: hardware, software, avatar creation, and prompt engineering." },
      { q: "Can it integrate with our CRM?", a: "Absolutely. The AI can pull user data, check reservations, and trigger external API calls." },
      { q: "How do I get started?", a: "Contact us to discuss your use case. We can quickly spin up a prototype conversation using a base model." }
    ]
  },
  "solution-engagement": {
    slug: "solution-engagement",
    solutionLabel: "Engagement Solutions",
    heroHeading: "Smart Gamification & Kiosks",
    heroSubtitle: "Drive measurable engagement with custom gamification.",
    heroDescription: "Designed for high-throughput commercial spaces like flagship retail, expos, and lobbies. We build branded interactive games, digital product exploration kiosks, and reward systems.",
    heroImg: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80",

    whatIsHeading: "What Is Smart Audience Engagement?",
    whatIsDescription: "Smart Engagement encompasses interactive touch kiosks, RFID lift-and-learn stations, and custom branded mini-games. These installations are designed to actively involve the user, educating them on a product while capturing valuable opt-in marketing data.",
    whatIsVideoPlaceholder: "https://images.unsplash.com/photo-1533230554625-f76ea10c4fce?auto=format&fit=crop&w=1200&q=80",
    whatIsFeatures: [
      { title: "Lift-and-Learn", desc: "Picking up a physical product triggers digital info on screen." },
      { title: "Branded Gamification", desc: "Custom mini-games that reward high scores with discounts." },
      { title: "Data Capture", desc: "Seamless lead generation via QR codes and leaderboards." },
      { title: "Cloud CMS", desc: "Update content across global retail fleets instantly." }
    ],

    experienceIntro: "Whether it's a flagship retail store, a trade show booth, or a sports arena concourse, smart gamification creates a magnetic draw.",
    featuredExperience: {
      category: "Retail",
      title: "Interactive Sneaker Wall",
      desc: "Customers lift a shoe off the shelf, and an adjacent screen instantly displays its materials, origin, and stock availability.",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
    },
    experienceCards: [
      { category: "Events", title: "Trade Show Gamification", desc: "Draw crowds with a branded motion-controlled race game.", img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80" },
      { category: "Corporate", title: "Interactive Timelines", desc: "Explore company history on a massive multi-touch video wall.", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" },
      { category: "Public Spaces", title: "Wayfinding Kiosks", desc: "Smart 3D directories that map the fastest route to your gate.", img: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=800&q=80" },
      { category: "Entertainment", title: "Digital Leaderboards", desc: "Live score tracking for physical activations.", img: "https://images.unsplash.com/photo-1518544801976-3e159e50e508?auto=format&fit=crop&w=800&q=80" }
    ],

    keyFeaturesIntro: "Our engagement solutions are built on robust, enterprise-grade architectures designed to handle millions of interactions without failure.",
    keyFeatures: [
      { title: "Capacitive Multi-Touch", desc: "Commercial-grade touchscreens supporting up to 40 simultaneous touch points." },
      { title: "RFID / NFC Integration", desc: "Seamless bridge between physical products and digital content." },
      { title: "Real-Time Leaderboards", desc: "Cloud-synced high scores that drive competitive engagement." },
      { title: "Fully Customizable Content", desc: "Easily reskin games and product data for seasonal campaigns." },
      { title: "Instant Real-Time Response", desc: "Snappy, fluid UI animations built on modern web technologies." },
      { title: "Easy Installation & Scalability", desc: "Deploy to one kiosk or a thousand with remote device management." }
    ],

    howItWorksIntro: "Fusing physical objects with digital gamification to create a frictionless user journey.",
    howItWorksSteps: [
      { title: "Attract Loop", desc: "Vibrant idle animations draw users toward the kiosk." },
      { title: "Interaction Trigger", desc: "The user touches the screen or lifts an RFID-tagged product." },
      { title: "Engagement Phase", desc: "The user plays a branded game or explores product specs." },
      { title: "Reward / Capture", desc: "User inputs their email or scans a QR code to claim a reward." },
      { title: "Analytics Sync", desc: "The interaction data is securely synced to the marketing CRM." }
    ],

    industriesIntro: "From retail flagship stores to massive corporate events, Gamification and Kiosks adapt seamlessly.",
    featuredIndustry: { title: "Retail", desc: "Create engaging shopping experiences that bridge the physical and digital divide.", img: "https://images.unsplash.com/photo-1556740749-887f6717defa?auto=format&fit=crop&w=1200&q=80", href: "/industries/retail-showrooms" },
    industryCards: [
      { title: "Events", desc: "Trade show booth traffic drivers.", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80", href: "/industries/entertainment" },
      { title: "Corporate", desc: "Executive briefing center explorations.", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80", href: "/industries/corporate" },
      { title: "Museums", desc: "Interactive artifact deep-dives.", img: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=800&q=80", href: "/industries/museums-culture" },
      { title: "Public Spaces", desc: "Smart transit and mall directories.", img: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80", href: "/industries/public-spaces" }
    ],

    benefitsIntro: "Gamification is designed to deliver measurable ROI through increased dwell time and direct lead generation.",
    featuredBenefit: { title: "Increase Dwell Time by 120%", desc: "Interactive games and lift-and-learn stations significantly increase the amount of time a customer spends engaging with your core product.", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80" },
    benefits: [
      { title: "Higher Engagement", desc: "Gamification triggers dopamine, creating a positive brand association." },
      { title: "First-Party Data", desc: "Users willingly exchange contact info for scores, discounts, or prizes." },
      { title: "Frictionless Updates", desc: "Push new content to every retail store globally with one click." },
      { title: "Easy to Integrate", desc: "Designed to fit seamlessly into custom retail millwork." },
      { title: "Scalable Solution", desc: "From a single iPad to a massive video wall array." },
      { title: "Future Ready", desc: "Hardware is commercial-grade, built to last 5+ years of 24/7 use." }
    ],
    techStack: ["Cloud CMS Architecture", "Capacitive Touch Screens", "RFID Sensors", "WebSockets Data"],

    projectsIntro: "Explore how our Engagement Solutions have transformed retail spaces and event booths.",
    featuredProject: {
      industry: "Retail",
      title: "Gamified Flagship Store Activation",
      desc: "A massive multi-touch video wall game where shoppers catch virtual falling products to win real-world store discounts.",
      location: "London, UK",
      img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
      tech: ["Multi-Touch Video Wall", "React Native", "QR Integration", "Cloud CRM"],
      href: "/projects/interactive-brand-experience"
    },
    projects: [
      { industry: "Events", title: "Trade Show Racing Simulator", desc: "A custom branded driving game to capture B2B leads.", href: "/projects" },
      { industry: "Retail", title: "Lift and Learn Makeup", desc: "Picking up a lipstick triggers a digital tutorial.", href: "/projects" },
      { industry: "Corporate", title: "Interactive ESG Dashboard", desc: "A lobby touchscreen visualizing sustainability metrics.", href: "/projects" },
      { industry: "Public Space", title: "Mall Scavenger Hunt", desc: "A multi-screen puzzle game guiding foot traffic.", href: "/projects" }
    ],

    faqsIntro: "Have questions about our Kiosks and Gamification solutions? Here are some common answers.",
    faqs: [
      { q: "What is a Lift-and-Learn system?", a: "It's an installation where physical products are embedded with RFID tags. When a user picks up the product, a nearby screen instantly updates to show information specifically about that item." },
      { q: "Can you build a custom game for our brand?", a: "Yes. Our creative team can design and develop custom 2D or 3D games tailored to your brand guidelines and campaign goals." },
      { q: "How do we collect user data?", a: "We typically use QR code hand-offs, where users scan a code to save their high score or claim a prize, securely transferring them to an opt-in web form on their own phone." },
      { q: "Can we manage the content ourselves?", a: "Yes. All our engagement solutions come tied to a secure Cloud CMS where your marketing team can update assets, change prices, and view analytics." },
      { q: "Is the hardware durable?", a: "Yes, we exclusively use commercial-grade screens and touch overlays designed for 24/7 public use and abuse." },
      { q: "Do you provide installation and support?", a: "Yes, we handle the full AV integration and offer comprehensive SLAs." },
      { q: "Can it integrate with our e-commerce backend?", a: "Absolutely. We routinely integrate with Shopify, Salesforce, and custom inventory APIs." },
      { q: "How do I get started?", a: "Reach out with your campaign brief, and we'll propose an interactive mechanic that fits your goals." }
    ]
  }
};

export default async function SolutionSubpage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const data = solutionDetails[slug];

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-black flex flex-col">
      <Navbar />
      <MasterSolutionContent data={data} />
      <Footer />
    </main>
  );
}
