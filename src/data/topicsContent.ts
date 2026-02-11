// src/data/topicsContent.ts

export type CategoryLevel = "emt" | "aemt" | "paramedic";

export interface Subsection {
  slug: string;
  title: string;
  objective: string;
  overview: string;
  keyDetails: string[];
  analogy: string;
  features: string;
}

export interface Topic {
  slug: string;
  title: string;
  description: string;
  estimatedMinutes: number;
  subsections: Subsection[];
}

export interface CategoryContent {
  level: CategoryLevel;
  slug: string;
  title: string;
  topics: Topic[];
}

export type CurriculumContent = CategoryContent[];

export const curriculumContent: CurriculumContent = [
  {
    level: "emt",
    slug: "emt-foundations",
    title: "Foundations for EMT",
    topics: [
      {
        slug: "ems-systems-and-professionalism",
        title: "EMS Systems and Professionalism",
        description: "Placeholder – replace with real description later",
        estimatedMinutes: 15,
        subsections: [
          {
            slug: "ems-structure-and-roles",
            title: "EMS Structure and Roles",
            objective: "Placeholder objective",
            overview: "Placeholder overview",
            keyDetails: ["Placeholder detail 1", "Placeholder detail 2"],
            analogy: "Placeholder analogy",
            features: "Placeholder features"
          },
          {
            slug: "legal-and-ethical-issues",
            title: "Legal and Ethical Issues",
            objective: "Placeholder objective",
            overview: "Placeholder overview",
            keyDetails: ["Placeholder detail 1", "Placeholder detail 2"],
            analogy: "Placeholder analogy",
            features: "Placeholder features"
          },
          {
            slug: "communication-and-documentation",
            title: "Communication and Documentation",
            objective: "Placeholder objective",
            overview: "Placeholder overview",
            keyDetails: ["Placeholder detail 1", "Placeholder detail 2"],
            analogy: "Placeholder analogy",
            features: "Placeholder features"
          }
        ]
      },
      {
        slug: "anatomy-and-physiology-basics",
        title: "Anatomy and Physiology Basics",
        description: "Understanding how the body works is the first step to recognizing when something's wrong—we'll break it down so it clicks.",
        estimatedMinutes: 25,
        subsections: [
          {
            slug: "body-systems-overview",
            title: "Body Systems Overview",
            objective: "Understand how major body systems work together to maintain life",
            overview: "The human body is a collection of interconnected systems, each with a specialized role. For EMTs, understanding the cardiovascular and respiratory systems is essential—they're the foundation of every patient assessment.",
            keyDetails: ["11 major body systems in total", "Focus on cardiovascular and respiratory for EMT", "Systems don't work in isolation—failure in one affects others"],
            analogy: "Like a well-run hospital—each department has a specific job, but they all depend on each other to keep patients alive",
            features: "tabs"
          },
          {
            slug: "heart-anatomy",
            title: "Heart Anatomy and Structure",
            objective: "Identify the four chambers, major valves, and key vessels of the heart",
            overview: "The heart is a muscular pump about the size of your fist. It has four chambers that work together to move blood through two separate circuits—one to the lungs, one to the body.",
            keyDetails: ["Right atrium and ventricle (to lungs)", "Left atrium and ventricle (to body)", "Aorta, vena cava, pulmonary arteries and veins"],
            analogy: "Like a house with four rooms—the upstairs rooms (atria) receive visitors, the downstairs rooms (ventricles) push them out the door",
            features: "flashcards"
          },
          {
            slug: "blood-circulation",
            title: "Blood Circulation Pathways",
            objective: "Trace blood flow through pulmonary and systemic circuits",
            overview: "Blood travels in two distinct loops that never mix. The pulmonary circuit takes blood to the lungs for oxygen; the systemic circuit delivers that oxygen to every cell in the body.",
            keyDetails: ["Pulmonary circulation: right heart to lungs and back", "Systemic circulation: left heart to body and back", "Continuous cycle—never stops until death"],
            analogy: "Two highways: one goes to the gas station (lungs) to fill up, the other delivers the fuel (oxygen) to every neighborhood (organ) in the city (body)",
            features: "tabs"
          },
          {
            slug: "respiratory-anatomy",
            title: "Respiratory System Structure",
            objective: "Identify upper and lower airway structures and the path of air",
            overview: "Air travels a specific path from outside to deep in the lungs. Each structure along the way has a job—warming, filtering, and eventually exchanging gases.",
            keyDetails: ["Upper airway: nose, pharynx, larynx", "Lower airway: trachea, bronchi, bronchioles", "Alveoli: the final destination for gas exchange"],
            analogy: "Like a tree—the trunk (trachea) splits into major branches (bronchi), then smaller twigs (bronchioles), ending in leaves (alveoli) where the work happens",
            features: "flashcards"
          },
          {
            slug: "breathing-mechanics",
            title: "Mechanics of Breathing and Gas Exchange",
            objective: "Explain how the diaphragm creates breathing and how oxygen enters the blood",
            overview: "Breathing is both mechanical and chemical. The diaphragm creates pressure changes that move air in and out; at the alveoli, oxygen and carbon dioxide exchange across thin membranes.",
            keyDetails: ["Diaphragm contraction creates negative pressure", "Air flows from high pressure (outside) to low pressure (lungs)", "Gas exchange happens by diffusion across alveolar walls"],
            analogy: "Like a bellows or turkey baster—when you pull the handle (diaphragm contracts), air rushes in; when you release (diaphragm relaxes), air flows out",
            features: "quiz"
          }
        ]
      },
      {
        slug: "respiratory-emergencies-emt",
        title: "EMT Respiratory Emergencies",
        description: "Recognition and BLS management of respiratory distress, including oxygen therapy and airway interventions.",
        estimatedMinutes: 22,
        subsections: [
          {
            slug: "recognizing-respiratory-distress",
            title: "Recognizing Respiratory Distress",
            objective: "Identify signs of adequate and inadequate breathing",
            overview: "Before you can treat a breathing problem, you need to recognize one. Learning to distinguish normal, distressed, and failing respiration is fundamental to every patient encounter.",
            keyDetails: ["Normal vs. abnormal respiratory rates", "Accessory muscle use indicators", "Tripod positioning significance"],
            analogy: "Like a car engine—you can hear when it's running smoothly vs. struggling",
            features: "tabs"
          },
          {
            slug: "common-respiratory-conditions",
            title: "Common Respiratory Conditions",
            objective: "Differentiate asthma, COPD, and allergic reactions in the field",
            overview: "Different conditions cause breathing problems in different ways. Recognizing the patterns helps you anticipate what's coming and choose the right intervention.",
            keyDetails: ["Asthma: reversible bronchospasm", "COPD: chronic airflow limitation", "Allergic reaction: swelling + bronchospasm"],
            analogy: "Like different types of traffic jams—some are temporary, some are structural, some are emergencies",
            features: "flashcards"
          },
          {
            slug: "oxygen-therapy-basics",
            title: "Oxygen Therapy Basics",
            objective: "Select appropriate oxygen delivery devices and flow rates",
            overview: "Oxygen is your most common medication. Understanding which device delivers which concentration—and when to use each—is essential for effective respiratory care.",
            keyDetails: ["Nasal cannula: 1-6 LPM (24-44% O₂)", "Simple mask: 6-10 LPM (35-60% O₂)", "Non-rebreather: 10-15 LPM (90%+ O₂)"],
            analogy: "Like choosing the right hose for watering—sometimes a gentle spray, sometimes you need the firehose",
            features: "tabs"
          },
          {
            slug: "emt-respiratory-interventions",
            title: "EMT Respiratory Interventions",
            objective: "Apply BLS airway management and assist with patient medications",
            overview: "Your interventions can save lives. From positioning to suctioning to medication assists, every action supports the patient's breathing until definitive care arrives.",
            keyDetails: ["Head-tilt chin-lift and jaw thrust", "OPA and NPA insertion", "Medication assists: inhalers, epinephrine"],
            analogy: "Like being a pit crew—quick, precise interventions that keep the patient going",
            features: "flashcards,quiz"
          }
        ]
      },
      {
        slug: "pathophysiology-introduction",
        title: "Pathophysiology Introduction",
        description: "How diseases and injuries affect normal body function -- understanding the 'why' behind patient presentations.",
        estimatedMinutes: 20,
        subsections: [
          {
            slug: "what-is-pathophysiology",
            title: "What Is Pathophysiology?",
            objective: "Understand how diseases and injuries disrupt normal body function",
            overview: "Pathophysiology bridges anatomy and physiology to patient presentations. It answers the critical 'why' -- why is this patient tachycardic? Why is their skin pale? Understanding the mechanisms makes your assessment purposeful.",
            keyDetails: ["Normal physiology vs. pathophysiology", "How disease, injury, and genetics disrupt homeostasis", "The body's constant fight for balance"],
            analogy: "Like understanding why a car won't start vs. just knowing it won't -- the mechanic who understands engines fixes problems faster",
            features: "tabs"
          },
          {
            slug: "cellular-injury-and-death",
            title: "Cellular Injury and Death",
            objective: "Recognize what happens when cells don't get what they need",
            overview: "Cells need oxygen, glucose, and waste removal to survive. When any of these fail, a predictable cascade begins: hypoxia, ischemia, and eventually infarction. Your interventions buy time in the reversible window.",
            keyDetails: ["Hypoxia → ischemia → infarction progression", "Reversible vs. irreversible cell injury", "Necrosis vs. apoptosis"],
            analogy: "Like a plant without water -- it wilts first (reversible), then dies (irreversible). Catching it early makes all the difference",
            features: "flashcards"
          },
          {
            slug: "defense-mechanisms",
            title: "The Body's Defense Mechanisms",
            objective: "Understand inflammation, immune response, and fever as protective responses",
            overview: "The body fights back against injury and infection with inflammation, immune cells, and fever. These defenses usually help -- but sometimes they cause more harm than the original threat.",
            keyDetails: ["Four cardinal signs of inflammation", "Immune response: neutrophils, macrophages, antibodies", "When defenses become the disease"],
            analogy: "Like calling 911 -- help is on the way, but sometimes the response itself causes collateral damage",
            features: "tabs"
          },
          {
            slug: "disease-and-injury-patterns",
            title: "Disease and Injury Patterns",
            objective: "Connect common EMS presentations to underlying pathophysiology",
            overview: "Every patient presentation has an underlying mechanism. Connecting blunt trauma to internal bleeding, infection to sepsis, and cardiac disease to pump failure transforms pattern recognition into clinical understanding.",
            keyDetails: ["Infectious, cardiovascular, and respiratory disease mechanisms", "Blunt vs. penetrating trauma pathophysiology", "Hemorrhage, burns, and crush injury mechanisms"],
            analogy: "Like a detective connecting clues to solve a case -- every sign and symptom tells part of the story",
            features: "flashcards,quiz"
          }
        ]
      },
      {
        slug: "patient-assessment-emt",
        title: "EMT Patient Assessment",
        description: "Scene size-up, primary survey (XABCDE), secondary assessment, and structured patient history using SAMPLE and OPQRST.",
        estimatedMinutes: 25,
        subsections: [
          {
            slug: "scene-size-up-and-safety",
            title: "Scene Size-Up and Safety",
            objective: "Apply systematic scene evaluation before patient contact",
            overview: "Before you touch a patient, you need to evaluate the scene. Scene size-up is your first assessment—safety, mechanism, resources, and anticipating what you'll find.",
            keyDetails: ["BSI and scene safety", "Mechanism of injury / Nature of illness", "Number of patients and resources needed"],
            analogy: "Like a pilot's pre-flight checklist—every item matters, every time",
            features: "tabs"
          },
          {
            slug: "primary-survey-xabcde",
            title: "Primary Survey (XABCDE)",
            objective: "Perform the XABCDE sequence to identify life threats",
            overview: "The primary survey finds and fixes life threats in order of priority. XABCDE puts massive hemorrhage first—a 2025 NREMT update recognizing that bleeding kills before airway problems.",
            keyDetails: ["X: Exsanguinating hemorrhage first", "ABCDE: Airway, Breathing, Circulation, Disability, Exposure", "Intervene as you find problems"],
            analogy: "Like triage for one patient—address the most life-threatening problem first",
            features: "flashcards"
          },
          {
            slug: "secondary-assessment",
            title: "Secondary Assessment",
            objective: "Conduct focused physical exam and gather patient history",
            overview: "After life threats are addressed, the secondary assessment builds the complete picture. Head-to-toe for trauma, focused exam for medical—both gather the information that drives treatment decisions.",
            keyDetails: ["Head-to-toe vs. focused exam", "DCAP-BTLS for trauma", "Baseline vital signs"],
            analogy: "Like a detective gathering evidence—systematic and thorough",
            features: "tabs"
          },
          {
            slug: "patient-history-sample-opqrst",
            title: "Patient History (SAMPLE/OPQRST)",
            objective: "Use structured questioning to gather complete patient information",
            overview: "SAMPLE and OPQRST are your questioning frameworks. They ensure you gather complete information every time, even when calls are chaotic or patients are difficult historians.",
            keyDetails: ["SAMPLE: Signs, Allergies, Medications, Past history, Last intake, Events", "OPQRST: Onset, Provocation, Quality, Region, Severity, Time", "Adapting questions to patient presentation"],
            analogy: "Like a journalist's checklist—who, what, when, where, why, how",
            features: "flashcards,quiz"
        }
      ]
      },
      {
        slug: "pharmacology-emt",
        title: "EMT Pharmacology",
        description: "EMT-scope medications, basic pharmacology principles, and safe medication administration.",
        estimatedMinutes: 20,
        subsections: [
          {
            slug: "pharmacology-basics",
            title: "Pharmacology Basics",
            objective: "Understand drug names, classifications, and basic terminology",
            overview: "Pharmacology might sound intimidating, but it starts with simple concepts. Understanding the language of medications—generic vs. brand names, drug classifications, and indications—gives you the foundation for safe medication administration.",
            keyDetails: ["Generic vs. brand names", "Drug classifications", "Indications and contraindications"],
            analogy: "Like learning a new language—once you know the vocabulary, the conversations start making sense",
            features: "tabs"
          },
          {
            slug: "medication-forms-and-routes",
            title: "Medication Forms and Routes",
            objective: "Identify common medication forms and routes of administration",
            overview: "How a medication is given matters as much as what medication is given. Different routes offer different speeds of onset and different advantages in the field.",
            keyDetails: ["Common medication forms", "Routes: oral, sublingual, inhalation, IM, SQ, intranasal", "Route selection affects onset and effect"],
            analogy: "Like choosing between mail, email, or a phone call—same message, different delivery speeds",
            features: "flashcards"
          },
          {
            slug: "emt-scope-medications",
            title: "EMT-Scope Medications",
            objective: "Know the medications EMTs can administer and assist with",
            overview: "Your medication toolkit as an EMT is focused but powerful. Understanding each medication's purpose, dosing, and contraindications prepares you for confident, safe administration.",
            keyDetails: ["Oxygen, aspirin, oral glucose", "Epinephrine auto-injector, naloxone", "Medication assists: nitroglycerin, inhalers"],
            analogy: "Like a toolkit—each tool has a specific job, and knowing when to use each one makes you effective",
            features: "tabs"
          },
          {
            slug: "medication-safety",
            title: "Medication Safety",
            objective: "Apply the five rights of medication administration and avoid errors",
            overview: "Medication errors can harm patients. The 'Five Rights' are your safety checklist—a systematic approach that prevents mistakes and protects both you and your patients.",
            keyDetails: ["Right patient, drug, dose, route, time", "Documentation requirements", "Error recognition and reporting"],
            analogy: "Like a pre-flight checklist for pilots—every step matters, every time",
            features: "flashcards,quiz"
          }
        ]
      },
      {
        slug: "asthma-vs-anaphylaxis-emt",
        title: "Asthma vs Anaphylaxis",
        description: "Differentiate asthma from anaphylaxis in the field using BLS assessment and interventions.",
        estimatedMinutes: 20,
        subsections: []
      },
      {
        slug: "pulmonary-edema-vs-pneumonia-vs-effusion-emt",
        title: "Pulmonary Edema vs Pneumonia vs Pleural Effusion (EMT)",
        description: "Learn to differentiate three conditions that all cause dyspnea—pulmonary edema, pneumonia, and pleural effusion—using EMT-level assessment tools.",
        estimatedMinutes: 22,
        subsections: []
      },
      {
        slug: "copd-vs-chf-emt",
        title: "COPD vs CHF (EMT)",
        description: "Recognize and differentiate COPD and CHF presentations using BLS assessment skills and basic interventions.",
        estimatedMinutes: 22,
        subsections: [
          {
            slug: "why-copd-vs-chf-matters",
            title: "Why COPD vs CHF Matters",
            objective: "Understand why differentiating COPD and CHF changes your treatment approach",
            overview: "Both COPD and CHF make patients short of breath — but for completely different reasons. One is a plumbing problem (fluid backup), the other is a ventilation problem (airway obstruction). Getting this right changes everything about your treatment.",
            keyDetails: ["COPD: chronic airway obstruction", "CHF: fluid backs up into the lungs", "Both present with dyspnea but require different approaches"],
            analogy: "Like a clogged drain vs. a broken pipe — both cause water problems, but the fix is completely different",
            features: "tabs"
          },
          {
            slug: "copd-basics-emt",
            title: "COPD Basics for EMTs",
            objective: "Identify key COPD presentations and their underlying mechanisms in simple terms",
            overview: "COPD means the airways are chronically narrowed and damaged. Patients live with this daily, but acute exacerbations bring them to you. Recognizing the barrel chest, pursed-lip breathing, and prolonged exhalation tells you this is a ventilation problem.",
            keyDetails: ["Emphysema: destroyed air sacs (pink puffers)", "Chronic bronchitis: inflamed, mucus-filled airways (blue bloaters)", "Barrel chest, pursed-lip breathing, tripod positioning"],
            analogy: "Like breathing through a coffee straw — air goes in okay, but getting it out is the struggle",
            features: "flashcards"
          },
          {
            slug: "chf-basics-emt",
            title: "CHF Basics for EMTs",
            objective: "Identify key CHF presentations and understand fluid backup in simple terms",
            overview: "CHF means the heart can't pump efficiently. Blood backs up — into the lungs (left-sided failure) or the body (right-sided failure). The result is fluid where it shouldn't be, causing crackles, edema, and severe dyspnea.",
            keyDetails: ["Left-sided CHF: fluid in lungs (crackles, pink frothy sputum)", "Right-sided CHF: fluid in body (JVD, pedal edema)", "Orthopnea: can't breathe lying flat"],
            analogy: "Like a backed-up sink — when the pump (heart) can't keep up, water (blood) overflows into places it shouldn't be",
            features: "tabs"
          },
          {
            slug: "emt-copd-chf-assessment",
            title: "EMT Assessment and Interventions",
            objective: "Apply BLS assessment techniques and oxygen therapy for COPD and CHF presentations",
            overview: "Your assessment findings guide your oxygen strategy. COPD patients may rely on hypoxic drive, while CHF patients need high-flow oxygen. Position of comfort, medication assists, and rapid transport complete your BLS toolkit.",
            keyDetails: ["Auscultation: wheezing (COPD) vs. crackles (CHF)", "Oxygen therapy considerations for each", "Position of comfort and medication assists"],
            analogy: "Like being a detective — the clues (sounds, appearance, history) tell you which problem you're dealing with",
            features: "flashcards,quiz"
          }
        ]
      },
      {
        slug: "shock-management-emt",
        title: "EMT Shock Management",
        description: "Recognition, assessment, and BLS interventions for shock states including positioning, oxygen, and bleeding control.",
        estimatedMinutes: 22,
        subsections: [
          {
            slug: "understanding-shock",
            title: "Understanding Shock",
            objective: "Define shock as inadequate tissue perfusion and understand why it kills",
            overview: "Shock is a life-threatening emergency where tissues don't get enough oxygen-rich blood. Understanding what's happening at the cellular level helps you recognize the urgency and intervene effectively.",
            keyDetails: ["Shock = inadequate tissue perfusion", "Cells need oxygen to survive", "The body has compensatory mechanisms"],
            analogy: "Like a city losing power—some areas get priority, but eventually everything fails",
            features: "tabs"
          },
          {
            slug: "recognizing-shock-early",
            title: "Recognizing Shock Early",
            objective: "Identify compensated and decompensated shock through assessment",
            overview: "The body hides shock well—until it can't. Recognizing the early signs of compensation gives you a treatment window before everything crashes.",
            keyDetails: ["Compensated shock signs", "Decompensated shock signs", "The intervention window"],
            analogy: "Like catching a problem before the check engine light comes on—early detection prevents breakdowns",
            features: "flashcards"
          },
          {
            slug: "shock-types-overview",
            title: "Shock Types Overview",
            objective: "Differentiate the four main shock categories and their presentations",
            overview: "Same result, different causes. Hypovolemic, distributive, cardiogenic, and obstructive shock all lead to inadequate perfusion, but their presentations and treatments differ significantly.",
            keyDetails: ["Hypovolemic: volume loss", "Distributive: vasodilation", "Cardiogenic: pump failure", "Obstructive: flow blockage"],
            analogy: "Like four different ways a car can stop—out of gas, engine failure, flat tire, or road blocked",
            features: "tabs"
          },
          {
            slug: "emt-shock-interventions",
            title: "EMT Shock Interventions",
            objective: "Apply BLS interventions: positioning, oxygen, bleeding control, temperature management",
            overview: "Your interventions buy time for definitive care. High-flow oxygen, proper positioning, bleeding control, and temperature management are all within your scope and make a real difference.",
            keyDetails: ["High-flow oxygen", "Shock positioning (legs elevated)", "Bleeding control: tourniquets, direct pressure", "Prevent hypothermia"],
            analogy: "Like a pit crew—quick, focused actions that keep the patient going until the experts arrive",
            features: "flashcards,quiz"
          }
        ]
      }
    ]
  },
  {
    level: "aemt",
    slug: "aemt-foundations",
    title: "Foundations for AEMT",
    topics: [
      {
        slug: "anatomy-and-physiology-aemt",
        title: "Anatomy and Physiology (AEMT)",
        description: "Building on EMT basics, you'll explore the mechanisms behind circulation and respiration—understanding the 'why' empowers clinical thinking.",
        estimatedMinutes: 28,
        subsections: [
          {
            slug: "cardiac-output-and-hemodynamics",
            title: "Cardiac Output and Hemodynamics",
            objective: "Explain cardiac output, stroke volume, and the factors that affect them",
            overview: "Beyond the pump anatomy, understand how much blood moves and why it matters. Cardiac output is the product of stroke volume and heart rate—and multiple factors influence each.",
            keyDetails: ["CO = SV × HR", "Preload, afterload, contractility", "Frank-Starling mechanism"],
            analogy: "Like a garden hose—water pressure depends on pump strength, hose diameter, and how much water is available",
            features: "tabs"
          },
          {
            slug: "perfusion-and-shock-physiology",
            title: "Perfusion and Shock Physiology",
            objective: "Recognize early signs of inadequate perfusion and understand compensatory mechanisms",
            overview: "Perfusion is the goal of circulation—when it fails, cells die. Understanding compensatory mechanisms helps you recognize shock before vital signs crash.",
            keyDetails: ["Oxygen delivery equation", "Compensatory mechanisms", "Decompensated shock signs"],
            analogy: "Like a city's power grid—when demand exceeds supply, non-essential areas lose power first",
            features: "flashcards"
          },
          {
            slug: "advanced-respiratory-physiology",
            title: "Advanced Respiratory Physiology",
            objective: "Understand ventilation vs. respiration and V/Q relationships",
            overview: "Breathing gets air in, but that's only half the job. Understanding the difference between ventilation and oxygenation—and how they can fail independently—is essential for AEMT-level thinking.",
            keyDetails: ["Ventilation vs. oxygenation", "V/Q matching", "Dead space and shunt"],
            analogy: "Like a factory assembly line—both workers (ventilation) and materials (perfusion) must match for the product to be made",
            features: "tabs"
          },
          {
            slug: "oxygen-delivery-and-hemoglobin",
            title: "Oxygen Delivery and Hemoglobin",
            objective: "Explain how oxygen is carried in the blood and factors affecting delivery",
            overview: "Oxygen doesn't just dissolve in blood—it hitches a ride on hemoglobin. Understanding this relationship explains why SpO2 can be misleading.",
            keyDetails: ["Oxyhemoglobin dissociation curve", "Factors shifting the curve", "SpO2 vs. actual oxygen delivery"],
            analogy: "Like a bus route—hemoglobin is the bus, oxygen is the passenger, tissues are the bus stops",
            features: "flashcards,quiz"
          }
        ]
      },
      {
        slug: "advanced-airway-management",
        title: "Advanced Airway Management",
        description: "Supraglottic airways, advanced suctioning, and airway adjuncts beyond BLS.",
        estimatedMinutes: 25,
        subsections: [
          {
            slug: "why-advanced-airways",
            title: "Why Advanced Airways Matter",
            objective: "Understand when BLS airway management isn't enough and what AEMT tools add to patient care",
            overview: "You already know head-tilt chin-lift, OPAs, and NPAs. But sometimes those tools aren't enough. Advanced airways give you options when basic maneuvers fail — and knowing when to escalate is what separates good providers from great ones.",
            keyDetails: ["BLS airway limitations in prolonged resuscitation", "Supraglottic airways as the AEMT escalation tool", "Waveform capnography for confirmation"],
            analogy: "Like upgrading from hand tools to power tools — same goal, but more capability when the job gets tough",
            features: "tabs"
          },
          {
            slug: "supraglottic-airways",
            title: "Supraglottic Airways",
            objective: "Insert and confirm placement of supraglottic devices including King LT and i-gel",
            overview: "Supraglottic airways sit above the vocal cords and create a seal around the larynx. They're easier to place than endotracheal tubes and provide effective ventilation in most patients.",
            keyDetails: ["King LT: sized by patient height, inflatable cuff", "i-gel: gel cuff molds to anatomy without inflation", "Insertion technique and confirmation methods"],
            analogy: "Like a plug that seals above the voice box — it doesn't go through the cords, it sits on top and creates a seal",
            features: "flashcards"
          },
          {
            slug: "cpap-and-oxygenation",
            title: "CPAP and Advanced Oxygenation",
            objective: "Apply CPAP for acute respiratory failure and understand its mechanism of action",
            overview: "CPAP pushes air in with positive pressure, splinting open collapsed airways and pushing fluid out of alveoli. It's a game-changer for CHF and COPD — often avoiding the need for intubation entirely.",
            keyDetails: ["CPAP mechanism: positive pressure splints airways open", "Indications: pulmonary edema, COPD exacerbation", "Contraindications: apnea, hypotension, vomiting"],
            analogy: "Like inflating a tent from the inside — the pressure keeps the walls from collapsing",
            features: "tabs"
          },
          {
            slug: "airway-decision-making",
            title: "Airway Decision-Making",
            objective: "Choose the right airway intervention based on patient presentation and clinical findings",
            overview: "The best airway providers don't just know techniques — they know which technique to use and when. This subsection ties everything together into a clinical decision framework.",
            keyDetails: ["Decision flowchart: conscious vs. unconscious", "When to escalate from BLS to advanced airways", "Capnography as continuous monitoring"],
            analogy: "Like a mechanic choosing the right tool for the job — assessment drives the decision, not habit",
            features: "flashcards,quiz"
          }
        ]
      },
      {
        slug: "iv-access-and-fluid-therapy",
        title: "IV Access and Fluid Therapy",
        description: "Peripheral IV insertion, fluid selection, and administration techniques.",
        estimatedMinutes: 30,
        subsections: []
      },
      {
        slug: "pharmacology-aemt",
        title: "AEMT Pharmacology",
        description: "Building on EMT basics, explore AEMT-scope medications, IV/IO drug administration, and pharmacokinetics fundamentals.",
        estimatedMinutes: 28,
        subsections: [
          {
            slug: "pharmacokinetics-basics",
            title: "Pharmacokinetics Basics",
            objective: "Explain absorption, distribution, metabolism, and excretion (ADME)",
            overview: "Pharmacokinetics is what the body does to drugs—how they're absorbed, distributed, metabolized, and excreted. Understanding these processes helps you predict medication timing and effects.",
            keyDetails: ["ADME: four pharmacokinetic processes", "Bioavailability and onset by route", "Half-life and drug accumulation"],
            analogy: "Like tracking a package—you need to know when it arrives, where it goes, how long it stays, and when it leaves",
            features: "tabs"
          },
          {
            slug: "iv-io-medication-administration",
            title: "IV/IO Medication Administration",
            objective: "Describe IV/IO drug preparation and administration techniques",
            overview: "Direct vascular access changes everything. IV and IO routes provide immediate drug delivery, but require careful preparation and technique. Mastering these skills expands your treatment options significantly.",
            keyDetails: ["IV bolus vs. infusion", "IO access equivalency", "Drug preparation from vials and ampules"],
            analogy: "Like having a direct line instead of going through a switchboard—faster and more reliable delivery",
            features: "flashcards"
          },
          {
            slug: "aemt-scope-medications",
            title: "AEMT-Scope Medications",
            objective: "Identify AEMT-scope medications including emergency drugs",
            overview: "Your medication toolkit expands significantly at the AEMT level. You'll administer drugs for hypoglycemia, anaphylaxis, pain, and respiratory emergencies—each with specific indications and considerations.",
            keyDetails: ["Dextrose and glucagon", "Epinephrine concentrations (1:1,000 vs 1:10,000)", "Albuterol, ondansetron, diphenhydramine"],
            analogy: "Like upgrading from a basic toolkit to a professional set—more options for more situations",
            features: "tabs"
          },
          {
            slug: "drug-calculations",
            title: "Drug Calculations",
            objective: "Perform weight-based and concentration calculations accurately",
            overview: "Math errors in medication dosing can be dangerous. Mastering weight-based dosing, concentration calculations, and infusion math ensures your patients get exactly what they need.",
            keyDetails: ["Weight-based dosing (mg/kg)", "Concentration calculations (mg/mL)", "Volume to administer"],
            analogy: "Like following a recipe—the right ingredients in the right amounts produce the right result",
            features: "flashcards,quiz"
          }
        ]
      },
      {
        slug: "patient-assessment-aemt",
        title: "AEMT Patient Assessment",
        description: "Advanced vital sign integration, shock assessment patterns, and reassessment strategies for dynamic patients.",
        estimatedMinutes: 28,
        subsections: [
          {
            slug: "advanced-vital-signs",
            title: "Advanced Vital Signs",
            objective: "Integrate blood pressure, capnography, and glucose into assessment",
            overview: "AEMT-level assessment adds objective monitoring to clinical observation. Blood pressure context, capnography waveforms, and glucose levels tell stories that guide your interventions.",
            keyDetails: ["Blood pressure: MAP, pulse pressure", "Capnography: ETCO₂ and waveform interpretation", "Orthostatic vitals and glucose"],
            analogy: "Like adding gauges to your dashboard—more data for better decisions",
            features: "tabs"
          },
          {
            slug: "shock-assessment",
            title: "Shock Assessment",
            objective: "Recognize and differentiate shock states through systematic evaluation",
            overview: "Shock is inadequate tissue perfusion—but it has many causes. Recognizing compensated vs. decompensated shock, and differentiating hypovolemic, cardiogenic, distributive, and obstructive types, guides treatment selection.",
            keyDetails: ["Compensated vs. decompensated signs", "Shock types and presentations", "Treatment implications by type"],
            analogy: "Like diagnosing why a car won't run—same symptom, different causes",
            features: "flashcards"
          },
          {
            slug: "pediatric-geriatric-assessment",
            title: "Pediatric and Geriatric Assessment",
            objective: "Adapt assessment techniques for age-specific populations",
            overview: "Children and elderly patients present differently. The Pediatric Assessment Triangle provides rapid evaluation, while geriatric patients often have atypical presentations that mask serious conditions.",
            keyDetails: ["Pediatric Assessment Triangle", "Age-specific vital signs", "Atypical geriatric presentations"],
            analogy: "Like speaking different dialects—same language, different expressions",
            features: "tabs"
          },
          {
            slug: "reassessment-and-trending",
            title: "Reassessment and Trending",
            objective: "Monitor patient status changes and adjust treatment accordingly",
            overview: "Patients are dynamic—what you found on initial assessment may not reflect their current status. Scheduled reassessment and trending vital signs reveal trajectories that predict outcomes.",
            keyDetails: ["Reassessment intervals", "Deterioration red flags", "Documentation of trends"],
            analogy: "Like watching a stock ticker—the trend matters more than any single number",
            features: "flashcards,quiz"
          }
        ]
      },
      {
        slug: "cardiac-monitoring-basics",
        title: "Cardiac Monitoring Basics",
        description: "3-lead ECG placement, rhythm recognition fundamentals, and artifact troubleshooting.",
        estimatedMinutes: 25,
        subsections: [
          {
            slug: "why-cardiac-monitoring",
            title: "Why Cardiac Monitoring Matters",
            objective: "Understand why ECG monitoring is essential for AEMT-level patient care",
            overview: "You've assessed pulses and listened to heart sounds as an EMT. Cardiac monitoring adds a whole new dimension — you can actually see the electrical activity driving those heartbeats. This visibility transforms your assessment from guessing to knowing.",
            keyDetails: ["ECG shows electrical activity, not mechanical function", "Early rhythm detection changes treatment decisions", "Waveform capnography + ECG = powerful combination"],
            analogy: "Like going from listening to an engine to hooking up the diagnostic computer — same car, but now you can see exactly what's happening inside",
            features: "tabs"
          },
          {
            slug: "ecg-basics-and-lead-placement",
            title: "ECG Basics and Lead Placement",
            objective: "Place a 3-lead ECG correctly and understand what the tracing represents",
            overview: "A 3-lead ECG uses three electrodes to create a picture of the heart's electrical activity. Proper placement is critical — garbage in means garbage out. Getting this right is foundational to everything that follows.",
            keyDetails: ["3-lead placement: white (right shoulder), black (left shoulder), red (left lower ribs)", "Lead II is the primary monitoring lead", "Each waveform component represents a specific electrical event"],
            analogy: "Like setting up security cameras — where you put them determines what you can see. Wrong angle means you miss the action",
            features: "flashcards"
          },
          {
            slug: "normal-sinus-rhythm",
            title: "Normal Sinus Rhythm and Waveform Components",
            objective: "Identify normal sinus rhythm and describe each component of the PQRST waveform",
            overview: "Before you can spot abnormal, you need to know normal inside and out. Normal sinus rhythm has a predictable pattern: P wave, QRS complex, T wave — each representing a specific phase of the cardiac cycle.",
            keyDetails: ["P wave: atrial depolarization", "QRS complex: ventricular depolarization (< 0.12 sec)", "T wave: ventricular repolarization", "Normal rate: 60-100 bpm, regular rhythm"],
            analogy: "Like learning to read sheet music — once you know what each note looks like, you can spot when someone plays the wrong one",
            features: "tabs"
          },
          {
            slug: "common-rhythms-and-artifacts",
            title: "Common Rhythms and Artifact Troubleshooting",
            objective: "Recognize sinus bradycardia, sinus tachycardia, and common artifacts on the monitor",
            overview: "Not every abnormal tracing is a cardiac emergency — and not every scary-looking strip is real. Learning to distinguish true rhythm changes from artifact saves you from unnecessary panic and ensures real problems don't get ignored.",
            keyDetails: ["Sinus bradycardia: < 60 bpm, same morphology", "Sinus tachycardia: > 100 bpm, same morphology", "Common artifacts: movement, loose leads, 60-cycle interference"],
            analogy: "Like learning to tell the difference between static on the radio and an actual signal — both look noisy, but only one means something",
            features: "flashcards,quiz"
          }
        ]
      },
      {
        slug: "shock-management",
        title: "AEMT Shock Management",
        description: "IV fluid resuscitation, shock type differentiation, and monitoring treatment response with advanced interventions.",
        estimatedMinutes: 25,
        subsections: [
          {
            slug: "shock-physiology-deep-dive",
            title: "Shock Physiology Deep Dive",
            objective: "Understand compensatory mechanisms and cellular effects of shock",
            overview: "Beyond recognition, understand why shock kills at the cellular level. Oxygen delivery equations, compensatory cascades, and the progression from compensated to irreversible shock guide your treatment intensity.",
            keyDetails: ["Oxygen delivery equation: DO₂ = CO × CaO₂", "Compensatory mechanisms", "Cellular dysfunction and lactate"],
            analogy: "Like understanding how an engine overheats—not just that it's hot, but why and what damage is occurring",
            features: "tabs"
          },
          {
            slug: "iv-fluid-resuscitation",
            title: "IV Fluid Resuscitation",
            objective: "Apply crystalloid therapy with appropriate volume and endpoints",
            overview: "IV access changes what you can do. Understanding crystalloid selection, bolus volumes, and permissive hypotension in trauma lets you resuscitate effectively without causing harm.",
            keyDetails: ["Crystalloid choice: NS vs. LR", "Initial bolus: 500-1000 mL", "Permissive hypotension in penetrating trauma"],
            analogy: "Like refilling a leaking tank—you need to add fluid AND stop the leak",
            features: "flashcards"
          },
          {
            slug: "shock-type-management",
            title: "Shock Type Management",
            objective: "Differentiate treatment approaches for hypovolemic, distributive, cardiogenic, and obstructive shock",
            overview: "Same hypotension, different treatment. Hypovolemic shock needs volume; cardiogenic shock may be harmed by it. Matching treatment to cause is essential AEMT-level thinking.",
            keyDetails: ["Hypovolemic: volume + source control", "Distributive: fluids first, then vasopressors", "Cardiogenic: cautious fluids", "Obstructive: relieve the obstruction"],
            analogy: "Like different car problems requiring different fixes—you can't solve everything with the same tool",
            features: "tabs"
          },
          {
            slug: "monitoring-and-response",
            title: "Monitoring and Response",
            objective: "Assess treatment response and recognize fluid-refractory shock",
            overview: "Did your treatment work? Monitoring perfusion endpoints, trending vital signs, and recognizing when fluids aren't enough guides ongoing resuscitation and escalation decisions.",
            keyDetails: ["Perfusion endpoints: mental status, skin, cap refill", "Vital sign trending", "Fluid-refractory shock recognition"],
            analogy: "Like checking if medicine is working—you need to monitor the response, not just give the treatment",
            features: "flashcards,quiz"
          }
        ]
      },
      {
        slug: "respiratory-emergencies-aemt",
        title: "AEMT Respiratory Emergencies",
        description: "Advanced assessment with capnography, CPAP application, and nebulized medications for respiratory failure.",
        estimatedMinutes: 25,
        subsections: [
          {
            slug: "advanced-assessment-techniques",
            title: "Advanced Assessment Techniques",
            objective: "Use waveform capnography and auscultation findings for clinical decisions",
            overview: "Building on EMT assessment, AEMT-level evaluation adds objective tools like capnography. These help you understand not just that something is wrong, but why.",
            keyDetails: ["Capnography waveform interpretation", "ETCO₂ values and clinical meaning", "SpO₂ limitations"],
            analogy: "Like adding gauges to your dashboard—more information for better decisions",
            features: "tabs"
          },
          {
            slug: "cpap-and-advanced-oxygen-therapy",
            title: "CPAP and Advanced Oxygen Therapy",
            objective: "Apply CPAP for respiratory failure and understand pressure ventilation",
            overview: "CPAP is a game-changer for pulmonary edema and COPD. Understanding how positive pressure helps—and when it's contraindicated—lets you use this powerful tool effectively.",
            keyDetails: ["CPAP mechanism: splinting airways, recruiting alveoli", "Indications: CHF, COPD, asthma", "Contraindications and troubleshooting"],
            analogy: "Like inflating a partially deflated balloon from the inside—pressure keeps it open",
            features: "flashcards"
          },
          {
            slug: "nebulized-medications",
            title: "Nebulized Medications",
            objective: "Administer albuterol and understand bronchodilator mechanisms",
            overview: "Nebulized medications deliver bronchodilators directly where they're needed. Understanding β₂ agonist mechanisms connects pharmacology to respiratory care.",
            keyDetails: ["Albuterol: β₂ agonist mechanism", "Administration technique", "Expected effects and side effects"],
            analogy: "Like delivering the fix directly to the problem—no detours through the bloodstream first",
            features: "tabs"
          },
          {
            slug: "respiratory-failure-vs-distress",
            title: "Respiratory Failure vs. Distress",
            objective: "Distinguish distress from impending failure and intervene appropriately",
            overview: "Knowing when compensation is working versus failing determines your intervention urgency. The 'quiet chest' and other late signs warn of imminent arrest.",
            keyDetails: ["Distress: compensating", "Failure: compensation failing", "The ominous 'quiet chest'"],
            analogy: "Like recognizing when a dam is holding vs. about to break",
            features: "flashcards,quiz"
          }
        ]
      },
      {
        slug: "copd-vs-chf-aemt",
        title: "COPD vs CHF (AEMT)",
        description: "Advanced differentiation using capnography, CPAP, nebulizers, and pathophysiology-driven clinical reasoning.",
        estimatedMinutes: 28,
        subsections: [
          {
            slug: "pathophysiology-copd-chf",
            title: "Pathophysiology of COPD and CHF",
            objective: "Explain the mechanisms of airway obstruction in COPD and pump failure in CHF at the cellular/organ level",
            overview: "Building on EMT basics, we now explore WHY these conditions cause dyspnea. COPD involves V/Q mismatch from destroyed alveoli and airway inflammation. CHF involves increased hydrostatic pressure forcing fluid across capillary membranes into alveoli.",
            keyDetails: ["COPD: V/Q mismatch, air trapping, CO₂ retention", "CHF: increased pulmonary capillary wedge pressure", "Starling forces and pulmonary edema formation"],
            analogy: "Like understanding why a flooded basement happens — is it a drainage problem (COPD) or too much water pressure (CHF)?",
            features: "tabs"
          },
          {
            slug: "advanced-differentiation",
            title: "Advanced Differentiation Tools",
            objective: "Use capnography waveforms, auscultation patterns, and vital sign integration to differentiate COPD from CHF",
            overview: "ETCO₂ waveforms look different in COPD (shark fin) vs. CHF (normal shape, abnormal value). Combined with breath sounds, JVD assessment, and medication history, you can build a clinical picture that drives treatment.",
            keyDetails: ["Capnography: shark fin = bronchospasm (COPD)", "Crackles bilateral = fluid (CHF)", "BNP context and medication history clues"],
            analogy: "Like reading different dashboard warning lights — each pattern points to a specific system failure",
            features: "flashcards"
          },
          {
            slug: "cpap-and-nebulizers",
            title: "CPAP and Nebulized Medications",
            objective: "Apply CPAP for CHF and nebulized bronchodilators for COPD with understanding of mechanisms",
            overview: "CPAP pushes fluid out of alveoli in CHF. Albuterol relaxes bronchospasm in COPD. Understanding these mechanisms helps you choose the right tool — and sometimes use both when presentations overlap.",
            keyDetails: ["CPAP: reduces preload and pushes fluid from alveoli", "Albuterol: β₂ agonist opens airways", "Combination therapy for COPD-CHF overlap"],
            analogy: "Like choosing between a plunger (CPAP for fluid) and a drain snake (nebulizer for mucus/spasm) — match the tool to the clog",
            features: "tabs"
          },
          {
            slug: "aemt-clinical-scenarios",
            title: "AEMT Clinical Scenarios",
            objective: "Apply differential diagnosis and treatment algorithms to realistic COPD vs CHF scenarios",
            overview: "Real patients don't come with labels. Many have BOTH COPD and CHF. This subsection ties pathophysiology, assessment, and treatment together through clinical decision-making frameworks.",
            keyDetails: ["Overlap presentations: COPD + CHF", "Treatment algorithm decision points", "Reassessment and treatment modification"],
            analogy: "Like solving a puzzle where pieces from two different boxes got mixed together — systematic approach reveals the picture",
            features: "flashcards,quiz"
          }
        ]
      },
      {
        slug: "trauma-care-advanced",
        title: "Trauma Care (Advanced)",
        description: "Hemorrhage control, IV access in trauma, and pain management considerations.",
        estimatedMinutes: 24,
        subsections: []
      },
      {
        slug: "medical-emergencies-aemt",
        title: "Medical Emergencies (AEMT)",
        description: "Diabetic emergencies, allergic reactions, and overdose management at AEMT scope.",
        estimatedMinutes: 26,
        subsections: []
      },
      {
        slug: "special-populations-aemt",
        title: "Special Populations (AEMT)",
        description: "Pediatric and geriatric considerations for advanced EMT interventions.",
        estimatedMinutes: 20,
        subsections: []
      },
      {
        slug: "pathophysiology-aemt",
        title: "Pathophysiology (AEMT)",
        description: "Cellular adaptation, hypoperfusion cascades, and systemic inflammatory responses at the AEMT level.",
        estimatedMinutes: 25,
        subsections: [
          {
            slug: "cellular-adaptation-and-stress",
            title: "Cellular Adaptation and Stress",
            objective: "Understand how cells adapt to stress before they fail",
            overview: "Cells don't just die when stressed -- they adapt first. Hypertrophy, hyperplasia, atrophy, and metaplasia are predictable responses that can be adaptive or pathological. Recognizing these helps you understand chronic disease presentations.",
            keyDetails: ["Hypertrophy: increased cell size", "Hyperplasia: increased cell number", "Atrophy and metaplasia as adaptive responses"],
            analogy: "Like a muscle getting bigger from weightlifting -- adaptation to stress is normal until the stress exceeds the body's capacity",
            features: "tabs"
          },
          {
            slug: "hypoperfusion-cascade",
            title: "Hypoperfusion Cascade",
            objective: "Trace the progression from inadequate perfusion to organ failure",
            overview: "Shock progresses through predictable stages: compensatory, progressive, and irreversible. Understanding the oxygen delivery equation and lactate accumulation helps you assess severity and guide resuscitation.",
            keyDetails: ["DO₂ = CO × O₂ content", "Anaerobic metabolism: 2 ATP vs. 36 ATP", "Compensatory → progressive → irreversible stages"],
            analogy: "Like a bank account running low -- the body borrows from reserves, then cuts spending, then goes bankrupt",
            features: "flashcards"
          },
          {
            slug: "inflammatory-immune-responses",
            title: "Inflammatory and Immune Responses",
            objective: "Differentiate local inflammation from systemic inflammatory response",
            overview: "Local inflammation heals. Systemic inflammation kills. Understanding SIRS criteria, the sepsis spectrum, and immune suppression connects your assessment to treatment urgency.",
            keyDetails: ["Local vs. systemic inflammation", "SIRS criteria: temp, HR, RR, WBC", "Sepsis spectrum: SIRS → sepsis → severe sepsis → septic shock"],
            analogy: "Like a fire alarm -- helpful when it's one room, catastrophic when the whole building is ablaze",
            features: "tabs"
          },
          {
            slug: "fluid-electrolyte-pathophysiology",
            title: "Fluid and Electrolyte Pathophysiology",
            objective: "Connect fluid shifts and electrolyte imbalances to clinical presentations",
            overview: "Fluid compartments, osmotic shifts, and electrolyte imbalances drive many emergency presentations. Understanding why dehydration causes tachycardia, why hyperkalemia causes arrest, and why fluid overload causes crackles connects physiology to intervention.",
            keyDetails: ["Fluid compartments: ICF vs. ECF", "Osmosis and fluid shifts", "Critical electrolyte imbalances: K⁺, Na⁺, Ca²⁺"],
            analogy: "Like managing water levels in a dam system -- too much, too little, or in the wrong place all cause problems",
            features: "flashcards,quiz"
          }
        ]
      },
      {
        slug: "asthma-vs-anaphylaxis-aemt",
        title: "Asthma vs Anaphylaxis (AEMT)",
        description: "Advanced differentiation of asthma and anaphylaxis using capnography, IV medications, and pathophysiology-driven reasoning.",
        estimatedMinutes: 25,
        subsections: []
      },
      {
        slug: "pulmonary-edema-vs-pneumonia-vs-effusion-aemt",
        title: "Pulmonary Edema vs Pneumonia vs Pleural Effusion (AEMT)",
        description: "Advanced differentiation using capnography, IV fluid decisions, and pathophysiology-driven assessment of pulmonary edema, pneumonia, and pleural effusion.",
        estimatedMinutes: 28,
        subsections: []
      }
    ]
  },
  {
    level: "paramedic",
    slug: "paramedic-foundations",
    title: "Foundations for Paramedic",
    topics: [
      {
        slug: "anatomy-and-physiology-paramedic",
        title: "Anatomy and Physiology (Paramedic)",
        description: "Master the pathophysiology that drives clinical decision-making—acid-base balance, cellular metabolism, and the mechanisms behind critical interventions.",
        estimatedMinutes: 35,
        subsections: [
          {
            slug: "cellular-metabolism-and-atp",
            title: "Cellular Metabolism and ATP Production",
            objective: "Explain aerobic vs anaerobic metabolism and why oxygen delivery matters at the cellular level",
            overview: "Every intervention you perform ultimately aims to keep cells alive. Understanding how cells make energy—and what happens when they can't—connects your treatment to the cellular level.",
            keyDetails: ["Aerobic metabolism", "Anaerobic metabolism", "Lactate production", "ATP as energy currency"],
            analogy: "Like a power plant—efficient with oxygen, emergency generators without",
            features: "tabs"
          },
          {
            slug: "acid-base-balance",
            title: "Acid-Base Balance and Blood Gases",
            objective: "Interpret acid-base disturbances and understand compensatory mechanisms",
            overview: "pH is one of the most tightly regulated values in the body. Understanding acid-base physiology helps you interpret blood gases and predict patient deterioration.",
            keyDetails: ["pH, PaCO₂, HCO₃⁻", "Respiratory vs metabolic causes", "Compensation mechanisms"],
            analogy: "Like a see-saw—respiratory and metabolic systems balance each other",
            features: "flashcards"
          },
          {
            slug: "electrolyte-physiology",
            title: "Electrolyte Physiology and Cardiac Function",
            objective: "Understand how electrolyte abnormalities affect cardiac rhythm and muscle function",
            overview: "Sodium, potassium, calcium, and magnesium drive cellular function. Their imbalances cause life-threatening arrhythmias and predictable ECG changes.",
            keyDetails: ["Na⁺/K⁺ pump", "Calcium in contraction", "Potassium and cardiac rhythms"],
            analogy: "Like spark plugs in an engine—right balance for proper firing",
            features: "tabs"
          },
          {
            slug: "advanced-hemodynamics",
            title: "Advanced Hemodynamics and Pharmacology Ties",
            objective: "Connect hemodynamic principles to medication mechanisms of action",
            overview: "Vasopressors, inotropes, and fluid resuscitation all target specific hemodynamic variables. Understanding these connections makes medication selection logical rather than memorized.",
            keyDetails: ["Vasopressor mechanisms", "Inotrope vs chronotrope effects", "MAP and organ perfusion"],
            analogy: "Like tuning a complex machine—each dial adjusts a specific function",
            features: "flashcards,quiz"
          }
        ]
      },
      {
        slug: "advanced-pharmacology",
        title: "Advanced Pharmacology",
        description: "Drug classes, mechanisms of action, and paramedic-scope medication protocols.",
        estimatedMinutes: 35,
        subsections: [
          {
            slug: "pharmacodynamics",
            title: "Pharmacodynamics",
            objective: "Explain receptor theory, agonists/antagonists, and dose-response relationships",
            overview: "Pharmacodynamics is what drugs do to the body—how they interact with receptors to produce effects. Understanding these mechanisms lets you predict drug effects and choose the right medication for each clinical scenario.",
            keyDetails: ["Receptor theory and binding", "Agonists, antagonists, partial agonists", "Dose-response relationships"],
            analogy: "Like understanding how a key works in a lock—some keys turn it, some block it, some only turn halfway",
            features: "tabs"
          },
          {
            slug: "cardiovascular-pharmacology",
            title: "Cardiovascular Pharmacology",
            objective: "Connect cardiac drug mechanisms to clinical scenarios",
            overview: "Cardiovascular medications target specific receptors and pathways. Understanding the autonomic nervous system and receptor subtypes lets you choose and titrate medications based on hemodynamic goals.",
            keyDetails: ["Alpha and beta receptors", "Vasopressors vs. inotropes", "Antiarrhythmic mechanisms"],
            analogy: "Like tuning an instrument—each adjustment changes a specific aspect of the sound",
            features: "flashcards"
          },
          {
            slug: "emergency-pharmacology",
            title: "Emergency Pharmacology",
            objective: "Apply ACLS and emergency medication protocols with understanding",
            overview: "Emergency medications aren't just memorized—they're understood. When you know why epinephrine works in cardiac arrest or why adenosine must be given fast, you become a more effective clinician.",
            keyDetails: ["Cardiac arrest medications", "ACLS drug mechanisms", "Push-dose pressors"],
            analogy: "Like knowing not just which button to press, but why that button produces that result",
            features: "tabs"
          },
          {
            slug: "pharmacology-clinical-integration",
            title: "Pharmacology Clinical Integration",
            objective: "Integrate pharmacology knowledge into critical decision-making",
            overview: "This is where it all comes together—connecting drug mechanisms to patient presentations and clinical reasoning. You'll apply pharmacology to real scenarios across the spectrum of paramedic practice.",
            keyDetails: ["Matching drugs to hemodynamic problems", "Pediatric and geriatric considerations", "Drug interactions and contraindications"],
            analogy: "Like a master chef who doesn't just follow recipes but understands why ingredients work together",
            features: "flashcards,quiz"
          }
        ]
      },
      {
        slug: "advanced-cardiac-life-support",
        title: "Advanced Cardiac Life Support",
        description: "ACLS algorithms, rhythm interpretation, and cardiac arrest management.",
        estimatedMinutes: 40,
        subsections: []
      },
      {
        slug: "12-lead-ecg-interpretation",
        title: "12-Lead ECG Interpretation",
        description: "STEMI recognition, axis deviation, and ischemia patterns.",
        estimatedMinutes: 45,
        subsections: [
          {
            slug: "from-3-lead-to-12-lead",
            title: "From 3-Lead to 12-Lead",
            objective: "Understand why 12 leads provide a complete picture of cardiac electrical activity",
            overview: "You've mastered the 3-lead at the AEMT level. Now you're adding nine more perspectives. A 12-lead ECG is like walking around the heart with a camera — each lead captures a different angle, revealing problems invisible from just one view.",
            keyDetails: ["12 leads = 12 different views of the same electrical event", "Limb leads (I, II, III, aVR, aVL, aVF) view frontal plane", "Precordial leads (V1-V6) view horizontal plane"],
            analogy: "Like photographing a building from 12 angles — one photo might miss the crack in the wall, but the full set reveals everything",
            features: "tabs"
          },
          {
            slug: "systematic-ecg-interpretation",
            title: "Systematic ECG Interpretation",
            objective: "Apply a structured approach to reading every 12-lead ECG consistently",
            overview: "Paramedics who miss STEMIs usually didn't follow a system. A structured approach — rate, rhythm, axis, intervals, ST changes — ensures you catch what matters every time. Systems beat talent when talent doesn't have a system.",
            keyDetails: ["Step 1: Rate and rhythm", "Step 2: Axis determination (normal, LAD, RAD)", "Step 3: Intervals (PR, QRS, QT)", "Step 4: ST segment and T wave analysis"],
            analogy: "Like a pilot's pre-flight checklist — you check every item, every time, because skipping steps crashes planes",
            features: "flashcards"
          },
          {
            slug: "stemi-recognition",
            title: "STEMI Recognition and Localization",
            objective: "Identify ST-elevation patterns and localize the affected coronary artery",
            overview: "STEMI recognition is the single most time-critical ECG skill for paramedics. Minutes of delay equal myocardial muscle loss. Knowing which leads show elevation — and which artery is occluded — activates the cath lab and saves lives.",
            keyDetails: ["ST elevation ≥ 1mm in 2+ contiguous leads", "Anterior STEMI: V1-V4 (LAD occlusion)", "Inferior STEMI: II, III, aVF (RCA occlusion)", "Lateral STEMI: I, aVL, V5-V6 (LCx occlusion)"],
            analogy: "Like a fire alarm that tells you which room is on fire — the lead grouping points you to the blocked artery",
            features: "tabs"
          },
          {
            slug: "beyond-stemi-ecg-patterns",
            title: "Beyond STEMI: Ischemia, Injury, and Mimics",
            objective: "Differentiate STEMI from other ST changes and recognize common ECG mimics",
            overview: "Not every ST elevation is a heart attack, and some heart attacks don't show ST elevation. Understanding reciprocal changes, NSTEMI patterns, and common mimics (pericarditis, early repolarization, LVH) prevents both missed diagnoses and false activations.",
            keyDetails: ["Reciprocal ST depression confirms STEMI", "NSTEMI: ST depression and T wave inversion without elevation", "Mimics: pericarditis (diffuse elevation), BER, LVH strain pattern"],
            analogy: "Like a detective who knows that not every fire is arson — some are accidents, some are natural, and jumping to conclusions wastes resources",
            features: "flashcards,quiz"
          }
        ]
      },
      {
        slug: "respiratory-emergencies-paramedic",
        title: "Paramedic Respiratory Emergencies",
        description: "Advanced pathophysiology, airway decision-making, and ventilator management for critical respiratory patients.",
        estimatedMinutes: 30,
        subsections: [
          {
            slug: "respiratory-pathophysiology",
            title: "Respiratory Pathophysiology",
            objective: "Connect V/Q mismatch, shunt, and dead space to clinical presentations",
            overview: "Why doesn't oxygen help some patients? Understanding shunt, dead space, and diffusion impairment explains refractory hypoxemia and guides treatment selection.",
            keyDetails: ["Shunt (low V/Q): blood bypasses ventilation", "Dead space (high V/Q): ventilation without perfusion", "Diffusion impairment mechanisms"],
            analogy: "Like understanding why some traffic never reaches its destination—different roadblocks require different solutions",
            features: "tabs"
          },
          {
            slug: "advanced-airway-decision-making",
            title: "Advanced Airway Decision-Making",
            objective: "Apply clinical criteria for intubation vs. non-invasive ventilation",
            overview: "Not every dyspneic patient needs a tube. Knowing when NIV is appropriate and when to secure an airway—plus planning for difficult airways—defines advanced practice.",
            keyDetails: ["Intubation indications", "Benefits of NIV first", "LEMON difficult airway predictors"],
            analogy: "Like knowing when to call for backup before you're in trouble—anticipation beats reaction",
            features: "flashcards"
          },
          {
            slug: "ventilator-basics-and-peep",
            title: "Ventilator Basics and PEEP",
            objective: "Understand basic ventilator settings and oxygenation strategies",
            overview: "Ventilators are complex but the core concepts are simple: FiO₂ and PEEP control oxygenation; rate and volume control ventilation. Knowing this lets you troubleshoot and optimize.",
            keyDetails: ["Oxygenation: FiO₂ and PEEP", "Ventilation: rate and tidal volume", "Basic AC mode and PEEP effects"],
            analogy: "Like learning the main controls before all the advanced features—master the basics first",
            features: "tabs"
          },
          {
            slug: "respiratory-clinical-integration",
            title: "Respiratory Clinical Integration",
            objective: "Integrate assessment, pathophysiology, and treatment into clinical reasoning",
            overview: "Putting it all together—connecting patient presentation to pathophysiology to targeted treatment. This is where COPD exacerbations, ARDS, and PE become clinically distinct.",
            keyDetails: ["Case-based decision pathways", "Acid-base integration", "Chronic vs. acute presentations"],
            analogy: "Like conducting an orchestra—all the instruments playing together create the complete picture",
            features: "flashcards,quiz"
          }
        ]
      },
      {
        slug: "advanced-airway-intubation",
        title: "Advanced Airway & Intubation",
        description: "Endotracheal intubation, RSI concepts, and surgical airway basics.",
        estimatedMinutes: 35,
        subsections: [
          {
            slug: "the-definitive-airway",
            title: "The Definitive Airway",
            objective: "Understand endotracheal intubation indications, equipment, and technique for securing a definitive airway",
            overview: "Endotracheal intubation is the gold standard for airway control — a tube passed through the vocal cords into the trachea. It provides the most secure airway with aspiration protection, but requires skill, preparation, and respect for the procedure.",
            keyDetails: ["ETI indications and contraindications", "Equipment setup and sizing", "Direct and video laryngoscopy technique"],
            analogy: "Like parking a car in a tight garage — you need to see where you're going and adjust precisely",
            features: "tabs"
          },
          {
            slug: "rapid-sequence-intubation",
            title: "Rapid Sequence Intubation (RSI)",
            objective: "Apply the 7 P's of RSI with appropriate pharmacology for medication-facilitated intubation",
            overview: "RSI uses medications to sedate and paralyze a patient for intubation. It's like a pilot's pre-flight checklist — every step in sequence, nothing skipped. Understanding the pharmacology behind each drug makes you a safer, more effective provider.",
            keyDetails: ["The 7 P's of RSI sequence", "Induction agents: etomidate, ketamine", "Paralytics: succinylcholine vs. rocuronium"],
            analogy: "Like a pilot's pre-flight checklist — every step matters, every time, in the right order",
            features: "flashcards"
          },
          {
            slug: "difficult-airway-management",
            title: "Difficult Airway Management",
            objective: "Predict and manage difficult airways using LEMON assessment and structured backup plans",
            overview: "The best intubators aren't the ones who never fail — they're the ones who always have a backup plan. Predicting difficulty before you start and knowing your Plan B, C, and D keeps patients safe.",
            keyDetails: ["LEMON difficult airway assessment", "Bougie-assisted and video laryngoscopy", "Failed airway algorithm: Plan B through D"],
            analogy: "Like checking the weather before a hike — anticipating problems prevents emergencies",
            features: "tabs"
          },
          {
            slug: "surgical-airways-integration",
            title: "Surgical Airways and Clinical Integration",
            objective: "Perform cricothyrotomy as a last resort and integrate airway decisions into overall clinical reasoning",
            overview: "Cricothyrotomy is the emergency exit — you hope you never need it, but when you do, there's no substitute. This subsection covers the procedure and ties the entire airway management pathway together from BLS through surgical.",
            keyDetails: ["Cricothyrotomy indications and technique", "Post-intubation management", "Complete airway algorithm integration"],
            analogy: "Like cutting a new door when all the windows and doors are blocked — rare but lifesaving",
            features: "flashcards,quiz"
          }
        ]
      },
      {
        slug: "pathophysiology-deep-dive",
        title: "Pathophysiology Deep Dive",
        description: "Cellular metabolism under stress, acid-base interpretation, SIRS-sepsis-MODS continuum, and genetic disease mechanisms.",
        estimatedMinutes: 35,
        subsections: [
          {
            slug: "cellular-metabolism-under-stress",
            title: "Cellular Metabolism Under Stress",
            objective: "Connect aerobic/anaerobic metabolism to clinical decision-making in shock and resuscitation",
            overview: "Every resuscitation targets cellular energy production. Understanding aerobic vs. anaerobic pathways, mitochondrial dysfunction, and reperfusion injury explains why time matters and why restoring flow can paradoxically cause damage.",
            keyDetails: ["Aerobic: 36-38 ATP via glycolysis, Krebs, ETC", "Anaerobic: 2 ATP + lactate accumulation", "Reperfusion injury and cytopathic hypoxia"],
            analogy: "Like a city losing its power grid -- emergency generators keep essentials running briefly, but they produce toxic exhaust and can't sustain the city",
            features: "tabs"
          },
          {
            slug: "acid-base-pathophysiology",
            title: "Acid-Base Pathophysiology",
            objective: "Interpret acid-base disturbances and predict compensatory responses",
            overview: "pH interpretation is a paramedic-level skill that guides ventilation and fluid management. Understanding respiratory vs. metabolic causes, compensation limits, and mixed disorders transforms ABG numbers into clinical decisions.",
            keyDetails: ["Respiratory acidosis/alkalosis mechanisms", "Metabolic acidosis/alkalosis mechanisms", "Compensation limits and mixed disorders"],
            analogy: "Like a seesaw -- respiratory and metabolic systems balance each other, but the seesaw has limits on how far each side can go",
            features: "flashcards"
          },
          {
            slug: "systemic-inflammatory-response",
            title: "Systemic Inflammatory Response",
            objective: "Understand the SIRS-to-sepsis-to-MODS continuum and its clinical implications",
            overview: "When inflammation escapes local control, it becomes the disease. Cytokine storms cause vasodilation, capillary leak, and myocardial depression simultaneously. Understanding this cascade explains why sepsis kills and how to intervene at each stage.",
            keyDetails: ["Cytokine storm mechanics (TNF-alpha, IL-1, IL-6)", "Sepsis pathophysiology: low SVR + capillary leak + myocardial depression", "MODS progression: lungs → kidneys → liver → brain"],
            analogy: "Like a wildfire that started as a campfire -- once it escapes containment, it damages everything in its path",
            features: "tabs"
          },
          {
            slug: "genetic-congenital-acquired-disease",
            title: "Genetic, Congenital, and Acquired Disease",
            objective: "Differentiate disease mechanisms and connect them to assessment and treatment priorities",
            overview: "Disease origins matter for field care. Sickle cell crises need oxygen and hydration. Cystic fibrosis patients have complex medication regimens. Autoimmune patients are immunosuppressed. Understanding mechanisms guides your approach.",
            keyDetails: ["Genetic: sickle cell, CF, hemophilia", "Congenital vs. genetic distinction", "Acquired diseases: atherosclerosis, COPD, neoplasia"],
            analogy: "Like understanding a building's blueprint vs. its renovation history -- knowing how it was built AND what changed tells you where the weaknesses are",
            features: "flashcards,quiz"
          }
        ]
      },
      {
        slug: "critical-care-transport",
        title: "Critical Care Transport",
        description: "Ventilator management, vasopressors, and interfacility transfers.",
        estimatedMinutes: 30,
        subsections: []
      },
      {
        slug: "pediatric-advanced-life-support",
        title: "Pediatric Advanced Life Support",
        description: "PALS algorithms, pediatric resuscitation, and age-specific interventions.",
        estimatedMinutes: 35,
        subsections: []
      },
      {
        slug: "trauma-systems-and-triage",
        title: "Trauma Systems and Triage",
        description: "Trauma center levels, field triage criteria, and mass casualty management.",
        estimatedMinutes: 25,
        subsections: []
      },
      {
        slug: "patient-assessment-paramedic",
        title: "Paramedic Patient Assessment",
        description: "Differential diagnosis development, advanced physical exam, and clinical decision integration for field impressions.",
        estimatedMinutes: 32,
        subsections: [
          {
            slug: "differential-diagnosis",
            title: "Differential Diagnosis",
            objective: "Develop and narrow differential diagnoses through systematic evaluation",
            overview: "Assessment isn't just data collection—it's hypothesis testing. Building a differential, identifying 'can't miss' diagnoses, and systematically ruling in or out possibilities is the foundation of paramedic clinical reasoning.",
            keyDetails: ["Building a working differential", "Can't miss diagnoses", "Ruling in vs. ruling out"],
            analogy: "Like a detective with multiple suspects—gather evidence to narrow the field",
            features: "tabs"
          },
          {
            slug: "physical-exam-mastery",
            title: "Physical Exam Mastery",
            objective: "Perform comprehensive exam with clinical correlation",
            overview: "Paramedic-level physical exam finds what others miss. JVD, breath sounds, abdominal findings, pupil responses—each finding connects to pathophysiology and guides treatment.",
            keyDetails: ["Subtle findings with major implications", "Clinical correlation to pathology", "Systematic vs. focused approach"],
            analogy: "Like reading between the lines—the body tells you what's wrong if you know how to look",
            features: "flashcards"
          },
          {
            slug: "critical-patient-recognition",
            title: "Critical Patient Recognition",
            objective: "Identify subtle signs of patient deterioration before decompensation",
            overview: "The 'sick' gestalt, pre-arrest recognition, and time-critical presentations—recognizing deterioration before vital signs crash gives you the intervention window that saves lives.",
            keyDetails: ["The 'sick' vs 'not sick' gestalt", "Pre-arrest warning signs", "Time-critical presentations"],
            analogy: "Like sensing a storm before it hits—experience teaches you to read the signs",
            features: "tabs"
          },
          {
            slug: "clinical-decision-integration",
            title: "Clinical Decision Integration",
            objective: "Synthesize assessment findings into treatment decisions",
            overview: "This is where it all comes together—field impressions, treatment selection, hospital communication, and adapting when new information emerges. Clinical reasoning connects assessment to action.",
            keyDetails: ["Field impressions", "Treatment-diagnosis connection", "Adapting to new data"],
            analogy: "Like a conductor bringing all instruments together—every piece contributes to the whole",
            features: "flashcards,quiz"
          }
        ]
      },
      {
        slug: "copd-vs-chf-paramedic",
        title: "COPD vs CHF (Paramedic)",
        description: "Advanced pathophysiology, pharmacology integration, BiPAP/ventilator strategies, and complex differential diagnosis for respiratory-cardiac overlap.",
        estimatedMinutes: 35,
        subsections: [
          {
            slug: "advanced-pathophysiology-copd-chf",
            title: "Advanced Pathophysiology",
            objective: "Analyze COPD and CHF at the cellular and hemodynamic level including acid-base implications",
            overview: "COPD creates chronic respiratory acidosis with renal compensation. CHF creates cardiogenic pulmonary edema through Starling force imbalance. Understanding these at the molecular level — V/Q ratios, Starling equation, neurohormonal activation — drives paramedic-level treatment decisions.",
            keyDetails: ["V/Q mismatch quantification in COPD", "Starling equation and hydrostatic vs. oncotic pressure", "Neurohormonal activation: RAAS, SNS, BNP"],
            analogy: "Like understanding fluid dynamics in a complex plumbing system — pressure, flow, and resistance all interact",
            features: "tabs"
          },
          {
            slug: "pharmacology-copd-chf",
            title: "Pharmacology for COPD and CHF",
            objective: "Select and administer medications based on pathophysiology: bronchodilators, nitroglycerin, diuretics, and their mechanisms",
            overview: "Paramedic pharmacology targets the specific mechanism. Nitroglycerin reduces preload in CHF. Ipratropium adds anticholinergic bronchodilation to COPD treatment. Understanding drug mechanisms prevents harmful combinations and optimizes outcomes.",
            keyDetails: ["Nitroglycerin: venodilation reduces preload", "Ipratropium + albuterol: dual bronchodilation", "Furosemide: loop diuretic mechanism", "Magnesium for refractory bronchospasm"],
            analogy: "Like a pharmacist matching the right key to each lock — every drug has a specific target receptor",
            features: "flashcards"
          },
          {
            slug: "bipap-ventilation-strategies",
            title: "BiPAP and Ventilation Strategies",
            objective: "Apply BiPAP, optimize ventilator settings, and manage acid-base balance in COPD and CHF",
            overview: "BiPAP adds expiratory support that CPAP alone can't provide. In COPD, it reduces work of breathing and improves CO₂ clearance. In CHF, it provides the same preload reduction as CPAP plus ventilatory support. Understanding IPAP/EPAP adjustments is a paramedic-level skill.",
            keyDetails: ["BiPAP: IPAP for ventilation, EPAP for oxygenation", "COPD: higher IPAP to overcome air trapping", "CHF: EPAP focus for alveolar recruitment", "Acid-base monitoring with capnography"],
            analogy: "Like adjusting both the gas and brake in a car — IPAP pushes air in, EPAP keeps things open",
            features: "tabs"
          },
          {
            slug: "complex-differential-integration",
            title: "Complex Differential and Clinical Integration",
            objective: "Manage COPD-CHF overlap, acute-on-chronic presentations, and integrate 12-lead findings into respiratory differential diagnosis",
            overview: "The sickest patients have both COPD and CHF simultaneously. Acute-on-chronic presentations require balancing competing treatment priorities. Integrating ECG findings, lab values, and clinical reasoning separates competent from exceptional paramedics.",
            keyDetails: ["COPD-CHF overlap management", "Acute-on-chronic exacerbation", "12-lead integration: ischemia-driven CHF", "Treatment prioritization framework"],
            analogy: "Like conducting an orchestra with musicians playing from two different scores — harmonizing competing needs into a unified treatment plan",
            features: "flashcards,quiz"
          }
        ]
      },
      {
        slug: "operations-and-leadership",
        title: "Operations and Leadership",
        description: "Scene management, crew resource management, and EMS leadership principles.",
        estimatedMinutes: 22,
        subsections: []
      },
      {
        slug: "shock-management-paramedic",
        title: "Paramedic Shock Management",
        description: "Vasopressor therapy, advanced hemodynamics, and clinical decision-making for refractory shock states.",
        estimatedMinutes: 30,
        subsections: [
          {
            slug: "advanced-shock-pathophysiology",
            title: "Advanced Shock Pathophysiology",
            objective: "Connect cellular dysfunction, lactate production, and multi-organ failure",
            overview: "Even with restored blood pressure, patients can die from microcirculatory dysfunction. Understanding inflammatory cascades, multi-organ failure progression, and lactate as a marker guides advanced resuscitation.",
            keyDetails: ["Microcirculatory dysfunction", "Inflammatory cascades in sepsis", "Multi-organ failure progression", "Lactate as a marker"],
            analogy: "Like understanding why a repaired pipe still leaks—the damage goes deeper than the obvious fix",
            features: "tabs"
          },
          {
            slug: "vasopressor-therapy",
            title: "Vasopressor Therapy",
            objective: "Select and titrate vasopressors based on hemodynamic goals",
            overview: "When fluids aren't enough, vasopressors restore vascular tone. Understanding norepinephrine, epinephrine, and vasopressin—their mechanisms and indications—lets you choose the right drug for the right situation.",
            keyDetails: ["Norepinephrine: first-line for septic shock", "Epinephrine: anaphylaxis and cardiac arrest", "Vasopressin: adjunctive therapy", "Push-dose pressors for bridge therapy"],
            analogy: "Like different tools for different jobs—a hammer won't fix every problem",
            features: "flashcards"
          },
          {
            slug: "cardiogenic-obstructive-shock",
            title: "Cardiogenic and Obstructive Shock",
            objective: "Manage pump failure and mechanical obstruction with advanced interventions",
            overview: "Cardiogenic shock needs pump support, not vasoconstriction. Obstructive shock needs the obstruction relieved. Understanding these distinct pathways prevents harmful treatment choices.",
            keyDetails: ["Cardiogenic: inotropes over vasopressors", "Dobutamine for pump failure", "Obstructive emergencies: needle decompression, pericardiocentesis"],
            analogy: "Like knowing when to unclog vs. when to boost pressure—wrong choice makes it worse",
            features: "tabs"
          },
          {
            slug: "shock-clinical-integration",
            title: "Shock Clinical Integration",
            objective: "Integrate hemodynamic monitoring, treatment selection, and clinical decision-making",
            overview: "This is where it all comes together. MAP equations, vasopressor selection, lactate clearance goals—connecting physiology to treatment creates the clinical reasoning that guides advanced shock management.",
            keyDetails: ["MAP = CO × SVR application", "Hemodynamic targets", "Lactate clearance goals", "Urine output as perfusion marker"],
            analogy: "Like a conductor bringing the orchestra together—every piece must work in harmony",
            features: "flashcards,quiz"
          }
        ]
      },
      {
        slug: "asthma-vs-anaphylaxis-paramedic",
        title: "Asthma vs Anaphylaxis (Paramedic)",
        description: "Advanced pathophysiology, pharmacology integration, and complex differential diagnosis for asthma vs anaphylaxis at the paramedic level.",
        estimatedMinutes: 30,
        subsections: []
      },
      {
        slug: "pulmonary-edema-vs-pneumonia-vs-effusion-paramedic",
        title: "Pulmonary Edema vs Pneumonia vs Pleural Effusion (Paramedic)",
        description: "Advanced pathophysiology, pharmacology integration, and ventilation strategies for pulmonary edema, pneumonia, and pleural effusion at the paramedic level.",
        estimatedMinutes: 35,
        subsections: []
      }
    ]
  }
];

