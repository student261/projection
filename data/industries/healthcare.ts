import { HeartPulse } from 'lucide-react';
import { IndustryData } from './types';

export const healthcare: IndustryData = {
  slug: "healthcare",
  icon: HeartPulse,
  hero: {
    eyebrow: "SENSORY THERAPY",
    title: "Transforming Healthcare with Interactive Sensory Experiences",
    subtitle: "We create calming, engaging environments that reduce anxiety and support pediatric therapy through movement.",
    img: "/images/healthcare_sensory_room.jpg",
  },
  challenges: {
    title: "The Challenge in Healthcare",
    intro: "Medical facilities often feel intimidating, leading to anxiety in patients, especially children. Traditional waiting areas and therapy rooms lack engaging elements to distract and calm patients during stressful times.",
    items: [
      { title: "High Patient Anxiety", desc: "Clinical environments can be frightening and stressful for young patients and their families." },
      { title: "Passive Waiting Areas", desc: "Long wait times with minimal engagement increase frustration and perceived wait duration." },
      { title: "Therapy Engagement", desc: "Physical rehabilitation requires repetitive motions that can be difficult to encourage in patients." },
      { title: "Hygiene Concerns", desc: "Traditional toys and touch-based interactive elements pose significant cross-contamination risks." },
      { title: "Sensory Overload", desc: "Standard clinical lighting and acoustics can overwhelm neurodivergent patients." },
      { title: "Staff Burnout", desc: "Managing anxious patients requires more time and emotional energy from healthcare professionals." }
    ],
    transition: "These challenges require an innovative approach to spatial design that prioritizes patient comfort, engagement, and safety."
  },
  vision: {
    title: "Our Vision for Healing Spaces",
    intro: "We believe healthcare environments should promote healing from the moment a patient arrives. By integrating touchless interactive technology, we transform sterile clinical areas into comforting, sensory-friendly spaces.",
    statement: "Every clinic and hospital should provide an environment that actively reduces stress and encourages positive engagement.",
    pillars: [
      { title: "🌟 Reduce Anxiety", desc: "Transform intimidating waiting rooms into immersive, playful environments that naturally distract and calm patients." },
      { title: "🤝 Support Rehabilitation", desc: "Gamify physical therapy and movement exercises to increase patient compliance and enjoyment." },
      { title: "🚀 Ensure Safety", desc: "Provide fully touchless interactive experiences to completely eliminate cross-contamination risks." },
      { title: "🌍 Foster Inclusivity", desc: "Create adaptable sensory environments tailored for neurodivergent patients and those with special needs." }
    ],
    transition: "This vision is realized through our specialized interactive sensory solutions designed exclusively for healthcare.",
    quote: "\"Healing begins with a comforting environment that turns anxiety into wonder.\""
  },
  solutions: {
    title: "Interactive Solutions for Healthcare",
    intro: "Our healthcare solutions focus on sensory engagement, therapeutic movement, and touchless interaction. We provide robust, hygienic systems built for continuous use in clinical environments.",
    items: [
      { title: "Sensory Interactive Floor", desc: "Touchless floor projections that respond to foot traffic, allowing children to play and engage without touching shared surfaces." },
      { title: "Therapeutic Motion Wall", desc: "Gesture-responsive walls designed to encourage specific physical movements for rehabilitation and occupational therapy." },
      { title: "Calming Projection Mapping", desc: "Transform clinical ceilings and walls into soothing natural environments, ideal for MRI suites or dental rooms." },
      { title: "Interactive Wayfinding", desc: "Clear, engaging digital navigation that helps patients and visitors find their way without stress." },
      { title: "Digital Aquarium", desc: "A maintenance-free, highly engaging virtual aquarium that responds to nearby movement." },
      { title: "Multisensory Immersion Rooms", desc: "Fully integrated immersive environments designed specifically for autism spectrum and sensory processing support." }
    ],
    bottomStatement: "Every installation is built with hospital-grade hygiene standards and zero-touch interaction."
  },
  experiences: {
    title: "Featured Healing Environments",
    intro: "See how leading hospitals and pediatric clinics are transforming their spaces to prioritize patient experience and therapeutic outcomes.",
    items: [
      { title: "Pediatric Waiting Room", desc: "An immersive floor installation that turns anxious waiting time into engaging, touchless play.", tags: ["Interactive Floor", "Touchless Sensing"], img: "/images/hospitality_koi_pond.jpg", href: "/solutions/interactive-floor" },
      { title: "Physical Therapy Lab", desc: "Gamified rehabilitation exercises projected onto walls to encourage full range of motion.", tags: ["Motion Tracking", "Interactive Wall"], img: "/images/interactive_floor_motion.jpg", href: "/solutions/interactive-wall" },
      { title: "MRI Distraction Suite", desc: "Calming visual projections and synchronized audio that relax patients during complex procedures.", tags: ["Projection Mapping", "Spatial Audio"], img: "/images/mri_distraction_suite.jpg", href: "/solutions/projection-mapping" },
      { title: "Sensory Relief Room", desc: "A dedicated environment for neurodivergent patients to control visual and auditory stimuli.", tags: ["Interactive Software", "Custom Content"], img: "/images/biosphere_ocean_gallery.jpg", href: "/projects/sensory-interactive-therapy-room" },
      { title: "Hospital Corridors", desc: "Dynamic interactive elements that guide children playfully from waiting areas to consultation rooms.", tags: ["Motion Sensors", "Wayfinding"], img: "/images/hospital_interactive_corridor.jpg", href: "/projects/pediatric-hospital-floor" },
      { title: "Dental Care Ceiling", desc: "Engaging interactive visuals projected directly above the dental chair to distract and calm patients.", tags: ["Overhead Projection", "Eye Tracking"], img: "/images/planetarium_projection_dome.jpg", href: "/solutions/interactive-ceiling" }
    ]
  },
  benefits: {
    title: "Clinical Benefits & Outcomes",
    intro: "Our installations go beyond aesthetics, delivering measurable improvements in patient experience, clinical workflow, and therapeutic success.",
    items: [
      { title: "Reduced Anxiety", desc: "Patients report significantly lower stress levels when waiting in interactive environments." },
      { title: "Improved Compliance", desc: "Children are more cooperative during procedures after engaging with calming interactive elements." },
      { title: "Zero Cross-Contamination", desc: "Fully touchless interaction eliminates the hygiene risks associated with traditional waiting room toys." },
      { title: "Enhanced Therapy Results", desc: "Gamified exercises encourage patients to complete their physical therapy repetitions with greater enthusiasm." },
      { title: "Better Staff Experience", desc: "Healthcare professionals spend less time managing anxious patients, improving overall clinic efficiency." },
      { title: "Positive Facility Perception", desc: "Hospitals with modern interactive environments are perceived as more innovative and patient-centric." }
    ],
    bottomStatement: "Transforming the patient experience leads to better clinical outcomes and happier families."
  },
  technology: {
    title: "Hygienic & Reliable Technology",
    intro: "Healthcare environments require technology that is safe, reliable, and entirely touchless. Our systems are engineered to operate continuously with zero physical contact required.",
    items: [
      { title: "Touchless Lidar & Depth Sensors", desc: "High-precision tracking that detects movement without any physical contact." },
      { title: "Medical-Grade Hardware Enclosures", desc: "Anti-microbial and easily sanitizable housings for all visible technology." },
      { title: "Quiet Operation Projectors", desc: "Laser projection systems that operate silently to maintain a calming clinical atmosphere." },
      { title: "Remote Diagnostics", desc: "System health monitoring that alerts our team to issues before they affect the patient experience." },
      { title: "Automated Content Scheduling", desc: "Software that automatically switches between high-energy games and calming ambient visuals based on the time of day." },
      { title: "Secure Cloud Architecture", desc: "HIPAA-compliant data handling that ensures no patient data or imagery is ever recorded or stored." }
    ],
    bottomStatement: "Built to the highest standards of safety, privacy, and continuous 24/7 clinical reliability."
  },
  faqs: {
    title: "Healthcare Installation FAQs",
    intro: "Answers to common questions regarding hygiene, safety, and integration in clinical environments.",
    items: [
      { q: "Are the interactive systems safe from a hygiene perspective?", a: "Yes. All our primary healthcare solutions are completely touchless, eliminating the cross-contamination risks found in traditional waiting room toys and touchscreens." },
      { q: "Can the systems be cleaned easily?", a: "The interactive surface is simply your existing floor or wall. You clean it exactly as you normally would, with standard hospital-grade disinfectants." },
      { q: "Do the cameras record patients?", a: "No. Our depth sensors only detect anonymous motion data. No video feeds are recorded, stored, or transmitted, ensuring complete patient privacy." },
      { q: "Can we control the content during different hours?", a: "Yes. The CMS allows you to schedule high-energy games for busy pediatric hours and calming, ambient nature scenes for evenings or specialized sensory hours." },
      { q: "How much space is required?", a: "We can design systems for spaces as small as 2x2 meters up to entire hospital corridors. We map the projection to fit your specific architectural layout." },
      { q: "Is the projection too bright for neurodivergent patients?", a: "We offer complete control over brightness, color palettes, and motion speed to ensure the environment remains sensory-friendly and calming." },
      { q: "Can the system be used for actual physical therapy?", a: "Yes, we develop specific motion-tracking modules designed in consultation with occupational therapists to encourage stretching, balancing, and targeting exercises." },
      { q: "How do you handle maintenance in a sterile environment?", a: "All hardware is installed securely in the ceiling or high on walls, keeping it out of reach. We handle the vast majority of diagnostics and calibration remotely via the cloud." }
    ]
  },
  caseStudies: [
    {
      client: "Pediatric Rehabilitation Center",
      title: "Sensory Interactive Therapy Room",
      headline: "Therapeutic Motion Floor & Sensory Decompression Room",
      tag: "SENSORY REHABILITATION",
      metric: "Touchless",
      metricLabel: "Sanitary Safety Compliance",
      secondaryMetric: "Calming",
      secondaryMetricLabel: "Non-Invasive Sensory Therapy",
      desc: "A specialized multisensory immersion room engineered for neurodiverse children and adults undergoing motor recovery and cognitive decompression with zero wearable sensors.",
      quote: "The calming interactive projections transformed clinical therapy sessions into engaging, stress-free milestones.",
      img: "/images/healthcare_sensory_room.jpg",
      slug: "sensory-interactive-therapy-room"
    },
    {
      client: "Children's Medical Pavilion",
      title: "Pediatric Hospital Floor",
      headline: "Therapeutic Motion Floor & Calming Riverbed Corridor",
      tag: "THERAPEUTIC MOTION FLOOR",
      metric: "Proven",
      metricLabel: "Reduction in Patient Anxiety",
      secondaryMetric: "Certified",
      secondaryMetricLabel: "Infection-Control Compliance",
      desc: "Calming interactive aquatic environments projected onto pediatric hospital corridors, reducing stress and encouraging gentle physical rehabilitation for young patients.",
      quote: "Young patients voluntarily walk and interact with the swimming virtual fish, dramatically easing mobility rehabilitation.",
      img: "/images/hospital_interactive_corridor.jpg",
      slug: "pediatric-hospital-floor"
    },
    {
      client: "Diagnostic Imaging Pavilion",
      title: "MRI Distraction & Procedural Suite",
      headline: "Immersive Visual Calming for Pediatric Diagnostic Imaging",
      tag: "CLINICAL DISTRACTION",
      metric: "Substantial",
      metricLabel: "Sedation Requirement Reduction",
      secondaryMetric: "100%",
      secondaryMetricLabel: "Zero Floor Equipment",
      desc: "Soothing architectural projection and ambient soundscapes engineered to ease claustrophobia and stress during diagnostic scans without physical surface contact.",
      quote: "Patient anxiety dropped noticeably from the moment they entered the immersive soothing environment.",
      img: "/images/mri_distraction_suite.jpg",
      slug: "sensory-therapy-room"
    }
  ],
  cta: {
    eyebrow: "HEALING SPATIAL ENVIRONMENTS",
    title: "Transform Healthcare with Touchless Sensory Spaces.",
    subtitle: "Design calming, hygienic pediatric waiting rooms, therapy suites, and procedural environments that reduce patient stress.",
    buttonText: "Transform Healthcare Spaces",
    img: "/images/healthcare_sensory_room.jpg"
  }
};
