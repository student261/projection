export interface UseCaseHero {
  label: string;
  h1: string;
  supporting: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  img: string;
  alt: string;
}

export interface UseCaseExperience {
  label: string;
  h2: string;
  copy: string;
  img: string;
  alt: string;
}

export interface UseCaseNeedItem {
  num: string;
  title: string;
  desc: string;
}

export interface UseCaseNeed {
  label: string;
  h2: string;
  items: UseCaseNeedItem[];
}

export interface UseCaseInteractItem {
  title: string;
  desc: string;
  img: string;
  alt: string;
}

export interface UseCaseInteract {
  label: string;
  h2: string;
  items: UseCaseInteractItem[];
}

export interface UseCaseSpaceItem {
  title: string;
  desc: string;
  img: string;
  alt: string;
}

export interface UseCaseSpaces {
  label: string;
  h2: string;
  items: UseCaseSpaceItem[];
  note: string;
}

export interface UseCaseActivityItem {
  title: string;
  desc: string;
  img: string;
  alt: string;
}

export interface UseCaseActivities {
  label: string;
  h2: string;
  items: UseCaseActivityItem[];
}

export interface UseCaseGalleryItem {
  src: string;
  alt: string;
}

export interface UseCaseGallery {
  label: string;
  h2: string;
  supporting: string;
  showConceptLabel: boolean;
  conceptLabel: string;
  images: UseCaseGalleryItem[];
}

export interface UseCaseHowItWorksItem {
  num: string;
  title: string;
  desc: string;
}

export interface UseCaseHowItWorks {
  label: string;
  h2: string;
  items: UseCaseHowItWorksItem[];
}

export interface UseCaseEnablesItem {
  title: string;
  desc: string;
}

export interface UseCaseEnables {
  label: string;
  h2: string;
  items: UseCaseEnablesItem[];
}

export interface UseCaseRelatedItem {
  title: string;
  desc: string;
}

export interface UseCaseRelatedSolutions {
  label: string;
  h2: string;
  items: UseCaseRelatedItem[];
}

export interface UseCaseRelatedIndustries {
  label: string;
  h2: string;
  items: UseCaseRelatedItem[];
}

export interface UseCaseFaqItem {
  q: string;
  a: string;
}

export interface UseCaseFaq {
  label: string;
  items: UseCaseFaqItem[];
}

export interface UseCaseFinalCta {
  h2: string;
  supporting: string;
  buttonText: string;
  buttonHref: string;
  bgImg: string;
}

export interface InteractiveLearningData {
  seo: {
    title: string;
    description: string;
    canonical: string;
    ogImage: string;
  };
  hero: UseCaseHero;
  experience: UseCaseExperience;
  need: UseCaseNeed;
  howStudentsInteract: UseCaseInteract;
  whereItCanBeUsed: UseCaseSpaces;
  whatStudentsCanDo: UseCaseActivities;
  seeWhatsPossible: UseCaseGallery;
  howItWorks: UseCaseHowItWorks;
  whatItEnables: UseCaseEnables;
  relatedSolutions: UseCaseRelatedSolutions;
  relatedIndustries: UseCaseRelatedIndustries;
  faq: UseCaseFaq;
  finalCta: UseCaseFinalCta;
}