// Helper functions
export function getCategoryContentBySlug(slug: string): CategoryContent | undefined {
  return curriculumContent.find(c => c.slug === slug);
}

export function getTopicContent(
  categorySlug: string,
  topicSlug: string
): { category: CategoryContent; topic: Topic } | undefined {
  const category = getCategoryContentBySlug(categorySlug);
  if (!category) return undefined;

  const topic = category.topics.find(t => t.slug === topicSlug);
  if (!topic) return undefined;

  return { category, topic };
}

export function getSubsectionContentFromCurriculum(
  categorySlug: string,
  topicSlug: string,
  subsectionSlug: string
): { category: CategoryContent; topic: Topic; subsection: Subsection } | undefined {
  const topicData = getTopicContent(categorySlug, topicSlug);
  if (!topicData) return undefined;

  const subsection = topicData.topic.subsections.find(s => s.slug === subsectionSlug);
  if (!subsection) return undefined;

  return { ...topicData, subsection };
}

export function getAdjacentSubsection(
  categorySlug: string,
  topicSlug: string,
  subsectionSlug: string,
  direction: 'next' | 'prev'
): { categorySlug: string; topicSlug: string; subsectionSlug: string } | null {
  const category = getCategoryContentBySlug(categorySlug);
  if (!category) return null;

  const topicIndex = category.topics.findIndex(t => t.slug === topicSlug);
  if (topicIndex === -1) return null;

  const topic = category.topics[topicIndex];
  const subsectionIndex = topic.subsections.findIndex(s => s.slug === subsectionSlug);
  if (subsectionIndex === -1) return null;

  if (direction === 'next') {
    // Next subsection in same topic
    if (subsectionIndex < topic.subsections.length - 1) {
      return {
        categorySlug,
        topicSlug,
        subsectionSlug: topic.subsections[subsectionIndex + 1].slug
      };
    }
    // First subsection of next topic
    if (topicIndex < category.topics.length - 1) {
      const nextTopic = category.topics[topicIndex + 1];
      if (nextTopic.subsections.length > 0) {
        return {
          categorySlug,
          topicSlug: nextTopic.slug,
          subsectionSlug: nextTopic.subsections[0].slug
        };
      }
    }
  } else {
    // Prev subsection in same topic
    if (subsectionIndex > 0) {
      return {
        categorySlug,
        topicSlug,
        subsectionSlug: topic.subsections[subsectionIndex - 1].slug
      };
    }
    // Last subsection of prev topic
    if (topicIndex > 0) {
      const prevTopic = category.topics[topicIndex - 1];
      if (prevTopic.subsections.length > 0) {
        return {
          categorySlug,
          topicSlug: prevTopic.slug,
          subsectionSlug: prevTopic.subsections[prevTopic.subsections.length - 1].slug
        };
      }
    }
  }

  return null;
}
