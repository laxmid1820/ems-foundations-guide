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
        blocks: [
          {
            type: "quiz",
            quiz: {
              id: "why-airway-q1",
              question: "How quickly can brain damage begin without oxygen?",
              options: [
                "1-2 minutes",
                "4-6 minutes",
                "10-15 minutes",
                "20-30 minutes"
              ],
              correctIndex: 1,
              explanation: "Brain cells are extremely sensitive to oxygen deprivation. Irreversible brain damage can begin within 4-6 minutes without oxygen, which is why securing the airway is always the first priority."
            }
          },
          {
            type: "quiz",
            quiz: {
              id: "why-airway-q2",
              question: "In the ABC assessment, why is airway assessed before breathing?",
              options: [
                "Because airway problems are more common",
                "Because without an open airway, oxygen cannot reach the lungs",
                "Because airway assessment is faster",
                "Because breathing can wait"
              ],
              correctIndex: 1,
              explanation: "An open airway is a prerequisite for effective breathing. If the airway is blocked, no amount of respiratory effort will get oxygen to the lungs—fixing the airway first makes everything else possible."
            }
          }
        ],
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
          },
          {
            type: "quiz",
            quiz: {
              id: "open-closed-q1",
              question: "What is the most common cause of airway obstruction in an unconscious patient?",
              options: [
                "A foreign body",
                "Swelling from allergies",
                "The tongue falling back",
                "Excess mucus production"
              ],
              correctIndex: 2,
              explanation: "In unconscious patients, loss of muscle tone allows the tongue to fall back against the posterior pharynx, making it the single most common cause of airway obstruction."
            }
          },
          {
            type: "quiz",
            quiz: {
              id: "open-closed-q2",
              question: "Which sound typically indicates a partial airway obstruction caused by the tongue?",
              options: [
                "Wheezing",
                "Stridor",
                "Snoring",
                "Crackles"
              ],
              correctIndex: 2,
              explanation: "Snoring sounds during breathing indicate the tongue is partially blocking the airway. Stridor suggests upper airway narrowing, while wheezing and crackles are lower airway sounds."
            }
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
          },
          {
            type: "quiz",
            quiz: {
              id: "techniques-q1",
              question: "Which airway maneuver should you use on an unresponsive patient with no suspected spinal injury?",
              options: [
                "Jaw thrust",
                "Head-tilt chin-lift",
                "Recovery position only",
                "Finger sweep"
              ],
              correctIndex: 1,
              explanation: "The head-tilt chin-lift is the primary technique for non-trauma patients. It effectively lifts the tongue away from the posterior pharynx by extending the head and lifting the chin."
            }
          },
          {
            type: "quiz",
            quiz: {
              id: "techniques-q2",
              question: "Why is the jaw thrust preferred over head-tilt chin-lift in trauma patients?",
              options: [
                "It is easier to perform",
                "It opens the airway wider",
                "It maintains spinal alignment",
                "It works on conscious patients"
              ],
              correctIndex: 2,
              explanation: "The jaw thrust opens the airway by pushing the jaw forward without tilting or extending the neck, thereby maintaining cervical spine alignment in patients with suspected spinal injuries."
            }
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
        blocks: [
          {
            type: "quiz",
            quiz: {
              id: "tools-q1",
              question: "How do you correctly size an OPA (oropharyngeal airway)?",
              options: [
                "From the center of the lips to the angle of the jaw",
                "From the corner of the mouth to the earlobe",
                "From the nose to the chin",
                "From the teeth to the Adam's apple"
              ],
              correctIndex: 1,
              explanation: "An OPA is sized by measuring from the corner of the patient's mouth to the earlobe (or angle of the jaw). Using the wrong size can push the tongue further back or fail to hold it forward."
            }
          },
          {
            type: "quiz",
            quiz: {
              id: "tools-q2",
              question: "When is an NPA (nasopharyngeal airway) preferred over an OPA?",
              options: [
                "When the patient is fully unresponsive",
                "When the patient has an intact gag reflex",
                "When the patient has a suspected skull fracture",
                "When the patient is in cardiac arrest"
              ],
              correctIndex: 1,
              explanation: "An NPA is better tolerated in patients who still have a gag reflex. An OPA would trigger gagging and potential vomiting in these patients. NPAs are also useful when the mouth cannot be opened."
            }
          }
        ],
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
          },
          {
            type: "quiz",
            quiz: {
              id: "airway-q4",
              question: "A patient with a suspected basilar skull fracture needs an airway adjunct. Which device should you avoid?",
              options: [
                "OPA",
                "NPA",
                "Pocket mask",
                "Bag-valve mask"
              ],
              correctIndex: 1,
              explanation: "An NPA is contraindicated in patients with suspected basilar skull fractures because the tube could potentially pass through a fractured cribriform plate into the brain. Use an OPA instead if the patient has no gag reflex."
            }
          },
          {
            type: "quiz",
            quiz: {
              id: "airway-q5",
              question: "You insert an OPA and the patient begins to gag. What should you do?",
              options: [
                "Push it in further to get past the gag",
                "Remove it immediately and consider an NPA",
                "Leave it in place — gagging will stop",
                "Suction first, then reinsert"
              ],
              correctIndex: 1,
              explanation: "If a patient gags on an OPA, remove it immediately. Gagging indicates the patient has enough reflexes to protect their own airway, and forcing the OPA can cause vomiting and aspiration. Consider an NPA instead."
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
        blocks: [
          {
            type: "quiz",
            quiz: {
              id: "together-q1",
              question: "You find an unresponsive patient snoring loudly. After performing a head-tilt chin-lift the snoring stops. What should you do next?",
              options: [
                "Immediately begin CPR",
                "Consider placing an OPA to maintain the airway",
                "Administer epinephrine",
                "Roll the patient onto their stomach"
              ],
              correctIndex: 1,
              explanation: "After manually opening the airway, consider placing an OPA (if no gag reflex) to keep the airway patent hands-free while you continue your assessment of breathing and circulation."
            }
          },
          {
            type: "quiz",
            quiz: {
              id: "together-q2",
              question: "Which step comes FIRST when you encounter an unresponsive patient?",
              options: [
                "Check blood pressure",
                "Start chest compressions",
                "Assess and open the airway",
                "Attach the AED"
              ],
              correctIndex: 2,
              explanation: "Following the ABC approach, airway always comes first. You must ensure the airway is open before assessing breathing or circulation—without an open airway, nothing else can be effective."
            }
          }
        ],
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
          },
          {
            type: "quiz",
            quiz: {
              id: "heart-intro-q1",
              question: "Which side of the heart receives deoxygenated blood from the body?",
              options: [
                "Left atrium",
                "Left ventricle",
                "Right atrium",
                "Right ventricle"
              ],
              correctIndex: 2,
              explanation: "The right atrium receives deoxygenated blood returning from the body via the superior and inferior vena cava. It then passes this blood to the right ventricle to be pumped to the lungs."
            }
          },
          {
            type: "quiz",
            quiz: {
              id: "heart-intro-q2",
              question: "Why is the left ventricle thicker than the right ventricle?",
              options: [
                "It receives more blood",
                "It must pump blood to the entire body",
                "It contains the SA node",
                "It is closer to the lungs"
              ],
              correctIndex: 1,
              explanation: "The left ventricle must generate enough pressure to push blood through the entire systemic circulation—from head to toes. The right ventricle only pumps to the nearby lungs, requiring less force."
            }
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
        blocks: [
          {
            type: "quiz",
            quiz: {
              id: "electrical-q1",
              question: "Where is the SA node located?",
              options: [
                "Left ventricle",
                "Right atrium",
                "AV junction",
                "Interventricular septum"
              ],
              correctIndex: 1,
              explanation: "The SA (sinoatrial) node is located in the upper wall of the right atrium. It serves as the heart's natural pacemaker, initiating each electrical impulse that triggers a heartbeat."
            }
          },
          {
            type: "quiz",
            quiz: {
              id: "electrical-q2",
              question: "What is the purpose of the brief pause at the AV node?",
              options: [
                "To reset the SA node",
                "To allow the ventricles to fill with blood",
                "To oxygenate the heart muscle",
                "To synchronize with breathing"
              ],
              correctIndex: 1,
              explanation: "The AV node delays the electrical signal briefly so the atria have time to finish contracting and the ventricles can fill completely with blood before they contract. This ensures efficient pumping."
            }
          }
        ],
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
          },
          {
            type: "quiz",
            quiz: {
              id: "bloodflow-q1",
              question: "Which blood vessels carry oxygenated blood FROM the lungs back to the heart?",
              options: [
                "Pulmonary arteries",
                "Vena cava",
                "Pulmonary veins",
                "Coronary arteries"
              ],
              correctIndex: 2,
              explanation: "The pulmonary veins are unique—they're the only veins that carry oxygenated blood. They return freshly oxygenated blood from the lungs to the left atrium of the heart."
            }
          },
          {
            type: "quiz",
            quiz: {
              id: "bloodflow-q2",
              question: "Which vessel carries deoxygenated blood from the heart to the lungs?",
              options: [
                "Aorta",
                "Pulmonary artery",
                "Superior vena cava",
                "Pulmonary vein"
              ],
              correctIndex: 1,
              explanation: "The pulmonary artery carries deoxygenated blood from the right ventricle to the lungs for gas exchange. It's the only artery in the body that carries deoxygenated blood."
            }
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
        blocks: [
          {
            type: "quiz",
            quiz: {
              id: "normal-cardiac-q1",
              question: "Which of the following is a sign of adequate cardiac output?",
              options: [
                "Cool, clammy skin",
                "Capillary refill under 2 seconds",
                "Altered mental status",
                "Weak, thready pulses"
              ],
              correctIndex: 1,
              explanation: "A capillary refill time under 2 seconds indicates good peripheral perfusion, which reflects adequate cardiac output. The other options are signs of poor perfusion."
            }
          },
          {
            type: "quiz",
            quiz: {
              id: "normal-cardiac-q2",
              question: "The 'lub-dub' heart sounds are produced by:",
              options: [
                "Blood flowing through arteries",
                "Heart valves closing",
                "The SA node firing",
                "Atrial contraction"
              ],
              correctIndex: 1,
              explanation: "Heart sounds are created by valves closing. The 'lub' (S1) is the AV valves closing as the ventricles begin to contract, and the 'dub' (S2) is the semilunar valves closing as the ventricles relax."
            }
          }
        ],
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
          },
          {
            type: "quiz",
            quiz: {
              id: "cardiac-q4",
              question: "What happens if the SA node fails to fire?",
              options: [
                "The heart stops permanently",
                "The AV node can take over as a backup pacemaker",
                "The lungs compensate by breathing faster",
                "Blood pressure drops to zero immediately"
              ],
              correctIndex: 1,
              explanation: "The heart has backup pacemakers. If the SA node fails, the AV node can take over at a slower rate (40-60 bpm). Even the ventricles themselves can generate impulses (20-40 bpm) as a last resort."
            }
          },
          {
            type: "quiz",
            quiz: {
              id: "cardiac-q5",
              question: "A patient has warm pink skin, strong radial pulses, and a heart rate of 78. What does this indicate?",
              options: [
                "Early shock",
                "Cardiac tamponade",
                "Adequate cardiac output",
                "Hypertensive crisis"
              ],
              correctIndex: 2,
              explanation: "Warm pink skin, strong pulses, and a normal heart rate (60-100 bpm) are classic signs of adequate cardiac output and good perfusion. The heart is effectively pumping blood to meet the body's needs."
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
        blocks: [
          {
            type: "quiz",
            quiz: {
              id: "common-cardiac-q1",
              question: "An athlete has a resting heart rate of 52 bpm and feels fine. Is this concerning?",
              options: [
                "Yes — any rate below 60 is dangerous",
                "No — trained athletes often have efficient hearts with lower resting rates",
                "Yes — they need a pacemaker",
                "No — but only if they are under 30 years old"
              ],
              correctIndex: 1,
              explanation: "Well-trained athletes often have resting heart rates in the 50s or even 40s because their hearts pump more blood per beat (higher stroke volume). This is normal and not a cause for concern if the patient is asymptomatic."
            }
          },
          {
            type: "quiz",
            quiz: {
              id: "common-cardiac-q2",
              question: "What causes the heart rate to increase during exercise?",
              options: [
                "The SA node slows down",
                "The sympathetic nervous system stimulates the heart",
                "Blood pressure decreases",
                "The lungs signal the heart to speed up"
              ],
              correctIndex: 1,
              explanation: "The sympathetic nervous system ('fight or flight') releases epinephrine and norepinephrine, which stimulate the SA node to fire faster and the heart muscle to contract more forcefully, increasing heart rate and cardiac output."
            }
          }
        ],
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
        blocks: [
          {
            type: "quiz",
            quiz: {
              id: "perfusion-q1",
              question: "Which three components are required for adequate perfusion?",
              options: [
                "Brain, lungs, and kidneys",
                "Heart (pump), blood (fluid), and vessels (pipes)",
                "Oxygen, glucose, and water",
                "Arteries, veins, and capillaries"
              ],
              correctIndex: 1,
              explanation: "Adequate perfusion requires a working pump (heart), enough fluid (blood volume), and intact pipes (blood vessels at the right diameter). Failure of any one of these leads to shock."
            }
          },
          {
            type: "quiz",
            quiz: {
              id: "perfusion-q2",
              question: "What is the simplest definition of shock?",
              options: [
                "Low blood pressure",
                "Rapid heart rate",
                "Inadequate tissue perfusion",
                "Loss of consciousness"
              ],
              correctIndex: 2,
              explanation: "Shock is defined as inadequate perfusion—when the body's cells are not receiving enough oxygen and nutrients to function. Blood pressure and heart rate are indicators, but the core problem is perfusion failure."
            }
          }
        ],
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
        blocks: [
          {
            type: "quiz",
            quiz: {
              id: "understand-shock-q1",
              question: "Why can a patient be in shock but still have a normal blood pressure?",
              options: [
                "Blood pressure machines are unreliable",
                "The body compensates by increasing heart rate and constricting vessels",
                "Shock only affects blood pressure in elderly patients",
                "Normal blood pressure means the patient is not in shock"
              ],
              correctIndex: 1,
              explanation: "In compensated shock, the body maintains blood pressure through increased heart rate and vasoconstriction. This is why you must look at the whole clinical picture—not just blood pressure—to identify shock early."
            }
          },
          {
            type: "quiz",
            quiz: {
              id: "understand-shock-q2",
              question: "What harmful byproduct accumulates when cells are deprived of oxygen?",
              options: [
                "Carbon dioxide",
                "Lactic acid",
                "Glucose",
                "Potassium"
              ],
              correctIndex: 1,
              explanation: "When cells switch to anaerobic metabolism due to oxygen deprivation, they produce lactic acid as a byproduct. Lactic acid buildup causes acidosis, which further impairs cell function and organ performance."
            }
          }
        ],
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
          },
          {
            type: "quiz",
            quiz: {
              id: "types-q1",
              question: "A patient in anaphylaxis develops low blood pressure due to widespread vasodilation. What type of shock is this?",
              options: [
                "Hypovolemic",
                "Cardiogenic",
                "Distributive",
                "Obstructive"
              ],
              correctIndex: 2,
              explanation: "Anaphylaxis causes distributive shock—massive vasodilation makes the blood vessels 'too wide,' causing blood pressure to drop even though the heart and blood volume are fine."
            }
          },
          {
            type: "quiz",
            quiz: {
              id: "types-q2",
              question: "A patient had a heart attack and now has weak pulses and signs of poor perfusion. What type of shock is this?",
              options: [
                "Hypovolemic",
                "Cardiogenic",
                "Distributive",
                "Obstructive"
              ],
              correctIndex: 1,
              explanation: "Cardiogenic shock occurs when the heart itself fails as a pump. A heart attack damages heart muscle, reducing its ability to contract effectively and pump blood to meet the body's needs."
            }
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
          },
          {
            type: "quiz",
            quiz: {
              id: "recognize-q1",
              question: "What is often the EARLIEST sign of compensated shock?",
              options: [
                "Falling blood pressure",
                "Tachycardia (increased heart rate)",
                "Unconsciousness",
                "Cyanosis"
              ],
              correctIndex: 1,
              explanation: "Tachycardia is typically the earliest sign of shock. The body increases heart rate to try to maintain adequate cardiac output when perfusion is threatened. Blood pressure changes come later."
            }
          },
          {
            type: "quiz",
            quiz: {
              id: "recognize-q2",
              question: "A patient has pale, cool, clammy skin with a heart rate of 118 but a blood pressure of 120/80. What stage of shock is this most likely?",
              options: [
                "No shock — blood pressure is normal",
                "Compensated shock",
                "Decompensated shock",
                "Irreversible shock"
              ],
              correctIndex: 1,
              explanation: "This is compensated shock. The body is maintaining blood pressure through increased heart rate and vasoconstriction (causing the pale, cool skin), but these compensation mechanisms indicate perfusion is already threatened."
            }
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
          },
          {
            type: "quiz",
            quiz: {
              id: "shock-q4",
              question: "Which type of shock is caused by a tension pneumothorax?",
              options: [
                "Hypovolemic",
                "Cardiogenic",
                "Distributive",
                "Obstructive"
              ],
              correctIndex: 3,
              explanation: "A tension pneumothorax causes obstructive shock by physically preventing the heart from filling properly. Air trapped in the chest compresses the heart and great vessels, blocking blood flow."
            }
          },
          {
            type: "quiz",
            quiz: {
              id: "shock-q5",
              question: "Sepsis-related shock falls under which category?",
              options: [
                "Hypovolemic",
                "Cardiogenic",
                "Distributive",
                "Obstructive"
              ],
              correctIndex: 2,
              explanation: "Sepsis causes distributive shock through widespread vasodilation triggered by the body's overwhelming immune response to infection. The vessels dilate, causing blood pressure to drop despite adequate blood volume."
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
        blocks: [
          {
            type: "quiz",
            quiz: {
              id: "intervention-q1",
              question: "What is the primary reason to keep a shock patient warm?",
              options: [
                "To reduce pain",
                "Because shock impairs temperature regulation",
                "To lower heart rate",
                "To reduce swelling"
              ],
              correctIndex: 1,
              explanation: "Patients in shock lose the ability to effectively regulate body temperature. Hypothermia worsens coagulopathy and acidosis, creating a 'lethal triad' that makes shock harder to reverse."
            }
          },
          {
            type: "quiz",
            quiz: {
              id: "intervention-q2",
              question: "Why is rapid transport critical for shock patients?",
              options: [
                "Ambulances have better heaters",
                "Shock patients need definitive hospital care that EMS cannot provide",
                "Movement helps circulation",
                "It reduces the patient's anxiety"
              ],
              correctIndex: 1,
              explanation: "EMT-level shock management focuses on supportive care. Definitive treatment—such as surgery for bleeding, medications for cardiogenic shock, or antibiotics for sepsis—can only be provided at the hospital."
            }
          }
        ],
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
