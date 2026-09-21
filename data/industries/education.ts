import { GraduationCap } from 'lucide-react';
import { IndustryData } from './types';

export const education: IndustryData = {
  slug: "education",
  icon: GraduationCap,
  hero: {
    eyebrow: "EDUCATION & STEM LABS",
    title: "Transforming Education with Interactive Motion Learning",
    subtitle: "Turn classrooms, STEM labs, and auditoriums into active physical learning environments that boost retention and student engagement.",
    img: "/images/industry_education_hero.jpg",
  },
  challenges: {
    title: "The Limitations of Traditional Classrooms",
    intro: "Conventional passive classrooms struggle to maintain student focus, accommodate diverse sensory learning styles, and foster active collaboration among digital-native learners.",
    items: [
      { title: "Low Student Engagement", desc: "Traditional teaching methods make it difficult to sustain attention across multi-hour lectures." },
      { title: "Limited Kinesthetic Interaction", desc: "Most learning spaces rely on sedentary listening instead of tactile, movement-driven exploration." },
      { title: "Diverse Learning Styles", desc: "Visual and physical learners struggle when curriculum is limited to textbooks and whiteboard notes." },
      { title: "Hardware Breakage & Maintenance", desc: "Tablets and handheld VR controllers suffer high damage rates and constant charging bottlenecks." },
      { title: "Siloed Student Collaboration", desc: "Individual screens isolate students rather than building shared communication and teamwork skills." },
      { title: "Abstract Concept Comprehension", desc: "Complex physics, planetary orbits, and spatial geometry are hard to grasp without 3D interactive models." }
    ],
    transition: "These challenges create an opportunity to rethink how learning environments engage, inspire, and empower every student."
  },
  vision: {
    title: "Our Vision for Education",
    intro: "We believe education is most effective when students actively participate in the learning journey. By combining physical motion with interactive technology, we transform traditional classrooms into immersive environments where curiosity, collaboration, and innovation thrive.",
    statement: "Every classroom should be a place where students don't just learn—they explore, interact, and experience knowledge in unforgettable ways.",
    pillars: [
      { title: "🌟 Kinesthetic Learning", desc: "Accelerate concept comprehension by allowing children to physically walk, jump, and interact with scientific models on floors and walls." },
      { title: "🤝 Natural Teamwork", desc: "Multi-user surfaces encourage communication, peer problem-solving, and collaborative discovery without isolated headphones." },
      { title: "🚀 Tag-Free Safety", desc: "Ceiling-mounted laser optics mean zero wearable sensors to sanitize, charge, or replace." },
      { title: "🌍 Curriculum-Aligned Content", desc: "Easily switch from STEM geometry to world geography and active kinetic physical education games." }
    ],
    transition: "This vision becomes reality through our interactive solutions, designed specifically for modern educational environments.",
    quote: "\"Every classroom has the potential to become an interactive learning experience.\"",
    img: "/images/var_sandbox_projection.jpg"
  },
  solutions: {
    title: "Interactive Solutions for Education",
    intro: "Our interactive technologies are designed to create engaging learning environments where students actively participate, explore ideas, and collaborate through immersive experiences. Every solution is customized to meet the unique needs of educational institutions.",
    items: [
      { title: "Interactive Motion Floor", desc: "Overhead LiDAR tracking turns classroom floors into active math puzzles, solar systems, and cooperative sports games." },
      { title: "Interactive Wall & Touch Canvas", desc: "High-resolution vertical surfaces allowing whole groups of students to draw, dissect virtual anatomy, and explore timelines." },
      { title: "Architectural Projection Mapping", desc: "Transform school auditoriums and libraries into panoramic historical eras, rainforest biomes, and deep-sea trenches." },
      { title: "STEM & STEAM Discovery Labs", desc: "Hands-on physics simulations, fluid dynamics, and live coding exercises mapped onto tactile physical surfaces." },
      { title: "AR Topographic Sandbox", desc: "Real-time elevation contour projection that instantly reacts as students sculpt physical sand to study erosion and geography." },
      { title: "Sensory Calming Corridors", desc: "Gentle aquatic animations that help neurodiverse students decompress and reset between intense academic periods." }
    ],
    bottomStatement: "Every solution is tailored to your educational goals, learning environment, and audience to create memorable interactive experiences."
  },
  experiences: {
    title: "Featured Learning Experiences",
    intro: "Discover how schools, STEM labs, and cultural spaces bring education to life through hands-on interactive environments.",
    items: [
      { title: "Interactive Classroom Floor", desc: "Motion-responsive floors and walls that turn everyday lessons into collaborative, physically active games students love.", tags: ["Active Learning", "Group Collaboration"], img: "/images/education_interactive_floor.jpg", href: "/solutions/interactive-floor" },
      { title: "STEM Innovation Lab", desc: "Hands-on digital labs where students run physics simulations, dissect 3D biology models, and solve coding challenges together.", tags: ["STEM & Science", "Hands-On Discovery"], img: "/images/museum_dino_sandbox.jpg", href: "/projects/immersive-stem-lab" },
      { title: "School Auditorium Showcase", desc: "Wall-to-wall projection mapping that turns school assemblies, history presentations, and theatre productions into memorable events.", tags: ["Immersive Projections", "Visual Storytelling"], img: "/images/cathedral_projection_mapping.jpg", href: "/solutions/interactive-spaces" },
      { title: "Digital Library Discovery", desc: "Touch-enabled reading corners and animated story walls that spark curiosity and turn reading into an engaging adventure.", tags: ["Interactive Reading", "Curiosity Driven"], img: "/images/museum_interactive_exhibit.jpg", href: "/solutions/interactive-wall" },
      { title: "Museum & Science Gallery", desc: "Walk-in exhibit installations where students explore space missions, touch virtual fossils, and investigate world ecosystems.", tags: ["Interactive Exhibits", "Sensory Learning"], img: "/images/biosphere_ocean_gallery.jpg", href: "/projects/interactive-museum-exhibit" },
      { title: "Active Motion Play Zone", desc: "Kinetic projection games that keep students energized, active, and cooperating during gym classes, brain breaks, and recess.", tags: ["Movement & Health", "Active Play"], img: "/images/interactive_strike_wall.jpg", href: "/solutions/interactive-spaces" }
    ]
  },
  benefits: {
    title: "Proven Educational Outcomes",
    intro: "Meaningful interactive environments that inspire curiosity, strengthen peer collaboration, and improve student learning outcomes across every grade.",
    items: [
      { title: "Measurably Stronger Concept Retention", desc: "Kinesthetic, movement-based learning solidifies complex spatial and mathematical concepts far longer than passive textbooks." },
      { title: "High Active Student Participation", desc: "Multiplayer motion games motivate even reluctant or shy students to participate in group lessons." },
      { title: "Enhanced Classroom Focus", desc: "Short, movement-integrated learning breaks help students regulate focus and channel energy constructively." },
      { title: "Zero Wearable Hardware", desc: "Optics mount safely on ceilings—no headsets to clean, cables to trip over, or tablets to drop." },
      { title: "Universal Neuro-Inclusivity", desc: "Proven sensory-friendly software modes designed for ADHD, autism spectrum, and varied developmental speeds." },
      { title: "Instant Teacher Control", desc: "Educators switch subjects, game modes, and grade levels in seconds using our intuitive cloud-managed tablet CMS." }
    ],
    bottomStatement: "Every interactive experience is designed to create lasting educational value — not just brief moments of distraction."
  },
  technology: {
    title: "How the Technology Works in Real Time",
    intro: "From physical movement to instant digital response — follow the millisecond journey that powers every interactive learning space.",
    items: [
      { title: "Optical Motion Sensors", desc: "Sensors continuously track movement and position across the floor or wall in real time with zero wearable tags." },
      { title: "Real-Time AI Vision", desc: "Intelligent tracking algorithms translate gestures and footsteps into instant game physics with near-instantaneous latency." },
      { title: "Daylight Laser Projection", desc: "Ultra-bright, high-lumen laser optics cast vibrant, razor-sharp graphics that remain clear in daylight-lit classrooms." },
      { title: "Collaborative Touch & Play", desc: "Zero-latency interactive surfaces allow multiple students to touch, draw, and solve challenges together simultaneously." }
    ],
    bottomStatement: "Every step happens in real time — completely seamless and invisible to the students."
  },
  faqs: {
    title: "Frequently Asked Questions",
    intro: "Have questions about interactive learning solutions? Here are answers to the most common questions from educators, institutions, and decision-makers.",
    items: [
      { q: "What types of educational institutions can benefit from interactive learning solutions?", a: "Our solutions are designed for schools, colleges, universities, training centers, libraries, museums, STEM labs, learning centers, and educational exhibitions. Every experience is customized to suit the learning environment and audience." },
      { q: "Can the interactive experiences be customized for our curriculum?", a: "Yes. Every solution can be tailored to your curriculum, learning objectives, age groups, subjects, and educational goals. We create experiences that align with your institution's teaching approach." },
      { q: "What technologies power these interactive experiences?", a: "Our solutions combine motion tracking, projection mapping, touch technology, artificial intelligence, computer vision, interactive software, and real-time content management to create engaging learning environments." },
      { q: "Are the systems easy for teachers to operate?", a: "Absolutely. We provide comprehensive training, intuitive interfaces, and ongoing technical support so educators can confidently manage and operate every interactive experience." },
      { q: "Can these solutions be installed in existing classrooms?", a: "Yes. Most interactive systems can be integrated into existing classrooms, auditoriums, libraries, museums, and learning spaces with minimal disruption." },
      { q: "How long does an interactive education project take to complete?", a: "Project timelines depend on the scope and complexity of the installation. After understanding your requirements, we provide a detailed implementation plan, timeline, and deployment schedule." },
      { q: "Do you provide maintenance and technical support after installation?", a: "Yes. We offer ongoing maintenance, software updates, technical assistance, and long-term support to ensure your interactive learning environment continues to perform at its best." },
      { q: "How do interactive learning experiences improve student engagement?", a: "Interactive environments encourage students to actively participate, collaborate with peers, explore concepts through hands-on activities, and retain information more effectively, making learning both engaging and memorable." }
    ]
  },
  caseStudies: [
    {
      client: "Boston Prep Academy",
      title: "Immersive STEM Lab & Sandbox Installation",
      headline: "Active Hands-On Science Discovery Through Kinetic Projection",
      tag: "STEM INNOVATION LAB",
      metric: "High",
      metricLabel: "Active Participation Rate",
      secondaryMetric: "Elevated",
      secondaryMetricLabel: "Higher STEM Retention",
      desc: "An educational ecosystem utilizing digital sandboxes and interactive geometry walls for collaborative learning, allowing whole classes to run kinetic physics experiments together.",
      quote: "Students engage with complex geometry and science concepts far faster when they can interact with simulations on their feet.",
      img: "/images/education_interactive_floor.jpg",
      slug: "immersive-stem-lab"
    },
    {
      client: "Global Science Museum",
      title: "Interactive Museum Exhibit",
      headline: "Touchless Interactive Science Walls & Motion Surfaces",
      tag: "INTERACTIVE WALL & FLOOR",
      metric: "Multi-Hour",
      metricLabel: "Dwell Time Increase",
      secondaryMetric: "Complete",
      secondaryMetricLabel: "Daylight Visibility",
      desc: "A sprawling interactive museum exhibit combining projection mapping with motion-responsive floors to teach physics, astronomy, and planetary science through active exploration.",
      quote: "The interactive installations completely transformed how student tour groups interact with scientific concepts.",
      img: "/images/museum_interactive_exhibit.jpg",
      slug: "interactive-museum-exhibit"
    },
    {
      client: "Active Arena Edutainment",
      title: "Kinetic Active Multimedia Arena",
      headline: "Multiplayer Kinesthetic Gaming in School Gymnasium",
      tag: "ACTIVE EDUTAINMENT",
      metric: "Massive",
      metricLabel: "Multi-Student Capacity",
      secondaryMetric: "Zero",
      secondaryMetricLabel: "Wearables Required",
      desc: "Kinetic projection sports and active gaming floor installed in a school multi-use hall, turning physical education into gamified math and team challenge circuits.",
      quote: "Every single student gets involved, moving and communicating without any controllers or headsets.",
      img: "/images/entertainment_motion_arena.jpg",
      slug: "arcade-active-arena"
    }
  ],
  cta: {
    eyebrow: "NEXT-GEN LEARNING SPACES",
    title: "Create an Interactive Learning Space.",
    subtitle: "Turn any classroom, auditorium, or STEM lab into an active discovery environment that students never forget.",
    buttonText: "Create an Interactive Learning Space",
    img: "/images/industry_education_hero.jpg"
  }
};
