import { GraduationCap } from 'lucide-react';
import { IndustryData } from './types';

export const education: IndustryData = {
  slug: "education",
  icon: GraduationCap,
  hero: {
    eyebrow: "EDUCATION",
    title: "Turn Classrooms Into Interactive Learning Spaces",
    subtitle: "Give students a way to explore lessons through movement, projection and hands-on interaction: turning floors, walls and shared spaces into part of the learning experience.",
    img: "/images/industry_education_hero.jpg",
  },
  challenges: {
    title: "Creating More Interactive Learning Spaces",
    intro: "The challenge is to turn traditional learning environments into dynamic, interactive spaces that inspire curiosity, participation and real engagement.",
    items: [
      { title: "Keeping Students Engaged", desc: "Traditional lessons make it hard to hold attention through a full class period." },
      { title: "Passive Learning", desc: "Many classrooms still rely on watching and listening rather than doing." },
      { title: "Different Learning Styles", desc: "A single teaching method does not reach every student the same way." },
      { title: "Underused Classroom Space", desc: "Floors, walls and shared areas sit idle instead of being part of the lesson." },
      { title: "Limited Group Participation", desc: "Fewer opportunities for teamwork and collaborative activities." },
      { title: "Rigid Content", desc: "Static materials are hard to update or adapt across subjects and age groups." }
    ],
    transition: "Interactive learning spaces turn these challenges into opportunities for active, memorable student participation."
  },
  vision: {
    title: "Make Learning More Active",
    intro: "Interactive learning spaces give students more ways to take part in a lesson, not just watch it. Floors, walls and other suitable surfaces become part of the classroom itself, turning movement and participation into part of how students learn.",
    statement: "Interactive learning spaces give students more ways to take part in a lesson, not just watch it.",
    pillars: [
      { title: "Active Participation", desc: "Students engage with content through movement, not just observation." },
      { title: "Group Learning", desc: "Shared activities that multiple students can take part in together." },
      { title: "Visual Learning", desc: "Subjects presented through projection and interactive display instead of static material." },
      { title: "Flexible Content", desc: "Activities adapted across subjects, age groups and lesson plans." }
    ],
    transition: "Learning works better when students take part in it, not just watch it.",
    quote: "Learning works better when students take part in it, not just watch it.",
    img: "/images/var_sandbox_projection.jpg"
  },
  solutions: {
    title: "Interactive Solutions Built for Learning",
    intro: "Explore interactive technologies engineered specifically for schools, classrooms, and discovery spaces.",
    items: [
      { title: "Interactive Projection", desc: "Turn floors and walls into interactive surfaces for lessons, activities and hands-on exploration." },
      { title: "Immersive Experiences", desc: "Create immersive learning environments using projection and spatial visuals to explore subjects in new ways." },
      { title: "Interactive Engagement", desc: "Add motion-based games and activities that give students a reason to move and participate." },
      { title: "LED & 3D Display Solutions", desc: "Use large-format displays for presentations, visual learning and school events." }
    ],
    bottomStatement: "Each system is tailored to your classroom layout, lighting conditions, and curriculum goals."
  },
  experiences: {
    title: "Ways to Bring Interactive Learning Into Your School",
    intro: "Practical, proven formats that integrate smoothly into existing school environments.",
    items: [
      { title: "Interactive Classroom", desc: "Floors and walls used for daily lessons and group activities.", tags: [], img: "/images/education_exp_interactive_classroom.webp", href: "/solutions/interactive-projection" },
      { title: "STEM Learning Space", desc: "Visual, hands-on activities for science, math and coding.", tags: [], img: "/images/education_exp_stem_space.webp", href: "/solutions/interactive-projection" },
      { title: "Immersive Learning Room", desc: "Large-scale visuals for storytelling, history and exploration.", tags: [], img: "/images/education_exp_immersive_room.webp", href: "/solutions/immersive-environment" },
      { title: "Interactive Library Corner", desc: "Digital activities for reading and research.", tags: [], img: "/images/education_exp_library_corner.webp", href: "/solutions/interactive-projection" },
      { title: "Activity Zone", desc: "Movement-based learning for breaks and group play.", tags: [], img: "/images/education_exp_activity_zone.webp", href: "/solutions/interactive-projection" }
    ]
  },
  benefits: {
    title: "More Ways to Support Interactive Learning",
    intro: "Delivering lasting educational value across every grade level and space.",
    items: [
      { title: "Active Participation", desc: "Students engage with content through movement, not just observation." },
      { title: "Group Learning", desc: "Shared activities that multiple students can take part in together." },
      { title: "Visual Learning", desc: "Subjects presented through projection and interactive display instead of static material." },
      { title: "Flexible Content", desc: "Activities adapted across subjects, age groups and lesson plans." },
      { title: "Multi-Space Use", desc: "Works in classrooms, libraries, STEM labs and auditoriums." },
      { title: "Reusable Setup", desc: "One installation supports different lessons and content over time." }
    ],
    bottomStatement: "One installation provides enduring, multi-year value across evolving lesson plans."
  },
  technology: {
    title: "How the Experience Comes Together",
    intro: "A unified system of tracking, optics, and software working seamlessly together.",
    items: [
      { title: "Motion Tracking", desc: "Detects student movement within the interactive area in real time." },
      { title: "Projection Systems", desc: "Displays digital content onto classroom floors, walls and other surfaces." },
      { title: "Computer Vision", desc: "Recognizes gestures and multiple simultaneous users." },
      { title: "Interactive Software", desc: "Connects movement and interaction with the projected content." },
      { title: "Sensors", desc: "Provide precise, touch-free detection of student activity." },
      { title: "Content Management", desc: "Lets teachers select, schedule and update lesson content." }
    ],
    bottomStatement: "Engineered for real classroom conditions with zero wearable hardware required."
  },
  faqs: {
    title: "Frequently Asked Questions",
    intro: "Common questions from educators, school administrators, and facilities directors.",
    items: [
      { q: "What is an interactive learning space?", a: "It uses projection, motion tracking and interactive software to let students explore and interact with digital content, rather than just view it." },
      { q: "Can interactive projection be used in a regular classroom?", a: "Yes. It can be set up on suitable floors, walls or other surfaces, depending on the room's layout and lighting." },
      { q: "Can the content be customized for our curriculum?", a: "Yes. Activities and content are built around the subject, age group and learning goals you specify." },
      { q: "How many students can use the experience at once?", a: "This depends on the space and setup: systems can be designed for individual or group interaction." },
      { q: "Which spaces work best for this?", a: "Classrooms, STEM labs, libraries, auditoriums and activity areas are all common setups." },
      { q: "Does installation require major changes to the room?", a: "Most installations work with existing floors, walls and ceilings, with requirements reviewed during planning." },
      { q: "Is internet access required for daily use?", a: "No. Core activities run locally; internet is only needed for content updates." },
      { q: "How long does installation take?", a: "Timeline depends on room size and setup, confirmed during the planning stage." },
      { q: "Do you provide training for teachers?", a: "Yes, training is included as part of installation and support." },
      { q: "How do we get started?", a: "Share your space, goals and the kind of learning experience you want to create, and we will recommend the right approach for your school." }
    ]
  },
  cta: {
    eyebrow: "NEXT-GEN LEARNING SPACES",
    title: "Create a More Interactive Learning Space",
    subtitle: "Bring interactive projection, immersive experiences and hands-on digital activities into your classroom.",
    buttonText: "Discuss Your Education Project",
    img: "/images/industry_education_hero.jpg"
  }
};
