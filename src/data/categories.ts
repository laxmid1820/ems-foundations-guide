import { GraduationCap, TrendingUp, Award, Heart, Wind, Activity, LucideIcon } from "lucide-react";

export type CategoryLevel = "emt" | "aemt" | "paramedic";

export interface Subtopic {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  estimatedMinutes: number;
  whatYoullLearn: string[];
  encouragingTagline: string;
  learningObjectives?: string[];
  completionMessage?: string;
}

export interface Category {
  level: CategoryLevel;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  badgeLabel: string;
  badgeClass: string;
  cardClass: string;
  subtopics: Subtopic[];
}

export const categories: Category[] = [
  {
    level: "emt",
    slug: "emt-foundations",
    title: "Foundations for EMT",
    subtitle: "Core basics for new EMTs – simple and clear",
    description: "Start your EMS journey with confidence. We'll break down everything into easy-to-understand concepts with plenty of examples and encouragement.",
    icon: GraduationCap,
    badgeLabel: "Start Here",
    badgeClass: "bg-success/10 text-success border-success/20",
    cardClass: "ring-2 ring-success/30 border-success/20 hover:ring-success/50",
    subtopics: [
      {
        slug: "anatomy-and-physiology-basics",
        title: "Anatomy and Physiology Basics",
        description: "Understanding how the body works is the first step to recognizing when something's wrong—we'll break it down so it clicks.",
        icon: Activity,
        estimatedMinutes: 25,
        whatYoullLearn: [
          "Map the cardiovascular system: heart chambers, major vessels, and blood flow",
          "Trace the respiratory pathway from nose to alveoli",
          "Explain how oxygen reaches your cells and why perfusion matters"
        ],
        encouragingTagline: "Every expert EMT started right here—you're building skills that matter!",
        learningObjectives: [
          "Identify the four heart chambers and their functions",
          "Describe the difference between pulmonary and systemic circulation",
          "Explain gas exchange in the alveoli and why it's essential for life",
          "Recognize how heart and lungs work together to deliver oxygen"
        ],
        completionMessage: "You've built your anatomy foundation! Understanding how the body works empowers every assessment you'll ever do. Ready for pathophysiology?"
      },
      {
        slug: "heart-and-blood-flow-basics",
        title: "Heart and Blood Flow Basics",
        description: "Learn how the heart pumps blood through your body—the foundation of every cardiac assessment you'll do.",
        icon: Heart,
        estimatedMinutes: 12,
        whatYoullLearn: [
          "The four chambers and what each one does",
          "How blood flows in a complete circuit",
          "Why the heart sounds the way it does"
        ],
        encouragingTagline: "Perfect for beginners—you've got this!",
        learningObjectives: [
          "Identify the four chambers of the heart and their roles",
          "Trace blood flow through the pulmonary and systemic circuits",
          "Recognize normal heart sounds and what they indicate"
        ],
        completionMessage: "You've mastered the basics of cardiac anatomy! Ready for the respiratory system?"
      },
      {
        slug: "respiratory-system-basics",
        title: "Respiratory System Basics",
        description: "Understand breathing from the ground up—we'll make it click.",
        icon: Wind,
        estimatedMinutes: 10,
        whatYoullLearn: [
          "The path air takes from nose to lungs",
          "How oxygen gets into the blood",
          "Normal vs. abnormal breathing patterns"
        ],
        encouragingTagline: "Breathe easy—we'll take it step by step!",
        learningObjectives: [
          "Describe the path air takes from the nose to the alveoli",
          "Explain how gas exchange occurs in the lungs",
          "Identify normal respiratory rates and breathing patterns"
        ],
        completionMessage: "Great work! You now understand the respiratory essentials."
      },
      {
        slug: "asthma-vs-anaphylaxis-emt",
        title: "Asthma vs Anaphylaxis (EMT)",
        description: "[Placeholder] Learn to distinguish asthma from anaphylaxis in the field—two conditions that can look similar but require different interventions.",
        icon: Wind,
        estimatedMinutes: 20,
        whatYoullLearn: [
          "[Placeholder] Differentiate asthma from anaphylaxis by presentation",
          "[Placeholder] Identify key assessment findings for each condition",
          "[Placeholder] Understand EMT-level interventions for both"
        ],
        encouragingTagline: "[Placeholder] You'll be telling these apart like a pro!",
        learningObjectives: [
          "[Placeholder] Recognize the hallmark signs of asthma vs anaphylaxis",
          "[Placeholder] Describe the pathophysiology of each at the EMT level",
          "[Placeholder] List appropriate EMT interventions for each condition"
        ],
        completionMessage: "[Placeholder] Great job—you can now confidently differentiate asthma from anaphylaxis!"
      },
      {
        slug: "pulmonary-edema-vs-pneumonia-vs-effusion-emt",
        title: "Pulmonary Edema vs Pneumonia vs Pleural Effusion (EMT)",
        description: "Learn to differentiate three conditions that all cause dyspnea—pulmonary edema, pneumonia, and pleural effusion—using EMT-level assessment tools.",
        icon: Wind,
        estimatedMinutes: 22,
        whatYoullLearn: [
          "Differentiate pulmonary edema, pneumonia, and pleural effusion by presentation",
          "Identify key lung sounds and history clues for each condition",
          "Apply EMT-level interventions including positioning and oxygen therapy"
        ],
        encouragingTagline: "Three conditions, one chief complaint—you'll sort them out like a pro!",
        learningObjectives: [
          "Recognize the hallmark signs of pulmonary edema vs pneumonia vs pleural effusion",
          "Describe the basic pathophysiology of each condition using simple analogies",
          "Select appropriate EMT interventions for each presentation",
          "Communicate key findings effectively to receiving facilities"
        ],
        completionMessage: "Great job! You can now confidently differentiate three major causes of dyspnea at the EMT level!"
      }
    ]
  },
  {
    level: "aemt",
    slug: "aemt-foundations",
    title: "Foundations for AEMT",
    subtitle: "Deeper understanding for advancement",
    description: "Ready to level up? We'll add more detail to what you already know, connecting concepts to give you a deeper clinical understanding.",
    icon: TrendingUp,
    badgeLabel: "Building On Basics",
    badgeClass: "bg-primary/10 text-primary border-primary/20",
    cardClass: "ring-2 ring-primary/30 border-primary/20 hover:ring-primary/50",
    subtopics: [
      {
        slug: "anatomy-and-physiology-aemt",
        title: "Anatomy and Physiology (AEMT)",
        description: "Building on EMT basics, you'll explore the mechanisms behind circulation and respiration—understanding the 'why' empowers clinical thinking.",
        icon: Activity,
        estimatedMinutes: 28,
        whatYoullLearn: [
          "Calculate and interpret cardiac output and its determinants",
          "Recognize early vs. late signs of inadequate perfusion",
          "Explain V/Q relationships and how they affect oxygenation",
          "Understand the oxyhemoglobin dissociation curve and its clinical significance"
        ],
        encouragingTagline: "Building on your EMT foundation—you're ready for the clinical 'why'!",
        learningObjectives: [
          "Explain cardiac output and the factors that influence it",
          "Identify compensatory mechanisms in early shock",
          "Differentiate ventilation problems from oxygenation problems",
          "Interpret SpO2 in the context of oxygen delivery"
        ],
        completionMessage: "You've mastered AEMT-level physiology! This understanding powers your assessment of every critical patient. Ready to apply it to shock management and cardiac monitoring?"
      },
      {
        slug: "cardiac-system-aemt",
        title: "Cardiac System: Mechanisms and Assessment",
        description: "Dive deeper into cardiac function, electrical conduction, and field assessment techniques.",
        icon: Heart,
        estimatedMinutes: 18,
        whatYoullLearn: [
          "The electrical conduction system in detail",
          "Cardiac output and what affects it",
          "Assessing perfusion in the field"
        ],
        encouragingTagline: "Building on your EMT foundation – you're ready for this!"
      },
      {
        slug: "respiratory-system-aemt",
        title: "Respiratory System: Pathophysiology Basics",
        description: "Understand why breathing problems happen and how to recognize them earlier.",
        icon: Wind,
        estimatedMinutes: 15,
        whatYoullLearn: [
          "Ventilation vs. respiration – the key difference",
          "Common respiratory conditions and their mechanisms",
          "When and how to intervene"
        ],
        encouragingTagline: "Connecting the dots to clinical thinking!"
      },
      {
        slug: "asthma-vs-anaphylaxis-aemt",
        title: "Asthma vs Anaphylaxis (AEMT)",
        description: "Advanced differentiation of asthma and anaphylaxis using capnography, IV medications, and pathophysiology-driven reasoning.",
        icon: Wind,
        estimatedMinutes: 25,
        whatYoullLearn: [
          "[Placeholder] Apply advanced assessment tools to differentiate asthma from anaphylaxis",
          "[Placeholder] Understand the pathophysiology driving each condition",
          "[Placeholder] Administer AEMT-scope medications for both conditions"
        ],
        encouragingTagline: "[Placeholder] Building on your EMT skills—deeper understanding ahead!",
        learningObjectives: [
          "[Placeholder] Use capnography to differentiate bronchospasm from systemic vasodilation",
          "[Placeholder] Explain the pathophysiology of each condition at the AEMT level",
          "[Placeholder] Describe AEMT-level pharmacological interventions for each"
        ],
        completionMessage: "[Placeholder] Excellent—you now have AEMT-level mastery of asthma vs anaphylaxis differentiation!"
      },
      {
        slug: "pulmonary-edema-vs-pneumonia-vs-effusion-aemt",
        title: "Pulmonary Edema vs Pneumonia vs Pleural Effusion (AEMT)",
        description: "Advanced differentiation using capnography, IV fluid decisions, and pathophysiology-driven assessment of pulmonary edema, pneumonia, and pleural effusion.",
        icon: Wind,
        estimatedMinutes: 28,
        whatYoullLearn: [
          "Apply capnography and SpO2 trending to differentiate conditions",
          "Understand Starling forces, V/Q mismatch, and fluid mechanics",
          "Make AEMT-level IV fluid and CPAP decisions"
        ],
        encouragingTagline: "Building on your EMT foundation—pathophysiology powers your decisions!",
        learningObjectives: [
          "Explain the pathophysiology of each condition at the AEMT level",
          "Use capnography waveforms to support differential assessment",
          "Apply appropriate CPAP and IV fluid strategies for each condition",
          "Recognize when to withhold fluids vs. administer aggressively"
        ],
        completionMessage: "Excellent! You now have AEMT-level mastery of pulmonary edema vs pneumonia vs pleural effusion!"
      }
    ]
  },
  {
    level: "paramedic",
    slug: "paramedic-foundations",
    title: "Foundations for Paramedic",
    subtitle: "In-depth for paramedic-level thinking",
    description: "Master the clinical reasoning behind the protocols. We'll explore pathophysiology, pharmacology connections, and critical decision-making.",
    icon: Award,
    badgeLabel: "Advanced Mastery",
    badgeClass: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    cardClass: "ring-2 ring-purple-500/30 border-purple-500/20 hover:ring-purple-500/50",
    subtopics: [
      {
        slug: "anatomy-and-physiology-paramedic",
        title: "Anatomy and Physiology (Paramedic)",
        description: "Master the pathophysiology that drives clinical decision-making—acid-base balance, cellular metabolism, and the mechanisms behind critical interventions.",
        icon: Activity,
        estimatedMinutes: 35,
        whatYoullLearn: [
          "Explain aerobic vs anaerobic metabolism at the cellular level",
          "Interpret acid-base disturbances using pH, CO₂, and HCO₃⁻",
          "Connect electrolyte abnormalities to ECG changes and clinical findings",
          "Apply hemodynamic principles to medication selection"
        ],
        encouragingTagline: "Paramedic-level thinking—where physiology meets pharmacology!",
        learningObjectives: [
          "Explain why oxygen delivery matters at the cellular level",
          "Differentiate respiratory vs metabolic acid-base disorders",
          "Predict ECG changes from potassium abnormalities",
          "Match vasopressor/inotrope mechanisms to clinical scenarios"
        ],
        completionMessage: "You've mastered paramedic-level pathophysiology! This foundation connects to every critical medication and intervention you'll use. Ready for advanced pharmacology?"
      },
      {
        slug: "cardiac-system-paramedic",
        title: "Cardiac System: Advanced Pathophysiology",
        description: "Deep dive into cardiac emergencies, pharmacology ties, and clinical decision-making.",
        icon: Heart,
        estimatedMinutes: 25,
        whatYoullLearn: [
          "Coronary artery anatomy and acute coronary syndromes",
          "Arrhythmia recognition and treatment pathways",
          "Pharmacology connections for cardiac drugs"
        ],
        encouragingTagline: "Paramedic-level thinking – you've earned your place here!"
      },
      {
        slug: "respiratory-system-paramedic",
        title: "Respiratory System: Advanced Assessment and Management",
        description: "Master respiratory emergencies with advanced airway management and ventilation strategies.",
        icon: Wind,
        estimatedMinutes: 22,
        whatYoullLearn: [
          "Advanced airway decision-making",
          "Ventilator basics and CPAP/BiPAP",
          "Respiratory pharmacology essentials"
        ],
        encouragingTagline: "Bringing it all together at the highest level!"
      },
      {
        slug: "asthma-vs-anaphylaxis-paramedic",
        title: "Asthma vs Anaphylaxis (Paramedic)",
        description: "Advanced pathophysiology, pharmacology integration, and complex differential diagnosis for asthma vs anaphylaxis at the paramedic level.",
        icon: Wind,
        estimatedMinutes: 30,
        whatYoullLearn: [
          "[Placeholder] Integrate advanced pharmacology for asthma and anaphylaxis management",
          "[Placeholder] Apply receptor-level understanding to medication selection",
          "[Placeholder] Manage complex and overlapping presentations"
        ],
        encouragingTagline: "[Placeholder] Paramedic-level mastery—where pharmacology meets clinical reasoning!",
        learningObjectives: [
          "[Placeholder] Connect receptor pharmacology to medication mechanisms for both conditions",
          "[Placeholder] Differentiate refractory bronchospasm from anaphylactic shock",
          "[Placeholder] Apply advanced airway and pharmacological interventions"
        ],
        completionMessage: "[Placeholder] You've mastered paramedic-level asthma vs anaphylaxis—outstanding clinical reasoning!"
      },
      {
        slug: "pulmonary-edema-vs-pneumonia-vs-effusion-paramedic",
        title: "Pulmonary Edema vs Pneumonia vs Pleural Effusion (Paramedic)",
        description: "Advanced pathophysiology, pharmacology integration, and ventilation strategies for pulmonary edema, pneumonia, and pleural effusion at the paramedic level.",
        icon: Wind,
        estimatedMinutes: 35,
        whatYoullLearn: [
          "Integrate advanced pharmacology for each condition's management",
          "Apply Starling equation, Light's criteria, and SIRS concepts",
          "Manage ventilation strategies including BiPAP and lung-protective settings"
        ],
        encouragingTagline: "Paramedic-level mastery—where pharmacology meets pathophysiology!",
        learningObjectives: [
          "Connect Starling forces to pharmacological interventions for pulmonary edema",
          "Apply SIRS criteria and sepsis protocols for pneumonia complications",
          "Differentiate transudative from exudative effusions using Light's criteria",
          "Select appropriate ventilation strategies for each condition"
        ],
        completionMessage: "You've mastered paramedic-level pulmonary edema vs pneumonia vs pleural effusion—outstanding clinical reasoning!"
      }
    ]
  }
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}

export function getSubtopic(categorySlug: string, subtopicSlug: string): { category: Category; subtopic: Subtopic } | undefined {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return undefined;
  
  const subtopic = category.subtopics.find(s => s.slug === subtopicSlug);
  if (!subtopic) return undefined;
  
  return { category, subtopic };
}
