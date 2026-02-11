import { Wind, Heart, Activity } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type DifficultyLevel = "start-here" | "getting-comfortable" | "building-on-basics";

// Block types for interactive content
export type BlockType = 
  | "text"
  | "tabs"
  | "flashcards"
  | "quiz"
  | "video"
  | "numbered-list"
  | "comparison";

export interface TabItem {
  label: string;
  content: string;
  bullets?: string[];
  imagePlaceholder?: string;
}

export interface Flashcard {
  id?: string;
  front: string;
  back: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ContentBlock {
  type: BlockType;
  content?: string;
  tabs?: TabItem[];
  flashcards?: Flashcard[];
  quiz?: QuizQuestion;
}

export interface TopicSection {
  id: string;
  title: string;
  content: string;
  blocks?: ContentBlock[];
  keyPoints?: string[];
  proTip?: string;
  rememberThis?: string;
}

export interface Topic {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  difficulty: DifficultyLevel;
  estimatedMinutes: number;
  whatYoullLearn: string[];
  encouragingTagline: string;
  sections: TopicSection[];
}

export const topics: Topic[] = [
  {
    slug: "airway-management",
    title: "Airway Management",
    description: "Master the fundamentals of keeping the airway open—the very first step in patient care.",
    icon: Wind,
    difficulty: "start-here",
    estimatedMinutes: 12,
    whatYoullLearn: [
      "Why airway always comes first in patient care",
      "Head-tilt chin-lift and jaw thrust techniques",
      "When and how to use basic airway adjuncts"
    ],
    encouragingTagline: "Perfect starting point for new EMT students",
    sections: [
      {
        id: "why-airway-first",
        title: "Why Airway Comes First",
        content: `You've probably heard "airway, breathing, circulation" a hundred times. But why does airway always come first? Let's talk about it.

Think of the airway like a garden hose. If the hose is kinked or blocked, it doesn't matter how much water pressure you have—nothing gets through. Your patient's airway works the same way.

Without an open airway, oxygen can't reach the lungs. Without oxygen in the lungs, it can't get into the blood. And without oxygenated blood, the brain and heart start to fail—fast.

This is why, no matter what else is going on, we always check and secure the airway first. It's the foundation everything else is built on.`,
        keyPoints: [
          "Airway obstruction prevents oxygen delivery to vital organs",
          "Brain damage begins within 4-6 minutes without oxygen",
          "Always assess airway before moving to breathing and circulation"
        ],
        proTip: "In the field, you'll develop a habit of glancing at the airway the moment you approach a patient—even before you introduce yourself. It becomes second nature."
      },
      {
        id: "open-vs-closed",
        title: "The Basics: Open vs. Closed Airway",
        content: `Before we can fix a problem, we need to recognize it. So what does an open airway look like versus a closed one?

An open airway means air flows freely from the mouth and nose down to the lungs. You'll see the chest rise and fall smoothly. You might hear quiet, normal breathing sounds.

A closed or partially blocked airway looks and sounds different.`,
        blocks: [
          {
            type: "tabs",
            tabs: [
              {
                label: "Open Airway",
                content: "Signs of a patent (open) airway that's working properly:",
                bullets: [
                  "Air flows freely through nose and mouth",
                  "Chest rises and falls smoothly",
                  "Quiet, normal breathing sounds",
                  "No visible effort or distress"
                ],
                imagePlaceholder: "[Diagram: Clear airway with unobstructed air flow]"
              },
              {
                label: "Closed/Blocked Airway",
                content: "Warning signs that the airway is compromised:",
                bullets: [
                  "Snoring or gurgling sounds (tongue or fluids)",
                  "Stridor (high-pitched sound on inhale)",
                  "No air movement despite breathing effort",
                  "Retractions (skin pulling in around neck/ribs)",
                  "Cyanosis (bluish discoloration)"
                ],
                imagePlaceholder: "[Diagram: Obstructed airway with tongue blocking passage]"
              }
            ]
          }
        ],
        keyPoints: [
          "Open airway: quiet breathing, smooth chest rise",
          "Blocked airway: abnormal sounds, retractions, or no air movement",
          "The tongue is the most common cause of obstruction in unconscious patients"
        ]
      },
      {
        id: "go-to-techniques",
        title: "Your Go-To Techniques",
        content: `Now let's talk about what you can actually DO when you find an airway problem. These are your fundamental manual techniques.`,
        blocks: [
          {
            type: "flashcards",
            flashcards: [
              {
                front: "Head-Tilt Chin-Lift",
                back: "Primary technique for non-trauma patients. Place one hand on forehead, tilt head back. With other hand, lift chin forward. This pulls the tongue away from the back of the throat."
              },
              {
                front: "Jaw Thrust",
                back: "Use when spinal injury is suspected. Place fingers behind the angles of the jaw and push forward. Lifts the tongue without moving the neck."
              },
              {
                front: "OPA (Oropharyngeal Airway)",
                back: "Curved plastic device that holds tongue forward. Size: corner of mouth to earlobe. Only for unresponsive patients with NO gag reflex."
              },
              {
                front: "NPA (Nasopharyngeal Airway)",
                back: "Soft rubber tube through the nose. Size: nostril to earlobe. Better tolerated—can use with intact gag reflex. Avoid with skull fractures."
              }
            ]
          }
        ],
        keyPoints: [
          "Head-tilt chin-lift: primary technique for non-trauma patients",
          "Jaw thrust: use when spinal injury is suspected",
          "Both techniques lift the tongue to clear the airway"
        ],
        proTip: "Practice these on a manikin until your hands just 'know' where to go. In a real emergency, you won't have time to think through each step.",
        rememberThis: "Modified jaw thrust maintains spinal alignment. When in doubt about trauma, always protect the spine."
      },
      {
        id: "airway-tools",
        title: "Simple Airway Tools",
        content: `Sometimes manual techniques aren't enough, or you need your hands free. That's where basic airway adjuncts come in.

**OPA (Oropharyngeal Airway)**
This curved plastic device holds the tongue forward. It's simple and effective.

Sizing: Measure from the corner of the mouth to the earlobe (or angle of the jaw).

Only use it in: Completely unresponsive patients with no gag reflex. If your patient gags, coughs, or tries to push it out—remove it immediately.

**NPA (Nasopharyngeal Airway)**
This soft rubber tube goes through the nose. It's often better tolerated than an OPA.

Sizing: Measure from the nostril to the earlobe.

Use it when: Patient has an intact gag reflex, or you can't open the mouth (clenched teeth, facial trauma).

Avoid in: Suspected skull fractures or severe facial trauma.`,
        keyPoints: [
          "OPA: for unresponsive patients without gag reflex",
          "NPA: better tolerated, useful when mouth access is limited",
          "Always size adjuncts before insertion"
        ]
      },
      {
        id: "knowledge-check",
        title: "Knowledge Check",
        content: `Let's make sure you've got the key concepts down. Answer these questions to test your understanding.`,
        blocks: [
          {
            type: "quiz",
            quiz: {
              id: "airway-q1",
              question: "What is the most common cause of airway obstruction in unconscious patients?",
              options: [
                "Blood",
                "Vomit",
                "The tongue",
                "Foreign object"
              ],
              correctIndex: 2,
              explanation: "The tongue falling back is the most common cause of airway obstruction in unconscious patients. That's why positioning techniques like head-tilt chin-lift work so well—they lift the tongue forward."
            }
          },
          {
            type: "quiz",
            quiz: {
              id: "airway-q2",
              question: "When should you use a jaw thrust instead of head-tilt chin-lift?",
              options: [
                "When the patient is conscious",
                "When you suspect spinal injury",
                "When the patient is a child",
                "When the patient has dentures"
              ],
              correctIndex: 1,
              explanation: "The jaw thrust is used when you suspect spinal injury because it opens the airway without moving the neck. It maintains spinal alignment while still lifting the tongue forward."
            }
          },
          {
            type: "quiz",
            quiz: {
              id: "airway-q3",
              question: "What is the contraindication for using an OPA (oropharyngeal airway)?",
              options: [
                "Patient is unconscious",
                "Patient has an intact gag reflex",
                "Patient is not breathing",
                "Patient is an adult"
              ],
              correctIndex: 1,
              explanation: "An OPA should only be used in completely unresponsive patients with NO gag reflex. If a patient has an intact gag reflex, the OPA can cause vomiting and aspiration. Use an NPA instead."
            }
          }
        ]
      },
      {
        id: "putting-it-together",
        title: "Putting It Together",
        content: `Let's walk through a quick scenario to connect everything we've covered.

**Scenario:** You arrive to find a 65-year-old man lying on his back, unresponsive. You hear loud snoring sounds.

What's happening? The snoring tells you the airway is partially obstructed—likely from his tongue falling back.

Your steps:
1. Perform a head-tilt chin-lift (no signs of trauma)
2. The snoring stops—airway is now open
3. Consider placing an OPA to keep it open while you continue your assessment
4. Check for breathing and continue your evaluation

That's the process: recognize the problem, fix it manually, then secure it with a tool if needed.

**You've covered the essentials!** Airway management gets more advanced from here, but these fundamentals are the foundation for everything else. Master these, and you're building on solid ground.`,
        keyPoints: [
          "Recognize obstruction by sounds and signs",
          "Apply appropriate manual technique first",
          "Use adjuncts to maintain the airway hands-free"
        ],
        rememberThis: "Airway management is about quick recognition and immediate action. The techniques are simple—what matters is doing them confidently when it counts."
      }
    ]
  },
  {
    slug: "cardiac-physiology",
    title: "Cardiac Physiology",
    description: "Understand how the heart works—the pump that keeps everything running.",
    icon: Heart,
    difficulty: "getting-comfortable",
    estimatedMinutes: 15,
    whatYoullLearn: [
      "How the heart's four chambers work together",
      "The heart's built-in electrical system",
      "What normal heart function looks and sounds like"
    ],
    encouragingTagline: "Build on your basics with this core topic",
    sections: [
      {
        id: "meet-the-heart",
        title: "Meet the Heart",
        content: `Before we can understand cardiac emergencies, let's get comfortable with how a healthy heart works. Think of it as getting to know a friend—once you understand someone, their behavior makes a lot more sense.

Your heart is a pump. That's really the core of it. It's about the size of your fist, sits slightly left of center in your chest, and it never takes a break.`,
        blocks: [
          {
            type: "tabs",
            tabs: [
              {
                label: "The Four Chambers",
                content: "The heart has four chambers that work together:",
                bullets: [
                  "Two atria (top) — receive blood coming in",
                  "Two ventricles (bottom) — pump blood out",
                  "Right side handles blood going TO the lungs",
                  "Left side handles blood coming FROM the lungs"
                ],
                imagePlaceholder: "[Diagram: Heart anatomy with labeled chambers]"
              },
              {
                label: "Two Pumps in One",
                content: "Think of the heart as two pumps working side by side:",
                bullets: [
                  "Right pump: sends blood to lungs (pulmonary circuit)",
                  "Left pump: sends blood to body (systemic circuit)",
                  "They work in sync with every heartbeat",
                  "Left ventricle is thicker—it has a harder job"
                ],
                imagePlaceholder: "[Diagram: Blood flow through heart circuits]"
              }
            ]
          }
        ],
        keyPoints: [
          "The heart is a pump with four chambers",
          "Right side: sends blood to lungs for oxygen",
          "Left side: sends oxygenated blood to the body"
        ],
        proTip: "When you're listening to heart sounds in the field, you're hearing those valves closing. Each 'lub-dub' is the sound of valves snapping shut to keep blood flowing in the right direction."
      },
      {
        id: "electrical-system",
        title: "The Electrical System",
        content: `Here's something amazing: your heart has its own built-in pacemaker. It doesn't need your brain to tell it to beat—it generates its own electrical signals.

This pacemaker is called the SA node (sinoatrial node). It sits in the right atrium and fires off electrical impulses about 60-100 times per minute at rest.

The electrical signal travels like this:
1. SA node fires → atria contract (pushing blood into ventricles)
2. Signal reaches the AV node → brief pause (letting ventricles fill)
3. Signal shoots down through the ventricles → ventricles contract (pumping blood out)

When this system works normally, you get a nice, regular heartbeat. When it doesn't... that's when we see the arrhythmias you'll learn about later.`,
        keyPoints: [
          "SA node is the heart's natural pacemaker",
          "Electrical signal triggers coordinated muscle contraction",
          "Normal rate at rest: 60-100 beats per minute"
        ]
      },
      {
        id: "blood-flow",
        title: "Blood Flow Made Simple",
        content: `Let's trace a drop of blood through the entire circuit. This will help everything click together.`,
        blocks: [
          {
            type: "flashcards",
            flashcards: [
              {
                front: "Right Atrium",
                back: "Receives deoxygenated blood from the body via the superior and inferior vena cava. Passes blood to the right ventricle."
              },
              {
                front: "Right Ventricle",
                back: "Pumps deoxygenated blood to the lungs via the pulmonary arteries. Has thinner walls than the left ventricle."
              },
              {
                front: "Left Atrium",
                back: "Receives oxygenated blood from the lungs via the pulmonary veins. Passes blood to the left ventricle."
              },
              {
                front: "Left Ventricle",
                back: "Pumps oxygenated blood to the entire body via the aorta. Has the thickest walls due to the greatest workload."
              }
            ]
          }
        ],
        keyPoints: [
          "Right side = low-pressure pump to lungs (pulmonary circuit)",
          "Left side = high-pressure pump to body (systemic circuit)",
          "Left ventricle is thickest due to greater workload"
        ],
        rememberThis: "Arteries carry blood AWAY from the heart (A for Away). Veins return blood to the heart. This is true everywhere in the body."
      },
      {
        id: "what-normal-looks-like",
        title: "What Normal Looks Like",
        content: `In the field, you'll assess cardiac function through vital signs, heart sounds, and patient presentation. Here's what normal looks like.

**Normal Heart Rate**
• Adults: 60-100 beats per minute at rest
• Children: Higher, varies by age
• Athletes may have lower resting rates (and that's fine)

**Normal Heart Sounds**
• "Lub-dub, lub-dub" — regular and consistent
• Lub = AV valves closing (between atria and ventricles)
• Dub = semilunar valves closing (leaving the heart)

**Signs of Good Cardiac Output**
• Warm, pink skin
• Normal blood pressure
• Strong, regular pulses
• Alert mental status
• Good capillary refill (under 2 seconds)

When you see these signs, you know the pump is doing its job.`,
        keyPoints: [
          "Assess rate, rhythm, and quality of pulses",
          "Normal heart sounds are regular without extra sounds",
          "Good perfusion signs = adequate cardiac output"
        ],
        proTip: "Always compare pulses at different sites. If radial pulses are weak but carotid is strong, that tells you something about blood pressure and perfusion."
      },
      {
        id: "knowledge-check-cardiac",
        title: "Knowledge Check",
        content: `Test your understanding of cardiac physiology with these questions.`,
        blocks: [
          {
            type: "quiz",
            quiz: {
              id: "cardiac-q1",
              question: "Which structure is the heart's natural pacemaker?",
              options: [
                "AV node",
                "SA node",
                "Bundle of His",
                "Purkinje fibers"
              ],
              correctIndex: 1,
              explanation: "The SA (sinoatrial) node is the heart's natural pacemaker. Located in the right atrium, it initiates the electrical impulse that triggers each heartbeat, firing 60-100 times per minute at rest."
            }
          },
          {
            type: "quiz",
            quiz: {
              id: "cardiac-q2",
              question: "Which ventricle has the thickest wall, and why?",
              options: [
                "Right ventricle, because it pumps to the brain",
                "Left ventricle, because it pumps to the entire body",
                "They are equal in thickness",
                "Right ventricle, because it pumps to the lungs"
              ],
              correctIndex: 1,
              explanation: "The left ventricle has the thickest wall because it has the hardest job—pumping oxygenated blood to your entire body, from head to toes. The right ventricle only needs to pump to the nearby lungs."
            }
          },
          {
            type: "quiz",
            quiz: {
              id: "cardiac-q3",
              question: "What is the normal resting heart rate for an adult?",
              options: [
                "40-60 beats per minute",
                "60-100 beats per minute",
                "100-120 beats per minute",
                "80-140 beats per minute"
              ],
              correctIndex: 1,
              explanation: "Normal resting heart rate for adults is 60-100 beats per minute. Athletes may have lower rates due to efficient hearts, while rates outside this range may indicate a problem."
            }
          }
        ]
      },
      {
        id: "common-questions",
        title: "Common Questions Students Ask",
        content: `**"Why is the left ventricle so much thicker?"**
Because it pumps blood to your entire body—from your brain to your toes. That requires much more force than the right ventricle, which only pumps to the nearby lungs.

**"What makes the heart speed up or slow down?"**
Your nervous system adjusts heart rate based on demand. Exercise, stress, or blood loss → heart speeds up. Rest and relaxation → heart slows down.

**"Is a slow heart rate always bad?"**
Not necessarily. Athletes often have resting rates in the 50s because their hearts are efficient. But in a patient showing signs of poor perfusion, a slow rate is concerning.

**"How does this connect to what I'll do as an EMT?"**
Everything! You'll count rates, listen to sounds, feel pulse quality, assess perfusion, and recognize when the pump isn't working right. This foundation helps you understand WHY we do those assessments.

You're doing great. Cardiac physiology is a big topic, and you've just built a solid foundation to build on.`,
        keyPoints: [
          "Left ventricle thickness = greater workload",
          "Heart rate adjusts to body's demands",
          "Understanding anatomy helps you assess and recognize problems"
        ]
      }
    ]
  },
  {
    slug: "shock-perfusion",
    title: "Shock & Perfusion",
    description: "Learn what happens when the body's delivery system fails—and what you can do about it.",
    icon: Activity,
    difficulty: "building-on-basics",
    estimatedMinutes: 14,
    whatYoullLearn: [
      "What perfusion means and why it matters",
      "The four main types of shock",
      "How to recognize shock early and intervene"
    ],
    encouragingTagline: "Connect your knowledge with this essential concept",
    sections: [
      {
        id: "what-is-perfusion",
        title: "What Is Perfusion, Really?",
        content: `Before we talk about shock, we need to understand what we're trying to protect: perfusion.

Perfusion is simply the delivery of oxygen and nutrients to your body's cells, and the removal of waste products. Think of it as a delivery service that never stops.

For this delivery service to work, you need three things:
• **A working pump** — the heart
• **Enough fluid** — blood volume
• **Intact pipes** — blood vessels at the right diameter

If any of these three fails, perfusion suffers. Cells don't get what they need. And when cells don't get what they need, they start to struggle—and eventually die.

That's what shock is: inadequate perfusion to meet the body's needs.`,
        keyPoints: [
          "Perfusion = delivery of oxygen and nutrients to cells",
          "Requires: pump (heart) + fluid (blood) + pipes (vessels)",
          "Shock = perfusion failure"
        ],
        proTip: "Think of perfusion whenever you assess a patient. Skin color, temperature, capillary refill, mental status—these all tell you about perfusion. They're not just checkboxes; they're windows into how well the delivery system is working."
      },
      {
        id: "understanding-shock",
        title: "When Perfusion Fails: Understanding Shock",
        content: `Shock is simply your body not getting enough of what it needs. The cells are starving for oxygen, even if there's plenty in the air.

Why does this matter so much? Because cells under stress switch to less efficient ways of producing energy. This creates harmful byproducts, especially lactic acid. If shock continues, cells become damaged. Organs start to fail. Eventually, the process becomes irreversible.

The key insight is this: shock is not a blood pressure number. You can be in shock with a "normal" blood pressure, at least early on. Shock is a state of inadequate tissue perfusion—and your job is to recognize it before it's too late.

The earlier you catch shock, the better the outcomes. Early recognition is your superpower.`,
        keyPoints: [
          "Shock = inadequate oxygen delivery to tissues",
          "Can occur even with 'normal' blood pressure initially",
          "Early recognition dramatically improves outcomes"
        ],
        rememberThis: "Shock is a clinical state, not a blood pressure reading. Look at the whole picture: skin signs, mental status, heart rate, and how the patient looks and feels."
      },
      {
        id: "four-types",
        title: "The Four Types You Need to Know",
        content: `Shock has different causes, but they all lead to the same problem: inadequate perfusion. Here are the four main types.`,
        blocks: [
          {
            type: "flashcards",
            flashcards: [
              {
                front: "Hypovolemic Shock",
                back: "\"Not enough fluid in the tank\" — Caused by blood or fluid loss. Examples: bleeding, severe dehydration, burns. The pump is fine, but there's not enough fluid to pump."
              },
              {
                front: "Cardiogenic Shock",
                back: "\"The pump isn't working\" — Caused by heart failure. Examples: heart attack, severe arrhythmias. There's enough fluid, but the pump can't move it effectively."
              },
              {
                front: "Distributive Shock",
                back: "\"The pipes are too wide\" — Caused by massive blood vessel dilation. Examples: anaphylaxis, sepsis, spinal cord injury. Fluid and pump are fine, but blood pressure drops because vessels dilate."
              },
              {
                front: "Obstructive Shock",
                back: "\"Something's blocking the flow\" — Caused by mechanical obstruction. Examples: tension pneumothorax, cardiac tamponade, pulmonary embolism. Blood physically can't flow where it needs to."
              }
            ]
          }
        ],
        keyPoints: [
          "Hypovolemic: loss of blood or fluid volume",
          "Cardiogenic: heart pump failure",
          "Distributive: vessels dilated, pressure drops",
          "Obstructive: physical blockage to blood flow"
        ],
        proTip: "You don't need to diagnose the exact type in the field as an EMT. Recognize that shock is present and treat aggressively—the hospital will sort out the specifics."
      },
      {
        id: "recognizing-shock",
        title: "Recognizing Shock Early",
        content: `Your body is smart. When perfusion starts to drop, it compensates. It shifts blood to vital organs, speeds up the heart, and constricts blood vessels. This is called compensated shock—the body is working overtime to maintain perfusion.`,
        blocks: [
          {
            type: "tabs",
            tabs: [
              {
                label: "Compensated Shock",
                content: "The body is fighting to maintain perfusion. Look for these early warning signs:",
                bullets: [
                  "Anxiety, restlessness, or altered mental status",
                  "Increased heart rate (often the earliest sign)",
                  "Pale, cool, clammy skin",
                  "Delayed capillary refill (over 2 seconds)",
                  "Blood pressure may still be normal!"
                ]
              },
              {
                label: "Decompensated Shock",
                content: "Compensation has failed. This is a critical emergency:",
                bullets: [
                  "Falling blood pressure",
                  "Very rapid, weak pulses",
                  "Confusion or unresponsiveness",
                  "Severe skin changes (mottled, cyanotic)",
                  "Decreased urine output"
                ]
              }
            ]
          }
        ],
        keyPoints: [
          "Compensated shock: body fighting to maintain perfusion",
          "Tachycardia often the earliest sign",
          "Decompensated: body can no longer keep up"
        ],
        proTip: "Trust your gut. If a patient 'looks sick' but has normal vitals, stay vigilant. Compensated shock can fool you if you only look at numbers."
      },
      {
        id: "knowledge-check-shock",
        title: "Knowledge Check",
        content: `Test your understanding of shock and perfusion.`,
        blocks: [
          {
            type: "quiz",
            quiz: {
              id: "shock-q1",
              question: "What is the best definition of shock?",
              options: [
                "Low blood pressure",
                "Inadequate tissue perfusion",
                "Rapid heart rate",
                "Loss of consciousness"
              ],
              correctIndex: 1,
              explanation: "Shock is defined as inadequate tissue perfusion—when cells don't receive enough oxygen and nutrients. Blood pressure can be normal in early (compensated) shock!"
            }
          },
          {
            type: "quiz",
            quiz: {
              id: "shock-q2",
              question: "Which type of shock is caused by severe bleeding?",
              options: [
                "Cardiogenic shock",
                "Distributive shock",
                "Hypovolemic shock",
                "Obstructive shock"
              ],
              correctIndex: 2,
              explanation: "Hypovolemic shock is caused by loss of blood or fluid volume—\"not enough fluid in the tank.\" The heart is pumping fine, but there's not enough blood to pump."
            }
          },
          {
            type: "quiz",
            quiz: {
              id: "shock-q3",
              question: "What is often the earliest sign of compensated shock?",
              options: [
                "Low blood pressure",
                "Unconsciousness",
                "Tachycardia (increased heart rate)",
                "Cyanosis"
              ],
              correctIndex: 2,
              explanation: "Tachycardia is often the earliest sign of shock. The body speeds up the heart rate to maintain cardiac output when perfusion is threatened. Blood pressure may remain normal until late stages."
            }
          }
        ]
      },
      {
        id: "what-you-can-do",
        title: "What Can You Do?",
        content: `As an EMT, your interventions for shock focus on supporting perfusion and getting the patient to definitive care quickly.

**Positioning**
• Lay the patient supine (on their back)
• Consider elevating legs if no spinal injury or contraindications
• Keep them still—movement increases oxygen demand

**Oxygen**
• High-flow oxygen for any patient in shock
• Support ventilation if breathing is inadequate

**Keep Them Warm**
• Shock patients can't regulate temperature well
• Cover with blankets to prevent heat loss

**Control Bleeding**
• If hypovolemic shock from bleeding, stop the blood loss
• Direct pressure, tourniquets when appropriate

**Rapid Transport**
• Shock patients need the hospital
• Early notification allows the ER to prepare

**Monitor Continuously**
• Watch for changes in mental status and vitals
• Reassess frequently—shock can worsen quickly

You now understand the what, why, and how of shock. This knowledge will guide your assessment and treatment for countless patients. Well done.`,
        keyPoints: [
          "Position appropriately, support oxygenation",
          "Control bleeding if applicable",
          "Keep warm, transport rapidly, monitor closely"
        ],
        rememberThis: "Your goal is to recognize shock early, support the body's attempt to compensate, and get the patient to definitive care before decompensation occurs. Speed matters."
      }
    ]
  }
];

export const getTopicBySlug = (slug: string): Topic | undefined => {
  return topics.find(topic => topic.slug === slug);
};

export const getAdjacentTopics = (currentSlug: string): { prev: Topic | null; next: Topic | null } => {
  const currentIndex = topics.findIndex(t => t.slug === currentSlug);
  return {
    prev: currentIndex > 0 ? topics[currentIndex - 1] : null,
    next: currentIndex < topics.length - 1 ? topics[currentIndex + 1] : null
  };
};

// Helper to count interactive elements in a topic
export const getTopicInteractiveCount = (topic: Topic): { flashcards: number; quizzes: number } => {
  let flashcards = 0;
  let quizzes = 0;
  
  topic.sections.forEach(section => {
    section.blocks?.forEach(block => {
      if (block.type === "flashcards" && block.flashcards) {
        flashcards += block.flashcards.length;
      }
      if (block.type === "quiz" && block.quiz) {
        quizzes += 1;
      }
    });
  });
  
  return { flashcards, quizzes };
};
