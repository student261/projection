import { Gamepad2 } from 'lucide-react';
import { IndustryData } from './types';

export const entertainment: IndustryData = {
  slug: "entertainment",
  icon: Gamepad2,
  hero: {
    eyebrow: "ENTERTAINMENT & LEISURE",
    title: "High-Energy Multiplayer Interactive Attractions",
    subtitle: "Turn floors, walls, and arenas into dynamic gaming environments for family entertainment centers and theme parks.",
    img: "https://momentfactory.com/cdn/shop/files/SQCagARcade_Montreal_MomentFactory_-9.jpg",
  },
  challenges: {
    title: "The Challenge in Entertainment",
    intro: "Family Entertainment Centers (FECs), trampoline parks, and arcades face constant pressure to offer new, exciting attractions that encourage physical play and drive repeat visits.",
    items: [
      { title: "Stale Attractions", desc: "Traditional physical play structures quickly lose their novelty after a few visits." },
      { title: "Maintenance Costs", desc: "Physical games and arcade machines require constant mechanical maintenance and repairs." },
      { title: "Limited Throughput", desc: "Many VR or arcade games only support 1-2 players at a time, creating bottlenecks." },
      { title: "Hygiene Issues", desc: "Ball pits and high-touch physical play areas are notoriously difficult to keep clean." },
      { title: "Space Constraints", desc: "Venues have limited square footage and need attractions that maximize revenue per square foot." },
      { title: "Engaging All Ages", desc: "Finding attractions that appeal simultaneously to toddlers, teens, and adults is difficult." }
    ],
    transition: "Interactive spatial projection solves these issues by offering limitless, zero-maintenance digital gameplay in physical spaces."
  },
  vision: {
    title: "Our Vision for Play",
    intro: "We believe the future of entertainment is active, physical, and highly social. By merging the excitement of video games with the physical movement of a playground, we create attractions that keep guests moving, laughing, and returning.",
    statement: "Every entertainment venue should offer dynamic, multiplayer experiences that evolve instantly without physical renovations.",
    pillars: [
      { title: "🌟 Limitless Replayability", desc: "Switch between dozens of different games and themes instantly on the exact same physical footprint." },
      { title: "🤝 Massive Multiplayer", desc: "Support dozens of players simultaneously, maximizing throughput and social fun." },
      { title: "🚀 Zero Touch Maintenance", desc: "Because the games are projected light, there are no screens to smash or buttons to break." },
      { title: "🌍 Active Physical Play", desc: "Encourage running, jumping, and teamwork rather than passive screen time." }
    ],
    transition: "This is how we help FECs and theme parks build the most profitable and engaging arenas in the industry.",
    quote: "\"The best games are the ones you play with your whole body.\""
  },
  solutions: {
    title: "Interactive Attractions",
    intro: "We offer a suite of turnkey interactive spatial games and custom development services for massive entertainment venues.",
    items: [
      { title: "Interactive Trampolines", desc: "Project games directly onto trampoline beds where bouncing acts as the controller." },
      { title: "Multiplayer Motion Floors", desc: "Massive floor projections featuring competitive sports, puzzles, and action games for up to 30 players." },
      { title: "Interactive Climbing Walls", desc: "Augment indoor rock climbing with projected targets, moving obstacles, and gamified routes." },
      { title: "Immersive Escape Rooms", desc: "Replace mechanical locks with dynamic projection mapping and motion-tracked puzzles." },
      { title: "Digital Ball Strike Walls", desc: "Massive projection walls that react instantly when players throw physical softballs at digital targets." },
      { title: "Interactive LED Dance Floors", desc: "High-impact LED floors integrated with Lidar tracking for nightclub and event entertainment." }
    ],
    bottomStatement: "All solutions come with a massive library of games and the ability to customize for holidays and events."
  },
  experiences: {
    title: "Featured Arenas",
    intro: "Discover the interactive attractions that are driving massive ticket sales and social media buzz around the world.",
    items: [
      { title: "The Grid Motion Arena", desc: "A 50x50ft interactive floor where teams compete in fast-paced neon sports games.", tags: ["Interactive Floor", "Multiplayer"], img: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Originals_Augmented_Games_Igloofest_6U2A3280-55-WS.jpg" },
      { title: "Augmented Dodgeball", desc: "A trampoline court enhanced with interactive projected targets and digital scoring.", tags: ["Interactive Trampoline", "Motion Tracking"], img: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Themed_Entertainment_Wonderbox_Paradise_city_korea_DSC07507-WS.jpg" },
      { title: "Zombie Strike Wall", desc: "An immersive wall where guests throw physical balls to fend off hordes of projected zombies.", tags: ["Ball Tracking", "Projection Mapping"], img: "https://momentfactory.com/cdn/shop/files/TME_MomentFactory_THELASTCHANCE_5.jpg" },
      { title: "The Magic Drawing Room", desc: "Kids color physical paper templates, scan them, and watch their creations come alive on a massive digital wall.", tags: ["Scan & Play", "Interactive Wall"], img: "https://momentfactory.com/cdn/shop/files/SQCagARcade_Montreal_MomentFactory_-9.jpg" },
      { title: "Immersive Mini Golf", desc: "Projection mapped mini-golf courses where the terrain and obstacles change with every hole.", tags: ["Projection Mapping", "Object Tracking"], img: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Originals_Augmented_Games_Igloofest_6U2A3280-55-WS.jpg" },
      { title: "Interactive Queue Lines", desc: "Keep guests entertained during long theme park waits with gesture-controlled games projected onto hallway walls.", tags: ["Gesture Tracking", "Throughput"], img: "https://momentfactory.com/cdn/shop/files/Moment_Factory_Themed_Entertainment_Wonderbox_Paradise_city_korea_DSC07507-WS.jpg" }
    ]
  },
  benefits: {
    title: "Business Metrics & ROI",
    intro: "Interactive spatial attractions provide unparalleled return on investment by maximizing space utilization and eliminating mechanical downtime.",
    items: [
      { title: "High Throughput", desc: "Process more guests per hour than VR or traditional arcades, maximizing peak-time revenue." },
      { title: "Zero Wear and Tear", desc: "Because the games are light, there are no mechanical parts to break, jam, or replace." },
      { title: "Instant Theme Changes", desc: "Switch your arena from a pirate adventure to a haunted Halloween maze instantly via software." },
      { title: "Drives Repeat Visits", desc: "Regularly updated game libraries ensure there is always something new for guests to experience." },
      { title: "Appeals to All Demographics", desc: "Adjust game difficulty instantly to suit toddlers in the morning and competitive teens in the evening." },
      { title: "Viral Marketing", desc: "The highly visual, active nature of the games generates massive amounts of user-generated content on TikTok and Instagram." }
    ],
    bottomStatement: "Maximize your revenue per square foot with dynamic digital attractions."
  },
  technology: {
    title: "Commercial Entertainment Tech",
    intro: "We build hardware designed to survive the harsh, high-dust, heavy-vibration environments of busy entertainment centers.",
    items: [
      { title: "High-FPS Optical Tracking", desc: "Custom Lidar and optical sensors that track dozens of fast-moving players with zero latency." },
      { title: "Dust-Proof Laser Projectors", desc: "Sealed optical engines that require zero filter changes, ideal for dusty trampoline parks." },
      { title: "Ruggedized Media Servers", desc: "Industrial-grade PCs built to run complex physics engines 24/7 without overheating." },
      { title: "Cloud Game Library", desc: "A subscription-based CMS that pushes new games and seasonal content directly to your servers." },
      { title: "Automated Arena Control", desc: "Tablet-based interfaces allowing staff to switch games, adjust volume, and control the arena easily." },
      { title: "Real-Time Physics Engines", desc: "Unity and Unreal Engine integrations that make digital balls and characters react perfectly to human movement." }
    ],
    bottomStatement: "Built tough. Built fast. Built for continuous commercial operation."
  },
  faqs: {
    title: "Entertainment Installation FAQs",
    intro: "Answers to common operational questions for FECs, arcades, and trampoline parks.",
    items: [
      { q: "How many games are included with the system?", a: "Our standard Entertainment Package includes over 50 pre-loaded games ranging from competitive sports to cooperative puzzles and toddler sensory games." },
      { q: "Can we add our own branding to the games?", a: "Yes. Our CMS allows you to easily drop your venue's logo into the games, and we also offer custom reskinning services for sponsorships." },
      { q: "Do we need to turn off the lights in our venue?", a: "Not entirely. While projection requires some lighting control, we use ultra-high-brightness commercial lasers (10,000+ lumens) that perform excellently in standard indoor FEC lighting." },
      { q: "Can it track multiple people on a trampoline?", a: "Yes. Our proprietary tracking algorithms are specifically tuned to handle the complex z-axis depth changes of multiple people bouncing simultaneously." },
      { q: "What happens if a ball hits the projector or camera?", a: "All hardware is rigged securely to the ceiling (usually 15-20ft high) and encased in custom protective cages to prevent any damage from rogue balls." },
      { q: "Is there a subscription fee?", a: "The base system operates perpetually with no mandatory fees. However, we offer an optional 'Game Pass' subscription that delivers new games and seasonal content every month." }
    ]
  }
};