export const interactiveLearningData: InteractiveLearningData = {
  seo: {
    title: "Interactive Learning: Students Learn by Moving and Doing",
    description: "See what interactive learning looks like in practice. Students move, touch and play on projected floors and walls, in classrooms, labs and more.",
    canonical: "/use-cases/interactive-learning",
    ogImage: "/images/use-cases/interactive-learning/og.jpg",
  },
  hero: {
    label: "USE CASE",
    h1: "Interactive Learning Where Students Learn Through Movement",
    supporting: "Turn a floor or wall into a learning space students can step on, touch and play with. Lessons become something they do, not just something they watch.",
    primaryCtaText: "Discuss Your Project",
    primaryCtaHref: "/contact",
    secondaryCtaText: "Explore Related Solutions",
    secondaryCtaHref: "#related-solutions",
    img: "/images/use-cases/interactive-learning/hero.jpg",
    alt: "Students playing on an interactive projected floor in a classroom",
  },
  experience: {
    label: "THE EXPERIENCE",
    h2: "Learning You Can Step Into",
    copy: "Picture a classroom floor that reacts as students walk across it. Or a wall where one touch opens a map, a science model or a story. Students move, explore and play, and the content responds as they go.",
    img: "/images/use-cases/interactive-learning/experience.jpg",
    alt: "Students touching an interactive projected wall",
  },
  need: {
    label: "THE NEED",
    h2: "When Learning Is Only Watched or Heard",
    items: [
      {
        num: "01",
        title: "Passive lessons.",
        desc: "Many lessons ask students to sit, watch and listen.",
      },
      {
        num: "02",
        title: "Limited participation.",
        desc: "In a full class, not every student gets a turn to take part.",
      },
      {
        num: "03",
        title: "Hard to picture ideas.",
        desc: "Some ideas are hard to show on a page or a slide.",
      },
      {
        num: "04",
        title: "Limited group activity.",
        desc: "Group work is harder to run with static screens and worksheets.",
      },
    ],
  },
  howStudentsInteract: {
    label: "HOW STUDENTS INTERACT",
    h2: "Five Ways Students Take Part",
    items: [
      {
        title: "Move.",
        desc: "Step, jump and walk across a projected floor to trigger the activity.",
        img: "/images/use-cases/interactive-learning/interact-move.jpg",
        alt: "Child stepping on a projected floor activity",
      },
      {
        title: "Touch.",
        desc: "Tap or reach toward a projected wall to open, select and explore.",
        img: "/images/use-cases/interactive-learning/interact-touch.jpg",
        alt: "Student touching a projected wall",
      },
      {
        title: "Explore.",
        desc: "Look closer, uncover layers and follow their own curiosity.",
        img: "/images/use-cases/interactive-learning/interact-explore.jpg",
        alt: "Students exploring a projected science model",
      },
      {
        title: "Play.",
        desc: "Take part in games built around a lesson.",
        img: "/images/use-cases/interactive-learning/interact-play.jpg",
        alt: "Students playing a projected learning game",
      },
      {
        title: "Learn Together.",
        desc: "Work in pairs or groups on the same activity.",
        img: "/images/use-cases/interactive-learning/interact-together.jpg",
        alt: "Group of students working together on a projected surface",
      },
    ],
  },
  whereItCanBeUsed: {
    label: "WHERE IT CAN BE USED",
    h2: "Spaces That Can Become Learning Spaces",
    items: [
      {
        title: "Classrooms.",
        desc: "Everyday lessons and group activities in the room students already use.",
        img: "/images/use-cases/interactive-learning/space-classroom.jpg",
        alt: "Classrooms for interactive learning",
      },
      {
        title: "STEM Labs.",
        desc: "Hands on exploration of science, math and problem solving.",
        img: "/images/use-cases/interactive-learning/space-stem-lab.jpg",
        alt: "STEM Labs for interactive learning",
      },
      {
        title: "Libraries.",
        desc: "Reading, research and storytelling activities.",
        img: "/images/use-cases/interactive-learning/space-library.jpg",
        alt: "Libraries for interactive learning",
      },
      {
        title: "Activity Rooms.",
        desc: "Flexible rooms for play based and group learning.",
        img: "/images/use-cases/interactive-learning/space-activity-room.jpg",
        alt: "Activity Rooms for interactive learning",
      },
      {
        title: "Gyms.",
        desc: "Movement based lessons in larger spaces.",
        img: "/images/use-cases/interactive-learning/space-gym.jpg",
        alt: "Gyms for interactive learning",
      },
      {
        title: "Immersive Rooms.",
        desc: "Shared rooms that surround a class with visuals and sound.",
        img: "/images/use-cases/interactive-learning/space-immersive-room.jpg",
        alt: "Immersive Rooms for interactive learning",
      },
    ],
    note: "Suitability depends on the surface, lighting and room size.",
  },
  whatStudentsCanDo: {
    label: "WHAT STUDENTS CAN DO",
    h2: "Activities Built Around the Lesson",
    items: [
      {
        title: "Interactive lessons.",
        desc: "Uncover a topic step by step by touching or stepping on parts of the display.",
        img: "/images/use-cases/interactive-learning/activity-lessons.jpg",
        alt: "Interactive lessons on a projected surface",
      },
      {
        title: "Movement based activities.",
        desc: "Practice counting, spelling or sorting by moving to the right answer.",
        img: "/images/use-cases/interactive-learning/activity-movement.jpg",
        alt: "Movement based activities on an interactive floor",
      },
      {
        title: "STEM exploration.",
        desc: "Explore models, patterns and experiments on a large surface.",
        img: "/images/use-cases/interactive-learning/activity-stem.jpg",
        alt: "STEM exploration on an interactive surface",
      },
      {
        title: "Interactive games.",
        desc: "Play quiz and challenge style games linked to the subject.",
        img: "/images/use-cases/interactive-learning/activity-games.jpg",
        alt: "Interactive learning games for students",
      },
      {
        title: "Visual storytelling.",
        desc: "Step inside a story, a place or a moment in history.",
        img: "/images/use-cases/interactive-learning/activity-storytelling.jpg",
        alt: "Visual storytelling in an interactive classroom",
      },
    ],
  },
  seeWhatsPossible: {
    label: "SEE WHAT'S POSSIBLE",
    h2: "Explore Interactive Learning Spaces",
    supporting: "Explore examples of interactive learning environments.",
    showConceptLabel: true,
    conceptLabel: "Concept visuals",
    images: [
      {
        src: "/images/use-cases/interactive-learning/gallery-1.jpg",
        alt: "Interactive projected learning installation",
      },
      {
        src: "/images/use-cases/interactive-learning/gallery-2.jpg",
        alt: "Students interacting with projected content",
      },
      {
        src: "/images/use-cases/interactive-learning/gallery-3.jpg",
        alt: "Interactive floor projection in an educational setting",
      },
      {
        src: "/images/use-cases/interactive-learning/gallery-4.jpg",
        alt: "Educational spatial projection environment",
      },
      {
        src: "/images/use-cases/interactive-learning/gallery-5.jpg",
        alt: "Immersive projection room for students",
      },
    ],
  },
  howItWorks: {
    label: "HOW IT WORKS",
    h2: "What Happens in the Room",
    items: [
      {
        num: "01",
        title: "Students Move.",
        desc: "A student steps, reaches or touches the display.",
      },
      {
        num: "02",
        title: "Content Responds.",
        desc: "The visuals change based on what the student does.",
      },
      {
        num: "03",
        title: "Students Interact.",
        desc: "They answer, choose, build or play as the activity continues.",
      },
      {
        num: "04",
        title: "Learning Continues.",
        desc: "The teacher guides the lesson while students keep exploring.",
      },
    ],
  },
  whatItEnables: {
    label: "WHAT IT ENABLES",
    h2: "What Interactive Learning Makes Possible",
    items: [
      {
        title: "Active Participation.",
        desc: "Students take part with their whole body, not just their eyes.",
      },
      {
        title: "Group Learning.",
        desc: "Pairs, small groups or a full class can share one activity, depending on the setup.",
      },
      {
        title: "Flexible Content.",
        desc: "Activities can change with the subject, age group and lesson plan.",
      },
      {
        title: "Reusable Learning Spaces.",
        desc: "One space can support many lessons and activities over time.",
      },
    ],
  },
  relatedSolutions: {
    label: "EXPLORE MORE",
    h2: "The Solutions Behind Interactive Learning",
    items: [
      {
        title: "Interactive Projection.",
        desc: "The technology that lets a floor or wall respond to students.",
      },
      {
        title: "Interactive Engagement.",
        desc: "Game style activities that reward movement and teamwork.",
      },
      {
        title: "Immersive Experiences.",
        desc: "Shared rooms that surround a whole class with visuals and sound.",
      },
    ],
  },
  relatedIndustries: {
    label: "WHERE IT FITS",
    h2: "Where Interactive Learning Fits",
    items: [
      {
        title: "Education.",
        desc: "Schools, classrooms, STEM labs and libraries.",
      },
      {
        title: "Museums & Exhibitions.",
        desc: "Learning experiences for visitors, families and school groups.",
      },
    ],
  },
  faq: {
    label: "COMMON QUESTIONS",
    items: [
      {
        q: "What is interactive learning?",
        a: "Interactive learning is learning by doing. Instead of only watching or listening, students take part by moving, touching, answering and playing with digital content.",
      },
      {
        q: "How does an interactive learning space work?",
        a: "Visuals are projected onto a floor, wall or other surface. The space detects when a student moves or touches it, and the content responds. A typical setup includes a projector and a way to detect movement. The exact setup depends on the room and the activity.",
      },
      {
        q: "What can students do in an interactive learning environment?",
        a: "They can step through lessons, solve puzzles, play subject games, explore science models and work on group challenges.",
      },
      {
        q: "Can interactive learning be used in classrooms?",
        a: "Yes, where the room has a suitable surface and lighting. Floor space, wall space, ceiling height and lighting are checked during planning.",
      },
      {
        q: "Can interactive learning support group activities?",
        a: "Yes. Activities can be planned for pairs, small teams or a full class, depending on the space and setup.",
      },
      {
        q: "What spaces can be used for interactive learning?",
        a: "Classrooms, STEM labs, libraries, activity rooms, gyms and immersive rooms, provided the space suits the experience.",
      },
      {
        q: "Can the content be customized?",
        a: "Activities can be planned around the subject, age group and space. Ask our team what is possible for your project.",
      },
      {
        q: "How do we get started?",
        a: "Share your space, your audience and what you want students to do. We will discuss a suitable approach for your project.",
      },
    ],
  },
  finalCta: {
    h2: "Create a More Interactive Learning Space",
    supporting: "Tell us about your space and what you want students to do. We will help you plan an experience that fits.",
    buttonText: "Discuss Your Education Project",
    buttonHref: "/contact",
    bgImg: "/images/use-cases/interactive-learning/cta.jpg",
  },
};
