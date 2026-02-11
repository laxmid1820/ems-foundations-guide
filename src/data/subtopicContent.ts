import type { TopicSection } from "./topics";

// EMT-level content - simplest language, lots of analogies
export const emtHeartContent: TopicSection[] = [
  {
    id: "meet-the-heart",
    title: "Meet the Heart – Your Body's Pump",
    content: `Let's start with the basics. Your heart is a pump—that's really all it is. About the size of your fist, it sits slightly left of center in your chest and beats around 100,000 times every day.

Think of it like a house with four rooms. Two rooms upstairs (the atria) and two rooms downstairs (the ventricles). Blood flows in upstairs, then gets pumped out from downstairs.

**Why does this matter for EMS?**
When you're assessing a patient, understanding this basic layout helps you make sense of what you're seeing and hearing. Heart sounds, pulses, blood pressure—they all connect back to this simple pump doing its job.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "emt-heart-intro-q1",
          question: "How many chambers does the heart have?",
          options: ["Two", "Three", "Four", "Six"],
          correctIndex: 2,
          explanation: "The heart has four chambers—two atria (upper) that receive blood and two ventricles (lower) that pump blood out. Think of it like a house with four rooms."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-heart-intro-q2",
          question: "Which chambers of the heart pump blood OUT?",
          options: ["Atria", "Ventricles", "Valves", "Septum"],
          correctIndex: 1,
          explanation: "The ventricles (bottom chambers) are the pumping chambers. The atria (top chambers) receive blood. Blood flows from atria down into ventricles, then gets pumped out."
        }
      }
    ],
    keyPoints: [
      "The heart is a muscular pump with four chambers",
      "Atria (top chambers) receive blood",
      "Ventricles (bottom chambers) pump blood out"
    ],
    proTip: "When you hear 'lub-dub' through your stethoscope, you're hearing the valves between these chambers closing. Pretty cool, right?"
  },
  {
    id: "two-sides",
    title: "Two Sides, Two Jobs",
    content: `Here's something that clicks for a lot of students: think of the heart as two pumps stuck together.

**The Right Side**
The right side of the heart is like a low-pressure garden hose. It receives "used" blood from the body (blood that's delivered its oxygen) and gently pumps it to the lungs to pick up fresh oxygen.

**The Left Side**
The left side is like a fire hose. It receives oxygen-rich blood from the lungs and powerfully pumps it to every part of the body—from your brain to your toes.

This is why the left ventricle has thicker walls. It needs more muscle to push blood all the way around the body.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "emt-twosides-q1",
          question: "Which side of the heart pumps blood to the lungs?",
          options: ["Left side", "Right side", "Both sides equally", "Neither side"],
          correctIndex: 1,
          explanation: "The right side is the 'lung pump'—it receives used blood from the body and sends it to the lungs to pick up fresh oxygen. Think: Right = Respiratory."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-twosides-q2",
          question: "Why is the left ventricle's wall thicker than the right?",
          options: [
            "It holds more blood",
            "It pumps blood farther—to the whole body",
            "It beats faster",
            "It has more valves"
          ],
          correctIndex: 1,
          explanation: "The left ventricle must generate enough pressure to push blood through the entire body—a much longer trip than the right ventricle's short journey to the lungs. More work requires more muscle."
        }
      }
    ],
    keyPoints: [
      "Right side: low-pressure pump to the lungs",
      "Left side: high-pressure pump to the body",
      "Left ventricle is thicker due to greater workload"
    ]
  },
  {
    id: "blood-circuit",
    title: "Following the Blood – A Complete Trip",
    content: `Let's follow a drop of blood through the entire circuit. This is like a road map that helps everything make sense.

1. **Body to Right Atrium**: Used blood (low in oxygen) returns from the body through large veins called the vena cava

2. **Right Atrium to Right Ventricle**: Blood drops down through a valve into the right ventricle

3. **Right Ventricle to Lungs**: The right ventricle pumps blood to the lungs through the pulmonary arteries

4. **Lungs to Left Atrium**: Freshly oxygenated blood returns to the heart through the pulmonary veins

5. **Left Atrium to Left Ventricle**: Blood drops down through another valve

6. **Left Ventricle to Body**: The powerful left ventricle pumps oxygenated blood out through the aorta to the entire body

And then the cycle repeats—over and over, every second of every day.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "emt-circuit-q1",
          question: "After leaving the right ventricle, where does blood go?",
          options: ["To the body via the aorta", "To the lungs via the pulmonary arteries", "To the left atrium directly", "To the brain"],
          correctIndex: 1,
          explanation: "The right ventricle pumps deoxygenated blood to the lungs through the pulmonary arteries. In the lungs, blood picks up oxygen and drops off carbon dioxide before returning to the heart."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-circuit-q2",
          question: "Which large artery carries oxygenated blood from the heart to the rest of the body?",
          options: ["Vena cava", "Pulmonary artery", "Aorta", "Pulmonary vein"],
          correctIndex: 2,
          explanation: "The aorta is the largest artery in the body. It receives oxygenated blood from the left ventricle and distributes it to every organ and tissue."
        }
      }
    ],
    keyPoints: [
      "Blood flows in a continuous loop: body → heart → lungs → heart → body",
      "Pulmonary arteries carry blood TO the lungs",
      "Pulmonary veins carry blood FROM the lungs"
    ],
    rememberThis: "Here's a memory trick: Arteries carry blood AWAY from the heart (both start with 'A'). This is true everywhere in the body."
  },
  {
    id: "heart-sounds",
    title: "What You'll Hear – Heart Sounds",
    content: `When you listen to a patient's heart, you're hearing the valves doing their job.

**"Lub-dub, lub-dub"**
This is the normal heart rhythm. Each sound is a valve closing:

• **Lub** (first sound): The valves between atria and ventricles close
• **Dub** (second sound): The valves leaving the heart close

When these sounds are regular and consistent, that's a good sign. When they're irregular, too fast, too slow, or have extra sounds—that's information telling you something's different.

For now, just focus on recognizing normal. We'll talk about abnormal rhythms later.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "emt-sounds-q1",
          question: "What produces the normal 'lub-dub' heart sounds?",
          options: ["Blood flowing through arteries", "Heart valves closing", "The heart muscle contracting", "Air moving through the lungs"],
          correctIndex: 1,
          explanation: "Heart sounds are made by valves closing. 'Lub' is the AV valves closing as ventricles contract. 'Dub' is the semilunar valves closing as ventricles relax."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-sounds-q2",
          question: "If heart sounds are irregular instead of a steady 'lub-dub,' what does this suggest?",
          options: ["Normal variation", "A possible rhythm abnormality", "The stethoscope is broken", "The patient is breathing too fast"],
          correctIndex: 1,
          explanation: "Irregular heart sounds suggest the heart's rhythm may be abnormal. While not all irregularities are dangerous, they warrant further assessment and monitoring."
        }
      }
    ],
    keyPoints: [
      "Normal heart sounds: regular 'lub-dub' pattern",
      "Each sound is a valve closing",
      "Listen for regularity and consistency"
    ],
    proTip: "Practice listening to heart sounds whenever you can—on yourself, family, friends (with permission!). The more 'normal' you hear, the easier it is to recognize 'abnormal.'"
  },
  {
    id: "knowledge-check",
    title: "Check Your Understanding",
    content: `Let's make sure the key concepts are sticking. Don't worry about getting everything perfect—this is just practice.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "emt-heart-q1",
          question: "Which side of the heart pumps blood to the lungs?",
          options: [
            "Left side",
            "Right side",
            "Both sides equally",
            "Neither—blood flows passively"
          ],
          correctIndex: 1,
          explanation: "The right side of the heart pumps blood to the lungs (pulmonary circulation). The left side pumps to the body. Remember: Right = Respiratory destination!"
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-heart-q2",
          question: "Why is the left ventricle thicker than the right?",
          options: [
            "It holds more blood",
            "It beats faster",
            "It pumps blood farther (to the whole body)",
            "It's a birth defect in most people"
          ],
          correctIndex: 2,
          explanation: "The left ventricle has to pump blood all the way around the body—a much longer journey than the right ventricle's trip to the nearby lungs. More work = more muscle!"
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-heart-q3",
          question: "What is the function of the atria?",
          options: ["Pump blood to the body", "Receive incoming blood", "Generate electrical impulses", "Filter blood"],
          correctIndex: 1,
          explanation: "The atria are the receiving chambers of the heart. The right atrium receives deoxygenated blood from the body, and the left atrium receives oxygenated blood from the lungs."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-heart-q4",
          question: "Blood returning from the body enters the heart through which vessels?",
          options: ["Pulmonary veins", "Aorta", "Vena cava (superior and inferior)", "Coronary arteries"],
          correctIndex: 2,
          explanation: "The superior and inferior vena cava are large veins that return deoxygenated blood from the upper and lower body to the right atrium of the heart."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-heart-q5",
          question: "Which circuit sends blood from the heart to the lungs and back?",
          options: ["Systemic circuit", "Coronary circuit", "Pulmonary circuit", "Lymphatic circuit"],
          correctIndex: 2,
          explanation: "The pulmonary circuit moves blood from the right ventricle to the lungs for gas exchange, then back to the left atrium. The systemic circuit handles body-wide blood delivery."
        }
      }
    ]
  },
  {
    id: "wrap-up",
    title: "You've Got the Basics!",
    content: `That's the foundation of heart anatomy and blood flow. You now understand:

• The heart is a four-chambered pump
• The right side sends blood to the lungs
• The left side sends blood to the body
• Blood flows in a continuous circuit
• Heart sounds tell you the valves are working

This might seem simple, but these concepts are the building blocks for everything else—cardiac emergencies, shock, rhythm interpretation, and more.

**What's Next?**
When you're ready, the AEMT section adds more detail about the electrical system and how cardiac output works. But there's no rush—make sure this foundation feels solid first.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "emt-wrapup-q1",
          question: "Which statement best describes the heart's function?",
          options: ["It filters blood", "It produces oxygen", "It pumps blood through the body", "It stores blood"],
          correctIndex: 2,
          explanation: "The heart is fundamentally a pump. It continuously pumps blood through two circuits—pulmonary (to lungs) and systemic (to body)—to deliver oxygen and remove waste."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-wrapup-q2",
          question: "What is the correct order of blood flow through the heart?",
          options: [
            "Left atrium → left ventricle → lungs → right atrium → right ventricle → body",
            "Right atrium → right ventricle → lungs → left atrium → left ventricle → body",
            "Right ventricle → right atrium → lungs → left ventricle → left atrium → body",
            "Left ventricle → lungs → right ventricle → body"
          ],
          correctIndex: 1,
          explanation: "Deoxygenated blood flows: right atrium → right ventricle → lungs (picks up O₂) → left atrium → left ventricle → body. Then the cycle repeats."
        }
      }
    ],
    keyPoints: [
      "You've learned the essential structure and function",
      "These basics support all advanced cardiac topics",
      "Take your time—solid foundations matter most"
    ],
    rememberThis: "Every paramedic and experienced EMT started exactly where you are now. Understanding these basics puts you on the same path. You're doing great!"
  }
];

export const emtRespiratoryContent: TopicSection[] = [
  {
    id: "breathing-overview",
    title: "Breathing – More Than Just Air In, Air Out",
    content: `Breathing seems simple—air goes in, air goes out. But there's a lot happening in between that matters for patient care.

Think of your respiratory system as a delivery service. The airways are the roads, the lungs are the distribution center, and oxygen is the package being delivered to every cell in your body.

When this delivery system works well, your patient looks comfortable and their color is good. When it doesn't, you'll see signs of distress—and knowing the basics helps you understand why.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "emt-resp-overview-q1",
          question: "What are the two main jobs of the respiratory system?",
          options: [
            "Deliver oxygen and remove carbon dioxide",
            "Pump blood and filter waste",
            "Regulate temperature and produce energy",
            "Digest food and absorb nutrients"
          ],
          correctIndex: 0,
          explanation: "The respiratory system's primary functions are delivering oxygen to the body and removing carbon dioxide (a waste product of metabolism). Both are essential for cellular function."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-resp-overview-q2",
          question: "A patient with respiratory problems will most likely show which sign?",
          options: ["High blood pressure", "Visible signs of distress", "Fever", "Swollen ankles"],
          correctIndex: 1,
          explanation: "Respiratory distress produces visible signs: labored breathing, use of accessory muscles, abnormal positioning, and changes in skin color. These are often the first clues something is wrong."
        }
      }
    ],
    keyPoints: [
      "The respiratory system delivers oxygen to the body",
      "It also removes carbon dioxide (a waste product)",
      "Problems anywhere in the system cause visible signs"
    ]
  },
  {
    id: "the-pathway",
    title: "The Path Air Takes",
    content: `Let's follow air from the outside world to where the magic happens—deep in the lungs.

**Upper Airway**
Air enters through the nose and mouth, passes through the pharynx (throat), and through the larynx (voice box). This area warms, moistens, and filters the air.

**Lower Airway**
From the larynx, air travels down the trachea (windpipe), which splits into two bronchi—one for each lung. These bronchi keep branching into smaller and smaller tubes called bronchioles.

**The Alveoli**
At the end of those tiny bronchioles are clusters of air sacs called alveoli. This is where oxygen passes into the blood and carbon dioxide passes out. Think of them like tiny balloons at the end of a branching tree.

There are about 300 million alveoli in your lungs—that's a lot of surface area for gas exchange!`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "emt-pathway-q1",
          question: "Where does gas exchange actually occur in the lungs?",
          options: ["Trachea", "Bronchi", "Bronchioles", "Alveoli"],
          correctIndex: 3,
          explanation: "Gas exchange happens in the alveoli—tiny air sacs at the end of the bronchiole tree. Their thin walls allow oxygen and carbon dioxide to pass between air and blood."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-pathway-q2",
          question: "Which structure is commonly called the 'windpipe'?",
          options: ["Pharynx", "Larynx", "Trachea", "Bronchus"],
          correctIndex: 2,
          explanation: "The trachea is the windpipe—a rigid tube reinforced with cartilage rings that carries air from the larynx down to where it splits into the two bronchi, one for each lung."
        }
      }
    ],
    keyPoints: [
      "Upper airway: nose, mouth, pharynx, larynx",
      "Lower airway: trachea, bronchi, bronchioles",
      "Alveoli: where oxygen and carbon dioxide are exchanged"
    ],
    proTip: "When you hear wheezing, that's usually the bronchioles narrowing. When you hear stridor (high-pitched sound on inhale), that's usually an upper airway problem."
  },
  {
    id: "normal-breathing",
    title: "What Normal Breathing Looks Like",
    content: `Before you can recognize abnormal, you need to know normal. Here's what healthy breathing looks like in adults:

**Rate**: 12-20 breaths per minute
**Depth**: Adequate chest rise—not too shallow, not exaggerated
**Effort**: Easy and relaxed—no visible struggle
**Sounds**: Quiet and clear (no wheezing, stridor, or gurgling)
**Color**: Normal skin color (no blue or gray tones)

When you assess a patient, you're comparing what you see to this baseline. Any differences are clues about what might be wrong.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "emt-normal-breath-q1",
          question: "What is the normal respiratory rate for a resting adult?",
          options: ["6-10 breaths/min", "12-20 breaths/min", "22-30 breaths/min", "30-40 breaths/min"],
          correctIndex: 1,
          explanation: "Normal adult respiratory rate at rest is 12-20 breaths per minute. Rates outside this range may indicate a problem and warrant further assessment."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-normal-breath-q2",
          question: "Which of these is a sign of NORMAL breathing?",
          options: ["Wheezing sounds", "Use of neck muscles", "Quiet, effortless chest rise", "Blue-tinged lips"],
          correctIndex: 2,
          explanation: "Normal breathing is quiet, effortless, and produces adequate chest rise. Wheezing, accessory muscle use, and cyanosis (blue tinge) are all signs of respiratory distress."
        }
      }
    ],
    keyPoints: [
      "Normal adult rate: 12-20 breaths per minute",
      "Breathing should be effortless and quiet",
      "Good color indicates adequate oxygenation"
    ],
    rememberThis: "Count respirations for 30 seconds and multiply by 2. Patients often change their breathing if they know you're counting, so be subtle!"
  },
  {
    id: "knowledge-check-resp",
    title: "Check Your Understanding",
    content: `Let's see how these concepts are landing.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "emt-resp-q1",
          question: "Where does gas exchange (oxygen in, carbon dioxide out) happen?",
          options: [
            "Trachea",
            "Bronchi",
            "Alveoli",
            "Larynx"
          ],
          correctIndex: 2,
          explanation: "Gas exchange happens in the alveoli—tiny air sacs at the end of the bronchiole tree. The thin walls allow oxygen and carbon dioxide to pass between air and blood."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-resp-q2",
          question: "What is the normal respiratory rate for a resting adult?",
          options: [
            "8-10 breaths per minute",
            "12-20 breaths per minute",
            "22-30 breaths per minute",
            "30-40 breaths per minute"
          ],
          correctIndex: 1,
          explanation: "Normal adult respiratory rate at rest is 12-20 breaths per minute. Faster or slower can indicate a problem (or exercise, anxiety, etc.)."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-resp-q3",
          question: "The upper airway includes all of the following EXCEPT:",
          options: ["Nose and mouth", "Pharynx", "Larynx", "Bronchioles"],
          correctIndex: 3,
          explanation: "Bronchioles are part of the lower airway. The upper airway includes the nose, mouth, pharynx (throat), and larynx (voice box). The trachea marks the transition to the lower airway."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-resp-q4",
          question: "Approximately how many alveoli are in the lungs?",
          options: ["3,000", "30,000", "3 million", "300 million"],
          correctIndex: 3,
          explanation: "There are approximately 300 million alveoli in the lungs, providing an enormous surface area (about the size of a tennis court) for efficient gas exchange."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-resp-q5",
          question: "A blue or gray skin color in a patient most likely indicates:",
          options: ["Fever", "High blood pressure", "Inadequate oxygenation", "Dehydration"],
          correctIndex: 2,
          explanation: "Cyanosis (blue/gray skin color) indicates inadequate oxygenation. It means not enough oxygen is reaching the tissues and is a serious warning sign requiring immediate intervention."
        }
      }
    ]
  }
];

// =====================================================
// AEMT-level content - Adds mechanisms, clinical ties
// =====================================================

export const aemtCardiacContent: TopicSection[] = [
  {
    id: "electrical-system-intro",
    title: "The Heart's Electrical System – Your Built-In Pacemaker",
    content: `You've mastered the basic pump anatomy. Now let's talk about what makes it beat in the first place—the electrical system.

Think of it this way: the heart muscle doesn't wait for the brain to tell it when to beat. It has its own electrical "spark plugs" built right in. This is why a heart can keep beating even when removed from the body (as long as it has oxygen).

**The Big Idea**
Specialized cells in the heart generate electrical impulses that spread through the muscle in a very specific pattern. This organized spread of electricity causes the heart chambers to contract in the right sequence—atria first, then ventricles.

**Why This Matters in the Field**
When you see an irregular rhythm on a monitor, you're seeing the electrical system malfunction. Understanding how it's *supposed* to work helps you recognize—and later, treat—what's going wrong.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-elec-q1",
          question: "Why can a heart continue beating even when removed from the body?",
          options: [
            "The brain sends wireless signals",
            "The heart has its own pacemaker cells that generate impulses",
            "Blood pressure keeps it beating",
            "Muscles contract automatically"
          ],
          correctIndex: 1,
          explanation: "The heart has specialized pacemaker cells (SA node) that generate their own electrical impulses—it doesn't need the brain to tell it when to beat. This intrinsic automaticity is why transplanted hearts work."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-elec-q2",
          question: "An irregular rhythm on a cardiac monitor indicates:",
          options: [
            "Normal heart function",
            "A malfunction in the electrical conduction system",
            "The monitor is broken",
            "The patient is exercising"
          ],
          correctIndex: 1,
          explanation: "Irregular rhythms reflect problems in the heart's electrical system—the organized spread of impulses is disrupted. Understanding normal conduction helps you recognize and interpret what's going wrong."
        }
      }
    ],
    keyPoints: [
      "The heart generates its own electrical impulses",
      "Specialized pacemaker cells create and conduct the signal",
      "Electrical activity causes mechanical contraction"
    ],
    proTip: "Here's a clinical pearl: electrical activity doesn't always mean mechanical contraction. That's why you always check for a pulse—the monitor can show a rhythm while the heart isn't actually pumping (PEA)."
  },
  {
    id: "conduction-pathway",
    title: "Following the Spark – The Conduction Pathway",
    content: `Let's trace the electrical signal from start to finish. This pathway is the same in every healthy heart.

**1. SA Node (Sinoatrial Node)**
Located in the right atrium. This is the heart's natural pacemaker—it fires 60-100 times per minute at rest. When it fires, both atria contract.

**2. AV Node (Atrioventricular Node)**
The signal travels to this "checkpoint" between atria and ventricles. The AV node deliberately slows the signal down slightly. Why? To give the atria time to finish contracting and squeeze their blood into the ventricles before the ventricles contract.

**3. Bundle of His**
From the AV node, the signal shoots down this pathway in the septum (wall between ventricles).

**4. Bundle Branches (Left and Right)**
The signal splits—right branch to the right ventricle, left branch to the left ventricle.

**5. Purkinje Fibers**
These spread throughout both ventricles, causing them to contract together in a coordinated squeeze from bottom to top.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-conduct-q1",
          question: "The heart's natural pacemaker fires at what resting rate?",
          options: [
            "20-40 bpm",
            "40-60 bpm",
            "60-100 bpm",
            "100-150 bpm"
          ],
          correctIndex: 2,
          explanation: "The SA (sinoatrial) node is the heart's natural pacemaker, firing at 60-100 bpm at rest. If the SA node fails, backup pacemakers take over at slower rates—AV node (40-60), ventricles (20-40)."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-conduct-q2",
          question: "The correct conduction pathway sequence is:",
          options: [
            "AV node → SA node → Bundle of His → Purkinje",
            "SA node → AV node → Bundle of His → Bundle Branches → Purkinje",
            "Purkinje → Bundle of His → AV node → SA node",
            "SA node → Purkinje → AV node → Bundle of His"
          ],
          correctIndex: 1,
          explanation: "SA node fires → signal travels to AV node (which delays it) → Bundle of His → right and left Bundle Branches → Purkinje fibers spread through ventricles. This organized sequence ensures coordinated contraction."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-co-q1",
          question: "Cardiac output equals:",
          options: [
            "Heart rate ÷ stroke volume",
            "Stroke volume × heart rate",
            "Blood pressure × heart rate",
            "Preload + afterload"
          ],
          correctIndex: 1,
          explanation: "CO = SV × HR. Stroke volume (~70 mL) times heart rate (~70 bpm) = ~5 L/min. Understanding this equation explains why the body increases heart rate (tachycardia) when stroke volume drops—it's trying to maintain cardiac output."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-co-q2",
          question: "Dehydration reduces cardiac output primarily by decreasing:",
          options: [
            "Afterload",
            "Contractility",
            "Preload",
            "Heart rate"
          ],
          correctIndex: 2,
          explanation: "Dehydration reduces circulating volume, meaning less blood returns to the heart (decreased preload). Less ventricular stretch means weaker contraction (Frank-Starling). This is why IV fluid boluses improve cardiac output in hypovolemia."
        }
      }
    ],
    keyPoints: [
      "SA node: primary pacemaker (60-100 bpm)",
      "AV node: slows signal to allow atrial filling",
      "Bundle branches and Purkinje fibers spread signal to ventricles"
    ],
    rememberThis: "The sequence matters: SA → AV → Bundle of His → Bundle Branches → Purkinje. Think 'SABPP' or create your own mnemonic."
  },
  {
    id: "cardiac-output",
    title: "Cardiac Output – How Much Blood Gets Moved",
    content: `Now that you understand the pump and its electrical system, let's talk about the result: **cardiac output**—how much blood the heart pumps per minute.

**The Formula**
Cardiac Output = Stroke Volume × Heart Rate

• **Stroke Volume**: The amount of blood pumped with each beat (usually about 70 mL in adults)
• **Heart Rate**: How many times the heart beats per minute

A typical adult cardiac output is about 5 liters per minute. That's your entire blood volume pumped every minute!

**What Affects Cardiac Output?**

• **Preload**: How much blood returns to the heart (more stretch = stronger contraction, up to a point)
• **Afterload**: The resistance the heart pumps against (higher blood pressure = harder work)
• **Contractility**: How strongly the heart muscle squeezes`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Preload",
            content: "Think of stretching a rubber band. More blood returning to the heart stretches the ventricle, creating a stronger contraction. This is the Frank-Starling mechanism. Dehydration = less preload = weaker output."
          },
          {
            label: "Afterload",
            content: "Imagine pushing open a door. If someone's pushing back, you work harder. High blood pressure (resistance) means the heart has to work harder to push blood out. Chronic high afterload can lead to heart failure."
          },
          {
            label: "Contractility",
            content: "How hard the muscle itself squeezes, independent of stretch. Medications like epinephrine increase contractility. Heart damage decreases it."
          }
        ]
      }
    ],
    keyPoints: [
      "Cardiac output = stroke volume × heart rate",
      "Preload, afterload, and contractility all affect output",
      "Normal adult cardiac output: ~5 L/min"
    ]
  },
  {
    id: "perfusion-assessment",
    title: "Assessing Perfusion in the Field",
    content: `All this heart physiology leads to one critical question: **Is the patient's tissue getting enough blood?** That's perfusion.

**Signs of Good Perfusion**
• Warm, dry skin with normal color
• Brisk capillary refill (< 2 seconds)
• Strong peripheral pulses
• Normal mental status
• Adequate urine output

**Signs of Poor Perfusion (Shock)**
• Cool, pale, or mottled skin
• Delayed capillary refill (> 2 seconds)
• Weak or absent peripheral pulses
• Altered mental status
• Decreased urine output

**The Skin Tells the Story**
The body prioritizes vital organs (heart, brain, lungs) when perfusion drops. Skin is one of the first areas to show reduced blood flow—that's why checking skin condition is so valuable.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "aemt-perf-1",
            front: "What does delayed capillary refill indicate?",
            back: "Poor peripheral perfusion. Blood isn't returning quickly to the capillary beds, suggesting the body is shunting blood to vital organs. Consider shock."
          },
          {
            id: "aemt-perf-2",
            front: "Why check peripheral vs. central pulses?",
            back: "Peripheral pulses (radial) disappear first when perfusion drops. If you can feel a radial pulse, BP is likely > 80 systolic. Central pulses (carotid) persist longer."
          },
          {
            id: "aemt-perf-3",
            front: "What causes mottled skin?",
            back: "Uneven blood flow to skin capillaries. Blood is being diverted to core organs, causing a patchy, lacy appearance. A late and concerning sign."
          }
        ]
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-perf-q1",
          question: "A patient with cool, pale skin and capillary refill of 4 seconds is showing signs of:",
          options: [
            "Good perfusion",
            "Poor perfusion—blood shunting to vital organs",
            "Fever",
            "Normal aging"
          ],
          correctIndex: 1,
          explanation: "Cool, pale skin and delayed cap refill (>2 sec) indicate the body is shunting blood away from periphery to vital organs. These are early and reliable signs of inadequate perfusion (shock)."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-perf-q2",
          question: "If you can feel a radial pulse, the systolic BP is likely at least:",
          options: [
            "60 mmHg",
            "80 mmHg",
            "100 mmHg",
            "120 mmHg"
          ],
          correctIndex: 1,
          explanation: "The radial pulse is generally palpable when systolic BP exceeds ~80 mmHg. Loss of radial pulse with preserved carotid pulse suggests significant hypotension—the carotid persists at lower pressures (~60 mmHg)."
        }
      }
    ],
    keyPoints: [
      "Perfusion = oxygen delivery to tissues",
      "Skin signs are early indicators of perfusion status",
      "Peripheral changes appear before central changes"
    ],
    proTip: "When assessing perfusion, use the back of your hand on the patient's skin—it's more sensitive to temperature differences than your palm."
  },
  {
    id: "aemt-cardiac-quiz",
    title: "Check Your Understanding",
    content: `Let's reinforce these AEMT-level concepts with some practice questions.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-cardiac-q1",
          question: "The AV node delays the electrical signal. What's the purpose of this delay?",
          options: [
            "To slow the heart rate",
            "To allow the atria to fill the ventricles before ventricular contraction",
            "To protect the ventricles from damage",
            "To synchronize with breathing"
          ],
          correctIndex: 1,
          explanation: "The AV node delay gives the atria time to complete their contraction and empty blood into the ventricles. This 'atrial kick' contributes about 20-30% of ventricular filling—important for optimal cardiac output!"
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-cardiac-q2",
          question: "A patient has cool, mottled skin and weak radial pulses. What does this suggest?",
          options: [
            "Fever",
            "Good perfusion",
            "Poor perfusion/shock",
            "Local injury"
          ],
          correctIndex: 2,
          explanation: "Cool, mottled skin with weak peripheral pulses indicates the body is shunting blood away from the periphery to vital organs. This is a classic presentation of shock (inadequate tissue perfusion)."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-cardiac-q3",
          question: "What is a normal resting cardiac output for an adult?",
          options: [
            "1-2 L/min",
            "3-4 L/min",
            "5-6 L/min",
            "8-10 L/min"
          ],
          correctIndex: 2,
          explanation: "Normal adult cardiac output is approximately 5-6 L/min at rest (70 mL stroke volume × 70-80 bpm). This means your entire blood volume circulates every minute!"
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-cardiac-q4",
          question: "What is the Frank-Starling mechanism?",
          options: [
            "The heart beats faster when stressed",
            "Greater ventricular stretch leads to stronger contraction",
            "The AV node controls heart rate",
            "Blood pressure determines heart rate"
          ],
          correctIndex: 1,
          explanation: "The Frank-Starling mechanism states that more blood returning to the heart stretches the ventricle, creating a stronger contraction—up to a point. This is why fluid boluses improve cardiac output in hypovolemia: more preload = more stretch = stronger beat."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-cardiac-q5",
          question: "A monitor shows organized electrical activity, but you can't feel a pulse. This is called:",
          options: [
            "Ventricular fibrillation",
            "Asystole",
            "Pulseless electrical activity (PEA)",
            "Normal sinus rhythm"
          ],
          correctIndex: 2,
          explanation: "PEA (Pulseless Electrical Activity) is when the heart's electrical system fires but the muscle doesn't contract effectively—electrical activity without mechanical contraction. This is why you always check for a pulse regardless of what the monitor shows."
        }
      }
    ]
  },
  {
    id: "aemt-cardiac-wrapup",
    title: "Putting It Together",
    content: `You've now got a solid understanding of cardiac physiology at the AEMT level:

• **Electrical System**: SA node → AV node → Bundle of His → Bundle branches → Purkinje fibers
• **Cardiac Output**: Stroke volume × heart rate, influenced by preload, afterload, and contractility
• **Perfusion Assessment**: Skin, pulses, mental status, and cap refill tell the story

**Clinical Connection**
This knowledge directly applies to your patient care. When you give a fluid bolus to a hypotensive patient, you're increasing preload to improve stroke volume. When you assist ventilations, you're helping maintain oxygenation for that cardiac output to deliver.

**What's Next?**
The Paramedic section dives into rhythm interpretation, cardiac pharmacology, and 12-lead ECG analysis. But make sure this AEMT foundation is solid first—it's the framework everything else builds on.`,
    keyPoints: [
      "Electrical conduction follows a specific, predictable pathway",
      "Cardiac output depends on multiple factors you can assess and influence",
      "Perfusion assessment guides your treatment decisions"
    ],
    rememberThis: "Every intervention you perform as an AEMT affects one of these factors: heart rate, stroke volume (preload/afterload/contractility), or oxygen delivery. Keep that framework in mind."
  }
];

export const aemtRespiratoryContent: TopicSection[] = [
  {
    id: "ventilation-vs-respiration",
    title: "Ventilation vs. Respiration – The Key Difference",
    content: `At the EMT level, we focused on the airway pathway. Now let's dig deeper into the process itself—and clear up some terminology that trips up a lot of students.

**Ventilation**
The mechanical process of moving air in and out of the lungs. Think of it as the "bellows" action—your diaphragm and intercostal muscles expanding and contracting the chest cavity.

**Respiration**
The actual gas exchange—oxygen moving from air into blood, carbon dioxide moving from blood into air. This happens at the alveolar level.

**Why This Matters**
A patient can be ventilating (moving air) but not respiring adequately (gas exchange is impaired). A patient with severe pneumonia might have normal chest rise but very poor oxygen levels because the diseased alveoli can't exchange gases efficiently.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-vent-q1",
          question: "A patient is moving air well but has an SpO₂ of 84%. The primary problem is:",
          options: [
            "Ventilation failure",
            "Respiration (gas exchange) failure",
            "Cardiac arrest",
            "Equipment malfunction"
          ],
          correctIndex: 1,
          explanation: "Good air movement = adequate ventilation. Low SpO₂ despite this = gas exchange failure. The air is getting in, but oxygen isn't transferring to the blood—possible causes include pneumonia, pulmonary edema, or PE."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-vent-q2",
          question: "Ventilation refers to:",
          options: [
            "Gas exchange at the alveoli",
            "The mechanical movement of air in and out of the lungs",
            "Oxygen binding to hemoglobin",
            "Carbon dioxide production"
          ],
          correctIndex: 1,
          explanation: "Ventilation is purely mechanical—the bellows action of the diaphragm and intercostals moving air. Respiration is the gas exchange that happens at the alveolar level. Both can fail independently."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-mech-q1",
          question: "Visible use of neck muscles during breathing indicates:",
          options: [
            "Normal breathing",
            "Accessory muscle use—the patient is in distress",
            "The patient is exercising",
            "Good respiratory reserve"
          ],
          correctIndex: 1,
          explanation: "Sternocleidomastoid (SCM) and scalene muscles are only recruited when normal respiratory muscles can't meet demand. Accessory muscle use is a red flag for respiratory distress requiring intervention."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-mech-q2",
          question: "Normal expiration at rest is primarily:",
          options: [
            "Active—requiring muscle contraction",
            "Passive—driven by elastic recoil",
            "Controlled by the brain",
            "Powered by the diaphragm contracting"
          ],
          correctIndex: 1,
          explanation: "At rest, expiration is passive—the lungs and chest wall simply recoil to their resting position, pushing air out. Active (forced) expiration using abdominal and internal intercostal muscles occurs during respiratory distress or exercise."
        }
      }
    ],
    keyPoints: [
      "Ventilation = air movement (mechanical)",
      "Respiration = gas exchange (cellular level)",
      "Both processes can fail independently"
    ],
    proTip: "When you hear 'respiratory failure,' ask yourself: is it a ventilation problem (they can't move enough air) or an oxygenation problem (the air isn't getting into the blood)? The treatment differs."
  },
  {
    id: "mechanics-of-breathing",
    title: "The Mechanics – How Air Moves",
    content: `Let's break down the physics of breathing. Understanding this helps you recognize—and fix—ventilation problems.

**Inspiration (Breathing In)**
1. The diaphragm contracts and flattens
2. Intercostal muscles lift the ribs outward
3. The chest cavity expands
4. This creates negative pressure inside the chest
5. Air rushes in to equalize the pressure

**Expiration (Breathing Out)**
At rest, expiration is passive:
1. Muscles relax
2. Elastic recoil of lungs and chest wall pushes air out
3. Diaphragm returns to dome shape

**Forced Expiration**
When a patient is working hard to breathe out (like in asthma), they actively contract abdominal muscles and internal intercostals.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Diaphragm",
            content: "The primary muscle of breathing. A dome-shaped muscle that separates the chest from the abdomen. When it contracts, it flattens, increasing chest volume. Controlled by the phrenic nerve (C3-C5)."
          },
          {
            label: "Intercostals",
            content: "External intercostals lift ribs up and out during inspiration. Internal intercostals pull ribs down during forced expiration. Like handles on a bucket lifting up."
          },
          {
            label: "Accessory Muscles",
            content: "Neck muscles (SCM, scalenes) used only during respiratory distress. If you see these muscles working, the patient is in trouble. Also: nasal flaring, retractions."
          }
        ]
      }
    ],
    keyPoints: [
      "Inspiration is active (muscle contraction)",
      "Normal expiration is passive (elastic recoil)",
      "Accessory muscle use = increased work of breathing"
    ]
  },
  {
    id: "gas-exchange-detailed",
    title: "Gas Exchange – At the Alveolar Level",
    content: `Now let's zoom in on what's happening at the alveoli—where the real magic of respiration occurs.

**The Setup**
Each alveolus is surrounded by tiny capillaries. The wall between them is incredibly thin—just one cell thick on each side. This is where gases cross.

**Diffusion**
Gases move from areas of high concentration to low concentration. No energy required—it's passive:
• **Oxygen**: High in alveolar air → Low in blood → O₂ moves into blood
• **Carbon Dioxide**: High in blood → Low in alveolar air → CO₂ moves into alveoli

**What Can Go Wrong?**
• **Thickened membrane**: Pulmonary edema, fibrosis—gases can't cross as easily
• **Destroyed alveoli**: Emphysema—less surface area for exchange
• **Fluid in alveoli**: Pneumonia, drowning—gases can't reach the membrane
• **V/Q Mismatch**: Ventilation and perfusion don't match (blood goes where air isn't, or vice versa)`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "aemt-resp-1",
            front: "What is V/Q mismatch?",
            back: "Ventilation/Perfusion mismatch. Occurs when areas of the lung receive air but not blood (dead space) or blood but not air (shunt). Both impair gas exchange."
          },
          {
            id: "aemt-resp-2",
            front: "Why do CHF patients have crackles?",
            back: "Heart failure causes fluid backup into the pulmonary circulation. This fluid leaks into alveoli, creating crackles when you auscultate and impairing gas exchange."
          },
          {
            id: "aemt-resp-3",
            front: "What does diffusion capacity mean?",
            back: "How efficiently gases cross the alveolar-capillary membrane. Decreased in conditions that thicken the membrane (fibrosis) or destroy surface area (emphysema)."
          }
        ]
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-gas-q1",
          question: "Oxygen moves from alveoli into the blood by:",
          options: [
            "Active transport requiring energy",
            "Passive diffusion along a concentration gradient",
            "Being pumped by the heart",
            "Osmosis"
          ],
          correctIndex: 1,
          explanation: "Gas exchange is passive diffusion—gases move from areas of high concentration to low concentration. No energy required. Oxygen is high in alveolar air and low in blood, so it naturally moves into the blood."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-gas-q2",
          question: "Pulmonary edema impairs gas exchange by:",
          options: [
            "Constricting the airways",
            "Creating a fluid barrier between alveoli and capillaries",
            "Destroying the diaphragm",
            "Increasing blood flow"
          ],
          correctIndex: 1,
          explanation: "Fluid in the alveoli thickens the barrier gases must cross. Normally the alveolar-capillary membrane is one cell thick—adding fluid creates a diffusion barrier that slows oxygen transfer into the blood."
        }
      }
    ],
    keyPoints: [
      "Diffusion is passive—driven by concentration gradients",
      "Membrane thickness and surface area affect gas exchange",
      "V/Q matching is essential for efficient oxygenation"
    ],
    rememberThis: "High oxygen + high-flow can help with diffusion problems by maximizing the gradient. But if alveoli are full of fluid, you need to address the fluid."
  },
  {
    id: "respiratory-conditions",
    title: "Common Conditions – Connecting Physiology to Pathology",
    content: `Let's connect this physiology to conditions you'll see in the field.

**Asthma / COPD**
• Problem: Bronchiole constriction and inflammation
• Effect: Air trapping, prolonged expiration
• Signs: Wheezing, prolonged expiratory phase, accessory muscle use

**Pneumonia**
• Problem: Alveoli filled with fluid/pus
• Effect: Decreased gas exchange surface
• Signs: Crackles, fever, productive cough, low SpO₂

**Pulmonary Edema**
• Problem: Fluid in alveoli (usually from heart failure)
• Effect: Diffusion barrier + shunting
• Signs: Crackles, pink frothy sputum, JVD, edema

**Pulmonary Embolism**
• Problem: Blood clot blocks pulmonary artery
• Effect: Dead space (ventilation without perfusion)
• Signs: Sudden dyspnea, pleuritic chest pain, clear lungs`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-respcond-q1",
          question: "Wheezing and prolonged expiration are characteristic of:",
          options: [
            "Pneumonia",
            "Asthma or COPD",
            "Pulmonary embolism",
            "Tension pneumothorax"
          ],
          correctIndex: 1,
          explanation: "Asthma and COPD cause bronchiole constriction and inflammation, creating the characteristic wheeze as air squeezes through narrowed airways. The prolonged expiratory phase reflects air trapping."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-respcond-q2",
          question: "Sudden dyspnea with clear lung sounds should make you consider:",
          options: [
            "Asthma exacerbation",
            "Pulmonary embolism",
            "Pneumonia",
            "COPD"
          ],
          correctIndex: 1,
          explanation: "PE causes dead space—ventilation without perfusion. The lungs sound clear because air moves normally, but a clot blocks blood flow so gas exchange can't occur in the affected area. Clear lungs + severe hypoxia = think PE."
        }
      }
    ],
    keyPoints: [
      "Each condition affects a specific part of respiratory physiology",
      "Understanding the mechanism guides your assessment findings",
      "Treatment targets the underlying problem"
    ],
    proTip: "Clear lung sounds with severe dyspnea? Think PE. The lungs are ventilating fine—blood just isn't getting there."
  },
  {
    id: "aemt-resp-quiz",
    title: "Check Your Understanding",
    content: `Test your grasp of these AEMT respiratory concepts.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-resp-q1",
          question: "A patient is moving air adequately (good chest rise) but has an SpO₂ of 82%. This is primarily a problem with:",
          options: [
            "Ventilation",
            "Respiration (gas exchange)",
            "Heart rate",
            "Blood pressure"
          ],
          correctIndex: 1,
          explanation: "Good chest rise = adequate ventilation (air movement). Low SpO₂ despite adequate ventilation indicates a gas exchange (respiration) problem—the air isn't getting into the blood properly."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-resp-q2",
          question: "Which finding indicates the patient is using accessory muscles?",
          options: [
            "Normal chest rise",
            "Visible use of neck muscles (SCM) during breathing",
            "Regular respiratory rate",
            "Clear lung sounds"
          ],
          correctIndex: 1,
          explanation: "Sternocleidomastoid (SCM) and scalene muscle use during breathing indicates the patient is working harder than normal—accessory muscle use is a red flag for respiratory distress."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-resp-q3",
          question: "A patient with sudden dyspnea has clear lung sounds but is very hypoxic. What should you suspect?",
          options: [
            "Asthma",
            "Pneumonia",
            "Pulmonary embolism",
            "Bronchitis"
          ],
          correctIndex: 2,
          explanation: "Sudden onset dyspnea with clear lungs and hypoxia is classic for pulmonary embolism. The lungs are ventilating, but a clot is preventing blood flow—creating 'dead space' where gas exchange can't occur."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-resp-q4",
          question: "What does V/Q mismatch mean?",
          options: [
            "The heart is beating irregularly",
            "Ventilation and perfusion aren't matched in parts of the lung",
            "The patient has a fever",
            "Blood oxygen is too high"
          ],
          correctIndex: 1,
          explanation: "V/Q mismatch occurs when areas of lung receive air but not blood (dead space—like in PE) or blood but not air (shunt—like in pneumonia). Both impair gas exchange and cause hypoxia."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-resp-q5",
          question: "CHF patients have crackles because:",
          options: [
            "Their airways are constricted",
            "Fluid has leaked from pulmonary vessels into alveoli",
            "They have a pneumothorax",
            "Their diaphragm is paralyzed"
          ],
          correctIndex: 1,
          explanation: "Heart failure causes fluid backup into the pulmonary circulation. The elevated pressure pushes fluid through capillary walls into alveoli, creating the crackling sounds on auscultation and impairing gas exchange."
        }
      }
    ]
  },
  {
    id: "aemt-resp-wrapup",
    title: "AEMT Respiratory Summary",
    content: `You've built on your EMT foundation with a deeper understanding:

• **Ventilation vs. Respiration**: Mechanical air movement vs. gas exchange—both can fail
• **Breathing Mechanics**: Diaphragm, intercostals, and the physics of air movement
• **Gas Exchange**: Diffusion at the alveolar-capillary membrane
• **Clinical Connections**: How pathology disrupts normal physiology

**Assessment Application**
When you assess a dyspneic patient, you're now asking:
- Is air getting in and out? (Ventilation)
- Is oxygen getting into the blood? (Gas exchange)
- What's the underlying cause? (Mechanism)

This framework guides your treatment decisions—from positioning to medications to airway interventions.`,
    keyPoints: [
      "Understand the difference between ventilation and respiration failures",
      "Recognize signs of increased work of breathing",
      "Connect physical findings to underlying pathophysiology"
    ],
    rememberThis: "The best AEMT providers don't just treat symptoms—they understand mechanisms. That understanding helps you anticipate what comes next and stay ahead of deterioration."
  }
];

// =====================================================
// Paramedic-level content - Deep clinical reasoning
// =====================================================

export const paramedicCardiacContent: TopicSection[] = [
  {
    id: "acs-overview",
    title: "Acute Coronary Syndromes – The Complete Picture",
    content: `At the paramedic level, you need to understand the full spectrum of acute coronary syndromes (ACS)—from pathophysiology to pharmacology to definitive care pathways.

**What is ACS?**
ACS is an umbrella term for conditions caused by sudden reduced blood flow to the heart muscle. The spectrum includes:
• **Unstable Angina**: Reduced flow but no cardiac cell death (yet)
• **NSTEMI**: Partial blockage with some myocardial damage
• **STEMI**: Complete blockage with significant myocardial infarction

**The Underlying Mechanism**
Most ACS results from atherosclerotic plaque rupture:
1. Plaque in coronary artery ruptures or erodes
2. Platelet aggregation and thrombus formation at the site
3. Artery becomes partially or completely occluded
4. Myocardial tissue distal to blockage becomes ischemic
5. If perfusion isn't restored → infarction (cell death)`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Unstable Angina",
            content: "New onset angina, or existing angina that's gotten worse (more frequent, less exertion needed, lasting longer). Troponin negative—no cell death yet. High risk of progression to MI."
          },
          {
            label: "NSTEMI",
            content: "Partial occlusion or complete occlusion with collateral flow. Troponin positive (myocardial damage occurring). No ST elevation on ECG—may see ST depression or T-wave changes."
          },
          {
            label: "STEMI",
            content: "Complete occlusion of coronary artery. Transmural ischemia → ST elevation on ECG. Time-critical emergency. 'Time is muscle'—every minute of delay = more heart death."
          }
        ]
      }
    ],
    keyPoints: [
      "ACS exists on a spectrum from unstable angina to STEMI",
      "Plaque rupture with thrombus formation is the common mechanism",
      "ECG and troponins differentiate the types"
    ],
    proTip: "STEMI equivalents exist! Posterior MI and left main occlusion may not show classic ST elevation. Learn to recognize de Winter T-waves and Wellens' syndrome."
  },
  {
    id: "coronary-anatomy",
    title: "Coronary Artery Anatomy – Know the Territory",
    content: `Each coronary artery supplies specific regions of the heart. When you identify which artery is blocked, you can predict complications.

**Right Coronary Artery (RCA)**
• Supplies: Right atrium, right ventricle, inferior wall of left ventricle
• SA node in 60% of people, AV node in 90%
• Occlusion → Inferior MI, often with bradycardia/heart blocks

**Left Main Coronary Artery**
Splits into:

**Left Anterior Descending (LAD)**
• Supplies: Anterior wall of left ventricle, most of septum
• "Widow maker"—large territory
• Occlusion → Anterior MI, often with pump failure

**Left Circumflex (LCx)**
• Supplies: Lateral and posterior left ventricle
• SA node in 40% of people
• Occlusion → Lateral/posterior MI`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "para-card-1",
            front: "Inferior STEMI on ECG—which leads show ST elevation?",
            back: "Leads II, III, and aVF. These leads 'look at' the inferior (diaphragmatic) surface of the heart, supplied by the RCA (usually)."
          },
          {
            id: "para-card-2",
            front: "Why does RCA occlusion often cause bradycardia?",
            back: "The RCA supplies the SA node in 60% and AV node in 90% of people. Ischemia to these structures causes slowed conduction or heart blocks."
          },
          {
            id: "para-card-3",
            front: "What makes LAD occlusion so dangerous?",
            back: "The LAD supplies the largest territory—anterior wall and septum. Large MI → significant pump failure, cardiogenic shock, and high mortality."
          },
          {
            id: "para-card-4",
            front: "Which leads show lateral wall changes?",
            back: "Leads I, aVL, V5, and V6. Lateral wall is typically supplied by LCx or diagonal branches of LAD."
          }
        ]
      }
    ],
    keyPoints: [
      "RCA: inferior wall, conduction system nodes",
      "LAD: anterior wall, septum—largest territory",
      "LCx: lateral and posterior walls"
    ],
    rememberThis: "When you see an inferior MI (II, III, aVF elevation), always get a right-sided ECG. Right ventricular infarction changes your fluid management dramatically."
  },
  {
    id: "cardiac-pharmacology",
    title: "Cardiac Pharmacology – Mechanism-Based Prescribing",
    content: `Let's connect the drugs you give to the pathophysiology you're treating.

**Aspirin**
• Mechanism: Irreversibly inhibits cyclooxygenase (COX) → blocks thromboxane A2 → inhibits platelet aggregation
• ACS Role: Prevents further platelet clumping at the thrombus site
• Dose: 162-325 mg chewed (faster absorption)

**Nitroglycerin**
• Mechanism: Releases nitric oxide → venous dilation (reduces preload) and some coronary vasodilation
• ACS Role: Decreases myocardial oxygen demand, may improve coronary flow
• Caution: Avoid in RV infarct (they're preload dependent) and with phosphodiesterase inhibitors

**Morphine (or Fentanyl)**
• Mechanism: μ-opioid receptor agonist → pain relief and anxiolysis → reduces catecholamine surge
• ACS Role: Decreases oxygen demand by reducing sympathetic response
• Considerations: Current evidence questions routine morphine use—reserved for refractory pain

**Heparin/Anticoagulants**
• Mechanism: Inhibits clotting cascade factors → prevents thrombus extension
• ACS Role: Prevents the clot from growing larger while waiting for definitive care`,
    keyPoints: [
      "Each ACS medication targets a specific physiologic mechanism",
      "Aspirin: antiplatelet (prevention of clot growth)",
      "Nitroglycerin: vasodilation (reduce demand, improve supply)",
      "Know contraindications as well as indications"
    ],
    proTip: "Think 'MONA' is outdated? You're right. Current guidelines emphasize aspirin, anticoagulation, and rapid cath lab activation. Morphine and nitrates have their place but aren't given reflexively."
  },
  {
    id: "rhythm-recognition",
    title: "Rhythm Recognition – From Physiology to ECG",
    content: `The ECG is a recording of the heart's electrical activity. Every wave, segment, and interval corresponds to what's happening electrically.

**The Normal Sinus Rhythm**
• P wave: Atrial depolarization (SA node fires, atria contract)
• PR interval: Conduction through AV node (the delay we discussed)
• QRS complex: Ventricular depolarization
• T wave: Ventricular repolarization
• QT interval: Total ventricular electrical activity

**Reading for Ischemia/Infarct**
• ST elevation: Acute transmural injury (STEMI)
• ST depression: Subendocardial ischemia or reciprocal changes
• T wave inversion: Ischemia (may be old or evolving)
• Q waves: Dead myocardium (infarct, may be old)`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "STEMI Recognition",
            content: "ST elevation ≥1mm in 2+ contiguous leads (limb leads) or ≥2mm (precordial leads). New LBBB with ACS symptoms is STEMI equivalent. Activate cath lab immediately."
          },
          {
            label: "Lethal Rhythms",
            content: "V-fib: chaotic, no organized rhythm. V-tach: wide, fast, regular. Both need immediate defibrillation (pulseless) or cardioversion (with pulse but unstable)."
          },
          {
            label: "Heart Blocks",
            content: "1st degree: prolonged PR (>200ms). 2nd degree Type I (Wenckebach): progressive PR lengthening. 2nd degree Type II: dropped QRS without warning. 3rd degree: complete dissociation. Type II and 3rd degree need pacing."
          }
        ]
      }
    ],
    keyPoints: [
      "Each ECG component represents specific electrical activity",
      "ST elevation = acute injury requiring emergent intervention",
      "Lethal rhythms require immediate recognition and treatment"
    ]
  },
  {
    id: "para-cardiac-quiz",
    title: "Paramedic Cardiac Assessment",
    content: `Test your paramedic-level cardiac knowledge.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "para-cardiac-q1",
          question: "A patient with inferior STEMI has JVD and hypotension. What should you suspect?",
          options: [
            "Left ventricular failure",
            "Right ventricular infarction",
            "Cardiac tamponade",
            "Tension pneumothorax"
          ],
          correctIndex: 1,
          explanation: "Inferior MI + JVD + hypotension = classic right ventricular infarction. The RV is failing and can't fill the LV. These patients are preload-dependent—give fluids, AVOID nitrates."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-cardiac-q2",
          question: "Why is aspirin chewed rather than swallowed for ACS?",
          options: [
            "Tastes better",
            "Faster absorption for more rapid antiplatelet effect",
            "Less stomach upset",
            "Standard protocol only"
          ],
          correctIndex: 1,
          explanation: "Chewing aspirin provides buccal absorption and faster onset of antiplatelet effects. In ACS, time matters—you want platelet inhibition as quickly as possible."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-cardiac-q3",
          question: "Which ECG finding indicates the need for emergent cardiac catheterization?",
          options: [
            "Sinus bradycardia",
            "First-degree AV block",
            "ST elevation in two contiguous leads",
            "Premature ventricular contractions"
          ],
          correctIndex: 2,
          explanation: "ST elevation in two or more contiguous leads indicates STEMI—complete coronary occlusion requiring emergent PCI (percutaneous coronary intervention). Time to reperfusion is critical."
        }
      }
    ]
  },
  {
    id: "para-cardiac-wrapup",
    title: "Cardiac Mastery – Paramedic Level",
    content: `You've completed the paramedic cardiac module. You now understand:

• **ACS Pathophysiology**: The spectrum from unstable angina to STEMI
• **Coronary Anatomy**: Which arteries supply which territories
• **Pharmacology**: Mechanism-based medication selection
• **ECG Interpretation**: Recognizing ischemia, injury, and lethal rhythms

**The Paramedic Difference**
At this level, you're not just following algorithms—you're understanding *why*. When you know that RCA occlusion affects the conduction system, bradycardia in an inferior MI makes sense. When you understand preload dependence, avoiding nitrates in RV infarct becomes obvious.

This pathophysiology-based thinking is what separates excellent paramedics from adequate ones. Keep building on this foundation.`,
    keyPoints: [
      "ACS is a spectrum—ECG and enzymes differentiate",
      "Coronary anatomy predicts complications",
      "Every medication has a physiologic rationale",
      "Clinical reasoning > rote algorithm following"
    ],
    rememberThis: "The best paramedics think like physicians: What's the pathophysiology? What's my differential? How does this treatment affect the underlying problem? You've got the foundation for this thinking."
  }
];

export const paramedicRespiratoryContent: TopicSection[] = [
  {
    id: "advanced-airway-decision",
    title: "Advanced Airway Decision-Making",
    content: `You've learned the mechanics and pathophysiology. Now let's talk about decision-making for advanced airways—the cognitive work behind the skills.

**The Fundamental Question**
Before you intubate, ask: "Does this patient need an advanced airway *right now*, or can I manage them another way?"

**Indications for Advanced Airway**
• Apnea or near-apnea that can't be supported with BVM
• Inability to maintain airway patency despite positioning/adjuncts
• Need for prolonged ventilation with paralysis (RSI)
• Need for definitive airway protection (GCS ≤8, absent gag)

**When NOT to Rush**
• Patient you can oxygenate and ventilate with BVM
• Short transport where advanced airway adds risk without benefit
• Difficult airway features with low success probability`,
    keyPoints: [
      "Intubation is a means, not an end—oxygenation is the goal",
      "Consider risk vs. benefit for each patient",
      "BVM is not failure—it's a valid management strategy"
    ],
    proTip: "The most dangerous intubation is the one you attempt without a backup plan. Before every attempt: What's plan B? Plan C? Who's my best BVM person if I fail?"
  },
  {
    id: "difficult-airway-prediction",
    title: "Predicting and Preparing for the Difficult Airway",
    content: `Field intubation is harder than the OR—suboptimal positioning, blood/vomit, limited equipment. Anticipating difficulty is half the battle.

**LEMON Assessment**
• **L**ook externally: Facial trauma, obesity, short neck, large tongue
• **E**valuate 3-3-2: Mouth opening, hyoid-chin, thyroid-mouth distances
• **M**allampati: Visualization of posterior pharynx (often impractical in field)
• **O**bstruction: Stridor, swelling, tumor, foreign body
• **N**eck mobility: Cervical collar, arthritis, ankylosis

**When You Identify Difficult Features**
1. Get your most experienced person on the airway
2. Have supraglottic device ready as backup
3. Consider surgical airway equipment at bedside
4. Optimize everything: Position, suction, preoxygenation
5. Consider awake intubation or transport without advanced airway`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "para-resp-1",
            front: "What does the 3-3-2 rule assess?",
            back: "3 fingers mouth opening, 3 fingers hyoid to chin, 2 fingers thyroid to floor of mouth. Assesses for adequate space for laryngoscopy and tube passage."
          },
          {
            id: "para-resp-2",
            front: "Why is obesity a difficult airway predictor?",
            back: "Reduced functional residual capacity (faster desaturation), excess pharyngeal tissue, limited neck extension, and difficult mask seal. Ramped positioning helps."
          },
          {
            id: "para-resp-3",
            front: "What is the 'can't intubate, can't oxygenate' (CICO) scenario?",
            back: "Failed intubation AND failed BVM/supraglottic device. The emergent surgical airway situation. Rare but must be prepared for it."
          }
        ]
      }
    ],
    keyPoints: [
      "Anticipate difficulty before attempting intubation",
      "LEMON assessment identifies potential problems",
      "Always have a backup plan before you start"
    ]
  }
];

// EMT Anatomy and Physiology Basics - comprehensive cardiovascular and respiratory overview
export const emtAnatomyPhysiologyContent: TopicSection[] = [
  {
    id: "why-anatomy-matters",
    title: "Why Anatomy Matters in EMS",
    content: `Learning anatomy can feel like drinking from a firehose—there's so much to take in. But here's the encouraging truth: you don't need to memorize every bone and muscle. As an EMT, you need to understand the structures that affect breathing, circulation, and consciousness. That's your priority.

**Anatomy = Structure** (where things are)
**Physiology = Function** (what they do)

When you understand structure and function, you can predict what happens when things go wrong. This foundation supports everything ahead: patient assessment, shock recognition, cardiac emergencies, respiratory distress—all of it builds on what you learn here.`,
    blocks: [
      { type: "quiz", quiz: { id: "ap-intro-q1", question: "What is the difference between anatomy and physiology?", options: ["Anatomy is about cells; physiology is about organs", "Anatomy is structure; physiology is function", "Anatomy is function; physiology is structure", "There is no difference"], correctIndex: 1, explanation: "Anatomy describes WHERE things are (structure), while physiology describes WHAT they do (function). Both are essential for understanding how the body works and what happens when it fails." } },
      { type: "quiz", quiz: { id: "ap-intro-q2", question: "Which body systems should EMTs focus on most?", options: ["Digestive and urinary", "Cardiovascular and respiratory", "Integumentary and endocrine", "Reproductive and lymphatic"], correctIndex: 1, explanation: "Cardiovascular and respiratory are the priority because they handle oxygen delivery—the most time-critical function. When either fails, cells die quickly, especially in the brain." } }
    ],
    keyPoints: [
      "Anatomy = structure (where things are)",
      "Physiology = function (what they do)",
      "Focus on structures that affect breathing, circulation, and consciousness"
    ],
    proTip: "You don't need to memorize every bone and muscle. Focus on the structures that affect breathing, circulation, and consciousness—those are your priorities in the field."
  },
  {
    id: "body-systems-overview",
    title: "Body Systems Overview – The Big Picture",
    content: `The human body has 11 major organ systems, each with specialized functions. They don't work in isolation—when one system fails, others are affected. For EMTs, two systems demand the most attention: **cardiovascular** and **respiratory**.

These two systems work together to deliver oxygen to every cell in your body. The respiratory system brings oxygen in; the cardiovascular system delivers it. When either fails, cells begin to die—and the brain is particularly sensitive.`,
    blocks: [
      { type: "quiz", quiz: { id: "ap-systems-q1", question: "When the respiratory system fails, what happens to the cardiovascular system?", options: ["Nothing—they work independently", "The heart rate increases to compensate", "Blood pressure always drops", "The heart stops immediately"], correctIndex: 1, explanation: "Body systems are interconnected. When the respiratory system can't deliver enough oxygen, the cardiovascular system compensates by increasing heart rate (tachycardia) to circulate available oxygen faster." } },
      { type: "quiz", quiz: { id: "ap-systems-q2", question: "Altered mental status most directly indicates a problem with which system?", options: ["Musculoskeletal", "Integumentary", "Nervous", "Digestive"], correctIndex: 2, explanation: "The nervous system (brain) controls consciousness. Altered mental status—confusion, unresponsiveness, agitation—indicates the brain isn't functioning normally, often due to inadequate oxygen or blood flow." } }
    ],
    keyPoints: [
      "Systems depend on each other—failure in one affects others",
      "Cardiovascular and respiratory are your primary focus as an EMT",
      "Signs and symptoms connect to specific system problems"
    ]
  },
  {
    id: "heart-anatomy",
    title: "Heart Anatomy – Your Body's Pump",
    content: `The heart is a muscular pump about the size of your fist, located slightly left of center in your chest. It has four chambers that work together to move blood through two separate circuits.

**Think of it like a house with four rooms:**
• Two rooms upstairs (atria) – they receive blood
• Two rooms downstairs (ventricles) – they pump blood out

The right side of the heart handles blood going TO the lungs. The left side handles blood going TO the body. They work simultaneously, every beat.

**Why the left side is thicker:**
The left ventricle has the thickest walls because it works the hardest—pumping blood all the way to your fingertips and toes. The right ventricle only needs to push blood to the nearby lungs, so it requires less muscle.

**The valves:**
One-way doors between chambers and at the exits. They prevent backflow. When you hear "lub-dub" through your stethoscope, you're hearing valves closing.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "anatomy-fc-ra",
            front: "Right Atrium",
            back: "Upper right chamber. Receives deoxygenated blood from the body via the superior and inferior vena cava. Thin-walled receiving chamber."
          },
          {
            id: "anatomy-fc-rv",
            front: "Right Ventricle",
            back: "Lower right chamber. Pumps blood to the lungs via the pulmonary arteries. Lower pressure than the left side. Wall is thinner than left ventricle."
          },
          {
            id: "anatomy-fc-la",
            front: "Left Atrium",
            back: "Upper left chamber. Receives oxygen-rich blood from the lungs via the pulmonary veins (4 total). Thin-walled receiving chamber."
          },
          {
            id: "anatomy-fc-lv",
            front: "Left Ventricle",
            back: "Lower left chamber. Pumps oxygenated blood to the entire body via the aorta. Thickest wall of all chambers—works the hardest."
          },
          {
            id: "anatomy-fc-aorta",
            front: "Aorta",
            back: "Largest artery in the body. Carries oxygenated blood from the left ventricle to all body tissues. Arches up and curves down through the chest and abdomen."
          },
          {
            id: "anatomy-fc-vc",
            front: "Vena Cava (Superior & Inferior)",
            back: "Two large veins that return deoxygenated blood from the body to the right atrium. Superior drains head/arms; Inferior drains abdomen/legs."
          }
        ]
      },
      { type: "quiz", quiz: { id: "ap-heart-q1", question: "What are the one-way doors between heart chambers called?", options: ["Septa", "Valves", "Nodes", "Vessels"], correctIndex: 1, explanation: "Heart valves are one-way doors that prevent blood from flowing backward. When they close, they produce the 'lub-dub' sounds you hear through a stethoscope." } },
      { type: "quiz", quiz: { id: "ap-heart-q2", question: "The right side of the heart handles blood going to the:", options: ["Brain", "Body", "Lungs", "Liver"], correctIndex: 2, explanation: "The right side of the heart receives deoxygenated blood from the body and pumps it to the lungs to pick up oxygen. Remember: Right = Respiratory destination." } }
    ],
    keyPoints: [
      "Right side = to lungs (low pressure, thinner walls)",
      "Left side = to body (high pressure, thicker walls)",
      "Valves prevent backflow—you hear them close as 'lub-dub'"
    ],
    rememberThis: "Right side = Respiratory destination (lungs). Left side = Loaded with oxygen for the body. The first letters match—R to R, L to L!"
  },
  {
    id: "blood-circulation",
    title: "Blood Circulation – Two Loops, One System",
    content: `Blood travels in two distinct circuits that work simultaneously. Understanding these circuits helps you predict what happens when problems occur.

**The Simple Version:**
• Pulmonary circuit = Heart → Lungs → Heart (pick up oxygen)
• Systemic circuit = Heart → Body → Heart (deliver oxygen)

**A Key Exception to Remember:**
Normally, arteries carry oxygenated blood and veins carry deoxygenated blood. But the pulmonary vessels are backwards:
• Pulmonary ARTERIES carry deoxygenated blood TO the lungs
• Pulmonary VEINS carry oxygenated blood FROM the lungs

This is the only exception in the body. The naming is based on direction (arteries = away from heart, veins = toward heart), not oxygen content.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Pulmonary Circulation",
            content: "The loop between heart and lungs. Purpose: Pick up oxygen, drop off carbon dioxide.",
            bullets: [
              "Route: Right ventricle → Pulmonary arteries → Lungs → Pulmonary veins → Left atrium",
              "Pressure: Low (lungs are delicate, don't need high pressure)",
              "Time: Blood spends only seconds in lung capillaries",
              "Gas exchange: CO₂ out, O₂ in at the alveolar level",
              "Clinical connection: Pulmonary embolism blocks this circuit"
            ]
          },
          {
            label: "Systemic Circulation",
            content: "The loop between heart and body. Purpose: Deliver oxygen and nutrients, pick up waste.",
            bullets: [
              "Route: Left ventricle → Aorta → Body tissues → Vena cava → Right atrium",
              "Pressure: High (must reach from head to toes)",
              "Distance: Travels through approximately 60,000 miles of blood vessels",
              "Delivery: Oxygen and nutrients drop off at capillary beds",
              "Clinical connection: Shock affects systemic perfusion"
            ]
          }
        ]
      },
      { type: "quiz", quiz: { id: "ap-circ-q1", question: "What makes the pulmonary arteries unique compared to all other arteries?", options: ["They are the largest", "They carry deoxygenated blood", "They have no valves", "They connect to the brain"], correctIndex: 1, explanation: "Pulmonary arteries are the only arteries that carry deoxygenated blood. Arteries are named by direction (away from heart), not oxygen content. The pulmonary veins are similarly unique—they carry oxygenated blood." } },
      { type: "quiz", quiz: { id: "ap-circ-q2", question: "A pulmonary embolism primarily disrupts which circuit?", options: ["Systemic", "Coronary", "Pulmonary", "Lymphatic"], correctIndex: 2, explanation: "A pulmonary embolism is a blood clot that blocks blood flow in the pulmonary circuit, preventing gas exchange. Blood gets to the lungs but can't pass through the blocked vessel, creating 'dead space.'" } }
    ],
    keyPoints: [
      "Pulmonary arteries carry deoxygenated blood (the one exception)",
      "Pulmonary veins carry oxygenated blood (the other exception)",
      "Both circuits must work together for oxygen delivery to occur"
    ],
    proTip: "When you check a radial pulse, you're feeling systemic circulation. When you listen to breath sounds, you're assessing where pulmonary circulation exchanges gases. Both assessments tell you about the whole system."
  },
  {
    id: "respiratory-anatomy",
    title: "Respiratory Anatomy – The Airway Tree",
    content: `Air travels a specific path from outside your body to deep in the lungs. Each structure along the way has a job: warming, moistening, filtering, and eventually exchanging gases.

**Upper Airway** (above the vocal cords):
• Nose/mouth: Entry points, initial filtering
• Pharynx: The throat, shared pathway for air and food
• Larynx: Voice box, contains the epiglottis that protects the trachea

**Lower Airway** (below the vocal cords):
• Trachea: The windpipe, reinforced with cartilage rings
• Bronchi: Two main branches, one to each lung
• Bronchioles: Smaller and smaller branches
• Alveoli: Tiny air sacs where gas exchange happens

**The Tree Analogy:**
Think of the airway like an upside-down tree. The trachea is the trunk. It splits into two main branches (bronchi). Those split into smaller branches (bronchioles). At the very end are tiny leaves (alveoli) where the actual work of oxygen exchange occurs.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "resp-fc-pharynx",
            front: "Pharynx",
            back: "The throat. Shared pathway for air and food. Divided into nasopharynx (behind nose), oropharynx (behind mouth), and laryngopharynx. Common site of obstruction in unconscious patients."
          },
          {
            id: "resp-fc-larynx",
            front: "Larynx",
            back: "Voice box. Contains the vocal cords and epiglottis. The epiglottis covers the airway during swallowing to prevent aspiration. Key landmark for airway management."
          },
          {
            id: "resp-fc-trachea",
            front: "Trachea",
            back: "Windpipe. Tube of C-shaped cartilage rings connecting larynx to bronchi. About 4-5 inches long in adults. Cartilage keeps it open; open side faces the esophagus."
          },
          {
            id: "resp-fc-bronchi",
            front: "Bronchi",
            back: "Two main tubes (left and right mainstem) branching from the trachea. Each leads to one lung. Right bronchus is shorter and straighter—aspirated objects often go here."
          },
          {
            id: "resp-fc-alveoli",
            front: "Alveoli",
            back: "Tiny air sacs at the end of bronchioles. Where gas exchange happens—O₂ in, CO₂ out. About 300 million in your lungs. Walls are one cell thick to allow diffusion."
          },
          {
            id: "resp-fc-diaphragm",
            front: "Diaphragm",
            back: "Dome-shaped muscle below the lungs, separating chest from abdomen. Primary muscle of breathing. When it contracts (flattens), it creates negative pressure that draws air in."
          }
        ]
      },
      { type: "quiz", quiz: { id: "ap-resp-q1", question: "Why does the right mainstem bronchus receive aspirated objects more often?", options: ["It is wider and longer", "It is shorter and straighter", "It has more mucus", "It is closer to the mouth"], correctIndex: 1, explanation: "The right mainstem bronchus is shorter, wider, and more vertical than the left. This makes it the path of least resistance for foreign objects, food, or fluids that are aspirated." } },
      { type: "quiz", quiz: { id: "ap-resp-q2", question: "What structure prevents food from entering the trachea during swallowing?", options: ["Pharynx", "Larynx", "Epiglottis", "Bronchus"], correctIndex: 2, explanation: "The epiglottis is a flap of tissue that covers the opening of the trachea during swallowing, directing food into the esophagus instead. When it fails (impaired gag reflex), aspiration can occur." } }
    ],
    keyPoints: [
      "Lower airway: conducts air to the alveoli",
      "Alveoli: where the real work of gas exchange happens—about 300 million of them"
    ]
  },
  {
    id: "breathing-mechanics",
    title: "Mechanics of Breathing and Gas Exchange",
    content: `Breathing is both a mechanical process (moving air) and a chemical process (exchanging gases). Understanding both helps you recognize when things go wrong.

**Mechanical Process – How Air Moves**

The diaphragm is the star of the show. When it contracts, it flattens and moves downward, increasing the space in the chest cavity. This creates negative pressure—lower pressure inside the chest than outside. Air naturally flows from high pressure to low pressure, so air rushes into the lungs.

**Inhalation (breathing in):**
• Diaphragm contracts and flattens
• Ribs move up and out
• Chest cavity expands
• Negative pressure draws air in
• This is ACTIVE—muscles are working

**Exhalation (breathing out):**
• Diaphragm relaxes and domes up
• Ribs return to resting position
• Elastic recoil of lungs pushes air out
• This is normally PASSIVE—no muscle work required

**Chemical Process – Gas Exchange**

At the alveoli, gas exchange happens through diffusion. Molecules naturally move from areas of high concentration to low concentration:
• Oxygen: High in alveoli (from inhaled air) → Low in blood → Diffuses INTO blood
• Carbon dioxide: High in blood (waste product) → Low in alveoli → Diffuses OUT to be exhaled

This exchange happens across alveolar walls that are only one cell thick—thin enough for gases to pass through easily.`,
    blocks: [
      { type: "quiz", quiz: { id: "ap-mech-q1", question: "Why is normal exhalation considered 'passive'?", options: ["The brain isn't involved", "No muscle contraction is needed—elastic recoil pushes air out", "Air leaves through the nose automatically", "The diaphragm pushes air out"], correctIndex: 1, explanation: "During normal exhalation, muscles simply relax. The natural elastic recoil of the lungs and chest wall pushes air out without requiring active muscle work. Active (forced) exhalation only occurs during distress." } },
      { type: "quiz", quiz: { id: "ap-mech-q2", question: "If a patient is using accessory muscles to exhale, what does this suggest?", options: ["Normal breathing", "Mild exercise", "Significant respiratory distress", "Good compensation"], correctIndex: 2, explanation: "Normal exhalation is passive. If a patient is actively using muscles to exhale, it means normal mechanics have failed—this is a sign of significant respiratory distress, commonly seen in asthma and COPD." } }
    ],
    keyPoints: [
      "Inhalation = active (diaphragm and muscles work)",
      "Exhalation = passive (muscles relax, elastic recoil)",
      "Gas exchange happens by diffusion across thin alveolar walls"
    ],
    rememberThis: "If a patient is using accessory muscles to EXHALE, something is very wrong. Normal breathing out shouldn't require effort. This is a key sign of respiratory distress, especially in COPD and asthma."
  },
  {
    id: "knowledge-check",
    title: "Knowledge Check",
    content: `Let's make sure the key concepts are sticking. These questions cover the essentials you'll need to know for patient assessment.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "anatomy-quiz-1",
          question: "Blood returning to the heart from the body enters which chamber first?",
          options: [
            "Left atrium",
            "Right atrium",
            "Left ventricle",
            "Right ventricle"
          ],
          correctIndex: 1,
          explanation: "Deoxygenated blood from the body returns via the vena cava to the right atrium. From there it goes to the right ventricle, then to the lungs to pick up oxygen. Remember: blood from the BODY enters on the RIGHT."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "anatomy-quiz-2",
          question: "What is the primary muscle of breathing?",
          options: [
            "Intercostal muscles",
            "Sternocleidomastoid",
            "Diaphragm",
            "Abdominal muscles"
          ],
          correctIndex: 2,
          explanation: "The diaphragm is a dome-shaped muscle below the lungs. When it contracts and flattens, it creates the negative pressure that draws air into the lungs. The other muscles listed are 'accessory muscles' that help during respiratory distress—seeing them work hard is a warning sign."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "anatomy-quiz-3",
          question: "Where does gas exchange (oxygen in, carbon dioxide out) occur?",
          options: [
            "Bronchi",
            "Trachea",
            "Bronchioles",
            "Alveoli"
          ],
          correctIndex: 3,
          explanation: "Gas exchange happens in the alveoli—tiny air sacs at the end of the bronchiole tree. Their walls are only one cell thick, allowing oxygen and carbon dioxide to diffuse between air and blood. The other structures are 'conducting airways'—they move air but don't exchange gases."
        }
      },
      { type: "quiz", quiz: { id: "anatomy-quiz-4", question: "In the pulmonary circuit, blood travels from the right ventricle to the:", options: ["Aorta", "Vena cava", "Lungs", "Left ventricle"], correctIndex: 2, explanation: "The pulmonary circuit moves blood from the right ventricle to the lungs via pulmonary arteries. In the lungs, blood picks up oxygen and returns to the left atrium via pulmonary veins." } },
      { type: "quiz", quiz: { id: "anatomy-quiz-5", question: "Normal inhalation begins when the diaphragm:", options: ["Relaxes and domes upward", "Contracts and flattens", "Moves sideways", "Stops moving"], correctIndex: 1, explanation: "When the diaphragm contracts, it flattens and moves downward, expanding the chest cavity. This creates negative pressure that draws air into the lungs—the start of every normal breath." } }
    ],
    keyPoints: [
      "Right atrium receives blood from the body",
      "Diaphragm is the primary breathing muscle",
      "Alveoli are the site of gas exchange"
    ]
  },
  {
    id: "wrap-up",
    title: "You've Built the Foundation",
    content: `You've just completed your anatomy and physiology foundation. Let's recap what you now understand:

**The Heart:**
• Four chambers working as two pumps
• Right side sends blood to lungs (low pressure)
• Left side sends blood to body (high pressure)
• Valves prevent backflow—you hear them as "lub-dub"

**Circulation:**
• Pulmonary circuit: heart → lungs → heart (oxygen pickup)
• Systemic circuit: heart → body → heart (oxygen delivery)
• Both must work together for perfusion

**The Airway:**
• Upper: nose, pharynx, larynx (warms, moistens, filters)
• Lower: trachea, bronchi, bronchioles, alveoli
• Tree structure—trunk to branches to tiny leaves

**Breathing:**
• Diaphragm-driven negative pressure system
• Inhalation is active, exhalation is passive
• Gas exchange by diffusion at the alveoli

**How This Connects to Patient Care:**
Every patient you ever assess will have these systems working—or struggling. When a patient is pale and cool with a weak, rapid pulse, you now understand that's a perfusion problem: the cardiovascular system isn't delivering enough oxygen. When they're working hard to breathe with accessory muscle use, you understand the respiratory mechanics that are failing.

This foundation supports everything ahead: shock, respiratory emergencies, cardiac calls, trauma. You're building the knowledge that makes all of it make sense.`,
    keyPoints: [
      "Cardiovascular and respiratory systems are interdependent",
      "Structure determines function—anatomy explains physiology",
      "These basics apply to every patient encounter you'll ever have"
    ],
    proTip: "Keep connecting what you learn to real patients. When you see someone in respiratory distress, think about which structures are affected. When you feel a weak pulse, consider what that means about circulation. That clinical thinking builds with every call—and you're building it now."
  }
];

// =====================================================
// AEMT Anatomy and Physiology Basics - mechanisms and clinical ties
// =====================================================

export const aemtAnatomyPhysiologyContent: TopicSection[] = [
  {
    id: "beyond-basics-intro",
    title: "Beyond the Basics: Why Mechanisms Matter",
    content: `You've built a solid foundation in anatomy at the EMT level. You know where structures are and what they do. Now it's time to understand *why* they do what they do—and what happens when things go wrong.

This shift from "what" to "why" is the heart of AEMT-level thinking. When you understand mechanisms, you can:

• **Predict** what's coming next in a deteriorating patient
• **Explain** why certain interventions work
• **Recognize** problems earlier, before vital signs crash
• **Communicate** effectively with receiving facilities about patient status

**What We'll Cover**
• Cardiac output and hemodynamics—how much blood moves and why
• Perfusion and shock—recognizing failure before it's obvious
• Ventilation vs. oxygenation—two different processes that can fail independently
• Oxygen delivery—why SpO2 doesn't tell the whole story

**Building on EMT Knowledge**
You already know the heart is a pump with four chambers. Now you'll learn about preload, afterload, and contractility—the factors that determine how well that pump performs. You know breathing moves air in and out. Now you'll understand V/Q matching and why a patient can be oxygenating well but ventilating poorly (or vice versa).

This foundation powers everything ahead: shock management, cardiac monitoring, respiratory emergencies, and medication administration.`,
    keyPoints: [
      "EMT = what's happening; AEMT = why it's happening",
      "Understanding mechanisms improves assessment accuracy",
      "This foundation applies to shock, cardiac, and respiratory emergencies"
    ],
    proTip: "When you understand *why* a patient is tachycardic, you can predict what happens next—and intervene before they crash."
  },
  {
    id: "cardiac-output-hemodynamics",
    title: "Cardiac Output and Hemodynamics – How Much Blood Gets Moved",
    content: `Now that you understand the pump anatomy, let's talk about the result: **cardiac output**—how much blood the heart pumps per minute.

**The Formula You Need to Know**
**Cardiac Output = Stroke Volume × Heart Rate**

• **Stroke Volume (SV)**: The amount of blood pumped with each beat (typically ~70 mL in adults)
• **Heart Rate (HR)**: How many times the heart beats per minute

A typical adult cardiac output is about 5 liters per minute. That's your entire blood volume pumped every minute!

**What Affects Stroke Volume?**
Three factors determine how much blood the heart ejects with each beat:

**1. Preload** – The "stretch factor"
How much blood returns to the heart and stretches the ventricle before contraction. More stretch (up to a point) = stronger contraction. This is the Frank-Starling mechanism.

**2. Afterload** – The "resistance"
The pressure the heart must pump against. High blood pressure = high afterload = the heart works harder.

**3. Contractility** – The "squeeze power"
How hard the heart muscle contracts, independent of stretch. Medications and disease can change this.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Preload",
            content: "The 'Stretch Factor' — Blood volume returning to the heart stretches the ventricle. More stretch = stronger contraction (Frank-Starling mechanism).",
            bullets: [
              "IV fluids INCREASE preload—that's why we give them in hypovolemia",
              "Hemorrhage DECREASES preload—less blood returning to the heart",
              "Leg elevation increases venous return and preload",
              "Too much preload can overwhelm a failing heart (CHF exacerbation)"
            ]
          },
          {
            label: "Afterload",
            content: "The 'Resistance' — Pressure the heart pumps against. Think of pushing open a door while someone pushes back.",
            bullets: [
              "High blood pressure = high afterload = heart works harder",
              "Vasodilators (like nitroglycerin) DECREASE afterload",
              "Vasoconstriction INCREASES afterload",
              "Chronic high afterload leads to left ventricular hypertrophy"
            ]
          },
          {
            label: "Contractility",
            content: "The 'Squeeze Power' — How hard the heart muscle contracts, independent of preload.",
            bullets: [
              "Epinephrine and dopamine INCREASE contractility (positive inotropes)",
              "Beta-blockers DECREASE contractility",
              "Heart damage (MI, cardiomyopathy) reduces contractility",
              "Contractility changes affect stroke volume directly"
            ]
          },
          {
            label: "Heart Rate",
            content: "The 'Frequency' — More beats = more output, but only up to a point.",
            bullets: [
              "Moderate tachycardia increases cardiac output",
              "Extreme tachycardia (>150-180) reduces filling time and DECREASES output",
              "Bradycardia reduces output unless stroke volume compensates",
              "Optimal rate: enough time to fill, enough beats to deliver"
            ]
          }
        ]
      }
    ],
    keyPoints: [
      "CO = SV × HR (memorize this formula)",
      "Preload, afterload, and contractility all affect stroke volume",
      "Heart rate affects both CO and ventricular filling time"
    ],
    rememberThis: "AEMT interventions directly affect these variables: fluids change preload, medications change contractility. Understanding the formula helps you understand your treatments."
  },
  {
    id: "perfusion-basics",
    title: "Perfusion – Oxygen Delivery to Cells",
    content: `All this heart physiology leads to one critical question: **Is the patient's tissue getting enough blood?** That's perfusion.

**Definition**
Perfusion = adequate blood flow to meet cellular oxygen demand

It's not enough to have a beating heart—that heart must deliver oxygenated blood to tissues at a rate that meets their needs.

**The Oxygen Delivery Equation (Conceptual)**
Oxygen Delivery = Cardiac Output × Oxygen Content

This means adequate perfusion requires:

**1. Pump** — Heart must generate adequate cardiac output

**2. Pipes** — Blood vessels must allow flow and maintain appropriate pressure

**3. Fluid** — Adequate blood volume to fill the system

**4. Oxygen** — Hemoglobin must be loaded with O₂

**Clinical Signs of Adequate Perfusion**
• Warm, dry skin with normal color
• Brisk capillary refill (< 2 seconds)
• Strong peripheral pulses
• Normal mental status
• Adequate urine output

**Signs of Poor Perfusion (Shock)**
• Cool, pale, or mottled skin
• Delayed capillary refill (> 2 seconds)
• Weak or absent peripheral pulses
• Altered mental status
• Decreased urine output

The body prioritizes vital organs (heart, brain, lungs) when perfusion drops. Skin is one of the first areas to show reduced blood flow—that's why checking skin condition is so valuable as an early warning.`,
    keyPoints: [
      "Perfusion = meeting cellular oxygen demand",
      "Four components: pump, pipes, fluid, oxygen carrier",
      "Failure of any component causes inadequate perfusion (shock)"
    ]
  },
  {
    id: "shock-physiology",
    title: "Compensated vs. Decompensated Shock – Reading the Warning Signs",
    content: `When perfusion begins to fail, the body doesn't just give up. It fights back with compensatory mechanisms designed to maintain blood flow to vital organs. Understanding these mechanisms helps you recognize shock *before* the vital signs crash.

**Compensatory Mechanisms**
When cardiac output drops, the sympathetic nervous system activates:

• **Tachycardia**: Increase heart rate to maintain cardiac output
• **Vasoconstriction**: Squeeze vessels to maintain pressure and shunt blood to vital organs
• **Increased contractility**: Squeeze harder with each beat

**Why Blood Pressure Is a LATE Sign**
These compensatory mechanisms are remarkably effective—they can maintain blood pressure until approximately 30% of blood volume is lost. By the time blood pressure drops, the patient is severely compromised.

**The Takeaway**: Look for the subtle signs of compensation (anxiety, tachycardia, cool/pale skin) before waiting for hypotension.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Compensated Shock",
            content: "Mechanisms are working to maintain perfusion. Patient may look 'not quite right' but vital signs are near-normal.",
            bullets: [
              "Anxiety, restlessness (early brain hypoperfusion)",
              "Mild tachycardia (100-120 bpm)",
              "Pale, cool skin with delayed cap refill",
              "Normal or only slightly low blood pressure",
              "Strong central pulses, weaker peripheral pulses"
            ]
          },
          {
            label: "Decompensated Shock",
            content: "Mechanisms are failing. This patient is crashing and needs immediate intervention.",
            bullets: [
              "Altered mental status (confusion, lethargy, unresponsiveness)",
              "Severe tachycardia OR bradycardia (ominous)",
              "Hypotension (systolic < 90 mmHg)",
              "Mottled skin, cyanosis",
              "Weak or absent peripheral pulses",
              "Minimal or no urine output"
            ]
          }
        ]
      },
      {
        type: "flashcards",
        flashcards: [
          {
            front: "Why is blood pressure a 'late' sign of shock?",
            back: "Compensatory mechanisms (vasoconstriction, tachycardia) maintain BP until ~30% blood volume is lost. By the time BP drops, the patient is severely compromised. Look for earlier signs: anxiety, tachycardia, pale/cool skin."
          },
          {
            front: "What causes the tachycardia seen in early shock?",
            back: "Sympathetic nervous system activation releases catecholamines (epinephrine, norepinephrine), which increase heart rate to maintain cardiac output despite reduced stroke volume. It's a compensatory mechanism."
          },
          {
            front: "Why does skin become pale and cool in shock?",
            back: "Vasoconstriction shunts blood away from skin and extremities to preserve flow to vital organs (heart, brain, lungs). The body sacrifices the periphery to protect the core."
          },
          {
            front: "What does altered mental status indicate in shock?",
            back: "The brain is exquisitely sensitive to hypoperfusion. Altered mental status (confusion, agitation, lethargy) indicates inadequate cerebral perfusion—a critical warning sign that compensatory mechanisms are failing."
          },
          {
            front: "What is 'mottled' skin and what does it indicate?",
            back: "Patchy, lacy discoloration from uneven blood flow to skin capillaries. Indicates severe vasoconstriction and shunting. This is a late, ominous sign of decompensating shock."
          }
        ]
      }
    ],
    keyPoints: [
      "Compensatory mechanisms mask early shock—look beyond vital signs",
      "Skin signs and mental status are earlier indicators than blood pressure",
      "Hypotension is a late, dangerous finding"
    ],
    proTip: "In the field, trust your gut when something seems 'off' even if vitals look okay. The anxious patient with cool, pale skin and borderline tachycardia is often in early shock—act before the numbers crash."
  },
  {
    id: "ventilation-vs-oxygenation",
    title: "Advanced Respiratory Physiology – Ventilation vs. Oxygenation",
    content: `At the EMT level, you learned the mechanics of breathing. Now let's separate two distinct processes that are often confused:

**Ventilation** = Moving air in and out of the lungs
• Requires: Patent airway, respiratory drive, functioning muscles, compliant lungs
• Measured by: CO₂ levels (ETCO₂), respiratory rate and depth
• Failed ventilation → rising CO₂ (hypercapnia)

**Oxygenation** = Getting oxygen from alveoli into blood
• Requires: Oxygen in alveoli, functional gas exchange membrane, blood flow through pulmonary capillaries
• Measured by: SpO₂, PaO₂
• Failed oxygenation → falling O₂ (hypoxemia)

**The Critical Distinction**
A patient can have adequate ventilation but poor oxygenation—for example, a pulmonary embolism blocks blood flow to ventilated alveoli. Air moves in and out, but there's no blood to receive the oxygen.

A patient can have adequate oxygenation but poor ventilation—for example, a narcotic overdose patient on supplemental O₂. They're getting oxygen, but they're not blowing off CO₂ effectively.

**V/Q Matching**
For efficient gas exchange, ventilation (V) and perfusion (Q) must be matched. When they're mismatched, problems occur.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "V/Q Match",
            content: "Normal state: Ventilation and perfusion are matched. Air reaches alveoli, and blood flows past those same alveoli.",
            bullets: [
              "Gas exchange occurs efficiently",
              "V/Q ratio approximately 0.8-1.0",
              "This is what we want in healthy lungs",
              "Both 'workers' (air) and 'materials' (blood) are present"
            ]
          },
          {
            label: "High V/Q (Dead Space)",
            content: "Ventilation without perfusion: Air reaches alveoli, but no blood is there to receive oxygen.",
            bullets: [
              "Example: Pulmonary embolism blocks blood flow",
              "Air movement is 'wasted'—it's dead space ventilation",
              "Patient may hyperventilate but still have hypoxemia",
              "ETCO₂ may be low (CO₂ not being delivered to lungs)"
            ]
          },
          {
            label: "Low V/Q (Shunt)",
            content: "Perfusion without ventilation: Blood flows past alveoli, but those alveoli have no fresh air.",
            bullets: [
              "Example: Pneumonia fills alveoli with fluid",
              "Blood 'bypasses' gas exchange—it's called shunt",
              "Supplemental O₂ may not help (air can't reach flooded alveoli)",
              "Severe cases may need positive pressure ventilation"
            ]
          }
        ]
      }
    ],
    keyPoints: [
      "Ventilation and oxygenation are different processes that can fail independently",
      "V/Q mismatch causes many respiratory emergencies",
      "High V/Q = dead space (PE); Low V/Q = shunt (pneumonia, pulmonary edema)"
    ]
  },
  {
    id: "oxygen-delivery-hemoglobin",
    title: "Oxygen Delivery and Hemoglobin – The Oxygen Bus",
    content: `Oxygen doesn't just dissolve in blood—about 98% of oxygen is carried by hemoglobin, the protein in red blood cells. Think of hemoglobin as a bus that picks up oxygen passengers in the lungs and drops them off at tissue bus stops.

**The Oxyhemoglobin Dissociation Curve**
This S-shaped curve describes how easily hemoglobin picks up and releases oxygen based on the oxygen environment.

• **In the lungs (high O₂)**: Hemoglobin binds oxygen tightly
• **In tissues (low O₂)**: Hemoglobin releases oxygen readily

The curve's shape means small drops in O₂ levels at the high end (saturation 90-100%) cause minimal hemoglobin unloading, but drops at the lower end cause rapid unloading—exactly what tissues need.

**What Shifts the Curve?**

**Right Shift** = Hemoglobin releases oxygen MORE easily
• Causes: Acidosis, fever, high CO₂ (think: working muscles need more O₂)
• Clinical meaning: Helps tissues extract oxygen when they need it most

**Left Shift** = Hemoglobin holds oxygen MORE tightly
• Causes: Alkalosis, hypothermia, low CO₂, carbon monoxide
• Clinical meaning: Tissues may not get enough oxygen despite good SpO₂

**Why SpO₂ Can Be Misleading**
Pulse oximetry measures the *percentage* of hemoglobin saturated with oxygen—not the *total* amount of oxygen being delivered. This creates three clinical traps:

1. **Anemia**: 100% saturation of half the normal hemoglobin = half the normal oxygen delivery
2. **Carbon Monoxide**: CO-bound hemoglobin reads as "saturated" but carries no oxygen
3. **Left-shifted curve**: Hemoglobin may be saturated but not releasing oxygen to tissues`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            front: "Why can SpO₂ be misleading in anemia?",
            back: "SpO₂ measures the *percentage* of hemoglobin saturated with O₂, not the *total* oxygen delivery. With low hemoglobin (anemia), even 100% saturation means less total oxygen reaching tissues. A severely anemic patient with SpO₂ of 100% may still be hypoxic."
          },
          {
            front: "Why is carbon monoxide poisoning dangerous despite normal SpO₂?",
            back: "CO binds hemoglobin 200-250x more tightly than O₂. The pulse oximeter can't distinguish CO-bound hemoglobin from O₂-bound hemoglobin—it reads both as 'saturated.' SpO₂ looks fine while oxygen delivery is critically impaired."
          },
          {
            front: "What does a 'right shift' of the oxyhemoglobin curve mean clinically?",
            back: "Hemoglobin releases oxygen more easily to tissues. This happens with acidosis, fever, and high CO₂—conditions where tissues have increased metabolic demand. It's the body's way of increasing O₂ delivery when tissues need it most."
          },
          {
            front: "How does hypothermia affect oxygen delivery?",
            back: "Cold causes a left shift—hemoglobin holds onto oxygen more tightly. Even with adequate saturation, tissues may not extract enough O₂. This is one reason hypothermic patients can appear 'dead' (cold, blue, pulseless) but still be viable—their tissues need less oxygen and aren't extracting what's there."
          }
        ]
      }
    ],
    keyPoints: [
      "98% of oxygen is carried by hemoglobin, not dissolved in plasma",
      "SpO₂ measures saturation percentage, not total oxygen delivery",
      "CO poisoning and anemia can have normal SpO₂ with inadequate oxygen delivery",
      "Temperature, pH, and CO₂ affect how readily hemoglobin releases oxygen"
    ]
  },
  {
    id: "aemt-ap-knowledge-check",
    title: "Knowledge Check",
    content: `Let's test your understanding of AEMT-level physiology. These questions focus on the clinical application of the mechanisms you've learned.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-ap-q1",
          question: "A patient has normal respiratory rate and SpO₂ of 98%, but ETCO₂ is rising (55 mmHg). What's the problem?",
          options: [
            "Oxygenation failure",
            "Ventilation failure",
            "Cardiac output failure",
            "No problem—all values are acceptable"
          ],
          correctIndex: 1,
          explanation: "The patient is oxygenating well (SpO₂ 98%) but not ventilating effectively—CO₂ is building up. This could be narcotic overdose with supplemental O₂, or respiratory muscle fatigue. The patient needs ventilatory support, not just more oxygen."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-ap-q2",
          question: "In early compensated shock, which finding would you expect to see FIRST?",
          options: [
            "Hypotension",
            "Tachycardia",
            "Unresponsiveness",
            "Cyanosis"
          ],
          correctIndex: 1,
          explanation: "Tachycardia is an early compensatory response as the heart tries to maintain cardiac output despite reduced stroke volume. Hypotension, unresponsiveness, and cyanosis are late findings after compensation fails. Look for the subtle signs before the obvious ones."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-ap-q3",
          question: "A firefighter rescued from a structure fire has SpO₂ of 100% but appears confused and has cherry-red skin. What should you suspect?",
          options: [
            "Anxiety from the rescue",
            "Heat exhaustion",
            "Carbon monoxide poisoning",
            "Hyperventilation"
          ],
          correctIndex: 2,
          explanation: "Classic CO poisoning presentation: pulse ox reads high (can't distinguish CO-bound hemoglobin), altered mental status from tissue hypoxia, and cherry-red skin (though this finding is inconsistent). Never trust SpO₂ in suspected CO exposure—treat based on exposure history and symptoms."
        }
      }
    ]
  },
  {
    id: "aemt-ap-wrapup",
    title: "You're Thinking Like a Clinician",
    content: `You've now moved beyond memorizing structures to understanding mechanisms. This is the shift that defines AEMT-level thinking.

**What You've Mastered**

**Cardiac Output**
You understand CO = SV × HR and the three factors affecting stroke volume. When you give fluids, you're manipulating preload. When you see tachycardia in shock, you understand the body's attempt to compensate.

**Perfusion and Shock**
You recognize that blood pressure is a late finding. You know to look for anxiety, cool skin, and delayed cap refill as early warning signs. You understand why the body sacrifices the periphery to protect the core.

**Ventilation vs. Oxygenation**
You can differentiate these two processes and understand V/Q mismatch. When a patient has normal SpO₂ but rising ETCO₂, you know they need ventilatory support, not just oxygen.

**Oxygen Delivery**
You understand that SpO₂ has limitations. You know why CO poisoning is dangerous despite normal-looking readings. You appreciate how temperature and pH affect tissue oxygenation.

**This Foundation Powers What's Next**
• Shock management interventions target specific hemodynamic variables
• Cardiac monitoring interpretation requires understanding electrical and mechanical relationships
• Respiratory emergency treatment addresses ventilation, oxygenation, or both
• Medication administration makes sense when you understand the physiology it targets

You're building the clinical thinking that separates AEMT from EMT. Every critical patient benefits from this understanding.`,
    keyPoints: [
      "Mechanisms explain patient presentations",
      "Clinical thinking means predicting what happens next",
      "This foundation applies to every critical call"
    ],
    proTip: "Keep asking 'why?' When a patient is tachycardic, why? When they're cool and pale, why? When SpO₂ is dropping, why? That question is the bridge from protocol-following to clinical decision-making."
  }
];

// =====================================================
// Paramedic-level A&P content - Deep pathophysiology, pharmacology ties
// =====================================================

export const paramedicAnatomyPhysiologyContent: TopicSection[] = [
  {
    id: "paramedic-ap-intro",
    title: "Physiology Meets Pharmacology",
    content: `Welcome to paramedic-level anatomy and physiology. At this level, you're not just learning what happens in the body—you're learning *why* it happens and how your interventions change those mechanisms.

**The Shift in Thinking**
EMT: "The patient is hypotensive."
AEMT: "The patient is hypotensive because cardiac output is low."
Paramedic: "The patient is hypotensive because sepsis-induced vasodilation has dropped SVR, and despite adequate fluid resuscitation, they need a vasopressor to restore MAP and organ perfusion."

**What You'll Master Here**
This module connects cellular-level physiology to the medications and interventions you'll use:

• **Cellular Metabolism** — Why oxygen delivery matters at the molecular level
• **Acid-Base Balance** — Interpreting blood gases and predicting compensation
• **Electrolyte Physiology** — How K⁺, Ca²⁺, and Na⁺ affect the heart and ECG
• **Advanced Hemodynamics** — Matching medications to pathophysiology

This is where science meets clinical decision-making.`,
    keyPoints: [
      "Paramedic-level thinking connects mechanisms to interventions",
      "Understanding 'why' enables better clinical decisions",
      "This foundation applies to every critical medication you'll give"
    ],
    proTip: "When you understand *why* a patient is tachycardic, you can predict what happens next—and intervene before they crash."
  },
  {
    id: "paramedic-cellular-metabolism",
    title: "Cellular Metabolism — Why Every Cell Needs Oxygen",
    content: `Every intervention you perform—from CPR to vasopressors—ultimately aims to keep cells alive. And cells need one thing above all else: **ATP** (adenosine triphosphate), the energy currency of life.

**ATP: The Universal Energy Currency**
Every cellular function—muscle contraction, nerve impulse transmission, protein synthesis—requires ATP. Without it, cells die within minutes.

**Two Ways to Make ATP**

The body has two pathways for ATP production, and understanding both is crucial for paramedic-level thinking.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Aerobic Metabolism",
            content: "**With oxygen:** 1 glucose molecule → **36-38 ATP**\n\nThis is the efficient pathway. It requires:\n• Oxygen delivery to the cell\n• Functional mitochondria\n• Adequate glucose supply\n\nThis is sustainable indefinitely as long as O₂ delivery meets demand. It's the \"power plant\" running at full capacity."
          },
          {
            label: "Anaerobic Metabolism",
            content: "**Without oxygen:** 1 glucose molecule → **2 ATP + lactate**\n\nThis is emergency mode—fast but unsustainable:\n• Produces only 5% of the ATP that aerobic metabolism does\n• Generates lactate as a byproduct\n• Lactate buildup causes acidosis\n• Cannot sustain cellular function for long\n\nThink of this as running on backup generators—they'll keep the lights on briefly, but they can't power the whole hospital."
          },
          {
            label: "Clinical Implications",
            content: "**Lactate as a Marker**\n\nRising lactate = inadequate oxygen delivery to cells\n\n• Lactate > 2 mmol/L: mild cellular stress\n• Lactate > 4 mmol/L: severe cellular stress (associated with increased mortality)\n\n**The Hidden Hypoxia**\n\nEven if SpO₂ looks good, cells may be hypoxic if:\n• Cardiac output is inadequate (blood isn't reaching tissues)\n• Hemoglobin is low (not enough carriers)\n• CO poisoning (hemoglobin bound to CO, not O₂)\n\nThis is why lactate is often more informative than SpO₂ in shock states."
          }
        ]
      }
    ],
    keyPoints: [
      "ATP is the energy currency required for all cellular functions",
      "Aerobic metabolism: 36-38 ATP per glucose (efficient, sustainable)",
      "Anaerobic metabolism: 2 ATP per glucose + lactate (emergency mode)",
      "Lactate is a marker of inadequate cellular oxygen delivery"
    ],
    rememberThis: "Shock kills cells by cutting off their oxygen supply, forcing them into anaerobic metabolism. Rising lactate is your early warning that cells are starving—often before vital signs crash."
  },
  {
    id: "paramedic-acid-base",
    title: "Acid-Base Balance — The Body's pH Regulation",
    content: `pH is one of the most tightly regulated values in the body. Normal arterial pH is 7.35-7.45, and even small deviations can be life-threatening.

**The Players**

• **pH**: The measure of acidity/alkalinity (7.35-7.45 normal)
• **PaCO₂**: Partial pressure of carbon dioxide (35-45 mmHg normal)
• **HCO₃⁻**: Bicarbonate (22-26 mEq/L normal)

**The Systems**

Two systems regulate pH:

**Respiratory System** (fast, minutes)
CO₂ + H₂O ↔ H₂CO₃ ↔ H⁺ + HCO₃⁻
• More CO₂ = more acid = lower pH
• Breathe faster to blow off CO₂ and raise pH

**Metabolic System** (slow, hours to days)
• Kidneys regulate bicarbonate (HCO₃⁻)
• More bicarbonate = less acid = higher pH

**The Four Primary Disorders**`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "para-ab-1",
            front: "Respiratory Acidosis",
            back: "pH ↓, PaCO₂ ↑\n\n**Cause:** Hypoventilation (overdose, COPD exacerbation, neuromuscular disease)\n\n**Why:** Not blowing off CO₂ → CO₂ accumulates → forms carbonic acid → pH drops\n\n**Treatment:** Improve ventilation (BVM, intubation, reverse the cause)"
          },
          {
            id: "para-ab-2",
            front: "Respiratory Alkalosis",
            back: "pH ↑, PaCO₂ ↓\n\n**Cause:** Hyperventilation (anxiety, PE, early sepsis, salicylate toxicity)\n\n**Why:** Blowing off too much CO₂ → less carbonic acid → pH rises\n\n**Treatment:** Treat underlying cause. Often compensatory—look for what's driving it."
          },
          {
            id: "para-ab-3",
            front: "Metabolic Acidosis",
            back: "pH ↓, HCO₃⁻ ↓\n\n**Causes:** DKA, lactic acidosis, renal failure, toxic ingestions\n\n**Why:** Acid accumulation or bicarbonate loss depletes the buffer\n\n**Signs:** Kussmaul respirations (deep, rapid) as lungs try to compensate\n\n**Treatment:** Treat underlying cause; bicarb rarely indicated"
          },
          {
            id: "para-ab-4",
            front: "Metabolic Alkalosis",
            back: "pH ↑, HCO₃⁻ ↑\n\n**Causes:** Vomiting (losing stomach acid), NG suction, diuretics\n\n**Why:** Acid loss or bicarbonate retention\n\n**Compensation:** Hypoventilation to retain CO₂ (rarely effective)\n\n**Treatment:** Replace volume and electrolytes (especially K⁺ and Cl⁻)"
          },
          {
            id: "para-ab-5",
            front: "What does 'compensation' mean in acid-base?",
            back: "The system NOT causing the problem tries to normalize pH.\n\n**Respiratory problem** → Kidneys adjust HCO₃⁻ (takes hours-days)\n**Metabolic problem** → Lungs adjust CO₂ (takes minutes)\n\n**Key:** Compensation corrects pH toward normal but rarely fully normalizes it. If pH is perfectly normal with abnormal CO₂ and HCO₃⁻, consider mixed disorder."
          },
          {
            id: "para-ab-6",
            front: "When is pH 'normal' but the patient is sick?",
            back: "When compensation is complete, pH may be 7.35-7.45, but the underlying disorder persists.\n\n**How to find the primary problem:**\n• Look at which value (CO₂ or HCO₃⁻) moved FIRST\n• The compensating value moves in the SAME direction as pH\n\n**Example:** pH 7.38, CO₂ 28, HCO₃⁻ 16\n→ Low HCO₃⁻ = metabolic acidosis\n→ Low CO₂ = compensation (blowing off acid)"
          }
        ]
      }
    ],
    keyPoints: [
      "Normal pH: 7.35-7.45 (extremely tight range)",
      "Respiratory system adjusts CO₂ quickly (minutes)",
      "Metabolic system adjusts HCO₃⁻ slowly (hours-days)",
      "Compensation: the uninvolved system tries to normalize pH"
    ],
    proTip: "Here's your quick approach: pH tells you acidosis or alkalosis. CO₂ tells you if respiratory is the cause. If CO₂ doesn't explain the pH, look at HCO₃⁻ for a metabolic cause."
  },
  {
    id: "paramedic-electrolytes",
    title: "Electrolyte Physiology — The Spark Plugs of the Cell",
    content: `Electrolytes are charged particles that drive cellular function. For paramedics, the most critical are potassium (K⁺), calcium (Ca²⁺), and sodium (Na⁺) because of their direct effects on cardiac function.

**Why Electrolytes Matter**
Cardiac cells depend on precise electrolyte gradients to generate action potentials. When these gradients are disrupted, arrhythmias and cardiac arrest can result.

**The Big Three for Cardiac Function**

• **Potassium (K⁺)**: Controls resting membrane potential and repolarization
• **Calcium (Ca²⁺)**: Triggers muscle contraction and affects the QT interval
• **Sodium (Na⁺)**: Drives the initial depolarization (upstroke of action potential)`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Hyperkalemia",
            content: "**K⁺ > 5.5 mEq/L**\n\n**Causes:** Renal failure, crush injury, acidosis, tissue necrosis, ACE inhibitors/ARBs\n\n**ECG Progression:**\n1. Peaked T waves (earliest sign)\n2. Prolonged PR interval\n3. Widened QRS\n4. Sine wave pattern\n5. Asystole or V-fib\n\n**Treatment:**\n• **Calcium** (gluconate or chloride): Stabilizes cardiac membrane\n• **Insulin + Glucose**: Shifts K⁺ into cells\n• **Sodium bicarbonate**: Shifts K⁺ into cells (if acidotic)\n• **Dialysis**: Definitive removal"
          },
          {
            label: "Hypokalemia",
            content: "**K⁺ < 3.5 mEq/L**\n\n**Causes:** Diuretics, vomiting, diarrhea, alkalosis, insulin administration\n\n**ECG Changes:**\n• Flattened T waves\n• Prominent U waves (wave after T)\n• Prolonged QT interval\n• ST depression\n\n**Risks:** Increased risk of torsades de pointes and other fatal arrhythmias\n\n**Treatment:** Potassium replacement (oral or IV depending on severity)"
          },
          {
            label: "Hypercalcemia",
            content: "**Ca²⁺ ↑**\n\n**Causes:** Malignancy, hyperparathyroidism, immobility, thiazide diuretics\n\n**ECG Changes:**\n• **Shortened QT interval** (most reliable sign)\n• Widened T waves\n\n**Clinical:** \"Stones, bones, groans, psychiatric overtones\"\n• Kidney stones\n• Bone pain\n• Abdominal pain, constipation\n• Confusion, depression\n\n**Treatment:** Fluids, loop diuretics, bisphosphonates"
          },
          {
            label: "Hypocalcemia",
            content: "**Ca²⁺ ↓**\n\n**Causes:** Parathyroid surgery, massive transfusion (citrate binds Ca²⁺), pancreatitis, sepsis\n\n**ECG Changes:**\n• **Prolonged QT interval** (most reliable sign)\n• May see T wave flattening\n\n**Clinical Signs:**\n• Chvostek sign: facial twitching when tapping facial nerve\n• Trousseau sign: carpopedal spasm with BP cuff inflation\n• Tetany, seizures\n\n**Treatment:** Calcium gluconate or calcium chloride IV"
          }
        ]
      }
    ],
    keyPoints: [
      "Potassium abnormalities cause life-threatening arrhythmias",
      "Hyperkalemia: peaked T waves → widened QRS → sine wave → arrest",
      "Hypokalemia: flattened T waves, U waves, prolonged QT",
      "Calcium affects QT interval: ↑Ca = short QT, ↓Ca = long QT"
    ],
    rememberThis: "When you see a patient with renal failure and peaked T waves, you're looking at a time bomb. Calcium is your first-line treatment—it stabilizes the cardiac membrane while you address the underlying hyperkalemia."
  },
  {
    id: "paramedic-hemodynamics",
    title: "Advanced Hemodynamics — Medication Targets",
    content: `At the paramedic level, you're not just recognizing shock—you're selecting interventions that target specific hemodynamic variables. Understanding these mechanisms makes medication selection logical rather than memorized.

**Mean Arterial Pressure (MAP)**

MAP is the average pressure in the arteries during one cardiac cycle. It's the pressure that actually drives organ perfusion.

**Formula:** MAP = DBP + ⅓(SBP - DBP)
Or approximately: MAP ≈ (SBP + 2×DBP) ÷ 3

**Target:** MAP > 65 mmHg for adequate organ perfusion

**The Hemodynamic Equation**

MAP = CO × SVR

• **CO (Cardiac Output)** = How much blood the heart pumps
• **SVR (Systemic Vascular Resistance)** = How tight the blood vessels are

**This equation is your treatment guide:**
• Low MAP from low CO → increase contractility (inotrope) or preload (fluids)
• Low MAP from low SVR → increase vascular tone (vasopressor)`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "para-hemo-1",
            front: "What's the difference between a vasopressor and an inotrope?",
            back: "**Vasopressor:** Constricts blood vessels to increase SVR and BP\n• Example: Norepinephrine (primarily α₁)\n• Use: Distributive shock (sepsis) after adequate fluid resuscitation\n\n**Inotrope:** Increases myocardial contractility\n• Example: Dobutamine (primarily β₁)\n• Use: Cardiogenic shock with adequate SVR\n\n**Both:** Epinephrine, dopamine (dose-dependent effects)"
          },
          {
            id: "para-hemo-2",
            front: "Why does MAP matter more than systolic BP?",
            back: "MAP represents the **average driving pressure** for organ perfusion throughout the cardiac cycle.\n\n**Example:** Two patients:\n• Patient A: BP 90/70 → MAP ≈ 77\n• Patient B: BP 110/40 → MAP ≈ 63\n\nPatient B has a higher systolic but LOWER perfusion pressure. Patient B is at greater risk despite the 'better-looking' systolic.\n\n**Target:** MAP > 65 mmHg"
          },
          {
            id: "para-hemo-3",
            front: "When would you give a vasopressor vs fluids?",
            back: "**Fluids first if hypovolemic:**\n• Hemorrhage, dehydration, burns\n• Preload is the problem → restore volume\n\n**Vasopressors if euvolemic or fluid-refractory:**\n• Septic shock after adequate crystalloid (30 mL/kg)\n• SVR is the problem → restore vascular tone\n\n**Key:** Pushing vasopressors without adequate preload squeezes empty vessels—like wringing out a dry sponge."
          },
          {
            id: "para-hemo-4",
            front: "How does epinephrine work in cardiac arrest?",
            back: "**α₁ effects:** Vasoconstriction\n→ Increases SVR\n→ Increases aortic diastolic pressure\n→ **Improves coronary perfusion pressure** (critical during CPR)\n→ **Improves cerebral perfusion pressure**\n\n**β₁ effects:** Increases contractility and heart rate\n→ Helps restart organized electrical activity\n\n**This is why it's first-line in arrest:** It optimizes perfusion pressure to the heart and brain during resuscitation."
          }
        ]
      }
    ],
    keyPoints: [
      "MAP = CO × SVR (your treatment selection guide)",
      "Target MAP > 65 mmHg for organ perfusion",
      "Vasopressors increase SVR; inotropes increase contractility",
      "Match the intervention to the hemodynamic problem"
    ],
    proTip: "Think of septic shock as a 'leaky pipes' problem (low SVR) and cardiogenic shock as a 'weak pump' problem (low CO). The treatment targets are different even though both cause hypotension."
  },
  {
    id: "paramedic-clinical-integration",
    title: "Clinical Integration — Putting It All Together",
    content: `Let's trace through a complex case to see how all these concepts connect.

**The Scenario**

You're called for a 67-year-old male with altered mental status. His wife says he's had fever and cough for 3 days, and today he's "not making sense."

**Your Assessment Reveals:**
• GCS: 14 (confused)
• HR: 118, BP: 88/52 (MAP ≈ 64)
• RR: 28, SpO₂: 91% on room air
• Skin: warm, flushed, dry
• Cap refill: 2 seconds
• Temp: 39.2°C

**Tracing the Pathophysiology**

1. **Infection** → Pneumonia
2. **Immune response** → Inflammatory mediators released
3. **Vasodilation** → SVR drops, BP drops (MAP 64 is borderline)
4. **Tachycardia** → Compensatory (trying to maintain CO)
5. **Tachypnea** → Compensatory (blowing off CO₂) + lung pathology
6. **Confusion** → Inadequate cerebral perfusion OR direct infection effect

**The Cellular Level**

With borderline MAP, tissue perfusion may be marginal. If it continues:
• Cells shift to anaerobic metabolism
• Lactate rises
• Metabolic acidosis develops
• Compensatory hyperventilation increases

**Treatment Logic**

• **Oxygen** → Address hypoxemia
• **IV fluids** → Increase preload (initial resuscitation)
• **If fluid-refractory** → Norepinephrine (increase SVR to restore MAP)
• **Antibiotics** → Address the source

Each intervention targets a specific physiologic problem. That's paramedic-level thinking.`,
    keyPoints: [
      "Sepsis causes vasodilation (low SVR) → hypotension",
      "Warm, flushed skin indicates distributive shock (not cold like hypovolemic)",
      "Initial treatment: fluids to optimize preload",
      "If MAP remains low despite fluids: vasopressor (norepinephrine)"
    ],
    rememberThis: "Distributive shock (sepsis, anaphylaxis) presents with warm skin because vessels are dilated. Hypovolemic and cardiogenic shock present with cold skin because vessels are constricted to compensate. This clinical finding guides your treatment approach."
  },
  {
    id: "paramedic-ap-quiz",
    title: "Knowledge Check — Paramedic A&P",
    content: `Time to apply what you've learned. These questions test your ability to connect physiology to clinical decision-making.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "para-ap-q1",
          question: "A patient with DKA has pH 7.18, PaCO₂ 22 mmHg, HCO₃⁻ 8 mEq/L. What is the primary disorder?",
          options: [
            "Respiratory acidosis",
            "Respiratory alkalosis",
            "Metabolic acidosis",
            "Metabolic alkalosis"
          ],
          correctIndex: 2,
          explanation: "Low pH = acidosis. Low HCO₃⁻ = metabolic cause. The low CO₂ is compensation—the patient is hyperventilating (Kussmaul respirations) to blow off acid. In DKA, ketoacids deplete bicarbonate buffer. The respiratory system is working hard to compensate, but the primary problem is metabolic."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-ap-q2",
          question: "A dialysis patient missed their session. ECG shows peaked T waves. What is your immediate concern?",
          options: [
            "Hypocalcemia",
            "Hyperkalemia",
            "Hyponatremia",
            "Hypomagnesemia"
          ],
          correctIndex: 1,
          explanation: "Peaked T waves are the classic early sign of hyperkalemia. Dialysis removes potassium; missing a session allows it to accumulate. This can progress to widened QRS, sine wave, and cardiac arrest. Treat immediately with calcium gluconate to stabilize the cardiac membrane while arranging definitive treatment."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-ap-q3",
          question: "In septic shock, what is the primary mechanism causing hypotension?",
          options: [
            "Decreased cardiac output",
            "Massive vasodilation",
            "Hypovolemia",
            "Cardiac ischemia"
          ],
          correctIndex: 1,
          explanation: "Early septic shock is characterized by massive vasodilation from inflammatory mediators—this is distributive shock. Cardiac output is often preserved or even elevated initially ('warm shock'). This is why vasopressors (norepinephrine) are a mainstay of treatment after adequate fluid resuscitation—you're treating low SVR, not low CO."
        }
      },
      { type: "quiz", quiz: { id: "emt-pharm-q4", question: "What is the correct dose of aspirin for suspected ACS?", options: ["81 mg swallowed", "324 mg chewed", "500 mg swallowed", "162 mg chewed"], correctIndex: 1, explanation: "The standard dose is 324 mg (four baby aspirin) CHEWED for suspected acute coronary syndrome. Chewing speeds absorption—time matters when a heart attack is occurring." } },
      { type: "quiz", quiz: { id: "emt-pharm-q5", question: "Why should oral glucose NOT be given to an unconscious patient?", options: ["It won't work if swallowed unconsciously", "Risk of aspiration—they can't protect their airway", "It only works when awake", "The dose would be too high"], correctIndex: 1, explanation: "Unconscious patients cannot protect their airway. Putting any substance in their mouth risks aspiration into the lungs, which can cause pneumonia or obstruction—making the situation worse." } }
    ]
  },
  {
    id: "paramedic-ap-wrapup",
    title: "You're Ready for Advanced Practice",
    content: `You've now connected cellular-level physiology to clinical decision-making. This is the thinking that defines paramedic-level care.

**What You've Mastered**

**Cellular Metabolism**
You understand that every intervention—from oxygen to vasopressors—ultimately aims to maintain aerobic metabolism and ATP production. Lactate is your window into cellular oxygenation.

**Acid-Base Balance**
You can interpret blood gases, identify primary disorders, recognize compensation, and predict patient trajectory. You know when acidosis is respiratory vs. metabolic and what that means for treatment.

**Electrolyte Physiology**
You connect K⁺ and Ca²⁺ levels to ECG changes and arrhythmia risk. You know that peaked T waves in a dialysis patient is an emergency, and why calcium is your first-line treatment.

**Advanced Hemodynamics**
You understand MAP as the driver of organ perfusion and the equation MAP = CO × SVR as your treatment guide. You can match vasopressors, inotropes, and fluids to specific hemodynamic problems.

**This Foundation Powers Everything**

• **ACLS** → Understanding why we give what we give
• **12-Lead ECG** → Electrolyte effects on the electrical system
• **Pharmacology** → Medications target specific physiologic variables
• **Critical Care** → Titrating interventions to hemodynamic goals

You're not memorizing protocols anymore—you're applying physiology.`,
    keyPoints: [
      "Cellular metabolism explains why oxygen delivery matters",
      "Acid-base interpretation guides ventilation and metabolic management",
      "Electrolyte knowledge predicts and treats arrhythmias",
      "Hemodynamic understanding enables targeted medication selection"
    ],
    proTip: "You've reached the level where you can answer 'why' for every intervention. When you push epinephrine in arrest, you know you're increasing coronary perfusion pressure through α₁ vasoconstriction. When you give calcium for hyperkalemia, you know you're stabilizing the cardiac membrane. That understanding makes you a better clinician."
  }
];

// =====================================================
// EMT Pharmacology Content
// =====================================================

export const emtPharmacologyContent: TopicSection[] = [
  {
    id: "emt-pharm-intro",
    title: "Why Pharmacology Matters for EMTs",
    content: `Even with a focused medication scope, your pharmacology knowledge saves lives. Understanding what you give—and what you assist patients with—makes you a confident, effective provider.

**The Reality of EMT Pharmacology**
You might think, "I only give a few medications, how much do I really need to know?" The answer: more than you might expect. Every medication interaction you have—whether administering oxygen, assisting with nitroglycerin, or giving epinephrine for anaphylaxis—requires understanding.

**What You'll Master**
• The language of medications (generic vs. brand, drug classes)
• How different routes affect onset and duration
• Your complete EMT medication toolkit
• The safety framework that prevents errors

This foundation also prepares you for advancement. AEMT and Paramedic pharmacology builds directly on what you learn here.`,
    blocks: [
      { type: "quiz", quiz: { id: "pharm-intro-q1", question: "Why is pharmacology knowledge important even for EMTs with a limited medication scope?", options: ["It's not—EMTs don't need pharmacology", "Every medication interaction requires understanding for safe administration", "Only paramedics use pharmacology", "It's only important for written exams"], correctIndex: 1, explanation: "Even with a focused medication scope, every administration—oxygen, epinephrine, aspirin—requires understanding of indications, contraindications, and potential effects. Knowledge prevents errors and saves lives." } },
      { type: "quiz", quiz: { id: "pharm-intro-q2", question: "EMT pharmacology knowledge builds toward:", options: ["Nothing—it's standalone knowledge", "Advanced certification (AEMT, Paramedic)", "Hospital pharmacy work", "Medical school only"], correctIndex: 1, explanation: "The pharmacology fundamentals you learn as an EMT directly support advancement to AEMT and Paramedic levels, where the medication toolkit expands significantly." } }
    ],
    keyPoints: [
      "EMT-scope medications are focused but powerful",
      "Understanding pharmacology prevents errors",
      "This knowledge builds toward advanced certification"
    ],
    proTip: "Every experienced paramedic started exactly where you are—learning these same fundamentals. Master them now and everything else becomes easier."
  },
  {
    id: "emt-pharm-basics",
    title: "The Language of Medications",
    content: `Before diving into specific drugs, let's establish the vocabulary. This is the language healthcare providers use—and you need to speak it fluently.

**Drug Names**
Every medication has at least two names:
• **Generic name**: The official, scientific name (epinephrine)
• **Brand name**: The manufacturer's marketing name (EpiPen)

Same drug, different labels. In EMS, we typically use generic names because they're universal.

**Drug Classifications**
Medications are grouped by what they do. Knowing a drug's class tells you what to expect:`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Generic vs. Brand",
            content: "**Generic**: epinephrine, albuterol, nitroglycerin\n**Brand**: EpiPen, Ventolin, Nitrostat\n\nThe generic name tells you the actual drug. The brand name tells you who made it. Multiple companies can make the same generic drug under different brand names. Always verify you're giving the right medication regardless of which name is on the label."
          },
          {
            label: "Drug Classes",
            content: "**Bronchodilators**: Open airways (albuterol)\n**Vasoconstrictors**: Narrow blood vessels (epinephrine at high doses)\n**Antiplatelet agents**: Prevent blood clots (aspirin)\n**Opioid antagonists**: Reverse opioid effects (naloxone)\n\nKnowing the class helps you predict effects. A 'bronchodilator' dilates (opens) bronchi (airways). The name tells you what it does."
          },
          {
            label: "Indications vs. Contraindications",
            content: "**Indications**: Reasons TO give a medication\n• Aspirin is indicated for chest pain (suspected ACS)\n• Epinephrine is indicated for anaphylaxis\n\n**Contraindications**: Reasons NOT to give a medication\n• Aspirin is contraindicated in active bleeding\n• Nitroglycerin is contraindicated with recent ED medication use\n\nBoth are equally important. Knowing when NOT to give something is as critical as knowing when to give it."
          }
        ]
      },
      { type: "quiz", quiz: { id: "pharm-basics-q1", question: "What is the difference between a generic name and a brand name?", options: ["There is no difference", "Generic is the scientific name; brand is the marketing name", "Brand is the scientific name; generic is the marketing name", "Generic names change by country"], correctIndex: 1, explanation: "Generic names (like epinephrine) are universal scientific names. Brand names (like EpiPen) are marketing names created by manufacturers. Same drug, different labels—EMS typically uses generic names." } },
      { type: "quiz", quiz: { id: "pharm-basics-q2", question: "A contraindication means:", options: ["A reason TO give a medication", "A reason NOT to give a medication", "The medication is expired", "The dose needs to be doubled"], correctIndex: 1, explanation: "A contraindication is a reason NOT to give a medication—a condition that makes the drug potentially harmful. Knowing contraindications is as important as knowing indications." } }
    ],
    keyPoints: [
      "Drug class predicts expected effects",
      "Indications tell you when to give; contraindications tell you when not to"
    ]
  },
  {
    id: "emt-pharm-routes",
    title: "Medication Forms and Routes",
    content: `How a medication enters the body determines how fast it works and how long it lasts. In EMS, route selection often depends on patient condition and urgency.

**Common Medication Forms**
• Tablets and capsules (oral)
• Sublingual tablets (under the tongue)
• Metered-dose inhalers and nebulizers
• Auto-injectors
• Nasal sprays

**Route Matters**
The same drug given by different routes produces different results. Oral medications must survive the digestive system—slow but convenient. Injectable medications bypass digestion—fast but invasive.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "emt-route-1",
            front: "Sublingual (SL)",
            back: "Under the tongue. Rapid absorption directly into bloodstream—bypasses the digestive system. Example: nitroglycerin for chest pain. Onset: 1-3 minutes."
          },
          {
            id: "emt-route-2",
            front: "Oral (PO)",
            back: "Swallowed and absorbed through GI tract. Slowest onset—must pass through digestive system. Example: aspirin (chewed for faster absorption). Onset: 15-30 minutes."
          },
          {
            id: "emt-route-3",
            front: "Inhalation",
            back: "Breathed in as mist or aerosol. Delivers drug directly to airways/lungs. Fast local effect for respiratory conditions. Example: albuterol. Onset: 5-15 minutes."
          },
          {
            id: "emt-route-4",
            front: "Intramuscular (IM)",
            back: "Injected into muscle tissue. Moderate absorption speed. Example: epinephrine auto-injector for anaphylaxis. Onset: 5-10 minutes."
          },
          {
            id: "emt-route-5",
            front: "Subcutaneous (SQ/SC)",
            back: "Injected under skin but not into muscle. Slower than IM. Example: insulin (not EMT scope, but you'll see it). Onset: 15-30 minutes."
          },
          {
            id: "emt-route-6",
            front: "Intranasal (IN)",
            back: "Sprayed into nose. Absorbed through nasal mucosa. Fast and needle-free. Example: naloxone (Narcan) for opioid overdose. Onset: 2-5 minutes."
          }
        ]
      },
      { type: "quiz", quiz: { id: "pharm-routes-q1", question: "Why is IM epinephrine used for anaphylaxis instead of oral?", options: ["It tastes bad orally", "IM provides much faster onset in an emergency", "Oral is more effective", "There is no oral form"], correctIndex: 1, explanation: "Anaphylaxis is life-threatening and requires rapid intervention. IM injection provides onset in 5-10 minutes, while oral would take 15-30+ minutes—too slow when the airway is closing." } },
      { type: "quiz", quiz: { id: "pharm-routes-q2", question: "Sublingual medications work quickly because they:", options: ["Are chewed first", "Absorb directly into the bloodstream, bypassing digestion", "Dissolve in saliva", "Are higher doses"], correctIndex: 1, explanation: "Sublingual drugs absorb through the thin mucosa under the tongue directly into the bloodstream, completely bypassing the digestive system. This provides rapid onset—typically 1-3 minutes." } }
    ],
    keyPoints: [
      "Sublingual and intranasal bypass the digestive system",
      "IM and SQ require injection technique"
    ],
    rememberThis: "In emergencies, we want fast onset. That's why anaphylaxis gets IM epinephrine (not oral) and opioid overdose gets intranasal naloxone (not a tablet)."
  },
  {
    id: "emt-pharm-scope",
    title: "Your EMT Medication Toolkit",
    content: `These are the medications in your EMT scope of practice. Some you administer directly; others you assist patients with. Know each one thoroughly.

**Medications You Administer**
• Oxygen
• Aspirin
• Oral glucose
• Epinephrine auto-injector
• Naloxone

**Medications You Assist With**
• Nitroglycerin (patient's prescribed)
• Metered-dose inhalers (patient's prescribed)`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Oxygen",
            content: "The most commonly used 'medication' in EMS.\n\n**Indications**: Hypoxia, respiratory distress, shock, cardiac emergencies, trauma\n\n**Delivery Methods**:\n• Nasal cannula: 1-6 L/min (24-44% O₂)\n• Non-rebreather mask: 10-15 L/min (up to 90% O₂)\n• BVM: 15 L/min (nearly 100% O₂)\n\n**Considerations**: Target SpO₂ 94-99% in most patients. COPD patients may need lower targets (88-92%)—but never withhold oxygen from a hypoxic patient."
          },
          {
            label: "Aspirin",
            content: "Antiplatelet agent for suspected acute coronary syndrome (ACS).\n\n**Indication**: Chest pain suspicious for cardiac origin\n**Dose**: 324 mg (4 baby aspirin) chewed\n**Mechanism**: Prevents platelets from clumping, limiting clot formation\n\n**Contraindications**:\n• Aspirin allergy\n• Active GI bleeding\n• Recent stroke (some protocols)\n\n**Key Point**: Chewing speeds absorption. Time matters in heart attacks."
          },
          {
            label: "Oral Glucose",
            content: "Simple sugar for hypoglycemia in conscious patients.\n\n**Indication**: Altered mental status + low blood glucose + able to swallow\n**Form**: Gel tube, tablets, or paste\n**Dose**: 15-25 grams\n\n**Contraindications**:\n• Unconscious patient\n• Unable to swallow\n• Patient without gag reflex\n\n**Key Point**: Patient MUST be able to protect their airway. Never give oral glucose to an unconscious patient—aspiration risk."
          },
          {
            label: "Epinephrine Auto-injector",
            content: "Life-saving medication for anaphylaxis.\n\n**Indication**: Severe allergic reaction with respiratory or cardiovascular symptoms\n**Dose**: 0.3 mg IM (adult), 0.15 mg IM (pediatric)\n**Site**: Outer thigh (through clothing if needed)\n\n**Mechanism**: \n• Opens airways (bronchodilation)\n• Raises blood pressure (vasoconstriction)\n• Reduces swelling\n\n**Key Point**: Don't delay for mild reactions to become severe. Early epinephrine saves lives."
          },
          {
            label: "Naloxone",
            content: "Opioid antagonist—reverses overdose effects.\n\n**Indication**: Suspected opioid overdose with respiratory depression\n**Routes**: Intranasal (IN) or intramuscular (IM)\n**Dose**: 2-4 mg IN, 0.4-2 mg IM (follow local protocol)\n\n**Mechanism**: Blocks opioid receptors, reversing CNS and respiratory depression\n\n**Considerations**:\n• May precipitate acute withdrawal (agitation, vomiting)\n• Short half-life—overdose may return\n• Be prepared for combative patient upon awakening"
          }
        ]
      },
      { type: "quiz", quiz: { id: "pharm-scope-q1", question: "A conscious patient with low blood sugar needs which EMT medication?", options: ["Aspirin", "Oral glucose", "Naloxone", "Epinephrine"], correctIndex: 1, explanation: "Oral glucose is indicated for conscious patients with suspected hypoglycemia who can swallow and protect their airway. It provides simple sugar to raise blood glucose quickly." } },
      { type: "quiz", quiz: { id: "pharm-scope-q2", question: "Naloxone reverses the effects of which type of drug?", options: ["Stimulants", "Opioids", "Benzodiazepines", "Alcohol"], correctIndex: 1, explanation: "Naloxone (Narcan) is an opioid antagonist that blocks opioid receptors, reversing respiratory depression and sedation caused by opioid overdose. It does not work on other drug classes." } }
    ],
    keyPoints: [
      "Oxygen is your most versatile tool",
      "Epinephrine and naloxone are true life-savers"
    ]
  },
  {
    id: "emt-pharm-assist",
    title: "Assisting with Patient Medications",
    content: `Some medications require a patient's own prescription, and you assist with administration rather than providing your own supply. This requires careful verification.

**Nitroglycerin Assist**
For patients with chest pain and their own prescribed nitroglycerin:
• Verify prescription belongs to patient
• Check blood pressure (systolic ≥100 mmHg typically required)
• Ask about recent erectile dysfunction medication use (within 24-48 hours)
• Have patient place tablet under tongue or spray under tongue
• Reassess pain and vital signs

**Inhaler Assist**
For patients with respiratory distress and their own prescribed inhaler:
• Verify prescription belongs to patient
• Check that it's a bronchodilator (rescue inhaler, not steroid)
• Shake inhaler, have patient exhale fully
• Coordinate activation with inhalation
• Have patient hold breath briefly

**The Critical Safety Check**
Before assisting with ANY patient medication:
1. Is this the patient's own prescription?
2. Is the medication indicated for this situation?
3. Are there contraindications?
4. Can you contact medical direction if needed?`,
    blocks: [
      { type: "quiz", quiz: { id: "pharm-assist-q1", question: "Before assisting with a patient's nitroglycerin, you must verify:", options: ["The patient is over 18", "The prescription belongs to this patient", "The patient has taken it before today", "The patient is standing"], correctIndex: 1, explanation: "You must confirm the nitroglycerin prescription belongs to THIS patient. Never assist with someone else's prescribed medication—different patients have different conditions and contraindications." } },
      { type: "quiz", quiz: { id: "pharm-assist-q2", question: "What is a key contraindication for nitroglycerin?", options: ["Headache", "Recent use of erectile dysfunction medication", "Being over age 65", "Having eaten recently"], correctIndex: 1, explanation: "PDE-5 inhibitors (ED medications like sildenafil/Viagra) combined with nitroglycerin can cause severe, life-threatening hypotension. Always ask about use within the last 24-48 hours." } }
    ],
    keyPoints: [
      "Verify prescription belongs to the patient",
      "Check for contraindications before assisting",
      "Document the assistance and patient response"
    ],
    proTip: "The 'recent ED medication' question can be awkward to ask. Try: 'Have you taken any medications for erectile dysfunction in the last 48 hours?' Be matter-of-fact—this is a medical necessity, not curiosity."
  },
  {
    id: "emt-pharm-safety",
    title: "The Five Rights of Medication Safety",
    content: `Medication errors harm patients. The Five Rights are your systematic safety check—a framework that catches mistakes before they happen.

Every time you administer or assist with a medication, verify all five:`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "emt-safety-1",
            front: "Right Patient",
            back: "Confirm identity before giving any medication. Ask the patient their name—don't suggest it. In EMS, also verify the prescription belongs to this patient when assisting with their medications."
          },
          {
            id: "emt-safety-2",
            front: "Right Drug",
            back: "Verify the medication matches what's indicated. Read the label—twice. Generic and brand names can be confusing. If something doesn't look right, stop and verify."
          },
          {
            id: "emt-safety-3",
            front: "Right Dose",
            back: "Confirm the amount is correct for the patient. Pediatric doses are especially critical—weight-based dosing prevents overdose. When in doubt, contact medical direction."
          },
          {
            id: "emt-safety-4",
            front: "Right Route",
            back: "Match the route to the medication form and clinical situation. Sublingual nitroglycerin goes under the tongue, not swallowed. IM epinephrine goes in muscle, not subcutaneous tissue."
          },
          {
            id: "emt-safety-5",
            front: "Right Time",
            back: "Some medications have timing requirements. Document when given for handoff. Repeat doses (like nitroglycerin) have specific intervals. Know your protocols."
          }
        ]
      },
      { type: "quiz", quiz: { id: "pharm-safety-q1", question: "Which of the Five Rights verifies you're giving the medication to the correct person?", options: ["Right Drug", "Right Dose", "Right Patient", "Right Route"], correctIndex: 2, explanation: "Right Patient means confirming the identity of the person receiving the medication. Ask the patient their name rather than suggesting it, and verify prescriptions belong to them." } },
      { type: "quiz", quiz: { id: "pharm-safety-q2", question: "If you realize you made a medication error, you should:", options: ["Hide it to avoid discipline", "Report it immediately and care for the patient", "Wait to see if symptoms develop", "Blame the packaging"], correctIndex: 1, explanation: "Always report medication errors immediately and honestly. The patient's safety depends on transparency so appropriate monitoring and treatment can begin. A culture of safety prevents future errors." } }
    ],
    keyPoints: [
      "Verify all five rights before every medication",
      "Document immediately after administration",
      "If an error occurs, report it honestly and care for the patient"
    ],
    rememberThis: "Errors happen to good providers. The difference is catching them early (before they harm the patient) or having a culture where errors are reported and learned from. Never hide a medication error—your patient's safety depends on honest communication."
  },
  {
    id: "emt-pharm-quiz",
    title: "Knowledge Check",
    content: `Let's apply what you've learned. These questions test both knowledge and clinical judgment.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "emt-pharm-q1",
          question: "A patient with a known bee sting allergy was just stung and has hives and wheezing. What EMT medication is indicated?",
          options: [
            "Oral glucose",
            "Aspirin",
            "Epinephrine auto-injector",
            "Nitroglycerin"
          ],
          correctIndex: 2,
          explanation: "Hives + wheezing after a known allergen exposure = anaphylaxis. Epinephrine is the only EMT-scope medication that treats anaphylaxis. It addresses both the airway (bronchodilation) and cardiovascular (vasoconstriction) effects of the allergic reaction. Early administration saves lives."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-pharm-q2",
          question: "Which medication route bypasses the digestive system for fastest absorption?",
          options: [
            "Oral",
            "Sublingual",
            "Rectal",
            "Topical"
          ],
          correctIndex: 1,
          explanation: "Sublingual medications dissolve under the tongue and absorb directly into the bloodstream through the mucosa. This bypasses the GI tract entirely, providing rapid onset. That's why nitroglycerin is given sublingually for chest pain—we need fast relief."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-pharm-q3",
          question: "What must you verify before assisting with a patient's nitroglycerin?",
          options: [
            "Blood pressure above 100 systolic",
            "No recent erectile dysfunction medication use",
            "Prescription belongs to this patient",
            "All of the above"
          ],
          correctIndex: 3,
          explanation: "All three are essential. Low blood pressure + nitroglycerin = dangerous hypotension. ED medications (PDE-5 inhibitors like sildenafil) + nitroglycerin = severe hypotension. And you must always verify the prescription is for THIS patient—never assist with someone else's medication."
        }
      }
    ]
  },
  {
    id: "emt-pharm-wrapup",
    title: "Foundation for Medication Confidence",
    content: `You've built a solid pharmacology foundation. Let's recap what you've mastered.

**The Language of Medications**
You understand generic vs. brand names, drug classifications, and the critical distinction between indications and contraindications.

**Routes and Onset**
You know how sublingual, oral, inhalation, IM, and intranasal routes differ—and why route selection matters for your patients.

**Your Medication Toolkit**
You're confident with oxygen, aspirin, oral glucose, epinephrine, and naloxone—plus assisting with nitroglycerin and inhalers.

**Safety First**
The Five Rights are now part of your practice—a systematic approach that protects patients and prevents errors.

**What's Next?**
AEMT pharmacology expands this foundation significantly. You'll learn pharmacokinetics (what the body does to drugs), IV/IO administration, and a much larger medication toolkit. But there's no rush—make sure this foundation feels solid first.

You're building skills that matter. Every medication you give with confidence and safety makes a difference for your patients.`,
    blocks: [
      { type: "quiz", quiz: { id: "pharm-wrap-q1", question: "Which EMT medication can be given intranasally for opioid overdose?", options: ["Epinephrine", "Aspirin", "Naloxone", "Oral glucose"], correctIndex: 2, explanation: "Naloxone (Narcan) can be given intranasally for suspected opioid overdose. The intranasal route is fast (2-5 minutes onset), needle-free, and easy to administer in the field." } },
      { type: "quiz", quiz: { id: "pharm-wrap-q2", question: "What is the most commonly used 'medication' in EMS?", options: ["Aspirin", "Epinephrine", "Oxygen", "Naloxone"], correctIndex: 2, explanation: "Oxygen is the most commonly administered 'medication' in EMS. It's indicated for hypoxia, respiratory distress, shock, cardiac emergencies, and trauma—making it the most versatile tool in your kit." } }
    ],
    keyPoints: [
      "EMT pharmacology is foundational but powerful",
      "Safety frameworks prevent errors",
      "This knowledge prepares you for advanced certification"
    ],
    proTip: "Practice talking through medication administration out loud. 'This is the right patient, I've verified the medication, the dose is appropriate...' Making the Five Rights verbal makes them automatic."
  }
];

// =====================================================
// AEMT Pharmacology Content
// =====================================================

export const aemtPharmacologyContent: TopicSection[] = [
  {
    id: "aemt-pharm-intro",
    title: "Expanding Your Medication Toolkit",
    content: `Welcome to AEMT pharmacology. Your scope expands significantly here—IV/IO access opens a world of medication options, and understanding pharmacokinetics helps you anticipate drug effects.

**What Changes at the AEMT Level**
• Direct vascular access (IV/IO)
• Expanded medication list
• Weight-based dosing calculations
• Understanding of how drugs move through the body

**Building on EMT Foundations**
Everything you learned at the EMT level still applies. The Five Rights, route selection, indication vs. contraindication thinking—it all carries forward. Now we add depth and breadth.

**Why Pharmacokinetics Matters**
When you understand how drugs are absorbed, distributed, metabolized, and excreted, you can predict onset, duration, and potential problems. This moves you from memorizing facts to understanding principles.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-pharm-intro-q1",
          question: "What is the primary advantage of IV/IO medication routes over oral?",
          options: [
            "Lower cost",
            "Immediate onset with 100% bioavailability",
            "Less risk of side effects",
            "Easier to administer"
          ],
          correctIndex: 1,
          explanation: "IV/IO provides immediate onset because the medication goes directly into the bloodstream (100% bioavailability). Oral medications must be absorbed through the GI tract, which takes 30-90 minutes and is affected by food and first-pass metabolism."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-pharm-intro-q2",
          question: "Understanding pharmacokinetics helps AEMTs:",
          options: [
            "Memorize more drug names",
            "Predict onset, duration, and potential drug problems",
            "Avoid giving any medications",
            "Replace the need for protocols"
          ],
          correctIndex: 1,
          explanation: "Pharmacokinetics (ADME) explains how drugs behave in the body. This knowledge lets you predict when a drug will start working, how long it will last, and what might alter its behavior in specific patients."
        }
      }
    ],
    keyPoints: [
      "AEMT scope includes IV/IO medication administration",
      "Pharmacokinetics explains drug behavior in the body",
      "EMT foundations remain essential"
    ]
  },
  {
    id: "aemt-pharm-kinetics",
    title: "Pharmacokinetics: What the Body Does to Drugs",
    content: `Pharmacokinetics follows a drug's journey through the body. The acronym **ADME** captures the four key processes: Absorption, Distribution, Metabolism, and Excretion.

Understanding these processes helps you answer practical questions:
• How fast will this medication work?
• How long will the effect last?
• What might alter the drug's behavior in this patient?`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Absorption",
            content: "Drug entering the bloodstream from the site of administration.\n\n**Route affects speed**:\n• IV/IO: Immediate (100% bioavailability)\n• IM: 10-20 minutes\n• Oral: 30-90 minutes (affected by food, stomach contents)\n\n**Clinical Impact**: In emergencies, we choose routes with fast absorption. A patient in anaphylaxis needs IM epinephrine, not an oral tablet.\n\n**Bioavailability**: The percentage of drug that reaches circulation. IV = 100%. Oral may be much lower due to first-pass metabolism in the liver."
          },
          {
            label: "Distribution",
            content: "Drug traveling from blood to tissues throughout the body.\n\n**Factors affecting distribution**:\n• Blood flow (well-perfused organs get drug first)\n• Protein binding (bound drug can't act)\n• Lipid solubility (affects crossing cell membranes)\n• Blood-brain barrier (limits CNS access)\n\n**Clinical Impact**: In shock, poor perfusion means drugs distribute unpredictably. IM medications may absorb slowly if the injection site has reduced blood flow."
          },
          {
            label: "Metabolism",
            content: "Drug being chemically altered, usually by the liver.\n\n**Key concepts**:\n• Converts active drug to inactive metabolites (usually)\n• Some drugs become active only after metabolism (prodrugs)\n• Liver disease = impaired metabolism = prolonged drug effects\n\n**Clinical Impact**: A patient with liver disease may have exaggerated or prolonged effects from medications. Alcohol and other drugs can affect metabolism of medications."
          },
          {
            label: "Excretion",
            content: "Drug leaving the body, primarily through the kidneys.\n\n**Key concepts**:\n• Kidneys filter drugs from blood into urine\n• **Half-life**: Time for 50% of drug to be eliminated\n• Renal impairment = drug accumulation = prolonged effects\n\n**Clinical Impact**: A patient on dialysis may have accumulated medication effects. Repeat dosing before the previous dose is eliminated can lead to toxicity."
          }
        ]
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-kinetics-q1",
          question: "A patient in shock receives an IM injection. Why might absorption be delayed?",
          options: [
            "The needle is too small",
            "Poor perfusion reduces blood flow to the injection site",
            "IM injections are always slow",
            "The medication expired"
          ],
          correctIndex: 1,
          explanation: "In shock, blood is shunted away from peripheral tissues. Reduced blood flow at the IM injection site means the drug is absorbed slowly and unpredictably—one reason IV/IO is preferred in critical patients."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-kinetics-q2",
          question: "A patient with liver disease may experience prolonged drug effects because:",
          options: [
            "The liver produces too many enzymes",
            "Impaired liver metabolism means drugs stay active longer",
            "Liver disease increases drug absorption",
            "The kidneys compensate fully"
          ],
          correctIndex: 1,
          explanation: "The liver metabolizes most drugs into inactive forms. When liver function is impaired, drugs remain active in the bloodstream longer—potentially causing exaggerated or prolonged effects."
        }
      }
    ],
    keyPoints: [
      "ADME: Absorption, Distribution, Metabolism, Excretion",
      "IV/IO provides 100% bioavailability and immediate onset",
      "Liver and kidney disease alter drug behavior"
    ],
    rememberThis: "Think of ADME as tracking a package: How does it get in (Absorption)? Where does it go (Distribution)? How is it processed (Metabolism)? How does it leave (Excretion)?"
  },
  {
    id: "aemt-pharm-iv-io",
    title: "IV/IO Medication Administration",
    content: `Direct vascular access changes everything. Medications reach circulation immediately, giving you precise control over onset and the ability to titrate effects.

**IV vs. IO**
Both provide equivalent vascular access. IO is used when IV access is difficult or impossible—the bone marrow drains directly into central circulation. Same drugs, same doses.

**Bolus vs. Infusion**
• **Bolus (IV Push)**: Entire dose given at once. Fast onset, used for emergencies.
• **Infusion (Drip)**: Drug mixed in fluid, given over time. Sustained effect, allows titration.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "aemt-ivio-1",
            front: "IV Bolus (Push)",
            back: "Medication given all at once, pushed directly into the IV line. Fastest possible onset—used for emergencies like cardiac arrest (epinephrine), SVT (adenosine), or seizures (benzodiazepines). Follow with saline flush to ensure complete delivery."
          },
          {
            id: "aemt-ivio-2",
            front: "IV Infusion (Drip)",
            back: "Medication mixed in a fluid bag, given slowly over time. Allows sustained effect and dose adjustment. Example: dopamine drip for hypotension. Requires pump or careful drip rate calculation."
          },
          {
            id: "aemt-ivio-3",
            front: "IO Access",
            back: "Intraosseous—needle placed directly into bone marrow (usually tibia or humerus). Marrow drains into central circulation, providing equivalent access to IV. Used when peripheral IV fails. Same medications, same doses as IV."
          },
          {
            id: "aemt-ivio-4",
            front: "Drawing from a Vial",
            back: "1. Clean rubber stopper with alcohol\n2. Draw air into syringe (equal to drug volume needed)\n3. Insert needle, inject air (prevents vacuum)\n4. Invert vial, draw medication\n5. Remove air bubbles before administration"
          },
          {
            id: "aemt-ivio-5",
            front: "Drawing from an Ampule",
            back: "1. Tap top to move medication down\n2. Score neck with ampule opener\n3. Wrap with gauze, snap away from you\n4. Use filter needle if available (prevents glass particles)\n5. Draw medication, change to regular needle for injection"
          },
          {
            id: "aemt-ivio-6",
            front: "Saline Flush",
            back: "Push 10-20 mL normal saline after medication administration. Clears the IV line and ensures the full dose reaches circulation. Standard practice after every IV push medication. Critical for medications that need to reach the heart quickly (adenosine)."
          }
        ]
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-ivio-q1",
          question: "IO access provides equivalent drug delivery to IV because:",
          options: [
            "Bones absorb drugs faster",
            "Bone marrow drains directly into central circulation",
            "IO needles are larger",
            "Bones filter medications"
          ],
          correctIndex: 1,
          explanation: "The bone marrow space drains directly into the central venous system. Same drugs, same doses as IV—IO is used when peripheral IV access is difficult or impossible."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-ivio-q2",
          question: "The difference between IV bolus and IV infusion is:",
          options: [
            "Bolus uses a larger needle",
            "Bolus delivers entire dose at once; infusion delivers over time",
            "Infusion is always faster",
            "They are the same technique"
          ],
          correctIndex: 1,
          explanation: "IV bolus (push) delivers the full dose immediately—used for emergencies. IV infusion (drip) delivers medication mixed in fluid slowly over time—used for sustained effects and titration."
        }
      }
    ],
    keyPoints: [
      "IV and IO provide equivalent vascular access",
      "Bolus = all at once; Infusion = over time",
      "Always flush after IV push medications"
    ],
    proTip: "When pushing adenosine for SVT, use the 'two-syringe technique': adenosine in one syringe, flush in the other, both attached via stopcock. Push adenosine, immediately push flush—adenosine has a 10-second half-life and must reach the heart before it's metabolized."
  },
  {
    id: "aemt-pharm-scope",
    title: "Your AEMT Medication Toolkit",
    content: `Your medication list expands significantly. These drugs address hypoglycemia, allergic reactions, respiratory distress, nausea, and pain. Master each one.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Dextrose",
            content: "**Indication**: Severe hypoglycemia when patient cannot take oral glucose\n\n**Forms**:\n• D50 (50% dextrose): 25g in 50mL—traditional but very hypertonic\n• D10 (10% dextrose): 10g in 100mL—preferred in many systems (less tissue damage if infiltrates)\n\n**Dose**: 12.5-25g IV push\n\n**Clinical Pearl**: D10 is gentler on veins and tissues. Many systems have switched from D50. Check blood glucose 5-10 minutes after administration."
          },
          {
            label: "Glucagon",
            content: "**Indication**: Hypoglycemia when IV access is not available\n\n**Route**: IM injection\n**Dose**: 1 mg IM (adult)\n**Onset**: 10-15 minutes (slower than IV dextrose)\n\n**Mechanism**: Stimulates liver to release stored glycogen as glucose\n\n**Limitation**: Won't work if glycogen stores are depleted (chronic alcoholism, malnutrition, prolonged hypoglycemia). In these cases, patient needs IV dextrose."
          },
          {
            label: "Epinephrine 1:1,000",
            content: "**Indication**: Anaphylaxis, severe asthma\n\n**CRITICAL—Concentration Matters**:\n• **1:1,000** (1 mg/mL): For IM injection only\n• **1:10,000** (0.1 mg/mL): For IV use in cardiac arrest\n\n**IM Dose**: 0.3-0.5 mg (0.3-0.5 mL of 1:1,000)\nMay repeat every 5-15 minutes\n\n**Mechanism**: α₁ (vasoconstriction) + β₁ (cardiac stimulation) + β₂ (bronchodilation)\n\n**Never give 1:1,000 IV**—the concentration is 10x too high and will cause dangerous cardiac effects."
          },
          {
            label: "Albuterol",
            content: "**Indication**: Bronchospasm (asthma, COPD, allergic reaction)\n\n**Route**: Nebulized inhalation\n**Dose**: 2.5 mg in 3 mL NS, nebulized over 5-15 minutes\n\n**Mechanism**: β₂ agonist—relaxes bronchial smooth muscle, opening airways\n\n**Side Effects**: Tachycardia, tremors, nervousness (β₂ stimulation isn't perfectly selective)\n\n**Clinical Pearl**: Can give continuously in severe bronchospasm. May combine with ipratropium (Atrovent) for synergistic effect."
          },
          {
            label: "Ondansetron",
            content: "**Indication**: Nausea and vomiting\n\n**Routes**: IV or ODT (orally dissolving tablet)\n**Dose**: 4 mg IV or 4-8 mg ODT\n\n**Mechanism**: Serotonin (5-HT₃) receptor antagonist—blocks nausea signals\n\n**Considerations**:\n• Causes QT prolongation at high doses\n• ODT works even if patient is vomiting (dissolves on tongue)\n• Very effective—commonly used in ED and EMS"
          },
          {
            label: "Diphenhydramine",
            content: "**Indication**: Allergic reactions (adjunct to epinephrine in anaphylaxis)\n\n**Routes**: IV or IM\n**Dose**: 25-50 mg\n\n**Mechanism**: Histamine (H₁) blocker—reduces itching, hives, swelling\n\n**Side Effects**: Sedation (may be desired or problematic depending on situation)\n\n**Note**: Does NOT replace epinephrine in anaphylaxis—it's an adjunct. Epinephrine saves lives; diphenhydramine helps with symptoms."
          }
        ]
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-scope-q1",
          question: "What concentration of epinephrine is used for IM injection in anaphylaxis?",
          options: [
            "1:10,000",
            "1:1,000",
            "1:100",
            "1:100,000"
          ],
          correctIndex: 1,
          explanation: "1:1,000 (1 mg/mL) is for IM injection. 1:10,000 (0.1 mg/mL) is for IV use in cardiac arrest. Giving 1:1,000 IV would be 10x too concentrated—a potentially fatal medication error. Always verify concentration."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-scope-q2",
          question: "Diphenhydramine in anaphylaxis is considered:",
          options: [
            "The primary life-saving medication",
            "An adjunct—it does NOT replace epinephrine",
            "More effective than epinephrine",
            "Contraindicated in allergic reactions"
          ],
          correctIndex: 1,
          explanation: "Diphenhydramine is an H1 blocker that helps with hives and itching but does NOT address the life-threatening components of anaphylaxis (bronchospasm, vasodilation). Epinephrine saves lives; diphenhydramine helps with symptoms."
        }
      }
    ],
    keyPoints: [
      "Know the difference between 1:1,000 and 1:10,000 epinephrine",
      "D10 is preferred over D50 in many systems",
      "Glucagon requires intact liver glycogen stores"
    ]
  },
  {
    id: "aemt-pharm-calc",
    title: "Drug Calculations",
    content: `Math errors in medication dosing can be dangerous. Mastering these calculations ensures your patients receive accurate doses.

**Weight-Based Dosing**
Many medications are dosed by weight (mg/kg). This accounts for differences in body size and ensures appropriate drug levels.

**Concentration Calculations**
You often need to calculate how much volume contains the dose you need.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "aemt-calc-1",
            front: "mg/kg Calculation",
            back: "Patient weight (kg) × dose (mg/kg) = total dose\n\n**Example**: 80 kg patient needs 0.5 mg/kg\n80 × 0.5 = 40 mg total dose\n\n**Converting lbs to kg**: Divide by 2.2\n176 lbs ÷ 2.2 = 80 kg"
          },
          {
            id: "aemt-calc-2",
            front: "Concentration (mg/mL)",
            back: "Total mg in container ÷ total mL = concentration\n\n**Example**: 100 mg in 10 mL vial\n100 ÷ 10 = 10 mg/mL\n\nThis tells you how much drug is in each mL—essential for calculating volume to draw."
          },
          {
            id: "aemt-calc-3",
            front: "Volume to Administer",
            back: "Desired dose (mg) ÷ concentration (mg/mL) = volume (mL)\n\n**Example**: Need 20 mg, concentration is 10 mg/mL\n20 ÷ 10 = 2 mL to draw up\n\nAlways double-check before administration."
          },
          {
            id: "aemt-calc-4",
            front: "Drip Rate (gtts/min)",
            back: "(Volume × drip factor) ÷ time in minutes\n\n**Example**: 100 mL over 30 min with 10 gtt/mL set\n(100 × 10) ÷ 30 = 33 gtts/min\n\nMost EMS uses pumps, but know this formula for backup."
          }
        ]
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-calc-q1",
          question: "A patient weighs 154 lbs. What is their weight in kg?",
          options: [
            "77 kg",
            "70 kg",
            "154 kg",
            "100 kg"
          ],
          correctIndex: 1,
          explanation: "Divide pounds by 2.2 to get kilograms: 154 ÷ 2.2 ≈ 70 kg. Always convert to kg before weight-based dosing calculations."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-calc-q2",
          question: "You need 40 mg of a drug that comes as 10 mg/mL. How much do you draw?",
          options: [
            "2 mL",
            "4 mL",
            "10 mL",
            "40 mL"
          ],
          correctIndex: 1,
          explanation: "Desired dose ÷ concentration = volume. 40 mg ÷ 10 mg/mL = 4 mL. Always double-check calculations before administration."
        }
      }
    ],
    keyPoints: [
      "Always convert pounds to kilograms before calculating",
      "Desired dose ÷ concentration = volume to give",
      "Double-check calculations before administration"
    ],
    rememberThis: "A simple memory trick for dose calculation: 'Desired over Have times Volume' (D/H × V). If you want 20 mg, have 10 mg/mL, and it's in a 10 mL vial: (20/10) × 1 = 2 mL."
  },
  {
    id: "aemt-pharm-clinical",
    title: "Clinical Application Scenarios",
    content: `Let's connect pharmacology to patient care. In the field, you'll combine assessment findings with medication knowledge to make decisions.

**Scenario 1: Hypoglycemia**
Patient found confused, blood glucose 42 mg/dL. IV access difficult after two attempts.

*Decision*: Glucagon 1 mg IM. Monitor for response (10-15 minutes). If IV obtained later, D10/D50 can be given.

**Scenario 2: Allergic Reaction Progression**
Patient with hives and mild throat tightness after eating shellfish. No respiratory distress yet.

*Decision*: This could progress to anaphylaxis. Consider early epinephrine (0.3-0.5 mg IM), diphenhydramine (25-50 mg IV/IM), and close monitoring. Early intervention prevents deterioration.

**Scenario 3: Respiratory Distress**
Patient with known asthma, diffuse wheezing, speaking in short phrases, SpO₂ 88%.

*Decision*: Albuterol nebulizer (2.5 mg), high-flow oxygen, patient positioning. May need continuous albuterol if severe. Consider epinephrine if not responding.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-clinical-q1",
          question: "A hypoglycemic patient with no IV access should receive:",
          options: [
            "Oral glucose tablets",
            "Glucagon 1 mg IM",
            "D50 orally",
            "Insulin"
          ],
          correctIndex: 1,
          explanation: "Without IV access, glucagon 1 mg IM is the appropriate treatment. It stimulates the liver to release stored glycogen as glucose. Response takes 10-15 minutes—slower than IV dextrose but effective when IV isn't available."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-clinical-q2",
          question: "Early epinephrine in an allergic reaction with throat tightness is important because:",
          options: [
            "It's required by protocol only",
            "Early intervention prevents progression to full anaphylaxis",
            "Epinephrine treats hives",
            "It's less effective if given early"
          ],
          correctIndex: 1,
          explanation: "Throat tightness suggests potential airway compromise. Early epinephrine addresses bronchospasm, vasodilation, and swelling before they become life-threatening. Waiting for full anaphylaxis to develop before treating means playing catch-up."
        }
      }
    ],
    keyPoints: [
      "Assessment findings guide medication selection",
      "Consider patient-specific factors (allergies, conditions, current medications)",
      "Early intervention often produces better outcomes"
    ],
    proTip: "When in doubt about a medication decision, ask yourself: 'What's the worst that could happen if I give this? What's the worst that could happen if I don't?' Sometimes the risk of NOT treating outweighs the risk of treating."
  },
  {
    id: "aemt-pharm-quiz",
    title: "Knowledge Check",
    content: `Apply your AEMT pharmacology knowledge to these clinical questions.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-pharm-q1",
          question: "A 70 kg patient needs a medication dosed at 0.5 mg/kg. What is the correct dose?",
          options: [
            "35 mg",
            "70 mg",
            "140 mg",
            "0.5 mg"
          ],
          correctIndex: 0,
          explanation: "70 kg × 0.5 mg/kg = 35 mg. Weight-based dosing ensures appropriate drug levels regardless of patient size. Always verify weight in kg (divide lbs by 2.2)."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-pharm-q2",
          question: "What is the critical difference between 1:1,000 and 1:10,000 epinephrine?",
          options: [
            "1:10,000 is more concentrated",
            "1:1,000 works faster",
            "1:1,000 is for IM, 1:10,000 is for IV",
            "They are interchangeable"
          ],
          correctIndex: 2,
          explanation: "1:1,000 (1 mg/mL) is for IM injection—used in anaphylaxis and severe asthma. 1:10,000 (0.1 mg/mL) is for IV use in cardiac arrest. Giving 1:1,000 IV would deliver 10x the intended concentration—a potentially fatal medication error."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-pharm-q3",
          question: "Why might glucagon be ineffective in a hypoglycemic patient with chronic alcoholism?",
          options: [
            "Alcohol blocks glucagon receptors",
            "Glucagon requires liver glycogen stores, which may be depleted",
            "Alcoholic patients can't absorb IM medications",
            "Glucagon only works for Type 1 diabetics"
          ],
          correctIndex: 1,
          explanation: "Glucagon works by stimulating the liver to release stored glycogen as glucose. Chronic alcoholism and malnutrition deplete glycogen stores, making glucagon ineffective. These patients need IV dextrose, which provides glucose directly without relying on liver stores."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-pharm-q4",
          question: "A medication has a concentration of 10 mg/mL. You need 25 mg. How much do you draw up?",
          options: [
            "1.0 mL",
            "2.5 mL",
            "10 mL",
            "25 mL"
          ],
          correctIndex: 1,
          explanation: "Desired dose ÷ concentration = volume. 25 mg ÷ 10 mg/mL = 2.5 mL. This is the fundamental drug calculation formula you'll use constantly: D/H × V."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-pharm-q5",
          question: "Why is a saline flush given after IV push medications?",
          options: [
            "To dilute the medication",
            "To ensure the full dose reaches circulation",
            "To prevent vein collapse",
            "To test IV patency only"
          ],
          correctIndex: 1,
          explanation: "A 10-20 mL saline flush after IV push clears the medication from the IV line and ensures the complete dose reaches central circulation. Critical for time-sensitive drugs like adenosine (10-second half-life) that must reach the heart quickly."
        }
      }
    ]
  },
  {
    id: "aemt-pharm-wrapup",
    title: "Ready for Advanced Practice",
    content: `You've built significant pharmacology knowledge at the AEMT level. Let's summarize what you've mastered.

**Pharmacokinetics**
You understand ADME—how drugs are absorbed, distributed, metabolized, and excreted. This knowledge helps you predict onset, duration, and potential complications.

**IV/IO Administration**
You're confident with vascular access medications—bolus vs. infusion, proper drug preparation, and the critical saline flush.

**Expanded Medication Toolkit**
You know your AEMT medications thoroughly: dextrose, glucagon, epinephrine concentrations, albuterol, ondansetron, and diphenhydramine.

**Calculation Competence**
Weight-based dosing, concentration calculations, and volume determination are now routine skills.

**What's Next?**
Paramedic pharmacology takes you deeper—into pharmacodynamics (what drugs do to the body), receptor theory, drug mechanisms, and clinical integration. You'll understand not just what to give, but exactly why it works.

You've earned the foundation for that next step. The clinical thinking you're developing serves every patient you'll ever treat.`,
    keyPoints: [
      "ADME explains drug behavior in the body",
      "IV/IO access expands treatment options significantly",
      "Accurate calculations prevent medication errors"
    ],
    proTip: "The transition from AEMT to Paramedic pharmacology is about depth, not just breadth. You'll learn the 'why' behind every medication choice—receptor mechanisms, hemodynamic effects, and clinical reasoning that connects assessment to treatment."
  }
];

// =====================================================
// Paramedic Advanced Pharmacology Content
// =====================================================

export const paramedicPharmacologyContent: TopicSection[] = [
  {
    id: "para-pharm-intro",
    title: "Pharmacology Drives Paramedic Practice",
    content: `At the paramedic level, pharmacology isn't just about knowing drugs—it's about understanding mechanisms well enough to make independent clinical decisions.

**The Shift in Thinking**
Every protocol rests on pharmacological principles. When you understand those principles, you can:
• Predict medication effects before you see them
• Troubleshoot when expected responses don't occur
• Adapt protocols to unusual patient presentations
• Choose between medications based on the clinical picture

**What You'll Master**
• **Pharmacodynamics**: What drugs do to the body
• **Receptor theory**: How drugs produce their effects
• **Cardiovascular pharmacology**: Vasopressors, inotropes, antiarrhythmics
• **Emergency pharmacology**: ACLS drugs and why they work
• **Clinical integration**: Connecting it all to patient care

This is where you become the clinician who understands the 'why' behind every intervention.`,
    keyPoints: [
      "Pharmacology understanding enables clinical reasoning",
      "Mechanisms explain why protocols work",
      "This knowledge differentiates competent from excellent providers"
    ]
  },
  {
    id: "para-pharm-dynamics",
    title: "Pharmacodynamics: What Drugs Do to the Body",
    content: `If pharmacokinetics is what the body does to drugs, **pharmacodynamics** is what drugs do to the body. Understanding drug-receptor interactions lets you predict effects and choose the right medication for each situation.

**Receptor Theory**
Most drugs work by binding to receptors—proteins on cell surfaces or inside cells. Think of it like a key in a lock: the drug (key) binds to the receptor (lock) and something happens.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Receptors",
            content: "Receptors are proteins that recognize specific molecules and trigger cellular responses.\n\n**Key Concepts**:\n• Receptors are specific—they only respond to certain 'shapes'\n• Different receptor subtypes exist (α₁, α₂, β₁, β₂, etc.)\n• The same drug can affect multiple receptor types\n• Receptor density and sensitivity vary between patients\n\n**Clinical Impact**: Understanding which receptors a drug activates tells you what effects to expect. Epinephrine hits α₁, β₁, and β₂—that's why it affects blood vessels, heart, and airways."
          },
          {
            label: "Agonists",
            content: "Drugs that **activate** receptors, producing a response.\n\n**Full Agonists**: Produce maximum possible effect\n• Example: Epinephrine at β₁ receptors increases heart rate\n\n**Clinical Impact**: When you want a specific effect (bronchodilation, vasoconstriction, increased contractility), you choose an agonist for the right receptor. Albuterol is a β₂ agonist—it activates β₂ receptors to open airways."
          },
          {
            label: "Antagonists",
            content: "Drugs that **block** receptors, preventing agonist effects.\n\n**Competitive Antagonists**: Can be overcome with higher agonist doses\n• Example: Naloxone blocks opioid receptors\n\n**Clinical Impact**: Antagonists are your 'antidotes.' Naloxone reverses opioid overdose by blocking the receptors opioids use. Flumazenil reverses benzodiazepines. The drug doesn't 'remove' the original drug—it blocks its access to receptors."
          },
          {
            label: "Partial Agonists",
            content: "Drugs that activate receptors but produce **submaximal** effect.\n\n**The Ceiling Effect**: Even at high doses, response plateaus below full agonist maximum.\n\n**Clinical Example**: Buprenorphine (Suboxone) is a partial opioid agonist. It activates opioid receptors enough to prevent withdrawal but not enough to produce full opioid effects. In the presence of a full agonist like heroin, it can actually reduce the effect (acts like an antagonist)."
          }
        ]
      }
    ],
    keyPoints: [
      "Agonists activate receptors; antagonists block them",
      "Receptor subtype determines specific effects",
      "Partial agonists have a ceiling effect"
    ],
    rememberThis: "Think of receptors like light switches: Agonists turn the light on. Antagonists cover the switch so no one can reach it. Partial agonists can only turn the dimmer partway up."
  },
  {
    id: "para-pharm-autonomic",
    title: "Autonomic Pharmacology",
    content: `The autonomic nervous system controls involuntary functions—heart rate, blood vessel tone, airway diameter, and more. Most emergency medications work through autonomic receptors.

**Sympathetic ('Fight or Flight')**
Adrenergic receptors: α₁, α₂, β₁, β₂

**Parasympathetic ('Rest and Digest')**
Cholinergic (muscarinic) receptors

Understanding these receptors lets you predict exactly what each medication will do.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "para-auto-1",
            front: "Alpha-1 (α₁) Receptors",
            back: "**Location**: Peripheral blood vessels\n**Effect when activated**: Vasoconstriction → increased SVR → increased BP\n\n**Activated by**: Norepinephrine, phenylephrine, epinephrine (at higher doses)\n\n**Clinical use**: α₁ agonists for shock/hypotension when you need vasoconstriction"
          },
          {
            id: "para-auto-2",
            front: "Beta-1 (β₁) Receptors",
            back: "**Location**: Heart\n**Effects when activated**:\n• ↑ Heart rate (chronotropy)\n• ↑ Contractility (inotropy)\n• ↑ Conduction speed (dromotropy)\n\n**Activated by**: Epinephrine, dopamine, dobutamine\n\n**Clinical use**: β₁ agonists when you need stronger, faster cardiac output"
          },
          {
            id: "para-auto-3",
            front: "Beta-2 (β₂) Receptors",
            back: "**Location**: Bronchial smooth muscle, blood vessels\n**Effects when activated**:\n• Bronchodilation\n• Vasodilation (especially skeletal muscle vessels)\n\n**Activated by**: Albuterol, epinephrine (at lower doses), terbutaline\n\n**Clinical use**: β₂ agonists for asthma/bronchospasm"
          },
          {
            id: "para-auto-4",
            front: "Muscarinic (Cholinergic) Receptors",
            back: "**Location**: Heart (SA/AV nodes), smooth muscle, glands\n**Effects when activated** ('rest and digest'):\n• ↓ Heart rate\n• ↑ Secretions\n• Bronchoconstriction\n\n**Blocked by**: Atropine (anticholinergic)\n\n**Clinical use**: Atropine for bradycardia—removes parasympathetic 'brake'"
          },
          {
            id: "para-auto-5",
            front: "Epinephrine's Receptor Profile",
            back: "**Hits multiple receptors**: α₁ + β₁ + β₂\n\n**Dose-dependent effects**:\n• Low dose: β-effects dominate (bronchodilation, ↑HR)\n• High dose: α-effects dominate (vasoconstriction)\n\n**Why it works in anaphylaxis**: Opens airways (β₂), supports BP (α₁), supports cardiac output (β₁)—addresses all major anaphylaxis problems"
          },
          {
            id: "para-auto-6",
            front: "Atropine's Mechanism",
            back: "**Action**: Blocks muscarinic (cholinergic) receptors\n\n**Effect**: Removes parasympathetic influence → ↑ heart rate\n\n**Clinical uses**:\n• Symptomatic bradycardia\n• Organophosphate poisoning (blocks excessive cholinergic stimulation)\n\n**Dose**: 0.5-1 mg IV (may repeat to max 3 mg)"
          }
        ]
      }
    ],
    keyPoints: [
      "α₁ = vasoconstriction; β₁ = cardiac stimulation; β₂ = bronchodilation",
      "Atropine blocks parasympathetic effects, increasing heart rate",
      "Epinephrine affects all three adrenergic receptor types"
    ],
    proTip: "When choosing between vasopressors, think about what your patient needs. Low SVR (sepsis)? You want α₁ (norepinephrine). Low contractility (cardiogenic shock)? You want β₁ (dobutamine). Both? Epinephrine or norepinephrine with its α₁ + some β₁."
  },
  {
    id: "para-pharm-cardio",
    title: "Cardiovascular Pharmacology",
    content: `Cardiovascular drugs target specific hemodynamic variables. Matching the drug mechanism to the hemodynamic problem is the key to effective treatment.

**The Hemodynamic Equation**
MAP = CO × SVR

When MAP is low, you either need to increase cardiac output (CO) or increase systemic vascular resistance (SVR)—or both.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Vasopressors",
            content: "**Function**: Increase SVR through vasoconstriction (primarily α₁)\n\n**Norepinephrine (Levophed)**\n• First-line for septic shock\n• Predominantly α₁ with some β₁\n• Increases SVR without excessive cardiac stimulation\n\n**Phenylephrine (Neosynephrine)**\n• Pure α₁ agonist\n• Vasoconstriction without cardiac effects\n• May cause reflex bradycardia\n\n**When to use**: Distributive shock (sepsis, anaphylaxis) where the problem is low SVR, not low cardiac output."
          },
          {
            label: "Inotropes",
            content: "**Function**: Increase cardiac contractility (primarily β₁)\n\n**Dobutamine**\n• β₁ agonist—increases contractility\n• Minimal α effects—may actually decrease SVR slightly\n• Drug of choice for cardiogenic shock with adequate BP\n\n**Milrinone**\n• Phosphodiesterase inhibitor (different mechanism)\n• Increases contractility AND causes vasodilation\n• 'Inodilator'—be cautious with BP\n\n**When to use**: Cardiogenic shock where the problem is pump failure, not vascular tone."
          },
          {
            label: "Chronotropes",
            content: "**Function**: Affect heart rate\n\n**Positive Chronotropes** (↑ HR):\n• Epinephrine, atropine, dopamine\n• Used for symptomatic bradycardia\n\n**Negative Chronotropes** (↓ HR):\n• Beta-blockers (metoprolol)\n• Calcium channel blockers (diltiazem)\n• Adenosine (briefly)\n• Used for tachyarrhythmias\n\n**Clinical thinking**: Sometimes slowing the heart improves filling time and actually improves output."
          },
          {
            label: "Antiarrhythmics",
            content: "**Amiodarone**\n• Blocks sodium, potassium, calcium channels + β-blockade\n• Prolongs action potential and refractory period\n• First-line for VF/pVT after defib and epi\n• Also used for atrial fibrillation rate control\n\n**Lidocaine**\n• Sodium channel blocker\n• Stabilizes cardiac membranes\n• Alternative for VF/pVT; post-resuscitation arrhythmias\n\n**Adenosine**\n• Ultra-short-acting (half-life ~10 seconds)\n• Briefly blocks AV node conduction\n• Breaks SVT reentry circuits\n• Given rapid push with immediate flush"
          }
        ]
      }
    ],
    keyPoints: [
      "Vasopressors increase SVR; inotropes increase contractility",
      "Match the drug mechanism to the hemodynamic problem",
      "Norepinephrine is first-line for septic shock; dobutamine for cardiogenic shock"
    ]
  },
  {
    id: "para-pharm-emergency",
    title: "Emergency Pharmacology Decoded",
    content: `ACLS medications aren't memorized lists—they're logical applications of pharmacology. When you understand the mechanisms, the protocols make sense.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "para-emerg-1",
            front: "Why Epinephrine in Cardiac Arrest?",
            back: "**Primary effect**: α₁ vasoconstriction\n\n**Mechanism**: Peripheral vasoconstriction increases coronary and cerebral perfusion pressure during CPR.\n\n**The β₁ effects are irrelevant**—the heart isn't pumping, so you can't 'stimulate' it to beat harder. You're increasing the pressure that pushes blood (from CPR) through coronary arteries.\n\n**Dose**: 1 mg IV/IO every 3-5 minutes"
          },
          {
            id: "para-emerg-2",
            front: "Amiodarone in VF/pVT",
            back: "**When**: After shock + epinephrine haven't converted VF/pVT\n\n**Mechanism**: Multi-channel blocker prolongs refractory period, making the heart less likely to sustain chaotic rhythms.\n\n**Dose**: 300 mg IV first dose; 150 mg IV second dose\n\n**Note**: Takes time to work. Don't expect immediate conversion—it changes the electrical environment so the next shock is more likely to succeed."
          },
          {
            id: "para-emerg-3",
            front: "Lidocaine as Alternative",
            back: "**When**: VF/pVT if amiodarone unavailable, or post-resuscitation arrhythmias\n\n**Mechanism**: Sodium channel blocker—stabilizes cardiac membranes, reduces automaticity.\n\n**Dose**: 1-1.5 mg/kg IV first dose; 0.5-0.75 mg/kg subsequent doses (max 3 mg/kg)\n\n**Infusion**: 1-4 mg/min after ROSC for rhythm maintenance"
          },
          {
            id: "para-emerg-4",
            front: "Adenosine for SVT",
            back: "**Why rapid push + flush?**: Half-life is ~10 seconds. Drug must reach the AV node before it's metabolized.\n\n**Mechanism**: Briefly blocks AV node conduction, interrupting reentry circuits that cause SVT.\n\n**Dose**: 6 mg rapid IV push; 12 mg if no response (may repeat 12 mg once)\n\n**Expected response**: Brief asystole (2-6 seconds), then conversion to sinus rhythm or identification of underlying rhythm."
          },
          {
            id: "para-emerg-5",
            front: "Calcium in Hyperkalemia",
            back: "**Mechanism**: Stabilizes cardiac cell membranes—doesn't lower potassium but protects the heart from arrhythmias.\n\n**When to give**: Peaked T waves, widened QRS, or any ECG changes suggesting hyperkalemia.\n\n**Dose**: Calcium chloride 500-1000 mg IV or calcium gluconate 1-3 g IV\n\n**Onset**: 1-3 minutes; effect lasts 30-60 minutes\n\n**Note**: This is a bridge—patient still needs definitive K⁺ lowering (insulin/glucose, dialysis)."
          },
          {
            id: "para-emerg-6",
            front: "Push-Dose Pressors",
            back: "**What**: Diluted epinephrine for hypotension (not arrest)\n\n**Preparation**: Typically 10 mcg/mL concentration\n\n**Dose**: 5-20 mcg IV push every 2-5 minutes\n\n**When to use**: Bridge to infusion, procedural hypotension, temporizing measure\n\n**Caution**: Requires careful preparation—easy to make concentration errors. Know your system's approved dilution protocol."
          }
        ]
      }
    ],
    keyPoints: [
      "Epinephrine in arrest works via α₁ vasoconstriction, not cardiac stimulation",
      "Amiodarone changes the electrical environment for the next shock",
      "Calcium stabilizes membranes in hyperkalemia—doesn't lower K⁺"
    ],
    proTip: "When you push epinephrine in cardiac arrest, you're not trying to 'restart' the heart—you're increasing coronary perfusion pressure so when you shock, the defibrillation has a better chance of working. The pharmacology explains why we give epi between shocks, not instead of them."
  },
  {
    id: "para-pharm-special",
    title: "Special Pharmacology Considerations",
    content: `Not all patients respond to medications the same way. Age, organ function, and concurrent medications all affect drug behavior.

**Pediatric Pharmacology**
• Weight-based dosing is critical—adult doses can be lethal
• Different body composition affects distribution
• Immature liver/kidneys affect metabolism and excretion
• Always calculate, verify, and use reference tools

**Geriatric Pharmacology**
• Reduced renal function = drug accumulation
• Reduced liver function = prolonged metabolism
• Polypharmacy = drug interaction risks
• Start low, go slow—but don't withhold necessary treatment

**Drug Interactions**
• Beta-blockers + calcium channel blockers = profound bradycardia/hypotension
• Nitroglycerin + PDE-5 inhibitors (sildenafil) = severe hypotension
• Monoamine oxidase inhibitors + sympathomimetics = hypertensive crisis
• Always consider what medications the patient is already taking`,
    keyPoints: [
      "Pediatric patients require weight-based dosing",
      "Geriatric patients may need dose adjustments for organ function",
      "Drug interactions can be life-threatening"
    ],
    rememberThis: "The pharmacology principles are the same in every patient—but the application requires adjustment. A 2-year-old and an 82-year-old both have β₁ receptors, but the doses needed to affect them are very different."
  },
  {
    id: "para-pharm-quiz",
    title: "Knowledge Check",
    content: `Apply paramedic-level pharmacology to these clinical scenarios.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "para-pharm-q1",
          question: "A patient in septic shock has adequate fluid resuscitation but remains hypotensive with MAP 55 mmHg. What is the first-line vasopressor?",
          options: [
            "Dopamine",
            "Dobutamine",
            "Norepinephrine",
            "Phenylephrine"
          ],
          correctIndex: 2,
          explanation: "Norepinephrine is first-line for septic shock. It primarily causes vasoconstriction (α₁) to increase SVR—addressing the core problem in distributive shock—with some beneficial cardiac stimulation (β₁). Dobutamine would worsen hypotension by potentially causing vasodilation. Dopamine has fallen out of favor due to increased arrhythmia risk."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-pharm-q2",
          question: "Why is adenosine given as a rapid push followed immediately by a flush?",
          options: [
            "It needs to reach the heart before being metabolized",
            "Slow administration causes seizures",
            "It must be mixed with saline to work",
            "Rapid push prevents pain at the injection site"
          ],
          correctIndex: 0,
          explanation: "Adenosine has a half-life of approximately 10 seconds—it's rapidly broken down in the blood by red blood cells. If pushed slowly, it will be metabolized before reaching the AV node. The flush ensures the full dose enters central circulation quickly, maximizing the chance of therapeutic effect."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-pharm-q3",
          question: "A patient has cardiogenic shock with systolic BP 80 mmHg and signs of poor cardiac output. Which medication primarily targets contractility?",
          options: [
            "Norepinephrine (α₁ + β₁)",
            "Phenylephrine (α₁)",
            "Dobutamine (β₁)",
            "Atropine (anticholinergic)"
          ],
          correctIndex: 2,
          explanation: "Dobutamine is a β₁ agonist that increases contractility (inotropy) without significant vasoconstriction. It's the inotrope of choice when the problem is pump failure rather than low SVR. Norepinephrine could increase afterload and make the failing heart work harder; dobutamine helps the heart pump more effectively."
        }
      },
      { type: "quiz", quiz: { id: "emt-resp-q4", question: "A patient with pulmonary edema is having trouble breathing. What position is most helpful?", options: ["Supine (flat on back)", "Sitting upright", "Prone (on stomach)", "Trendelenburg (feet elevated)"], correctIndex: 1, explanation: "Sitting upright reduces venous return (preload) to the heart, helping reduce fluid backup into the lungs. It also uses gravity to keep fluid in the lower lungs, improving gas exchange in the upper lung fields." } },
      { type: "quiz", quiz: { id: "emt-resp-q5", question: "A patient has crackles, fever, and a productive cough. The most likely condition is:", options: ["Asthma", "COPD", "Pneumonia", "Pulmonary embolism"], correctIndex: 2, explanation: "Crackles (fluid in alveoli) + fever + productive cough is the classic triad for pneumonia. The infection fills alveoli with fluid and pus, creating crackles on auscultation and impairing gas exchange." } }
    ]
  },
  {
    id: "para-pharm-wrapup",
    title: "Pharmacology as Clinical Reasoning",
    content: `You've completed advanced pharmacology—and with it, a transformation in how you think about medications.

**What You've Mastered**

**Pharmacodynamics**
You understand receptor theory—agonists, antagonists, and how drugs produce effects at the cellular level.

**Autonomic Pharmacology**
You can predict drug effects based on receptor profile: α₁ for vasoconstriction, β₁ for cardiac stimulation, β₂ for bronchodilation, muscarinic blockade for increased heart rate.

**Cardiovascular Pharmacology**
You match medications to hemodynamic problems—vasopressors for low SVR, inotropes for low contractility, and understand why norepinephrine is first-line for septic shock while dobutamine is preferred for cardiogenic shock.

**Emergency Pharmacology**
ACLS medications make mechanistic sense. Epinephrine in arrest works via α₁ vasoconstriction. Amiodarone changes the electrical environment. Adenosine must be pushed rapidly due to its 10-second half-life.

**The Bigger Picture**
Every drug choice should connect to a physiological rationale. Protocol pharmacology is a starting point, not a ceiling. Your understanding of mechanisms allows you to:
• Predict responses before they happen
• Troubleshoot when things don't go as expected
• Adapt treatment to individual patient needs

**You've Completed the Pharmacology Progression**
From EMT medication basics through AEMT kinetics to paramedic-level mechanisms—you've built comprehensive pharmacology knowledge. This foundation connects to every aspect of paramedic practice: ACLS, 12-lead interpretation, critical care transport, and beyond.

You're not just following protocols. You're understanding why they work.`,
    keyPoints: [
      "Pharmacodynamics explains drug mechanisms at the receptor level",
      "Autonomic receptor knowledge predicts medication effects",
      "Matching drug mechanism to clinical problem enables targeted treatment"
    ],
    proTip: "When you push a medication, you should be able to explain exactly what receptors it affects, what physiological changes you expect, and why that helps your patient. That level of understanding makes you a better clinician—and a safer one."
  }
];

// =====================================================
// EMT RESPIRATORY EMERGENCIES - Recognition & BLS
// =====================================================

export const emtRespiratoryEmergenciesContent: TopicSection[] = [
  {
    id: "resp-intro",
    title: "When Breathing Becomes a Battle",
    content: `Respiratory emergencies are among the most common calls you'll respond to—and among the most critical. When someone can't breathe, everything else becomes secondary.

**Building on Your A&P Foundation**
Remember the airway tree from Anatomy and Physiology? Air travels from nose/mouth through the pharynx, larynx, trachea, bronchi, bronchioles, and finally to the alveoli where gas exchange happens. When any part of this pathway is compromised, you see respiratory distress.

**What You'll Learn**
• Recognizing the spectrum from adequate breathing to respiratory failure
• Differentiating common conditions by their patterns
• Selecting appropriate oxygen delivery
• Applying BLS airway interventions effectively

This is where your A&P foundation becomes clinical reality.`,
    blocks: [
      { type: "quiz", quiz: { id: "resp-intro-q1", question: "Respiratory emergencies are among the most common EMS calls because:", options: ["They are easy to treat", "Breathing problems can rapidly become life-threatening", "They only occur in elderly patients", "They are always caused by asthma"], correctIndex: 1, explanation: "Respiratory emergencies are both common and critical. When someone can't breathe, tissue hypoxia develops rapidly, making these calls time-sensitive and high-priority." } },
      { type: "quiz", quiz: { id: "resp-intro-q2", question: "Your understanding of airway anatomy helps with respiratory emergencies because:", options: ["You can name all the structures on a test", "You can predict where problems are occurring based on signs and symptoms", "It's not actually helpful in the field", "It helps you write better reports"], correctIndex: 1, explanation: "Knowing anatomy means that when you hear wheezing (bronchioles) vs. stridor (upper airway), you immediately know WHERE the problem is and can select appropriate interventions." } }
    ],
    keyPoints: [
      "Respiratory emergencies are common and critical",
      "Builds on airway anatomy knowledge",
      "Recognition drives intervention"
    ]
  },
  {
    id: "resp-normal-vs-abnormal",
    title: "Normal vs. Abnormal Breathing – Know the Baseline",
    content: `Before you can recognize a problem, you need to know what normal looks like. Assessment starts with comparison to baseline.

**Normal Adult Breathing**
• Rate: 12-20 breaths per minute
• Regular rhythm
• Effortless—no visible struggle
• Adequate chest rise
• Quiet breath sounds
• Normal skin color
• Speaks in complete sentences

Any deviation from this baseline is information. The more deviations, the more concerning the picture.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Adequate Breathing",
            content: "Rate 12-20 (adults), regular rhythm, effortless, good chest rise, quiet breath sounds, normal skin color. Patient speaks in full sentences without pausing to breathe. The respiratory system is meeting the body's oxygen demands without strain."
          },
          {
            label: "Respiratory Distress",
            content: "Increased rate, increased effort, tripod position, accessory muscle use (neck, chest, abdomen), nasal flaring, speaks in short phrases. Patient is working hard but compensating—they're still getting enough oxygen to function. This is the time to intervene before they tire."
          },
          {
            label: "Respiratory Failure",
            content: "Decreased or irregular rate, minimal effort (fatigue), cyanosis or pallor, altered mental status, only 1-2 word sentences or silent. Compensation is failing—the body can't keep up. This patient needs immediate positive pressure ventilation. Silence is NOT improvement."
          }
        ]
      },
      { type: "quiz", quiz: { id: "resp-baseline-q1", question: "A patient who was previously speaking in full sentences now can only say 2-3 words at a time. This indicates:", options: ["Improvement", "Worsening respiratory status", "Normal variation", "Psychological distress"], correctIndex: 1, explanation: "Decreasing ability to speak in sentences is a sign of worsening respiratory distress. The patient is using more energy to breathe, leaving less air for speech. This is a deterioration that requires escalated intervention." } },
      { type: "quiz", quiz: { id: "resp-baseline-q2", question: "In respiratory failure, the patient's effort often DECREASES. Why is this dangerous?", options: ["It means they're getting better", "It means they're too exhausted to compensate—breathing may stop soon", "Decreased effort is always normal", "It indicates they need less oxygen"], correctIndex: 1, explanation: "Decreasing effort in respiratory failure means the patient is exhausted and can no longer compensate. This is NOT improvement—it's a sign of imminent respiratory arrest. Quiet + distressed = critical." } }
    ],
    keyPoints: [
      "Distress: increased effort, compensating",
      "Failure: decreased effort, compensation failing"
    ],
    proTip: "Count respirations for 30 seconds and multiply by 2. Be subtle—patients often change their breathing if they know you're watching."
  },
  {
    id: "resp-signs-symptoms",
    title: "Signs and Symptoms – The Body's Warning Signals",
    content: `The body has multiple ways of signaling respiratory distress. Learning to read these signs helps you catch problems early and gauge severity.

**Position Tells a Story**
Patients naturally assume positions that help them breathe. Tripod position (leaning forward, hands on knees) opens the airway and maximizes accessory muscle use.

**Listen for Sounds**
• **Wheezing**: Lower airway narrowing (asthma, COPD, allergic reaction)
• **Stridor**: Upper airway obstruction (swelling, foreign body)—this is urgent
• **Crackles**: Fluid in the alveoli (pulmonary edema, pneumonia)
• **Grunting**: Body creating its own PEEP—especially concerning in infants

**Watch the Skin**
Cyanosis (blue discoloration) indicates significant hypoxemia. Central cyanosis (lips, tongue) is more reliable than peripheral (fingers).`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "emt-resp-fc1",
            front: "Tripod Position",
            back: "Patient leaning forward, hands on knees, neck extended. Opens airway and maximizes accessory muscle use. Sign of significant distress—they've found the position that helps them breathe."
          },
          {
            id: "emt-resp-fc2",
            front: "Accessory Muscles",
            back: "Neck (SCM), chest (intercostals), abdomen. When the diaphragm isn't enough, these muscles help. Visible use indicates increased work of breathing—the patient is working hard to compensate."
          },
          {
            id: "emt-resp-fc3",
            front: "Wheezing",
            back: "High-pitched whistling on EXHALATION. Caused by narrowed lower airways (bronchospasm). Classic for asthma, COPD, allergic reaction. Air is having trouble getting out through constricted bronchioles."
          },
          {
            id: "emt-resp-fc4",
            front: "Stridor",
            back: "High-pitched sound on INHALATION. Upper airway obstruction (epiglottitis, croup, foreign body, swelling). URGENT finding—upper airway compromise can progress rapidly to complete obstruction."
          },
          {
            id: "emt-resp-fc5",
            front: "Grunting",
            back: "Sound at end of exhalation. Body's attempt to create PEEP and keep alveoli open. Common in infants with respiratory distress. Indicates severe distress—the body is improvising to maintain oxygenation."
          },
          {
            id: "emt-resp-fc6",
            front: "Central Cyanosis",
            back: "Blue discoloration of lips, tongue, mucous membranes. Indicates significant hypoxemia—hemoglobin isn't carrying enough oxygen. Peripheral cyanosis (fingers) may be from cold or poor circulation and is less specific."
          }
        ]
      },
      { type: "quiz", quiz: { id: "resp-signs-q1", question: "A patient in the tripod position is most likely experiencing:", options: ["Back pain", "Nausea", "Significant respiratory distress", "Chest wall injury"], correctIndex: 2, explanation: "The tripod position (sitting upright, leaning forward, hands on knees) opens the airway and maximizes accessory muscle use. It's a classic sign of significant respiratory distress—the patient has found the position that helps them breathe." } },
      { type: "quiz", quiz: { id: "resp-signs-q2", question: "Stridor is more urgent than wheezing because:", options: ["It's louder", "It indicates upper airway obstruction which can progress to complete blockage", "It means the patient has asthma", "It only occurs in children"], correctIndex: 1, explanation: "Stridor indicates upper airway obstruction (swelling, foreign body). The upper airway is a single tube—if it closes completely, no air gets through at all. Lower airway problems (wheezing) affect multiple bronchioles, so total obstruction is less likely." } }
    ],
    keyPoints: [
      "Position, sounds, and skin color all provide clues",
      "Stridor (inspiratory) is more urgent than wheezing (expiratory)",
      "Central cyanosis indicates significant hypoxemia"
    ]
  },
  {
    id: "resp-conditions",
    title: "Common Respiratory Conditions – What You'll See in the Field",
    content: `Different conditions cause respiratory distress in recognizable patterns. Understanding these helps you anticipate patient needs and communicate effectively with receiving facilities.

Each condition affects the respiratory system differently—some narrow airways, some fill alveoli, some cause swelling. Recognizing the pattern guides your treatment.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Asthma",
            content: "Reversible airway narrowing from bronchospasm + inflammation. Usually younger patients with known history. Wheezing, tight chest, responds to bronchodilators. May be triggered by allergens, exercise, cold air, or respiratory infections. Key feature: it's reversible with treatment."
          },
          {
            label: "COPD",
            content: "Chronic, irreversible airflow limitation (emphysema + chronic bronchitis). Usually older patients with smoking history. Barrel chest, pursed lip breathing, chronic cough, may have home O₂. These patients often have a baseline level of dysfunction. Ask about their normal."
          },
          {
            label: "Allergic Reaction",
            content: "Histamine release causes bronchospasm AND airway swelling. May have hives, facial swelling, GI symptoms. Wheezing + stridor together is severe (anaphylaxis). Epinephrine is life-saving when anaphylaxis is present—don't delay if you see systemic involvement."
          },
          {
            label: "Pulmonary Edema",
            content: "Fluid backs up into lungs (usually from heart failure). Crackles on auscultation, pink frothy sputum in severe cases. 'Drowning in own fluids.' Sit upright (reduces preload), high-flow O₂. Often worse when lying flat (orthopnea)."
          },
          {
            label: "Pneumonia",
            content: "Infection (bacterial, viral) fills alveoli with fluid/pus. Fever, productive cough, localized crackles. Creates V/Q mismatch—blood flows past flooded alveoli that can't exchange gas. Supportive care and transport. May need position of comfort."
          }
        ]
      },
      { type: "quiz", quiz: { id: "resp-cond-q1", question: "A patient with a known history of asthma is wheezing. The key feature of asthma is:", options: ["It is always fatal", "Airway narrowing is reversible with treatment", "It only affects children", "It causes permanent lung damage"], correctIndex: 1, explanation: "Asthma causes reversible bronchospasm—the airway narrowing can be reversed with bronchodilators. This distinguishes it from COPD, where airflow limitation is chronic and largely irreversible." } },
      { type: "quiz", quiz: { id: "resp-cond-q2", question: "When wheezing AND stridor occur together, you should suspect:", options: ["Pneumonia", "COPD exacerbation", "Anaphylaxis", "Pulmonary edema"], correctIndex: 2, explanation: "Combined wheezing (lower airway bronchospasm) and stridor (upper airway swelling) together strongly suggest anaphylaxis—a systemic allergic reaction affecting both upper and lower airways. Epinephrine is indicated." } }
    ],
    keyPoints: [
      "Asthma: reversible, responds to bronchodilators",
      "COPD: chronic baseline, ask about their normal",
      "Anaphylaxis: systemic—give epinephrine"
    ],
    rememberThis: "When wheezing AND stridor occur together, you're dealing with anaphylaxis until proven otherwise. This patient needs epinephrine."
  },
  {
    id: "resp-oxygen",
    title: "Oxygen Therapy – Your Most Common Intervention",
    content: `Oxygen is often called the first drug you give. Knowing which device to use—and why—is fundamental to respiratory care.

**The Principle**
Different devices deliver different concentrations of oxygen (FiO₂). More severe hypoxia needs higher concentrations. Match the device to the patient's needs.

**The COPD Myth**
You may have heard about 'hypoxic drive' in COPD patients. The reality: never withhold oxygen from a hypoxic patient. If a COPD patient needs oxygen, give it. Monitor closely, but don't let fear of suppressing respiratory drive kill a patient who needs O₂.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Nasal Cannula",
            content: "1-6 LPM delivers approximately 24-44% O₂. Comfortable, allows talking and eating. Low-flow device for mild to moderate hypoxia. Each LPM adds about 4% to room air (21%). Good starting point for most patients who are breathing adequately but need supplemental O₂."
          },
          {
            label: "Simple Face Mask",
            content: "6-10 LPM delivers approximately 35-60% O₂. Requires MINIMUM 6 LPM to prevent CO₂ rebreathing in the mask. Better for moderate hypoxia when nasal cannula isn't enough but patient doesn't need maximum O₂."
          },
          {
            label: "Non-Rebreather",
            content: "10-15 LPM delivers approximately 90%+ O₂. Reservoir bag + one-way valves minimize room air mixing. For severe hypoxia, trauma, shock, any critical patient. Keep the bag inflated—if it's collapsing, increase flow. This is your 'maximum O₂' device for spontaneously breathing patients."
          },
          {
            label: "BVM (No Tube)",
            content: "15 LPM with reservoir delivers approximately 90%+ O₂. For apneic or inadequately breathing patients. Requires good mask seal and proper technique. Ventilate at 10-12/min for adults. Watch for chest rise—if you don't see it, reposition and retry."
          }
        ]
      },
      { type: "quiz", quiz: { id: "resp-o2-q1", question: "What is the minimum flow rate for a simple face mask?", options: ["2 LPM", "4 LPM", "6 LPM", "10 LPM"], correctIndex: 2, explanation: "A simple face mask requires a minimum of 6 LPM to prevent CO₂ rebreathing inside the mask. Below this rate, exhaled CO₂ accumulates in the mask and the patient breathes it back in." } },
      { type: "quiz", quiz: { id: "resp-o2-q2", question: "Should you withhold oxygen from a hypoxic COPD patient?", options: ["Yes—it will suppress their drive to breathe", "No—never withhold oxygen from a hypoxic patient", "Yes—COPD patients don't need oxygen", "Only if their SpO₂ is below 80%"], correctIndex: 1, explanation: "Never withhold oxygen from a hypoxic patient regardless of their COPD status. The 'hypoxic drive' concern is overstated—hypoxia kills faster than any theoretical suppression of respiratory drive. Monitor closely but give O₂." } }
    ],
    keyPoints: [
      "Non-rebreather at 15 LPM = highest FiO₂ for spontaneous breathing",
      "Never withhold O₂ from a hypoxic patient"
    ]
  },
  {
    id: "resp-bls-airway",
    title: "BLS Airway Management – Keeping the Pathway Open",
    content: `The best oxygen in the world won't help if it can't get to the lungs. BLS airway management focuses on opening and maintaining the airway.

**Positioning**
• **Head-tilt chin-lift**: Standard for unresponsive patients without trauma
• **Jaw thrust**: Use when c-spine injury is possible—opens airway without neck movement

**Adjuncts**
• **OPA (Oral Pharyngeal Airway)**: For unresponsive patients without gag reflex. Sized from corner of mouth to angle of jaw.
• **NPA (Nasal Pharyngeal Airway)**: For patients with decreased LOC who still have gag reflex. Sized from tip of nose to earlobe.

**Suctioning**
When secretions, blood, or vomit block the airway, suction first. You can't ventilate through fluid. Limit each suction attempt to 10 seconds in adults.`,
    blocks: [
      { type: "quiz", quiz: { id: "resp-bls-q1", question: "An OPA should only be used in patients who:", options: ["Are conscious and alert", "Have no gag reflex", "Are breathing normally", "Have a spinal injury"], correctIndex: 1, explanation: "An OPA is for unresponsive patients without a gag reflex. If the patient gags, the OPA can cause vomiting and aspiration. Use an NPA instead for patients with an intact gag reflex." } },
      { type: "quiz", quiz: { id: "resp-bls-q2", question: "Before ventilating a patient with a BVM, you should:", options: ["Give medications first", "Suction any visible fluids from the airway", "Wait for advanced providers", "Start chest compressions"], correctIndex: 1, explanation: "You can't ventilate through fluid. Suctioning the airway first ensures that air (not fluid) is delivered to the lungs. 'Suction before ventilation' is a key principle of airway management." } }
    ],
    keyPoints: [
      "Position first: head-tilt chin-lift or jaw thrust",
      "OPA for unresponsive without gag; NPA allows gag",
      "Suction before ventilation when fluids are present"
    ],
    proTip: "If you can hear airway obstruction (gurgling, snoring), you can often fix it with positioning or suctioning before reaching for adjuncts."
  },
  {
    id: "resp-emt-quiz",
    title: "Knowledge Check",
    content: `Apply your respiratory assessment knowledge to these scenarios.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "emt-resp-q1",
          question: "A patient is sitting upright, using accessory muscles, and speaking in 2-3 word sentences. How would you classify their breathing status?",
          options: [
            "Adequate breathing",
            "Respiratory distress",
            "Respiratory failure",
            "Cardiac arrest"
          ],
          correctIndex: 1,
          explanation: "The patient is working hard to breathe (accessory muscles, upright position) but is still conscious and speaking. This is respiratory distress—compensation is occurring. Respiratory failure would show decreased effort and altered mental status as compensation fails. This patient needs intervention before they tire out."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-resp-q2",
          question: "You hear high-pitched sounds during INHALATION. This is called:",
          options: [
            "Wheezing",
            "Stridor",
            "Crackles",
            "Rhonchi"
          ],
          correctIndex: 1,
          explanation: "Stridor is an inspiratory sound caused by upper airway obstruction (swelling, foreign body, epiglottitis). Wheezing is typically expiratory and indicates lower airway narrowing. Stridor is more urgent—upper airway compromise can progress rapidly to complete obstruction."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-resp-q3",
          question: "What oxygen device delivers the highest concentration for a spontaneously breathing patient?",
          options: [
            "Nasal cannula at 6 LPM",
            "Simple face mask at 10 LPM",
            "Non-rebreather mask at 15 LPM",
            "Venturi mask at 50%"
          ],
          correctIndex: 2,
          explanation: "A non-rebreather with reservoir at 15 LPM delivers approximately 90%+ oxygen. The reservoir stores oxygen between breaths, and one-way valves minimize room air mixing. It's the highest FiO₂ device for patients who are breathing on their own."
        }
      }
    ]
  },
  {
    id: "resp-emt-wrapup",
    title: "Foundation for Respiratory Confidence",
    content: `You've built the foundation for respiratory emergency management. You now understand:

**Assessment**
• Normal vs. distressed vs. failing breathing
• Signs and symptoms that indicate severity
• Sounds and their meanings (wheezing, stridor, crackles)

**Conditions**
• Asthma, COPD, allergic reactions, pulmonary edema, pneumonia
• Key differentiating features for each

**Interventions**
• Oxygen device selection based on severity
• BLS airway management techniques

**Connecting to A&P**
Every sign you assess connects to the anatomy and physiology you learned. Wheezing = bronchiole constriction. Crackles = fluid in alveoli. Stridor = upper airway obstruction. The structure explains the symptom.

**What's Next**
The AEMT level adds advanced assessment tools (capnography) and interventions (CPAP, nebulized medications). Your EMT foundation makes those additions meaningful rather than just procedural.

You're ready for the patients who can't breathe. That's a skill worth having.`,
    blocks: [
      { type: "quiz", quiz: { id: "resp-wrap-q1", question: "Wheezing is caused by narrowing of the:", options: ["Trachea", "Pharynx", "Bronchioles", "Alveoli"], correctIndex: 2, explanation: "Wheezing is produced by air moving through narrowed bronchioles (lower airways). This narrowing can be caused by bronchospasm (asthma), inflammation (COPD), or swelling (allergic reaction)." } },
      { type: "quiz", quiz: { id: "resp-wrap-q2", question: "The connection between A&P and respiratory emergencies is that:", options: ["They are unrelated", "Understanding structure explains why symptoms occur", "A&P is only for written exams", "Clinical skills replace anatomy knowledge"], correctIndex: 1, explanation: "Understanding anatomy and physiology tells you WHY a symptom occurs. Wheezing = bronchiole constriction, crackles = alveolar fluid, stridor = upper airway obstruction. Structure explains the symptom." } }
    ],
    keyPoints: [
      "Assessment, conditions, and interventions form a complete picture",
      "Signs connect directly to anatomy and physiology",
      "Foundation supports advanced respiratory interventions"
    ]
  }
];

// =====================================================
// AEMT RESPIRATORY EMERGENCIES - Advanced Assessment & CPAP
// =====================================================

export const aemtRespiratoryEmergenciesContent: TopicSection[] = [
  {
    id: "aemt-resp-intro",
    title: "Beyond Recognition: Understanding Why",
    content: `You've mastered recognizing respiratory distress. Now you'll understand the mechanisms—and gain powerful new tools.

**Building on EMT and A&P Foundations**
Remember V/Q matching from AEMT Anatomy & Physiology? Ventilation (V) must match perfusion (Q) for effective gas exchange. When they're mismatched, patients become hypoxic even when they're breathing. This concept drives your clinical decisions.

**Your Expanded Toolkit**
• **Waveform capnography**: See ventilation status in real-time
• **CPAP**: Positive pressure without intubation
• **Nebulized medications**: Bronchodilators delivered directly
• **Advanced assessment**: Understanding why interventions work

You're not just intervening anymore—you're understanding.`,
    keyPoints: [
      "V/Q matching explains why some patients don't respond to O₂",
      "Capnography, CPAP, and nebulizers expand your capabilities",
      "Understanding mechanisms enables better clinical decisions"
    ]
  },
  {
    id: "aemt-resp-assessment",
    title: "Advanced Assessment – Tools Beyond Look, Listen, Feel",
    content: `AEMT-level assessment adds objective data to your clinical picture. These tools don't replace your physical exam—they enhance it.

**Waveform Capnography**
ETCO₂ measures carbon dioxide at the end of exhalation. It tells you about ventilation status, perfusion, and metabolism—all in one number and waveform.

**Integrating Tools**
The best assessment uses everything together: visual appearance, breath sounds, SpO₂, ETCO₂, and patient history. Each adds a piece to the puzzle.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Capnography Waveform",
            content: "Normal: 'shark fin' shape with flat plateau. Bronchospasm: sloped upstroke (air struggling to get out through narrowed airways). Apnea: absent waveform. Hyperventilation: low values with fast rate. The waveform shape tells you about airway patency; the number tells you about ventilation adequacy."
          },
          {
            label: "ETCO₂ Values",
            content: "Normal: 35-45 mmHg. High (>45): hypoventilation—patient not blowing off enough CO₂ (COPD exacerbation, sedation, respiratory muscle fatigue). Low (<35): hyperventilation (anxiety, pain, metabolic acidosis driving tachypnea), OR poor perfusion/dead space (PE, cardiac arrest). Context determines interpretation."
          },
          {
            label: "SpO₂ Limitations",
            content: "SpO₂ measures oxygen saturation—but not delivery. Delayed response (30-60 second lag behind actual changes). Unreliable with: poor perfusion, CO poisoning (false high), methemoglobinemia, dark nail polish, motion artifact, hypothermia. Use it, but don't trust it blindly."
          },
          {
            label: "Auscultation Correlation",
            content: "Wheezes = bronchospasm → expect sloped capnography waveform. Crackles = fluid → may have good waveform but poor SpO₂ (shunt). Absent sounds = severe obstruction or pneumothorax → correlate with other findings. Diminished bilaterally = hypoventilation → expect rising ETCO₂."
          }
        ]
      }
    ],
    keyPoints: [
      "Capnography tells you about ventilation status in real-time",
      "SpO₂ has limitations—don't rely on it alone",
      "Integrate all assessment tools for the complete picture"
    ],
    proTip: "A rising ETCO₂ in a tiring patient is an ominous sign—they're not ventilating adequately and may need positive pressure support soon."
  },
  {
    id: "aemt-resp-cpap",
    title: "CPAP – Positive Pressure Without a Tube",
    content: `CPAP (Continuous Positive Airway Pressure) is one of your most powerful tools. It can prevent intubation and save lives when used appropriately.

**How It Works**
CPAP delivers continuous positive pressure throughout the breathing cycle. This pressure:
• **Splints airways open** during exhalation (helps COPD/asthma)
• **Recruits collapsed alveoli** (improves gas exchange)
• **Pushes fluid out of alveoli** (helps pulmonary edema)
• **Reduces preload** (decreases cardiac workload in CHF)

The patient does the breathing—CPAP just makes it more effective.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "aemt-cpap-1",
            front: "How CPAP Helps Pulmonary Edema",
            back: "Positive pressure physically pushes edema fluid out of alveoli back into the interstitium. It also reduces preload by decreasing venous return (intrathoracic pressure impedes blood returning to the heart). Both effects help the failing heart—treats oxygenation AND cardiac workload."
          },
          {
            id: "aemt-cpap-2",
            front: "How CPAP Helps COPD/Asthma",
            back: "Splints small airways open during exhalation, preventing collapse and air trapping. Reduces work of breathing by providing 'backpressure' support against which the patient exhales. The patient doesn't have to work as hard to keep airways open."
          },
          {
            id: "aemt-cpap-3",
            front: "CPAP Contraindications",
            back: "Apnea (patient must breathe spontaneously), vomiting/high aspiration risk, facial trauma preventing seal, pneumothorax (relative—can worsen), hypotension (relative—reduces preload which may drop BP further), decreased LOC with inability to protect airway."
          },
          {
            id: "aemt-cpap-4",
            front: "Typical CPAP Settings",
            back: "Start 5-10 cm H₂O pressure. FiO₂ typically high initially (often 100%). Adjust based on patient response: improved work of breathing, improved SpO₂, patient comfort. If no improvement in 5-10 minutes, reassess—may need escalation."
          },
          {
            id: "aemt-cpap-5",
            front: "Patient Coaching for CPAP",
            back: "'This mask will push air in to help you breathe easier. Keep breathing normally—don't fight it. It may feel strange at first but should help within minutes.' Stay with the patient, reassure them, and watch for improvement or deterioration."
          },
          {
            id: "aemt-cpap-6",
            front: "When CPAP Fails",
            back: "If patient deteriorates (increasing fatigue, decreasing LOC, worsening hypoxemia) → CPAP isn't enough. Prepare for BVM ventilation or advanced airway. CPAP buys time and often works—but it isn't definitive for everyone."
          }
        ]
      }
    ],
    keyPoints: [
      "CPAP recruits alveoli and reduces cardiac preload",
      "Patient must be breathing spontaneously",
      "Watch for improvement—if none, escalate"
    ]
  },
  {
    id: "aemt-resp-nebs",
    title: "Nebulized Medications – Bronchodilators in Action",
    content: `Nebulized medications deliver bronchodilators directly to the airways. Understanding the pharmacology—how albuterol works at the receptor level—connects your AEMT pharmacology knowledge to respiratory care.

**Albuterol Mechanism**
Albuterol is a beta-2 (β₂) receptor agonist. When it binds to β₂ receptors on bronchial smooth muscle, it causes relaxation → bronchodilation. Airways open, air moves more freely, patient breathes easier.

This is the same receptor theory from pharmacology—now applied clinically.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Albuterol Mechanism",
            content: "Beta-2 receptor agonist. Activates β₂ receptors on bronchial smooth muscle → relaxation → bronchodilation. Opens narrowed airways by reversing bronchospasm. Works within 5-15 minutes. Some β₁ crossover explains cardiac side effects (tachycardia)."
          },
          {
            label: "Administration",
            content: "2.5 mg in 3 mL normal saline via nebulizer. 6-8 LPM oxygen flow to aerosolize. Patient breathes normally through mouthpiece or mask. Treatment takes 5-15 minutes until medication is gone. Can repeat if needed and patient tolerates."
          },
          {
            label: "Expected Effects",
            content: "Decreased wheezing (airways opening), improved air exchange (better breath sounds), reduced work of breathing, patient reports 'breathing easier.' SpO₂ may improve as air movement improves. Peak effect 15-30 minutes after treatment."
          },
          {
            label: "Side Effects",
            content: "Tachycardia (some β₁ receptor crossover), tremors (β₂ receptors in skeletal muscle), nervousness, palpitations. Expected and usually tolerable. Watch for excessive tachycardia (>150) or chest pain—may need to stop treatment."
          }
        ]
      }
    ],
    keyPoints: [
      "Albuterol = β₂ agonist = bronchodilation",
      "Side effects (tachycardia, tremor) from receptor crossover",
      "Expect improvement within 15 minutes"
    ],
    rememberThis: "If you gave albuterol and wheezing disappeared but the patient is still in distress with minimal breath sounds—that's not improvement. That's the 'quiet chest' of severe obstruction. Escalate immediately."
  },
  {
    id: "aemt-resp-failure",
    title: "Respiratory Distress vs. Failure – Knowing When It's Getting Worse",
    content: `The difference between distress and failure is the difference between 'working hard' and 'giving up.' Recognizing this transition changes your urgency.

**Distress = Compensation Working**
The patient is working hard—tachypnea, accessory muscles, anxious—but the system is maintaining adequate oxygenation. They're tired but functional.

**Failure = Compensation Failing**
The patient is slowing down. Respiratory rate may actually decrease. Effort decreases. Mental status changes. This isn't relaxation—it's exhaustion and impending arrest.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "aemt-fail-1",
            front: "Respiratory Distress",
            back: "Patient is working hard to compensate. Tachypnea, accessory muscles, speaks in phrases, anxious but alert. Compensation IS WORKING—they're maintaining (barely). Treat the cause, support with O₂, CPAP, bronchodilators. Watch closely for fatigue."
          },
          {
            id: "aemt-fail-2",
            front: "Respiratory Failure",
            back: "Compensation is FAILING. Slow/irregular breathing, minimal effort, altered mental status, 1-word answers or silent. Body is giving up—respiratory muscles are exhausted. Prepare to ventilate with positive pressure (BVM) or advanced airway."
          },
          {
            id: "aemt-fail-3",
            front: "The 'Quiet Chest'",
            back: "Severe bronchospasm → no air movement → no wheeze. Silence is NOT improvement—it's worse. Patient is moving no air. Critical finding requiring immediate aggressive intervention. If you treated and wheezing stopped but patient looks worse—escalate NOW."
          },
          {
            id: "aemt-fail-4",
            front: "Fatigue Signs Progression",
            back: "Initially: accessory muscles, tachypnea, tachycardia. Fatigue setting in: decreasing effort, bradycardia (ominous), head bobbing, unable to maintain upright position, decreasing LOC. Failure is imminent—be ready to take over breathing."
          },
          {
            id: "aemt-fail-5",
            front: "Agonal Breathing",
            back: "Slow, irregular gasping. Brain stem reflexes only—cortex is shutting down from hypoxia. This is essentially respiratory arrest. Treat as apnea—immediately ventilate with BVM. Don't wait for complete cessation."
          }
        ]
      }
    ],
    keyPoints: [
      "Distress = compensating; Failure = decompensating",
      "Decreasing effort is ominous, not reassuring",
      "Quiet chest in obstructive disease = critical"
    ],
    proTip: "Trust your gut. If a patient 'looks worse' even though one parameter (like wheezing) seems to have improved, believe what you see. Clinical deterioration overrides any single finding."
  },
  {
    id: "aemt-resp-scenarios",
    title: "Clinical Scenarios – Application",
    content: `Putting it all together—connecting assessment findings to interventions based on the pathophysiology.

**COPD Exacerbation**
History of COPD, increased dyspnea, may have stopped home medications or had infection. Diminished breath sounds, possible wheezing, elevated ETCO₂ (retaining CO₂). Consider CPAP to splint airways + nebulized albuterol.

**Asthma Attack**
Often younger, known trigger, severe wheezing, using accessory muscles. Start with nebulized albuterol. If no improvement, consider epinephrine (IM). CPAP can help if patient is fatiguing.

**CHF with Pulmonary Edema**
History of heart failure, woke up dyspneic, crackles throughout, possibly pink frothy sputum. CPAP is your best intervention—splints alveoli AND reduces cardiac preload.`,
    keyPoints: [
      "Match intervention to mechanism",
      "COPD + high ETCO₂ = hypoventilating, needs support",
      "CHF + crackles = CPAP is first-line"
    ]
  },
  {
    id: "aemt-resp-quiz",
    title: "Knowledge Check",
    content: `Apply AEMT-level respiratory assessment to these scenarios.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-resp-q1",
          question: "A patient with COPD has diminished breath sounds, ETCO₂ of 65 mmHg, and SpO₂ of 88%. The elevated ETCO₂ indicates:",
          options: [
            "Hyperventilation",
            "Hypoventilation",
            "Pulmonary embolism",
            "Cardiac arrest"
          ],
          correctIndex: 1,
          explanation: "ETCO₂ above 45 mmHg indicates the patient isn't ventilating enough to blow off CO₂ (hypoventilation). In COPD, this often reflects severe air trapping and respiratory muscle fatigue. This patient is retaining CO₂ (hypercapnia) and needs ventilatory support—consider CPAP to reduce work of breathing."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-resp-q2",
          question: "What is the primary mechanism by which CPAP helps a patient in acute pulmonary edema?",
          options: [
            "Dries out the alveoli",
            "Increases heart rate",
            "Pushes fluid out of alveoli and reduces preload",
            "Causes bronchodilation"
          ],
          correctIndex: 2,
          explanation: "CPAP's positive pressure physically pushes edema fluid out of alveoli back into the interstitium. It also reduces preload by decreasing venous return (intrathoracic pressure impedes blood returning to the heart). Both effects help the failing heart—treating oxygenation AND cardiac workload simultaneously."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-resp-q3",
          question: "A patient with severe asthma was wheezing loudly but is now 'quiet' with minimal breath sounds. This indicates:",
          options: [
            "The bronchospasm is resolving",
            "Air movement is severely reduced (critical)",
            "The patient is sleeping",
            "Secretions are blocking the stethoscope"
          ],
          correctIndex: 1,
          explanation: "A 'quiet chest' in asthma is ominous—the patient has such severe bronchospasm that air cannot move. No air movement = no wheeze. This is NOT improvement; it's deterioration toward respiratory arrest. Immediate aggressive treatment is needed—consider IM epinephrine, prepare for positive pressure ventilation."
        }
      }
    ]
  },
  {
    id: "aemt-resp-wrapup",
    title: "Ready for Advanced Respiratory Care",
    content: `You've expanded significantly beyond EMT-level respiratory care. Your new capabilities:

**Advanced Assessment**
• Waveform capnography interpretation
• Understanding SpO₂ limitations
• Correlating findings to mechanisms

**CPAP**
• Understanding how positive pressure helps
• Appropriate patient selection
• Recognizing when it's not working

**Nebulized Medications**
• β₂ agonist mechanism (from pharmacology)
• Administration technique
• Expected response and side effects

**Clinical Judgment**
• Distress vs. failure recognition
• The ominous 'quiet chest'
• When to escalate

**The Connection**
Every intervention connects to pathophysiology. CPAP works because of how positive pressure affects alveoli and preload. Albuterol works because of β₂ receptors on bronchial smooth muscle. Understanding the 'why' makes you more effective—and helps you troubleshoot when things don't go as expected.

**What's Next**
Paramedic-level respiratory care adds advanced airways, ventilator management, and deeper pathophysiology. Your AEMT foundation makes these additions meaningful rather than overwhelming.`,
    keyPoints: [
      "Capnography + CPAP + nebs = expanded toolkit",
      "Mechanisms explain why interventions work",
      "Recognizing failure vs. distress is critical"
    ]
  }
];

// =====================================================
// PARAMEDIC RESPIRATORY EMERGENCIES - Pathophysiology & Vents
// =====================================================

export const paramedicRespiratoryEmergenciesContent: TopicSection[] = [
  {
    id: "para-resp-intro",
    title: "Respiratory Mastery: From Pathophysiology to Ventilators",
    content: `You've mastered recognition and AEMT-level interventions. Now you'll understand the deep pathophysiology that drives critical respiratory care—and gain the tools to manage the most complex patients.

**Connecting to Paramedic A&P**
Remember cellular metabolism and acid-base balance? Respiratory failure isn't just about oxygen—it's about cellular energy production, CO₂ elimination, and pH homeostasis. When cells can't make ATP, organs fail. Your understanding of aerobic vs. anaerobic metabolism explains why we fight so hard to restore oxygenation.

**What You'll Master**
• V/Q mismatch, shunt, and dead space in clinical practice
• Intubation vs. NIV decision-making
• Basic ventilator settings and troubleshooting
• Acid-base integration with respiratory failure

This is where everything connects—A&P, pharmacology, and clinical care become one integrated approach.`,
    keyPoints: [
      "Respiratory failure impacts cellular metabolism",
      "Deep pathophysiology drives treatment decisions",
      "Integration of all previous knowledge"
    ]
  },
  {
    id: "para-resp-pathophys",
    title: "Respiratory Pathophysiology – V/Q Mismatch in Clinical Practice",
    content: `Why doesn't oxygen help some patients? Understanding shunt, dead space, and diffusion impairment explains refractory hypoxemia—and guides treatment selection.

**The Core Concept**
Oxygen only helps when three things work together:
1. Air gets to alveoli (ventilation)
2. Blood flows past those alveoli (perfusion)
3. Gas crosses the membrane (diffusion)

When any of these fail, the specific treatment depends on which one is broken.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Shunt (Low V/Q)",
            content: "Blood bypasses ventilation. Alveoli are filled with fluid (pneumonia, pulmonary edema, ARDS) or collapsed (atelectasis). Oxygen doesn't help—air can't reach flooded/collapsed areas. Blood flows past without picking up O₂. Treatment: positive pressure (PEEP) to recruit collapsed alveoli or push fluid out. High FiO₂ alone won't fix shunt."
          },
          {
            label: "Dead Space (High V/Q)",
            content: "Ventilation without perfusion. PE blocks blood flow to ventilated alveoli. Patient breathes but O₂ can't get into circulation—there's no blood to carry it. SpO₂ may be low despite hyperventilation. ETCO₂ paradoxically low (exhaled air hasn't contacted blood). Treatment: fix the underlying cause (anticoagulation for PE)."
          },
          {
            label: "Diffusion Impairment",
            content: "Thickened alveolar-capillary membrane (pulmonary fibrosis, ARDS). Gas exchange slowed—oxygen and CO₂ can't cross as efficiently. May respond partially to high FiO₂ (increasing the gradient helps drive diffusion). Often chronic or develops over days in ARDS."
          },
          {
            label: "Clinical Application",
            content: "Shunt → PEEP/positive pressure to recruit alveoli. Dead space → treat underlying cause (PE anticoagulation). Diffusion → high FiO₂, consider intubation if severe. MATCH TREATMENT TO MECHANISM. A patient with massive PE won't improve with PEEP—they need perfusion restored."
          }
        ]
      }
    ],
    keyPoints: [
      "Shunt = flooded/collapsed alveoli → needs PEEP",
      "Dead space = no perfusion → treat cause",
      "Understanding mechanism guides treatment"
    ],
    rememberThis: "When a patient doesn't respond to oxygen, ask yourself: Is air reaching functional alveoli? Is blood reaching those alveoli? Is gas crossing the membrane? The answer tells you what to fix."
  },
  {
    id: "para-resp-airway-decision",
    title: "Advanced Airway Decision-Making – Tube vs. No Tube",
    content: `Not every dyspneic patient needs intubation. Knowing when non-invasive ventilation (NIV) is appropriate—and when to secure an airway—defines advanced practice.

**The Decision Framework**
Intubation has risks: aspiration, laryngeal injury, commitment to mechanical ventilation. NIV preserves the patient's cough, keeps them awake, and is often sufficient.

But when airway protection is compromised or NIV is failing, don't delay definitive airway management.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "para-airway-1",
            front: "Intubation Indications",
            back: "Failure to oxygenate/ventilate despite NIV. GCS ≤8 (airway protection compromised). Anticipated deterioration (sepsis progressing, post-intoxication). Severe facial trauma. Massive aspiration. The key question: Can this patient protect their airway and respond to less invasive measures?"
          },
          {
            id: "para-airway-2",
            front: "Benefits of NIV First",
            back: "Avoids intubation risks (aspiration, laryngeal injury). Maintains cough reflex. Patient remains awake and communicative. Easier to manage (no sedation needed). Can 'test' response before committing to a tube. Many patients improve enough to avoid intubation entirely."
          },
          {
            id: "para-airway-3",
            front: "'Look Ahead' Principle",
            back: "Consider: Where is this patient going? Will they deteriorate during transport? Is this a long or short transport? Sometimes intubate early if deterioration is likely and access will be lost (helicopter, remote area, long transport to OR). Controlled intubation beats emergent."
          },
          {
            id: "para-airway-4",
            front: "Difficult Airway Predictors (LEMON)",
            back: "L = Look externally (obesity, trauma, short neck). E = Evaluate 3-3-2 (mouth opening, jaw size, hyoid position). M = Mallampati (visualization of posterior pharynx). O = Obstruction (stridor, tumor, swelling). N = Neck mobility. Multiple predictors → have backup ready, consider awake intubation."
          },
          {
            id: "para-airway-5",
            front: "Failed Airway Algorithm",
            back: "Two attempts → supraglottic device (iGel, King). SGA fails → surgical airway (cricothyrotomy). ALWAYS have the next step ready BEFORE you need it. 'Plan for the worst, work for the best.' Cognitive rehearsal: 'If this fails, I will...'"
          },
          {
            id: "para-airway-6",
            front: "Post-Intubation Verification",
            back: "Waveform capnography = gold standard (sustained ETCO₂ = tube in trachea). Bilateral breath sounds (check for right mainstem). SpO₂ trend. Secure tube. Set ventilator. Watch for dislodgement during movement. Never rely on single confirmation method."
          }
        ]
      }
    ],
    keyPoints: [
      "NIV first when appropriate—preserves airway reflexes",
      "Intubate for airway protection or NIV failure",
      "Always have a backup plan before you start"
    ]
  },
  {
    id: "para-resp-ventilator",
    title: "Ventilator Basics – Understanding the Machine",
    content: `Ventilators seem complex, but the core concepts are simple. Two main goals: oxygenation and ventilation. Different knobs for each.

**Oxygenation = FiO₂ and PEEP**
These control how much oxygen gets into the blood. Shunt → increase PEEP to recruit alveoli. Low SpO₂ → increase FiO₂ or PEEP.

**Ventilation = Rate and Tidal Volume**
These control CO₂ elimination. High ETCO₂/PaCO₂ → increase rate or tidal volume. Low CO₂ → decrease rate or volume.

That's the foundation. Everything else builds on this.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Oxygenation Parameters",
            content: "FiO₂ and PEEP affect oxygenation (SpO₂, PaO₂). FiO₂ = fraction of inspired oxygen (21-100%). Start high, wean down. PEEP = positive end-expiratory pressure, keeps alveoli open at end of breath. Increase PEEP for shunt (ARDS, pulmonary edema). Typical starting PEEP: 5 cm H₂O."
          },
          {
            label: "Ventilation Parameters",
            content: "Rate and tidal volume affect ventilation (ETCO₂, PaCO₂). Rate × Vt = minute ventilation. To LOWER CO₂: increase rate or Vt (blow off more). To RAISE CO₂: decrease rate or Vt (retain more). Typical: Rate 12-16, Vt 6-8 mL/kg ideal body weight."
          },
          {
            label: "Basic Mode: AC",
            content: "Assist-Control. Machine delivers set rate at set volume. Patient can trigger additional breaths (each gets full Vt). Good for patients with minimal respiratory drive. Risk: hyperventilation if patient triggers too many breaths, patient-vent dyssynchrony if they 'fight' the machine."
          },
          {
            label: "PEEP Effects",
            content: "Positive End-Expiratory Pressure keeps alveoli from collapsing at end of exhalation. Improves oxygenation by recruiting collapsed lung units (reduces shunt). Typical starting: 5 cm H₂O. May increase to 10-15+ in ARDS. Watch: high PEEP reduces venous return → may drop blood pressure."
          }
        ]
      }
    ],
    keyPoints: [
      "FiO₂ + PEEP = oxygenation controls",
      "Rate + Vt = ventilation controls",
      "PEEP recruits alveoli but may reduce venous return"
    ],
    proTip: "When troubleshooting, separate the problems: Is it an oxygenation issue (low SpO₂)? Adjust FiO₂/PEEP. Is it a ventilation issue (abnormal ETCO₂/CO₂)? Adjust rate/volume. Treating the wrong parameter won't help."
  },
  {
    id: "para-resp-acidbase",
    title: "Acid-Base and Respiratory Failure",
    content: `Respiratory failure doesn't just affect oxygen—it affects CO₂, which affects pH. Understanding acid-base connects your Paramedic A&P knowledge to ventilator management.

**The Respiratory Lever**
CO₂ is an acid. When CO₂ rises (hypoventilation), pH falls (acidosis). When CO₂ drops (hyperventilation), pH rises (alkalosis). The ventilator controls this lever.

**Chronic vs. Acute**
Chronic COPD patients run elevated CO₂ but normal pH—their kidneys have compensated. If you 'normalize' their CO₂ rapidly, you'll cause severe alkalosis. Know their baseline.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "para-acid-1",
            front: "Respiratory Acidosis",
            back: "pH < 7.35, PaCO₂ > 45 mmHg. Patient not ventilating adequately—CO₂ accumulating. Causes: sedation, COPD exacerbation, respiratory muscle fatigue, hypoventilation. Treatment: improve ventilation (rate, depth, or mechanical support)."
          },
          {
            id: "para-acid-2",
            front: "Respiratory Alkalosis",
            back: "pH > 7.45, PaCO₂ < 35 mmHg. Patient ventilating too much—blowing off CO₂. Causes: anxiety, pain, hypoxia-driven tachypnea, PE, early sepsis, metabolic acidosis (respiratory compensation). Treat underlying cause, not the fast breathing."
          },
          {
            id: "para-acid-3",
            front: "Metabolic Compensation",
            back: "Takes hours to days. Kidneys adjust HCO₃⁻ to buffer pH changes. Chronic COPD patients run high CO₂ but normal pH—they've compensated with elevated bicarb. Don't rapidly 'blow down' their CO₂—it causes severe alkalosis (pH 7.55+)."
          },
          {
            id: "para-acid-4",
            front: "Permissive Hypercapnia",
            back: "In severe asthma/COPD, may accept higher CO₂ to avoid barotrauma from aggressive ventilation. Focus on oxygenation, accept CO₂ in 50s-60s if pH tolerable (>7.20). 'Lungs are fragile, brain can tolerate.' Prioritize not destroying the lungs."
          },
          {
            id: "para-acid-5",
            front: "When NOT to Hyperventilate",
            back: "Chronic CO₂ retainers (COPD)—rapid drop causes alkalosis, confusion, arrhythmias. Routine cardiac arrest—hyperventilation impairs venous return, reduces coronary perfusion pressure. Reserve hyperventilation for specific indications (herniation syndrome)."
          }
        ]
      }
    ],
    keyPoints: [
      "CO₂ is the respiratory acid—control with ventilation",
      "Chronic patients have compensation—target their baseline",
      "Permissive hypercapnia protects lungs in severe disease"
    ]
  },
  {
    id: "para-resp-integration",
    title: "Clinical Integration – Putting It Together",
    content: `The best clinicians integrate assessment, pathophysiology, and treatment into seamless clinical reasoning. Let's apply this to common scenarios.

**Case 1: COPD Exacerbation with Hypercapnia**
Chronic COPD, normally runs CO₂ 55 mmHg, pH 7.38. Now in respiratory distress, ETCO₂ 75, lethargic.
• Pathophysiology: Acute on chronic—CO₂ rising above baseline
• Treatment: BiPAP/CPAP first to reduce work of breathing. If intubated, target THEIR baseline CO₂ (55), not 'normal' (40)
• Danger: Rapid normalization → severe metabolic alkalosis

**Case 2: ARDS and Shunt**
Septic patient, SpO₂ 82% on NRB, bilateral infiltrates on hospital imaging.
• Pathophysiology: Shunt—flooded/inflamed alveoli not participating in gas exchange
• Treatment: Intubation with high PEEP to recruit alveoli. High FiO₂. May need 15+ cm H₂O PEEP
• Key: PEEP recruits, O₂ alone doesn't fix shunt

**Case 3: PE with Dead Space**
Sudden dyspnea, clear lungs, low SpO₂, low ETCO₂, hyperventilating.
• Pathophysiology: Dead space—ventilated alveoli have no perfusion (blocked by clot)
• Treatment: Oxygen supportive, definitive = anticoagulation (or lytics if massive)
• Key: PEEP won't help—the alveoli are open, there's just no blood flowing past them`,
    keyPoints: [
      "Match pathophysiology to treatment",
      "Know the patient's baseline before normalizing values",
      "Shunt → PEEP; Dead space → treat cause"
    ],
    rememberThis: "When treatment isn't working, reassess the pathophysiology. Are you treating the right mechanism? A patient with PE won't improve with PEEP. A patient with shunt won't improve with just oxygen."
  },
  {
    id: "para-resp-quiz",
    title: "Knowledge Check",
    content: `Apply paramedic-level respiratory knowledge to these clinical decisions.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "para-resp-q1",
          question: "A patient with pneumonia has SpO₂ 82% on 15 LPM non-rebreather. The primary mechanism of hypoxemia is:",
          options: [
            "Hypoventilation",
            "Dead space (PE)",
            "Shunt (fluid-filled alveoli)",
            "Diffusion impairment"
          ],
          correctIndex: 2,
          explanation: "Pneumonia fills alveoli with pus/fluid—blood flows past but can't pick up oxygen (shunt). High FiO₂ doesn't help because oxygen can't reach flooded alveoli. This patient needs positive pressure (CPAP, BiPAP, or intubation with PEEP) to force alveoli open and enable gas exchange."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-resp-q2",
          question: "On a ventilator, you want to improve a patient's oxygenation without changing their ventilation status. Which parameter do you adjust?",
          options: [
            "Respiratory rate",
            "Tidal volume",
            "PEEP",
            "I:E ratio"
          ],
          correctIndex: 2,
          explanation: "PEEP (and FiO₂) affect oxygenation. Rate and tidal volume affect ventilation (CO₂ elimination). To improve SpO₂ without changing CO₂, increase FiO₂ or PEEP. PEEP recruits collapsed alveoli, improving V/Q matching and reducing shunt."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-resp-q3",
          question: "A chronic COPD patient normally runs CO₂ of 55 mmHg with pH 7.38. You intubate for respiratory failure and the ventilator quickly lowers CO₂ to 35 mmHg. What's the risk?",
          options: [
            "Improved oxygenation",
            "Severe metabolic alkalosis",
            "Improved mentation",
            "Decreased work of breathing"
          ],
          correctIndex: 1,
          explanation: "The patient's kidneys have compensated for chronic hypercapnia by retaining HCO₃⁻. If you rapidly normalize CO₂, the elevated bicarb causes severe alkalosis (pH may rise to 7.55+). This causes confusion, arrhythmias, and potentially seizures. Target their baseline CO₂, not 'normal.'"
        }
      }
    ]
  },
  {
    id: "para-resp-wrapup",
    title: "Respiratory Mastery Achieved",
    content: `You've completed the respiratory emergencies progression across all three certification levels. This represents comprehensive mastery of respiratory care.

**What You've Integrated**

**Pathophysiology**
Shunt, dead space, diffusion impairment—understanding why patients become hypoxic guides treatment selection. You match the intervention to the mechanism.

**Airway Decision-Making**
NIV vs. intubation isn't arbitrary—it's based on airway protection needs, anticipated course, and response to less invasive measures. You plan for failure before you start.

**Ventilator Basics**
FiO₂ and PEEP for oxygenation; rate and volume for ventilation. PEEP recruits alveoli but affects hemodynamics. You troubleshoot logically.

**Acid-Base Integration**
Respiratory failure is also acid-base failure. Chronic patients have compensation—respect their baseline. Permissive hypercapnia protects lungs.

**The Complete Picture**
From EMT recognition through AEMT interventions to paramedic-level pathophysiology and ventilator management—you've built comprehensive respiratory expertise. Each level builds on the previous. Each intervention connects to mechanism.

**You're Ready**
For the patient who can't breathe, the patient on the ventilator, the patient who isn't responding to oxygen—you understand what's happening and how to fix it.

That's respiratory mastery.`,
    keyPoints: [
      "Pathophysiology determines intervention selection",
      "Airway decisions based on clinical reasoning, not reflexes",
      "Ventilator management follows logical principles"
    ],
    proTip: "The best respiratory care integrates everything: A&P explains the mechanism. Pharmacology explains why treatments work. Assessment guides selection. Keep connecting—every patient is an opportunity to reinforce the integration."
  }
];

// =====================================================
// EMT Patient Assessment Content
// =====================================================

export const emtPatientAssessmentContent: TopicSection[] = [
  {
    id: "emt-assess-intro",
    title: "Assessment is Everything",
    content: `Every treatment decision you make—every medication, every intervention, every transport choice—flows from patient assessment. It's not just a skill; it's THE skill.

**Why This Matters**
On the NREMT, 39-43% of questions focus on patient assessment. That's not an accident—it reflects how important assessment is in real practice. Get assessment right, and treatment decisions become clear. Miss something in assessment, and you're treating blind.

**The Systematic Approach**
When calls get chaotic (and they will), a systematic approach keeps you from missing critical findings. Scene size-up → Primary survey → Secondary assessment → Reassessment. Every time, in order, without shortcuts.

**What You'll Learn**
We'll build your assessment skills from the ground up: scene evaluation before patient contact, the XABCDE primary survey, focused physical exam, and structured history-taking with SAMPLE and OPQRST.`,
    keyPoints: [
      "Assessment drives all treatment decisions",
      "Systematic approach prevents missed findings",
      "This content covers 39-43% of NREMT focus areas"
    ],
    rememberThis: "The best EMTs aren't necessarily the ones who know the most treatments—they're the ones who never miss findings. Assessment first, always."
  },
  {
    id: "emt-scene-sizeup",
    title: "Scene Size-Up – Before You Touch the Patient",
    content: `Scene size-up happens before you make patient contact. It's your first assessment—of the scene, not the patient. This phase protects you and informs your approach.

**BSI and Scene Safety**
Body Substance Isolation comes first. Gloves at minimum, additional PPE as needed. Then evaluate scene safety: traffic, violence, hazards, structural issues. If the scene isn't safe, you can't help—and now there are two patients.

**What You're Looking For**
Before you touch anyone, you're gathering information: What happened? How many patients? What resources do I need? Should I suspect spinal injury?`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Scene Safety",
            content: "BSI precautions first—gloves, gown, mask, eye protection as indicated. Then evaluate: traffic patterns, potential violence (domestic calls, altered patients), hazardous materials, structural collapse, downed power lines. If unsafe, stage and wait for appropriate resources. You can't help if you become a patient."
          },
          {
            label: "Mechanism of Injury",
            content: "For trauma: What happened? The mechanism predicts injuries. High-speed MVC suggests internal trauma. Fall from height suggests spinal injury. Ejection from vehicle = high index of suspicion. The scene tells the story before the patient does."
          },
          {
            label: "Nature of Illness",
            content: "For medical patients: What's the environment telling you? Medication bottles (what conditions?), medical equipment (oxygen, dialysis), position found (tripod = respiratory distress), empty pill bottles or alcohol containers. Environmental clues inform your differential."
          },
          {
            label: "Number of Patients",
            content: "More patients = call for more resources early. Multiple patients may require triage. Don't get tunnel vision on the first patient you see—scan the entire scene. One patient down may mean others are also affected (CO poisoning, violence)."
          }
        ]
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-scene-q1",
          question: "What is the FIRST action when arriving on any scene?",
          options: [
            "Assess the patient",
            "Put on BSI/PPE",
            "Call for backup",
            "Check vital signs"
          ],
          correctIndex: 1,
          explanation: "BSI (Body Substance Isolation) / PPE comes first—before patient contact, before scene entry. Gloves at minimum, with additional PPE as indicated. You can't help anyone if you become contaminated or exposed."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-scene-q2",
          question: "Multiple patients are found unconscious in a home. What should you suspect?",
          options: [
            "Food poisoning",
            "Carbon monoxide exposure",
            "Sleep disorder",
            "Dehydration"
          ],
          correctIndex: 1,
          explanation: "Multiple patients with altered mental status in an enclosed space should make you think environmental hazard—CO poisoning is a classic scenario. Do NOT enter without proper detection equipment and ventilation. Scene safety first."
        }
      }
    ],
    keyPoints: [
      "BSI before everything else",
      "Scene safety protects you and your patient",
      "MOI/NOI informs your assessment approach"
    ],
    proTip: "Make scene size-up automatic. Before you touch the patient, pause and scan. This one-second habit prevents hours of problems."
  },
  {
    id: "emt-primary-survey",
    title: "Primary Survey – Find and Fix Life Threats",
    content: `The primary survey identifies and addresses life-threatening conditions in priority order. The 2025 NREMT standards use XABCDE—putting massive hemorrhage control before airway.

**Why X Comes First**
Exsanguinating hemorrhage can kill faster than airway obstruction. A patient can bleed out in 3-5 minutes from a femoral artery injury. You can't assess a patient who's bleeding out.

**XABCDE Sequence**
X → A → B → C → D → E. Each letter is both an assessment and an intervention. Find the problem, fix it, move on. Don't skip ahead—address issues as you find them.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "emt-xabcde-x",
            front: "X — Exsanguinating Hemorrhage",
            back: "Control massive external bleeding FIRST. Apply tourniquet for extremity hemorrhage, direct pressure or wound packing for junctional wounds. You can't assess a patient who's bleeding out—control the obvious bleeding before moving on."
          },
          {
            id: "emt-xabcde-a",
            front: "A — Airway",
            back: "Is the airway open? Can they speak? Look for obstruction (tongue, blood, vomit, foreign body), secretions, positioning. If needed: head-tilt chin-lift (no trauma) or jaw thrust (suspected spinal injury). Suction if indicated."
          },
          {
            id: "emt-xabcde-b",
            front: "B — Breathing",
            back: "Rate, depth, effort, sounds. Is oxygen getting in? Look: chest rise symmetry. Listen: breath sounds present and equal? Feel: air movement at nose/mouth. Intervene: position, supplemental O₂, assist ventilations with BVM if inadequate."
          },
          {
            id: "emt-xabcde-c",
            front: "C — Circulation",
            back: "Pulse: rate (fast/slow/absent), quality (strong/weak), regularity. Skin: color (pale, cyanotic, flushed), temperature (cool, hot), condition (dry, diaphoretic). Capillary refill (>2 sec = poor perfusion). Control remaining bleeding, position for shock."
          },
          {
            id: "emt-xabcde-d",
            front: "D — Disability",
            back: "Neurological status: AVPU (Alert, Verbal, Pain, Unresponsive) or GCS. Check pupils: size, equality, reactivity. Gross motor function: can they move all extremities? Protect the brain—maintain oxygenation, watch for deterioration."
          },
          {
            id: "emt-xabcde-e",
            front: "E — Exposure",
            back: "Expose what you need to find injuries—remove clothing to visualize significant body regions. Maintain warmth—hypothermia kills and impairs clotting. Balance thorough assessment with patient dignity and temperature management."
          }
        ]
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-primary-q1",
          question: "What does 'X' stand for in XABCDE?",
          options: [
            "X-ray assessment",
            "Exsanguinating hemorrhage",
            "External examination",
            "Extra oxygen delivery"
          ],
          correctIndex: 1,
          explanation: "X = eXsanguinating (massive) hemorrhage. The 2025 NREMT standards place hemorrhage control before airway because a patient can bleed out in 3-5 minutes from a major arterial injury—faster than airway obstruction typically kills."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-primary-q2",
          question: "AVPU is used to assess which component of the primary survey?",
          options: [
            "Airway patency",
            "Breathing adequacy",
            "Circulation status",
            "Disability (neurological status)"
          ],
          correctIndex: 3,
          explanation: "AVPU (Alert, Verbal, Pain, Unresponsive) assesses neurological status under 'D—Disability' in the primary survey. It's a rapid tool to determine the patient's level of consciousness and brain perfusion status."
        }
      }
    ],
    keyPoints: [
      "XABCDE: Exsanguination, Airway, Breathing, Circulation, Disability, Exposure",
      "Intervene as you find problems—don't skip ahead",
      "2025 NREMT prioritizes hemorrhage control"
    ],
    rememberThis: "A patient can bleed out before they suffocate. That's why X comes first."
  },
  {
    id: "emt-secondary-assessment",
    title: "Secondary Assessment – The Focused Look",
    content: `After life threats are addressed, the secondary assessment builds the complete clinical picture. This is where you gather the information that drives treatment and transport decisions.

**Trauma vs. Medical**
Significant mechanism of injury? Full head-to-toe exam. Medical patient? Chief complaint guides a focused physical exam. Both include history and baseline vital signs.

**When to Perform**
Only after the primary survey is complete and immediate life threats are managed. In critical patients, secondary assessment may happen en route—don't delay transport for it.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Trauma: Head-to-Toe",
            content: "Significant MOI = full exam. Palpate systematically: scalp and skull, face, neck (before collar if not yet applied), chest, abdomen, pelvis (compress once gently), extremities. Apply DCAP-BTLS at each area. Log roll to check posterior. Document all findings."
          },
          {
            label: "Medical: Focused Exam",
            content: "Chief complaint guides your exam. Chest pain = cardiac and respiratory focus. Dyspnea = lung sounds, JVD, peripheral edema. Abdominal pain = all four quadrants, rebound tenderness. Altered mental status = glucose, pupils, motor function. Don't miss related findings."
          },
          {
            label: "Baseline Vitals",
            content: "Blood pressure, pulse (rate and quality), respirations (rate, depth, effort), SpO₂, skin assessment (color, temperature, condition), pupils. These are your reference point for trending. Document the time obtained—trending requires timestamps."
          },
          {
            label: "DCAP-BTLS",
            content: "Your trauma assessment mnemonic for each body region: Deformity, Contusions, Abrasions, Punctures/Penetrations, Burns, Tenderness, Lacerations, Swelling. Palpate and inspect systematically. Any positive findings need documentation and may change treatment."
          }
        ]
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-secondary-q1",
          question: "DCAP-BTLS is used during which assessment phase?",
          options: [
            "Scene size-up",
            "Primary survey",
            "Secondary trauma assessment",
            "Reassessment"
          ],
          correctIndex: 2,
          explanation: "DCAP-BTLS (Deformity, Contusions, Abrasions, Punctures, Burns, Tenderness, Lacerations, Swelling) is your systematic trauma inspection mnemonic used at each body region during the secondary head-to-toe exam."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-secondary-q2",
          question: "A medical patient's chief complaint is shortness of breath. Your secondary exam should focus on:",
          options: [
            "Full head-to-toe trauma exam",
            "Chest, lung sounds, JVD, and peripheral edema",
            "Extremity pulses only",
            "Pupil response only"
          ],
          correctIndex: 1,
          explanation: "Medical patients get a focused exam guided by the chief complaint. Dyspnea calls for assessment of lung sounds, JVD (heart failure indicator), peripheral edema, and respiratory effort—all related to cardiopulmonary causes of shortness of breath."
        }
      }
    ],
    keyPoints: [
      "Secondary assessment follows completed primary survey",
      "Trauma: systematic head-to-toe with DCAP-BTLS",
      "Medical: focused exam guided by chief complaint"
    ],
    proTip: "Develop a consistent order for your exam. When you do it the same way every time, you're less likely to miss something when things get chaotic."
  },
  {
    id: "emt-sample-history",
    title: "SAMPLE History – What You Need to Know",
    content: `SAMPLE is your structured approach to gathering patient history. Each letter prompts a category of information that informs your treatment and helps the receiving facility.

**Getting Good History**
Open-ended questions get better information: "Tell me about your medications" vs. "Are you on any medications?" Give patients time to answer. Family members or bystanders can fill gaps if the patient can't communicate.

**Documentation Matters**
Everything you learn goes in your report. Allergies affect treatment options. Medications reveal medical history. Events leading up to the call paint the clinical picture.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "emt-sample-q1",
          question: "What does the 'L' in SAMPLE stand for?",
          options: [
            "Level of consciousness",
            "Last oral intake",
            "Location of pain",
            "Lab results"
          ],
          correctIndex: 1,
          explanation: "L = Last oral intake. This is important for surgical planning (aspiration risk during anesthesia) and can be relevant for diabetic emergencies, dehydration assessment, and medication timing."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-sample-q2",
          question: "A patient takes metformin and lisinopril. This medication list tells you they likely have:",
          options: [
            "Asthma and allergies",
            "Diabetes and hypertension",
            "Seizure disorder and anxiety",
            "COPD and heart failure"
          ],
          correctIndex: 1,
          explanation: "Metformin is a diabetes medication (blood sugar control) and lisinopril is an ACE inhibitor (blood pressure control). Medications reveal medical history—a key reason for gathering the 'M' in SAMPLE."
        }
      }
    ],
    keyPoints: [
      "SAMPLE: Signs/Symptoms, Allergies, Medications, Past history, Last intake, Events",
      "Open-ended questions yield better information",
      "Document everything—it all matters"
    ]
  },
  {
    id: "emt-opqrst-history",
    title: "OPQRST Pain Assessment – Characterizing the Complaint",
    content: `OPQRST characterizes symptoms—especially pain. Each letter prompts a question that helps you understand what the patient is experiencing and what might be causing it.

**Why Details Matter**
"Crushing" chest pain that radiates to the jaw suggests cardiac. "Sharp" chest pain that's worse with breathing suggests pleuritic. The quality and characteristics of symptoms point toward different causes.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "emt-sample-s",
            front: "S — Signs and Symptoms",
            back: "What you observe (signs) and what the patient reports (symptoms). 'I'm dizzy' is a symptom. Pale, diaphoretic skin is a sign. Both matter—document what you see AND what they tell you."
          },
          {
            id: "emt-sample-a",
            front: "A — Allergies",
            back: "Medication allergies especially—these affect treatment options. Also environmental, food allergies. Document 'NKDA' (no known drug allergies) if applicable. Know the difference between allergy and side effect."
          },
          {
            id: "emt-sample-m",
            front: "M — Medications",
            back: "Prescription, OTC, supplements, recreational. Bring medication bottles to the hospital when possible. Medications tell you about medical history (beta-blocker = heart disease) and may cause current symptoms (hypoglycemic agent = possible low blood sugar)."
          },
          {
            id: "emt-sample-p",
            front: "P — Past Medical History",
            back: "Chronic conditions, surgeries, hospitalizations. 'Have you ever had anything like this before?' connects current to past. Previous heart attack makes current chest pain more concerning. Diabetes explains altered mental status."
          },
          {
            id: "emt-opqrst-o",
            front: "O — Onset",
            back: "When did it start? What were you doing? Sudden vs. gradual onset suggests different causes. Sudden, severe headache = possible aneurysm. Gradual chest discomfort over hours = may still be MI but different presentation."
          },
          {
            id: "emt-opqrst-q",
            front: "Q — Quality",
            back: "What does it feel like? Use the patient's words. 'Crushing' or 'pressure' chest pain = cardiac. 'Tearing' back pain = possible dissection. 'Sharp' or 'stabbing' = often musculoskeletal or pleuritic. Quality helps narrow your differential."
          }
        ]
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-opqrst-q1",
          question: "A patient describes their chest pain as 'crushing pressure.' This description corresponds to which OPQRST letter?",
          options: [
            "O — Onset",
            "P — Provocation",
            "Q — Quality",
            "R — Region"
          ],
          correctIndex: 2,
          explanation: "Q = Quality. 'Crushing' or 'pressure' describes the character/quality of the pain, which in chest pain is a classic description of cardiac origin. The quality of symptoms helps narrow your differential diagnosis."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-opqrst-q2",
          question: "Chest pain that worsens with deep breathing is described as:",
          options: [
            "Cardiac pain",
            "Pleuritic pain",
            "Referred pain",
            "Visceral pain"
          ],
          correctIndex: 1,
          explanation: "Pleuritic pain worsens with breathing or coughing—it involves the pleura (lung lining). This is the 'P' (Provocation/Palliation) in OPQRST. Pleuritic chest pain suggests respiratory causes like pneumonia, PE, or pleurisy rather than cardiac causes."
        }
      }
    ],
    keyPoints: [
      "OPQRST: Onset, Provocation/Palliation, Quality, Region/Radiation, Severity, Time",
      "Pain quality suggests underlying cause",
      "Use the patient's own words in documentation"
    ]
  },
  {
    id: "emt-assess-quiz",
    title: "Knowledge Check",
    content: `Test your understanding of EMT patient assessment principles.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "emt-assess-q1",
          question: "During the primary survey, what should you address FIRST?",
          options: [
            "Airway patency",
            "Breathing adequacy",
            "Massive hemorrhage",
            "Disability status"
          ],
          correctIndex: 2,
          explanation: "The 2025 NREMT standards use XABCDE, where X = eXsanguinating hemorrhage. Control massive bleeding before anything else—a patient can bleed out in 3-5 minutes from major arterial injury. This is a key update from older ABCDE approaches."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-assess-q2",
          question: "A patient has chest pain. Which mnemonic helps characterize their pain?",
          options: [
            "SAMPLE",
            "DCAP-BTLS",
            "OPQRST",
            "AVPU"
          ],
          correctIndex: 2,
          explanation: "OPQRST (Onset, Provocation, Quality, Region, Severity, Time) is designed to characterize pain and symptoms. SAMPLE gathers medical history. DCAP-BTLS is for trauma physical exam. AVPU is for mental status assessment."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-assess-q3",
          question: "During scene size-up, you should determine all of the following EXCEPT:",
          options: [
            "Scene safety",
            "Blood glucose level",
            "Number of patients",
            "Mechanism of injury"
          ],
          correctIndex: 1,
          explanation: "Scene size-up happens BEFORE patient contact. It includes safety assessment, MOI/NOI, patient count, and resource needs. Blood glucose is assessed during the secondary survey after you've made patient contact and addressed life threats."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-assess-q4",
          question: "What does 'BSI' stand for in scene size-up, and when should it happen?",
          options: [
            "Basic Scene Investigation — after patient contact",
            "Body Substance Isolation — before patient contact",
            "Bilateral Scene Inspection — during transport",
            "Basic Safety Instructions — at the hospital"
          ],
          correctIndex: 1,
          explanation: "Body Substance Isolation (BSI) is your personal protective equipment step and happens BEFORE patient contact—gloves at minimum. It's the very first action in scene size-up to protect you from blood, body fluids, and infectious agents."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-assess-q5",
          question: "A trauma patient has an unstable pelvis on palpation. You should:",
          options: [
            "Palpate it again to confirm",
            "Compress it firmly one time only, then stabilize",
            "Skip pelvic assessment entirely",
            "Roll the patient to check posterior pelvis"
          ],
          correctIndex: 1,
          explanation: "An unstable pelvis is palpated gently ONCE. Repeated compression can worsen hemorrhage from pelvic fractures. After identifying instability, stabilize with a pelvic binder or sheet and prioritize rapid transport—pelvic fractures can cause life-threatening internal bleeding."
        }
      }
    ]
  },
  {
    id: "emt-assess-wrapup",
    title: "The Foundation of Care",
    content: `You now have the fundamental assessment skills that drive all EMS care. Every treatment decision, every medication, every transport choice flows from what you discover in assessment.

**What You've Learned**
• Scene size-up protects you and informs your approach
• XABCDE finds and fixes life threats in priority order
• Secondary assessment builds the complete picture
• SAMPLE and OPQRST structure your history-taking

**The Systematic Approach**
When calls get chaotic—and they will—your systematic approach keeps you from missing findings. Scene size-up → Primary survey → Secondary assessment → Reassessment. Same order, every time.

**What's Next**
AEMT assessment adds objective monitoring: capnography, blood pressure context, and shock recognition. But master these EMT fundamentals first—they're the foundation everything else builds on.`,
    keyPoints: [
      "Assessment drives treatment—it's not just paperwork",
      "Systematic approach prevents missed findings",
      "XABCDE prioritizes hemorrhage control"
    ],
    rememberThis: "The best EMTs develop 'assessment eyes'—they see things others miss because they look systematically, every time. Start building that habit now."
  }
];

// =====================================================
// AEMT Patient Assessment Content
// =====================================================

export const aemtPatientAssessmentContent: TopicSection[] = [
  {
    id: "aemt-assess-intro",
    title: "Adding Tools to Your Assessment",
    content: `You've mastered the EMT fundamentals—scene size-up, XABCDE, secondary assessment. Now you add objective monitoring that quantifies what you observed qualitatively.

**Building on Fundamentals**
AEMT assessment doesn't replace EMT skills—it adds to them. You still do scene size-up, still perform XABCDE, still gather SAMPLE/OPQRST. But now you interpret blood pressure in context, read capnography waveforms, and recognize shock patterns.

**From Observation to Data**
"The patient looks shocky" becomes "BP 88/60, HR 124, narrow pulse pressure, capnography shows low ETCO₂ consistent with poor perfusion." Numbers confirm and quantify your clinical impression.

**What You'll Learn**
Advanced vital sign interpretation, shock assessment and differentiation, age-specific considerations, and the critical skill of reassessment and trending.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-assess-intro-q1",
          question: "AEMT assessment differs from EMT assessment primarily by adding:",
          options: ["Completely new assessment techniques", "Objective monitoring that quantifies clinical observations", "The ability to skip scene size-up", "Diagnostic imaging"],
          correctIndex: 1,
          explanation: "AEMT assessment builds ON EMT fundamentals—you still do scene size-up, XABCDE, SAMPLE/OPQRST. The key addition is objective monitoring (BP context, capnography, glucose) that quantifies what you observed qualitatively."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-assess-intro-q2",
          question: "'The patient looks shocky' becomes quantifiable at the AEMT level by adding:",
          options: ["Subjective impressions only", "BP, HR, pulse pressure, and capnography readings", "X-ray findings", "Blood cultures"],
          correctIndex: 1,
          explanation: "At the AEMT level, clinical impressions are supported by numbers: 'BP 88/60, HR 124, narrow pulse pressure, low ETCO₂ consistent with poor perfusion.' Data confirms and quantifies your clinical impression."
        }
      }
    ],
    keyPoints: [
      "AEMT assessment builds on EMT fundamentals",
      "Objective monitoring quantifies clinical observations",
      "Numbers tell stories when you know how to read them"
    ]
  },
  {
    id: "aemt-advanced-vitals",
    title: "Advanced Vital Signs – Numbers That Tell Stories",
    content: `Blood pressure, capnography, glucose—these aren't just numbers to document. Each tells a story about what's happening inside your patient.

**Beyond Single Numbers**
A blood pressure of 100/70 means different things in different contexts. Calculate the pulse pressure. Consider the MAP. Trend over time. The story is in the relationships and changes.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Blood Pressure Context",
            content: "Systolic alone isn't enough. Calculate pulse pressure (SBP - DBP). Normal: 30-40 mmHg. Narrow (<25): suggests low stroke volume (hypovolemia, cardiogenic shock). Wide (>60): suggests vasodilation (sepsis) or increased ICP. MAP = DBP + 1/3 pulse pressure. MAP <65 = inadequate organ perfusion."
          },
          {
            label: "ETCO₂ and Waveform",
            content: "ETCO₂ isn't just for intubated patients. Normal: 35-45 mmHg. High (>45): hypoventilation, COPD. Low (<35): hyperventilation, PE (dead space), shock (poor CO₂ delivery). The waveform matters too—normal shark fin vs. sloped upstroke (bronchospasm) vs. absent (apnea or no perfusion)."
          },
          {
            label: "Blood Glucose",
            content: "Always check in altered mental status. Hypoglycemia (<70 mg/dL) mimics everything: stroke, seizure, intoxication, psychiatric emergency. Don't assume—verify. Treatment is cheap and fast; missing hypoglycemia is dangerous. Consider hyperglycemia's implications too (DKA, HHS)."
          },
          {
            label: "Orthostatic Vitals",
            content: "Position change reveals volume status. Measure BP and HR lying, then sitting, then standing (wait 1 minute each). Positive orthostatics: >20 mmHg SBP drop OR >20 bpm HR increase. Indicates volume depletion—even when supine vitals look normal."
          }
        ]
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-vitals-q1",
          question: "A pulse pressure of 25 mmHg suggests:",
          options: ["Normal cardiovascular function", "Low stroke volume, possible early shock", "High cardiac output", "Vasodilation"],
          correctIndex: 1,
          explanation: "Normal pulse pressure is 30-40 mmHg. A narrow pulse pressure (<25) indicates the heart isn't ejecting much blood per beat—reduced stroke volume. This is an early sign of hypovolemic or cardiogenic shock, often present before systolic BP drops."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-vitals-q2",
          question: "A capnography waveform with a sloped upstroke ('shark fin') indicates:",
          options: ["Normal ventilation", "Bronchospasm or air trapping", "Cardiac arrest", "Hyperventilation"],
          correctIndex: 1,
          explanation: "The sloped upstroke means the patient can't exhale CO₂ quickly due to narrowed airways. This is characteristic of asthma/COPD exacerbation. A normal waveform has a steep, vertical upstroke."
        }
      }
    ],
    keyPoints: [
      "Pulse pressure and MAP reveal more than systolic alone",
      "Capnography waveform tells the story, not just the number",
      "Glucose is a vital sign in altered mental status"
    ],
    proTip: "Start calculating pulse pressure and MAP automatically. 'BP is 100/70' becomes 'BP 100/70, pulse pressure 30, MAP 80.' The extra seconds of thought often reveal what single numbers hide."
  },
  {
    id: "aemt-shock-assessment",
    title: "Shock Assessment – Finding It Before the Crash",
    content: `Shock is inadequate tissue perfusion—cells aren't getting the oxygen they need. By the time blood pressure drops, the patient is already in serious trouble. Your job is to recognize shock while compensation is still working.

**Compensated vs. Decompensated**
The body compensates for perfusion problems through tachycardia, vasoconstriction, and fluid shifts. When these mechanisms fail, decompensation occurs rapidly. Recognize compensation early—that's your intervention window.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "aemt-shock-comp",
            front: "Compensated Shock Signs",
            back: "Tachycardia (first sign), cool/pale/diaphoretic skin, anxiety/restlessness, narrowed pulse pressure, delayed capillary refill. Blood pressure still 'normal' because compensation is working. This is your intervention window—act now."
          },
          {
            id: "aemt-shock-decomp",
            front: "Decompensated Shock Signs",
            back: "Hypotension (finally measurable), altered mental status, weak central pulses, mottled skin, bradycardia (ominous—compensation has failed). If you're seeing these signs, you're behind. Aggressive intervention needed immediately."
          },
          {
            id: "aemt-shock-hypo",
            front: "Hypovolemic Shock",
            back: "Blood or fluid loss. Tachycardia, hypotension, flat neck veins, poor skin turgor, decreased urine output. Treatment: find and stop the source, replace volume (crystalloid boluses), keep warm. Most common shock type in trauma."
          },
          {
            id: "aemt-shock-cardio",
            front: "Cardiogenic Shock",
            back: "Pump failure (MI, arrhythmia, cardiomyopathy). JVD, crackles/pulmonary edema, hypotension, weak pulses, cool extremities. Fluids may worsen it—the problem is the pump, not volume. Support with positioning, O₂, vasopressors (if available)."
          },
          {
            id: "aemt-shock-dist",
            front: "Distributive Shock",
            back: "Vasodilation (sepsis, anaphylaxis, neurogenic). Warm skin initially, bounding pulses, wide pulse pressure, hypotension. Container too big for volume. Sepsis: fluid + antibiotics. Anaphylaxis: epinephrine. Neurogenic: fluids + vasopressors."
          },
          {
            id: "aemt-shock-obst",
            front: "Obstructive Shock",
            back: "Something blocking flow (PE, tension pneumothorax, cardiac tamponade). JVD (blood backing up), muffled heart sounds (tamponade), absent breath sounds on one side (pneumo). Treatment: relieve the obstruction. Needle decompression for tension pneumo."
          }
        ]
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-shock-assess-q1",
          question: "The FIRST sign of compensated shock is typically:",
          options: ["Hypotension", "Tachycardia", "Altered mental status", "Cyanosis"],
          correctIndex: 1,
          explanation: "Tachycardia is the body's first compensatory response to decreased perfusion. Blood pressure is maintained through this compensation, which is why waiting for hypotension means you've missed the intervention window."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-shock-assess-q2",
          question: "Warm, flushed skin with hypotension suggests which type of shock?",
          options: ["Hypovolemic", "Cardiogenic", "Distributive", "Obstructive"],
          correctIndex: 2,
          explanation: "Distributive shock (sepsis, anaphylaxis, neurogenic) causes vasodilation—the container is too big for the volume. Initially skin is warm because blood vessels are dilated, unlike hypovolemic shock where vasoconstriction makes skin cool and pale."
        }
      }
    ],
    keyPoints: [
      "Recognize compensated shock before BP drops",
      "Shock type determines treatment approach",
      "Tachycardia is often the first sign"
    ],
    rememberThis: "Hypotension is a late sign of shock—if you're waiting for the BP to drop, you're missing the intervention window. Trust tachycardia, skin signs, and mental status changes."
  },
  {
    id: "aemt-ped-geri",
    title: "Pediatric and Geriatric Assessment – Adjusting Your Approach",
    content: `Children and elderly patients don't present like 'small adults' or 'old adults.' Their physiology is different, their compensatory mechanisms work differently, and their presentations can be deceivingly atypical.

**Know Your Populations**
The Pediatric Assessment Triangle gives you a 30-second evaluation before you even touch the child. Geriatric patients may have serious illness without classic symptoms—'atypical is typical' in the elderly.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Pediatric Assessment Triangle",
            content: "30-second doorway assessment before you touch: Appearance (tone, interactivity, consolability, look/gaze, speech/cry), Work of Breathing (rate, effort, sounds, positioning), Circulation to Skin (pallor, mottling, cyanosis). Abnormal in any area = sick child. All three abnormal = critical."
          },
          {
            label: "Pediatric Vital Signs",
            content: "Kids compensate extremely well—then crash fast. Tachycardia is the first sign of compromise (higher baseline HR anyway). Hypotension is LATE—by then they've lost 25-30% blood volume. Age-specific ranges matter: infant HR 100-160, toddler 90-150, school age 70-120. Know your normals."
          },
          {
            label: "Geriatric Considerations",
            content: "'Normal' vitals may be abnormal for them—a patient on beta-blockers won't tachycardia appropriately. Atypical presentations: MI without chest pain (dyspnea, weakness), infection without fever (confusion, falls), acute abdomen without pain (mental status change). Their baseline matters."
          },
          {
            label: "Communication Adaptations",
            content: "Pediatrics: get on their level, use simple words, involve parents (they know normal vs. abnormal), examine less threatening areas first. Geriatric: speak clearly (not loudly), give time to respond, verify understanding, don't assume cognitive impairment, check hearing aids and glasses."
          }
        ]
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-pedgeri-q1",
          question: "In pediatric assessment, hypotension indicates the child has lost approximately what percentage of blood volume?",
          options: ["5-10%", "10-15%", "25-30%", "50%"],
          correctIndex: 2,
          explanation: "Children compensate extremely well through tachycardia. By the time hypotension develops, they've lost 25-30% of blood volume—a very late and ominous sign. Tachycardia in a child always deserves serious attention."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-pedgeri-q2",
          question: "An elderly patient on beta-blockers with sepsis may NOT develop which expected sign?",
          options: ["Fever", "Tachycardia", "Confusion", "Hypotension"],
          correctIndex: 1,
          explanation: "Beta-blockers block the heart's ability to increase rate. An infected elderly patient on beta-blockers won't develop the compensatory tachycardia you'd expect—masking a key early sign of sepsis. Don't rely on heart rate alone in this population."
        }
      }
    ],
    keyPoints: [
      "Pediatric Assessment Triangle: Appearance, Breathing, Circulation",
      "Children compensate well then crash fast—tachycardia is key",
      "Geriatric patients often have atypical presentations"
    ],
    proTip: "For every pediatric patient, ask yourself: 'What's different about their baseline?' For every geriatric patient, ask: 'What would I expect if this were a younger patient, and am I seeing it?'"
  },
  {
    id: "aemt-reassessment",
    title: "Reassessment and Trending – The Dynamic Patient",
    content: `Patients change. What you found on initial assessment may not reflect their current status. Reassessment reveals trajectories—is the patient getting better, worse, or staying the same?

**Why Trending Matters**
A single blood pressure tells you about one moment. Three blood pressures over 15 minutes show a trajectory. Trending reveals patterns that predict outcomes and guide intervention adjustments.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "aemt-reass-interval",
            front: "Reassessment Intervals",
            back: "Unstable patients: every 5 minutes. Stable patients: every 15 minutes. After ANY intervention: immediately reassess. Did it work? The frequency should match the patient's instability—critical patients need constant monitoring."
          },
          {
            id: "aemt-reass-what",
            front: "What to Reassess",
            back: "Mental status (first thing to change), airway patency, breathing quality, circulation (pulses, skin, BP), vital signs, pain level, and response to interventions. Did your treatment work? Is the patient better, worse, or unchanged?"
          },
          {
            id: "aemt-reass-flags",
            front: "Deterioration Red Flags",
            back: "Increasing respiratory rate, narrowing pulse pressure, decreasing level of consciousness, delayed capillary refill, new arrhythmias, decreasing ETCO₂. These predict crashes—intervene before the vital signs follow."
          },
          {
            id: "aemt-reass-response",
            front: "Intervention Response",
            back: "Good response = continue. No response = escalate or reassess your diagnosis (are you treating the right problem?). Worsening = stop, reassess, consider alternative causes. Your treatment is also a diagnostic tool—response tells you if you're right."
          },
          {
            id: "aemt-reass-doc",
            front: "Documentation of Trends",
            back: "Time-stamp everything. 'BP 120/80 at 1400, 100/70 at 1410, 80/60 at 1420' tells a clear story of deterioration. Single numbers miss the trajectory. Trends communicate to receiving facilities and justify interventions."
          }
        ]
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-reass-q1",
          question: "How often should unstable patients be reassessed?",
          options: ["Every 30 minutes", "Every 15 minutes", "Every 5 minutes", "Only at handoff"],
          correctIndex: 2,
          explanation: "Unstable patients should be reassessed every 5 minutes. Stable patients every 15 minutes. After ANY intervention, reassess immediately to determine if it worked."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-reass-q2",
          question: "Narrowing pulse pressure over serial measurements indicates:",
          options: ["Improving cardiac output", "Worsening shock with decreasing stroke volume", "Normal variation", "Measurement error"],
          correctIndex: 1,
          explanation: "A trend of narrowing pulse pressure shows the heart is ejecting less blood per beat—stroke volume is falling. This trajectory predicts decompensation and demands intervention before vital signs crash."
        }
      }
    ],
    keyPoints: [
      "Reassess frequently—patients change",
      "Trending reveals trajectory, not just current status",
      "Intervention response guides next steps"
    ]
  },
  {
    id: "aemt-assess-integration",
    title: "Integrating Assessment Data – Application",
    content: `Let's apply these assessment skills to clinical scenarios. The goal is connecting findings to interventions—seeing how assessment drives treatment.

**Case 1: 45-year-old with Chest Pain**
Initial: diaphoretic, anxious, BP 150/90, HR 96. ETCO₂ 32 (slightly low—anxious?). SpO₂ 98%.
15 minutes later: BP 110/80, HR 110, ETCO₂ 28, becoming more lethargic.
Analysis: Narrowing pulse pressure (from 60 to 30), rising heart rate, dropping ETCO₂, decreasing mentation. This patient is decompensating—likely cardiogenic shock from MI. Priority transport, prepare for arrest.

**Case 2: 78-year-old Found Confused**
Vitals: BP 88/52, HR 64 (on beta-blocker), temp 94°F, glucose 45.
Analysis: Multiple problems. Hypoglycemia is treatable now. Hypotension and hypothermia suggest possible sepsis (blunted HR from beta-blocker masks tachycardia). Treat glucose, warm, fluid resuscitate, priority transport.

**The Integration**
Assessment isn't about collecting numbers—it's about seeing the clinical picture. Each data point adds to your understanding. Trends reveal trajectories. Patterns suggest diagnoses.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-integration-q1",
          question: "A patient's pulse pressure narrows from 60 to 30 mmHg over 15 minutes with rising HR. This trajectory suggests:",
          options: ["Improvement", "Decompensation toward shock", "Stable condition", "Medication effect"],
          correctIndex: 1,
          explanation: "Narrowing pulse pressure + rising heart rate = the body is losing its ability to compensate. Stroke volume is dropping. This patient is decompensating and needs aggressive intervention and priority transport."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-integration-q2",
          question: "An elderly confused patient has BP 88/52, HR 64 (on beta-blocker), glucose 45. What should you treat FIRST?",
          options: ["Hypotension with fluids", "Hypoglycemia with glucose", "Hypothermia with warming", "Heart rate with atropine"],
          correctIndex: 1,
          explanation: "Hypoglycemia is immediately treatable and can be the cause of the confusion. Treating it is fast, cheap, and can dramatically improve the patient. Then address hypotension and other issues. Always check glucose in altered mental status."
        }
      }
    ],
    keyPoints: [
      "Connect findings to clinical picture",
      "Trends matter more than single values",
      "Assessment guides intervention selection"
    ],
    rememberThis: "Become a pattern recognizer. The more patients you assess, the more patterns you'll see. 'This looks like compensated hypovolemic shock' becomes automatic when you've seen it enough times."
  },
  {
    id: "aemt-assess-quiz",
    title: "Knowledge Check",
    content: `Apply AEMT assessment concepts to these clinical scenarios.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-assess-q1",
          question: "A patient has BP 90/60 with pulse of 120 and cool, pale skin. Mental status is normal. This suggests:",
          options: [
            "Decompensated shock",
            "Compensated shock",
            "Neurogenic shock",
            "Normal findings"
          ],
          correctIndex: 1,
          explanation: "Signs of poor perfusion (tachycardia, cool pale skin, borderline hypotension) but maintained mental status = compensated shock. The brain is still perfused adequately. This is your intervention window—treat now before decompensation."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-assess-q2",
          question: "An ETCO₂ waveform shows prolonged, sloped upstroke. This indicates:",
          options: [
            "Cardiac arrest",
            "Bronchospasm",
            "Hyperventilation",
            "Normal ventilation"
          ],
          correctIndex: 1,
          explanation: "A sloped upstroke (prolonged alveolar plateau) indicates obstructed exhalation—the patient can't exhale CO₂ quickly due to narrowed airways. Classic for asthma/COPD exacerbation. Normal waveforms have steep, vertical upstroke."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-assess-q3",
          question: "In pediatric assessment, which is the EARLIEST sign of shock?",
          options: [
            "Hypotension",
            "Tachycardia",
            "Altered mental status",
            "Weak central pulses"
          ],
          correctIndex: 1,
          explanation: "Children compensate primarily through heart rate increase. By the time hypotension develops, they've lost 25-30% of blood volume—a very late and ominous sign. Tachycardia in a child deserves serious attention."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-assess-q4",
          question: "A pulse pressure of 20 mmHg (BP 90/70) suggests:",
          options: [
            "Good cardiac output",
            "Low stroke volume, likely hypovolemia or cardiogenic shock",
            "High blood pressure",
            "Normal vital signs"
          ],
          correctIndex: 1,
          explanation: "Normal pulse pressure is 30-40 mmHg. Narrow pulse pressure (<25) indicates reduced stroke volume—the heart isn't ejecting much blood per beat. This is an early sign of shock, often present before systolic BP drops significantly."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-assess-q5",
          question: "An elderly patient on beta-blockers presents with infection. What assessment finding might be ABSENT?",
          options: [
            "Fever",
            "Tachycardia",
            "Altered mental status",
            "Hypotension"
          ],
          correctIndex: 1,
          explanation: "Beta-blockers prevent the heart from increasing its rate appropriately. An infected elderly patient on beta-blockers may not develop the tachycardia you'd expect as a compensatory response—masking a key early sign of sepsis. Don't rely on heart rate alone."
        }
      }
    ]
  },
  {
    id: "aemt-assess-wrapup",
    title: "Data-Driven Assessment",
    content: `You've added objective monitoring to your clinical toolkit. Numbers now quantify what you observe, trends reveal trajectories, and shock patterns guide intervention selection.

**What You've Learned**
• Blood pressure context: pulse pressure, MAP, and what they reveal
• Capnography: waveforms that tell stories
• Shock recognition: finding it before the BP drops
• Age-specific adaptations for peds and geriatrics
• Reassessment and trending: the dynamic patient

**The Integration**
Data doesn't replace clinical judgment—it supports it. Your assessment eyes (developed at the EMT level) plus objective monitoring (added at AEMT) equals comprehensive patient evaluation.

**What's Next**
Paramedic assessment adds differential diagnosis development, advanced physical exam skills, and clinical decision integration. But the foundation you've built here—systematic assessment with objective monitoring—remains essential at every level.`,
    keyPoints: [
      "Numbers confirm and quantify clinical observations",
      "Trending reveals trajectory—critical for dynamic patients",
      "Shock recognition is about patterns, not single findings"
    ],
    proTip: "The best clinicians integrate qualitative observation with quantitative monitoring. 'The patient looks shocky' AND 'narrow pulse pressure of 22, ETCO₂ trending down, tachycardia.' Both matter."
  }
];

// =====================================================
// Paramedic Patient Assessment Content  
// =====================================================

export const paramedicPatientAssessmentContent: TopicSection[] = [
  {
    id: "para-assess-intro",
    title: "Assessment as Clinical Reasoning",
    content: `At the paramedic level, assessment isn't just data collection—it's hypothesis testing. From the moment you get the call, you're building differential diagnoses and using each assessment finding to refine your clinical picture.

**The Shift in Thinking**
EMT assessment finds problems. AEMT assessment quantifies them. Paramedic assessment explains them. You're not just documenting what's wrong—you're understanding why, connecting pathophysiology to presentation, and using that understanding to guide treatment.

**Clinical Reasoning Starts Early**
Differential diagnosis begins at dispatch. "Chest pain" triggers a mental list: MI, PE, dissection, pneumothorax, GERD, anxiety, musculoskeletal. Every assessment finding either supports or contradicts possibilities on your list.

**What You'll Master**
Differential diagnosis development, advanced physical exam with clinical correlation, critical patient recognition before decompensation, and synthesis of findings into field impressions that drive definitive care.`,
    keyPoints: [
      "Assessment is hypothesis testing, not just data collection",
      "Differential diagnosis begins before patient contact",
      "Understanding 'why' guides treatment selection"
    ]
  },
  {
    id: "para-differential",
    title: "Differential Diagnosis – What Could This Be?",
    content: `A differential diagnosis is your list of possible causes for the patient's presentation. Starting broad and narrowing systematically—using assessment findings to rule in or rule out possibilities—is the core of clinical reasoning.

**The Process**
Chief complaint generates initial possibilities. History and physical exam findings either support or contradict each possibility. You update probability constantly, focusing on ruling out dangerous conditions first.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Building a Differential",
            content: "Start broad based on chief complaint. Chest pain? Could be cardiac (MI, angina), pulmonary (PE, pneumothorax, pleuritis), GI (GERD, esophageal spasm), musculoskeletal (costochondritis), psychiatric (panic attack). Each has different findings to look for—and different implications if missed."
          },
          {
            label: "Can't Miss Diagnoses",
            content: "Some diagnoses kill quickly if missed: MI, PE, aortic dissection, tension pneumothorax, ectopic pregnancy, meningitis, sepsis. Always rule these out first before settling on benign causes. Ask yourself: 'What kills this patient if I'm wrong?' Address those first."
          },
          {
            label: "Ruling In vs. Out",
            content: "Findings either support or contradict each possibility. ST elevation rules IN STEMI. Normal ECG doesn't rule OUT MI—but makes it less likely. Negative D-dimer (in hospital) helps rule out PE. Build your case with positive AND negative findings."
          },
          {
            label: "Clinical Probability",
            content: "You're constantly updating probability as new data arrives. 'This is most likely... but I can't yet exclude...' Pre-test probability matters—chest pain in a 25-year-old healthy female vs. 65-year-old diabetic male with prior MI. Context shapes probability."
          }
        ]
      }
    ],
    keyPoints: [
      "Differential diagnosis starts broad, narrows systematically",
      "Rule out 'can't miss' diagnoses first",
      "Probability updates with each new finding"
    ],
    rememberThis: "The goal isn't to diagnose definitively in the field—it's to identify what's life-threatening, start appropriate treatment, and communicate your clinical reasoning to the receiving team."
  },
  {
    id: "para-physical-exam",
    title: "Physical Exam Mastery – Finding What Others Miss",
    content: `Paramedic-level physical exam goes beyond EMT systematic exam. You're looking for subtle findings with major implications—and connecting what you find to underlying pathophysiology.

**Clinical Correlation**
Every finding means something. JVD isn't just 'present'—it tells you about right heart function. Crackles aren't just 'audible'—they suggest fluid in alveoli. Understanding the 'why' behind findings makes you a better clinician.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "para-exam-jvd",
            front: "JVD Assessment",
            back: "Elevated with patient at 45°? Suggests right heart backup: right heart failure, tension pneumothorax, cardiac tamponade, massive PE. Flat neck veins in hypotension = volume depletion—the tank is empty. The neck veins tell you about the right heart."
          },
          {
            id: "para-exam-breath",
            front: "Breath Sounds Correlation",
            back: "Crackles = fluid (CHF, pneumonia, ARDS). Wheezes = bronchospasm (asthma, COPD, allergic reaction). Absent = pneumothorax, severe bronchospasm, or hemothorax. Stridor = upper airway obstruction. Location matters—compare sides, compare bases to apices."
          },
          {
            id: "para-exam-abd",
            front: "Abdominal Assessment",
            back: "Rebound tenderness = peritoneal irritation (surgical emergency). Rigid 'board-like' abdomen = worse. Pulsatile mass = AAA (don't palpate repeatedly). Guarding can be voluntary or involuntary—involuntary is more significant. Assess gently—you can make things worse."
          },
          {
            id: "para-exam-pupils",
            front: "Pupil Findings",
            back: "Unequal (anisocoria) = possible herniation—increased ICP pushing brain through foramen magnum. Pinpoint = opioids or pontine hemorrhage. Fixed dilated = severe hypoxia, death, or anticholinergic toxicity. Always check pupils in altered mental status."
          },
          {
            id: "para-exam-edema",
            front: "Peripheral Edema",
            back: "Bilateral = systemic cause (CHF, renal failure, liver disease). Unilateral = DVT until proven otherwise. Check for DVT in unexplained dyspnea—PE connection. Pitting vs. non-pitting has implications. Acute onset vs. chronic changes assessment."
          },
          {
            id: "para-exam-skin",
            front: "Skin Findings",
            back: "Mottling = shock—blood being diverted from skin to vital organs. Petechiae = platelet problem or severe sepsis (meningococcemia). Skin tenting = dehydration. Diaphoresis = catecholamine surge (pain, fear, hypoglycemia, MI). The skin is an organ—read it."
          }
        ]
      }
    ],
    keyPoints: [
      "Every finding connects to pathophysiology",
      "Subtle findings often have major implications",
      "Physical exam skills differentiate clinicians"
    ],
    proTip: "Develop exam habits that are thorough but efficient. Check JVD when you're at the neck anyway. Listen to the back when you log-roll. Make comprehensive assessment part of your normal flow."
  },
  {
    id: "para-critical-recog",
    title: "Critical Patient Recognition – Before the Crash",
    content: `Experienced providers recognize sick patients before vital signs confirm it. The 'sick gestalt,' pre-arrest warning signs, and time-critical presentations—recognizing trouble before decompensation gives you the intervention window that saves lives.

**The Sick Gestalt**
You'll develop this with experience—the ability to look at a patient and know 'this one's sick' before you have any numbers. Pallor, diaphoresis, distress, altered behavior. Trust it, then find the data to support it.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "The 'Sick' Gestalt",
            content: "Experienced providers recognize 'sick' patients instantly—often before vitals. It's pattern recognition built from exposure. Pallor, diaphoresis, anxiety/agitation, positional preference, the 'look' in their eyes. Trust this instinct, then find supporting data. If something feels wrong, it probably is."
          },
          {
            label: "Pre-Arrest Recognition",
            content: "Signs that predict imminent arrest: agonal breathing, extreme bradycardia (especially with hypotension), narrowing pulse pressure approaching zero, mottled skin extending centrally, decreasing LOC despite intervention. These patients need immediate aggressive intervention—you may be preventing, not treating, arrest."
          },
          {
            label: "Compensatory Exhaustion",
            content: "Compensation precedes decompensation. Initially: tachycardia, tachypnea, accessory muscles, anxiety. Exhaustion: slowing rates, decreasing effort, 'giving up,' head bobbing in children. The quiet before the storm. Fatigue means reserves are depleted."
          },
          {
            label: "Time-Critical Presentations",
            content: "STEMI (door-to-balloon time), stroke (time-to-TPA/thrombectomy), sepsis (early antibiotics), trauma with hemorrhage (OR). These have time-dependent outcomes—your recognition triggers immediate transport decisions and destination selection. 'Time is muscle/brain/life.'"
          }
        ]
      },
      {
        type: "quiz",
        quiz: {
          id: "para-critical-q1",
          question: "A patient has tachycardia, pale skin, and normal blood pressure. This is:",
          options: [
            "Normal findings",
            "Compensated shock",
            "Decompensated shock",
            "Cardiac arrest"
          ],
          correctIndex: 1,
          explanation: "The body is compensating—tachycardia and vasoconstriction (pale skin) maintain blood pressure. This is compensated shock, your intervention window. Treat aggressively now before decompensation occurs."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-critical-q2",
          question: "Bradycardia in a shock patient is an ominous sign because it indicates:",
          options: [
            "The patient is relaxing",
            "Compensation has failed",
            "The patient is improving",
            "A medication side effect"
          ],
          correctIndex: 1,
          explanation: "In shock, the heart initially speeds up to compensate. When bradycardia develops, it means the compensatory mechanisms have failed—the heart is no longer able to maintain its increased rate. This is a pre-arrest sign requiring immediate intervention."
        }
      }
    ],
    keyPoints: [
      "Trust your 'sick' gestalt—then find supporting data",
      "Pre-arrest signs demand immediate action",
      "Time-critical presentations require rapid recognition"
    ],
    rememberThis: "The goal is recognition BEFORE decompensation. By the time vital signs crash, you've lost your best intervention window. See it coming."
  },
  {
    id: "para-clinical-integration",
    title: "Clinical Decision Integration – Putting It All Together",
    content: `This is where assessment becomes action. Field impressions, treatment selection, hospital communication, and adapting when new information challenges your initial assessment.

**Field Impressions**
Your working diagnosis based on assessment. 'Suspected anterior STEMI' or 'Likely sepsis with respiratory source' or 'Probable opiate overdose with aspiration.' Drives treatment decisions and hospital notification.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "para-integrate-impression",
            front: "Field Impression",
            back: "Your working diagnosis based on assessment synthesis. 'Suspected STEMI,' 'Likely sepsis from UTI source,' 'Cardiogenic shock, possible MI.' Drives treatment selection and hospital notification. Be specific but acknowledge uncertainty—'suspected' not 'definite.'"
          },
          {
            id: "para-integrate-connect",
            front: "Treatment-Diagnosis Connection",
            back: "Every treatment should connect to your field impression. Giving nitroglycerin? You believe the problem involves cardiac ischemia. Starting a fluid bolus? You believe hypovolemia is contributing. Treatment follows assessment reasoning, not protocol reflexes."
          },
          {
            id: "para-integrate-notify",
            front: "Hospital Notification",
            back: "Your assessment becomes the receiving team's first information. Be concise: age, sex, chief complaint, pertinent positives AND negatives, vital signs/trends, field impression, treatments given and response, ETA. You're setting up their thinking."
          },
          {
            id: "para-integrate-adapt",
            front: "Adapting to New Data",
            back: "Initial impression wrong? Adjust. New finding changes your differential? Pivot. Good clinicians update their thinking—they don't anchor to first impressions. 'I initially thought CHF, but the blood sugar of 42 changes things.'"
          },
          {
            id: "para-integrate-pause",
            front: "The Pause",
            back: "In complex situations, force yourself to pause. 'What am I missing?' 'What else could this be?' 'Is my treatment making things better or worse?' Deliberate thinking prevents anchoring bias and premature closure."
          },
          {
            id: "para-integrate-doc",
            front: "Documentation Standards",
            back: "Document your clinical reasoning. Why did you give that medication? What findings supported your field impression? What alternatives did you consider? Good documentation protects you legally AND informs subsequent providers."
          }
        ]
      },
      {
        type: "quiz",
        quiz: {
          id: "para-integration-q1",
          question: "A field impression drives:",
          options: [
            "Only documentation",
            "Treatment decisions and hospital notification",
            "Scene size-up only",
            "Transport mode only"
          ],
          correctIndex: 1,
          explanation: "Your field impression—'suspected anterior STEMI' or 'likely sepsis'—directly drives treatment selection, hospital destination, and pre-arrival communication. It synthesizes your assessment into actionable clinical reasoning."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-integration-q2",
          question: "When new data contradicts your initial field impression, you should:",
          options: [
            "Ignore the new data",
            "Reassess and update your working diagnosis",
            "Continue the original treatment plan",
            "Wait for hospital confirmation"
          ],
          correctIndex: 1,
          explanation: "Good clinicians update their thinking as new information arrives. Anchoring to a first impression despite contradicting evidence is a cognitive bias that can lead to wrong treatment. Adaptability defines expert clinical reasoning."
        }
      }
    ],
    keyPoints: [
      "Field impressions drive treatment and communication",
      "Connect every treatment to your assessment reasoning",
      "Adapt when new information challenges your impression"
    ]
  },
  {
    id: "para-complex-cases",
    title: "Complex Case Integration – Application",
    content: `Real patients rarely present like textbook cases. Multi-system problems, extensive histories, and conflicting findings require integrating everything you've learned.

**Case 1: 72-year-old with Dyspnea**
Findings: JVD, bilateral crackles, peripheral edema, BP 90/60, HR 110, SpO₂ 84% on room air.
Integration: JVD + crackles + edema = fluid overload/CHF. But hypotension complicates treatment—can't offload aggressively. This is cardiogenic shock from acute CHF exacerbation. NIV if tolerated, prepare for intubation, careful with fluid, destination with cath lab capability if considering MI as precipitant.

**Case 2: 55-year-old with Chest Pain**
Findings: 'Tearing' pain to back, BP 190/110 left arm, 150/90 right arm, diaphoretic, anxious.
Integration: Unequal BPs + tearing pain to back + severe hypertension = aortic dissection until proven otherwise. NOT a STEMI pathway—anticoagulation could be catastrophic. Pain control, gentle BP management, rapid transport to facility with cardiac surgery.

**Case 3: 35-year-old Post-Partum Seizure**
Findings: 2 weeks post-delivery, generalized seizure, BP 180/120, proteinuria, headache before seizure.
Integration: Post-partum + hypertension + seizure = eclampsia. Magnesium sulfate, BP management, airway protection, OB-capable facility. Not a 'regular' seizure—specific cause, specific treatment.

**The Integration Skill**
Each case requires synthesizing: history, physical exam, vital signs, clinical context. The 'right' answer comes from connecting the dots—not from pattern-matching to a single finding.`,
    keyPoints: [
      "Real cases involve multi-system problems",
      "Context changes interpretation of findings",
      "Integration is the highest assessment skill"
    ],
    rememberThis: "Textbooks teach patterns. Experience teaches variations. The best clinicians know the patterns AND recognize when something doesn't fit. When it doesn't fit, dig deeper."
  },
  {
    id: "para-assess-quiz",
    title: "Knowledge Check",
    content: `Apply paramedic-level assessment and clinical reasoning to these scenarios.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "para-assess-q1",
          question: "A 65-year-old presents with dyspnea. You find JVD, bilateral crackles, and peripheral edema. Your field impression is:",
          options: [
            "Pulmonary embolism",
            "Acute CHF exacerbation",
            "COPD exacerbation",
            "Tension pneumothorax"
          ],
          correctIndex: 1,
          explanation: "JVD (right heart backup) + crackles (fluid in lungs) + peripheral edema (systemic congestion) = classic CHF presentation. PE typically has clear lungs. COPD has wheezes, not crackles. Tension pneumo has absent breath sounds on one side and no peripheral edema."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-assess-q2",
          question: "A patient with chest pain has a normal 12-lead ECG. You should:",
          options: [
            "Rule out MI and focus on other causes",
            "Consider other causes while continuing cardiac monitoring",
            "Treat as definitively non-cardiac",
            "Cancel STEMI alert if activated"
          ],
          correctIndex: 1,
          explanation: "A normal ECG doesn't rule out MI—up to 20% of MIs have non-diagnostic initial ECGs. Continue treating as possible cardiac while considering your differential. Serial ECGs may reveal evolving changes. Transport to appropriate facility."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-assess-q3",
          question: "Which finding is MOST concerning for imminent cardiovascular collapse?",
          options: [
            "Heart rate 110",
            "Respiratory rate 24",
            "Narrowing pulse pressure",
            "Capillary refill 3 seconds"
          ],
          correctIndex: 2,
          explanation: "Narrowing pulse pressure (decreasing SBP-DBP difference) indicates falling stroke volume—the heart is failing to move blood effectively. This is a pre-arrest warning sign. Tachycardia and tachypnea indicate compensation; narrowing pulse pressure shows the pump is failing."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-shock-q4",
          question: "Which is the EARLIEST reliable sign of shock?",
          options: [
            "Hypotension",
            "Tachycardia",
            "Bradycardia",
            "Absent pedal pulses"
          ],
          correctIndex: 1,
          explanation: "Tachycardia is the body's first compensatory response to decreased perfusion. Blood pressure drops are a LATE sign—by the time BP falls, the patient has lost significant compensatory reserve. Always take tachycardia seriously."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-shock-q5",
          question: "Cold blood doesn't clot well. This is why shock management includes:",
          options: [
            "Administering blood thinners",
            "Preventing hypothermia",
            "Elevating the head",
            "Restricting oxygen"
          ],
          correctIndex: 1,
          explanation: "Hypothermia impairs the coagulation cascade, worsening bleeding. Temperature management (covering the patient, warming the ambulance, removing wet clothing) is a critical but often overlooked shock intervention."
        }
      }
    ]
  },
  {
    id: "para-assess-wrapup",
    title: "Assessment Mastery Achieved",
    content: `You've completed the patient assessment track across all three certification levels. From scene size-up to differential diagnosis, from XABCDE to clinical decision integration—you've built comprehensive assessment expertise.

**The Complete Picture**

**EMT Foundation**
Scene size-up, XABCDE primary survey, systematic secondary assessment, structured history with SAMPLE/OPQRST. The fundamentals that never change.

**AEMT Enhancement**
Objective monitoring integration, shock recognition and differentiation, age-specific adaptations, reassessment and trending. Quantifying what you observe.

**Paramedic Mastery**
Differential diagnosis development, advanced physical exam with clinical correlation, critical patient recognition, field impression and clinical decision integration. Assessment as clinical reasoning.

**The Integration**
Every level builds on the previous. You don't abandon EMT skills at AEMT or AEMT skills at Paramedic—you add layers. The fundamentals remain essential while clinical reasoning deepens.

**You're Ready**
For the patient who 'just doesn't look right,' for the complex multi-system presentation, for the critical decision that determines outcome—you have the assessment skills to guide your care.

That's assessment mastery.`,
    keyPoints: [
      "Assessment skills build across levels",
      "Clinical reasoning connects findings to treatment",
      "Every level adds while maintaining fundamentals"
    ],
    proTip: "Assessment mastery is never 'complete.' Every patient teaches you something. Stay curious, stay systematic, and never stop learning from your patients."
  }
];

// =====================================================
// EMT Shock Management Content
// =====================================================

export const emtShockManagementContent: TopicSection[] = [
  {
    id: "shock-intro",
    title: "When the Body Can't Keep Up",
    content: `Shock is one of the most critical conditions you'll encounter. It's not about low blood pressure—it's about cells not getting what they need to survive.

Every call you run, whether trauma or medical, has the potential for shock. Recognizing it early and intervening quickly is one of the most important skills you'll develop.

**Why This Matters**
When tissues don't get enough oxygen-rich blood, they start dying. The brain can survive 4-6 minutes without oxygen. The heart, kidneys, and liver all fail when perfusion drops. Shock kills by starving cells of what they need to live.

**The Good News**
You can recognize shock early—before vital signs crash. And your interventions make a real difference. Oxygen, positioning, bleeding control, temperature management—these aren't "just BLS." They're life-saving.`,
    keyPoints: [
      "Shock = inadequate tissue perfusion",
      "Cells die without adequate oxygen delivery",
      "Early recognition is the first treatment"
    ],
    rememberThis: "When you think 'shock,' think 'cells are starving.' Everything you do aims to feed those hungry cells."
  },
  {
    id: "what-is-shock",
    title: "What Is Shock? – The Core Concept",
    content: `Let's get specific about what shock actually means.

**Simple Definition**
Shock is inadequate tissue perfusion. That means tissues aren't getting enough oxygen-rich blood to meet their metabolic needs.

**Why It Happens**
Think of circulation as a delivery system. You need:
- **Volume**: Enough fluid in the system
- **Pump**: A heart that moves the fluid
- **Pipes**: Blood vessels that direct flow
- **Cargo**: Hemoglobin carrying oxygen

When any of these fail, delivery suffers. Cells don't get their oxygen, and they start switching to backup power—anaerobic metabolism. That's inefficient and produces waste (lactate). Eventually, cells die.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Simple Definition",
            content: "Shock means tissues aren't getting enough oxygen-rich blood. When cells can't get oxygen, they switch to inefficient energy production and start dying. It's not primarily about blood pressure—it's about tissue perfusion."
          },
          {
            label: "Why It Matters",
            content: "Every organ needs perfusion to survive. Brain cells die in 4-6 minutes without oxygen. Heart, kidneys, liver—all fail when perfusion drops. Shock kills by starving cells of what they need."
          },
          {
            label: "Body's Response",
            content: "When perfusion drops, the body compensates: heart beats faster, blood vessels constrict, blood shifts to vital organs. These compensatory signs ARE your assessment findings. Tachycardia and cool skin aren't random—they're the body fighting to survive."
          }
        ]
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-shock-type-q1",
          question: "Flat neck veins in a hypotensive patient suggest which type of shock?",
          options: [
            "Cardiogenic",
            "Obstructive",
            "Hypovolemic",
            "Neurogenic"
          ],
          correctIndex: 2,
          explanation: "Flat neck veins indicate low circulating volume—there isn't enough blood to fill the jugular veins. This is characteristic of hypovolemic shock. Cardiogenic and obstructive shock typically show JVD (distended neck veins) because blood is backing up."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-shock-type-q2",
          question: "Warm, flushed skin in a shock patient initially suggests:",
          options: [
            "Hypovolemic shock",
            "Cardiogenic shock",
            "Distributive shock",
            "Obstructive shock"
          ],
          correctIndex: 2,
          explanation: "Warm, flushed skin indicates vasodilation—the hallmark of distributive shock (sepsis, anaphylaxis, neurogenic). The 'container' is too big for the volume. In later stages, vasoconstriction may take over and skin becomes cool."
        }
      }
    ],
    keyPoints: [
      "Shock is about perfusion, not just blood pressure",
      "Cells need oxygen to survive",
      "The body's compensatory responses are your early warning signs"
    ]
  },
  {
    id: "compensated-vs-decompensated",
    title: "Compensated vs. Decompensated – Reading the Timeline",
    content: `The body doesn't give up easily. When perfusion drops, backup systems kick in. Understanding this timeline is crucial.

**Compensated Shock**
The body is fighting back. Heart rate increases to maintain cardiac output. Blood vessels constrict to maintain pressure. Blood shifts from skin and gut to brain and heart. Blood pressure may still be "normal."

**Decompensated Shock**
Compensation has failed. The body can't keep up anymore. Blood pressure crashes. Mental status deteriorates. Pulses weaken. This patient is in immediate danger.

**The Critical Point**
Compensated shock is your intervention window. Once decompensation begins, you're playing catch-up. Recognize the early signs and treat aggressively—while the body is still fighting.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "emt-shock-comp",
            front: "Compensated Shock",
            back: "The body's backup systems are working. Tachycardia, vasoconstriction, anxiety. BP may still be normal because compensation is maintaining it. This is your intervention window—treat NOW before things get worse."
          },
          {
            id: "emt-shock-decomp",
            front: "Decompensated Shock",
            back: "Compensation has failed. Hypotension, altered mental status, weak central pulses, bradycardia (ominous sign). You're behind the curve. Aggressive intervention and rapid transport are critical."
          },
          {
            id: "emt-shock-tachy",
            front: "Tachycardia in Shock",
            back: "Heart beating faster to maintain cardiac output (CO = HR × SV). This is the first compensatory response. A heart rate of 120+ in an adult is a red flag—don't dismiss it as 'anxiety.'"
          },
          {
            id: "emt-shock-skin",
            front: "Cool, Pale Skin",
            back: "Blood is being shunted away from skin to vital organs. The body is prioritizing the brain and heart over the periphery. This is an early and reliable shock sign—check it on every patient."
          },
          {
            id: "emt-shock-cap",
            front: "Delayed Capillary Refill",
            back: "Cap refill > 2 seconds indicates poor peripheral perfusion. Simple, fast, valuable—especially in children. If the periphery isn't getting blood, assume the body is shunting to save vital organs."
          },
          {
            id: "emt-shock-ams",
            front: "Altered Mental Status",
            back: "Brain perfusion is dropping. Confusion, anxiety, combativeness, or lethargy—any mental status change in a trauma or medical patient should make you think 'shock' until proven otherwise."
          }
        ]
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-shock-interv-q1",
          question: "Why should a cardiogenic shock patient NOT have legs elevated?",
          options: [
            "It causes pain",
            "Returning blood to a failing heart worsens pulmonary edema",
            "It lowers blood pressure",
            "It's never appropriate for any shock"
          ],
          correctIndex: 1,
          explanation: "In cardiogenic shock, the heart can't pump the blood it already has. Elevating legs increases venous return (preload), which the failing heart can't handle—worsening pulmonary edema. Keep these patients sitting upright."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-shock-interv-q2",
          question: "What is the primary reason for giving high-flow oxygen to shock patients?",
          options: [
            "To raise blood pressure",
            "To maximize oxygen delivery to starving cells",
            "To reduce heart rate",
            "To prevent infection"
          ],
          correctIndex: 1,
          explanation: "Shock means cells aren't getting enough oxygen. High-flow O₂ (15 LPM via NRB) maximizes the oxygen content of the blood, helping deliver more oxygen to tissues that are starving—even if SpO₂ appears adequate."
        }
      }
    ],
    keyPoints: [
      "Compensated shock: body fighting, BP may be normal",
      "Decompensated shock: compensation failed, BP crashes",
      "The intervention window is during compensation"
    ]
  },
  {
    id: "shock-types",
    title: "Types of Shock – Same Problem, Different Causes",
    content: `All shock leads to the same result—inadequate tissue perfusion—but the causes differ. Understanding the types helps you recognize patterns and choose appropriate treatment.

**The Four Main Types**
1. **Hypovolemic**: Not enough volume in the system
2. **Distributive**: Container too big (vasodilation)
3. **Cardiogenic**: Pump failure
4. **Obstructive**: Something blocking flow`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Hypovolemic",
            content: "Not enough volume in the tank. Blood loss (hemorrhagic) or fluid loss (burns, vomiting, diarrhea). Look for flat neck veins, poor skin turgor, and obvious fluid loss. Treatment: replace volume and stop the source of loss. The most straightforward shock type."
          },
          {
            label: "Distributive",
            content: "Vasodilation makes the container too big for the volume inside. Includes sepsis, anaphylaxis, and neurogenic shock. Initially may see warm, flushed skin and bounding pulses (before compensation). Container problem, not volume problem—though fluids still help initially."
          },
          {
            label: "Cardiogenic",
            content: "The pump is failing. MI, dysrhythmias, heart failure, myocarditis. Look for JVD (blood backing up), crackles in lungs (pulmonary edema), hypotension. Critical point: fluids may make it WORSE. The heart can't pump what it already has."
          },
          {
            label: "Obstructive",
            content: "Something blocking blood flow mechanically. Tension pneumothorax, cardiac tamponade, massive PE. Look for JVD, hypotension, muffled heart sounds (tamponade), absent breath sounds (tension pneumo). Treatment: relieve the obstruction—needle decompression for tension pneumo."
          }
        ]
      }
    ],
    keyPoints: [
      "Hypovolemic: volume loss—replace it",
      "Distributive: vasodilation—fluids help, treat cause",
      "Cardiogenic: pump failure—fluids may harm",
      "Obstructive: blocked flow—relieve the obstruction"
    ]
  },
  {
    id: "emt-assessment",
    title: "EMT Assessment for Shock – Finding It Early",
    content: `Your primary survey finds shock before the blood pressure crashes. Use it systematically.

**Skin Signs Are Your Friends**
The skin is one of the first organs to show reduced perfusion. Cold, pale, clammy skin tells you the body is shunting blood to vital organs. This happens BEFORE blood pressure drops.

**What to Look For**
- **Mental status**: Any change from baseline suggests reduced brain perfusion
- **Skin**: Color, temperature, moisture, capillary refill
- **Pulse**: Rate, quality, regularity (radial vs. carotid)
- **Blood pressure**: Important but often a LATE sign
- **Respiratory**: Rate, effort, oxygen saturation

**Trending Tells the Story**
One set of vitals is a snapshot. Repeated assessments show you the trajectory. Is the patient getting better, worse, or staying the same? Trends predict outcomes.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "emt-shock-assess-q1",
          question: "Which assessment finding appears BEFORE blood pressure drops in shock?",
          options: [
            "Hypotension",
            "Cool, pale, clammy skin",
            "Bradycardia",
            "Pupil dilation"
          ],
          correctIndex: 1,
          explanation: "Skin signs are one of the earliest indicators of shock. The body shunts blood away from skin to vital organs, causing cool, pale, clammy skin BEFORE blood pressure drops. This is why skin assessment is so valuable."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-shock-assess-q2",
          question: "Why is trending vital signs more valuable than a single measurement?",
          options: [
            "Single measurements are always inaccurate",
            "Trends show the patient's trajectory—improving, worsening, or stable",
            "Trending is required by protocol only",
            "Single measurements don't need documentation"
          ],
          correctIndex: 1,
          explanation: "A single set of vitals is a snapshot. Serial measurements reveal trajectory. A patient with BP going from 120/80 to 100/70 to 80/50 over 15 minutes is clearly deteriorating—information a single reading can't provide."
        }
      }
    ],
    keyPoints: [
      "Skin signs appear before BP drops",
      "Mental status changes mean brain perfusion is dropping",
      "Trending matters more than single measurements"
    ],
    proTip: "Develop the habit of checking skin on every patient—even 'minor' calls. It takes 2 seconds and tells you a lot. When skin changes, something is happening."
  },
  {
    id: "emt-interventions",
    title: "EMT Shock Interventions – What You Can Do",
    content: `Your interventions buy time for definitive care. Never underestimate the value of BLS shock treatment.

**High-Flow Oxygen**
Give oxygen to all shock patients. Even if SpO2 looks okay, tissues are starving. 15 LPM via non-rebreather. You're trying to maximize oxygen delivery to cells that desperately need it.

**Positioning**
For hypovolemic/distributive shock: elevate legs 6-12 inches. This shifts blood from legs to central circulation, improving preload. Exception: cardiogenic or respiratory patients—keep them sitting up.

**Bleeding Control**
External hemorrhage is treatable. Direct pressure, wound packing, tourniquets. "X" comes before "ABC" in XABCDE for a reason—massive bleeding kills faster than airway problems.

**Temperature Management**
Cold blood doesn't clot. Cold hearts are irritable. Cover the patient, warm the ambulance, remove wet clothing. Hypothermia is the enemy of the shock patient.

**Rapid Transport**
Definitive care is in the hospital. Blood products, surgery, specialized interventions. Don't delay transport for interventions that can be done en route.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "emt-shock-o2",
            front: "High-Flow Oxygen",
            back: "Give oxygen to all shock patients—15 LPM via non-rebreather. Even if SpO2 is okay, tissues are starving for oxygen. Every O2 molecule you can deliver helps starving cells."
          },
          {
            id: "emt-shock-position",
            front: "Shock Positioning",
            back: "Legs elevated 6-12 inches for hypovolemic shock—helps return blood to central circulation. EXCEPTION: cardiogenic or respiratory patients should sit up. Wrong position for wrong shock type can cause harm."
          },
          {
            id: "emt-shock-bleeding",
            front: "Bleeding Control",
            back: "External hemorrhage is treatable at the EMT level. Direct pressure, wound packing, tourniquets. 'X' in XABCDE means exsanguinating hemorrhage—control it before anything else."
          },
          {
            id: "emt-shock-temp",
            front: "Prevent Hypothermia",
            back: "Cold blood doesn't clot well. Cold hearts get arrhythmias. Cover the patient, warm the ambulance, remove wet clothing. Temperature is a vital sign—and it's one you can control."
          },
          {
            id: "emt-shock-transport",
            front: "Rapid Transport",
            back: "Definitive care for most shock states is in the hospital—blood products, surgery, vasopressors. Do what you can en route, but don't delay transport for interventions that can wait."
          }
        ]
      }
    ],
    keyPoints: [
      "High-flow O2 for all shock patients",
      "Position based on shock type",
      "Control bleeding aggressively",
      "Prevent hypothermia—it kills",
      "Transport is treatment"
    ]
  },
  {
    id: "emt-shock-quiz",
    title: "Knowledge Check",
    content: `Let's make sure the key concepts are solid.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "emt-shock-q1",
          question: "A patient has a heart rate of 118, cool pale skin, and normal blood pressure. This presentation is:",
          options: [
            "Normal findings",
            "Compensated shock",
            "Decompensated shock",
            "Cardiac arrest"
          ],
          correctIndex: 1,
          explanation: "The body is compensating—tachycardia and vasoconstriction (cool, pale skin) are maintaining blood pressure. This is compensated shock, which is your intervention window. Don't wait for BP to drop—treat now."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-shock-q2",
          question: "Which shock type typically presents with JVD and hypotension?",
          options: [
            "Hypovolemic",
            "Distributive",
            "Cardiogenic or Obstructive",
            "Neurogenic"
          ],
          correctIndex: 2,
          explanation: "JVD (jugular vein distension) means blood is backing up. In cardiogenic shock, the heart can't pump it forward. In obstructive shock, something is blocking flow. Hypovolemic shock has FLAT neck veins—there's not enough volume to back up."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-shock-q3",
          question: "For a patient in hypovolemic shock, the appropriate position is:",
          options: [
            "Sitting upright",
            "Legs elevated",
            "Trendelenburg (head down)",
            "Prone"
          ],
          correctIndex: 1,
          explanation: "Elevating the legs helps return blood to the central circulation, improving preload and cardiac output. This is appropriate for hypovolemic shock. Cardiogenic or respiratory patients should NOT be laid flat—it worsens their condition."
        }
      }
    ]
  },
  {
    id: "emt-shock-wrapup",
    title: "Foundation for Shock Response",
    content: `You now have the foundation for recognizing and managing shock at the EMT level.

**Key Takeaways**
- Shock is inadequate tissue perfusion—not just low blood pressure
- Compensated shock is your intervention window—recognize it early
- The four types (hypovolemic, distributive, cardiogenic, obstructive) have different presentations and considerations
- Your BLS interventions—oxygen, positioning, bleeding control, temperature management—buy critical time

**What's Next**
At the AEMT level, you'll add IV fluid resuscitation and learn to monitor treatment response. The recognition skills you've built here remain essential—you're just adding more tools.

You're building the foundation that keeps patients alive until definitive care. That's not small—that's everything.`,
    keyPoints: [
      "Recognition is the first treatment",
      "Compensated shock is your window",
      "BLS interventions buy time for definitive care"
    ],
    proTip: "The best shock treatment is prevention and early recognition. By the time everyone can see the patient is in shock, you've lost precious time. Train your eyes to see it early."
  }
];

// =====================================================
// AEMT Shock Management Content
// =====================================================

export const aemtShockManagementContent: TopicSection[] = [
  {
    id: "aemt-shock-intro",
    title: "Adding Firepower to Your Response",
    content: `You've mastered shock recognition. Now let's add the tools that change outcomes.

**What's New at AEMT**
- IV access enables volume resuscitation
- Understanding physiology guides fluid decisions
- Monitoring treatment response shapes ongoing care

**Building on Foundations**
Everything you learned at EMT level still applies. Recognition, positioning, oxygen, bleeding control—these don't go away. You're adding layers, not replacing the fundamentals.

**The Big Difference**
IV fluids let you replace what's lost. But more isn't always better. Understanding shock physiology helps you give the right amount to the right patient.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-shock-intro-q1",
          question: "What is the primary new capability that AEMT-level adds to shock management?",
          options: [
            "Surgical intervention",
            "IV access for volume resuscitation",
            "Blood transfusion",
            "Vasopressor administration"
          ],
          correctIndex: 1,
          explanation: "IV access is the key new tool at the AEMT level. It enables volume resuscitation with crystalloid fluids—replacing what's lost in hypovolemic shock. Blood transfusion and vasopressors are typically hospital-level interventions."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-shock-intro-q2",
          question: "When treating shock as an AEMT, your EMT-level skills:",
          options: [
            "Are no longer relevant",
            "Are replaced by advanced interventions",
            "Remain essential as the foundation",
            "Should only be used as a last resort"
          ],
          correctIndex: 2,
          explanation: "EMT fundamentals—recognition, positioning, oxygen, bleeding control—remain essential. AEMT skills add layers on top of these foundations, not replacements. You're building up, not starting over."
        }
      }
    ],
    keyPoints: [
      "IV access enables volume resuscitation",
      "Physiology guides treatment decisions",
      "EMT fundamentals remain essential"
    ]
  },
  {
    id: "shock-physiology",
    title: "Shock Physiology – Why Cells Die",
    content: `Let's go deeper into why shock kills. This understanding guides your treatment intensity.

**The Oxygen Delivery Equation**
DO₂ = Cardiac Output × Oxygen Content

Cells need oxygen delivery. That depends on how much blood the heart pumps (cardiac output) and how much oxygen is in that blood (hemoglobin saturation). If either drops, cells suffer.

**The Compensatory Cascade**
When perfusion drops, the body responds:
1. Sympathetic nervous system activation → tachycardia + vasoconstriction
2. RAAS activation → fluid retention + more vasoconstriction
3. Hormonal responses → glucose mobilization

These buy time, but they have limits and costs. Prolonged vasoconstriction causes tissue damage. Eventually, the system fails.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Oxygen Delivery (DO₂)",
            content: "DO₂ = Cardiac Output × Oxygen Content. Both components matter. Low CO (pump problem or volume problem) or low O₂ content (anemia, hypoxia) = inadequate delivery. Your treatments target these variables."
          },
          {
            label: "Compensatory Cascade",
            content: "SNS activation → tachycardia + vasoconstriction. RAAS activation → fluid retention. These mechanisms buy time but have limits and costs. Prolonged compensation causes tissue damage—that's why early intervention matters."
          },
          {
            label: "Cellular Dysfunction",
            content: "Without oxygen: aerobic metabolism stops → anaerobic metabolism kicks in → lactate production → acidosis. Cells lose membrane integrity and ion gradients. Eventually: irreversible damage = cell death = organ failure."
          },
          {
            label: "Shock Progression",
            content: "Compensated → Decompensated → Irreversible. Intervention timing determines outcome. Treat during compensation = high survival. Treat during irreversible = often fatal despite best efforts. Time is tissue."
          }
        ]
      }
    ],
    keyPoints: [
      "DO₂ = CO × CaO₂ guides understanding",
      "Compensation buys time but causes damage",
      "Irreversible shock exists—early treatment prevents it"
    ]
  },
  // Shock Physiology quizzes inserted after the section
  {
    id: "shock-physiology-quiz-inline",
    title: "Shock Physiology – Quick Check",
    content: "Test your understanding of shock physiology.",
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-shock-physio-q1",
          question: "In the oxygen delivery equation DO₂ = CO × CaO₂, what does 'CO' represent?",
          options: [
            "Carbon monoxide",
            "Cardiac output",
            "Cellular oxygenation",
            "Coronary occlusion"
          ],
          correctIndex: 1,
          explanation: "CO stands for cardiac output—the volume of blood the heart pumps per minute. If cardiac output drops (pump failure or volume loss), oxygen delivery to tissues decreases even if oxygen content in the blood is normal."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-shock-physio-q2",
          question: "During compensated shock, the body's sympathetic response causes:",
          options: [
            "Bradycardia and vasodilation",
            "Tachycardia and vasoconstriction",
            "Decreased glucose mobilization",
            "Peripheral vasodilation"
          ],
          correctIndex: 1,
          explanation: "The sympathetic nervous system responds to decreased perfusion with tachycardia (faster heart rate to increase output) and vasoconstriction (narrowing vessels to raise pressure). These buy time but have metabolic costs if prolonged."
        }
      }
    ]
  },
  {
    id: "iv-fluids",
    title: "IV Fluid Resuscitation – Replacing What's Lost",
    content: `IV access changes what you can do. But fluids aren't always the answer—and more isn't always better.

**Crystalloid Selection**
- **Normal Saline (0.9% NaCl)**: Most common. Large volumes can cause hyperchloremic acidosis.
- **Lactated Ringer's**: More physiologic. Avoid in renal failure. Either works in emergencies.

**How Much, How Fast?**
- Initial bolus: 500-1000 mL in adults
- Reassess after each bolus
- Looking for improved perfusion signs—not just BP numbers
- If no response after 2L, consider other causes

**Permissive Hypotension**
In penetrating trauma, aggressive fluid resuscitation may be harmful. High BP can dislodge clots. Target SBP 80-90 until surgical control. "Don't pop the clot."`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "aemt-shock-crystal",
            front: "Crystalloid Choice",
            back: "Normal Saline (0.9% NaCl) or Lactated Ringer's. Both expand intravascular volume. LR is more physiologic but avoid in renal failure (potassium content). Either works in emergency resuscitation."
          },
          {
            id: "aemt-shock-bolus",
            front: "Initial Fluid Bolus",
            back: "Typically 500-1000 mL in adults. Reassess after each bolus. Look for improved perfusion signs—mental status, skin, cap refill—not just BP. More isn't always better."
          },
          {
            id: "aemt-shock-permissive",
            front: "Permissive Hypotension",
            back: "In penetrating trauma, aggressive fluids may increase bleeding by raising BP and 'popping the clot.' Target SBP 80-90 mmHg until surgical control. Don't dilute clotting factors unnecessarily."
          },
          {
            id: "aemt-shock-response",
            front: "Fluid Responsiveness",
            back: "Not everyone improves with fluid. If perfusion doesn't improve after 2L crystalloid, consider: Wrong diagnosis? Ongoing loss faster than replacement? Cardiogenic component? Need for blood or vasopressors?"
          },
          {
            id: "aemt-shock-rate",
            front: "Rate Matters",
            back: "Shock patients need RAPID infusion. Use pressure bags, large-bore IVs (16-18 gauge), or IO access. A slow drip doesn't fix shock—you need volume delivered quickly."
          },
          {
            id: "aemt-shock-overload",
            front: "Watch for Overload",
            back: "Too much fluid → pulmonary edema, especially in cardiogenic shock or elderly patients. Watch for new crackles, worsening dyspnea, decreasing SpO2. Stop fluids and reassess if these appear."
          }
        ]
      }
    ],
    keyPoints: [
      "NS or LR—either works in emergencies",
      "Bolus 500-1000 mL, then reassess",
      "Permissive hypotension in penetrating trauma",
      "No response to 2L = reassess diagnosis"
    ]
  },
  {
    id: "iv-fluids-quiz-inline",
    title: "IV Fluids – Quick Check",
    content: "Test your knowledge of IV fluid resuscitation.",
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-shock-iv-q1",
          question: "What is the typical initial crystalloid bolus for an adult shock patient?",
          options: [
            "100-250 mL",
            "500-1000 mL",
            "2000-3000 mL",
            "5000 mL"
          ],
          correctIndex: 1,
          explanation: "The standard initial bolus is 500-1000 mL for adults. After each bolus, reassess perfusion signs before giving more. Giving too much too fast can cause fluid overload, especially in cardiac patients."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-shock-iv-q2",
          question: "In penetrating trauma, the target systolic BP during permissive hypotension is:",
          options: [
            "120-140 mmHg",
            "100-110 mmHg",
            "80-90 mmHg",
            "60-70 mmHg"
          ],
          correctIndex: 2,
          explanation: "Target SBP 80-90 mmHg in penetrating trauma until surgical control. Higher pressures can dislodge clots ('pop the clot') and dilute clotting factors, worsening hemorrhage."
        }
      }
    ]
  },
  {
    id: "shock-type-management",
    title: "Shock Type-Specific Management – Matching Treatment to Cause",
    content: `Same hypotension, different treatment. The shock type determines your approach.

**The Core Principle**
Identify the cause, then target your treatment. Hypovolemic shock needs volume. Cardiogenic shock may be harmed by it. Getting this wrong can make patients worse.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Hypovolemic Management",
            content: "Find the source and stop it. Replace volume with crystalloid (or blood if available). Goal: restore circulating volume. Most straightforward shock type—volume in, bleeding stopped, patient improves."
          },
          {
            label: "Distributive Management",
            content: "Fluids first—may need 4-6L in sepsis to fill the dilated vascular bed. Vasopressors if fluid-refractory (typically hospital). Treat underlying cause: antibiotics for sepsis, epinephrine IM for anaphylaxis. Container problem + treat the trigger."
          },
          {
            label: "Cardiogenic Management",
            content: "CAUTION with fluids—may worsen pulmonary edema. Small fluid challenge (250 mL) if diagnosis uncertain. Sit patient up. Medications to support pump (hospital level). Consider CPAP if pulmonary edema present."
          },
          {
            label: "Obstructive Management",
            content: "Treat the OBSTRUCTION, not just the symptoms. Tension pneumothorax → needle decompression. Tamponade → pericardiocentesis (hospital). Massive PE → anticoagulation/thrombolytics (hospital). Time-critical—these patients crash fast."
          }
        ]
      }
    ],
    keyPoints: [
      "Hypovolemic: volume replacement + source control",
      "Distributive: fluids first, treat cause",
      "Cardiogenic: cautious with fluids, support pump",
      "Obstructive: relieve the obstruction"
    ]
  },
  {
    id: "shock-type-quiz-inline",
    title: "Shock Type Management – Quick Check",
    content: "Match the treatment to the shock type.",
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-shock-type-q1",
          question: "A patient in anaphylactic shock should receive which medication FIRST?",
          options: [
            "IV normal saline bolus",
            "Epinephrine IM",
            "Diphenhydramine IV",
            "Albuterol nebulizer"
          ],
          correctIndex: 1,
          explanation: "Epinephrine IM is the FIRST-LINE treatment for anaphylaxis. It reverses vasodilation, bronchospasm, and vascular permeability—all three mechanisms of anaphylactic shock. Fluids and other medications are supportive but secondary."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-shock-type-q2",
          question: "Why should you be cautious with large fluid boluses in cardiogenic shock?",
          options: [
            "Fluids cause allergic reactions",
            "The failing heart cannot handle extra volume, worsening pulmonary edema",
            "Crystalloids are contraindicated in cardiac patients",
            "Fluids lower blood pressure further"
          ],
          correctIndex: 1,
          explanation: "In cardiogenic shock, the pump is failing. Adding more volume to a failing pump causes backup into the lungs (pulmonary edema). Use small fluid challenges (250 mL) with careful reassessment instead of large boluses."
        }
      }
    ]
  },
  {
    id: "monitoring-response",
    title: "Monitoring Response – Did It Work?",
    content: `Treatment isn't complete when you give the fluid. You need to assess response.

**Perfusion Endpoints**
- Mental status improvement (brain getting blood)
- Skin warming, improving color
- Capillary refill < 2 seconds
- Heart rate decreasing toward normal
- Blood pressure stabilizing

**Vital Sign Trending**
Single numbers can mislead. Trends tell the truth. Is heart rate decreasing? Is pulse pressure widening? Is the patient more alert? Document times and values to see the trajectory.

**When to Escalate**
If perfusion doesn't improve after 2-3L crystalloid, the patient is "fluid-refractory." Consider:
- Wrong diagnosis
- Ongoing loss faster than replacement
- Cardiogenic component
- Need for blood products
- Need for vasopressors (hospital)`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "aemt-shock-mental",
            front: "Mental Status Improvement",
            back: "Best early indicator of improved perfusion. Brain gets blood, patient becomes more alert and oriented. If mentation worsens despite treatment, your intervention isn't working—escalate."
          },
          {
            id: "aemt-shock-skin-imp",
            front: "Skin Improvement",
            back: "Warming, improving color, capillary refill < 2 seconds. Peripheral perfusion returning means the body is de-shunting blood from core back to periphery—a good sign."
          },
          {
            id: "aemt-shock-trends",
            front: "Vital Sign Trends",
            back: "Single numbers can lie. Trends tell truth. HR decreasing, BP stabilizing, pulse pressure widening = improvement. Document times so you can see the trajectory."
          },
          {
            id: "aemt-shock-lactate",
            front: "Lactate Clearance",
            back: "Hospital-based measure, but understand the concept. Decreasing lactate indicates cells are getting oxygen again and returning to aerobic metabolism. Gold standard for resuscitation adequacy."
          },
          {
            id: "aemt-shock-refractory",
            front: "Fluid-Refractory Shock",
            back: "Not responding to 2-3L crystalloid? Consider: wrong diagnosis, ongoing loss, cardiogenic component, or need for blood/vasopressors. Escalate care—this patient needs more than fluids."
          }
        ]
      }
    ],
    keyPoints: [
      "Monitor perfusion endpoints, not just BP",
      "Trends reveal trajectory",
      "Fluid-refractory = escalate care"
    ]
  },
  {
    id: "monitoring-response-quiz-inline",
    title: "Monitoring Response – Quick Check",
    content: "Check your understanding of treatment monitoring.",
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-shock-monitor-q1",
          question: "Which is the BEST early indicator that fluid resuscitation is improving perfusion?",
          options: [
            "Blood pressure number alone",
            "Improved mental status",
            "Amount of fluid given",
            "Heart rate alone"
          ],
          correctIndex: 1,
          explanation: "Improved mental status is the best early indicator—when the brain gets adequate blood flow, the patient becomes more alert and oriented. BP and HR are important but can be misleading individually. Perfusion endpoints (mentation, skin, cap refill) paint the real picture."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-shock-monitor-q2",
          question: "A patient who does not improve after 2-3 liters of crystalloid is considered:",
          options: [
            "Adequately resuscitated",
            "Fluid-refractory",
            "In compensated shock",
            "Responding normally"
          ],
          correctIndex: 1,
          explanation: "Fluid-refractory shock means the patient isn't responding to crystalloid resuscitation. Consider wrong diagnosis, ongoing loss faster than replacement, cardiogenic component, or need for blood products/vasopressors. Escalate care."
        }
      }
    ]
  },
  {
    id: "aemt-clinical-scenarios",
    title: "Clinical Scenarios – Application",
    content: `Let's apply shock management to real scenarios.

**Scenario 1: Hemorrhagic Shock**
25-year-old with stab wound to thigh, tourniquet applied, HR 124, BP 88/60, cool pale skin.
→ Large-bore IV, rapid crystalloid bolus (1L), reassess. Continue fluids if responding. Rapid transport—this patient needs blood and surgery.

**Scenario 2: Septic Shock**
72-year-old from nursing home, fever, altered mental status, HR 110, BP 84/52, warm flushed skin.
→ Suspect sepsis. IV access, 30 mL/kg crystalloid (for 70kg patient = ~2L). May need more. Early notification to hospital. This patient needs antibiotics and possibly vasopressors.

**Scenario 3: Anaphylactic Shock**
35-year-old with bee sting, hives, wheezing, HR 130, BP 76/50.
→ Epinephrine IM (0.3-0.5 mg) FIRST. IV access, fluid bolus. Repeat epi if needed. This is distributive shock with an obvious trigger—epinephrine is the priority.

**The Integration**
Each scenario requires: recognize the type → apply appropriate treatment → monitor response → adjust or escalate.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-shock-scenario-q1",
          question: "A 25-year-old with a stab wound, tourniquet applied, HR 124, BP 88/60. After a 1L crystalloid bolus, what is the priority?",
          options: [
            "Remove the tourniquet",
            "Reassess perfusion and provide rapid transport for surgical control",
            "Give 3 more liters of crystalloid",
            "Wait for vital signs to normalize before transport"
          ],
          correctIndex: 1,
          explanation: "This patient needs blood products and surgical bleeding control. Reassess after the initial bolus and transport rapidly. More crystalloid alone won't fix ongoing hemorrhage—it dilutes clotting factors without restoring oxygen-carrying capacity."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-shock-scenario-q2",
          question: "A septic patient requires approximately how much initial crystalloid per the 30 mL/kg guideline for a 70 kg patient?",
          options: [
            "500 mL",
            "1000 mL",
            "2100 mL",
            "4000 mL"
          ],
          correctIndex: 2,
          explanation: "30 mL/kg × 70 kg = 2,100 mL. Septic shock causes massive vasodilation, requiring large volumes to fill the dilated vascular bed. This initial fluid bolus is critical and may need to be followed by more based on reassessment."
        }
      }
    ],
    keyPoints: [
      "Hemorrhagic: stop bleeding + volume + rapid transport",
      "Septic: early fluids + notification for antibiotics",
      "Anaphylactic: epinephrine first + fluids"
    ]
  },
  {
    id: "aemt-shock-quiz",
    title: "Knowledge Check",
    content: `Apply your AEMT-level shock management knowledge.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-shock-q1",
          question: "A trauma patient remains hypotensive after 2L of crystalloid. Your next consideration should be:",
          options: [
            "Give 2 more liters of crystalloid",
            "Blood products and surgical intervention needed",
            "Switch to a different crystalloid type",
            "Slow down the infusion rate"
          ],
          correctIndex: 1,
          explanation: "Crystalloid replaces volume but not oxygen-carrying capacity. If hemorrhage continues and 2L doesn't stabilize the patient, they need blood products and surgical bleeding control—not more clear fluid that dilutes clotting factors."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-shock-q2",
          question: "Why might aggressive fluid resuscitation be harmful in penetrating trauma?",
          options: [
            "Crystalloids commonly cause allergic reactions",
            "High volume dilutes clotting factors and raises pressure on clots",
            "IV fluids are completely contraindicated in trauma",
            "Fluids interfere with wound healing"
          ],
          correctIndex: 1,
          explanation: "'Popping the clot'—aggressive resuscitation dilutes clotting factors and raises BP enough to dislodge clots that formed. Permissive hypotension (SBP 80-90) is preferred in penetrating trauma until surgical control."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-shock-q3",
          question: "A patient with suspected CHF presents with hypotension and crackles. You should:",
          options: [
            "Bolus 1L normal saline rapidly",
            "Give a small fluid challenge (250mL) and reassess",
            "Start a vasopressor drip immediately",
            "Withhold all IV fluids"
          ],
          correctIndex: 1,
          explanation: "Cardiogenic shock is tricky—the patient may need some preload, but too much worsens pulmonary edema. A small fluid challenge (250mL) with careful reassessment guides further treatment. Watch for worsening crackles or dyspnea."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-shock-q4",
          question: "What is 'permissive hypotension' in penetrating trauma?",
          options: [
            "Allowing BP to drop to zero",
            "Targeting SBP 80-90 to avoid dislodging clots",
            "Giving no IV fluids whatsoever",
            "Raising BP as high as possible"
          ],
          correctIndex: 1,
          explanation: "In penetrating trauma, aggressive fluid resuscitation raises BP, dilutes clotting factors, and can dislodge forming clots—'popping the clot.' Target SBP 80-90 until surgical hemorrhage control. Enough to perfuse organs, not enough to worsen bleeding."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-shock-q5",
          question: "After a 1L fluid bolus, the BEST indicator of improvement is:",
          options: [
            "Blood pressure number alone",
            "Improved mental status and warming skin",
            "The fluid bag is empty",
            "Heart rate unchanged"
          ],
          correctIndex: 1,
          explanation: "Perfusion endpoints (mental status, skin perfusion, capillary refill) are better indicators than BP alone. Improved mentation means the brain is getting blood. Warming skin means the body is de-shunting blood back to the periphery."
        }
      }
    ]
  },
  {
    id: "aemt-shock-wrapup",
    title: "Advanced Shock Response",
    content: `You've added powerful tools to your shock management capabilities.

**What You've Gained**
- IV fluid resuscitation with appropriate volume and endpoints
- Shock type-specific treatment approaches
- Monitoring response to guide ongoing care
- Recognition of fluid-refractory states

**The Integration**
EMT recognition + AEMT intervention = more lives saved. You're not just recognizing shock—you're treating it.

**What's Next**
At the paramedic level, you'll add vasopressor therapy and advanced hemodynamic concepts. When fluids aren't enough, pharmacology provides the next tier of support.

You're building the skills that bridge the gap between recognition and definitive care. That gap is where patients are saved.`,
    keyPoints: [
      "IV fluids enable volume resuscitation",
      "Match treatment to shock type",
      "Monitor response—trends matter",
      "Recognize when fluids aren't enough"
    ],
    proTip: "The best shock treatment is still early recognition. All the fluids in the world can't undo hours of tissue ischemia. Stay vigilant, intervene early, and know when to escalate."
  }
];

// =====================================================
// Paramedic Shock Management Content
// =====================================================

export const paramedicShockManagementContent: TopicSection[] = [
  {
    id: "para-shock-intro",
    title: "Mastering Hemodynamic Support",
    content: `Welcome to paramedic-level shock management. This is where pathophysiology meets pharmacology.

**What's New at Paramedic Level**
- Vasopressor and inotrope therapy
- Advanced hemodynamic reasoning
- Clinical decision-making for refractory shock
- Understanding microcirculatory dysfunction

**Building on Foundations**
Everything from EMT and AEMT remains essential. Recognition, fluid resuscitation, type differentiation—you're adding the next tier of intervention, not replacing what you've learned.

**The Challenge**
Some patients don't respond to fluids. Some patients need pump support, not vasoconstriction. Choosing the right pharmacologic intervention requires understanding the hemodynamic problem you're treating.`,
    keyPoints: [
      "Vasopressors for fluid-refractory shock",
      "Hemodynamic reasoning guides drug selection",
      "Advanced pathophysiology connects to treatment"
    ]
  },
  {
    id: "advanced-pathophysiology",
    title: "Advanced Shock Pathophysiology – The Cellular Catastrophe",
    content: `Let's go beyond compensated and decompensated to understand what's happening at the tissue level.

**Microcirculatory Dysfunction**
Even with restored blood pressure, the microcirculation can fail. Capillary plugging, endothelial damage, and maldistribution of flow mean tissues don't get perfused despite "normal" vital signs.

**Inflammatory Cascades**
Sepsis triggers massive inflammatory response. Cytokine storm causes vasodilation, capillary leak, and myocardial depression. Treating the infection alone isn't enough—you're fighting the body's own response.

**Multi-Organ Failure**
When shock persists, organs fail sequentially. Kidneys first (oliguria), then liver (coagulopathy), then lungs (ARDS). Prevention is better than treatment—by the time multiple organs are failing, prognosis is poor.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Microcirculatory Dysfunction",
            content: "Even with restored MAP, the microcirculation can fail. Capillary plugging from cellular debris, endothelial damage allowing leak, maldistribution of flow. This explains why some patients die despite 'normal' vitals—macro looks okay, micro is failing."
          },
          {
            label: "Inflammatory Cascades",
            content: "Sepsis triggers massive inflammatory response. Cytokine storm → vasodilation + capillary leak + myocardial depression. It's not just the infection killing the patient—it's the body's response. Treating infection alone isn't enough."
          },
          {
            label: "Multi-Organ Failure",
            content: "Sequential organ failure = poor prognosis. Kidneys fail first (watch urine output), then liver (coagulopathy develops), then lungs (ARDS). Prevention beats treatment—once multiple organs are failing, mortality exceeds 50%."
          },
          {
            label: "Lactate as Marker",
            content: "Lactate reflects anaerobic metabolism—cells not getting oxygen. > 4 mmol/L = severe shock. Trending lactate guides resuscitation. Lactate clearance > 10%/hour predicts survival. Falling lactate = tissues perfusing again."
          }
        ]
      }
    ],
    keyPoints: [
      "Microcirculation can fail despite normal MAP",
      "Inflammatory response causes additional damage",
      "Multi-organ failure has high mortality",
      "Lactate trends guide resuscitation"
    ]
  },
  {
    id: "vasopressor-therapy",
    title: "Vasopressor Therapy – Pharmacologic Hemodynamics",
    content: `When fluids aren't enough, vasopressors restore vascular tone. Choosing the right agent requires understanding the hemodynamic problem.

**When to Start**
- Fluid-refractory hypotension (MAP < 65 despite adequate fluids)
- Cardiogenic physiology suspected (fluids may harm)
- Imminent cardiovascular collapse (don't wait)

**First-Line Agents**
- **Norepinephrine**: First-line for septic shock. Potent α₁ with some β₁.
- **Epinephrine**: First-line for anaphylaxis and cardiac arrest. Strong α + β.
- **Vasopressin**: Adjunct in refractory sepsis. Pure V1 agonist.

**Push-Dose Pressors**
Diluted epinephrine (10-20 mcg/mL) for hypotension emergencies. Bridge to infusion. Requires careful preparation. For imminent arrest—buys time to set up drips.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "para-shock-indication",
            front: "Vasopressor Indications",
            back: "Start when fluid-refractory OR cardiogenic physiology suspected. Target MAP ≥ 65 mmHg (higher for chronic hypertension). Don't delay vasopressors while 'finishing' fluids if patient is crashing—start them early if indicated."
          },
          {
            id: "para-shock-norepi",
            front: "Norepinephrine",
            back: "First-line for septic shock. Potent α₁ (vasoconstriction) + some β₁ (cardiac output). Increases SVR and MAP. Typical start: 0.1-0.3 mcg/kg/min, titrate to MAP goal. Most septic shock responds to norepi."
          },
          {
            id: "para-shock-epi",
            front: "Epinephrine",
            back: "First-line for anaphylaxis and cardiac arrest. Strong α₁ + β₁ + β₂ effects. Increases SVR, HR, contractility; causes bronchodilation. More cardiac stimulation than norepinephrine—useful when cardiac output is the issue."
          },
          {
            id: "para-shock-vaso",
            front: "Vasopressin",
            back: "V1 receptor agonist—pure vasoconstriction without cardiac stimulation. Adjunct to norepinephrine in refractory sepsis. Fixed dose (0.03-0.04 units/min)—you don't titrate it. Preserves norepi-depleted stores."
          },
          {
            id: "para-shock-push",
            front: "Push-Dose Epinephrine",
            back: "Diluted epinephrine (10-20 mcg/mL) for hypotension emergencies. Give 5-20 mcg boluses. Bridge to infusion when drip isn't ready. Requires careful preparation to avoid dosing errors. For imminent cardiovascular collapse."
          },
          {
            id: "para-shock-harm",
            front: "Avoiding Vasopressor Harm",
            back: "Vasoconstrictors increase afterload—may worsen output in cardiogenic shock. Excessive vasoconstriction causes peripheral ischemia (check extremities). Use minimum effective dose to achieve targets. Pressors aren't benign—they're powerful tools requiring careful use."
          }
        ]
      }
    ],
    keyPoints: [
      "Norepinephrine: first-line septic shock",
      "Epinephrine: anaphylaxis, cardiac arrest",
      "Vasopressin: adjunct in refractory sepsis",
      "Push-dose: bridge to infusion"
    ]
  },
  {
    id: "cardiogenic-obstructive",
    title: "Cardiogenic and Obstructive Shock – When the Pump Fails",
    content: `Cardiogenic and obstructive shock require different thinking. Vasoconstriction isn't always the answer.

**Cardiogenic Shock**
The pump is failing. Low cardiac output → blood backs up → pulmonary edema AND hypotension. Fluids worsen congestion. Vasoconstrictors increase afterload, making it harder to pump.

**The Inotrope Solution**
Dobutamine (β₁ agonist) increases contractility and cardiac output. It supports the pump rather than squeezing the pipes. Sometimes you need both—dobutamine for pump support + norepinephrine for vascular tone.

**Obstructive Shock**
The obstruction must be relieved. Fluids and pressors can't overcome mechanical blockage. Time-critical interventions needed.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Cardiogenic Physiology",
            content: "Pump failure → low CO → blood backs up → pulmonary edema AND hypotension. The problem is the pump, not the pipes. Fluids worsen congestion. Pure vasoconstrictors increase afterload, making it harder for the failing heart to eject."
          },
          {
            label: "Dobutamine",
            content: "β₁ agonist inotrope. Increases contractility and CO without significant vasoconstriction. May cause some vasodilation (β₂). Good for cardiogenic shock when SVR isn't the primary problem. Typical dose: 2-20 mcg/kg/min, titrate to effect."
          },
          {
            label: "Inotrope + Vasopressor",
            content: "Sometimes you need both: dobutamine for pump support + norepinephrine for vascular tone. Cardiogenic shock with severe hypotension may need combination therapy. The goal is adequate CO AND adequate SVR for perfusion."
          },
          {
            label: "Obstructive Emergencies",
            content: "Tension pneumothorax: needle decompression—14g needle, 2nd intercostal space, midclavicular line. Cardiac tamponade: pericardiocentesis if trained. Massive PE: thrombolytics considered in cardiac arrest. Relieve the obstruction—pressors won't overcome mechanical blockage."
          }
        ]
      }
    ],
    keyPoints: [
      "Cardiogenic: pump problem, not pipe problem",
      "Dobutamine supports the pump",
      "May need inotrope + vasopressor combination",
      "Obstructive: relieve the obstruction"
    ]
  },
  {
    id: "map-hemodynamics",
    title: "MAP, Hemodynamics, and Endpoints – Titrating to Goals",
    content: `Understanding the MAP equation guides treatment selection.

**The Equation**
MAP = Cardiac Output × Systemic Vascular Resistance

Low MAP means either low CO or low SVR (or both). Treatment depends on which is the problem.
- **Septic shock**: Low SVR (vasodilation) → vasoconstrictors
- **Cardiogenic shock**: Low CO (pump failure) → inotropes

**Hemodynamic Targets**
- MAP ≥ 65 mmHg (higher for chronic hypertension)
- Lactate clearance > 10%/hour
- Urine output > 0.5 mL/kg/hr
- Mental status improvement

**Balancing Act**
Higher isn't always better. Excessive vasoconstriction causes ischemia. Excessive inotropic support causes arrhythmias. Use minimum effective doses to achieve physiologic goals.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "para-shock-map",
            front: "MAP Equation",
            back: "MAP = CO × SVR. Low MAP means either low cardiac output or low systemic vascular resistance (or both). Treatment depends on which is the problem—that's why assessment matters."
          },
          {
            id: "para-shock-65",
            front: "Why MAP ≥ 65?",
            back: "Below MAP 65, autoregulation of coronary and cerebral perfusion starts to fail. Vital organs become pressure-dependent—they can't maintain their own perfusion. Target higher (80) for chronic hypertension patients whose autoregulation has reset."
          },
          {
            id: "para-shock-co-svr",
            front: "CO vs. SVR Problem",
            back: "Septic shock = low SVR (vasodilation) → vasoconstrictors help. Cardiogenic shock = low CO (pump failure) → inotropes help. Same hypotension, different treatments. Your assessment tells you which."
          },
          {
            id: "para-shock-lactate-goal",
            front: "Lactate Clearance Goal",
            back: "Target > 10% decrease in lactate every 2 hours. Falling lactate = tissues getting oxygen = resuscitation working. Rising lactate despite treatment = failing—reassess strategy, consider additional interventions."
          },
          {
            id: "para-shock-uop",
            front: "Urine Output Target",
            back: "> 0.5 mL/kg/hr indicates adequate renal perfusion. Oliguria despite resuscitation = kidneys not perfusing = escalate care or reassess approach. Kidneys are sensitive perfusion monitors."
          }
        ]
      }
    ],
    keyPoints: [
      "MAP = CO × SVR guides treatment",
      "Target MAP ≥ 65 (higher for chronic HTN)",
      "Lactate clearance indicates tissue oxygenation",
      "Use minimum effective doses"
    ]
  },
  {
    id: "para-clinical-integration",
    title: "Clinical Integration – Complex Scenarios",
    content: `Let's apply advanced shock management to complex cases.

**Scenario 1: Septic Shock**
68-year-old with UTI, fever, AMS, HR 118, BP 72/48 despite 2L crystalloid.
→ This is fluid-refractory septic shock. Start norepinephrine (0.1 mcg/kg/min), titrate to MAP 65. Continue fluids. Early hospital notification for source control and antibiotics. Target lactate clearance.

**Scenario 2: Post-Arrest Shock**
55-year-old with ROSC after VF arrest, BP 68/40, HR 100, cool extremities.
→ Post-arrest shock has multiple components: myocardial stunning + vasodilation + possible ongoing ischemia. Consider norepinephrine for pressure support. May need dobutamine if CO remains low. Targeted temperature management. 12-lead for STEMI.

**Scenario 3: Undifferentiated Shock**
45-year-old found down, AMS, HR 130, BP 80/60, mixed exam findings.
→ Systematic approach: check for hemorrhage (none obvious), lung sounds (clear), JVD (absent), skin (cool pale). Likely distributive or hypovolemic. Start fluids, prepare pressors, transport while gathering more history. Let the response guide diagnosis.

**The Integration**
Every case requires: assess → form hypothesis → intervene → monitor response → adjust. The complexity increases, but the systematic approach remains constant.`,
    keyPoints: [
      "Septic shock: fluids + norepinephrine + source control",
      "Post-arrest: multi-component shock requiring combined approach",
      "Undifferentiated: systematic assessment + empiric treatment"
    ]
  },
  {
    id: "para-shock-quiz",
    title: "Knowledge Check",
    content: `Apply paramedic-level shock management reasoning.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "para-shock-q1",
          question: "A patient with sepsis remains hypotensive (MAP 52) after 30 mL/kg crystalloid. The first-line vasopressor is:",
          options: [
            "Dopamine",
            "Epinephrine",
            "Norepinephrine",
            "Vasopressin"
          ],
          correctIndex: 2,
          explanation: "Norepinephrine is first-line for septic shock per current guidelines. Its α₁ effects increase SVR (the primary problem in sepsis—vasodilation), with some β₁ for cardiac output support. Vasopressin is adjunctive, not first-line. Dopamine has fallen out of favor due to arrhythmias."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-shock-q2",
          question: "MAP = 60 mmHg in a patient with cardiogenic shock. Which medication targets the underlying problem?",
          options: [
            "Norepinephrine",
            "Dobutamine",
            "Phenylephrine",
            "Vasopressin"
          ],
          correctIndex: 1,
          explanation: "Cardiogenic shock is a pump problem (low CO), not primarily a vascular resistance problem. Dobutamine (β₁ agonist) increases contractility and cardiac output. Pure vasoconstrictors would increase afterload and make it harder for the failing heart to pump—potentially worsening the situation."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-shock-q3",
          question: "A patient on norepinephrine develops worsening lactate and mottled skin despite MAP 70. This suggests:",
          options: [
            "Need higher MAP target",
            "Microcirculatory dysfunction despite adequate macrocirculation",
            "Norepinephrine allergy",
            "The patient is improving"
          ],
          correctIndex: 1,
          explanation: "Adequate MAP doesn't guarantee tissue perfusion. Microcirculatory dysfunction—capillary plugging, endothelial damage, maldistribution of flow—can persist even with normal blood pressure. Rising lactate + mottling despite MAP goals indicates the resuscitation strategy needs reassessment."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-shock-q4",
          question: "Push-dose epinephrine is used in shock management to:",
          options: [
            "Replace IV fluid therapy",
            "Bridge hemodynamic support until a vasopressor drip is established",
            "Treat allergic reactions only",
            "Reduce heart rate"
          ],
          correctIndex: 1,
          explanation: "Push-dose epinephrine (10-20 mcg boluses of diluted epi) provides immediate hemodynamic support when a patient is crashing and a vasopressor drip isn't ready yet. It buys critical minutes by raising blood pressure through vasoconstriction and cardiac stimulation."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-shock-q5",
          question: "A patient in cardiogenic shock has MAP 55 despite fluids. Which medication combination targets the underlying problem?",
          options: [
            "Two vasopressors for maximum vasoconstriction",
            "Dobutamine for pump support plus norepinephrine for vascular tone",
            "High-dose fluids to increase preload",
            "Vasopressin alone"
          ],
          correctIndex: 1,
          explanation: "Cardiogenic shock is a pump problem (low CO). Dobutamine increases contractility while norepinephrine maintains vascular tone. Together they address both components—supporting the failing pump while maintaining adequate perfusion pressure."
        }
      }
    ]
  },
  {
    id: "para-shock-wrapup",
    title: "Shock Mastery Achieved",
    content: `You've completed shock management across all three certification levels.

**The Complete Picture**

**EMT Foundation**
Recognition, compensated vs. decompensated, four shock types, BLS interventions. The fundamentals that save lives before advanced care arrives.

**AEMT Enhancement**
IV fluid resuscitation, type-specific management, monitoring treatment response, recognizing fluid-refractory states. Adding firepower while maintaining fundamentals.

**Paramedic Mastery**
Vasopressor therapy, inotropic support, hemodynamic reasoning, advanced pathophysiology. Connecting cellular dysfunction to pharmacologic intervention.

**The Integration**
Every level builds on the previous. EMT recognition drives AEMT fluid decisions drives paramedic pharmacologic choices. The skills compound—they don't replace each other.

**You're Ready**
For the septic patient crashing despite fluids, for the cardiogenic shock requiring careful balance, for the undifferentiated hypotension requiring systematic reasoning—you have the knowledge and framework to guide your care.

That's shock mastery.`,
    keyPoints: [
      "Recognition → Fluids → Pharmacology: the progression",
      "Each level builds on the previous",
      "Hemodynamic reasoning guides treatment selection"
    ],
    proTip: "The best shock treatment remains early recognition. No amount of vasopressors can undo prolonged cellular ischemia. Stay vigilant, intervene early, and remember—the fundamentals never stop mattering."
  }
];

// =====================================================
// EMT Pathophysiology Introduction Content
// =====================================================

export const emtPathophysiologyContent: TopicSection[] = [
  {
    id: "why-things-go-wrong",
    title: "Why Things Go Wrong",
    content: `Pathophysiology is the bridge between what you learned in anatomy and physiology and what you'll see in the field. It answers the most important question: **why?**

Why is your patient's heart racing? Why is their skin pale and cool? Why are they confused? Every sign and symptom has an underlying mechanism — and understanding that mechanism makes you a better EMT.

**This isn't just theory — it's practical.**
When you understand WHY a patient is tachycardic (their body is compensating for blood loss), your assessment becomes purposeful. You're not just checking boxes on a form — you're solving a puzzle.

Pathophysiology turns pattern recognition into clinical understanding. And that understanding gives you confidence when things get chaotic.`,
    keyPoints: [
      "Pathophysiology explains the 'why' behind patient presentations",
      "Understanding mechanisms makes your assessment purposeful",
      "This knowledge builds the foundation for recognizing patterns in the field"
    ],
    proTip: "Every experienced paramedic you admire started by understanding these basics. This is where clinical thinking begins."
  },
  {
    id: "what-is-pathophysiology",
    title: "What Is Pathophysiology?",
    content: `Pathophysiology is the study of how diseases and injuries disrupt normal body function. Your body constantly maintains **homeostasis** — a stable internal environment. When something disrupts that balance, pathophysiology explains what happens next.

Think of your body as a city with multiple systems: power (cardiovascular), waste management (renal), communications (nervous), defense (immune). When one system fails, others compensate — but there are limits.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Normal Function",
            content: "Your body maintains homeostasis — a stable internal environment. Temperature, pH, blood sugar, oxygen levels — all tightly regulated within narrow ranges. When these systems work properly, you feel fine. Thousands of chemical reactions happen every second to keep everything balanced."
          },
          {
            label: "Disease Process",
            content: "Disease disrupts homeostasis. Infection introduces pathogens that damage tissue. Diabetes disrupts glucose regulation. Heart failure impairs the pump. Each disease attacks a specific system, but the effects ripple outward to affect everything."
          },
          {
            label: "Injury Response",
            content: "Trauma disrupts structure. Broken bones lose mechanical support. Bleeding loses circulating volume. Burns destroy the skin barrier. The body responds predictably to each type of injury — and those responses create the signs and symptoms you assess."
          },
          {
            label: "Why EMTs Need This",
            content: "When you understand WHY a patient is tachycardic (compensating for volume loss), your assessment becomes purposeful. You're not just checking boxes — you're solving a puzzle. Pathophysiology transforms you from a technician following protocols into a clinician who understands the patient."
          }
        ]
      }
    ],
    keyPoints: [
      "Homeostasis is the body's constant fight for internal balance",
      "Disease, injury, and genetics can all disrupt homeostasis",
      "Understanding mechanisms transforms protocol-following into clinical thinking"
    ]
  },
  {
    id: "cellular-injury",
    title: "Cellular Injury and Death",
    content: `Every patient presentation starts at the cellular level. Cells need three things to survive: **oxygen, glucose, and waste removal**. When any of these fail, a predictable cascade begins.

The progression from healthy to dead follows a pattern: **hypoxia → ischemia → infarction**. Understanding this cascade — and where it becomes irreversible — explains why time-critical interventions matter so much.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "emt-patho-hypoxia",
            front: "Hypoxia",
            back: "Cells not getting enough oxygen. Can be caused by airway obstruction, respiratory failure, or poor circulation. Cells can survive temporarily by switching to less efficient energy production (anaerobic metabolism)."
          },
          {
            id: "emt-patho-ischemia",
            front: "Ischemia",
            back: "Blood flow to tissue is reduced or blocked. Combines oxygen deprivation WITH waste buildup. More damaging than hypoxia alone because toxins accumulate. Think: heart attack, stroke."
          },
          {
            id: "emt-patho-infarction",
            front: "Infarction",
            back: "Tissue death from prolonged ischemia. Irreversible — those cells are gone. Time matters: 'time is muscle' in heart attacks, 'time is brain' in strokes. This is why rapid transport matters."
          },
          {
            id: "emt-patho-necrosis",
            front: "Necrosis",
            back: "Cell death from external injury — trauma, toxins, infection. The cell breaks apart and causes inflammation. This is why infected wounds get red, swollen, and hot."
          },
          {
            id: "emt-patho-apoptosis",
            front: "Apoptosis",
            back: "Programmed cell death — the body's cleanup crew. Normal and healthy. Old cells retire to make room for new ones. Not caused by injury — it's scheduled maintenance."
          },
          {
            id: "emt-patho-reversible",
            front: "Reversible vs. Irreversible Injury",
            back: "Early injury: cells swell but can recover if the cause is fixed. Late injury: cell membranes break down, organelles fail. Once irreversible, the cell dies. Your interventions buy time in the reversible window."
          }
        ]
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-patho-cell-q1",
          question: "The progression from reduced oxygen to cell death follows which sequence?",
          options: [
            "Infarction → ischemia → hypoxia",
            "Hypoxia → ischemia → infarction",
            "Necrosis → apoptosis → inflammation",
            "Inflammation → ischemia → hypoxia"
          ],
          correctIndex: 1,
          explanation: "The cellular death cascade progresses: hypoxia (reduced oxygen) → ischemia (reduced blood flow + waste buildup) → infarction (irreversible tissue death). Understanding this sequence explains why time-critical interventions matter."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-patho-cell-q2",
          question: "'Time is muscle' in heart attacks refers to which concept?",
          options: [
            "Exercise prevents heart attacks",
            "Prolonged ischemia leads to irreversible infarction",
            "The heart is a voluntary muscle",
            "Heart attacks only occur during physical activity"
          ],
          correctIndex: 1,
          explanation: "Every minute without blood flow means more cardiac muscle dies (infarction). Rapid transport and reperfusion can save tissue that's ischemic but not yet dead—the reversible injury window."
        }
      }
    ],
    keyPoints: [
      "Cells need oxygen, glucose, and waste removal to survive",
      "Hypoxia → ischemia → infarction is the progression of cellular death",
      "Your interventions buy time in the reversible injury window"
    ],
    rememberThis: "The difference between reversible and irreversible injury is TIME. That's why rapid recognition and intervention matter — you're racing the cellular clock."
  },
  {
    id: "defense-mechanisms",
    title: "The Body's Defense Mechanisms",
    content: `Your body doesn't take injury and infection lying down. It fights back with three main defense mechanisms: **inflammation, immune response, and fever**. These are usually protective — but sometimes they cause more harm than the original threat.

Understanding these defenses helps you interpret patient presentations. Redness, swelling, and fever aren't always bad — they're often signs that the body is doing its job.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Inflammation",
            content: "The body's alarm system. When tissue is damaged, blood vessels dilate (causing redness and heat), become leaky (causing swelling), and white blood cells arrive to fight invaders and clean up debris. Pain signals you to protect the injured area. These are the four cardinal signs: redness, heat, swelling, pain."
          },
          {
            label: "Immune Response",
            content: "White blood cells are the body's EMS system. Neutrophils arrive first (like first responders on scene), then macrophages clean up (like the hazmat team). Antibodies are created to remember invaders for next time — this is how vaccines work."
          },
          {
            label: "Fever",
            content: "Not just a symptom — it's a weapon. Higher body temperature speeds up immune cell activity and slows down many pathogens. Low-grade fever is the body actively fighting an infection. Very high fever (>104°F) becomes dangerous itself, potentially causing seizures and protein damage."
          },
          {
            label: "When Defenses Fail",
            content: "Sometimes the defense causes more harm than the attacker. Anaphylaxis is the immune system's massive overreaction to an allergen. Sepsis is inflammation gone system-wide, damaging organs. Autoimmune diseases like lupus attack the body's own tissue. The defense becomes the disease."
          }
        ]
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-patho-defense-q1",
          question: "The four cardinal signs of inflammation are:",
          options: [
            "Fever, chills, fatigue, nausea",
            "Redness, heat, swelling, pain",
            "Cough, congestion, sore throat, fatigue",
            "Pallor, diaphoresis, tachycardia, hypotension"
          ],
          correctIndex: 1,
          explanation: "Redness (rubor), heat (calor), swelling (tumor), and pain (dolor) are the four cardinal signs of inflammation. These result from vasodilation, increased vascular permeability, and immune cell migration to the injury site."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-patho-defense-q2",
          question: "A fever of 101°F in a patient with an infection indicates:",
          options: [
            "The infection is life-threatening",
            "The body is actively fighting the infection",
            "Antibiotics have failed",
            "The patient needs immediate cooling"
          ],
          correctIndex: 1,
          explanation: "Low-grade fever is the body's weapon—higher temperature speeds up immune cell activity and slows many pathogens. It's a sign the immune system is working. Very high fever (>104°F) becomes dangerous itself, but moderate fever is protective."
        }
      }
    ],
    keyPoints: [
      "Inflammation is protective: redness, heat, swelling, pain",
      "The immune system has first responders (neutrophils) and cleanup crews (macrophages)",
      "Defenses can become the disease: anaphylaxis, sepsis, autoimmune"
    ]
  },
  {
    id: "disease-mechanisms",
    title: "Common Disease Mechanisms",
    content: `Now let's connect pathophysiology to the patients you'll actually see. Every common EMS presentation has an underlying mechanism. Understanding these patterns helps you anticipate what's coming.

**Infectious Disease**
Pathogens (bacteria, viruses, fungi) invade tissue and either destroy cells directly or trigger an immune response that damages tissue. The presentation depends on location: pneumonia in lungs, meningitis in brain coverings, cellulitis in skin.

**Cardiovascular Disease**
Two main categories: pump problems and pipe problems. Heart failure is a pump that can't keep up. Atherosclerosis narrows the pipes. MI (heart attack) is a pipe completely blocked. Each produces different signs but all reduce perfusion.

**Respiratory Disease**
Ventilation failures (can't move air) vs. oxygenation failures (can't exchange gases). Asthma constricts airways. COPD destroys alveoli. Pneumonia fills alveoli with fluid. Different mechanisms, different sounds, different treatments.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "emt-patho-disease-q1",
          question: "Heart failure is categorized as which type of cardiovascular disease?",
          options: [
            "A pipe problem",
            "A pump problem",
            "An electrical problem",
            "A valve problem only"
          ],
          correctIndex: 1,
          explanation: "Heart failure is a pump problem—the heart can't keep up with the body's demand for blood flow. Atherosclerosis and MI are pipe problems (blocked vessels). Understanding pump vs. pipe helps guide assessment and treatment."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-patho-disease-q2",
          question: "Asthma and COPD are primarily failures of:",
          options: [
            "Oxygenation (gas exchange)",
            "Ventilation (air movement)",
            "Circulation (blood flow)",
            "Metabolism (energy production)"
          ],
          correctIndex: 1,
          explanation: "Asthma constricts airways; COPD destroys alveoli and traps air. Both primarily impair ventilation—the mechanical movement of air. This is why bronchodilators (which open airways) are a key treatment."
        }
      }
    ],
    keyPoints: [
      "Infectious disease: pathogens damage tissue or trigger harmful immune responses",
      "Cardiovascular disease: pump problems vs. pipe problems",
      "Respiratory disease: ventilation failures vs. oxygenation failures"
    ]
  },
  {
    id: "injury-patterns",
    title: "Trauma Pathophysiology",
    content: `Trauma disrupts normal structure and function through mechanical force. Different mechanisms produce different injury patterns — and each has its own pathophysiology that predicts complications.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "emt-patho-blunt",
            front: "Blunt Trauma",
            back: "Energy distributed over a wide area. Causes compression and deceleration injuries. Organs can tear, rupture, or bleed internally. Often hidden — the skin may look fine while organs are damaged inside."
          },
          {
            id: "emt-patho-penetrating",
            front: "Penetrating Trauma",
            back: "Energy focused on a small area. Predictable injury patterns based on path. Stab wounds: low energy, local damage. Gunshot wounds: high energy, cavitation, unpredictable internal path."
          },
          {
            id: "emt-patho-hemorrhage",
            front: "Hemorrhage Pathophysiology",
            back: "Blood loss reduces circulating volume. Less volume means less oxygen delivery. The body compensates (tachycardia, vasoconstriction) until it can't. Then: crash. Early recognition of compensation buys time."
          },
          {
            id: "emt-patho-burn",
            front: "Burn Pathophysiology",
            back: "Burns destroy the skin barrier. Fluid leaks out (edema, dehydration). Infection risk skyrockets. Circumferential burns can create compartment syndrome. Think of burns as more than skin damage."
          },
          {
            id: "emt-patho-crush",
            front: "Crush Injury",
            back: "Prolonged compression damages muscle. When released, cell contents flood the bloodstream: potassium (cardiac arrest risk), myoglobin (kidney damage), acids. Treat BEFORE release when possible."
          }
        ]
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-patho-trauma-q1",
          question: "Why is blunt trauma often more dangerous than it appears?",
          options: [
            "It always causes fractures",
            "Internal organ damage can occur without visible external injury",
            "It only affects the skin",
            "It never causes bleeding"
          ],
          correctIndex: 1,
          explanation: "Blunt trauma distributes energy over a wide area—the skin may look fine while organs are compressed, torn, or bleeding internally. This is why mechanism of injury is so important—it predicts hidden injuries."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-patho-trauma-q2",
          question: "A patient trapped under debris for 2 hours is at risk for which complication upon release?",
          options: [
            "Hypothermia only",
            "Crush syndrome with cardiac arrest risk",
            "Dehydration only",
            "Skin burns"
          ],
          correctIndex: 1,
          explanation: "Crush injuries release potassium, myoglobin, and acids when pressure is removed. The sudden potassium surge can cause fatal cardiac arrhythmias. Treatment should begin BEFORE release when possible."
        }
      }
    ],
    keyPoints: [
      "Blunt trauma hides injuries; penetrating trauma follows predictable paths",
      "Hemorrhage triggers compensatory mechanisms that eventually fail",
      "Crush injuries release toxins when pressure is removed"
    ]
  },
  {
    id: "emt-patho-quiz",
    title: "Knowledge Check",
    content: `Let's test your understanding of pathophysiology fundamentals. These questions reflect the kind of clinical thinking that separates good EMTs from great ones.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "emt-patho-q1",
          question: "A patient's tissue has been without blood flow for an extended period. The cells have died and cannot recover. This is called:",
          options: [
            "Hypoxia",
            "Ischemia",
            "Infarction",
            "Inflammation"
          ],
          correctIndex: 2,
          explanation: "Infarction is tissue death from prolonged ischemia. Unlike hypoxia (reduced oxygen) or ischemia (reduced blood flow), infarction is irreversible — the cells are dead. This is why time-critical interventions matter in heart attacks and strokes."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-patho-q2",
          question: "Redness, swelling, heat, and pain at an injury site indicate:",
          options: [
            "Infection",
            "Inflammation",
            "Necrosis",
            "Apoptosis"
          ],
          correctIndex: 1,
          explanation: "These are the four cardinal signs of inflammation — the body's protective response to injury. Inflammation isn't the same as infection, though infection causes inflammation. This response brings immune cells and healing factors to the damaged area."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-patho-q3",
          question: "Why is ischemia more damaging than hypoxia alone?",
          options: [
            "Ischemia only affects the heart",
            "Ischemia combines oxygen deprivation with waste buildup",
            "Ischemia is always irreversible",
            "Hypoxia doesn't affect cells"
          ],
          correctIndex: 1,
          explanation: "In ischemia, blood flow is reduced — so cells lose oxygen delivery AND can't remove metabolic waste. The combination of oxygen deprivation plus toxic waste accumulation makes ischemia more destructive than hypoxia, where blood still flows but carries less oxygen."
        }
      }
    ],
    keyPoints: [
      "Infarction is irreversible cell death from prolonged ischemia",
      "Inflammation is protective, not the same as infection",
      "Ischemia is worse than hypoxia because waste accumulates too"
    ]
  },
  {
    id: "emt-patho-wrapup",
    title: "Connecting the Dots",
    content: `You've just built the foundation of pathophysiology — the 'why' behind every patient presentation you'll encounter.

**What You've Learned:**
• Pathophysiology bridges A&P to clinical presentations
• Cell injury progresses: hypoxia → ischemia → infarction
• Your interventions buy time in the reversible window
• Defense mechanisms (inflammation, immunity, fever) usually help but can harm
• Every common EMS presentation has an underlying mechanism

**Why This Matters**
Next time you assess a tachycardic patient with cool, pale skin, you won't just document the findings — you'll understand that their body is compensating for inadequate perfusion. That understanding drives better care.

**What's Next?**
The AEMT level dives deeper into cellular adaptation, the hypoperfusion cascade, and systemic inflammatory responses. But don't rush — make sure these fundamentals feel solid first.`,
    keyPoints: [
      "Pathophysiology is the 'why' behind every patient presentation",
      "Cell injury progression explains why time matters",
      "Defense mechanisms can help or harm — context matters"
    ],
    rememberThis: "Understanding pathophysiology doesn't make you a textbook — it makes you a better clinician. Every concept here connects directly to patient care."
  }
];

// =====================================================
// AEMT Pathophysiology Content
// =====================================================

export const aemtPathophysiologyContent: TopicSection[] = [
  {
    id: "aemt-patho-intro",
    title: "Understanding the Mechanisms",
    content: `Welcome to AEMT-level pathophysiology. You've built the foundation — now we're going deeper into the mechanisms that drive disease and injury.

At the EMT level, you learned WHAT happens when cells are injured. Now you'll learn HOW cells adapt to stress before they fail, HOW the body compensates for inadequate perfusion, and WHEN those compensatory mechanisms become part of the problem.

**Why This Matters for AEMTs**
Your expanded scope includes IV fluids, additional medications, and advanced monitoring. Understanding the pathophysiology behind shock, inflammation, and fluid balance tells you not just what to give — but why, how much, and when to stop.

This is the difference between following protocols and understanding patient physiology.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-patho-intro-q1",
          question: "At the AEMT level, understanding pathophysiology helps you determine:",
          options: [
            "Only which protocol to follow",
            "Why, how much, and when to stop interventions",
            "Which hospital to transport to",
            "The patient's exact diagnosis"
          ],
          correctIndex: 1,
          explanation: "Understanding the mechanisms behind shock, inflammation, and fluid balance tells you not just what to give, but why you're giving it, how much is appropriate, and when to stop. This is the difference between following protocols and understanding patient physiology."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-patho-intro-q2",
          question: "Compared to EMT-level pathophysiology, AEMT-level focuses more on:",
          options: [
            "Basic anatomy only",
            "How cells adapt and compensate before failure",
            "Surgical techniques",
            "Pharmacology only"
          ],
          correctIndex: 1,
          explanation: "At AEMT level, you go deeper into HOW cells adapt to stress before they fail, HOW the body compensates for inadequate perfusion, and WHEN those compensatory mechanisms become part of the problem. This cellular-level understanding guides your expanded interventions."
        }
      }
    ],
    keyPoints: [
      "Building on EMT concepts with cellular-level detail",
      "Understanding mechanisms guides your expanded interventions",
      "Connecting pathophysiology to IV fluids, medications, and monitoring"
    ]
  },
  {
    id: "cellular-adaptation",
    title: "Cellular Adaptation and Stress",
    content: `Cells don't just die when stressed — they adapt first. These adaptations are predictable, and recognizing them in your patients helps you understand chronic disease presentations.

The four types of cellular adaptation represent a spectrum from healthy response to pathological change. Each has clinical relevance you'll encounter in the field.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Hypertrophy",
            content: "Cells get BIGGER under increased workload. The classic example: left ventricular hypertrophy (LVH) in chronic hypertension. The heart muscle thickens from working harder against elevated pressure. Initially adaptive — the thicker muscle maintains output. Eventually pathological — the thickened walls become stiff, impairing filling (diastolic dysfunction)."
          },
          {
            label: "Hyperplasia",
            content: "More cells are PRODUCED in response to demand. Calluses from repeated friction — more skin cells to handle the stress. Liver regeneration after partial removal. Bone marrow producing more red blood cells at altitude. Can be normal or pathological — uncontrolled hyperplasia is a step toward cancer."
          },
          {
            label: "Atrophy",
            content: "Cells SHRINK from disuse or poor nutrition. Muscle wasting in immobilized or bedridden patients — use it or lose it. Organ shrinkage in chronic disease. The body conserves resources it isn't using. Clinically relevant: atrophied muscles increase fall risk in elderly patients."
          },
          {
            label: "Metaplasia",
            content: "One cell type REPLACES another. The classic example: smoker's airways. Ciliated respiratory epithelium is replaced by tougher squamous cells that can handle the irritation but can't clear mucus. An adaptation that sacrifices function for durability. Reversible if the stimulus stops (quit smoking)."
          }
        ]
      }
    ],
    keyPoints: [
      "Hypertrophy: cells get bigger (LVH in hypertension)",
      "Hyperplasia: more cells produced (calluses, liver regeneration)",
      "Atrophy: cells shrink from disuse; Metaplasia: cell type substitution"
    ],
    rememberThis: "These adaptations happen BEFORE injury. They're the body's attempt to cope. When adaptation fails, injury begins — and that's when your patients call 911."
  },
  {
    id: "cellular-adaptation-quiz-inline",
    title: "Cellular Adaptation – Quick Check",
    content: "Test your understanding of cellular adaptations.",
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-patho-adapt-q1",
          question: "A patient with chronic hypertension develops a thickened left ventricle. This is an example of:",
          options: [
            "Hyperplasia",
            "Hypertrophy",
            "Atrophy",
            "Metaplasia"
          ],
          correctIndex: 1,
          explanation: "Hypertrophy means cells get BIGGER under increased workload. The heart muscle thickens from working harder against elevated pressure. Initially adaptive, but eventually pathological—the thickened walls become stiff, impairing filling."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-patho-adapt-q2",
          question: "A smoker's ciliated airway cells being replaced by squamous cells is an example of:",
          options: [
            "Hypertrophy",
            "Hyperplasia",
            "Atrophy",
            "Metaplasia"
          ],
          correctIndex: 3,
          explanation: "Metaplasia is when one cell type replaces another. The ciliated respiratory epithelium is replaced by tougher squamous cells that can handle the irritation but can't clear mucus—sacrificing function for durability. Reversible if the stimulus stops."
        }
      }
    ]
  },
  {
    id: "hypoperfusion-cascade",
    title: "The Hypoperfusion Cascade",
    content: `Shock isn't a single event — it's a cascade. Understanding the stages of this cascade, from the cellular level up, explains why early recognition and intervention are so critical.

The oxygen delivery equation gives you the framework: **DO₂ = CO × CaO₂**. When either cardiac output or oxygen content drops, cells don't get what they need.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "aemt-patho-do2",
            front: "Oxygen Delivery (DO₂)",
            back: "DO₂ = Cardiac Output × Oxygen Content. Both components must work. If CO drops (pump failure) or O₂ content drops (anemia, hypoxia), cells don't get what they need. This equation drives every shock intervention."
          },
          {
            id: "aemt-patho-anaerobic",
            front: "Anaerobic Metabolism",
            back: "Without oxygen, cells switch to anaerobic metabolism. Only produces 2 ATP vs. 36 ATP aerobically — a 94% drop in energy production. Plus it generates lactate as a byproduct, contributing to acidosis."
          },
          {
            id: "aemt-patho-lactate",
            front: "Lactate Accumulation",
            back: "Lactate builds up during anaerobic metabolism and creates acidosis. Elevated lactate is a marker of tissue hypoperfusion — even before vital signs change. Trending lactate levels guides resuscitation effectiveness."
          },
          {
            id: "aemt-patho-compensatory",
            front: "Compensatory Stage",
            back: "SNS activation: tachycardia, vasoconstriction, diaphoresis. RAAS activation: fluid retention. These maintain perfusion to vital organs by sacrificing the periphery. Limited duration — compensation has a metabolic cost."
          },
          {
            id: "aemt-patho-progressive",
            front: "Progressive Stage",
            back: "Compensatory mechanisms overwhelmed. Cells start dying. Capillary beds leak (third-spacing). Blood pools in dilated vessels. Coagulation cascade activates inappropriately. Positive feedback loops accelerate decline."
          },
          {
            id: "aemt-patho-irreversible",
            front: "Irreversible Stage",
            back: "Organ damage too extensive to recover. Even with perfect treatment, tissues cannot function. ATP depletion is complete. Cell membranes disintegrate. Multi-organ failure follows. Prevention through early intervention is key."
          }
        ]
      }
    ],
    keyPoints: [
      "DO₂ = CO × CaO₂ — the oxygen delivery equation",
      "Anaerobic metabolism produces 94% less ATP and generates lactate",
      "Shock progresses: compensatory → progressive → irreversible"
    ]
  },
  {
    id: "hypoperfusion-quiz-inline",
    title: "Hypoperfusion Cascade – Quick Check",
    content: "Test your understanding of the hypoperfusion cascade.",
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-patho-hypo-q1",
          question: "During anaerobic metabolism, cells produce only how many ATP compared to 36 in aerobic metabolism?",
          options: [
            "18 ATP",
            "12 ATP",
            "6 ATP",
            "2 ATP"
          ],
          correctIndex: 3,
          explanation: "Anaerobic metabolism produces only 2 ATP vs. 36 aerobically—a 94% drop in energy production. This massive energy deficit, plus lactate accumulation causing acidosis, is why cells cannot survive prolonged oxygen deprivation."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-patho-hypo-q2",
          question: "During the progressive stage of shock, what happens to capillary beds?",
          options: [
            "They constrict further",
            "They begin to leak fluid (third-spacing)",
            "They return to normal",
            "They completely close off"
          ],
          correctIndex: 1,
          explanation: "In the progressive stage, compensatory mechanisms are overwhelmed. Capillary beds begin to leak (third-spacing), blood pools in dilated vessels, and coagulation activates inappropriately. Positive feedback loops accelerate the decline toward irreversibility."
        }
      }
    ]
  },
  {
    id: "inflammatory-immune",
    title: "Inflammatory and Immune Responses",
    content: `At the EMT level, you learned that inflammation can be helpful or harmful. Now let's understand the spectrum from local inflammation to systemic inflammatory response — and why this distinction determines treatment urgency.

The key concept: **local inflammation heals; systemic inflammation kills.**`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Local Inflammation",
            content: "Contained to the injury site. Beneficial — brings immune cells, removes debris, initiates healing. The redness around a wound is local inflammation doing its job. Blood vessels dilate, white cells migrate in, damaged tissue is cleared. This is normal and desirable."
          },
          {
            label: "SIRS",
            content: "When inflammation goes body-wide. SIRS criteria: temperature >38°C or <36°C, heart rate >90, respiratory rate >20, WBC abnormal. Two or more criteria = SIRS. Multiple causes: infection, trauma, burns, pancreatitis. SIRS is the body's inflammatory response escaping local control."
          },
          {
            label: "Sepsis Spectrum",
            content: "Infection + SIRS = sepsis. Sepsis + organ dysfunction = severe sepsis. Sepsis + refractory hypotension = septic shock. Each step carries higher mortality — sepsis ~10%, severe sepsis ~20-30%, septic shock ~40-60%. Early recognition at each stage saves lives."
          },
          {
            label: "Immune Suppression",
            content: "After major injury or illness, the immune system can become suppressed. Post-surgical patients, burn victims, and the elderly are vulnerable. The initial inflammatory surge depletes immune resources. Increased infection risk in already-sick patients — watch for secondary infections."
          }
        ]
      }
    ],
    keyPoints: [
      "Local inflammation is protective; systemic inflammation is dangerous",
      "SIRS requires 2+ criteria: temp, HR, RR, WBC abnormalities",
      "Sepsis spectrum: infection + SIRS → sepsis → severe sepsis → septic shock"
    ]
  },
  {
    id: "inflammatory-quiz-inline",
    title: "Inflammatory Response – Quick Check",
    content: "Test your understanding of inflammation and immune responses.",
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-patho-inflam-q1",
          question: "What distinguishes sepsis from SIRS?",
          options: [
            "Sepsis has a higher heart rate",
            "Sepsis is SIRS caused by an infection",
            "Sepsis only affects the lungs",
            "SIRS is always more severe than sepsis"
          ],
          correctIndex: 1,
          explanation: "SIRS can be caused by many things (trauma, burns, pancreatitis). When SIRS is caused specifically by an infection, it's called sepsis. Sepsis + organ dysfunction = severe sepsis. Sepsis + refractory hypotension = septic shock."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-patho-inflam-q2",
          question: "The mortality rate for septic shock is approximately:",
          options: [
            "5-10%",
            "10-20%",
            "20-30%",
            "40-60%"
          ],
          correctIndex: 3,
          explanation: "Septic shock carries a mortality rate of 40-60%. Each step up the sepsis spectrum dramatically increases mortality: sepsis ~10%, severe sepsis ~20-30%, septic shock ~40-60%. This is why early recognition at each stage saves lives."
        }
      }
    ]
  },
  {
    id: "fluid-electrolyte",
    title: "Fluid and Electrolyte Balance",
    content: `Understanding fluid compartments and electrolyte balance connects directly to your IV therapy decisions. Where does the fluid go? Why does it matter? And what happens when electrolytes are out of range?`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "aemt-patho-fluid-compartments",
            front: "Fluid Compartments",
            back: "2/3 of body water is intracellular (ICF), 1/3 extracellular (ECF). Of ECF: 3/4 is interstitial (between cells), 1/4 is intravascular (in blood vessels). IV fluids fill the intravascular space first, then redistribute."
          },
          {
            id: "aemt-patho-osmosis",
            front: "Osmosis",
            back: "Water follows solute. High sodium in the blood? Water moves from cells into the bloodstream. This is why hypertonic solutions draw fluid intravascularly — and why mannitol reduces brain swelling. Osmotic principles drive fluid therapy decisions."
          },
          {
            id: "aemt-patho-dehydration",
            front: "Dehydration Signs",
            back: "Decreased skin turgor, dry mucous membranes, tachycardia, concentrated urine, hypotension. The body is losing more fluid than it's taking in. Common in elderly, children, and athletes. IV fluid replacement is within your scope."
          },
          {
            id: "aemt-patho-overload",
            front: "Fluid Overload Signs",
            back: "Peripheral edema, JVD, crackles, hypertension. Too much fluid in the vascular space. Common in CHF and renal failure. Your IV fluids can cause this — always monitor for overload during fluid administration."
          },
          {
            id: "aemt-patho-electrolytes",
            front: "Electrolyte Imbalances",
            back: "K⁺ too high: cardiac arrest risk (peaked T waves, wide QRS). K⁺ too low: muscle weakness, arrhythmias. Na⁺ too low: confusion, seizures. Ca²⁺ too low: tetany, QT prolongation. These numbers drive critical interventions."
          }
        ]
      }
    ],
    keyPoints: [
      "2/3 ICF, 1/3 ECF — only 1/12 of body water is intravascular",
      "Water follows solute (osmosis drives fluid shifts)",
      "Monitor for both dehydration AND fluid overload during IV therapy"
    ]
  },
  {
    id: "fluid-electrolyte-quiz-inline",
    title: "Fluid & Electrolyte – Quick Check",
    content: "Test your understanding of fluid compartments and electrolytes.",
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-patho-fluid-q1",
          question: "What fraction of total body water is intravascular (in blood vessels)?",
          options: [
            "About 2/3",
            "About 1/3",
            "About 1/4 of extracellular fluid (roughly 1/12 total)",
            "About 1/2"
          ],
          correctIndex: 2,
          explanation: "2/3 of body water is intracellular. Of the remaining 1/3 (extracellular), only 1/4 is intravascular. So roughly 1/12 of total body water is in blood vessels. IV fluids fill this compartment first, then redistribute."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-patho-fluid-q2",
          question: "A patient receiving IV fluids develops new crackles, JVD, and worsening dyspnea. This indicates:",
          options: [
            "Dehydration",
            "Fluid overload",
            "Electrolyte imbalance",
            "Normal fluid redistribution"
          ],
          correctIndex: 1,
          explanation: "Crackles (fluid in lungs), JVD (elevated venous pressure), and worsening dyspnea are classic signs of fluid overload. Stop fluids and reassess. This is especially common in cardiac patients or elderly who can't handle extra volume."
        }
      }
    ]
  },
  {
    id: "aemt-patho-clinical",
    title: "Clinical Connections",
    content: `Let's connect these mechanisms to field presentations you'll encounter regularly.

**Diabetic Emergencies**
Hyperglycemia creates osmotic diuresis — glucose in the urine pulls water with it, causing dehydration. The body breaks down fat for energy (ketoacidosis in Type 1) or can't use glucose despite having it (Type 2). Kussmaul respirations? The body blowing off CO₂ to compensate for metabolic acidosis.

**Allergic Reactions**
Histamine release causes vasodilation (hypotension), bronchospasm (wheezing), and increased vascular permeability (swelling/angioedema). Anaphylaxis is all three simultaneously — a triple threat to perfusion, ventilation, and airway patency. Epinephrine reverses each mechanism.

**Sepsis in Practice**
That elderly patient with a UTI who's confused and tachycardic? Infection triggered SIRS. The vasodilation dropped their blood pressure. The tachycardia is compensation. Your early recognition and fluid resuscitation can interrupt the cascade before organ failure.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-patho-clinical-q1",
          question: "In DKA, Kussmaul respirations occur because the body is:",
          options: [
            "Trying to warm the blood",
            "Compensating for metabolic acidosis by blowing off CO₂",
            "Responding to pulmonary edema",
            "Experiencing bronchospasm"
          ],
          correctIndex: 1,
          explanation: "Kussmaul respirations are deep, rapid breaths that blow off CO₂ to compensate for the metabolic acidosis caused by ketoacid production. The body uses the respiratory system to buffer the pH imbalance caused by the metabolic problem."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-patho-clinical-q2",
          question: "Epinephrine is the priority drug in anaphylaxis because it reverses:",
          options: [
            "Only bronchospasm",
            "Only vasodilation",
            "Vasodilation, bronchospasm, AND vascular permeability",
            "Only the allergic rash"
          ],
          correctIndex: 2,
          explanation: "Anaphylaxis is a triple threat: vasodilation (hypotension), bronchospasm (wheezing), and increased vascular permeability (swelling). Epinephrine reverses all three mechanisms simultaneously, making it the first-line treatment."
        }
      }
    ],
    keyPoints: [
      "DKA: osmotic diuresis + ketoacid production + compensatory hyperventilation",
      "Anaphylaxis: vasodilation + bronchospasm + vascular permeability",
      "Sepsis: infection triggers SIRS → vasodilation → compensation → organ failure"
    ],
    proTip: "The best AEMT assessment connects findings to mechanisms. 'Tachycardic, hypotensive, febrile' is data. 'Sepsis-induced vasodilation with compensatory tachycardia' is clinical reasoning."
  },
  {
    id: "aemt-patho-quiz",
    title: "Knowledge Check",
    content: `Test your understanding of AEMT-level pathophysiology. These questions require connecting mechanisms to clinical presentations.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-patho-q1",
          question: "A patient in prolonged shock has lactate levels rising despite fluid resuscitation. This rising lactate indicates:",
          options: [
            "The patient is exercising",
            "Cells are in anaerobic metabolism due to inadequate perfusion",
            "The IV fluids contain lactate",
            "The patient has a liver problem"
          ],
          correctIndex: 1,
          explanation: "Rising lactate is the hallmark of anaerobic metabolism — cells that aren't getting enough oxygen switch to inefficient energy production and generate lactate as a byproduct. This tells you tissue perfusion is still inadequate despite your interventions."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-patho-q2",
          question: "SIRS (Systemic Inflammatory Response Syndrome) requires meeting at least how many criteria?",
          options: [
            "1",
            "2",
            "3",
            "4"
          ],
          correctIndex: 1,
          explanation: "SIRS requires 2 or more of: temperature >38°C or <36°C, heart rate >90, respiratory rate >20, or abnormal WBC count. SIRS can be caused by infection (leading to sepsis), but also by trauma, burns, or pancreatitis."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-patho-q3",
          question: "Left ventricular hypertrophy in a patient with chronic hypertension is an example of:",
          options: [
            "Hyperplasia",
            "Atrophy",
            "Hypertrophy",
            "Metaplasia"
          ],
          correctIndex: 2,
          explanation: "Hypertrophy is an increase in cell SIZE (not number) in response to increased workload. The heart muscle cells enlarge to handle the higher pressure load. Initially adaptive, but eventually the thickened walls become stiff, leading to diastolic dysfunction."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-patho-q4",
          question: "A patient with prolonged immobilization is at risk for which cellular adaptation?",
          options: [
            "Hypertrophy",
            "Hyperplasia",
            "Atrophy",
            "Metaplasia"
          ],
          correctIndex: 2,
          explanation: "Atrophy is the shrinking of cells from disuse or poor nutrition. Immobilized patients lose muscle mass because the body conserves resources it isn't using—'use it or lose it.' This increases fall risk and complicates recovery."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-patho-q5",
          question: "In the oxygen delivery equation (DO₂ = CO × CaO₂), a patient with severe anemia has reduced delivery because of:",
          options: [
            "Low cardiac output",
            "Low oxygen content in the blood",
            "High systemic vascular resistance",
            "Excessive ventilation"
          ],
          correctIndex: 1,
          explanation: "Anemia reduces hemoglobin, which directly reduces the oxygen content of blood (CaO₂). Even with normal cardiac output and lung function, fewer red blood cells means less oxygen carried to tissues. This is why anemic patients can present with shock-like symptoms."
        }
      }
    ],
    keyPoints: [
      "Rising lactate indicates ongoing cellular hypoperfusion",
      "SIRS requires 2+ criteria from temp, HR, RR, WBC",
      "Hypertrophy = bigger cells, not more cells"
    ]
  },
  {
    id: "aemt-patho-wrapup",
    title: "Mechanisms Drive Treatment",
    content: `You've deepened your pathophysiology understanding to the AEMT level. These mechanisms directly guide your expanded interventions.

**What You've Learned:**
• Cellular adaptation (hypertrophy, hyperplasia, atrophy, metaplasia) precedes failure
• The hypoperfusion cascade explains shock progression from compensation to irreversibility
• Systemic inflammation (SIRS) can be more dangerous than the original trigger
• Fluid compartments and electrolyte balance drive your IV therapy decisions

**The Clinical Difference**
You now understand WHY you give IV fluids in hypovolemic shock (restoring intravascular volume), WHY you monitor for fluid overload in cardiac patients (compromised pump can't handle extra volume), and WHY rising lactate is a red flag (cells are still starving for oxygen).

**What's Next?**
The Paramedic level takes this further with acid-base interpretation, the SIRS-sepsis-MODS continuum, and genetic disease mechanisms. These concepts build directly on what you've learned here.`,
    keyPoints: [
      "Cellular adaptation precedes failure",
      "Hypoperfusion cascade explains shock progression",
      "Systemic inflammation can be more dangerous than the trigger"
    ],
    rememberThis: "At the AEMT level, you have the tools AND the knowledge to make a difference. Understanding pathophysiology means your interventions are targeted, not just protocol-driven."
  }
];

// =====================================================
// Paramedic Pathophysiology Deep Dive Content
// =====================================================

export const paramedicPathophysiologyContent: TopicSection[] = [
  {
    id: "para-patho-intro",
    title: "The Science Behind the Medicine",
    content: `Welcome to paramedic-level pathophysiology — where understanding mechanisms becomes the foundation of clinical reasoning.

At this level, you're not just recognizing patterns — you're predicting what comes next. You're not just following protocols — you're adapting treatment based on pathophysiology. Understanding cellular metabolism, acid-base balance, and systemic inflammatory cascades gives you the reasoning framework for every critical decision.

**Why This Level Matters**
When you understand WHY a post-arrest patient develops reperfusion injury, you understand WHY targeted temperature management is indicated. When you can interpret acid-base disturbances, you can predict compensatory responses and guide ventilation. When you understand the SIRS-sepsis-MODS continuum, you can intervene at each stage with purpose.

This is the difference between a paramedic who follows recipes and one who practices medicine.`,
    keyPoints: [
      "Paramedic-level pathophysiology drives differential diagnosis",
      "Understanding mechanisms prevents recipe-following",
      "This knowledge connects every system to clinical decision-making"
    ]
  },
  {
    id: "cellular-metabolism-stress",
    title: "Cellular Metabolism Under Stress",
    content: `Every resuscitation you perform ultimately targets one goal: keeping cells alive by maintaining energy production. Understanding the metabolic pathways — and what happens when they fail — explains why time matters and why some patients don't recover despite restored vitals.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Aerobic Pathway",
            content: "Glucose + O₂ through glycolysis → Krebs cycle → electron transport chain = 36-38 ATP per glucose molecule. Efficient, sustainable, and clean — CO₂ and H₂O are the only byproducts. This is the preferred pathway. When oxygen delivery fails, the Krebs cycle and ETC shut down, leaving only glycolysis."
          },
          {
            label: "Anaerobic Consequences",
            content: "Only glycolysis continues without oxygen: 2 ATP per glucose — a 94% drop in energy production. Lactate accumulates as pyruvate can't enter the Krebs cycle. Intracellular pH drops. Na⁺/K⁺ pumps fail from ATP depletion. Cell swelling begins as sodium and water enter. Without intervention, this cascade becomes irreversible within minutes to hours."
          },
          {
            label: "Mitochondrial Dysfunction",
            content: "In sepsis and prolonged shock, mitochondria themselves become damaged by reactive oxygen species and inflammatory mediators. Even with restored oxygen delivery, cells can't use it — this is called cytopathic hypoxia. It explains why some patients continue to deteriorate despite normalized vital signs and adequate oxygen delivery. The powerhouses are broken."
          },
          {
            label: "Reperfusion Injury",
            content: "Paradoxically, restoring blood flow after prolonged ischemia generates reactive oxygen species (free radicals) that cause additional cellular damage. These ROS damage cell membranes, DNA, and proteins. This is why post-ROSC care includes targeted temperature management — reducing metabolic demand limits reperfusion damage. The treatment itself requires treatment."
          }
        ]
      }
    ],
    keyPoints: [
      "Aerobic: 36-38 ATP (efficient); Anaerobic: 2 ATP + lactate (desperate)",
      "Cytopathic hypoxia: damaged mitochondria can't use delivered oxygen",
      "Reperfusion injury: restoring flow generates damaging free radicals"
    ],
    rememberThis: "This is why 'time is muscle' and 'time is brain' — every minute of ischemia means more cells switching to anaerobic metabolism and approaching irreversible injury. Your interventions race the metabolic clock."
  },
  {
    id: "acid-base-patho",
    title: "Acid-Base Pathophysiology",
    content: `pH interpretation is a defining paramedic skill. Understanding the mechanisms behind acid-base disturbances — not just memorizing patterns — lets you predict compensatory responses, guide ventilation, and anticipate patient trajectories.

The key relationship: **pH is determined by the ratio of CO₂ (respiratory) to HCO₃⁻ (metabolic)**. Each system can cause problems, each can compensate for the other, and sometimes both go wrong simultaneously.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "para-patho-resp-acidosis",
            front: "Respiratory Acidosis",
            back: "CO₂ retention from hypoventilation. pH drops, PaCO₂ rises. Causes: CNS depression (opioids, head injury), COPD exacerbation, airway obstruction, neuromuscular disease. Treatment: improve ventilation. The lungs are failing to blow off acid."
          },
          {
            id: "para-patho-resp-alkalosis",
            front: "Respiratory Alkalosis",
            back: "CO₂ blown off from hyperventilation. pH rises, PaCO₂ drops. Causes: anxiety, pain, PE (stimulating respiratory drive), early sepsis, high altitude. The lungs are removing too much acid — find and treat the cause of hyperventilation."
          },
          {
            id: "para-patho-met-acidosis",
            front: "Metabolic Acidosis",
            back: "Acid accumulation or bicarbonate loss. pH drops, HCO₃⁻ drops. Causes: shock (lactic acidosis), DKA (ketoacids), renal failure (can't excrete acid), diarrhea (losing bicarbonate). Kussmaul respirations = respiratory compensation."
          },
          {
            id: "para-patho-met-alkalosis",
            front: "Metabolic Alkalosis",
            back: "Acid loss or bicarbonate excess. pH rises, HCO₃⁻ rises. Causes: vomiting (losing HCl), diuretics (losing acid), NG suction, excessive bicarbonate administration. Less common in emergencies but important to recognize."
          },
          {
            id: "para-patho-compensation",
            front: "Compensation",
            back: "The body tries to restore pH balance. Metabolic problem? Lungs compensate by adjusting CO₂ (fast, minutes). Respiratory problem? Kidneys compensate by adjusting HCO₃⁻ (slow, hours to days). Compensation NEVER fully corrects pH — if pH is normal with abnormal CO₂ and HCO₃⁻, suspect a mixed disorder."
          },
          {
            id: "para-patho-mixed",
            front: "Mixed Disorders",
            back: "Sometimes both respiratory AND metabolic problems coexist. Post-arrest: respiratory acidosis (no ventilation during arrest) + metabolic acidosis (lactate from hypoperfusion). Drug overdose with vomiting: respiratory acidosis + metabolic alkalosis. Numbers that don't fit a single pattern = mixed disorder."
          }
        ]
      }
    ],
    keyPoints: [
      "pH is the ratio of CO₂ (respiratory) to HCO₃⁻ (metabolic)",
      "Compensation is fast (lungs/minutes) or slow (kidneys/hours-days)",
      "Mixed disorders: when numbers don't fit a single pattern"
    ]
  },
  {
    id: "sirs-sepsis-mods",
    title: "The SIRS-Sepsis-MODS Continuum",
    content: `Sepsis is the leading cause of death in ICUs worldwide — and it starts in the field. Understanding the pathophysiology of systemic inflammation, from the initial cytokine release to multi-organ dysfunction, gives you the framework to intervene at every stage.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Cytokine Storm",
            content: "Pro-inflammatory cytokines (TNF-alpha, IL-1, IL-6) are released in massive quantities in response to infection or severe injury. These mediators cause widespread vasodilation (dropping SVR), capillary leak (reducing effective circulating volume), myocardial depression (reducing CO), and coagulation activation (causing microvascular thrombosis). The body's defense becomes a multi-system attack on itself."
          },
          {
            label: "Sepsis Pathophysiology",
            content: "Infection triggers the immune response. Vasodilation drops SVR dramatically. Capillary leak reduces effective circulating volume — fluid shifts to interstitial space. Myocardial depression reduces cardiac output. Microvascular thrombosis impairs organ perfusion at the capillary level. This is a multi-factorial hemodynamic catastrophe — no single intervention addresses all mechanisms."
          },
          {
            label: "MODS Progression",
            content: "Organs fail in a somewhat predictable sequence. Lungs often first (ARDS): gas exchange fails, requiring mechanical ventilation. Kidneys (AKI): filtration stops, toxins accumulate. Liver: coagulation factor production drops, bleeding risk rises. Brain: encephalopathy, altered mental status. Each failing organ accelerates the cascade — organ failure begets organ failure."
          },
          {
            label: "Therapeutic Targets",
            content: "Early antibiotics reduce the bacterial burden driving the immune response. Fluid resuscitation restores circulating volume (targeting MAP ≥65). Vasopressors (norepinephrine first-line) restore SVR when fluids alone aren't enough. Source control (drain the abscess, remove the infected device) eliminates the trigger. Early, aggressive, targeted intervention at each stage improves survival."
          }
        ]
      }
    ],
    keyPoints: [
      "Cytokine storm causes vasodilation + capillary leak + myocardial depression simultaneously",
      "MODS progression: lungs → kidneys → liver → brain",
      "Treatment targets each mechanism: antibiotics, fluids, vasopressors, source control"
    ]
  },
  {
    id: "genetic-congenital-acquired",
    title: "Genetic, Congenital, and Acquired Disease",
    content: `Understanding disease origins helps you anticipate complications, adapt your assessment, and provide informed care for patients with complex medical histories.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "para-patho-genetic-congenital",
            front: "Genetic vs. Congenital",
            back: "Genetic: encoded in DNA (sickle cell disease, cystic fibrosis, hemophilia). Congenital: present at birth but not necessarily genetic (fetal alcohol syndrome, heart defects from maternal rubella). Both affect patient presentations throughout life and require adapted field care."
          },
          {
            id: "para-patho-sickle",
            front: "Sickle Cell Disease",
            back: "Abnormal hemoglobin (HbS) polymerizes under low O₂ conditions, causing red cells to sickle and block capillaries. Results in pain crises (vaso-occlusive), organ damage, and increased infection risk. High-flow O₂ and IV hydration are critical field interventions. Avoid cold exposure and dehydration."
          },
          {
            id: "para-patho-cf",
            front: "Cystic Fibrosis",
            back: "Chloride channel defect (CFTR mutation) causes thick, sticky secretions throughout the body. Lungs: recurrent infections, bronchiectasis, progressive respiratory failure. GI: malabsorption, pancreatic insufficiency. These patients often have complex medication regimens, implanted ports, and established care plans."
          },
          {
            id: "para-patho-autoimmune",
            front: "Autoimmune Disease",
            back: "Immune system attacks self. Lupus: multi-system inflammation. Multiple sclerosis: demyelination. Type 1 diabetes: pancreatic beta cell destruction. These patients are often immunosuppressed from treatment (steroids, biologics), creating additional infection and healing risks."
          },
          {
            id: "para-patho-neoplasia",
            front: "Neoplasia",
            back: "Uncontrolled cell growth. Benign: localized, doesn't spread, may compress structures. Malignant: invades surrounding tissue, metastasizes. Cancer patients present with complications: hemorrhage, airway compromise, metabolic emergencies (hypercalcemia, tumor lysis), pain crises, and treatment side effects."
          },
          {
            id: "para-patho-acquired",
            front: "Acquired Disease",
            back: "Develops after birth from environmental factors, lifestyle, or aging. Atherosclerosis from diet/lifestyle/genetics. COPD from smoking. Cirrhosis from alcohol. Type 2 diabetes from metabolic syndrome. Understanding the mechanism connects the disease to its clinical presentation and treatment approach."
          }
        ]
      }
    ],
    keyPoints: [
      "Genetic diseases are DNA-encoded; congenital means present at birth",
      "Sickle cell, CF, and autoimmune diseases require adapted field care",
      "Cancer patients present with complications from both disease and treatment"
    ]
  },
  {
    id: "para-patho-integration",
    title: "Complex Pathophysiology Integration",
    content: `Real patients don't have textbook presentations. They have multiple comorbidities that interact, compound, and confuse. Paramedic-level pathophysiology means understanding these interactions.

**Multi-System Interaction**
A diabetic patient with CHF who develops pneumonia: hyperglycemia impairs immune function (worse infection), CHF limits fluid tolerance (can't give aggressive fluids for sepsis), and pneumonia impairs gas exchange (worsening already-compromised oxygen delivery). Each condition compounds the others.

**Predicting Complications**
When you understand mechanisms, you can predict what's coming. The crush injury patient will develop hyperkalemia when extricated. The DKA patient will need potassium replacement as insulin drives K⁺ intracellularly. The post-arrest patient will develop reperfusion injury. Anticipation is the hallmark of paramedic-level care.

**Comorbidity Compounds Everything**
Elderly patients with renal insufficiency can't clear drugs normally — dose adjustments matter. Liver failure patients can't produce clotting factors — minor bleeding becomes major. COPD patients rely on hypoxic drive — high-flow O₂ can suppress respiratory drive (though you should never withhold oxygen from a hypoxic patient).`,
    keyPoints: [
      "Multiple comorbidities interact and compound each other",
      "Understanding mechanisms lets you predict complications",
      "Anticipation of complications defines paramedic-level care"
    ],
    proTip: "The best paramedics think two steps ahead. While managing the current problem, they're already anticipating the next complication based on pathophysiology."
  },
  {
    id: "para-patho-quiz",
    title: "Knowledge Check",
    content: `These questions test paramedic-level pathophysiology reasoning — connecting mechanisms to clinical decisions.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "para-patho-q1",
          question: "A post-cardiac arrest patient has ROSC restored after 15 minutes of CPR. You should be concerned about:",
          options: [
            "Hyperkalemia only",
            "Reperfusion injury from reactive oxygen species",
            "Immediate full recovery",
            "Hyperthermia"
          ],
          correctIndex: 1,
          explanation: "Restoring blood flow after prolonged ischemia generates free radicals (reactive oxygen species) that cause additional cellular damage. This reperfusion injury is a recognized complication of resuscitation and one reason targeted temperature management is used post-arrest — to reduce metabolic demand and limit reperfusion damage."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-patho-q2",
          question: "A septic patient has low SVR, capillary leak, and myocardial depression. These simultaneous effects are caused by:",
          options: [
            "Blood loss",
            "Cytokine-mediated inflammatory response",
            "Allergic reaction",
            "Cardiac tamponade"
          ],
          correctIndex: 1,
          explanation: "Sepsis triggers massive cytokine release (TNF-alpha, IL-1, IL-6) that causes vasodilation (low SVR), endothelial damage (capillary leak), and direct myocardial depression — all simultaneously. This multi-factorial hemodynamic catastrophe is what makes septic shock so challenging to manage."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-patho-q3",
          question: "A patient has pH 7.28, PaCO₂ 55, HCO₃⁻ 24. This represents:",
          options: [
            "Metabolic acidosis",
            "Respiratory acidosis",
            "Respiratory alkalosis with compensation",
            "Mixed disorder"
          ],
          correctIndex: 1,
          explanation: "Low pH (acidosis) with elevated PaCO₂ (respiratory cause) and normal HCO₃⁻ (no metabolic compensation yet) = acute respiratory acidosis. The lungs are failing to eliminate CO₂ — likely from hypoventilation due to CNS depression, COPD exacerbation, or airway obstruction. Treatment: improve ventilation."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-patho-q4",
          question: "Cytopathic hypoxia in sepsis means:",
          options: [
            "The lungs can't absorb oxygen",
            "Mitochondria are damaged and can't use delivered oxygen",
            "Hemoglobin can't bind oxygen",
            "The airway is obstructed"
          ],
          correctIndex: 1,
          explanation: "In prolonged sepsis, reactive oxygen species and inflammatory mediators damage mitochondria themselves. Even with restored oxygen delivery, cells can't use it because the 'powerhouses' are broken. This explains why some patients deteriorate despite normalized vital signs."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-patho-q5",
          question: "A patient with sickle cell disease in crisis should receive which prehospital intervention?",
          options: [
            "Cold packs to reduce pain",
            "High-flow oxygen and IV hydration",
            "Tourniquet application",
            "Withhold oxygen to prevent sickling"
          ],
          correctIndex: 1,
          explanation: "Sickle cell crisis is triggered by low oxygen conditions—abnormal hemoglobin polymerizes and blocks capillaries. High-flow O₂ prevents further sickling, and IV hydration reduces blood viscosity and improves flow through blocked vessels. Cold exposure worsens sickling."
        }
      }
    ],
    keyPoints: [
      "Reperfusion injury follows ROSC — plan for post-arrest care",
      "Sepsis causes simultaneous vasodilation, capillary leak, and myocardial depression",
      "Acid-base interpretation: match pH direction to CO₂ or HCO₃⁻ to find the cause"
    ]
  },
  {
    id: "para-patho-wrapup",
    title: "Pathophysiology Mastery",
    content: `You've completed the deepest level of pathophysiology in this curriculum. These concepts are the foundation of everything you'll do as a paramedic.

**What You've Mastered:**
• Cellular metabolism explains why time matters in every resuscitation
• Acid-base interpretation guides ventilation and fluid management decisions
• The SIRS-sepsis-MODS continuum connects assessment to targeted intervention
• Disease mechanisms (genetic, congenital, acquired) inform your approach to complex patients

**The Integration**
Every level built on the previous. EMT pathophysiology gave you the vocabulary. AEMT added the mechanisms. Paramedic connected mechanisms to clinical decision-making. You now think in systems — tracing from cellular dysfunction through organ failure to targeted treatment.

**The Clinical Reality**
When you manage a septic patient, you're not just following a checklist. You understand that cytokines are causing vasodilation (need vasopressors), capillary leak (need volume but expect diminishing returns), and myocardial depression (monitor for cardiogenic component). That understanding makes you adaptable when protocols don't cover the situation.

**That's pathophysiology mastery.**`,
    keyPoints: [
      "Cellular metabolism → acid-base → systemic inflammation → clinical reasoning",
      "Each level builds on the previous: vocabulary → mechanisms → decisions",
      "Understanding pathophysiology makes you adaptable beyond protocols"
    ],
    rememberThis: "Pathophysiology isn't a subject you studied — it's a lens through which you see every patient. The best paramedics never stop thinking about WHY."
  }
];

// =====================================================
// AEMT Advanced Airway Management Content
// =====================================================

export const aemtAdvancedAirwayContent: TopicSection[] = [
  {
    id: "no-airway-no-patient",
    title: "No Airway, No Patient",
    content: `Here's the reality: if your patient doesn't have an open airway, nothing else you do matters. Medications, IVs, assessments — none of it helps if oxygen can't get to the lungs.

At the EMT level, you learned head-tilt chin-lift, jaw thrust, OPAs, and NPAs. Those are solid tools, and they work most of the time. But sometimes they're not enough.

**Think of it like this:** Your BLS airway skills are hand tools — a hammer, a screwdriver, a wrench. They handle most jobs. But some jobs need power tools. That's what advanced airways are — power tools for situations where the basics aren't cutting it.

**Why does this matter for AEMT?**
You're the bridge between BLS and paramedic-level care. When a patient is unconscious, has no gag reflex, and BLS maneuvers aren't maintaining the airway — you have the training and the tools to step up. Supraglottic airways and CPAP expand what you can do for patients in respiratory crisis.

**NREMT Alignment:** The XABCDE assessment sequence puts airway as the highest priority immediately after controlling life-threatening bleeding. Your advanced airway skills directly support this critical sequence.

*Verify all clinical information with official NREMT guidelines and your local protocols. This content is educational only.*`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-airway-intro-q1",
          question: "At the AEMT level, which tools are added to your airway management toolkit?",
          options: [
            "Endotracheal intubation and RSI",
            "Supraglottic airways and CPAP",
            "Surgical cricothyrotomy",
            "Video laryngoscopy"
          ],
          correctIndex: 1,
          explanation: "AEMT adds supraglottic airways (King LT, i-gel) and CPAP to your toolkit. ETI, RSI, and surgical airways are paramedic-level skills. SGAs and CPAP bridge the gap between BLS and paramedic care."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-airway-intro-q2",
          question: "In the XABCDE assessment sequence, airway is the highest priority after:",
          options: [
            "Breathing assessment",
            "Disability assessment",
            "Life-threatening hemorrhage control",
            "Exposure"
          ],
          correctIndex: 2,
          explanation: "XABCDE places eXsanguinating hemorrhage first (the X), then Airway. You control life-threatening bleeding before addressing the airway, because a patient who bleeds out won't benefit from an open airway."
        }
      }
    ],
    keyPoints: [
      "BLS airway skills are the foundation — advanced airways build on them",
      "AEMT adds supraglottic airways and CPAP to your toolkit",
      "Airway is the highest clinical priority after hemorrhage control"
    ],
    proTip: "Every experienced provider will tell you: master the basics first. A well-performed head-tilt chin-lift saves more lives than a poorly placed advanced airway. Build on your foundation, don't replace it."
  },
  {
    id: "airway-anatomy-review",
    title: "Airway Anatomy – A Quick Review",
    content: `Before we add new tools, let's make sure the foundation is solid. Understanding where these devices sit in the airway helps you use them confidently.

Your airway is essentially a tube system that carries air from the outside world to the deepest parts of your lungs. Each part has a specific job, and problems at different levels require different solutions.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Upper Airway",
            content: "The upper airway runs from the nose and mouth down to the larynx (voice box). Think of it as the entrance hallway of a building — it warms, filters, and moistens the air before it goes deeper.",
            bullets: [
              "Nose and mouth: entry points for air",
              "Pharynx (throat): divided into nasopharynx, oropharynx, and hypopharynx",
              "Larynx: contains the vocal cords — the gateway to the lower airway",
              "Most common obstruction site: tongue falling back in unconscious patients"
            ]
          },
          {
            label: "Lower Airway",
            content: "Below the larynx, the lower airway branches like a tree — from the trunk to the smallest twigs.",
            bullets: [
              "Trachea: the main trunk — a rigid tube held open by cartilage rings",
              "Bronchi: two main branches, one to each lung",
              "Bronchioles: smaller branches that lead to the gas exchange zones",
              "Alveoli: tiny air sacs where oxygen enters the blood and CO₂ leaves"
            ]
          },
          {
            label: "Where SGAs Sit",
            content: "Supraglottic airways sit above the vocal cords — that's what 'supraglottic' means. They create a seal around the laryngeal inlet without passing through the cords.",
            bullets: [
              "SGAs seal above the glottis (vocal cord opening)",
              "They don't enter the trachea — they sit on top like a plug",
              "This makes them easier to place than endotracheal tubes",
              "Proper positioning creates an effective seal for ventilation"
            ]
          },
          {
            label: "O₂ vs. Ventilation",
            content: "These are two different jobs. Understanding the difference helps you choose the right intervention.",
            bullets: [
              "Oxygenation: delivering oxygen to the blood — like delivering packages to houses",
              "Ventilation: moving air in and out — like the mail truck driving the route",
              "You can have good ventilation but poor oxygenation (damaged alveoli)",
              "CPAP helps with oxygenation; SGAs and BVM help with ventilation"
            ]
          }
        ]
      }
    ],
    keyPoints: [
      "Upper airway: nose to larynx — where most obstructions happen",
      "Lower airway: trachea to alveoli — where gas exchange occurs",
      "SGAs sit above the vocal cords, creating a seal without entering the trachea"
    ]
  },
  {
    id: "airway-anatomy-quiz-inline",
    title: "Airway Anatomy – Quick Check",
    content: "Test your anatomy knowledge.",
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-airway-anatomy-q1",
          question: "The most common site of airway obstruction in unconscious patients is:",
          options: [
            "The bronchi",
            "The tongue falling back into the oropharynx",
            "The trachea",
            "The alveoli"
          ],
          correctIndex: 1,
          explanation: "In unconscious patients, loss of muscle tone causes the tongue to fall backward and obstruct the oropharynx. This is why head-tilt chin-lift and jaw thrust are your first interventions—they lift the tongue forward."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-airway-anatomy-q2",
          question: "What is the difference between oxygenation and ventilation?",
          options: [
            "They are the same thing",
            "Oxygenation delivers O₂ to blood; ventilation moves air in and out",
            "Ventilation delivers O₂; oxygenation removes CO₂",
            "Oxygenation is passive; ventilation is active"
          ],
          correctIndex: 1,
          explanation: "Oxygenation is delivering oxygen to the blood (like delivering packages). Ventilation is moving air in and out (like the mail truck driving the route). You can have good ventilation but poor oxygenation if the alveoli are damaged."
        }
      }
    ]
  },
  {
    id: "airway-tools-terminology",
    title: "AEMT Airway Tools and Terminology",
    content: `Let's get familiar with the specific devices and terms you'll use at the AEMT level. Each tool has a specific purpose, and knowing the vocabulary helps you communicate clearly with your team.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "aemt-airway-fc1",
            front: "King LT (Laryngeal Tube)",
            back: "A blind-insertion supraglottic airway device. Sized by patient HEIGHT, not weight. Has two cuffs that inflate with a single syringe to seal above and below the larynx. Think of it as a two-plug system — one seals the throat above, one seals the esophagus below."
          },
          {
            id: "aemt-airway-fc2",
            front: "i-gel",
            back: "A supraglottic airway with a gel cuff that molds to the patient's anatomy without inflation — like memory foam conforming to your shape. No syringe needed. Sized by patient weight. Faster to insert because there's no cuff to inflate."
          },
          {
            id: "aemt-airway-fc3",
            front: "Waveform Capnography",
            back: "The gold standard for confirming airway placement. Measures CO₂ in exhaled air and displays a waveform. A normal square waveform means the device is in the airway. A flat line means no CO₂ detected — the device may be in the esophagus. Think of it as a heartbeat monitor, but for breathing."
          },
          {
            id: "aemt-airway-fc4",
            front: "CPAP",
            back: "Continuous Positive Airway Pressure — a mask that delivers air under constant pressure, splinting open collapsed airways and pushing fluid out of alveoli. Like inflating a tent from the inside so the walls don't collapse. Requires a conscious, breathing patient."
          },
          {
            id: "aemt-airway-fc5",
            front: "Suction Catheter",
            back: "Clears blood, vomit, and secretions from the airway. Rigid (Yankauer) for the mouth, flexible for deeper suctioning. Limit suctioning to 10 seconds at a time and pre-oxygenate before each attempt — like using a shop vac but with a strict time limit."
          },
          {
            id: "aemt-airway-fc6",
            front: "BVM (Bag-Valve-Mask)",
            back: "Squeezes air into the patient manually. Requires a good mask seal — the hardest part. Two-person technique is more effective: one person seals the mask, the other squeezes the bag. Think of squeezing a balloon to push air through a tube."
          }
        ]
      }
    ],
    keyPoints: [
      "King LT: sized by height, requires cuff inflation",
      "i-gel: sized by weight, gel cuff molds automatically",
      "Waveform capnography is the gold standard for confirming placement"
    ]
  },
  {
    id: "airway-tools-quiz-inline",
    title: "Airway Tools – Quick Check",
    content: "Test your knowledge of AEMT airway devices.",
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-airway-tools-q1",
          question: "The King LT is sized based on the patient's:",
          options: [
            "Weight",
            "Age",
            "Height",
            "Chest circumference"
          ],
          correctIndex: 2,
          explanation: "The King LT is sized by patient HEIGHT, not weight. This is different from the i-gel, which is sized by weight. Knowing the correct sizing method prevents using the wrong size device."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-airway-tools-q2",
          question: "Waveform capnography confirms airway placement by measuring:",
          options: [
            "Oxygen levels in the blood",
            "CO₂ in exhaled air",
            "Air pressure in the device",
            "Heart rate"
          ],
          correctIndex: 1,
          explanation: "Capnography measures CO₂ in exhaled air. A normal square waveform means the device is in the airway (CO₂ is only present in exhaled air from lungs). A flat line means no CO₂—the device may be in the esophagus."
        }
      }
    ]
  },
  {
    id: "bls-vs-advanced-airways",
    title: "BLS vs. Advanced Airways – Knowing the Difference",
    content: `Understanding the progression from basic to advanced airways helps you make smart decisions about which tool to reach for.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "BLS Airways",
            content: "Your foundation tools. These should always be attempted first — they're fast, simple, and effective in most situations.",
            bullets: [
              "Head-tilt chin-lift: first-line for non-trauma patients",
              "Jaw thrust: use when spinal injury is suspected",
              "OPA: holds the tongue forward in unresponsive patients without gag reflex",
              "NPA: tolerated by patients with intact gag reflex",
              "BVM: provides ventilation with room air or supplemental oxygen"
            ]
          },
          {
            label: "Supraglottic (AEMT)",
            content: "Your escalation tools. Used when BLS airways fail or aren't sufficient.",
            bullets: [
              "King LT and i-gel sit above the vocal cords — easier to place than ET tubes",
              "Provide a more secure airway than BLS adjuncts alone",
              "Allow hands-free ventilation when connected to a BVM or ventilator",
              "Don't protect against aspiration as well as endotracheal tubes",
              "Ideal for cardiac arrest, unconscious patients without gag reflex"
            ]
          },
          {
            label: "Paramedic Preview",
            content: "At the paramedic level, endotracheal intubation goes through the vocal cords into the trachea. More secure, but harder to place.",
            bullets: [
              "Endotracheal tube passes through vocal cords into trachea",
              "Provides the most secure airway with aspiration protection",
              "Requires direct visualization of vocal cords",
              "Higher skill requirement and more potential complications",
              "You'll learn this at the paramedic level — SGAs are your go-to for now"
            ]
          },
          {
            label: "Decision Guide",
            content: "Let the patient's condition guide your choice.",
            bullets: [
              "Conscious + breathing but struggling → CPAP (if BP is adequate)",
              "Unconscious + no gag + BLS adequate → OPA + BVM",
              "Unconscious + no gag + BLS failing → supraglottic airway",
              "Always attempt BLS first unless the situation clearly demands escalation",
              "Confirm placement with waveform capnography — always"
            ]
          }
        ]
      }
    ],
    keyPoints: [
      "BLS airways first — escalate only when needed",
      "SGAs are the AEMT-level escalation for failed BLS airways",
      "Always confirm advanced airway placement with capnography"
    ],
    rememberThis: "The best airway is the one that works. A well-placed OPA with good BVM technique beats a poorly placed SGA every time."
  },
  {
    id: "bls-advanced-quiz-inline",
    title: "BLS vs Advanced Airways – Quick Check",
    content: "Test your airway decision-making.",
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-airway-bls-q1",
          question: "A conscious patient in respiratory distress with adequate blood pressure should receive:",
          options: [
            "Supraglottic airway",
            "Endotracheal intubation",
            "CPAP",
            "OPA"
          ],
          correctIndex: 2,
          explanation: "CPAP is ideal for conscious, breathing patients with adequate BP (>90 systolic) who are in respiratory distress. It splints open airways and pushes fluid out of alveoli. SGAs require an unconscious patient; OPAs require no gag reflex."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-airway-bls-q2",
          question: "SGAs provide a less secure airway than endotracheal tubes primarily because they:",
          options: [
            "Cannot deliver oxygen",
            "Don't protect against aspiration as well",
            "Require direct visualization to place",
            "Cannot be used during cardiac arrest"
          ],
          correctIndex: 1,
          explanation: "SGAs sit above the vocal cords and don't seal the trachea as completely as an ET tube. They don't protect against aspiration as well. However, they're much easier to place and are ideal for AEMT-level care and cardiac arrest management."
        }
      }
    ]
  },
  {
    id: "field-assessment",
    title: "Assessing Airway Problems in the Field",
    content: `Before you grab any device, spend 10 seconds looking at your patient. Their body is telling you what it needs.

**The Look-Listen-Feel Approach**

**Look:** Is the chest rising? Are they using accessory muscles (neck, abdomen)? Are they in the tripod position? What's their skin color?

**Listen:** Normal breathing? Snoring (tongue obstruction)? Gurgling (fluid)? Stridor (upper airway narrowing)? Wheezing (lower airway narrowing)? Or silence — the most dangerous sound of all?

**Feel:** Is air moving at the nose and mouth? Is the chest expanding symmetrically?

**Signs of Impending Airway Failure:**
• Tripod positioning — the patient is fighting to breathe
• One-word answers — can't get enough air for sentences
• Accessory muscle use — neck muscles pulling with each breath
• Paradoxical breathing — chest goes in when it should go out
• Decreasing consciousness — the brain is running out of oxygen
• Agonal breathing — slow, gasping breaths — a pre-arrest sign

**The Clinical Connection:**
Your assessment drives your intervention. Mild wheezing → nebulizer. Tripod positioning with one-word answers → consider CPAP. Unconscious with no gag reflex → supraglottic airway.

*Always verify clinical decision-making with your local protocols and medical direction.*`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-airway-assess-q1",
          question: "Which airway sound indicates upper airway narrowing?",
          options: [
            "Wheezing",
            "Crackles",
            "Stridor",
            "Rhonchi"
          ],
          correctIndex: 2,
          explanation: "Stridor is a high-pitched sound indicating upper airway narrowing (above the vocal cords). Wheezing indicates lower airway narrowing (bronchospasm). This distinction helps you choose the right intervention—upper airway problems may need airway maneuvers or advanced airways."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-airway-assess-q2",
          question: "Agonal breathing is a sign that the patient is:",
          options: [
            "Recovering from respiratory distress",
            "In a pre-arrest state",
            "Hyperventilating",
            "Sleeping normally"
          ],
          correctIndex: 1,
          explanation: "Agonal breathing—slow, irregular gasping breaths—is a pre-arrest sign indicating the brainstem is failing. These are NOT effective breaths. This patient needs immediate intervention: BVM ventilation and likely advanced airway placement."
        }
      }
    ],
    keyPoints: [
      "Look-listen-feel before reaching for any device",
      "Silence (no air movement) is more dangerous than noisy breathing",
      "Assessment findings guide your intervention choice"
    ],
    proTip: "Experienced providers assess an airway in seconds by combining what they see, hear, and feel simultaneously. Practice this on every patient — it becomes automatic."
  },
  {
    id: "aemt-airway-interventions",
    title: "AEMT Airway Interventions – Step by Step",
    content: `Now let's talk about what you actually DO. Each intervention has a specific sequence — like following a recipe, each step matters.

**SGA Insertion (King LT / i-gel)**
1. Confirm the need: BLS airway failed, patient unconscious with no gag reflex
2. Select the correct size (King LT by height, i-gel by weight)
3. Lubricate the device
4. Open the mouth and insert along the midline
5. For King LT: inflate the cuff with the recommended volume
6. Connect to BVM and ventilate
7. Confirm with waveform capnography, lung sounds, and chest rise

**CPAP Application**
1. Confirm patient is conscious, breathing, BP systolic > 90
2. Explain the device — patient compliance matters
3. Apply the mask with a good seal
4. Set pressure (typically 5-10 cmH₂O per protocol)
5. Coach: "Breathe normally, let the machine do the work"
6. Monitor for improvement or deterioration

**Suctioning**
1. Pre-oxygenate before suctioning
2. Insert catheter without suction applied
3. Apply suction while withdrawing — limit to 10 seconds
4. Re-oxygenate immediately after
5. Repeat if needed, monitoring SpO₂ between attempts`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "aemt-intervention-fc1",
            front: "SGA Insertion Steps",
            back: "Size → lubricate → insert along midline → inflate cuff (King LT) or seat (i-gel) → connect BVM → confirm with capnography + lung sounds + chest rise. Like following a recipe — each step in order."
          },
          {
            id: "aemt-intervention-fc2",
            front: "CPAP Application",
            back: "Confirm conscious + breathing + BP > 90 → explain to patient → mask seal → set pressure (5-10 cmH₂O) → coach breathing → monitor. Like helping someone breathe through a snorkel — they breathe, the device supports."
          },
          {
            id: "aemt-intervention-fc3",
            front: "Suctioning Technique",
            back: "Pre-oxygenate → insert without suction → suction while withdrawing → limit 10 seconds → re-oxygenate. Like using a shop vac with a strict time limit — too long removes needed oxygen."
          },
          {
            id: "aemt-intervention-fc4",
            front: "Confirmation Methods",
            back: "Waveform capnography is the GOLD STANDARD — normal waveform = device in airway. Also check: bilateral lung sounds, chest rise, absence of epigastric sounds (not in stomach)."
          },
          {
            id: "aemt-intervention-fc5",
            front: "Troubleshooting: No Chest Rise",
            back: "Check: device seal, reposition head, ensure cuff inflation adequate, consider wrong size or position. If no improvement — remove device and return to BVM while you troubleshoot."
          }
        ]
      }
    ],
    keyPoints: [
      "Follow insertion steps in order — skipping steps leads to complications",
      "CPAP requires a conscious, breathing patient with adequate blood pressure",
      "Waveform capnography is the gold standard for confirming any advanced airway"
    ]
  },
  {
    id: "airway-interventions-quiz-inline",
    title: "Airway Interventions – Quick Check",
    content: "Test your procedural knowledge.",
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-airway-interv-q1",
          question: "Before applying CPAP, you must confirm the patient's systolic BP is at least:",
          options: [
            "60 mmHg",
            "80 mmHg",
            "90 mmHg",
            "120 mmHg"
          ],
          correctIndex: 2,
          explanation: "CPAP requires systolic BP > 90 mmHg. Positive pressure ventilation can decrease venous return and drop blood pressure further. In a hypotensive patient, CPAP could worsen hemodynamics. Ensure adequate BP before applying."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-airway-interv-q2",
          question: "After inserting an SGA, the first confirmation method should be:",
          options: [
            "Chest X-ray",
            "Waveform capnography",
            "Pulse oximetry",
            "Blood gas analysis"
          ],
          correctIndex: 1,
          explanation: "Waveform capnography is the gold standard for confirming airway placement. A normal CO₂ waveform confirms the device is in the airway. Also check bilateral lung sounds, chest rise, and absence of epigastric sounds."
        }
      }
    ]
  },
  {
    id: "aemt-airway-quiz",
    title: "Knowledge Check",
    content: `Let's make sure these concepts are solid. These questions test your clinical decision-making — the kind of thinking you'll need in the field.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-airway-q1",
          question: "A patient is unconscious with no gag reflex. BLS airway maneuvers are not maintaining the airway. As an AEMT, your next step is:",
          options: [
            "Perform a cricothyrotomy",
            "Insert a supraglottic airway",
            "Attempt endotracheal intubation",
            "Apply CPAP"
          ],
          correctIndex: 1,
          explanation: "Supraglottic airways are your AEMT-level escalation when BLS airways fail. Cricothyrotomy and endotracheal intubation are paramedic-scope procedures. CPAP requires a conscious, breathing patient. When BLS fails in an unconscious patient without a gag reflex, the SGA is your next tool."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-airway-q2",
          question: "After placing a King LT, waveform capnography shows a flat line (no waveform). This most likely means:",
          options: [
            "The device is properly placed in the trachea",
            "The device is in the esophagus",
            "The capnography monitor needs calibration",
            "This is a normal finding for the first 30 seconds"
          ],
          correctIndex: 1,
          explanation: "A flat capnography waveform means no CO₂ is being detected — the device is NOT in the airway. CO₂ is only present in exhaled air from the lungs. No waveform = wrong position. Remove the device, ventilate with BVM, and reattempt."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-airway-q3",
          question: "CPAP is most appropriate for which patient?",
          options: [
            "Unconscious patient with no gag reflex",
            "Conscious patient in acute pulmonary edema with BP 140/90",
            "Patient in cardiac arrest",
            "Patient with a penetrating chest wound"
          ],
          correctIndex: 1,
          explanation: "CPAP splints airways open and pushes fluid out of alveoli — perfect for pulmonary edema. The patient MUST be conscious, breathing, and have adequate BP (systolic > 90). Unconscious patients need a different airway. Cardiac arrest needs BVM. Penetrating chest wounds risk tension pneumothorax with positive pressure."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-airway-q4",
          question: "When suctioning a patient's airway, you should limit each attempt to:",
          options: [
            "5 seconds",
            "10 seconds",
            "20 seconds",
            "30 seconds"
          ],
          correctIndex: 1,
          explanation: "Limit suctioning to 10 seconds per attempt. Suctioning removes air (and oxygen) along with secretions. Going too long drops oxygen levels dangerously. Pre-oxygenate before and re-oxygenate after. Think of holding your breath — 10 seconds is manageable, 30 is dangerous."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-airway-q5",
          question: "What is the key difference between the King LT and i-gel?",
          options: [
            "King LT is for adults only; i-gel is for pediatrics only",
            "King LT has an inflatable cuff; i-gel has a gel cuff that molds without inflation",
            "King LT goes through the vocal cords; i-gel sits above them",
            "King LT requires direct visualization; i-gel is blind insertion"
          ],
          correctIndex: 1,
          explanation: "The main difference is the cuff. King LT has an inflatable cuff you fill with a syringe. The i-gel has a thermoplastic gel cuff that molds to anatomy without inflation — like memory foam. Both are blind insertion, both sit above the vocal cords, and both come in adult and pediatric sizes."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-patho-q4",
          question: "Anaerobic metabolism produces how many ATP compared to aerobic?",
          options: [
            "The same amount",
            "Half as many (18 ATP)",
            "Only 2 ATP vs. 36 aerobically",
            "More ATP but with waste products"
          ],
          correctIndex: 2,
          explanation: "Anaerobic metabolism produces only 2 ATP vs. 36 ATP aerobically—a 94% drop in energy production. Plus it generates lactate as waste, contributing to acidosis. This massive energy deficit is why cells can't survive long without oxygen."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-patho-q5",
          question: "Metaplasia in a smoker's airways involves:",
          options: [
            "Cells dying from smoke damage",
            "Ciliated cells being replaced by tougher squamous cells",
            "Airways getting wider",
            "New blood vessels forming"
          ],
          correctIndex: 1,
          explanation: "Chronic irritation from smoking causes ciliated respiratory epithelium to be replaced by tougher squamous cells. These withstand the irritation but can't clear mucus—sacrificing function for durability. This adaptation is reversible if smoking stops."
        }
      }
    ]
  },
  {
    id: "aemt-airway-wrapup",
    title: "You've Leveled Up Your Airway Skills",
    content: `You've added powerful tools to your airway management toolkit:

• **Supraglottic airways** (King LT, i-gel) are your escalation when BLS airways fail
• **CPAP** splints open airways and pushes fluid out — a game-changer for conscious patients in respiratory failure
• **Waveform capnography** is the gold standard for confirming placement and monitoring
• **Assessment drives intervention** — look, listen, and feel before reaching for any device
• **BLS first, always** — advanced tools build on your foundation

**The Clinical Reality**
Most airway problems are solved with positioning and basic adjuncts. But when they're not enough, you now have the knowledge and skills to step up. That's what makes you an AEMT — the bridge between basic and advanced care.

**What's Next?**
At the paramedic level, you'll add endotracheal intubation, RSI medications, and surgical airways. But every paramedic will tell you — supraglottic airways save more lives than heroic intubations. The skills you just learned are the ones you'll use most often.

*This content is for educational purposes only. Always verify with official NREMT guidelines, your training program, and local protocols.*`,
    keyPoints: [
      "SGAs and CPAP are your AEMT-level power tools for airway management",
      "Waveform capnography confirms placement — always use it",
      "Assessment drives intervention — match the tool to the patient's needs",
      "BLS skills remain your foundation — advanced tools build on them"
    ],
    rememberThis: "You started this module knowing BLS airway management. Now you have supraglottic airways, CPAP, and capnography in your toolkit. That's real clinical growth — and it directly translates to better patient outcomes."
  }
];

// =====================================================
// Paramedic Advanced Airway & Intubation Content
// =====================================================

export const paramedicAdvancedAirwayContent: TopicSection[] = [
  {
    id: "airway-belongs-to-you",
    title: "The Airway Belongs to You",
    content: `At the paramedic level, you own the airway completely. Everything you learned at EMT and AEMT still applies — head-tilt chin-lift, OPAs, SGAs, CPAP. Now you're adding the most advanced tools in prehospital medicine.

**Think of it like this:** At EMT, you had hand tools. At AEMT, you got power tools. Now you're stepping into a full workshop — more capability, more options, and more responsibility.

**Why does this matter?**
Airway management is tested across multiple NREMT domains because it connects to everything: assessment, pharmacology, pathophysiology, and clinical decision-making. When you intubate a patient, you're applying anatomy, pharmacology, and procedural skills all at once.

**The Honest Truth**
Endotracheal intubation is a high-risk, high-reward skill. Done right, it provides the most secure airway possible. Done wrong — or done when it's not needed — it can kill a patient. That's why preparation, prediction, and backup plans matter as much as the skill itself.

**What You'll Master in This Module:**
• Endotracheal intubation (ETI) — the definitive airway
• Rapid Sequence Intubation (RSI) — medication-facilitated intubation
• Difficult airway prediction and management
• Surgical cricothyrotomy — the last resort

*Verify all clinical information with official NREMT guidelines, your state protocols, and your medical director. This content is educational only.*`,
    keyPoints: [
      "Paramedic-level airway management builds on EMT and AEMT foundations",
      "ETI provides the most secure airway but carries significant risks",
      "Preparation and backup plans are as important as technical skill"
    ],
    proTip: "Every experienced paramedic will tell you: the most important skill in airway management isn't intubation — it's knowing when NOT to intubate. Sometimes CPAP or an SGA is the better choice."
  },
  {
    id: "endotracheal-intubation",
    title: "Endotracheal Intubation – The Definitive Airway",
    content: `Endotracheal intubation places a tube through the vocal cords directly into the trachea. It's called the "definitive airway" because once it's properly placed, it provides a sealed pathway for ventilation with aspiration protection.

**Think of it like parking a car in a tight garage.** You need to see where you're going, line everything up, and guide the tube precisely into position. Rush it or lose your view, and you'll end up in the wrong place.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Why ETI Matters",
            content: "ETI is the only prehospital airway that truly seals the trachea — like locking a door versus just closing it. SGAs sit above the cords and can leak or dislodge. An ET tube sits inside the trachea with an inflated cuff.",
            bullets: [
              "Provides a sealed airway with cuff inflation",
              "Protects against aspiration of vomit and blood",
              "Allows precise ventilation control (rate, volume, pressure)",
              "Enables medication delivery via the tube in some protocols",
              "Gold standard for prolonged airway management"
            ]
          },
          {
            label: "Equipment Setup",
            content: "Like a pilot's pre-flight checklist, every piece of equipment must be checked before you start. Missing one item can turn a routine intubation into a crisis.",
            bullets: [
              "Laryngoscope: Mac (curved) or Miller (straight) blade — check the light",
              "ET tube: sized 7.0-8.0 for most adults — check cuff integrity",
              "Stylet: inserted into the tube, shaped into a hockey-stick curve",
              "10 mL syringe: to inflate the cuff after placement",
              "Suction: Yankauer ready at the head — always",
              "BVM with oxygen: your backup and pre-oxygenation tool",
              "Waveform capnography: the gold standard for confirming placement",
              "Tape or commercial holder: to secure the tube"
            ]
          },
          {
            label: "The Technique",
            content: "Intubation follows a specific sequence. Like parking in that tight garage — position yourself, get a clear view, and guide the tube into place.",
            bullets: [
              "Position: sniffing position — ear canal aligned with sternal notch",
              "Open the mouth with a scissor technique (right hand)",
              "Insert laryngoscope blade with left hand — NEVER use teeth as a lever",
              "Mac blade: tip into vallecula, lift to expose cords",
              "Miller blade: tip under epiglottis, lift directly",
              "Visualize the vocal cords — they look like a white V",
              "Pass the ET tube through the cords until the cuff is just past them",
              "Inflate cuff, remove stylet, attach BVM"
            ]
          },
          {
            label: "Confirmation",
            content: "One confirmation method isn't enough. Use multiple checks because a misplaced tube can be fatal.",
            bullets: [
              "Waveform capnography: GOLD STANDARD — persistent waveform = tracheal placement",
              "Bilateral lung sounds: listen at both axillae (side of chest)",
              "Absence of epigastric sounds: no air in the stomach",
              "Chest rise: symmetric with each ventilation",
              "Tube fogging: condensation inside the tube (supportive, not definitive)",
              "If ANY doubt — remove the tube and ventilate with BVM"
            ]
          }
        ]
      }
    ],
    keyPoints: [
      "ETI provides a sealed, definitive airway with aspiration protection",
      "Equipment check before every attempt — no exceptions",
      "Waveform capnography is the gold standard for confirming placement"
    ],
    rememberThis: "Never force the tube. If you can't see the cords, don't blindly push. Remove the blade, ventilate with BVM, and reposition. A failed attempt with good oxygenation beats a forced attempt with a dead patient."
  },
  {
    id: "rsi-pharmacology",
    title: "RSI Pharmacology – The 7 P's",
    content: `Rapid Sequence Intubation uses medications to sedate and paralyze a patient for intubation. It's the most common method for intubating patients who still have reflexes — and it follows a strict sequence.

**The 7 P's are your checklist.** Like a pilot going through pre-flight, every step happens in order. Skipping or rushing steps creates dangerous situations.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "para-rsi-fc1",
            front: "The 7 P's of RSI",
            back: "1. Preparation (equipment + team)\n2. Preoxygenation (3-5 min 100% O₂ or 8 vital capacity breaths)\n3. Pretreatment (fentanyl, lidocaine — blunt the body's stress response)\n4. Paralysis with Induction (sedation drug + paralytic at the same time)\n5. Protection/Positioning (sniffing position, Sellick's if indicated)\n6. Placement (pass the tube through the cords)\n7. Post-intubation management (confirm, secure, sedate, set ventilator)\n\nYour step-by-step checklist — every time, in order."
          },
          {
            id: "para-rsi-fc2",
            front: "Etomidate",
            back: "Induction agent — puts the patient to sleep in about 30 seconds, wears off in 5 minutes. Hemodynamically neutral — doesn't crash blood pressure like other agents. Think of it as a light switch for consciousness. Dose: 0.3 mg/kg IV. Watch for: brief myoclonus (muscle twitching), adrenal suppression with repeated doses."
          },
          {
            id: "para-rsi-fc3",
            front: "Ketamine",
            back: "Alternative induction agent — maintains respiratory drive and blood pressure. Creates a dissociative state — like disconnecting the brain from the body temporarily. Great for asthma (bronchodilator effect) and hypotensive patients. Dose: 1-2 mg/kg IV. Watch for: increased secretions (have suction ready), emergence reactions."
          },
          {
            id: "para-rsi-fc4",
            front: "Succinylcholine",
            back: "Depolarizing paralytic — fastest onset (45-60 seconds), shortest duration (6-10 minutes). The body goes limp, including respiratory muscles. CONTRAINDICATED in: hyperkalemia, burns >24 hrs, crush injuries >24 hrs, neuromuscular diseases, prolonged immobilization. Dose: 1-1.5 mg/kg IV. These patients already have high potassium — succinylcholine dumps more, risking fatal cardiac arrest."
          },
          {
            id: "para-rsi-fc5",
            front: "Rocuronium",
            back: "Non-depolarizing paralytic — onset 60-90 seconds, lasts 30-45 minutes. Safer profile than succinylcholine (no potassium release). Reversible with sugammadex (a 'rescue' drug that wraps around rocuronium like a cage). Dose: 1-1.2 mg/kg IV for RSI dosing. Longer duration means you're committed once you give it."
          },
          {
            id: "para-rsi-fc6",
            front: "Fentanyl (Pretreatment)",
            back: "Given 3 minutes before induction to blunt the body's stress response to laryngoscopy. Prevents dangerous spikes in heart rate and blood pressure when the blade enters the airway. Dose: 1-3 mcg/kg IV slow push. Like putting a governor on an engine before revving it — controls the response."
          }
        ]
      }
    ],
    keyPoints: [
      "The 7 P's are a mandatory sequence — never skip steps",
      "Etomidate: fast, hemodynamically neutral — default induction agent",
      "Succinylcholine: fastest but contraindicated in hyperkalemia, burns, crush injuries"
    ],
    proTip: "Here's a clinical pearl: preoxygenation is the most important P. Three to five minutes of 100% oxygen fills the lungs with an oxygen reserve. This buys you 3-8 minutes of apnea time before desaturation. Skip this step and your patient desaturates during the paralysis window — that's when bad things happen."
  },
  {
    id: "difficult-airway-prediction",
    title: "Difficult Airway Prediction – LEMON and Beyond",
    content: `The best intubators don't just have great technique — they predict difficulty before they start. Like checking the weather before a hike, anticipating problems prevents emergencies.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "LEMON Assessment",
            content: "LEMON is your pre-game scouting report. Each letter checks a different predictor of difficulty. Do this BEFORE giving any medications.",
            bullets: [
              "L — Look externally: facial trauma, obesity, short neck, beard, large tongue",
              "E — Evaluate 3-3-2 rule: 3 fingers mouth opening, 3 fingers hyoid to chin, 2 fingers thyroid notch to floor of mouth",
              "M — Mallampati score: with mouth open, can you see the uvula? Less visible = harder intubation",
              "O — Obstruction: blood, vomit, swelling, foreign body, epiglottitis",
              "N — Neck mobility: can the patient extend their neck? Cervical collar = limited mobility"
            ]
          },
          {
            label: "Easy vs. Difficult",
            content: "Most intubations are straightforward — you get a good view and pass the tube on the first attempt. But predicting difficulty prevents surprises.",
            bullets: [
              "Easy airway: good mouth opening, visible landmarks, mobile neck, thin patient",
              "Potentially difficult: short neck, obesity, limited mouth opening, trauma",
              "Known difficult: previous failed intubation, airway pathology, facial burns/edema",
              "If you predict difficulty, prepare your backup plan BEFORE you start",
              "Calling for backup early is smart — calling late is desperate"
            ]
          },
          {
            label: "Backup Plans",
            content: "Always know your next move before you make your first. Failed intubation isn't failure — having no plan is.",
            bullets: [
              "Plan A: Direct or video laryngoscopy with ET tube",
              "Plan B: Bougie-assisted intubation (guide wire through cords)",
              "Plan C: Supraglottic airway (your AEMT-level tools are your safety net)",
              "Plan D: BVM ventilation (go back to basics)",
              "Plan E: Surgical airway (cricothyrotomy — the emergency exit)",
              "Each step has a maximum of 2 attempts before moving to the next plan"
            ]
          },
          {
            label: "Can't Intubate, Can't Oxygenate",
            content: "The nightmare scenario: every technique fails and the patient can't be oxygenated. This is when surgical airway becomes mandatory.",
            bullets: [
              "CICO is rare (< 1% of prehospital airways) but you MUST be prepared",
              "Recognition: multiple failed intubation attempts + failed SGA + failed BVM",
              "Action: immediate surgical cricothyrotomy — no more delays",
              "Prevention: adequate preoxygenation buys time, early recognition saves lives",
              "Mental rehearsal: visualize the CICO scenario so you don't freeze when it happens"
            ]
          }
        ]
      }
    ],
    keyPoints: [
      "LEMON assessment before every intubation — predict difficulty early",
      "Always have Plans B through E ready before starting Plan A",
      "Can't Intubate, Can't Oxygenate = immediate surgical airway"
    ]
  },
  {
    id: "clinical-decision-making",
    title: "Clinical Decision-Making – When to Intubate",
    content: `Here's something experienced paramedics know: not every patient who CAN be intubated SHOULD be intubated. Sometimes CPAP or a supraglottic is the better choice. The decision to intubate should be deliberate, not reflexive.

**When TO Intubate:**
• GCS ≤ 8 with no protective airway reflexes
• Respiratory failure not responding to non-invasive ventilation
• Cardiac arrest (after initial CPR — don't stop compressions for a tube)
• Anticipated clinical deterioration (burns with airway edema, expanding hematoma)
• Need for controlled ventilation (severe TBI requiring CO₂ management)

**When NOT to Intubate:**
• Patient responds to CPAP or nebulized medications
• Short transport time with adequate BVM/SGA ventilation
• Provider not trained or experienced (better BVM/SGA than botched ETI)
• Situations where paralysis would remove the patient's only remaining compensation

**Trajectory Assessment:**
Don't just assess the patient right now — ask where they're headed. A patient with mild distress but worsening trajectory may need early intubation. A patient who looks terrible but is improving on CPAP may not need a tube at all.

**The Integration:**
This connects everything you've learned:
• Patient Assessment: Is the airway compromised? Is it getting worse?
• Pathophysiology: What's causing the respiratory failure?
• Pharmacology: What RSI drugs are appropriate for this patient?
• Clinical Reasoning: Does this patient need a tube, or will a less invasive approach work?

*Always follow your local protocols and consult medical direction when available. These guidelines are educational, not prescriptive.*`,
    keyPoints: [
      "Not every patient who CAN be intubated SHOULD be intubated",
      "Assess trajectory — where is the patient headed, not just where they are now",
      "The decision to intubate integrates assessment, pathophysiology, and pharmacology"
    ],
    rememberThis: "A paramedic who recognizes that CPAP is the right choice — and avoids an unnecessary intubation — demonstrates higher clinical reasoning than one who intubates every patient they can."
  },
  {
    id: "surgical-airways-techniques",
    title: "Surgical Airways and Advanced Techniques",
    content: `Cricothyrotomy is the emergency exit. You hope you never need it, but when every other option has failed and your patient can't be oxygenated — this is the procedure that saves their life.

**Cricothyrotomy: Cutting a New Door**
When all the windows and doors are blocked, you cut a new opening. The cricothyroid membrane — the soft spot between the thyroid cartilage (Adam's apple) and the cricoid cartilage — is your target.

**When Is It Indicated?**
Only in the "Can't Intubate, Can't Oxygenate" (CICO) scenario. Everything else has failed — ETI, SGA, BVM — and the patient is desaturating. This is a time-critical, last-resort procedure.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "para-surg-fc1",
            front: "Cricothyrotomy",
            back: "Emergency surgical airway through the cricothyroid membrane. Indications: CICO scenario only (all other airways failed). Technique: palpate membrane, vertical skin incision, horizontal membrane incision, insert bougie or tube. Like cutting a new door when all entrances are blocked — rare but lifesaving."
          },
          {
            id: "para-surg-fc2",
            front: "Cricothyroid Membrane",
            back: "The soft spot between the thyroid cartilage (Adam's apple) and the cricoid cartilage (ring below). It's superficial and relatively avascular — the safest place for an emergency surgical airway. Clinical tip: palpate this landmark on EVERY patient during assessment. The more familiar you are with normal anatomy, the faster you'll find it in an emergency."
          },
          {
            id: "para-surg-fc3",
            front: "Bougie",
            back: "A flexible introducer that can be inserted blindly through the vocal cords. You feel for tracheal clicks (the bougie bumping over cartilage rings) to confirm tracheal placement, then thread the ET tube over it. Like using a guide wire to thread a catheter — the bougie finds the path, the tube follows."
          },
          {
            id: "para-surg-fc4",
            front: "Video Laryngoscopy",
            back: "A laryngoscope with a camera on the blade that displays the airway on a screen. Gives you a wider view than direct laryngoscopy — like using a backup camera to park instead of looking over your shoulder. Particularly helpful for anterior airways, blood/secretions, and providers with less experience."
          },
          {
            id: "para-surg-fc5",
            front: "Post-Intubation Care",
            back: "The job doesn't end when the tube is in. Secure the tube (tape or commercial holder), confirm with continuous capnography, set ventilator settings (or BVM rate), provide ongoing sedation (paralyzed patients who wake up is terrifying for them), and reassess placement with every patient movement or change."
          }
        ]
      }
    ],
    keyPoints: [
      "Cricothyrotomy is ONLY for the Can't Intubate, Can't Oxygenate scenario",
      "The cricothyroid membrane is your target — palpate it on every patient",
      "Post-intubation management is as important as the intubation itself"
    ],
    proTip: "Mental rehearsal matters. Visualize performing a cricothyrotomy — the anatomy, the incision, the insertion. When the real moment comes (and it's always high-stress), your hands will know what to do because your brain has already practiced it."
  },
  {
    id: "para-airway-quiz",
    title: "Knowledge Check",
    content: `These questions test the clinical reasoning that separates competent paramedics from exceptional ones. Think through each scenario before selecting your answer.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "para-airway-q1",
          question: "During RSI, you administer etomidate and succinylcholine. The patient's jaw relaxes, but you cannot visualize the vocal cords on direct laryngoscopy. Your next step is:",
          options: [
            "Attempt blind insertion of the ET tube",
            "Use a bougie to guide the tube into the trachea",
            "Perform immediate cricothyrotomy",
            "Wait 5 minutes and try again"
          ],
          correctIndex: 1,
          explanation: "When you can't see the cords but have a partial view, a bougie can be guided into the trachea by feel. You'll feel tracheal clicks (the bougie bumping over cartilage rings) confirming tracheal placement, then thread the ET tube over it. Blind insertion risks esophageal placement. Cricothyrotomy is premature — you still have options. Waiting wastes your paralytic window and risks hypoxia."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-airway-q2",
          question: "Which patient is a contraindication for succinylcholine?",
          options: [
            "A 45-year-old with COPD",
            "A 30-year-old with a crush injury sustained 48 hours ago",
            "A 60-year-old in cardiac arrest",
            "A 25-year-old with asthma"
          ],
          correctIndex: 1,
          explanation: "Succinylcholine causes potassium release from muscles. In crush injuries beyond 24 hours, damaged muscles already have elevated potassium. Adding more can cause fatal hyperkalemia and cardiac arrest. Use rocuronium instead. The other patients can safely receive succinylcholine — COPD and asthma aren't contraindications, and in cardiac arrest, the patient is already in the worst rhythm."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-airway-q3",
          question: "Waveform capnography after intubation shows a normal waveform for 3 breaths, then goes flat. This most likely means:",
          options: [
            "The tube was never in the trachea",
            "The tube has become dislodged",
            "The CO₂ detector is malfunctioning",
            "Normal variation during positive pressure ventilation"
          ],
          correctIndex: 1,
          explanation: "A waveform that was present and then disappears means the tube WAS in the trachea but has moved — likely during patient movement, transport, or repositioning. If it was never in the trachea, you would never have seen a waveform. Immediate action: hold the tube, stop ventilating, directly visualize to confirm position, and prepare to reintubate if needed."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-airway-q4",
          question: "You are preparing to intubate a patient. LEMON assessment reveals: obese, short neck, Mallampati IV (can only see hard palate), and limited neck extension due to a cervical collar. Your best approach is:",
          options: [
            "Proceed with direct laryngoscopy — most patients intubate easily",
            "Use video laryngoscopy, have bougie ready, and brief your team on backup plans",
            "Skip intubation and use an SGA for the entire transport",
            "Remove the cervical collar to improve neck extension"
          ],
          correctIndex: 1,
          explanation: "Multiple LEMON predictors (obesity, short neck, Mallampati IV, limited mobility) indicate a potentially difficult airway. Video laryngoscopy gives a better view than direct in these situations. Having a bougie ready and briefing your team on Plans B-E demonstrates the preparation that prevents crises. Simply proceeding or removing the collar creates unnecessary risk."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-airway-q5",
          question: "The most important step in RSI that directly determines how much apnea time you have before the patient desaturates is:",
          options: [
            "Choosing the right paralytic agent",
            "Preoxygenation",
            "Selecting the correct ET tube size",
            "Performing the Sellick maneuver"
          ],
          correctIndex: 1,
          explanation: "Preoxygenation fills the lungs with an oxygen reserve (functional residual capacity becomes an oxygen reservoir). This buys 3-8 minutes of apnea time before desaturation in healthy adults (less in obese or pediatric patients). Without adequate preoxygenation, the patient may desaturate during the paralysis window — and you can't bag a paralyzed patient who's desaturating as easily. Three to five minutes of 100% oxygen or 8 vital capacity breaths is the standard."
        }
      }
    ]
  },
  {
    id: "para-airway-wrapup",
    title: "Airway Mastery – From BLS to Surgical",
    content: `You've completed the most advanced airway management module in this curriculum. From head-tilt chin-lift to cricothyrotomy, you now have a complete understanding of prehospital airway management across all three certification levels.

**What You've Mastered:**
• **Endotracheal intubation** — the definitive airway with proper technique and confirmation
• **Rapid Sequence Intubation** — the 7 P's and pharmacology for medication-facilitated intubation
• **Difficult airway management** — LEMON prediction, bougie, video laryngoscopy, and backup plans
• **Surgical cricothyrotomy** — the last-resort procedure for CICO scenarios
• **Clinical decision-making** — knowing when to intubate AND when NOT to

**The Integration Across All Three Levels:**
• **EMT** gave you the foundation: positioning, OPAs, NPAs, BVM
• **AEMT** added power tools: supraglottic airways, CPAP, waveform capnography
• **Paramedic** completed the toolkit: ETI, RSI, difficult airway management, surgical airways

**The Clinical Reality:**
The best paramedics don't intubate every patient. They assess, predict, prepare, and choose the right tool for the right patient at the right time. Sometimes that's an ET tube. Sometimes it's CPAP. Sometimes it's an SGA. The skill isn't in the technique — it's in the decision.

**You've built a complete airway management skillset across all three levels. That's real mastery.**

*This content is for educational purposes only. Always verify with official NREMT guidelines, your training program, state protocols, and your medical director. Clinical practice should be guided by evidence-based medicine and local standards of care.*`,
    keyPoints: [
      "Complete airway mastery spans from BLS basics through surgical airways",
      "Clinical decision-making — choosing the RIGHT intervention — is the highest skill",
      "Every level builds on the previous: EMT foundation → AEMT escalation → Paramedic mastery",
      "Preparation and prediction prevent airway crises"
    ],
    rememberThis: "From head-tilt chin-lift to cricothyrotomy, you've built a complete airway management skillset across all three levels. Every paramedic started where you are. The skills you've learned here will serve patients for your entire career."
  }
];

// ========================================
// AEMT Cardiac Monitoring Basics Content
// ========================================
export const aemtCardiacMonitoringContent: TopicSection[] = [
  {
    id: "cardiac-monitoring-intro",
    title: "Why Cardiac Monitoring Changes Everything",
    content: `As an EMT, you assessed cardiac patients by checking pulses, listening to heart sounds, and watching for signs of distress. You were essentially listening to the engine from outside the car. Now, as an AEMT, you're plugging into the diagnostic computer.

**Cardiac monitoring lets you see the heart's electrical activity in real time.** Every heartbeat starts as an electrical signal — and the ECG (electrocardiogram) captures that signal on a screen or strip of paper. This visibility is transformative.

**Why does this matter in the field?**
A patient can have a normal pulse and blood pressure while their heart's electrical system is malfunctioning. By the time you feel the change in their pulse, you've lost valuable treatment time. The monitor shows you what's coming before it arrives.

**Important:** This is supplemental educational content only. Not a substitute for official training, NREMT certification, or medical advice. Always follow your local protocols.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-ecg-intro-q1",
          question: "What does an ECG (electrocardiogram) measure?",
          options: [
            "Blood flow through the heart",
            "The heart's electrical activity",
            "Blood pressure in the chambers",
            "Oxygen levels in the blood"
          ],
          correctIndex: 1,
          explanation: "An ECG captures the heart's electrical activity—every heartbeat starts as an electrical signal. It shows electrical patterns, NOT mechanical pumping or blood flow. This distinction matters because electrical problems can precede mechanical ones."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-ecg-intro-q2",
          question: "Why is cardiac monitoring valuable even when a patient has normal vital signs?",
          options: [
            "It replaces the need for a physical exam",
            "Rhythm changes often precede vital sign changes",
            "It eliminates the need for transport",
            "It provides a definitive diagnosis"
          ],
          correctIndex: 1,
          explanation: "Electrical malfunctions can occur before you feel changes in pulse or BP. The monitor is an early warning system—showing you what's coming before it arrives. By the time vital signs change, you've lost valuable treatment time."
        }
      }
    ],
    keyPoints: [
      "ECG shows electrical activity — not mechanical pumping",
      "Rhythm changes often precede vital sign changes",
      "Early detection = earlier intervention = better outcomes"
    ],
    proTip: "Think of the cardiac monitor as your 'early warning system.' It tells you about problems before they become emergencies."
  },
  {
    id: "cardiac-monitoring-anatomy-review",
    title: "The Heart's Electrical System — A Quick Review",
    content: `Before we read tracings, let's review what creates them. The heart has its own built-in pacemaker system — no external battery required.

**The Conduction Pathway:**

1. **SA Node** (sinoatrial node): The heart's natural pacemaker, sitting in the right atrium. It fires at 60-100 beats per minute — setting the pace for the entire heart.

2. **AV Node** (atrioventricular node): The 'gate' between the atria and ventricles. It briefly delays the signal so the atria finish contracting before the ventricles start.

3. **Bundle of His → Bundle Branches → Purkinje Fibers**: The electrical highway that carries the signal rapidly through the ventricles, ensuring they contract together as one coordinated squeeze.

**Here's the key concept:** Each part of this pathway produces a specific waveform on the ECG. When you learn to read the waveform, you're literally watching the electrical signal travel through the heart.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "SA Node",
            content: "The SA node fires first, sending an electrical wave across both atria. This produces the P wave on the ECG. Normal SA node rate: 60-100 bpm.",
            bullets: [
              "Located in the upper right atrium",
              "Intrinsic rate: 60-100 bpm",
              "Produces the P wave on ECG",
              "If it fails, backup pacemakers take over (at slower rates)"
            ]
          },
          {
            label: "AV Node",
            content: "The AV node receives the signal from the SA node and pauses briefly (0.12-0.20 seconds). This delay is the PR interval on the ECG.",
            bullets: [
              "Located between atria and ventricles",
              "Creates the PR interval (normal: 0.12-0.20 sec)",
              "Backup pacemaker rate: 40-60 bpm",
              "Acts as a 'gatekeeper' — prevents dangerously fast atrial rates from reaching the ventricles"
            ]
          },
          {
            label: "Ventricles",
            content: "The Bundle of His splits into left and right bundle branches, then into Purkinje fibers that spread the signal rapidly through both ventricles.",
            bullets: [
              "Bundle branches carry the signal to both ventricles simultaneously",
              "Purkinje fibers ensure coordinated contraction",
              "Produces the QRS complex on ECG (normal: < 0.12 sec)",
              "Ventricular backup rate: 20-40 bpm (last resort)"
            ]
          }
        ]
      }
    ],
    keyPoints: [
      "SA node → AV node → Bundle of His → Bundle Branches → Purkinje fibers",
      "Each structure has a backup pacemaker rate if the one above fails",
      "The conduction pathway directly maps to the PQRST waveform"
    ]
  },
  {
    id: "conduction-quiz-inline",
    title: "Conduction System – Quick Check",
    content: "Test your knowledge of the heart's electrical system.",
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-ecg-conduction-q1",
          question: "The heart's natural pacemaker is the:",
          options: [
            "AV node",
            "SA node",
            "Bundle of His",
            "Purkinje fibers"
          ],
          correctIndex: 1,
          explanation: "The SA (sinoatrial) node is the heart's natural pacemaker, located in the right atrium. It fires at 60-100 bpm, setting the pace for the entire heart. If it fails, the AV node takes over at a slower rate (40-60 bpm)."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-ecg-conduction-q2",
          question: "The AV node's brief delay before passing the signal to the ventricles is important because it:",
          options: [
            "Increases heart rate",
            "Allows the atria to finish contracting before ventricles start",
            "Prevents all arrhythmias",
            "Generates the T wave"
          ],
          correctIndex: 1,
          explanation: "The AV node delay (0.12-0.20 seconds, seen as the PR interval on ECG) allows the atria to complete their contraction and fill the ventricles before the ventricles contract. This coordinated timing maximizes cardiac output."
        }
      }
    ]
  },
  {
    id: "cardiac-monitoring-terminology",
    title: "Key Terms You Need to Know",
    content: `Before we start reading strips, let's lock in the vocabulary. These terms will come up every time you discuss cardiac monitoring.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          { front: "Depolarization", back: "The electrical activation of heart muscle cells — causes contraction. Think of it as 'turning on' the muscle." },
          { front: "Repolarization", back: "The electrical 'reset' of heart muscle cells — prepares them for the next beat. Like recharging a battery between uses." },
          { front: "P Wave", back: "The waveform representing atrial depolarization (atria contracting). Small, rounded, upright in Lead II." },
          { front: "QRS Complex", back: "The waveform representing ventricular depolarization (ventricles contracting). Should be narrow (< 0.12 sec) and tall." },
          { front: "T Wave", back: "The waveform representing ventricular repolarization (ventricles resetting). Usually upright and rounded in Lead II." },
          { front: "PR Interval", back: "Time from start of P wave to start of QRS. Represents conduction through the AV node. Normal: 0.12-0.20 seconds (3-5 small boxes)." }
        ]
      }
    ],
    keyPoints: [
      "Depolarization = contraction, Repolarization = reset",
      "P wave = atria, QRS = ventricles, T wave = ventricular reset",
      "PR interval measures AV node conduction time"
    ]
  },
  {
    id: "terminology-quiz-inline",
    title: "ECG Terminology – Quick Check",
    content: "Test your ECG vocabulary.",
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-ecg-terms-q1",
          question: "The QRS complex on an ECG represents:",
          options: [
            "Atrial depolarization",
            "Ventricular depolarization",
            "Ventricular repolarization",
            "AV node conduction"
          ],
          correctIndex: 1,
          explanation: "The QRS complex represents ventricular depolarization—the electrical activation causing the ventricles to contract. It should be narrow (< 0.12 sec). A wide QRS suggests the signal is taking an abnormal path through the ventricles."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-ecg-terms-q2",
          question: "The T wave represents:",
          options: [
            "Atrial contraction",
            "Atrial repolarization",
            "Ventricular repolarization",
            "SA node firing"
          ],
          correctIndex: 2,
          explanation: "The T wave represents ventricular repolarization—the electrical 'reset' of the ventricles preparing for the next beat. It's usually upright and rounded in Lead II. Abnormal T waves can indicate ischemia or electrolyte imbalances."
        }
      }
    ]
  },
  {
    id: "cardiac-monitoring-lead-placement",
    title: "3-Lead ECG vs. Multi-Lead Monitoring",
    content: `As an AEMT, your primary tool is the 3-lead ECG. It's fast to set up, gives you real-time rhythm monitoring, and catches the dangerous rhythms that need immediate intervention.

**3-Lead Setup:**
Three electrodes, each with a specific position and color. The standard memory aid is **"White on Right, Smoke (black) over Fire (red)"** — white goes on the right shoulder, black on the left shoulder, and red on the left lower ribs.

**What a 3-lead can do:**
• Monitor heart rate and rhythm continuously
• Detect life-threatening arrhythmias
• Confirm cardiac arrest rhythms (VF, VT, asystole, PEA)
• Guide ACLS algorithm decisions

**What a 3-lead cannot do:**
• Diagnose a heart attack (STEMI) — that requires a 12-lead
• Show axis deviation or bundle branch blocks reliably
• Provide the complete picture needed for cath lab activation`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Lead II",
            content: "Lead II is the most commonly monitored lead because it shows P waves most clearly. It 'looks' at the heart from the right shoulder to the left leg — right along the normal conduction pathway.",
            bullets: [
              "Best lead for P wave visualization",
              "Follows the natural conduction pathway",
              "Primary monitoring lead in most EMS systems",
              "Clear, upright P waves and QRS complexes"
            ]
          },
          {
            label: "Lead I",
            content: "Lead I looks at the heart from left to right across the shoulders. Useful for confirming rhythm and checking axis.",
            bullets: [
              "Right arm (−) to left arm (+)",
              "Lateral view of the heart",
              "Helps confirm sinus rhythm",
              "Used with Lead III for axis estimation"
            ]
          },
          {
            label: "Lead III",
            content: "Lead III looks from the left shoulder down to the left leg. Complements Lead II for rhythm analysis.",
            bullets: [
              "Left arm (−) to left leg (+)",
              "Inferior view of the heart",
              "Can show ST changes in inferior MI",
              "Part of Einthoven's triangle with Leads I and II"
            ]
          }
        ]
      }
    ],
    keyPoints: [
      "White on Right, Smoke over Fire — electrode placement memory aid",
      "Lead II is your primary monitoring lead",
      "3-lead monitors rhythm; 12-lead diagnoses heart attacks"
    ]
  },
  {
    id: "lead-placement-quiz-inline",
    title: "Lead Placement – Quick Check",
    content: "Test your knowledge of ECG lead placement.",
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-ecg-leads-q1",
          question: "The memory aid 'White on Right, Smoke over Fire' refers to:",
          options: [
            "Medication administration order",
            "3-lead ECG electrode placement",
            "12-lead ECG setup",
            "Defibrillator pad placement"
          ],
          correctIndex: 1,
          explanation: "This mnemonic helps remember 3-lead ECG placement: White electrode on the right shoulder, black (smoke) on the left shoulder, red (fire) on the left lower ribs. Correct placement ensures accurate rhythm monitoring."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-ecg-leads-q2",
          question: "A 3-lead ECG CANNOT reliably:",
          options: [
            "Monitor heart rate",
            "Detect ventricular fibrillation",
            "Diagnose a STEMI",
            "Confirm asystole"
          ],
          correctIndex: 2,
          explanation: "STEMI diagnosis requires a 12-lead ECG to identify ST elevation in specific lead groupings that localize the blocked artery. A 3-lead monitors rhythm but lacks the multiple viewing angles needed for heart attack diagnosis."
        }
      }
    ]
  },
  {
    id: "cardiac-monitoring-assessment",
    title: "Reading a Rhythm Strip — Your 5-Step System",
    content: `Every time you look at a rhythm strip, follow the same five steps. Consistency catches problems that gut feelings miss.

**Step 1: Is there a rhythm?** Look at the overall pattern. Is it regular, irregular, or chaotic?

**Step 2: What's the rate?** Count the number of QRS complexes in a 6-second strip and multiply by 10. Or use the sequence method: 300, 150, 100, 75, 60, 50 for the number of large boxes between R waves.

**Step 3: Are there P waves?** Look before each QRS for a P wave. Are they all the same shape? Is there one P wave for every QRS?

**Step 4: Is the PR interval normal?** Measure from the start of the P wave to the start of the QRS. Normal is 0.12-0.20 seconds (3-5 small boxes).

**Step 5: Is the QRS narrow?** A normal QRS is less than 0.12 seconds (3 small boxes). Wide QRS complexes suggest the signal is taking an abnormal path through the ventricles.

**The golden rule:** If you skip steps, you miss rhythms. Follow the system every time.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-ecg-reading-q1",
          question: "Using the 300 method, if there are 4 large boxes between R waves, the heart rate is approximately:",
          options: [
            "100 bpm",
            "75 bpm",
            "60 bpm",
            "50 bpm"
          ],
          correctIndex: 1,
          explanation: "The 300 method: divide 300 by the number of large boxes between R waves. 300 ÷ 4 = 75 bpm. The sequence is: 1 box = 300, 2 = 150, 3 = 100, 4 = 75, 5 = 60, 6 = 50."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-ecg-reading-q2",
          question: "A wide QRS complex (> 0.12 seconds) suggests:",
          options: [
            "Normal conduction",
            "The signal is taking an abnormal path through the ventricles",
            "The SA node is firing normally",
            "The PR interval is prolonged"
          ],
          correctIndex: 1,
          explanation: "A normal QRS is < 0.12 seconds (3 small boxes), indicating rapid coordinated conduction through the bundle branches. A wide QRS means the signal is taking an abnormal, slower path—possibly a bundle branch block or ventricular origin."
        }
      }
    ],
    keyPoints: [
      "5 steps: Rhythm → Rate → P waves → PR interval → QRS width",
      "Regular = consistent R-R intervals; Irregular = varying intervals",
      "Normal rate: 60-100 bpm | Normal PR: 0.12-0.20 sec | Normal QRS: < 0.12 sec"
    ],
    rememberThis: "The 300 method for rate: count large boxes between two R waves. 1 box = 300 bpm, 2 = 150, 3 = 100, 4 = 75, 5 = 60, 6 = 50. This gets easier with practice."
  },
  {
    id: "cardiac-monitoring-interventions",
    title: "Common Rhythms and What They Mean",
    content: `Now let's put your 5-step system to work on the rhythms you'll see most often.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          { front: "Normal Sinus Rhythm (NSR)", back: "Regular rhythm, 60-100 bpm, upright P before each QRS, normal PR and QRS. This is what healthy looks like — your baseline for comparison." },
          { front: "Sinus Bradycardia", back: "Same as NSR but rate < 60 bpm. Can be normal (athletes, sleep) or pathological (MI, medication effects, hypothermia). Treat only if symptomatic." },
          { front: "Sinus Tachycardia", back: "Same as NSR but rate > 100 bpm. Usually a response to something (pain, fever, hypovolemia, anxiety). Treat the cause, not the rate." },
          { front: "Sinus Arrhythmia", back: "Rate varies with breathing — speeds up on inspiration, slows on expiration. Normal finding, especially in younger patients. No treatment needed." },
          { front: "Artifact vs. Real Rhythm", back: "Artifact: irregular, chaotic, patient is talking/moving, no hemodynamic changes. Real rhythm: patient is still, correlates with symptoms, pulses match or don't match the tracing." },
          { front: "Asystole", back: "Flat line — no electrical activity. Confirm in 2 leads, check connections. Cardiac arrest rhythm — start CPR, follow ACLS protocol. Not shockable." }
        ]
      }
    ],
    keyPoints: [
      "Sinus rhythms all have the same morphology — they just differ in rate",
      "Sinus tachycardia is almost always a response to something — find the cause",
      "Always correlate the monitor with the patient — treat the patient, not the monitor"
    ],
    proTip: "When in doubt about a tracing, look at the patient. A patient who's talking and pink with a 'scary' strip probably has artifact. A patient who's pale and unresponsive with a 'normal' strip needs immediate assessment."
  },
  {
    id: "rhythms-quiz-inline",
    title: "Common Rhythms – Quick Check",
    content: "Test your rhythm recognition.",
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-ecg-rhythms-q1",
          question: "A patient has sinus tachycardia at 120 bpm. The best approach is to:",
          options: [
            "Give a medication to slow the heart rate",
            "Treat the underlying cause (pain, fever, hypovolemia)",
            "Defibrillate immediately",
            "Ignore it since it's a sinus rhythm"
          ],
          correctIndex: 1,
          explanation: "Sinus tachycardia is almost always a response to something—pain, fever, hypovolemia, anxiety. Treat the CAUSE, not the rate. Slowing the rate without addressing the cause can be harmful, especially if the tachycardia is compensating for low volume."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-ecg-rhythms-q2",
          question: "You see a flat line on the monitor. Before starting CPR, you should:",
          options: [
            "Defibrillate immediately",
            "Confirm in 2 leads and check connections",
            "Give epinephrine",
            "Wait 30 seconds for the rhythm to return"
          ],
          correctIndex: 1,
          explanation: "A flat line could be true asystole or just a loose lead/connection issue. Always confirm asystole in 2 leads and check all connections before declaring cardiac arrest. 'Treat the patient, not the monitor' applies here—check the patient too."
        }
      }
    ]
  },
  {
    id: "cardiac-monitoring-quiz",
    title: "Knowledge Check — Cardiac Monitoring",
    content: `Let's test your understanding. Take your time with each question — the explanations will reinforce the concepts.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-cardiac-q1",
          question: "You place a 3-lead ECG on a patient. Which lead is the primary monitoring lead for rhythm assessment?",
          options: [
            "Lead I",
            "Lead II",
            "Lead III",
            "aVR"
          ],
          correctIndex: 1,
          explanation: "Lead II follows the natural conduction pathway (SA node to apex) and provides the clearest view of P waves, making it the standard monitoring lead in most EMS systems."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-cardiac-q2",
          question: "A patient's rhythm strip shows regular rhythm at 52 bpm with upright P waves before each QRS, normal PR interval, and narrow QRS. The patient is asymptomatic. What is this rhythm?",
          options: [
            "First-degree heart block",
            "Junctional rhythm",
            "Sinus bradycardia",
            "Atrial fibrillation with slow ventricular response"
          ],
          correctIndex: 2,
          explanation: "This is sinus bradycardia — a normal sinus rhythm pattern with a rate below 60. The presence of upright P waves, normal PR, and narrow QRS confirms the rhythm originates from the SA node. In an asymptomatic patient, no treatment is needed."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-cardiac-q3",
          question: "Your patient's monitor shows chaotic, irregular waveforms. The patient is alert, talking, and moving their arms. What should you do FIRST?",
          options: [
            "Begin CPR immediately",
            "Administer oxygen",
            "Ask the patient to hold still and reassess the tracing",
            "Call for ALS backup"
          ],
          correctIndex: 2,
          explanation: "An alert, talking patient with a chaotic tracing almost certainly has motion artifact. Your first step is to have the patient hold still and re-evaluate the tracing. Always treat the patient, not the monitor."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-cardiac-q4",
          question: "What does the PR interval represent on the ECG?",
          options: [
            "Atrial contraction time",
            "Ventricular depolarization",
            "Conduction time through the AV node",
            "Ventricular repolarization"
          ],
          correctIndex: 2,
          explanation: "The PR interval measures the time from atrial depolarization (P wave) to ventricular depolarization (QRS). This is primarily the AV node delay — the brief pause that allows the atria to finish contracting before the ventricles start. Normal: 0.12-0.20 seconds."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-cardiac-q5",
          question: "Which of the following can a 3-lead ECG NOT reliably detect?",
          options: [
            "Sinus bradycardia",
            "STEMI (ST-elevation myocardial infarction)",
            "Ventricular fibrillation",
            "Asystole"
          ],
          correctIndex: 1,
          explanation: "STEMI diagnosis requires a 12-lead ECG to identify ST elevation in specific lead groupings that localize the blocked artery. A 3-lead can show rhythm disturbances but cannot provide the 12 different views needed to diagnose and localize a heart attack."
        }
      }
    ],
    keyPoints: [
      "Lead II is the standard monitoring lead for rhythm assessment",
      "Always correlate the monitor tracing with the patient's clinical status",
      "A 3-lead monitors rhythm; a 12-lead diagnoses STEMI"
    ]
  },
  {
    id: "cardiac-monitoring-wrapup",
    title: "Cardiac Monitoring — Bringing It All Together",
    content: `You've built a solid foundation in cardiac monitoring. Let's recap what you've accomplished:

**You can now:**
• Explain the heart's conduction pathway and how it maps to the ECG waveform
• Place a 3-lead ECG correctly using the "White on Right, Smoke over Fire" memory aid
• Identify normal sinus rhythm and its key components (P wave, QRS, T wave)
• Apply a systematic 5-step approach to reading every rhythm strip
• Recognize sinus bradycardia, sinus tachycardia, and differentiate artifact from true rhythms
• Understand the limitations of 3-lead monitoring vs. 12-lead ECG

**What's next?**
At the Paramedic level, you'll expand from 3-lead monitoring to full 12-lead ECG interpretation. You'll learn to identify STEMIs, localize coronary artery occlusions, and activate cath labs — skills that directly save heart muscle and lives.

**Remember:** The monitor is a tool, not a diagnosis. It adds data to your clinical picture, but the patient always comes first. A reassuring tracing doesn't replace a good assessment, and a scary tracing doesn't replace common sense.

**Important:** Verify all information with official NREMT guidelines and your local protocols. This content is educational supplementation only.`,
    keyPoints: [
      "Cardiac monitoring adds visibility to your cardiac assessment",
      "Follow the 5-step system every time: Rhythm, Rate, P waves, PR, QRS",
      "Treat the patient, not the monitor — always correlate tracings with clinical status",
      "3-lead monitors rhythm; 12-lead (Paramedic level) diagnoses heart attacks"
    ],
    rememberThis: "You've taken a major step in your cardiac assessment skills. The cardiac monitor is now part of your toolkit — and with practice, reading rhythms will become second nature. Ready to level up to 12-lead interpretation?"
  }
];

// ========================================
// Paramedic 12-Lead ECG Interpretation Content
// ========================================
export const paramedic12LeadContent: TopicSection[] = [
  {
    id: "12-lead-intro",
    title: "The 12-Lead ECG — Your Most Powerful Diagnostic Tool",
    content: `At the AEMT level, you mastered 3-lead monitoring — watching rhythm in real time. Now you're stepping into 12-lead interpretation, and it's a genuine game-changer. The 12-lead ECG gives you 12 different perspectives of the heart's electrical activity, letting you diagnose conditions that are completely invisible on a 3-lead.

**Why does this matter?**
When a patient is having a STEMI (ST-Elevation Myocardial Infarction), minutes equal muscle. Every minute of delay before the blocked artery is opened means more heart muscle dies permanently. Your ability to read that 12-lead in the field — and activate the cath lab while still en route — can save 30-60 minutes compared to waiting for the emergency department to acquire and read their own.

**You are literally the first diagnostic link in the chain that saves hearts.**

This is paramedic-level thinking: you're not just managing symptoms, you're diagnosing conditions and triggering hospital-level responses from the field.

**Important:** This is supplemental educational content only. Not a substitute for official training, NREMT certification, or medical advice. Always follow your local protocols.`,
    keyPoints: [
      "12-lead ECG provides 12 different views of cardiac electrical activity",
      "Field STEMI identification saves 30-60 minutes over ED-first diagnosis",
      "Paramedic ECG interpretation directly activates cath lab and saves heart muscle"
    ],
    proTip: "Think of the 12-lead as walking around a building with a camera. Three photos give you an idea of the structure. Twelve photos show you every crack, every angle, every hidden problem."
  },
  {
    id: "12-lead-anatomy-review",
    title: "How 12 Leads Create 12 Views",
    content: `A '12-lead' ECG doesn't use 12 wires — it uses 10 electrodes that create 12 different electrical perspectives. Understanding which leads look at which part of the heart is essential for localizing problems.

**The two planes:**
The heart is a three-dimensional organ, so we need views from two planes to see the whole picture:

• **Frontal plane** (limb leads): I, II, III, aVR, aVL, aVF — like looking at the heart from the front
• **Horizontal plane** (precordial leads): V1-V6 — like looking at the heart from a cross-section

**Lead groupings and what they see:**`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Inferior Leads",
            content: "Leads II, III, and aVF look at the inferior (bottom) wall of the heart. This area is supplied by the Right Coronary Artery (RCA) in most patients.",
            bullets: [
              "Leads: II, III, aVF",
              "View: Bottom of the heart (diaphragmatic surface)",
              "Artery: Right Coronary Artery (RCA) — ~85% of patients",
              "ST elevation here = inferior STEMI"
            ]
          },
          {
            label: "Lateral Leads",
            content: "Leads I, aVL, V5, and V6 look at the lateral (left side) wall. This area is supplied by the Left Circumflex (LCx) artery.",
            bullets: [
              "Leads: I, aVL (high lateral), V5-V6 (low lateral)",
              "View: Left side of the heart",
              "Artery: Left Circumflex (LCx)",
              "ST elevation here = lateral STEMI"
            ]
          },
          {
            label: "Anterior Leads",
            content: "Leads V1-V4 look at the anterior (front) wall — the largest area of ventricular muscle. Supplied by the Left Anterior Descending (LAD) artery — often called the 'widow maker.'",
            bullets: [
              "Leads: V1, V2, V3, V4",
              "View: Front wall of the left ventricle",
              "Artery: Left Anterior Descending (LAD)",
              "ST elevation here = anterior STEMI — highest mortality"
            ]
          },
          {
            label: "Septal Leads",
            content: "Leads V1-V2 specifically view the interventricular septum. The LAD supplies this area as well.",
            bullets: [
              "Leads: V1, V2",
              "View: The wall between the ventricles",
              "Artery: LAD (septal branches)",
              "Changes here may indicate septal involvement in anterior MI"
            ]
          }
        ]
      }
    ],
    keyPoints: [
      "Inferior (II, III, aVF) → RCA | Anterior (V1-V4) → LAD | Lateral (I, aVL, V5-V6) → LCx",
      "Lead groupings point you to the blocked artery",
      "Anterior STEMIs (LAD) carry the highest mortality"
    ]
  },
  {
    id: "12-lead-terminology",
    title: "12-Lead Terminology — Essential Vocabulary",
    content: `These terms form the language of ECG interpretation. Master them here and they'll serve you for your entire career.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          { front: "ST Segment", back: "The flat line between the QRS complex and T wave. Normally at the isoelectric line (baseline). Elevation or depression here indicates ischemia or injury." },
          { front: "ST Elevation", back: "ST segment rises above the baseline. In 2+ contiguous leads with ≥1mm elevation = STEMI until proven otherwise. Indicates acute myocardial injury — the artery is blocked NOW." },
          { front: "Reciprocal Changes", back: "ST depression in leads opposite to the elevation. Like seeing the back of a hill when you're looking at the front. Reciprocal changes CONFIRM a STEMI diagnosis." },
          { front: "Contiguous Leads", back: "Leads that look at adjacent areas of the heart. Example: II, III, aVF are contiguous (all inferior). STEMI criteria require changes in 2+ contiguous leads." },
          { front: "Axis Deviation", back: "The overall direction of the heart's electrical activity. Normal axis points left and down. Left axis deviation (LAD) or right axis deviation (RAD) can indicate hypertrophy or conduction blocks." },
          { front: "R Wave Progression", back: "In leads V1-V6, the R wave should get progressively taller (and S wave smaller). Poor R wave progression suggests anterior wall damage or old MI." }
        ]
      }
    ],
    keyPoints: [
      "ST elevation + reciprocal depression = high confidence STEMI",
      "Contiguous leads look at the same area of the heart",
      "Normal axis points left and downward (toward Lead II)"
    ]
  },
  {
    id: "12-lead-systematic-approach",
    title: "The Systematic Approach — Never Miss a STEMI",
    content: `Paramedics who miss STEMIs almost always skipped steps. A systematic approach prevents this. Use this expanded version of the 5-step system you learned at AEMT level:

**Step 1: Rate and Rhythm** — Same as your 3-lead assessment. Regular? Rate?

**Step 2: Axis** — Look at Leads I and aVF. Both upright = normal axis. Lead I up + aVF down = left axis deviation. Lead I down + aVF up = right axis deviation.

**Step 3: Intervals** — PR interval (0.12-0.20s), QRS width (<0.12s), QT interval.

**Step 4: ST Segment Analysis** — This is where you find the STEMI. Scan EVERY lead for ST elevation or depression. Compare to the baseline.

**Step 5: T Wave and Other Findings** — Peaked T waves (hyperkalemia), inverted T waves (ischemia), pathological Q waves (old infarct).`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Quick Axis",
            content: "The 'quick and dirty' axis check uses just two leads: Lead I and aVF. If the QRS is upright in both, the axis is normal. This takes 3 seconds.",
            bullets: [
              "Lead I (+) and aVF (+) = Normal axis",
              "Lead I (+) and aVF (−) = Left axis deviation",
              "Lead I (−) and aVF (+) = Right axis deviation",
              "Lead I (−) and aVF (−) = Extreme axis deviation ('no man's land')"
            ]
          },
          {
            label: "ST Analysis",
            content: "Systematically check each lead grouping for ST changes. Use the TP segment as your baseline reference.",
            bullets: [
              "Check inferior leads first (II, III, aVF)",
              "Then anterior leads (V1-V4)",
              "Then lateral leads (I, aVL, V5-V6)",
              "≥1mm elevation in 2+ contiguous leads = STEMI"
            ]
          },
          {
            label: "Common Pitfalls",
            content: "These mistakes cause missed STEMIs and false activations. Know them so you can avoid them.",
            bullets: [
              "Forgetting to check aVR (posterior MI clue)",
              "Confusing early repolarization with STEMI in young patients",
              "Not recognizing LVH strain pattern as a STEMI mimic",
              "Failing to get serial ECGs when initial is non-diagnostic"
            ]
          }
        ]
      }
    ],
    keyPoints: [
      "Systematic approach: Rate → Axis → Intervals → ST segments → T waves",
      "Quick axis: Lead I and aVF — both upright means normal",
      "Scan every lead for ST changes — especially inferior and anterior groups"
    ],
    rememberThis: "Like a pilot's checklist — you follow it every time, even when you think you see the problem immediately. The system catches what your eyes miss."
  },
  {
    id: "12-lead-stemi-recognition",
    title: "STEMI Recognition — The Skill That Saves Lives",
    content: `This is the most critical ECG skill you'll develop. Let's break it down into a reliable process.

**STEMI Criteria:**
• ST elevation ≥ 1mm in two or more contiguous leads
• With or without reciprocal ST depression in opposite leads
• In the right clinical context (chest pain, dyspnea, diaphoresis)

**Localizing the STEMI:**

• **Inferior STEMI** (II, III, aVF): RCA occlusion. Watch for bradycardia, right ventricular involvement. Check right-sided V4R if you suspect RV MI.

• **Anterior STEMI** (V1-V4): LAD occlusion — the "widow maker." Largest area of damage, highest mortality. May cause cardiogenic shock.

• **Lateral STEMI** (I, aVL, V5-V6): LCx occlusion. Can be subtle. High lateral (I, aVL only) is the most commonly missed STEMI.

• **Posterior STEMI**: No standard leads directly view the posterior wall. Look for ST depression in V1-V3 (mirror image) and tall R waves in V1. Confirm with posterior leads (V7-V9) if available.

**Reciprocal changes are your confirmation.** If you see ST elevation in the inferior leads AND ST depression in I and aVL, that's a STEMI until proven otherwise. Activate the cath lab.`,
    keyPoints: [
      "≥1mm ST elevation in 2+ contiguous leads = STEMI",
      "Reciprocal depression confirms the diagnosis",
      "Anterior STEMIs (LAD) have the highest mortality",
      "High lateral STEMI (I, aVL) is the most commonly missed"
    ],
    proTip: "When you find ST elevation, immediately look at the opposite leads for reciprocal depression. If you find both — stop analyzing and start activating. Time is muscle."
  },
  {
    id: "12-lead-mimics",
    title: "STEMI Mimics and Beyond-STEMI Patterns",
    content: `Not every ST elevation is a heart attack. Knowing the mimics prevents false cath lab activations while ensuring real STEMIs aren't dismissed.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          { front: "Pericarditis", back: "Diffuse ST elevation in most leads with PR depression. No reciprocal changes (key difference from STEMI). Often follows viral illness. The 'everywhere at once' pattern." },
          { front: "Benign Early Repolarization (BER)", back: "ST elevation with a 'fishhook' or notch at the J-point, usually in young/healthy patients. Stable over time. No reciprocal changes. Common in athletes." },
          { front: "Left Ventricular Hypertrophy (LVH)", back: "LVH strain pattern shows ST depression and T wave inversion in lateral leads (I, aVL, V5-V6) with tall R waves. Can mimic or mask STEMI. Use clinical context." },
          { front: "NSTEMI", back: "Non-ST-Elevation MI: ST depression and/or T wave inversion without ST elevation. Still a heart attack — just without complete artery occlusion. Important but not a cath lab activation." },
          { front: "Bundle Branch Block (BBB)", back: "Wide QRS (≥0.12 sec) that alters ST segments. New LBBB with chest pain symptoms is treated as a STEMI equivalent in many systems (Sgarbossa criteria)." },
          { front: "Hyperkalemia", back: "Peaked, tent-shaped T waves → widened QRS → sine wave pattern. Life-threatening but NOT a STEMI. Treat with calcium chloride, bicarb, insulin/dextrose." }
        ]
      }
    ],
    keyPoints: [
      "Pericarditis: diffuse elevation, NO reciprocal changes",
      "BER: fishhook J-point in young patients — stable over time",
      "New LBBB + chest pain = STEMI equivalent in many protocols",
      "When in doubt, serial ECGs and clinical correlation"
    ]
  },
  {
    id: "12-lead-quiz",
    title: "Knowledge Check — 12-Lead ECG Interpretation",
    content: `Time to test your interpretation skills. These questions reflect the clinical decisions you'll make in the field.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "para-12lead-q1",
          question: "You acquire a 12-lead on a 58-year-old male with crushing chest pain. You see ST elevation in leads II, III, and aVF with ST depression in leads I and aVL. Which coronary artery is most likely occluded?",
          options: [
            "Left Anterior Descending (LAD)",
            "Left Circumflex (LCx)",
            "Right Coronary Artery (RCA)",
            "Left Main Coronary Artery"
          ],
          correctIndex: 2,
          explanation: "ST elevation in II, III, and aVF (inferior leads) with reciprocal depression in I and aVL points to an inferior STEMI caused by RCA occlusion in ~85% of patients. The reciprocal changes confirm the diagnosis. Activate the cath lab."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-12lead-q2",
          question: "A 22-year-old male has diffuse ST elevation across most leads with no reciprocal depression and mild PR depression. He reports chest pain that's worse when lying flat and better sitting forward. What is the most likely diagnosis?",
          options: [
            "Anterior STEMI",
            "Pericarditis",
            "Benign early repolarization",
            "Aortic dissection"
          ],
          correctIndex: 1,
          explanation: "Diffuse ST elevation without reciprocal changes + PR depression + positional chest pain = classic pericarditis presentation. The absence of reciprocal changes is the key differentiator from STEMI. This is NOT a cath lab activation."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-12lead-q3",
          question: "Which lead grouping represents the anterior wall of the heart, supplied by the LAD?",
          options: [
            "II, III, aVF",
            "I, aVL, V5, V6",
            "V1, V2, V3, V4",
            "aVR only"
          ],
          correctIndex: 2,
          explanation: "V1-V4 (the precordial leads across the front of the chest) directly overlay the anterior wall, supplied by the LAD. Anterior STEMIs are the most dangerous because the LAD supplies the largest area of ventricular muscle."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-12lead-q4",
          question: "Your 12-lead shows a wide QRS complex (≥0.12 sec) with a new left bundle branch block pattern. The patient has chest pain and diaphoresis. How should you manage this?",
          options: [
            "Monitor only — BBB is not concerning",
            "Treat as a STEMI equivalent and activate the cath lab",
            "Give nitroglycerin and reassess",
            "Obtain serial ECGs over 30 minutes before deciding"
          ],
          correctIndex: 1,
          explanation: "New LBBB (or presumably new LBBB) with ischemic symptoms is treated as a STEMI equivalent in most EMS systems. The bundle branch block distorts ST segments, making traditional STEMI criteria unreliable. When in doubt with symptoms, activate."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-12lead-q5",
          question: "When using the quick axis determination method, what does it mean when Lead I is positive and aVF is negative?",
          options: [
            "Normal axis",
            "Right axis deviation",
            "Left axis deviation",
            "Extreme axis deviation"
          ],
          correctIndex: 2,
          explanation: "Lead I positive and aVF negative indicates left axis deviation (LAD). The electrical vector points leftward and upward. Common causes include left anterior fascicular block, LVH, and inferior MI. Quick axis check: I (+) and aVF (+) = normal; I (+) and aVF (−) = left; I (−) and aVF (+) = right."
        }
      }
    ],
    keyPoints: [
      "Lead groupings localize the MI to a specific coronary artery",
      "Reciprocal changes confirm STEMI — their absence suggests mimics",
      "New LBBB + ischemic symptoms = STEMI equivalent"
    ]
  },
  {
    id: "12-lead-wrapup",
    title: "12-Lead ECG Mastery — The Complete Picture",
    content: `You've built a comprehensive ECG interpretation foundation. Let's review what you've accomplished across the entire cardiac monitoring progression:

**Your journey:**
• **AEMT Level:** 3-lead monitoring, rhythm recognition, the 5-step system, artifact troubleshooting
• **Paramedic Level:** 12-lead interpretation, STEMI recognition and localization, systematic reading, mimics and special patterns

**You can now:**
• Acquire and interpret a 12-lead ECG in the field
• Apply a systematic approach that prevents missed findings
• Recognize and localize STEMIs to specific coronary arteries
• Differentiate true STEMIs from mimics (pericarditis, BER, LVH strain)
• Activate the cath lab with confidence based on ECG findings

**The clinical impact:**
Your 12-lead interpretation skills directly translate to saved heart muscle and saved lives. Every minute you save in field recognition is a minute of myocardium preserved. You are now part of the diagnostic chain that begins in the back of the ambulance and ends in the cath lab.

**What keeps you sharp:**
Practice. Read every 12-lead you acquire. Compare your field reads with hospital interpretations. Over time, pattern recognition becomes intuitive — but always fall back on your systematic approach when something doesn't look right.

**Important:** Verify all information with official NREMT guidelines and your local protocols. This content is educational supplementation only.`,
    keyPoints: [
      "3-lead (AEMT) monitors rhythm; 12-lead (Paramedic) diagnoses heart attacks",
      "Systematic interpretation prevents missed STEMIs",
      "Time is muscle — your field interpretation activates lifesaving interventions",
      "Practice reading every 12-lead you acquire to build pattern recognition"
    ],
    rememberThis: "From checking pulses as an EMT, to monitoring rhythms as an AEMT, to diagnosing heart attacks as a Paramedic — you've built a complete cardiac assessment skillset. Every level built on the last. That's the power of progressive learning."
  }
];

// =====================================================
// EMT COPD vs CHF Content
// =====================================================
export const emtCopdVsChfContent: TopicSection[] = [
  {
    id: "copd-chf-intro",
    title: "Two Conditions, One Chief Complaint — Why This Matters",
    content: `"I can't breathe." You'll hear this dozens of times in your career. The challenge? Two of the most common causes — COPD and CHF — look similar on the surface but require very different thinking.

**COPD (Chronic Obstructive Pulmonary Disease)** is an airway problem. The tubes that carry air are narrowed, inflamed, and damaged. Think of it like breathing through a coffee straw — air goes in okay, but getting it out is a real struggle.

**CHF (Congestive Heart Failure)** is a pump problem. The heart can't keep up, so blood backs up into the lungs like a clogged drain. Fluid fills the air sacs where oxygen exchange happens.

**Why does this matter for you?** Because your BLS interventions differ. Positioning, oxygen strategy, and what you communicate to the receiving hospital all depend on which condition you suspect. Getting this right makes you a more effective provider from day one.

**Important:** Verify all information with official NREMT guidelines and your local protocols. This content is educational supplementation only.`,
    keyPoints: [
      "COPD = airway/ventilation problem (air trapping)",
      "CHF = pump/circulation problem (fluid backup)",
      "Both cause dyspnea, but treatment approach differs"
    ],
    proTip: "Many patients have BOTH conditions. That's okay — start with what's making them sickest right now and treat what you find."
  },
  {
    id: "copd-chf-core-concepts",
    title: "COPD and CHF — Core Concepts",
    content: `Let's break down what's actually happening in each condition. Understanding the mechanism helps everything else make sense.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "COPD",
            content: "COPD is a group of chronic lung diseases — mainly emphysema and chronic bronchitis. In emphysema, the tiny air sacs (alveoli) are destroyed, reducing surface area for gas exchange. In chronic bronchitis, the airways are inflamed with excess mucus. Both trap air inside the lungs, making exhalation the hard part. Patients develop barrel chests over time from chronic air trapping."
          },
          {
            label: "CHF",
            content: "CHF happens when the heart muscle weakens or stiffens and can't pump effectively. Left-sided failure causes fluid to back up into the lungs (pulmonary edema) — you'll hear crackles. Right-sided failure causes fluid to back up into the body — you'll see JVD and pedal edema. Many patients have both."
          },
          {
            label: "Key Difference",
            content: "The fundamental difference: COPD is a problem getting air OUT (obstructive). CHF is a problem with fluid IN the lungs (congestive). COPD patients exhale slowly with pursed lips. CHF patients sit bolt upright and may cough pink frothy sputum. Different mechanism, different presentation, different approach."
          }
        ]
      }
    ],
    keyPoints: [
      "COPD: air trapping, prolonged exhalation, barrel chest",
      "CHF: fluid in lungs, crackles, orthopnea",
      "COPD = outflow problem; CHF = overflow problem"
    ]
  },
  {
    id: "copd-chf-terminology",
    title: "Key Terms You Need to Know",
    content: `These terms will come up in every respiratory call. Master them now and field communication gets much easier.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          { front: "Dyspnea", back: "Difficulty breathing or shortness of breath. The most common chief complaint in both COPD and CHF. It's subjective — the patient feels it." },
          { front: "Orthopnea", back: "Difficulty breathing when lying flat. Classic CHF finding. Patients sleep propped up on 2-3 pillows. Ask: 'How many pillows do you sleep with?'" },
          { front: "Paroxysmal Nocturnal Dyspnea (PND)", back: "Waking up at night suddenly gasping for air. Strongly associated with CHF. Fluid redistributes when lying down and overwhelms the weakened heart." },
          { front: "Barrel Chest", back: "Increased anterior-posterior diameter of the chest. Develops over years in COPD patients from chronic air trapping. The chest stays partially inflated even at rest." },
          { front: "Crackles (Rales)", back: "Wet, crackling sounds heard on auscultation. Caused by air moving through fluid-filled airways. Bilateral crackles = think CHF. One-sided = think pneumonia." },
          { front: "Wheezing", back: "High-pitched musical sounds on exhalation. Caused by air moving through narrowed airways. Think COPD or asthma. Can also occur in 'cardiac asthma' (severe CHF)." }
        ]
      }
    ],
    keyPoints: [
      "Orthopnea and PND strongly suggest CHF",
      "Barrel chest and pursed-lip breathing suggest COPD",
      "Wheezing can occur in both — don't assume"
    ]
  },
  {
    id: "copd-chf-classification",
    title: "Types and Classifications",
    content: `Both COPD and CHF have subtypes that affect how patients present in the field.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "COPD Types",
            content: "**Emphysema ('Pink Puffers'):** Destroyed alveoli, thin body habitus, pursed-lip breathing, relatively normal color. They work hard to breathe but maintain oxygenation.\n\n**Chronic Bronchitis ('Blue Bloaters'):** Inflamed airways with excess mucus, often overweight, productive cough, may appear cyanotic. They don't ventilate as effectively and retain CO₂."
          },
          {
            label: "CHF Types",
            content: "**Left-Sided Failure:** Blood backs up into the lungs. Signs: crackles, dyspnea, orthopnea, pink frothy sputum in severe cases. This is the most common presentation you'll see.\n\n**Right-Sided Failure:** Blood backs up into the body. Signs: JVD, peripheral edema (swollen ankles/legs), hepatomegaly (enlarged liver). Often caused by left-sided failure."
          },
          {
            label: "Acute vs Chronic",
            content: "**Chronic:** The baseline — patients live with this daily. They have home medications, know their triggers, and adapt.\n\n**Acute Exacerbation:** Something pushes them past their baseline. Infections, medication non-compliance, dietary indiscretion (too much salt in CHF). This is when they call 911."
          }
        ]
      }
    ],
    keyPoints: [
      "Pink puffers (emphysema) vs. blue bloaters (chronic bronchitis)",
      "Left-sided CHF → lungs; Right-sided CHF → body",
      "Acute exacerbations on chronic disease are the most common EMS calls"
    ]
  },
  {
    id: "copd-chf-assessment",
    title: "Assessment — Reading the Clues",
    content: `Your assessment is your most powerful tool. Here's what to look for:

**History Clues:**
• COPD: history of smoking, home oxygen, inhalers (albuterol, Atrovent), frequent respiratory infections
• CHF: history of heart disease, home medications (ACE inhibitors, diuretics like Lasix), weight gain, dietary salt intake

**Physical Exam Findings:**

• **Look:** COPD patients often have barrel chests, are thin, use pursed-lip breathing. CHF patients sit bolt upright, may have peripheral edema, appear anxious
• **Listen:** COPD = wheezing, diminished breath sounds. CHF = bilateral crackles (like Rice Krispies), may have wheezing too ('cardiac asthma')
• **Feel:** Check for JVD (CHF), pedal edema (CHF), skin temperature and moisture

**Vital Signs:**
• Both may be tachycardic and tachypneic
• SpO₂ may be low in both, but COPD patients may have a 'normal' baseline of 88-92%
• Hypertension is common in CHF; COPD patients may have normal or low BP`,
    keyPoints: [
      "History is your biggest differentiator — ask about medications and home O₂",
      "Crackles = fluid (CHF); Wheezing = bronchospasm (COPD)",
      "JVD and pedal edema point to right-sided heart failure"
    ],
    rememberThis: "When in doubt, ask: 'Has a doctor ever told you that you have a heart condition or a lung condition?' Patients often know their diagnosis even if they can't explain it."
  },
  {
    id: "copd-chf-interventions",
    title: "EMT Interventions — What You Can Do",
    content: `Your BLS interventions make a real difference. Here's your toolkit:`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          { front: "Positioning", back: "Both: position of comfort, usually sitting upright (high Fowler's). CHF patients especially cannot tolerate lying flat. Let the patient find what works — they've been doing this for years." },
          { front: "Oxygen for COPD", back: "Start with low-flow (nasal cannula, 2-4 LPM) targeting SpO₂ of 88-92%. Some COPD patients rely on hypoxic drive — flooding them with high-flow O₂ can reduce their respiratory drive. Monitor closely." },
          { front: "Oxygen for CHF", back: "High-flow oxygen via non-rebreather (15 LPM). CHF patients need maximum oxygenation because fluid is blocking gas exchange. They don't have the hypoxic drive concern of COPD patients." },
          { front: "Medication Assists", back: "Assist with prescribed inhalers (COPD patients often carry albuterol). Follow local protocol for medication assists. Document what medications the patient takes at home — this information is gold for the hospital." },
          { front: "Transport Decision", back: "Both conditions can deteriorate rapidly. Monitor continuously. Be prepared to assist ventilations with BVM if breathing becomes inadequate. Call for ALS backup if available — CPAP and medications can be game-changers." },
          { front: "Communication", back: "Tell the hospital: 'I suspect COPD exacerbation' or 'I suspect CHF.' Include breath sounds, SpO₂, respiratory rate, and medication history. This pre-arrival information changes their preparation." }
        ]
      }
    ],
    keyPoints: [
      "COPD: low-flow O₂ (2-4 LPM), target SpO₂ 88-92%",
      "CHF: high-flow O₂ (15 LPM NRB), maximize oxygenation",
      "Position of comfort for both — never force flat"
    ]
  },
  {
    id: "copd-chf-quiz",
    title: "Knowledge Check — COPD vs CHF",
    content: `Let's see how well you can differentiate these two conditions. Think through each scenario like you're on scene.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "emt-copd-chf-q1",
          question: "A 68-year-old patient sits in tripod position with pursed-lip breathing, barrel chest, and wheezing on exhalation. She has a home nebulizer and albuterol inhaler. What condition do you most suspect?",
          options: ["CHF", "COPD exacerbation", "Pneumonia", "Pulmonary embolism"],
          correctIndex: 1,
          explanation: "Barrel chest, pursed-lip breathing, wheezing, and home nebulizer/inhaler all point to COPD. The tripod position indicates she's using accessory muscles to help exhale against obstructed airways."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-copd-chf-q2",
          question: "A 72-year-old male wakes you at 2 AM gasping for air. He can only breathe sitting upright, has bilateral crackles, and his ankles are severely swollen. He takes Lasix and lisinopril. What is the most likely condition?",
          options: ["COPD exacerbation", "Asthma attack", "CHF exacerbation", "Anxiety attack"],
          correctIndex: 2,
          explanation: "Paroxysmal nocturnal dyspnea (waking gasping), orthopnea (can't lie flat), bilateral crackles (fluid in lungs), pedal edema, and CHF medications (Lasix = diuretic, lisinopril = ACE inhibitor) all strongly indicate CHF exacerbation."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-copd-chf-q3",
          question: "What is the recommended oxygen strategy for a COPD patient with SpO₂ of 86%?",
          options: ["High-flow via NRB at 15 LPM", "Low-flow nasal cannula at 2-4 LPM targeting 88-92%", "No oxygen — it will suppress their breathing", "BVM at 15 LPM"],
          correctIndex: 1,
          explanation: "COPD patients should receive low-flow oxygen targeting SpO₂ of 88-92%. While hypoxic drive suppression is a concern, never withhold oxygen from a hypoxic patient. Start low, titrate to effect, and monitor respiratory effort closely."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-copd-chf-q4",
          question: "Which assessment finding is most specific to CHF rather than COPD?",
          options: ["Tachypnea", "Bilateral crackles", "Low SpO₂", "Tachycardia"],
          correctIndex: 1,
          explanation: "Bilateral crackles indicate fluid in the lungs — a hallmark of left-sided CHF. Tachypnea, low SpO₂, and tachycardia can occur in both conditions. Wheezing is more associated with COPD (though 'cardiac asthma' exists)."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-copd-chf-q5",
          question: "A patient with known COPD and CHF is in severe respiratory distress. You're unsure which condition is causing the acute problem. What is your best first action?",
          options: ["Withhold oxygen until you decide", "Position of comfort and high-flow oxygen", "Position of comfort, start low-flow oxygen, and assess response", "Administer their inhaler immediately"],
          correctIndex: 2,
          explanation: "When unsure, position of comfort is always right. Start with low-flow oxygen (safer for possible COPD component), assess the patient's response, and gather more history. You can always increase oxygen if needed. Call for ALS — CPAP can help both conditions."
        }
      }
    ],
    keyPoints: [
      "History and physical findings differentiate COPD from CHF",
      "Oxygen strategy differs: low-flow for COPD, high-flow for CHF",
      "When in doubt, position of comfort + conservative O₂ + monitor"
    ]
  },
  {
    id: "copd-chf-wrapup",
    title: "Wrapping Up — You've Got the Foundation",
    content: `You now have the building blocks to differentiate two of the most common respiratory emergencies in EMS:

• **COPD** = airway obstruction, air trapping, wheezing, barrel chest, low-flow O₂
• **CHF** = pump failure, fluid in lungs, crackles, orthopnea, high-flow O₂
• **Both** = position of comfort, continuous monitoring, rapid transport

**What's next?**
At the AEMT level, you'll add capnography to differentiate these conditions, apply CPAP, and administer nebulized medications. The pathophysiology gets deeper, but the foundation you built here makes it all click.

**Remember:** Many patients have both COPD and CHF. Real-world medicine is messy — and that's okay. Your job is to treat what you find, monitor for changes, and communicate effectively.

**Important:** Verify all information with official NREMT guidelines and your local protocols. This content is educational supplementation only.`,
    keyPoints: [
      "COPD and CHF are two of the most common causes of dyspnea in EMS",
      "Assessment findings guide your oxygen and positioning decisions",
      "Many patients have both — treat what you find and monitor closely"
    ],
    rememberThis: "Every experienced paramedic started by learning exactly what you just learned. This foundation — recognizing the difference between an airway problem and a pump problem — is the basis of respiratory emergency management at every level. You're building skills that matter."
  }
];

// =====================================================
// AEMT COPD vs CHF Content
// =====================================================
export const aemtCopdVsChfContent: TopicSection[] = [
  {
    id: "aemt-copd-chf-intro",
    title: "Going Deeper — The Pathophysiology Behind the Dyspnea",
    content: `You already know how to tell COPD and CHF apart at the bedside. Now let's understand WHY each condition causes the symptoms you see — and how your expanded AEMT toolkit changes the game.

**Building on your EMT foundation:**
You know COPD traps air and CHF puts fluid in the lungs. Now we'll explore the mechanisms — V/Q mismatch, Starling forces, CO₂ retention, and why CPAP is such a powerful tool for both.

**Your AEMT advantage:**
Capnography gives you a window into ventilation that SpO₂ alone can't provide. CPAP and nebulized medications give you treatment options that can prevent intubation. Understanding the pathophysiology behind these tools makes you a more effective, more confident provider.

**Important:** Verify all information with official NREMT guidelines and your local protocols. This content is educational supplementation only.`,
    keyPoints: [
      "AEMT adds pathophysiology understanding to pattern recognition",
      "Capnography differentiates COPD from CHF in real-time",
      "CPAP and nebulizers are game-changing AEMT-scope tools"
    ],
    proTip: "The best AEMT providers don't just know WHAT to do — they know WHY. Understanding mechanism makes you adaptable when patients don't fit the textbook."
  },
  {
    id: "aemt-copd-chf-pathophys",
    title: "Pathophysiology — Why It Happens",
    content: `Let's dig into the mechanisms driving each condition.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "COPD Mechanism",
            content: "**V/Q Mismatch:** In COPD, destroyed alveoli (emphysema) reduce the surface area for gas exchange. Ventilation happens but perfusion has nowhere to exchange gases — this is dead space. In chronic bronchitis, mucus and inflammation block ventilation to perfused areas — this is shunt.\n\n**Air Trapping:** Narrowed airways collapse during exhalation, trapping air. This creates auto-PEEP (intrinsic positive pressure) that makes each breath harder. Over time, the chest hyperinflates (barrel chest).\n\n**CO₂ Retention:** As the disease progresses, patients chronically retain CO₂. Their body adapts by using oxygen levels (not CO₂) as the primary breathing stimulus — the hypoxic drive."
          },
          {
            label: "CHF Mechanism",
            content: "**Pump Failure:** The left ventricle can't pump blood forward effectively. Blood backs up into the left atrium, then into the pulmonary veins, then into the pulmonary capillaries.\n\n**Starling Forces:** Increased hydrostatic pressure in pulmonary capillaries pushes fluid across the capillary membrane into the alveoli. This is pulmonary edema — fluid where air should be.\n\n**Neurohormonal Activation:** The body senses low cardiac output and activates the sympathetic nervous system (tachycardia, vasoconstriction) and RAAS (fluid retention). These compensatory mechanisms temporarily help but ultimately make the overload worse."
          },
          {
            label: "Why It Matters",
            content: "**For COPD:** Treatment targets airway opening (bronchodilators) and reducing air trapping (pursed-lip breathing, CPAP). Excess oxygen can suppress the hypoxic drive — that's why you titrate carefully.\n\n**For CHF:** Treatment targets reducing fluid in the lungs (CPAP pushes fluid out of alveoli, NTG reduces preload) and supporting the failing pump. Oxygenation is the priority.\n\n**The clinical connection:** Knowing these mechanisms helps you predict what will work, what might be harmful, and when to escalate."
          }
        ]
      }
    ],
    keyPoints: [
      "COPD: V/Q mismatch + air trapping + CO₂ retention",
      "CHF: pump failure → increased hydrostatic pressure → pulmonary edema",
      "Treatment targets the specific mechanism in each condition"
    ]
  },
  {
    id: "aemt-copd-chf-terminology",
    title: "Advanced Terminology",
    content: `Building on EMT terminology, these AEMT-level terms connect pathophysiology to your clinical tools.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          { front: "V/Q Mismatch", back: "Ventilation-perfusion mismatch: when ventilation and blood flow don't match in lung regions. Dead space = ventilation without perfusion. Shunt = perfusion without ventilation. COPD creates both; CHF primarily creates shunt (fluid-filled alveoli)." },
          { front: "Auto-PEEP", back: "Intrinsic positive end-expiratory pressure caused by air trapping in COPD. Each breath starts before the last one fully exhales, creating stacked pressure. Makes breathing progressively harder — like trying to inflate an already-inflated balloon." },
          { front: "Hypoxic Drive", back: "In chronic CO₂ retainers (severe COPD), the brain shifts from using CO₂ to using low oxygen levels as the primary breathing stimulus. High-flow O₂ can reduce this drive — not eliminate it. Never withhold O₂ from a hypoxic patient, but titrate carefully." },
          { front: "Pulmonary Edema", back: "Fluid accumulation in the alveoli and interstitial spaces of the lungs. In CHF, caused by high hydrostatic pressure. Creates crackles on auscultation and impairs gas exchange. CPAP mechanically pushes this fluid back into the pulmonary capillaries." },
          { front: "Preload", back: "The volume of blood returning to the heart (end-diastolic volume). In CHF, excessive preload overwhelms the failing pump. Nitroglycerin and CPAP both reduce preload — NTG through venodilation, CPAP through increased intrathoracic pressure." },
          { front: "Shark Fin Waveform", back: "A capnography waveform pattern where the expiratory upstroke is sloped instead of square. Indicates bronchospasm or air trapping (COPD, asthma). The more severe the obstruction, the more sloped the waveform. Not seen in pure CHF." }
        ]
      }
    ],
    keyPoints: [
      "V/Q mismatch explains why oxygenation fails in both conditions",
      "Auto-PEEP makes COPD progressively worse without intervention",
      "Shark fin capnography = bronchospasm (COPD), not CHF"
    ]
  },
  {
    id: "aemt-copd-chf-tools",
    title: "Advanced Differentiation Tools",
    content: `Your AEMT toolkit gives you objective data that transforms clinical decision-making.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Capnography",
            content: "**COPD:** Shark fin waveform (sloped expiratory upstroke) indicates bronchospasm and air trapping. ETCO₂ may be elevated (>45 mmHg) due to chronic CO₂ retention. Prolonged expiratory phase visible on waveform.\n\n**CHF:** Normal rectangular waveform shape, but ETCO₂ may be low-normal or slightly elevated depending on severity. No shark fin pattern unless concurrent bronchospasm.\n\n**Clinical pearl:** If you see a shark fin pattern, bronchospasm is present — regardless of whether the underlying condition is COPD, asthma, or cardiac asthma."
          },
          {
            label: "Auscultation",
            content: "**COPD:** Wheezing (expiratory > inspiratory), diminished breath sounds in severe cases, prolonged expiratory phase. Rhonchi (coarse, rattling sounds) if significant mucus production.\n\n**CHF:** Bilateral crackles, typically worse at the bases (gravity-dependent fluid). In severe CHF, crackles extend upward. Wheezing can occur ('cardiac asthma') — caused by bronchospasm from peribronchial edema.\n\n**Key:** Bilateral crackles = think fluid. Wheezing = think bronchospasm (but check for cardiac asthma)."
          },
          {
            label: "Clinical Picture",
            content: "**Integrate everything:** Medications at home tell the story. COPD patients: inhalers, nebulizers, home O₂. CHF patients: ACE inhibitors, beta-blockers, diuretics (Lasix), possibly digoxin.\n\n**Weight gain** (CHF patients gaining 2-5 lbs over days suggests fluid retention). **Recent illness** (URI can trigger COPD exacerbation). **Dietary indiscretion** (salty meal can trigger CHF exacerbation).\n\n**Don't forget:** Many patients have both. Treat the most immediately life-threatening component first."
          }
        ]
      }
    ],
    keyPoints: [
      "Shark fin on capnography = bronchospasm = COPD (not CHF)",
      "Bilateral crackles = fluid = CHF",
      "Home medications are your strongest diagnostic clue"
    ]
  },
  {
    id: "aemt-copd-chf-assessment",
    title: "AEMT-Level Assessment Integration",
    content: `Let's put it all together into a systematic assessment approach:

**Step 1: Scene Size-Up and First Impression**
• Home oxygen, nebulizers, pill bottles — scan the environment
• Patient position: tripod (COPD) vs. bolt upright refusing to lie down (CHF)
• Work of breathing: prolonged exhalation (COPD) vs. rapid/shallow (CHF)

**Step 2: Primary Survey**
• Airway: patent, maintaining? Need for positioning?
• Breathing: rate, depth, effort, breath sounds (wheezing vs. crackles)
• Circulation: tachycardia? JVD? Peripheral edema?

**Step 3: Objective Monitoring**
• SpO₂: baseline for COPD patients may be 88-92%
• Capnography: waveform shape and ETCO₂ value
• Blood pressure: hypertension common in acute CHF

**Step 4: Focused History**
• When did it start? What makes it worse?
• Medications: compliance? Recent changes?
• Previous episodes? Hospitalizations? Intubations?
• Weight gain (CHF)? Recent infection (COPD)?`,
    keyPoints: [
      "Environment scan reveals home treatment (O₂, nebs, medications)",
      "Capnography waveform shape is your most objective differentiator",
      "Ask about medication compliance — it's a common trigger for exacerbations"
    ],
    rememberThis: "The patient who has been intubated before is telling you they can get that sick. Take their history of intubation seriously — they know how bad it can get."
  },
  {
    id: "aemt-copd-chf-interventions",
    title: "AEMT Interventions — Your Expanded Toolkit",
    content: `Your AEMT scope dramatically expands what you can do for these patients.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          { front: "CPAP for CHF", back: "CPAP at 5-10 cmH₂O pushes fluid out of alveoli back into pulmonary capillaries. It also reduces preload by increasing intrathoracic pressure (less blood returns to the heart). This is often the single most impactful intervention for acute CHF pulmonary edema." },
          { front: "CPAP for COPD", back: "CPAP helps COPD by splinting open collapsing airways, reducing air trapping, and decreasing work of breathing. It counteracts auto-PEEP. Start at 5 cmH₂O and titrate. Watch for worsening — some COPD patients don't tolerate CPAP well." },
          { front: "Albuterol Nebulizer", back: "β₂ agonist bronchodilator. Relaxes smooth muscle in the airways, opening them up. Primary treatment for COPD bronchospasm. 2.5 mg via nebulizer over 5-10 minutes. Can repeat per protocol. Side effects: tachycardia, tremor." },
          { front: "Inline Nebulizer + CPAP", back: "Many CPAP systems allow inline nebulizer administration — you can deliver bronchodilator AND positive pressure simultaneously. This is the gold standard for severe COPD exacerbation: opens airways and reduces air trapping at the same time." },
          { front: "CPAP Contraindications", back: "Apnea, inability to maintain airway, facial trauma, vomiting (aspiration risk), hypotension (CPAP reduces preload further), pneumothorax. If the patient can't protect their airway or tolerate the mask, CPAP is not appropriate." },
          { front: "Treatment Response Monitoring", back: "After intervention, reassess in 5 minutes: respiratory rate, work of breathing, SpO₂, capnography waveform, breath sounds. Improving? Continue. No improvement? Consider escalation — these patients can deteriorate rapidly." }
        ]
      }
    ],
    keyPoints: [
      "CPAP is a game-changer for both CHF (pushes fluid out) and COPD (splints airways)",
      "Albuterol targets bronchospasm — the primary COPD mechanism",
      "Always reassess after every intervention"
    ]
  },
  {
    id: "aemt-copd-chf-quiz",
    title: "Knowledge Check — AEMT COPD vs CHF",
    content: `These scenarios test your ability to integrate pathophysiology with clinical decision-making.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-copd-chf-q1",
          question: "Your capnography shows a shark fin waveform with ETCO₂ of 52 mmHg. The patient has a history of COPD, barrel chest, and pursed-lip breathing. What does this capnography pattern indicate?",
          options: ["Pulmonary edema", "Bronchospasm with CO₂ retention", "Cardiac arrest", "Normal ventilation"],
          correctIndex: 1,
          explanation: "The shark fin waveform indicates bronchospasm (air trapping), and the elevated ETCO₂ (>45 mmHg) confirms CO₂ retention — both hallmarks of COPD exacerbation. A normal rectangular waveform would be expected in CHF without concurrent bronchospasm."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-copd-chf-q2",
          question: "How does CPAP help in acute CHF pulmonary edema?",
          options: ["It opens narrowed airways through bronchodilation", "It pushes fluid from alveoli back into pulmonary capillaries and reduces preload", "It increases cardiac output directly", "It delivers nebulized medication"],
          correctIndex: 1,
          explanation: "CPAP creates positive pressure that mechanically pushes fluid from alveoli back into the pulmonary capillaries (improving gas exchange) and increases intrathoracic pressure, which reduces venous return (preload) — decreasing the volume overloading the failing heart."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-copd-chf-q3",
          question: "A patient with both COPD and CHF presents with bilateral crackles AND wheezing. SpO₂ is 84%. What is your best initial approach?",
          options: ["Albuterol only — treat the bronchospasm first", "CPAP only — treat the fluid first", "CPAP with inline albuterol — treat both simultaneously", "High-flow oxygen only — wait for ALS"],
          correctIndex: 2,
          explanation: "With overlap presentations showing both fluid (crackles) and bronchospasm (wheezing), CPAP with inline albuterol addresses both mechanisms simultaneously. CPAP pushes fluid out and splints airways while albuterol relaxes bronchospasm. This is the gold standard for mixed presentations."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-copd-chf-q4",
          question: "Which finding is most specific to acute CHF exacerbation rather than COPD exacerbation?",
          options: ["Elevated ETCO₂", "Shark fin capnography waveform", "Paroxysmal nocturnal dyspnea with bilateral crackles", "Prolonged expiratory phase"],
          correctIndex: 2,
          explanation: "PND (waking gasping at night) with bilateral crackles is highly specific to CHF — fluid redistributes when lying flat and overwhelms the failing heart. Elevated ETCO₂, shark fin waveforms, and prolonged expiration are COPD indicators."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-copd-chf-q5",
          question: "When is CPAP contraindicated?",
          options: ["In patients with COPD", "In patients who are hypotensive", "In patients with bilateral crackles", "In patients with SpO₂ below 90%"],
          correctIndex: 1,
          explanation: "CPAP reduces preload by increasing intrathoracic pressure. In a hypotensive patient, reducing preload further can cause cardiovascular collapse. Other contraindications include apnea, vomiting, facial trauma, and inability to protect the airway. CPAP is indicated (not contraindicated) in COPD with adequate BP."
        }
      }
    ],
    keyPoints: [
      "Capnography waveform shape differentiates COPD (shark fin) from CHF (rectangular)",
      "CPAP + inline albuterol is the gold standard for overlap presentations",
      "Always check blood pressure before CPAP — hypotension is a contraindication"
    ]
  },
  {
    id: "aemt-copd-chf-wrapup",
    title: "AEMT Level Complete — Pathophysiology Meets Practice",
    content: `You've built significantly on your EMT foundation:

**What you've added:**
• Pathophysiology: V/Q mismatch, Starling forces, auto-PEEP, neurohormonal activation
• Assessment tools: Capnography waveform interpretation, advanced auscultation
• Interventions: CPAP, nebulized albuterol, inline nebulizer + CPAP combination

**Your clinical thinking has evolved:**
You're no longer just recognizing patterns — you understand the mechanisms. When you hear crackles, you know fluid is crossing the capillary membrane. When you see a shark fin waveform, you know airways are obstructed. This understanding makes you adaptable.

**What's next?**
At the Paramedic level, you'll add pharmacology (nitroglycerin, ipratropium, furosemide), BiPAP with IPAP/EPAP adjustments, acid-base integration, and complex differential diagnosis for COPD-CHF overlap with cardiac ischemia.

**Important:** Verify all information with official NREMT guidelines and your local protocols. This content is educational supplementation only.`,
    keyPoints: [
      "You can now differentiate COPD and CHF using objective tools",
      "CPAP is effective for both conditions through different mechanisms",
      "Understanding pathophysiology makes you adaptable in the field"
    ],
    rememberThis: "You've gone from recognizing patterns to understanding mechanisms. That's the leap from good provider to great provider. The tools you've mastered at the AEMT level — capnography, CPAP, nebulizers — prevent intubations and save lives every day."
  }
];

// =====================================================
// Paramedic COPD vs CHF Content
// =====================================================
export const paramedicCopdVsChfContent: TopicSection[] = [
  {
    id: "para-copd-chf-intro",
    title: "Paramedic-Level Mastery — Where Pathophysiology Meets Pharmacology",
    content: `You've built a solid foundation at EMT and AEMT levels. Now it's time for paramedic-level clinical reasoning — where you integrate advanced pathophysiology, pharmacology, ventilation strategies, and complex differential diagnosis.

**What changes at the Paramedic level:**
• **Pharmacology:** Nitroglycerin for preload reduction, ipratropium for anticholinergic bronchodilation, furosemide for acute diuresis, magnesium for refractory bronchospasm
• **Ventilation:** BiPAP with independent IPAP/EPAP adjustments, acid-base guided ventilation management
• **Clinical reasoning:** COPD-CHF overlap with cardiac ischemia, acute-on-chronic presentations, treatment prioritization when interventions compete

**The paramedic difference:**
You're not just treating symptoms — you're targeting specific receptors, managing competing pathologies, and making treatment decisions that require understanding the second and third-order effects of your interventions.

**Important:** Verify all information with official NREMT guidelines and your local protocols. This content is educational supplementation only.`,
    keyPoints: [
      "Paramedic adds pharmacology, BiPAP, and complex clinical reasoning",
      "Treatment targets specific receptors and mechanisms",
      "COPD-CHF overlap with ischemia is the ultimate diagnostic challenge"
    ],
    proTip: "The best paramedics think in mechanisms, not protocols. Protocols tell you what to do; understanding mechanisms tells you why — and what to do when the patient doesn't fit the protocol."
  },
  {
    id: "para-copd-chf-advanced-pathophys",
    title: "Advanced Pathophysiology — Molecular and Hemodynamic",
    content: `Let's go deeper into the mechanisms that drive treatment decisions.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "COPD: Cellular Level",
            content: "**Chronic Inflammation:** Neutrophils, macrophages, and CD8+ T-cells drive ongoing destruction. Protease-antiprotease imbalance (alpha-1 antitrypsin) destroys alveolar walls. Oxidative stress from smoking accelerates damage.\n\n**V/Q Quantification:** Dead space ventilation (V without Q) in emphysema reduces effective gas exchange. Shunt (Q without V) in mucus-plugged airways. The result: chronic hypoxemia + hypercapnia with renal bicarbonate compensation.\n\n**Acid-Base:** Chronic respiratory acidosis (elevated CO₂) with metabolic compensation (elevated HCO₃⁻). pH may be near-normal chronically. Acute exacerbation pushes pH into dangerous territory when compensation is exceeded."
          },
          {
            label: "CHF: Hemodynamic",
            content: "**Starling Equation:** Fluid movement = Kf[(Pc - Pi) - σ(πc - πi)]. In CHF, elevated capillary hydrostatic pressure (Pc) overwhelms oncotic pressure (πc), pushing fluid into alveoli. This is the mathematical basis of pulmonary edema.\n\n**Neurohormonal Cascade:** Low cardiac output triggers SNS activation (tachycardia, vasoconstriction), RAAS activation (Na⁺/H₂O retention, further vasoconstriction), and BNP release (the body's attempt at compensation through natriuresis).\n\n**Forward vs. Backward Failure:** Backward failure = congestion (crackles, edema, JVD). Forward failure = poor perfusion (fatigue, confusion, renal dysfunction). Most patients have both."
          },
          {
            label: "Overlap Pathology",
            content: "**COPD + CHF:** Chronic hypoxemia from COPD causes pulmonary vasoconstriction (hypoxic pulmonary vasoconstriction), which increases right ventricular afterload, leading to right heart failure (cor pulmonale). This is how COPD CAUSES heart failure.\n\n**Ischemia-Driven CHF:** Acute MI reduces cardiac output, causing flash pulmonary edema. The patient presents with respiratory distress that looks like CHF exacerbation but is actually an acute coronary event. The 12-lead is essential.\n\n**Competing Priorities:** Bronchodilators increase heart rate (bad for ischemia). NTG reduces preload (may worsen hypotension in dehydrated COPD patients). Every treatment has trade-offs in overlap patients."
          }
        ]
      }
    ],
    keyPoints: [
      "COPD creates chronic respiratory acidosis with metabolic compensation",
      "CHF follows the Starling equation — hydrostatic pressure overwhelms oncotic pressure",
      "COPD can cause heart failure (cor pulmonale) through pulmonary vasoconstriction"
    ]
  },
  {
    id: "para-copd-chf-pharm-terms",
    title: "Pharmacology Terminology",
    content: `These medications and their mechanisms are essential paramedic-level knowledge.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          { front: "Nitroglycerin (NTG)", back: "Organic nitrate that converts to nitric oxide → smooth muscle relaxation → venodilation at low doses, arteriodilation at high doses. Primary effect: reduces preload (less blood returning to the heart). In CHF: reduces pulmonary congestion. Dose: 0.4 mg SL q5min. Contraindication: SBP < 90, recent PDE5 inhibitor use." },
          { front: "Ipratropium (Atrovent)", back: "Anticholinergic bronchodilator. Blocks muscarinic (M3) receptors in bronchial smooth muscle, reducing bronchoconstriction and secretions. Works synergistically with albuterol (different receptor pathway). Slower onset than albuterol (~15 min) but longer duration. 0.5 mg via nebulizer." },
          { front: "Furosemide (Lasix)", back: "Loop diuretic. Blocks Na⁺/K⁺/2Cl⁻ co-transporter in the loop of Henle. Reduces circulating volume by increasing urine output. In acute CHF: IV onset 5-15 min. Also has mild venodilatory effect before diuresis begins. Typical dose: 40-80 mg IV." },
          { front: "Magnesium Sulfate", back: "Smooth muscle relaxant for refractory bronchospasm. Inhibits calcium-mediated contraction. Used when albuterol + ipratropium aren't enough. 1-2 g IV over 15-20 minutes. Also prevents hypokalemia during aggressive albuterol therapy." },
          { front: "BNP (B-Type Natriuretic Peptide)", back: "Not a medication — a biomarker. Released by stretched ventricular walls in CHF. Elevated BNP (>500 pg/mL) strongly suggests CHF. Low BNP (<100) makes CHF unlikely. Available in some EMS systems as point-of-care testing. Helps differentiate CHF from COPD." },
          { front: "Methylprednisolone (Solu-Medrol)", back: "Corticosteroid that reduces airway inflammation in COPD exacerbation. Takes hours to work but reduces relapse rates. 125 mg IV in acute COPD exacerbation per many protocols. Anti-inflammatory, not bronchodilator — treats the underlying inflammation, not the acute spasm." }
        ]
      }
    ],
    keyPoints: [
      "NTG reduces preload — the primary paramedic CHF intervention",
      "Ipratropium + albuterol provides dual bronchodilation via different receptor pathways",
      "Furosemide has a venodilatory effect before diuresis begins"
    ]
  },
  {
    id: "para-copd-chf-bipap",
    title: "BiPAP and Ventilation Strategies",
    content: `BiPAP is your advanced positive pressure tool — two independent pressure settings give you more control than CPAP alone.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "BiPAP Basics",
            content: "**IPAP (Inspiratory Positive Airway Pressure):** The higher pressure during inhalation. Supports ventilation by augmenting tidal volume. Think of it as the 'push' that helps air in.\n\n**EPAP (Expiratory Positive Airway Pressure):** The lower pressure during exhalation. Keeps airways and alveoli open (same function as CPAP/PEEP). Think of it as the 'hold' that prevents collapse.\n\n**Pressure Support:** The difference between IPAP and EPAP is the pressure support — the actual ventilatory assistance. IPAP 12 / EPAP 5 = 7 cmH₂O of pressure support."
          },
          {
            label: "BiPAP for COPD",
            content: "**Strategy:** Higher IPAP to overcome air trapping and augment ventilation. Moderate EPAP to counteract auto-PEEP without worsening air trapping.\n\n**Typical Settings:** IPAP 12-15, EPAP 5-8. Goal: improve CO₂ clearance (watch ETCO₂ trend downward) while reducing work of breathing.\n\n**Clinical Pearl:** In severe COPD with CO₂ retention, the pressure support (IPAP-EPAP difference) is what matters most. Increasing IPAP improves CO₂ clearance. Don't raise EPAP too high — it can worsen air trapping."
          },
          {
            label: "BiPAP for CHF",
            content: "**Strategy:** EPAP is the key — it recruits collapsed alveoli and pushes fluid back into capillaries (same as CPAP). IPAP provides additional ventilatory support for exhausted patients.\n\n**Typical Settings:** IPAP 10-12, EPAP 8-10. Higher EPAP for more alveolar recruitment and preload reduction.\n\n**Clinical Pearl:** In CHF, the EPAP does most of the work. If the patient is improving on CPAP but still struggling, switching to BiPAP with higher EPAP and moderate IPAP provides the extra support they need."
          },
          {
            label: "Acid-Base Integration",
            content: "**COPD:** Monitor ETCO₂ trends. Goal is NOT to normalize CO₂ — these patients live with elevated CO₂. Dropping their CO₂ too fast can cause alkalosis and seizures. Aim for their chronic baseline or a reasonable reduction.\n\n**CHF:** CO₂ may be low (respiratory alkalosis from tachypnea) or high (if exhausted and hypoventilating). Treat the underlying cause — if CPAP/BiPAP resolves the pulmonary edema, ventilation normalizes.\n\n**Mixed:** In overlap patients, balance ventilation support with the need to avoid over-correcting chronic respiratory acidosis."
          }
        ]
      }
    ],
    keyPoints: [
      "IPAP supports ventilation; EPAP supports oxygenation and prevents collapse",
      "COPD: focus on IPAP for CO₂ clearance",
      "CHF: focus on EPAP for alveolar recruitment and preload reduction"
    ],
    proTip: "Don't chase normal numbers in chronic COPD patients. Their 'normal' ETCO₂ may be 50-55 mmHg. Aggressively lowering CO₂ can cause post-hypercapnic alkalosis and seizures."
  },
  {
    id: "para-copd-chf-clinical-assess",
    title: "Advanced Clinical Assessment",
    content: `Paramedic-level assessment integrates all available data into a clinical picture:

**12-Lead ECG Integration:**
• CHF may be caused by acute MI — always acquire a 12-lead in dyspneic patients
• STEMI + pulmonary edema = cardiogenic shock pathway
• Atrial fibrillation with rapid ventricular response commonly triggers CHF exacerbation

**Acid-Base Assessment:**
• COPD chronic baseline: pH 7.35-7.38, PCO₂ 50-60, HCO₃⁻ 28-34 (compensated respiratory acidosis)
• Acute COPD exacerbation: pH <7.35, PCO₂ >60 (decompensated)
• Acute CHF: pH may be elevated (respiratory alkalosis from tachypnea) or low (metabolic acidosis from poor perfusion)

**Serial Assessment:**
• Reassess after EVERY intervention
• Trending ETCO₂ tells you if ventilation is improving
• Trending SpO₂ tells you if oxygenation is improving
• Trending respiratory rate and effort tells you if the patient is improving clinically`,
    keyPoints: [
      "Always get a 12-lead — MI can present as CHF",
      "Know COPD chronic baseline to avoid over-correcting acid-base",
      "Serial assessment after every intervention guides next steps"
    ],
    rememberThis: "The 12-lead ECG is just as important in the dyspneic patient as in the chest pain patient. Ischemia-driven pulmonary edema requires emergent cath lab activation, not just CPAP and NTG."
  },
  {
    id: "para-copd-chf-interventions",
    title: "Paramedic Pharmacology Integration",
    content: `Your medication toolkit now targets specific mechanisms:`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          { front: "CHF Treatment Algorithm", back: "1. High-flow O₂ or CPAP/BiPAP\n2. NTG 0.4 mg SL (if SBP >90) — reduces preload\n3. Repeat NTG q5min PRN (some protocols allow higher dosing)\n4. Furosemide 40-80 mg IV (if pulmonary edema persists)\n5. 12-Lead ECG — rule out STEMI as cause\n6. Consider IV NTG infusion for refractory cases" },
          { front: "COPD Treatment Algorithm", back: "1. Low-flow O₂ (target SpO₂ 88-92%) or CPAP/BiPAP\n2. Albuterol 2.5 mg nebulizer (β₂ agonist)\n3. Ipratropium 0.5 mg nebulizer (anticholinergic)\n4. Consider methylprednisolone 125 mg IV\n5. Magnesium 1-2 g IV for refractory bronchospasm\n6. Consider inline nebulizer with CPAP/BiPAP" },
          { front: "Overlap (COPD + CHF) Strategy", back: "Start with CPAP/BiPAP (helps both). Add albuterol for bronchospasm component. If crackles dominant: add NTG for preload reduction. If wheezing dominant: add ipratropium for bronchodilation. Monitor closely — interventions for one condition can affect the other." },
          { front: "NTG Dosing Strategy", back: "Traditional: 0.4 mg SL q5min. High-dose protocols (some systems): NTG paste or IV infusion for refractory pulmonary edema. Key: monitor BP closely — NTG causes significant preload reduction. Stop if SBP drops below 90. Synergistic with CPAP." },
          { front: "When Treatments Compete", back: "Albuterol increases HR → bad for ischemic CHF. NTG reduces preload → risky in dehydrated COPD patients. Furosemide reduces volume → bad for hypovolemic COPD patients. Always consider the trade-offs and monitor for adverse effects." },
          { front: "Intubation Considerations", back: "COPD intubation: risk of worsening air trapping with positive pressure ventilation. Use low rate, long expiratory time. CHF intubation: positive pressure usually helps by reducing preload. Different ventilator strategies for different conditions." }
        ]
      }
    ],
    keyPoints: [
      "CHF: NTG + CPAP + furosemide targets preload and fluid",
      "COPD: albuterol + ipratropium + steroids targets airway obstruction",
      "Overlap: CPAP/BiPAP first (helps both), then condition-specific meds"
    ]
  },
  {
    id: "para-copd-chf-quiz",
    title: "Knowledge Check — Paramedic COPD vs CHF",
    content: `These questions test paramedic-level clinical reasoning. Think through the pathophysiology behind each answer.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "para-copd-chf-q1",
          question: "A patient with chronic COPD has a baseline ABG of pH 7.36, PCO₂ 55, HCO₃⁻ 30. During an acute exacerbation, their ETCO₂ reads 72 mmHg. What acid-base state are they most likely in?",
          options: ["Compensated respiratory acidosis (their normal)", "Acute-on-chronic respiratory acidosis", "Metabolic alkalosis", "Respiratory alkalosis"],
          correctIndex: 1,
          explanation: "Their baseline shows compensated respiratory acidosis (elevated CO₂ with elevated bicarb keeping pH near normal). The acute rise to ETCO₂ 72 exceeds their compensation capacity — this is acute-on-chronic respiratory acidosis. pH will be dropping. They need ventilatory support, but don't try to normalize their CO₂ — aim for their baseline (~55)."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-copd-chf-q2",
          question: "How does nitroglycerin improve acute CHF pulmonary edema?",
          options: ["Increases cardiac contractility", "Reduces preload through venodilation, decreasing pulmonary congestion", "Acts as a diuretic to remove fluid", "Directly relaxes bronchial smooth muscle"],
          correctIndex: 1,
          explanation: "NTG converts to nitric oxide, causing venodilation. This pools blood in the venous system, reducing the volume returning to the heart (preload). Less preload means less pressure backing up into the pulmonary capillaries, reducing pulmonary edema. It's a hemodynamic intervention, not a bronchodilator or diuretic."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-copd-chf-q3",
          question: "A 70-year-old with COPD and CHF presents with bilateral crackles, wheezing, SpO₂ 82%, BP 140/90, ETCO₂ 58 with shark fin waveform. What is the most appropriate initial intervention?",
          options: ["NTG 0.4 mg SL only", "Albuterol nebulizer only", "BiPAP with inline albuterol", "Furosemide 40 mg IV"],
          correctIndex: 2,
          explanation: "This patient has both CHF (crackles) and COPD (wheezing, shark fin, elevated CO₂) components. BiPAP with inline albuterol addresses both simultaneously — positive pressure pushes fluid from alveoli and counteracts air trapping, while albuterol opens constricted airways. Follow with NTG for the CHF component once ventilation is established."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-copd-chf-q4",
          question: "Why is acquiring a 12-lead ECG essential in a patient presenting with acute pulmonary edema?",
          options: ["To monitor respiratory rate", "To detect STEMI as a cause of acute CHF — ischemia-driven pulmonary edema requires cath lab activation", "To determine if CPAP is working", "To measure SpO₂ more accurately"],
          correctIndex: 1,
          explanation: "Acute MI can cause sudden-onset CHF (flash pulmonary edema) when the damaged myocardium can't maintain cardiac output. If STEMI is the cause, the patient needs emergent cath lab activation — not just CPAP and NTG. The 12-lead differentiates treatable cause from symptom management."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-copd-chf-q5",
          question: "When adjusting BiPAP for a severe COPD exacerbation, which pressure should you primarily increase to improve CO₂ clearance?",
          options: ["EPAP (Expiratory Positive Airway Pressure)", "IPAP (Inspiratory Positive Airway Pressure)", "Both equally", "Neither — increase respiratory rate instead"],
          correctIndex: 1,
          explanation: "IPAP determines the tidal volume during inspiration. Increasing IPAP increases the pressure support (IPAP - EPAP), which augments ventilation and improves CO₂ clearance. EPAP keeps airways open but doesn't directly improve ventilation. In COPD, the focus is on clearing CO₂ through better ventilation, not just oxygenation."
        }
      }
    ],
    keyPoints: [
      "Acute-on-chronic respiratory acidosis is the key COPD emergency",
      "NTG works through venodilation/preload reduction, not diuresis",
      "12-lead ECG rules out STEMI as the cause of acute pulmonary edema"
    ]
  },
  {
    id: "para-copd-chf-wrapup",
    title: "Complete Mastery — COPD vs CHF Across All Levels",
    content: `You've completed the full COPD vs CHF progression. Let's review your journey:

**EMT Level:** Pattern recognition — COPD = wheezing + barrel chest, CHF = crackles + edema. BLS oxygen strategies and positioning.

**AEMT Level:** Pathophysiology understanding — V/Q mismatch, Starling forces, capnography interpretation. CPAP and nebulized medications.

**Paramedic Level:** Advanced pharmacology — NTG, ipratropium, furosemide, magnesium. BiPAP with IPAP/EPAP optimization. Acid-base integration. Complex differential diagnosis including ischemia-driven CHF.

**You can now:**
• Differentiate COPD from CHF using history, physical exam, capnography, and auscultation
• Apply condition-specific interventions targeting the underlying mechanism
• Manage overlap presentations using combination therapy
• Integrate 12-lead ECG findings to rule out ischemia as a cause
• Adjust BiPAP settings based on ventilation vs. oxygenation goals
• Anticipate treatment conflicts in overlap patients

**The clinical impact:**
COPD and CHF are among the most common reasons patients call 911. Your ability to rapidly differentiate, treat appropriately, and manage complications directly impacts patient outcomes. The difference between a good provider and a great one is understanding the WHY behind every intervention.

**Important:** Verify all information with official NREMT guidelines and your local protocols. This content is educational supplementation only.`,
    keyPoints: [
      "EMT: pattern recognition → AEMT: mechanism understanding → Paramedic: pharmacology integration",
      "CPAP/BiPAP helps both conditions through different mechanisms",
      "Always rule out ischemia as a cause of acute CHF",
      "Understanding mechanisms makes you adaptable when patients don't fit the textbook"
    ],
    rememberThis: "From recognizing crackles vs. wheezing as an EMT, to understanding V/Q mismatch as an AEMT, to targeting specific receptors with NTG and ipratropium as a Paramedic — you've built a complete clinical reasoning framework. Every level built on the last. That's mastery."
  }
];

// =====================================================
// EMT Asthma vs Anaphylaxis Content
// =====================================================
export const emtAsthmaAnaphylaxisContent: TopicSection[] = [
  {
    id: "asthma-anaph-intro",
    title: "Two Conditions, One Scary Symptom — Why This Matters",
    content: `"I can't breathe." Sound familiar? Two of the most dramatic causes of respiratory distress — asthma and anaphylaxis — can look similar at first glance but require very different thinking.

**Asthma** is an airway problem. The bronchioles clamp down and swell, making it hard to move air. Think of it like someone kinked your garden hose — the water (air) can't flow properly.

**Anaphylaxis** is a whole-body problem. The immune system goes haywire, causing massive vasodilation, airway swelling, and capillary leak all at once. Think of it like a dam breaking — everything floods everywhere.

**Why does this matter for you?** Because timing and treatment are completely different. An asthma patient needs help opening their airways. An anaphylaxis patient needs epinephrine NOW — every minute counts. Getting this right on scene can be the difference between a save and a tragedy.

**Important:** Verify all information with official NREMT guidelines and your local protocols. This content is educational supplementation only.`,
    keyPoints: [
      "Asthma = localized airway problem (bronchospasm)",
      "Anaphylaxis = systemic whole-body emergency (immune overreaction)",
      "Both cause dyspnea, but urgency and treatment differ dramatically"
    ],
    proTip: "Here's a key distinction: asthma is almost always a breathing problem. Anaphylaxis is a breathing AND circulation problem. If your patient is wheezing AND has hives or hypotension, think anaphylaxis first."
  },
  {
    id: "asthma-anaph-core-concepts",
    title: "Asthma and Anaphylaxis — Core Concepts",
    content: `Let's break down what's actually happening in each condition. Understanding the mechanism helps everything else make sense.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Asthma",
            content: "Asthma is a chronic inflammatory disease of the airways. During an attack, three things happen simultaneously: bronchospasm (smooth muscle tightens around the bronchioles), inflammation (airway walls swell), and mucus production (thick mucus plugs smaller airways). The result? Air gets trapped — like breathing through a pinched straw. Patients wheeze because air is squeezing through narrowed passages. Exhalation is the hard part."
          },
          {
            label: "Anaphylaxis",
            content: "Anaphylaxis is a severe, systemic IgE-mediated allergic reaction. When a sensitized person is re-exposed to an allergen, mast cells throughout the body release massive amounts of histamine and other chemicals. This causes widespread vasodilation (blood pressure drops), capillary leak (fluid shifts out of vessels), and airway swelling (laryngeal and bronchial edema). It affects multiple organ systems simultaneously — skin (hives), airway (swelling), circulation (shock), and GI (cramping/vomiting)."
          },
          {
            label: "Key Difference",
            content: "The fundamental difference: asthma is LOCALIZED to the lower airways (bronchioles). Anaphylaxis is SYSTEMIC — it affects the entire body. An asthma patient wheezes but usually has normal skin color and stable vital signs early on. An anaphylaxis patient may wheeze too, but they also have hives, facial swelling, hypotension, and tachycardia. Different scope, different urgency, different treatment."
          }
        ]
      }
    ],
    keyPoints: [
      "Asthma: bronchospasm + inflammation + mucus = localized airway obstruction",
      "Anaphylaxis: histamine release = vasodilation + airway swelling + capillary leak",
      "Asthma = localized; Anaphylaxis = systemic"
    ]
  },
  {
    id: "asthma-anaph-terminology",
    title: "Key Terms You Need to Know",
    content: `These terms will come up on every respiratory and allergic emergency call. Master them now and field communication gets much easier.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          { front: "Bronchospasm", back: "Sudden constriction of smooth muscle in the bronchiole walls. The hallmark of asthma. Makes airways narrow, causing wheezing and difficulty exhaling. Think of it like a boa constrictor squeezing a tube — the opening gets smaller." },
          { front: "Stridor", back: "A high-pitched sound heard on INHALATION, caused by upper airway obstruction. In anaphylaxis, this means the larynx is swelling shut. Stridor is an emergency — it means the upper airway is critically narrowed. Wheezing is lower; stridor is higher." },
          { front: "Urticaria (Hives)", back: "Raised, red, itchy welts on the skin caused by histamine release. A hallmark of allergic reactions and anaphylaxis. If you see hives plus respiratory distress, think anaphylaxis — not asthma." },
          { front: "Angioedema", back: "Swelling of the deeper layers of skin, especially around the face, lips, tongue, and throat. Caused by histamine-mediated capillary leak. Unlike hives (surface), angioedema is deep tissue swelling — and when it involves the airway, it's immediately life-threatening." },
          { front: "Epinephrine", back: "The ONLY first-line medication for anaphylaxis. Acts on alpha receptors (vasoconstriction → raises BP) and beta receptors (bronchodilation → opens airways, increases heart rate). Given via auto-injector (EpiPen) at the EMT level. 0.3 mg IM in the lateral thigh for adults." },
          { front: "Wheezing", back: "High-pitched musical sounds heard on exhalation, caused by air moving through narrowed lower airways. Classic finding in asthma. Can also occur in anaphylaxis (bronchospasm component). Listen with a stethoscope — but severe wheezing can sometimes be heard without one." }
        ]
      }
    ],
    keyPoints: [
      "Stridor (inspiratory) = upper airway → think anaphylaxis",
      "Wheezing (expiratory) = lower airway → think asthma",
      "Hives + respiratory distress = anaphylaxis until proven otherwise"
    ]
  },
  {
    id: "asthma-anaph-classification",
    title: "Types and Triggers",
    content: `Both conditions have subtypes and triggers that affect how patients present in the field.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Asthma Types",
            content: "**Intermittent Asthma:** Symptoms ≤2 days/week, no interference with daily activity. These patients may not even carry an inhaler.\n\n**Persistent Asthma (Mild/Moderate/Severe):** Increasing frequency and severity. Severe persistent patients use daily controller medications and still have breakthrough symptoms.\n\n**Allergic Asthma:** Triggered by allergens — pollen, dust, pet dander. Most common type.\n\n**Exercise-Induced Asthma:** Triggered by physical activity, especially in cold/dry air. Common in athletes.\n\n**Triggers include:** allergens, cold air, exercise, respiratory infections, smoke, stress, and medications (aspirin, NSAIDs, beta-blockers)."
          },
          {
            label: "Anaphylaxis Triggers",
            content: "**Food:** Peanuts, tree nuts, shellfish, milk, eggs — the most common trigger overall, especially in children.\n\n**Insect Stings:** Bee, wasp, hornet, fire ant. Second most common cause in adults.\n\n**Medications:** Antibiotics (penicillin), NSAIDs, contrast dye, anesthesia agents.\n\n**Latex:** Healthcare workers and patients with frequent medical procedures are at higher risk.\n\n**Exercise-Induced Anaphylaxis:** Rare but real — exercise alone or exercise after eating specific foods.\n\n**Idiopathic:** In ~20% of cases, no trigger is ever identified."
          },
          {
            label: "Acute vs Chronic",
            content: "**Asthma is chronic with acute exacerbations:** Patients live with the disease daily and manage it with controller medications. An 'asthma attack' is an acute worsening triggered by something specific. They've usually done this before.\n\n**Anaphylaxis is always acute:** It's a sudden, unexpected emergency. Onset is usually within minutes of exposure (sometimes up to 2 hours). Patients may or may not know their triggers. Every episode can be worse than the last."
          }
        ]
      }
    ],
    keyPoints: [
      "Asthma: chronic disease with acute flare-ups — patients know their triggers",
      "Anaphylaxis: acute emergency — food, stings, and medications are top triggers",
      "Ask about previous episodes and known triggers in both conditions"
    ]
  },
  {
    id: "asthma-anaph-assessment",
    title: "Assessment — Reading the Clues",
    content: `Your assessment is your most powerful tool. Here's what to look for:

**History Clues:**
• Asthma: history of asthma, carries an inhaler, knows triggers, has had attacks before, gradual onset over minutes to hours
• Anaphylaxis: recent exposure to known allergen (food, sting, medication), rapid onset (minutes), history of prior reactions, carries an EpiPen

**Physical Exam Findings:**

• **Look:** Asthma patients may be in tripod position, using accessory muscles, with prolonged exhalation. Anaphylaxis patients may have hives, facial/lip/tongue swelling, flushed or pale skin
• **Listen:** Asthma = wheezing (expiratory). Anaphylaxis = may have wheezing AND/OR stridor (inspiratory). Silent chest in either = critical emergency
• **Feel:** Anaphylaxis: check for tongue swelling, assess pulse (tachycardic, thready in shock). Asthma: skin is usually normal

**Vital Signs:**
• Asthma: tachypnea, tachycardia, may have normal BP initially. SpO₂ drops as attack worsens
• Anaphylaxis: tachycardia, HYPOTENSION (the distinguishing vital sign), tachypnea, SpO₂ may drop rapidly`,
    keyPoints: [
      "Onset speed is a major clue — minutes (anaphylaxis) vs. gradual (asthma)",
      "Skin findings (hives, swelling) point strongly to anaphylaxis",
      "Hypotension in a wheezing patient = think anaphylaxis, not asthma"
    ],
    rememberThis: "Always ask: 'Has this happened before?' and 'Were you exposed to anything new today — food, medication, insect sting?' These two questions can differentiate asthma from anaphylaxis faster than any physical finding."
  },
  {
    id: "asthma-anaph-interventions",
    title: "EMT Interventions — What You Can Do",
    content: `Your BLS interventions can save lives in both conditions. Here's your toolkit:`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          { front: "Epinephrine Auto-Injector (Anaphylaxis)", back: "THE critical intervention for anaphylaxis. Assist with the patient's prescribed EpiPen or administer per protocol. 0.3 mg IM in the lateral thigh (through clothing if needed). Works in 3-5 minutes. Can repeat in 5-15 minutes per protocol if symptoms persist. Don't hesitate — early epi saves lives." },
          { front: "Inhaler Assist (Asthma)", back: "Assist the patient with their prescribed metered-dose inhaler (MDI), usually albuterol. Shake well, have patient exhale fully, coordinate actuation with slow deep inhalation, hold breath 10 seconds. Can repeat per protocol. This is your primary intervention for asthma." },
          { front: "Positioning", back: "Asthma: position of comfort, usually sitting upright (tripod). Anaphylaxis: if hypotensive, consider supine with legs elevated (Trendelenburg) to support blood pressure — BUT if they have severe respiratory distress, let them sit up. If they're vomiting, recovery position. Positioning depends on the dominant symptom." },
          { front: "Oxygen Strategy", back: "Asthma: start with nasal cannula or non-rebreather based on severity. Target SpO₂ >94%. Anaphylaxis: high-flow O₂ via non-rebreather at 15 LPM — these patients are in crisis and need maximum oxygenation. Be prepared to assist ventilations with BVM if breathing becomes inadequate." },
          { front: "Transport Decision", back: "Both conditions can deteriorate rapidly. Asthma: monitor for silent chest (no air movement = critical). Anaphylaxis: monitor for airway compromise and shock. Call for ALS early — these patients benefit from IV epinephrine, nebulizers, and advanced airway management. Transport immediately in anaphylaxis." },
          { front: "Communication", back: "Tell the hospital: 'I suspect asthma exacerbation' or 'I suspect anaphylaxis — epi given at [time].' Include: trigger/exposure, onset time, breath sounds, SpO₂, vitals, medications given, and response to treatment. This pre-arrival report changes their preparation." }
        ]
      }
    ],
    keyPoints: [
      "Anaphylaxis = epinephrine auto-injector IMMEDIATELY",
      "Asthma = inhaler assist + oxygen + positioning",
      "Call for ALS early in both conditions"
    ]
  },
  {
    id: "asthma-anaph-quiz",
    title: "Knowledge Check — Asthma vs Anaphylaxis",
    content: `Let's see how well you can differentiate these two conditions. Think through each scenario like you're on scene.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "emt-asthma-anaph-q1",
          question: "A 22-year-old college student is wheezing, sitting in tripod position, with prolonged exhalation. She says, 'This happened last week too — I forgot my inhaler at home.' Skin is normal, BP 124/78. What do you most suspect?",
          options: ["Anaphylaxis", "Asthma exacerbation", "Pneumonia", "Pulmonary embolism"],
          correctIndex: 1,
          explanation: "Wheezing, tripod position, prolonged exhalation, history of previous episodes, and a prescribed inhaler all point to asthma exacerbation. Normal skin and stable blood pressure argue against anaphylaxis. Assist with her inhaler if available and provide oxygen."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-asthma-anaph-q2",
          question: "A 35-year-old male at a restaurant develops sudden facial swelling, hives across his chest, and difficulty breathing within 10 minutes of eating shrimp. BP 88/50, HR 128. What is the most likely condition?",
          options: ["Asthma attack", "Panic attack", "Anaphylaxis", "Food poisoning"],
          correctIndex: 2,
          explanation: "Rapid onset after food exposure, hives (urticaria), facial swelling (angioedema), respiratory distress, hypotension, and tachycardia — this is textbook anaphylaxis. The systemic nature (skin + airway + cardiovascular) distinguishes it from asthma. Administer epinephrine immediately."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-asthma-anaph-q3",
          question: "What is the FIRST medication intervention for a patient in anaphylaxis?",
          options: ["Albuterol inhaler", "Diphenhydramine (Benadryl)", "Epinephrine auto-injector", "Oxygen via non-rebreather"],
          correctIndex: 2,
          explanation: "Epinephrine is the FIRST and ONLY life-saving medication for anaphylaxis. It addresses all three deadly mechanisms: vasoconstriction (raises BP), bronchodilation (opens airways), and reduced capillary permeability (stops leak). Antihistamines and oxygen are secondary — don't delay epi for anything."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-asthma-anaph-q4",
          question: "Which assessment finding BEST distinguishes anaphylaxis from a severe asthma attack?",
          options: ["Wheezing", "Tachycardia", "Urticaria (hives) with hypotension", "Low SpO₂"],
          correctIndex: 2,
          explanation: "Hives with hypotension are highly specific to anaphylaxis. Wheezing, tachycardia, and low SpO₂ can occur in both conditions. The systemic signs — skin changes, cardiovascular compromise — are what separate anaphylaxis from asthma. Remember: asthma is localized; anaphylaxis is systemic."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-asthma-anaph-q5",
          question: "A patient with known asthma is wheezing severely. You notice hives appearing on her arms and her lips are starting to swell. She just took ibuprofen for the first time. What should you do?",
          options: ["Assist with her asthma inhaler only", "Treat as anaphylaxis — administer epinephrine", "Provide oxygen only and transport", "Wait to see if the hives resolve"],
          correctIndex: 1,
          explanation: "Even though this patient has asthma, the NEW findings of hives and lip swelling after a new medication exposure indicate anaphylaxis — not just an asthma attack. NSAIDs (ibuprofen) can trigger anaphylaxis. Treat the most dangerous condition first: epinephrine for anaphylaxis, then address any residual bronchospasm."
        }
      }
    ],
    keyPoints: [
      "Skin findings + hemodynamic changes = anaphylaxis",
      "Epinephrine is ALWAYS first-line for anaphylaxis",
      "A patient with asthma can also have anaphylaxis — treat what you find"
    ]
  },
  {
    id: "asthma-anaph-wrapup",
    title: "Wrapping Up — You've Got the Foundation",
    content: `You now have the building blocks to differentiate two critical respiratory emergencies:

• **Asthma** = bronchospasm, localized to airways, wheezing, gradual onset, inhaler assist
• **Anaphylaxis** = systemic reaction, hives + swelling + hypotension, rapid onset, EPINEPHRINE
• **Both** = position of comfort, oxygen, continuous monitoring, rapid transport

**What's next?**
At the AEMT level, you'll add capnography to differentiate these conditions, administer IM epinephrine directly, use nebulized albuterol, and start IV fluid resuscitation for anaphylactic shock. The pathophysiology gets deeper, but the foundation you built here makes it all click.

**Remember:** Some patients have asthma AND develop anaphylaxis. Real-world medicine is messy — and that's okay. Your job is to treat the most dangerous condition first, monitor for changes, and communicate effectively.

**Important:** Verify all information with official NREMT guidelines and your local protocols. This content is educational supplementation only.`,
    keyPoints: [
      "Asthma and anaphylaxis are two of the most time-critical respiratory emergencies",
      "Assessment findings guide your intervention — localized vs. systemic",
      "Never delay epinephrine in suspected anaphylaxis"
    ],
    rememberThis: "Every experienced paramedic started by learning exactly what you just learned. This foundation — recognizing the difference between a localized airway problem and a systemic emergency — is the basis of allergic and respiratory emergency management at every level. You're building skills that matter."
  }
];

// =====================================================
// AEMT Asthma vs Anaphylaxis Content
// =====================================================
export const aemtAsthmaAnaphylaxisContent: TopicSection[] = [
  {
    id: "aemt-asthma-anaph-intro",
    title: "Going Deeper — The Pathophysiology Behind the Dyspnea",
    content: `You already know how to tell asthma and anaphylaxis apart at the bedside. Now let's understand WHY each condition causes the symptoms you see — and how your expanded AEMT toolkit changes the game.

**Building on your EMT foundation:**
You know asthma narrows the airways and anaphylaxis is a systemic emergency. Now we'll explore the mechanisms — IgE cascades, mast cell degranulation, histamine pathways, and why capnography is your secret weapon for differentiation.

**Your AEMT advantage:**
Capnography gives you a window into ventilation that SpO₂ alone can't provide. IM epinephrine, IV fluid resuscitation, and nebulized albuterol give you treatment options that can turn the tide before the patient crashes. Understanding the pathophysiology behind these tools makes you a more effective, more confident provider.

**Important:** Verify all information with official NREMT guidelines and your local protocols. This content is educational supplementation only.`,
    keyPoints: [
      "AEMT adds pathophysiology understanding to pattern recognition",
      "Capnography differentiates asthma from anaphylaxis in real-time",
      "IM epinephrine, IV fluids, and nebulizers are game-changing AEMT-scope tools"
    ],
    proTip: "The best AEMT providers don't just know WHAT to do — they know WHY. Understanding mechanism makes you adaptable when patients don't fit the textbook."
  },
  {
    id: "aemt-asthma-anaph-pathophys",
    title: "Pathophysiology — Why It Happens",
    content: `Let's dig into the mechanisms driving each condition.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Asthma Mechanism",
            content: "**The IgE Cascade:** In allergic asthma, allergen exposure triggers IgE antibodies on mast cells to degranulate, releasing histamine, leukotrienes, and prostaglandins. This creates the 'early phase' (minutes) — bronchospasm.\n\n**Early Phase (minutes):** Mast cell mediators cause immediate bronchospasm — smooth muscle clamping down on the bronchioles. This is what the patient feels first.\n\n**Late Phase (4-8 hours):** Inflammatory cells (eosinophils, neutrophils) flood the airways, causing edema, mucus production, and prolonged inflammation. This is why patients can worsen hours later even after initial improvement.\n\n**The Triple Threat:** Bronchospasm + airway wall edema + mucus plugging = severe airway obstruction. Air gets in but can't get out — creating air trapping and hyperinflation."
          },
          {
            label: "Anaphylaxis Mechanism",
            content: "**Massive Mast Cell Degranulation:** Unlike asthma (localized to lungs), anaphylaxis triggers mast cells EVERYWHERE — skin, airways, GI tract, cardiovascular system. The result is a systemic flood of histamine, tryptase, and other mediators.\n\n**Capillary Leak:** Histamine increases capillary permeability throughout the body. Plasma leaks from blood vessels into tissues. Up to 35% of circulating volume can shift out of the vascular space within minutes — this is third-spacing.\n\n**Vasodilation:** Histamine relaxes vascular smooth muscle, causing widespread vasodilation. Combined with volume loss from capillary leak, this creates distributive shock — blood pressure crashes.\n\n**Airway Double-Hit:** Laryngeal edema (upper airway → stridor) AND bronchospasm (lower airway → wheezing). Both mechanisms threaten the airway simultaneously."
          },
          {
            label: "Why It Matters",
            content: "**For Asthma:** Treatment targets bronchospasm (albuterol = β₂ agonist) and inflammation (steroids). The pathophysiology is localized, so localized treatment works well. Capnography shows the characteristic 'shark fin' waveform from air trapping.\n\n**For Anaphylaxis:** Treatment must address MULTIPLE failing systems simultaneously — epinephrine for vasoconstriction + bronchodilation, IV fluids for volume replacement, and monitoring for biphasic reactions (second wave hours later).\n\n**The clinical connection:** Knowing these mechanisms helps you predict what will work, what might be harmful, and when to escalate. A patient who doesn't respond to albuterol might not have asthma — they might have anaphylaxis."
          }
        ]
      }
    ],
    keyPoints: [
      "Asthma: IgE cascade → localized bronchospasm + inflammation + mucus",
      "Anaphylaxis: systemic mast cell degranulation → capillary leak + vasodilation + airway edema",
      "Treatment targets the specific mechanism in each condition"
    ]
  },
  {
    id: "aemt-asthma-anaph-terminology",
    title: "Advanced Terminology",
    content: `Building on EMT terminology, these AEMT-level terms connect pathophysiology to your clinical tools.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          { front: "Histamine", back: "The primary chemical mediator released by mast cells. Causes vasodilation, increased capillary permeability, bronchospasm, and itching. In anaphylaxis, histamine release is massive and systemic. Epinephrine counteracts histamine's effects on blood vessels and airways." },
          { front: "IgE-Mediated Response", back: "The immune pathway behind allergic asthma and anaphylaxis. IgE antibodies sit on mast cells waiting for their specific allergen. When the allergen arrives, it cross-links two IgE molecules, triggering degranulation. First exposure = sensitization. Second exposure = reaction." },
          { front: "Biphasic Reaction", back: "A second wave of anaphylaxis symptoms occurring 1-72 hours (usually 4-8 hours) after the initial reaction resolves. Occurs in up to 20% of anaphylaxis cases. This is why anaphylaxis patients need extended monitoring — they can crash again even after epinephrine works." },
          { front: "Status Asthmaticus", back: "A severe, prolonged asthma attack that doesn't respond to standard bronchodilator treatment. Life-threatening. The patient is exhausting themselves trying to breathe. May progress to respiratory failure. Requires aggressive intervention and may need intubation." },
          { front: "Capillary Leak Syndrome", back: "In anaphylaxis, histamine makes capillary walls 'leaky,' allowing plasma to shift from blood vessels into surrounding tissues. This causes edema (visible swelling) and hypovolemia (internal volume loss). Up to 35% of circulating volume can be lost this way." },
          { front: "Shark Fin Waveform", back: "A capnography pattern where the expiratory upstroke is sloped instead of square — looks like a shark dorsal fin. Indicates air trapping and bronchospasm (asthma). The more severe the obstruction, the more pronounced the slope. This pattern helps differentiate asthma from anaphylaxis-related shock." }
        ]
      }
    ],
    keyPoints: [
      "Histamine drives the systemic response in anaphylaxis",
      "Biphasic reactions mean anaphylaxis patients need extended monitoring",
      "Shark fin on capnography = bronchospasm = asthma pattern"
    ]
  },
  {
    id: "aemt-asthma-anaph-tools",
    title: "Advanced Differentiation Tools",
    content: `Your AEMT toolkit gives you objective data that transforms clinical decision-making.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Capnography",
            content: "**Asthma:** Shark fin waveform (sloped expiratory upstroke) indicates bronchospasm and air trapping. ETCO₂ may be elevated in severe attacks as CO₂ builds up. Prolonged expiratory phase visible on waveform. As treatment works, the shark fin straightens toward a normal rectangular shape.\n\n**Anaphylaxis:** If primarily in shock (vasodilation), ETCO₂ may be LOW due to poor perfusion (less CO₂ delivered to lungs). If bronchospasm is the dominant feature, you may see a shark fin pattern. If the patient is in severe shock, ETCO₂ drops toward zero — an ominous sign.\n\n**Clinical pearl:** A patient with wheezing and a shark fin waveform = bronchospasm (likely asthma). A patient with wheezing and LOW/falling ETCO₂ = consider anaphylactic shock — the low CO₂ reflects poor perfusion, not good ventilation."
          },
          {
            label: "Auscultation",
            content: "**Asthma:** Wheezing — primarily expiratory, bilateral, often diffuse. In severe attacks, wheezing may disappear ('silent chest') — this is WORSE, not better. It means so little air is moving that you can't hear anything.\n\n**Anaphylaxis:** Stridor (inspiratory, high-pitched) indicates upper airway swelling — the larynx is narrowing. Wheezing may be present too (lower airway bronchospasm). You may hear BOTH stridor AND wheezing — upper and lower airway compromise simultaneously.\n\n**Key:** Stridor = upper airway = anaphylaxis feature. Wheezing alone = lower airway = could be either. Both together = highly suspicious for anaphylaxis."
          },
          {
            label: "Clinical Picture",
            content: "**Integrate everything:** Speed of onset is critical. Asthma typically builds over minutes to hours. Anaphylaxis hits within minutes of exposure.\n\n**Medication history tells the story:** Asthma patients carry inhalers, may be on controller medications (Flovent, Singulair). Anaphylaxis patients may carry an EpiPen and know their allergens.\n\n**Skin assessment is your differentiator:** Normal skin + wheezing = probably asthma. Hives, flushing, or angioedema + any respiratory distress = anaphylaxis until proven otherwise.\n\n**Don't forget:** A patient with asthma CAN have anaphylaxis. If your asthma patient suddenly develops hives and hypotension, switch to the anaphylaxis protocol."
          }
        ]
      }
    ],
    keyPoints: [
      "Shark fin on capnography = bronchospasm = asthma pattern",
      "Low/falling ETCO₂ with wheezing = consider anaphylactic shock",
      "Skin findings are your strongest differentiator between the two"
    ]
  },
  {
    id: "aemt-asthma-anaph-assessment",
    title: "AEMT-Level Assessment Integration",
    content: `Let's put it all together into a systematic assessment approach:

**Step 1: Scene Size-Up and First Impression**
• Environment: inhalers and nebulizers (asthma) vs. food/sting/medication exposure (anaphylaxis)
• Patient appearance: tripod position (asthma) vs. hives/swelling/distress (anaphylaxis)
• Speed of onset: gradual worsening (asthma) vs. sudden crash (anaphylaxis)

**Step 2: Primary Survey**
• Airway: patent? Stridor? (stridor = upper airway swelling = anaphylaxis feature)
• Breathing: wheezing pattern? Silent chest? Accessory muscle use?
• Circulation: tachycardia? HYPOTENSION? (hypotension + respiratory distress = anaphylaxis)
• Skin: hives? Flushing? Angioedema? (systemic skin findings = anaphylaxis)

**Step 3: Objective Monitoring**
• SpO₂: trending down in both conditions as severity increases
• Capnography: waveform shape (shark fin = bronchospasm) and ETCO₂ value (low = poor perfusion)
• Blood pressure: normal or elevated (asthma) vs. hypotension (anaphylaxis)

**Step 4: Focused History**
• When did it start? What were you doing/eating?
• Known allergies? Carry an EpiPen?
• History of asthma? Inhalers at home?
• Any new exposures — food, medication, sting?`,
    keyPoints: [
      "Skin assessment + blood pressure are your best differentiators",
      "Capnography adds objective ventilation data — waveform AND value",
      "Speed of onset and exposure history guide your clinical thinking"
    ],
    rememberThis: "The patient who has had anaphylaxis before KNOWS the feeling. They'll often tell you, 'This feels like my allergic reaction.' Believe them — they know what anaphylaxis feels like better than anyone."
  },
  {
    id: "aemt-asthma-anaph-interventions",
    title: "AEMT Interventions — Your Expanded Toolkit",
    content: `Your AEMT scope dramatically expands what you can do for these patients.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          { front: "IM Epinephrine (Anaphylaxis)", back: "At the AEMT level, you can draw up and administer epinephrine IM — not just assist with an auto-injector. 0.3-0.5 mg of 1:1,000 (1 mg/mL) IM in the lateral thigh. Onset 3-5 minutes. Can repeat every 5-15 minutes. This is your most critical intervention — addresses vasoconstriction, bronchodilation, and reduced capillary permeability simultaneously." },
          { front: "IV Fluid Bolus (Anaphylaxis)", back: "Anaphylaxis causes massive third-spacing — up to 35% of circulating volume leaks out of blood vessels. Normal saline bolus (20 mL/kg, can repeat) replaces lost volume and supports blood pressure. Start a large-bore IV early — these patients may need aggressive fluid resuscitation. Think of it as refilling a leaking bucket." },
          { front: "Albuterol Nebulizer (Asthma)", back: "β₂ agonist bronchodilator via nebulizer — your primary asthma intervention. 2.5 mg in 3 mL NS, nebulized over 5-10 minutes. Relaxes bronchial smooth muscle, opening constricted airways. Can repeat per protocol. More effective than MDI for severe attacks because it delivers medication deeper into constricted airways." },
          { front: "Inline Nebulizer + CPAP", back: "For severe asthma with impending respiratory failure, combining CPAP with inline albuterol delivers bronchodilator AND positive pressure simultaneously. CPAP splints open collapsing airways while albuterol relaxes smooth muscle — attacking the problem from two angles." },
          { front: "Repeat Epinephrine for Biphasic Reactions", back: "Up to 20% of anaphylaxis patients experience a biphasic reaction — symptoms return hours after initial resolution. If symptoms recur during transport or monitoring, repeat epinephrine. This is why anaphylaxis patients need extended monitoring and should always go to the ED." },
          { front: "Treatment Response Monitoring", back: "After every intervention, reassess in 5 minutes: breath sounds (improving wheezing?), SpO₂ (trending up?), capnography (shark fin flattening?), vital signs (BP improving in anaphylaxis?), skin (hives resolving?). Improvement = continue current plan. No improvement = escalate — repeat epi, call for ALS, consider airway intervention." }
        ]
      }
    ],
    keyPoints: [
      "IM epinephrine is the cornerstone of anaphylaxis management",
      "IV fluids address the volume loss from capillary leak in anaphylaxis",
      "Nebulized albuterol is your primary bronchodilator for asthma"
    ]
  },
  {
    id: "aemt-asthma-anaph-quiz",
    title: "Knowledge Check — AEMT Asthma vs Anaphylaxis",
    content: `These scenarios test your ability to integrate pathophysiology with clinical decision-making.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-asthma-anaph-q1",
          question: "Your capnography shows a prominent shark fin waveform with ETCO₂ of 48 mmHg in a wheezing patient. No hives, normal BP, history of asthma. What does this pattern most likely indicate?",
          options: ["Anaphylactic shock", "Bronchospasm with CO₂ retention from asthma", "Cardiac arrest", "Normal ventilation"],
          correctIndex: 1,
          explanation: "The shark fin waveform indicates bronchospasm (air trapping), and the elevated ETCO₂ (>45 mmHg) shows CO₂ is building up — both hallmarks of a significant asthma exacerbation. Normal skin and stable BP argue against anaphylaxis. Treat with nebulized albuterol and monitor the waveform — it should flatten as bronchospasm resolves."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-asthma-anaph-q2",
          question: "A patient stung by a bee 15 minutes ago has diffuse hives, lip swelling, wheezing, and BP 76/40. ETCO₂ is 22 mmHg. What does the low ETCO₂ indicate?",
          options: ["Good ventilation — the patient is breathing well", "Poor perfusion — anaphylactic shock is reducing CO₂ delivery to the lungs", "The capnography is malfunctioning", "Chronic hyperventilation"],
          correctIndex: 1,
          explanation: "In anaphylactic shock, widespread vasodilation and capillary leak reduce cardiac output. Less blood flowing through the lungs means less CO₂ is delivered for exhalation — hence the low ETCO₂. This is a perfusion problem, not a ventilation problem. Give epinephrine IM immediately and start IV fluids."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-asthma-anaph-q3",
          question: "Why do anaphylaxis patients need IV fluid resuscitation?",
          options: ["To dilute the allergen in their bloodstream", "To replace volume lost through histamine-mediated capillary leak (third-spacing)", "To flush epinephrine through the system faster", "To prevent dehydration from vomiting"],
          correctIndex: 1,
          explanation: "Histamine makes capillaries leaky, allowing plasma to shift from blood vessels into tissues (third-spacing). Up to 35% of circulating volume can be lost this way. IV normal saline replaces this lost volume to maintain blood pressure and organ perfusion. Epinephrine alone can't fix hypovolemia."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-asthma-anaph-q4",
          question: "A patient with severe asthma was improving on albuterol nebulizer, but 6 hours later develops worsening wheezing and respiratory distress. What concept explains this?",
          options: ["Medication tolerance", "The late phase asthma response (4-8 hours after initial trigger)", "Biphasic reaction (anaphylaxis concept)", "Status asthmaticus"],
          correctIndex: 1,
          explanation: "The late phase response in asthma occurs 4-8 hours after the initial trigger. While the early phase is driven by mast cell mediators (bronchospasm), the late phase involves inflammatory cell infiltration (eosinophils, neutrophils) causing renewed airway edema and mucus production. This is why asthma patients need close monitoring even after improvement."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-asthma-anaph-q5",
          question: "What is the single most important differentiating feature between an asthma attack and anaphylaxis on initial assessment?",
          options: ["Presence of wheezing", "SpO₂ level", "Systemic signs — hives, angioedema, and/or hypotension", "Respiratory rate"],
          correctIndex: 2,
          explanation: "Systemic signs are the key differentiator. Wheezing, SpO₂ changes, and tachypnea can occur in both conditions. But hives (skin), angioedema (soft tissue), and hypotension (cardiovascular) indicate a systemic process — anaphylaxis. Asthma stays in the lungs; anaphylaxis involves multiple organ systems."
        }
      }
    ],
    keyPoints: [
      "Capnography pattern + ETCO₂ value help differentiate the two conditions",
      "Low ETCO₂ in a wheezing patient suggests shock, not good ventilation",
      "Systemic signs (skin + hemodynamic) are the strongest differentiators"
    ]
  },
  {
    id: "aemt-asthma-anaph-wrapup",
    title: "AEMT Level Complete — Pathophysiology Meets Practice",
    content: `You've built significantly on your EMT foundation:

**What you've added:**
• Pathophysiology: IgE cascades, mast cell degranulation, histamine pathways, early/late phase responses
• Assessment tools: Capnography waveform interpretation (shark fin vs. low ETCO₂), advanced auscultation
• Interventions: IM epinephrine, IV fluid resuscitation, nebulized albuterol, CPAP with inline nebulizer

**Your clinical thinking has evolved:**
You're no longer just recognizing patterns — you understand the mechanisms. When you hear wheezing, you know bronchospasm is narrowing the airways. When you see hives and hypotension, you know histamine is driving systemic vasodilation and capillary leak. This understanding makes you adaptable.

**What's next?**
At the Paramedic level, you'll add advanced pharmacology (IV epinephrine, diphenhydramine, methylprednisolone, magnesium, ketamine), BiPAP for status asthmaticus, RSI considerations for the swelling airway, and complex scenarios where asthma and anaphylaxis overlap.

**Important:** Verify all information with official NREMT guidelines and your local protocols. This content is educational supplementation only.`,
    keyPoints: [
      "You can now differentiate asthma and anaphylaxis using objective tools",
      "Capnography adds a critical dimension to your assessment",
      "Understanding pathophysiology makes you adaptable in the field"
    ],
    rememberThis: "You've gone from recognizing patterns to understanding mechanisms. That's the leap from good provider to great provider. The tools you've mastered at the AEMT level — capnography, IM epinephrine, IV fluids, nebulizers — save lives every day."
  }
];

// =====================================================
// Paramedic Asthma vs Anaphylaxis Content
// =====================================================
export const paramedicAsthmaAnaphylaxisContent: TopicSection[] = [
  {
    id: "para-asthma-anaph-intro",
    title: "Paramedic-Level Mastery — Where Pathophysiology Meets Pharmacology",
    content: `You've built a solid foundation at EMT and AEMT levels. Now it's time for paramedic-level clinical reasoning — where you integrate advanced pathophysiology, pharmacology, ventilation strategies, and complex differential diagnosis.

**What changes at the Paramedic level:**
• **Pharmacology:** IV/IO epinephrine for refractory anaphylaxis, diphenhydramine, methylprednisolone, magnesium sulfate for refractory bronchospasm, ketamine for status asthmaticus, glucagon for beta-blocker-refractory anaphylaxis
• **Ventilation:** BiPAP for status asthmaticus, RSI considerations with airway edema, post-intubation ventilator strategies
• **Clinical reasoning:** Asthma-anaphylaxis overlap, exercise-induced anaphylaxis, medication interactions, and treatment prioritization

**The paramedic difference:**
You're not just treating symptoms — you're targeting specific receptors, managing competing pathologies, and making treatment decisions that require understanding the second and third-order effects of your interventions.

**Important:** Verify all information with official NREMT guidelines and your local protocols. This content is educational supplementation only.`,
    keyPoints: [
      "Paramedic adds advanced pharmacology, BiPAP, and complex clinical reasoning",
      "Treatment targets specific receptors and mechanisms",
      "Managing overlap and refractory cases is the ultimate clinical challenge"
    ],
    proTip: "The best paramedics think in mechanisms, not protocols. Protocols tell you what to do; understanding mechanisms tells you why — and what to do when the patient doesn't fit the protocol."
  },
  {
    id: "para-asthma-anaph-advanced-pathophys",
    title: "Advanced Pathophysiology — Molecular and Hemodynamic",
    content: `Let's go deeper into the mechanisms that drive treatment decisions.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Asthma: Cellular Level",
            content: "**Eosinophilic Inflammation:** Eosinophils are the signature inflammatory cell in asthma. They release major basic protein (MBP) and eosinophil peroxidase, which damage airway epithelium and perpetuate inflammation.\n\n**Leukotrienes:** These inflammatory mediators (LTC4, LTD4, LTE4) are 1000x more potent than histamine at causing bronchospasm. They also increase mucus production and vascular permeability. Leukotriene receptor antagonists (montelukast/Singulair) block this pathway.\n\n**Airway Remodeling:** Chronic inflammation causes structural changes — smooth muscle hypertrophy, subepithelial fibrosis, goblet cell hyperplasia. Over time, the airways become permanently narrowed. This is why chronic severe asthma becomes increasingly difficult to manage."
          },
          {
            label: "Anaphylaxis: Hemodynamic",
            content: "**Distributive Shock:** Anaphylaxis is a form of distributive shock. Massive vasodilation increases the capacity of the vascular 'container' while capillary leak reduces the volume inside it. The result: relative AND absolute hypovolemia simultaneously.\n\n**Third-Spacing:** Plasma proteins leak through permeable capillaries, dragging water with them (oncotic pull). This concentrates the remaining blood (hemoconcentration) and depletes intravascular volume. The edema you see (hives, angioedema) represents fluid that USED to be in blood vessels.\n\n**Cardiovascular Collapse:** In severe cases, myocardial depression occurs — histamine and other mediators directly suppress cardiac contractility. Combined with hypovolemia and vasodilation, this creates a perfect storm of cardiovascular collapse. Epinephrine addresses all three mechanisms."
          },
          {
            label: "Overlap Pathology",
            content: "**Exercise-Induced Anaphylaxis:** A rare but dangerous overlap — exercise triggers anaphylaxis, sometimes only after eating specific foods. The patient appears to have exercise-induced asthma but develops systemic signs (hives, hypotension). Treatment is epinephrine, not just bronchodilators.\n\n**Asthma + Anaphylaxis Coexistence:** Patients with asthma are at HIGHER risk of fatal anaphylaxis. Their already-reactive airways amplify the bronchospasm component. The anaphylaxis triggers both upper (laryngeal) and lower (bronchial) airway compromise on top of chronic inflammation.\n\n**Competing Priorities:** High-dose albuterol increases heart rate (dangerous if the patient is already tachycardic from anaphylaxis). IV fluids help anaphylactic shock but don't treat bronchospasm. Every treatment has trade-offs in overlap patients."
          }
        ]
      }
    ],
    keyPoints: [
      "Leukotrienes are 1000x more potent than histamine at causing bronchospasm",
      "Anaphylaxis creates both relative AND absolute hypovolemia",
      "Asthma patients are at higher risk of fatal anaphylaxis"
    ]
  },
  {
    id: "para-asthma-anaph-pharm-terms",
    title: "Pharmacology Terminology",
    content: `These medications and their mechanisms are essential paramedic-level knowledge.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          { front: "Epinephrine IV/IO", back: "For refractory anaphylaxis when IM epinephrine isn't enough. Use 1:10,000 (0.1 mg/mL) concentration — NOT 1:1,000. Typical dose: 0.1-0.5 mg IV slow push, titrated to effect. Can also run as a drip (1-10 mcg/min). IV epi acts faster but carries higher risk of tachyarrhythmias. Requires cardiac monitoring." },
          { front: "Diphenhydramine (Benadryl)", back: "H1 antihistamine. Blocks histamine at H1 receptors, reducing hives, itching, and some vasodilation. NOT a replacement for epinephrine — it's a secondary adjunct. 25-50 mg IV/IM. Takes 15-30 minutes to work. Think of it as closing the barn door after the horses are out — it stops new histamine effects but can't reverse existing damage." },
          { front: "Methylprednisolone (Solu-Medrol)", back: "Corticosteroid. Reduces inflammation in both asthma and anaphylaxis. Takes 4-6 HOURS to work — not an acute rescue medication. Given to prevent the late phase response in asthma and biphasic reactions in anaphylaxis. 125 mg IV. Think of it as long-term insurance, not immediate rescue." },
          { front: "Magnesium Sulfate", back: "Smooth muscle relaxant for refractory bronchospasm in severe asthma. Inhibits calcium-mediated contraction of bronchial smooth muscle. 1-2 g IV over 15-20 minutes. Used when albuterol isn't enough. Also prevents hypokalemia during aggressive β₂ agonist therapy. Watch for hypotension and flushing." },
          { front: "Glucagon", back: "For beta-blocker-refractory anaphylaxis. Patients on beta-blockers may not respond to epinephrine because β receptors are blocked. Glucagon bypasses the β receptor entirely, increasing heart rate and contractility through a different pathway. 1-2 mg IV/IM. Critical rescue drug for this specific situation." },
          { front: "Ketamine", back: "Dissociative anesthetic with powerful bronchodilator properties. Used for refractory bronchospasm in status asthmaticus when albuterol, ipratropium, and magnesium have all failed. 1-2 mg/kg IV for bronchodilation (sub-dissociative doses may also work). Also useful as an RSI induction agent because it maintains respiratory drive and has bronchodilator effects." }
        ]
      }
    ],
    keyPoints: [
      "IV epinephrine uses 1:10,000 concentration — different from IM 1:1,000",
      "Glucagon is the rescue drug for beta-blocker patients in anaphylaxis",
      "Ketamine serves double duty: bronchodilator AND RSI induction agent"
    ]
  },
  {
    id: "para-asthma-anaph-bipap",
    title: "Ventilation Strategies and Airway Management",
    content: `Advanced ventilation strategies differ significantly between these two conditions.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "BiPAP for Status Asthmaticus",
            content: "**Strategy:** Higher IPAP to overcome severe bronchospasm and augment ventilation. Moderate EPAP to counteract air trapping without worsening hyperinflation.\n\n**Typical Settings:** IPAP 12-18, EPAP 5-8. Goal: improve CO₂ clearance (watch ETCO₂ trend downward) while reducing work of breathing.\n\n**Inline Nebulizer:** Combine BiPAP with continuous albuterol nebulization for maximum effect — positive pressure opens airways while the bronchodilator relaxes smooth muscle.\n\n**Clinical Pearl:** BiPAP buys you time. The exhausted asthma patient who's heading toward respiratory failure can often be rescued with aggressive BiPAP + bronchodilators, avoiding intubation entirely."
          },
          {
            label: "Airway in Anaphylaxis",
            content: "**The Swelling Problem:** Anaphylaxis can cause rapid laryngeal edema — the upper airway swells shut. If you need to intubate, do it EARLY before swelling makes it impossible.\n\n**RSI Considerations:** Paralytics eliminate the patient's ability to breathe. If the airway is swollen and you can't pass a tube, you've created a can't-intubate-can't-oxygenate crisis. Consider awake intubation or surgical airway readiness.\n\n**Ketamine Advantage:** If RSI is needed, ketamine is the preferred induction agent — it maintains respiratory drive (briefly), has bronchodilator properties, and supports blood pressure (unlike etomidate or propofol in a shocked patient).\n\n**Surgical Airway:** Have cricothyrotomy equipment ready. If laryngeal edema prevents intubation, surgical airway may be the only option. A cric goes BELOW the swollen larynx."
          },
          {
            label: "Ventilator Strategies",
            content: "**Asthma Post-Intubation:** The biggest risk is breath stacking and air trapping. Use low respiratory rate (8-10/min), long expiratory time (I:E ratio 1:4 or 1:5), lower tidal volumes (6-8 mL/kg). Allow permissive hypercapnia — it's better to have a high CO₂ than to cause pneumothorax from air trapping.\n\n**Anaphylaxis Post-Intubation:** Positive pressure ventilation usually HELPS by supporting the failing cardiovascular system (similar to CHF). Standard ventilator settings unless concurrent bronchospasm, then adjust for air trapping.\n\n**Auto-PEEP Watch:** In asthma, monitor for auto-PEEP — stacked breaths create dangerous pressure. Disconnect the circuit momentarily to release trapped air if pressures spike."
          },
          {
            label: "Acid-Base Integration",
            content: "**Severe Asthma:** Progresses through three phases: (1) early respiratory alkalosis (hyperventilation), (2) normal pH (exhaustion, CO₂ rising), (3) respiratory acidosis (failure, CO₂ dangerously high). A 'normal' CO₂ in a tachypneic asthma patient is a RED FLAG — they should be blowing off CO₂ but aren't.\n\n**Anaphylaxis:** Metabolic acidosis from poor perfusion (lactic acidosis). Respiratory compensation (tachypnea) may mask the severity. Treating the shock (epi + fluids) is the primary treatment for the acidosis.\n\n**Mixed:** In overlap patients, both respiratory (air trapping) and metabolic (poor perfusion) acidosis can coexist. Fixing both requires addressing both airways AND circulation simultaneously."
          }
        ]
      }
    ],
    keyPoints: [
      "BiPAP can rescue the failing asthma patient and prevent intubation",
      "Intubate anaphylaxis early if needed — swelling only gets worse",
      "A 'normal' CO₂ in a tachypneic asthma patient = impending failure"
    ],
    proTip: "Here's the most important clinical pearl for asthma intubation: permissive hypercapnia saves lives. It's tempting to ventilate aggressively to 'fix' the high CO₂ — but aggressive ventilation in air-trapping causes breath stacking, barotrauma, and pneumothorax. Accept a CO₂ of 60-70 if the pH is above 7.2."
  },
  {
    id: "para-asthma-anaph-clinical-assess",
    title: "Advanced Clinical Assessment",
    content: `Paramedic-level assessment integrates all available data into a clinical picture:

**12-Lead ECG Integration:**
• Epinephrine causes tachycardia and can mimic ischemic changes on ECG — know the difference
• Prolonged anaphylaxis with severe hypotension can cause demand ischemia
• β₂ agonist therapy (high-dose albuterol) can cause tachycardia and ST changes

**Acid-Base Assessment:**
• Asthma progression: alkalosis → normal → acidosis (the 'normal' phase is the warning)
• Anaphylaxis: metabolic acidosis from poor perfusion + possible respiratory acidosis from airway compromise
• Mixed: overlap patients may have both respiratory and metabolic acidosis simultaneously

**Serial Assessment:**
• Reassess after EVERY intervention — especially after epinephrine
• Trending ETCO₂ tells you if ventilation is improving (asthma) or if perfusion is improving (anaphylaxis)
• Trending BP and HR after epinephrine tells you about vascular tone and volume status
• Watch for biphasic reactions — improvement followed by sudden worsening (anaphylaxis)`,
    keyPoints: [
      "Epi and albuterol can cause ECG changes — don't mistake treatment effects for ischemia",
      "A 'normal' CO₂ in a tachypneic asthma patient is a danger sign",
      "Monitor for biphasic reactions for hours after initial anaphylaxis treatment"
    ],
    rememberThis: "Serial assessment is your superpower. A single snapshot tells you where the patient IS. Trending data tells you where the patient is GOING. That's the difference between reactive and proactive care."
  },
  {
    id: "para-asthma-anaph-interventions",
    title: "Paramedic Pharmacology Integration",
    content: `Your medication toolkit now targets specific mechanisms:`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          { front: "Asthma Treatment Algorithm", back: "1. O₂ + positioning\n2. Albuterol 2.5 mg nebulizer (repeat or continuous)\n3. Ipratropium 0.5 mg nebulizer (anticholinergic bronchodilator)\n4. CPAP/BiPAP with inline nebulizer\n5. Methylprednisolone 125 mg IV (long-term prevention)\n6. Magnesium 1-2 g IV for refractory bronchospasm\n7. Ketamine 1-2 mg/kg IV for status asthmaticus\n8. RSI and intubation if respiratory failure (use ketamine for induction)" },
          { front: "Anaphylaxis Treatment Algorithm", back: "1. Epinephrine 0.3-0.5 mg IM (1:1,000) immediately\n2. High-flow O₂ via NRB\n3. IV access × 2, NS bolus 20 mL/kg (repeat PRN)\n4. Repeat epi IM every 5-15 minutes if needed\n5. Diphenhydramine 25-50 mg IV\n6. Methylprednisolone 125 mg IV (biphasic prevention)\n7. If refractory: epinephrine drip 1-10 mcg/min IV\n8. Glucagon 1-2 mg IV if on beta-blockers\n9. Prepare for surgical airway if laryngeal edema progresses" },
          { front: "Overlap Strategy", back: "When asthma AND anaphylaxis are present simultaneously:\n1. Epinephrine first — it treats BOTH (bronchodilation + vasoconstriction)\n2. IV fluids for volume support\n3. Nebulized albuterol for additional bronchodilation\n4. BiPAP if needed for ventilatory support\n5. Steroids for both late-phase response and biphasic prevention\n6. Monitor closely — competing pathologies require frequent reassessment" },
          { front: "Epi Dosing Strategy (IM vs IV)", back: "**IM (1:1,000):** First-line for all anaphylaxis. 0.3-0.5 mg in lateral thigh. Safe, effective, predictable absorption. Repeat every 5-15 minutes.\n\n**IV (1:10,000):** Reserved for refractory anaphylaxis or peri-arrest. 0.1-0.5 mg slow push or 1-10 mcg/min drip. Higher risk of tachyarrhythmias. Requires cardiac monitoring.\n\n**Rule:** Always start IM. Escalate to IV only if IM is failing. Never give 1:1,000 concentration IV — it will cause dangerous cardiac effects." },
          { front: "When Treatments Compete", back: "High-dose albuterol → tachycardia (worsens demand ischemia in anaphylaxis)\nIV fluids → help shock but don't treat bronchospasm\nEpinephrine → ideal because it treats both, but repeated doses increase cardiac workload\nMagnesium → can cause hypotension (dangerous in anaphylaxis)\n\nPrioritize: Epi addresses both conditions. Add targeted therapies based on the dominant presentation." },
          { front: "Intubation Considerations", back: "**Asthma:** Risk of breath stacking and barotrauma. Use low rate, long expiratory time, permissive hypercapnia. Ketamine is preferred induction agent (bronchodilator effect).\n\n**Anaphylaxis:** Risk of can't-intubate scenario from laryngeal edema. Intubate EARLY before swelling progresses. Have surgical airway ready. Ketamine preferred (supports BP, bronchodilates).\n\n**Key difference:** Asthma intubation is about MANAGING ventilation. Anaphylaxis intubation is about SECURING the airway before you lose it." }
        ]
      }
    ],
    keyPoints: [
      "Epinephrine treats both conditions — it's the ideal overlap medication",
      "Never give 1:1,000 epinephrine IV — always use 1:10,000 for IV/IO",
      "Ketamine is the preferred induction agent for both conditions"
    ]
  },
  {
    id: "para-asthma-anaph-quiz",
    title: "Knowledge Check — Paramedic Asthma vs Anaphylaxis",
    content: `These questions test paramedic-level clinical reasoning. Think through the pathophysiology behind each answer.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "para-asthma-anaph-q1",
          question: "A patient with severe asthma has received three albuterol nebulizers and is on BiPAP. ETCO₂ is rising from 55 to 68 mmHg. SpO₂ is 88%. What is the best next pharmacological intervention?",
          options: ["Another albuterol nebulizer", "Magnesium sulfate 2 g IV over 15 minutes", "Furosemide 40 mg IV", "Nitroglycerin 0.4 mg SL"],
          correctIndex: 1,
          explanation: "This is refractory bronchospasm — albuterol alone isn't enough. Magnesium sulfate relaxes bronchial smooth muscle through calcium channel inhibition, providing a different mechanism of bronchodilation. If magnesium also fails, ketamine is the next escalation. Furosemide and NTG are CHF medications — not indicated here."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-asthma-anaph-q2",
          question: "A patient in anaphylaxis has received two doses of IM epinephrine and 2L of NS. BP remains 68/40, HR 140. The patient is on metoprolol (a beta-blocker). What medication should you consider next?",
          options: ["Diphenhydramine 50 mg IV", "Glucagon 1-2 mg IV", "Albuterol nebulizer", "Magnesium sulfate"],
          correctIndex: 1,
          explanation: "This patient is on a beta-blocker, which blocks the β receptors that epinephrine needs to work. Glucagon bypasses β receptors entirely, increasing heart rate and contractility through a different intracellular pathway. This is the specific rescue drug for beta-blocker-refractory anaphylaxis. Diphenhydramine is secondary; albuterol and magnesium won't fix the hemodynamic crisis."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-asthma-anaph-q3",
          question: "You need to intubate a patient with severe anaphylaxis and progressive laryngeal edema. Which induction agent is preferred and why?",
          options: ["Etomidate — hemodynamically neutral", "Propofol — fast onset", "Ketamine — maintains BP, has bronchodilator properties", "Midazolam — reduces anxiety"],
          correctIndex: 2,
          explanation: "Ketamine is preferred because it supports blood pressure through sympathomimetic effects (critical in shock), has bronchodilator properties (helps with the bronchospasm component), and partially maintains respiratory drive. Etomidate is hemodynamically neutral but has no bronchodilator effect. Propofol drops blood pressure. Midazolam is too slow and unpredictable."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-asthma-anaph-q4",
          question: "After intubating a patient in status asthmaticus, peak inspiratory pressures are rising rapidly and the patient is becoming harder to ventilate. What is the most likely cause?",
          options: ["Tube displacement", "Breath stacking from air trapping (auto-PEEP)", "Equipment failure", "Mucus plug in the ET tube"],
          correctIndex: 1,
          explanation: "In severe asthma, air trapping causes auto-PEEP — each breath stacks on top of the previous one because air can't escape through the obstructed airways. Pressures build dangerously, risking pneumothorax. Management: disconnect the circuit briefly to release trapped air, reduce respiratory rate (8-10/min), extend expiratory time (I:E 1:4 or 1:5), accept permissive hypercapnia."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-asthma-anaph-q5",
          question: "A known asthmatic patient is exercising when she suddenly develops diffuse hives, throat tightness, wheezing, and near-syncope. What is the most likely diagnosis?",
          options: ["Severe exercise-induced asthma", "Exercise-induced anaphylaxis", "Vasovagal syncope", "Panic attack"],
          correctIndex: 1,
          explanation: "Exercise-induced anaphylaxis is the overlap condition — it's triggered by exercise (sometimes only after eating specific foods). The systemic signs (hives, throat tightness, near-syncope) distinguish it from exercise-induced asthma (which only causes bronchospasm). Treatment is epinephrine, not just bronchodilators. Having pre-existing asthma increases the severity."
        }
      }
    ],
    keyPoints: [
      "Magnesium and ketamine are escalation drugs for refractory asthma",
      "Glucagon bypasses blocked β receptors in beta-blocker patients",
      "Exercise-induced anaphylaxis requires epinephrine, not just bronchodilators"
    ]
  },
  {
    id: "para-asthma-anaph-wrapup",
    title: "Complete Mastery — Asthma vs Anaphylaxis Across All Levels",
    content: `You've completed the full Asthma vs Anaphylaxis progression. Let's review your journey:

**EMT Level:** Pattern recognition — asthma = wheezing + inhaler history, anaphylaxis = hives + swelling + hypotension. BLS oxygen strategies, inhaler assist, and epinephrine auto-injector.

**AEMT Level:** Pathophysiology understanding — IgE cascades, mast cell degranulation, capillary leak, bronchospasm mechanisms. Capnography interpretation (shark fin vs. low ETCO₂). IM epinephrine, IV fluid resuscitation, nebulized albuterol.

**Paramedic Level:** Advanced pharmacology — IV epinephrine drips, glucagon for beta-blocker patients, magnesium and ketamine for refractory bronchospasm. BiPAP for status asthmaticus. RSI considerations with swelling airways. Acid-base integration. Complex overlap management.

**You can now:**
• Differentiate asthma from anaphylaxis using history, physical exam, capnography, and vital signs
• Apply condition-specific interventions targeting the underlying mechanism
• Manage overlap presentations using combination therapy
• Rescue beta-blocker patients with glucagon
• Manage refractory bronchospasm with magnesium and ketamine
• Make critical airway decisions in anaphylaxis before losing the window

**The clinical impact:**
Asthma and anaphylaxis are among the most time-critical emergencies you'll face. Your ability to rapidly differentiate, treat appropriately, and manage complications directly impacts whether your patient lives or dies. The difference between a good provider and a great one is understanding the WHY behind every intervention.

**Important:** Verify all information with official NREMT guidelines and your local protocols. This content is educational supplementation only.`,
    keyPoints: [
      "EMT: pattern recognition → AEMT: mechanism understanding → Paramedic: pharmacology integration",
      "Epinephrine is the cornerstone medication for anaphylaxis at every level",
      "Understanding mechanisms makes you adaptable when patients don't fit the textbook"
    ],
    rememberThis: "From recognizing hives and wheezing as an EMT, to understanding IgE cascades and capillary leak as an AEMT, to targeting specific receptors with IV epi, glucagon, and ketamine as a Paramedic — you've built a complete clinical reasoning framework. Every level built on the last. That's mastery."
  }
];

// =====================================================
// Pulmonary Edema vs Pneumonia vs Pleural Effusion — EMT
// =====================================================

export const emtPulmonaryEdemaPneumoniaEffusionContent: TopicSection[] = [
  {
    id: "pe-pn-ef-intro",
    title: "Three Conditions, One Chief Complaint — Why This Matters",
    content: `Your patient says "I can't breathe." That complaint could come from pulmonary edema, pneumonia, or pleural effusion — three very different problems that all steal oxygen. Getting the right answer changes everything about your care.

**Think of it this way:**

• **Pulmonary Edema** is like a flooded basement — fluid is leaking INTO the air sacs from the blood vessels, drowning the lungs from the inside. Usually caused by heart failure.

• **Pneumonia** is like rooms filling with smoke — infection fills the air sacs with pus and debris, blocking gas exchange. The lung tissue itself is under attack.

• **Pleural Effusion** is like a water balloon squeezed around the lung — fluid collects AROUND the lung in the pleural space, compressing it from the outside so it can't fully expand.

**Why can't you just treat them all the same?** Because the fluid is in different places and got there for different reasons. CPAP helps push fluid out of flooded alveoli (edema) but won't drain fluid from around the lung (effusion). Sitting upright helps edema but may not help pneumonia with sepsis that needs fluids.`,
    keyPoints: [
      "Pulmonary edema: fluid IN the alveoli (from heart failure)",
      "Pneumonia: infection filling alveoli with pus and debris",
      "Pleural effusion: fluid AROUND the lung in the pleural space",
      "Different locations of fluid require different interventions"
    ],
    proTip: "When you hear 'dyspnea,' start thinking: Is the problem INSIDE the air sacs, IN the lung tissue, or AROUND the lung? That question guides everything."
  },
  {
    id: "pe-pn-ef-core-concepts",
    title: "Core Concepts — What's Happening Inside the Chest",
    content: `Let's look at each condition more closely. Understanding the basic mechanism helps you connect the dots between what's happening inside and what you see on the outside.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Pulmonary Edema",
            content: "The heart isn't pumping efficiently, so blood backs up into the pulmonary vessels. Pressure builds until fluid leaks across the capillary walls INTO the alveoli. Think of a sponge soaking up water from below — the air sacs fill with fluid instead of air.",
            bullets: [
              "Usually caused by left-sided heart failure (CHF)",
              "Can also result from fluid overload or hypertensive crisis",
              "Produces bilateral crackles (rales) — fluid bubbling in air sacs",
              "Patient often has history of heart disease, hypertension",
              "Worsens when lying flat (orthopnea) — gravity pulls more fluid into lungs"
            ]
          },
          {
            label: "Pneumonia",
            content: "Bacteria, viruses, or aspirated material invade the lung tissue, triggering an inflammatory response. White blood cells flood the area, and the alveoli fill with pus, fluid, and cellular debris. Think of rooms filling with smoke from a fire — the structure is intact but function is impaired.",
            bullets: [
              "Usually starts with fever, productive cough, and gradual onset",
              "Infection may be bacterial (most dangerous), viral, or aspiration",
              "Produces focal crackles — usually in one area, not both lungs equally",
              "Patient may have been sick for days before calling EMS",
              "Can progress to sepsis if infection spreads systemically"
            ]
          },
          {
            label: "Pleural Effusion",
            content: "Fluid accumulates in the pleural space — the thin gap between the lung and chest wall. As fluid builds, it compresses the lung from the outside like a water balloon. The lung can't fully expand, reducing the space available for air.",
            bullets: [
              "Can be caused by heart failure, infection, cancer, or liver disease",
              "Produces diminished or ABSENT breath sounds on the affected side",
              "Unlike edema crackles, you hear LESS sound, not more",
              "Patient may have gradual onset of worsening dyspnea",
              "Large effusions can shift structures in the chest (tracheal deviation)"
            ]
          }
        ]
      }
    ],
    keyPoints: [
      "Edema = fluid IN alveoli → crackles (bilateral)",
      "Pneumonia = infection IN lung tissue → focal crackles + fever",
      "Effusion = fluid AROUND lung → diminished/absent sounds"
    ]
  },
  {
    id: "pe-pn-ef-terminology",
    title: "Key Terms You Need to Know",
    content: `These terms will come up repeatedly in your assessment and communication with the hospital. Flip each card to lock in the definitions.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "emt-pe-term-1",
            front: "Crackles (Rales)",
            back: "Wet, bubbling sounds heard with a stethoscope, caused by air moving through fluid in the alveoli. Bilateral crackles suggest pulmonary edema; focal crackles suggest pneumonia or localized fluid."
          },
          {
            id: "emt-pe-term-2",
            front: "Consolidation",
            back: "An area of lung tissue that has become solid or filled with fluid/pus instead of air. Seen in pneumonia. Sounds dull when you percuss (tap) the chest."
          },
          {
            id: "emt-pe-term-3",
            front: "Pleural Space",
            back: "The thin, fluid-lined gap between the lung surface (visceral pleura) and the chest wall (parietal pleura). Normally contains just a small amount of lubricating fluid. Effusion = abnormal fluid buildup here."
          },
          {
            id: "emt-pe-term-4",
            front: "Orthopnea",
            back: "Difficulty breathing when lying flat. Classic sign of pulmonary edema/CHF — gravity pulls more fluid into the lungs when supine. Patients often sleep propped up on pillows."
          },
          {
            id: "emt-pe-term-5",
            front: "Productive Cough",
            back: "A cough that produces sputum (phlegm). In pneumonia, sputum may be yellow, green, or rust-colored. In pulmonary edema, it may be pink and frothy (fluid from alveoli)."
          },
          {
            id: "emt-pe-term-6",
            front: "Diminished Breath Sounds",
            back: "Quieter-than-normal breathing sounds on auscultation. In pleural effusion, fluid around the lung blocks sound transmission. Different from crackles — you hear LESS, not extra sounds."
          }
        ]
      }
    ]
  },
  {
    id: "pe-pn-ef-classification",
    title: "Causes and Patterns",
    content: `Each condition has distinct causes and onset patterns. Recognizing these helps you narrow your differential even before you put a stethoscope on the patient.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Pulmonary Edema Causes",
            content: "Pulmonary edema is most often caused by heart failure, but other conditions can produce it too.",
            bullets: [
              "Congestive heart failure (CHF) — most common cause",
              "Hypertensive emergency — sudden pressure spike overwhelms the heart",
              "Acute MI — damaged heart muscle can't pump effectively",
              "Fluid overload — too much IV fluid or kidney failure",
              "Onset: Can be acute (flash pulmonary edema) or gradual worsening"
            ]
          },
          {
            label: "Pneumonia Types",
            content: "Pneumonia has different causes, each with slightly different presentations.",
            bullets: [
              "Bacterial — most dangerous; high fever, productive cough, rapid deterioration",
              "Viral — often follows a cold/flu; usually less severe initially",
              "Aspiration — stomach contents inhaled into lungs; common in altered patients",
              "Onset: Usually days of worsening symptoms (fever, cough, fatigue)",
              "Risk factors: elderly, immunocompromised, recent hospitalization"
            ]
          },
          {
            label: "Pleural Effusion Causes",
            content: "Pleural effusions develop from two main mechanisms — increased pressure or inflammation.",
            bullets: [
              "Transudative: caused by pressure imbalances (CHF, liver failure, kidney disease)",
              "Exudative: caused by inflammation or infection (pneumonia complication, cancer, TB)",
              "Onset: Usually gradual — progressive dyspnea over days to weeks",
              "Can be unilateral (one side) or bilateral",
              "May coexist with pulmonary edema in CHF patients"
            ]
          }
        ]
      }
    ],
    keyPoints: [
      "Pulmonary edema: usually heart-related, can be acute or gradual",
      "Pneumonia: infection-related, usually days of worsening symptoms",
      "Pleural effusion: pressure or inflammation, usually gradual onset"
    ]
  },
  {
    id: "pe-pn-ef-assessment",
    title: "Assessment — Reading the Clues",
    content: `Your assessment tools at the EMT level are powerful enough to differentiate these conditions most of the time. Here's what to focus on:

**History Clues:**
• **Pulmonary Edema**: Ask about heart failure history, medications (diuretics, ACE inhibitors), orthopnea ("How many pillows do you sleep on?"), weight gain, ankle swelling
• **Pneumonia**: Ask about fever, cough duration, sputum color, recent illness, immunocompromised status
• **Pleural Effusion**: Ask about gradual worsening, cancer history, recent pneumonia, liver/kidney disease

**Lung Sounds — Your Best Tool:**
• **Pulmonary Edema**: Bilateral crackles, often starting at the bases and working up. "Wet" sounds in both lungs equally
• **Pneumonia**: Focal crackles — usually louder on ONE side or in ONE area. May hear bronchial sounds over consolidation
• **Pleural Effusion**: Diminished or ABSENT breath sounds on the affected side. The fluid blocks sound transmission

**Vital Signs Patterns:**
• **Pulmonary Edema**: Often hypertensive (high BP drove the edema), tachycardic, tachypneic
• **Pneumonia**: Often febrile (fever), tachycardic, may be hypotensive if septic
• **Pleural Effusion**: May have normal vitals early, tachypneic with large effusions`,
    keyPoints: [
      "History is your first differentiating tool — heart history vs. infection vs. gradual compression",
      "Bilateral crackles = think edema; focal crackles = think pneumonia; absent sounds = think effusion",
      "Vital signs add confirmation: hypertensive (edema), febrile (pneumonia), variable (effusion)"
    ],
    rememberThis: "The stethoscope tells you WHERE the problem is: bilateral wet sounds (edema), one-sided wet sounds (pneumonia), one-sided silence (effusion). Listen to BOTH sides and COMPARE."
  },
  {
    id: "pe-pn-ef-interventions",
    title: "EMT Interventions",
    content: `Your interventions differ based on what you're treating. Here are the key approaches for each condition.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "emt-pe-int-1",
            front: "Positioning Strategy",
            back: "Pulmonary Edema: Sit upright (high Fowler's) — gravity keeps fluid in the bases. Pneumonia: Position of comfort, usually upright. Pleural Effusion: Affected side DOWN can improve V/Q matching in some cases, but generally position of comfort."
          },
          {
            id: "emt-pe-int-2",
            front: "Oxygen Strategy",
            back: "All three conditions may need supplemental O₂. Start with nasal cannula for mild distress, escalate to non-rebreather for SpO₂ < 94%. Pulmonary edema patients often need high-flow oxygen early."
          },
          {
            id: "emt-pe-int-3",
            front: "CPAP Application (Pulmonary Edema)",
            back: "CPAP is your most powerful tool for pulmonary edema — positive pressure pushes fluid out of alveoli back into capillaries. Start at 5-10 cmH₂O. Monitor closely. NOT typically helpful for pleural effusion (fluid is outside the lung)."
          },
          {
            id: "emt-pe-int-4",
            front: "Temperature Management (Pneumonia)",
            back: "Pneumonia patients with fever: keep comfortable, avoid excessive cooling. Monitor for signs of sepsis (altered mental status, tachycardia, hypotension). Fever is actually helping the body fight infection."
          },
          {
            id: "emt-pe-int-5",
            front: "Transport Priority",
            back: "All three are Priority 1 if showing respiratory failure. Pulmonary edema with pink frothy sputum = critical. Pneumonia with sepsis signs = critical. Large pleural effusion with severe dyspnea = urgent transport."
          },
          {
            id: "emt-pe-int-6",
            front: "Hospital Communication",
            back: "Tell the hospital: 'Dyspnea patient with [bilateral crackles / focal crackles + fever / absent breath sounds on R/L side].' This tells them exactly what to prepare — diuretics, antibiotics, or thoracentesis."
          }
        ]
      }
    ]
  },
  {
    id: "pe-pn-ef-quiz",
    title: "Knowledge Check",
    content: `Let's test your ability to differentiate these three conditions with scenario-based questions.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "emt-pe-q1",
          question: "A 72-year-old with a history of CHF woke up gasping for air. He sleeps on 3 pillows. You hear bilateral crackles in both lung bases. BP is 188/102. What is the most likely cause?",
          options: ["Pneumonia", "Pulmonary edema", "Pleural effusion", "Asthma"],
          correctIndex: 1,
          explanation: "CHF history + orthopnea (3 pillows) + bilateral crackles + hypertension = classic pulmonary edema presentation. The high BP may have triggered the acute episode."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-pe-q2",
          question: "A 58-year-old has had a worsening cough with green sputum for 5 days. Temperature is 102.4°F. You hear crackles in the right lower lobe only. What do you suspect?",
          options: ["Pulmonary edema", "Right-sided pleural effusion", "Pneumonia", "Pulmonary embolism"],
          correctIndex: 2,
          explanation: "Fever + productive cough with colored sputum + FOCAL crackles (one area) = pneumonia. The 5-day history of worsening symptoms is typical for bacterial pneumonia."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-pe-q3",
          question: "A 65-year-old with cancer history has had progressively worsening shortness of breath over 2 weeks. Breath sounds are absent on the left side. What is most likely?",
          options: ["Pulmonary edema", "Pneumonia", "Pleural effusion", "Pneumothorax"],
          correctIndex: 2,
          explanation: "Cancer history + gradual onset + ABSENT breath sounds on one side = pleural effusion (likely malignant). Gradual onset over weeks differentiates from pneumothorax (sudden onset)."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-pe-q4",
          question: "Which intervention is MOST appropriate for acute pulmonary edema with SpO₂ of 82%?",
          options: ["Nasal cannula at 2 LPM", "Position supine for transport", "CPAP at 5-10 cmH₂O + high-flow O₂", "Nebulized albuterol"],
          correctIndex: 2,
          explanation: "CPAP is the gold standard for acute pulmonary edema — it pushes fluid out of alveoli, improves oxygenation, and reduces cardiac workload. Combined with high-flow O₂ for the severely hypoxic patient."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "emt-pe-q5",
          question: "What lung sound finding helps distinguish pleural effusion from pulmonary edema?",
          options: ["Bilateral wheezing", "Bilateral crackles", "Absent or diminished sounds on one side", "Stridor"],
          correctIndex: 2,
          explanation: "Pleural effusion produces absent or diminished breath sounds because fluid around the lung blocks sound transmission. Pulmonary edema produces bilateral crackles (fluid inside alveoli creates bubbling sounds)."
        }
      }
    ]
  },
  {
    id: "pe-pn-ef-wrapup",
    title: "Wrapping Up — EMT Level Complete",
    content: `You've learned to differentiate three major causes of dyspnea at the EMT level:

• **Pulmonary Edema**: Fluid IN the alveoli → bilateral crackles, orthopnea, hypertension, CHF history → CPAP + upright positioning + O₂
• **Pneumonia**: Infection IN lung tissue → focal crackles, fever, productive cough → O₂, comfort, monitor for sepsis
• **Pleural Effusion**: Fluid AROUND the lung → absent/diminished sounds, gradual onset → O₂, positioning, urgent transport

**What AEMT Adds:**
At the AEMT level, you'll add capnography for waveform analysis, IV access for fluid decisions (when to give vs. withhold), and deeper pathophysiology including Starling forces and V/Q mismatch concepts.

**The Big Picture:**
These three conditions can overlap — a CHF patient can have both pulmonary edema AND a pleural effusion. A pneumonia patient can develop an effusion as a complication. Your job is to identify the PRIMARY driver of their distress and intervene accordingly.`,
    keyPoints: [
      "You can differentiate these three conditions using history, lung sounds, and vital signs",
      "CPAP is your most powerful tool for pulmonary edema specifically",
      "Always compare breath sounds side-to-side",
      "These conditions can coexist — identify the primary problem"
    ],
    rememberThis: "Three locations, three sounds, three approaches: bilateral crackles = edema (CPAP), focal crackles + fever = pneumonia (monitor for sepsis), absent sounds = effusion (urgent transport). You've got this!"
  }
];

// =====================================================
// Pulmonary Edema vs Pneumonia vs Pleural Effusion — AEMT
// =====================================================

export const aemtPulmonaryEdemaPneumoniaEffusionContent: TopicSection[] = [
  {
    id: "aemt-pe-pn-ef-intro",
    title: "Going Deeper — Pathophysiology Behind the Dyspnea",
    content: `You already know how to differentiate pulmonary edema, pneumonia, and pleural effusion at the bedside. Now let's understand the **why** — the pathophysiology that drives each presentation.

**What AEMT adds to your toolkit:**
• **Capnography** — waveform analysis for real-time ventilation monitoring
• **IV access** — critical fluid decisions (when to give vs. when to withhold)
• **CPAP mastery** — understanding the physiology behind why it works
• **SpO₂ trending** — tracking response to interventions over time

Understanding the mechanisms behind these conditions transforms your assessment from pattern recognition into **clinical reasoning**. When you know WHY bilateral crackles develop in edema, you understand WHY CPAP works — and WHY it won't help a pleural effusion.`,
    keyPoints: [
      "AEMT builds pathophysiology onto EMT-level pattern recognition",
      "Capnography, IV access, and CPAP are your new tools",
      "Understanding mechanisms guides intervention selection"
    ],
    proTip: "At the AEMT level, you're not just matching signs to conditions — you're understanding WHY those signs appear and WHY your interventions work."
  },
  {
    id: "aemt-pe-pn-ef-pathophys",
    title: "Pathophysiology — What's Really Happening",
    content: `Let's explore the cellular and vascular mechanisms behind each condition.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Pulmonary Edema",
            content: "Pulmonary edema is governed by Starling forces — the balance between hydrostatic pressure (pushing fluid OUT of vessels) and oncotic pressure (pulling fluid IN). When the left ventricle fails, blood backs up into the pulmonary veins, raising hydrostatic pressure in the pulmonary capillaries.",
            bullets: [
              "Hydrostatic pressure rises → exceeds oncotic pressure → fluid leaks into alveoli",
              "Cardiogenic edema: pump failure drives pressure up (most common)",
              "Non-cardiogenic edema: capillary membrane damage allows leakage (ARDS, toxins)",
              "Result: alveoli flood with fluid → gas exchange fails → hypoxemia",
              "Frank-Starling mechanism fails: overstretched ventricle can't generate adequate force"
            ]
          },
          {
            label: "Pneumonia",
            content: "Pneumonia triggers an inflammatory cascade. Pathogens invade the alveoli, and the immune system responds with neutrophils, macrophages, and inflammatory mediators. This creates consolidation — alveoli packed with immune cells, fluid, and debris.",
            bullets: [
              "Inflammatory cascade: pathogen invasion → immune response → consolidation",
              "V/Q mismatch from shunting: blood flows past consolidated alveoli that can't exchange gas",
              "Shunt physiology: supplemental O₂ has limited effect on true shunt",
              "Systemic inflammatory response: fever, tachycardia, elevated WBC",
              "Sepsis risk: when local infection triggers systemic inflammation (SIRS)"
            ]
          },
          {
            label: "Pleural Effusion",
            content: "The pleural space normally contains ~5-15 mL of lubricating fluid. Effusions develop when production exceeds absorption, or when pathological processes dump fluid into this space.",
            bullets: [
              "Transudative: pressure-driven — CHF increases hydrostatic pressure, liver failure decreases oncotic pressure",
              "Exudative: inflammation-driven — infection, cancer, or autoimmune disease damages the pleural membrane",
              "Compressive atelectasis: fluid pushes lung tissue inward, collapsing alveoli",
              "Reduced lung compliance: the lung can't expand fully against the fluid",
              "Mediastinal shift: large effusions can push heart and trachea to the opposite side"
            ]
          }
        ]
      }
    ],
    keyPoints: [
      "Edema: Starling force imbalance floods alveoli from inside",
      "Pneumonia: inflammatory cascade creates consolidation and V/Q mismatch",
      "Effusion: fluid accumulation compresses lung from outside"
    ]
  },
  {
    id: "aemt-pe-pn-ef-terminology",
    title: "Advanced Terminology",
    content: `These AEMT-level terms connect pathophysiology to your clinical assessment.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "aemt-pe-term-1",
            front: "Hydrostatic Pressure",
            back: "The pressure exerted by fluid against vessel walls. In pulmonary edema, elevated left heart pressure increases hydrostatic pressure in pulmonary capillaries, forcing fluid across the membrane into alveoli. Think: 'water pressure pushing fluid out of the pipes.'"
          },
          {
            id: "aemt-pe-term-2",
            front: "V/Q Mismatch",
            back: "Ventilation-Perfusion mismatch occurs when ventilation (air) and perfusion (blood) don't match. In pneumonia, consolidated alveoli receive blood but can't ventilate (shunt). In effusion, compressed lung areas can't ventilate despite blood flow."
          },
          {
            id: "aemt-pe-term-3",
            front: "Transudative vs Exudative",
            back: "Transudative effusions: caused by pressure imbalances (CHF, liver failure) — fluid is thin, low protein. Exudative effusions: caused by inflammation (infection, cancer) — fluid is thick, high protein, may contain cells."
          },
          {
            id: "aemt-pe-term-4",
            front: "Capnography Waveform Patterns",
            back: "ETCO₂ provides real-time ventilation data. Pulmonary edema: may show normal or elevated ETCO₂ (impaired CO₂ exchange). Pneumonia: may show elevated ETCO₂ with sepsis. Effusion: may show low tidal CO₂ from reduced lung volume."
          },
          {
            id: "aemt-pe-term-5",
            front: "Sepsis (Pneumonia Complication)",
            back: "When localized pneumonia triggers a systemic inflammatory response: HR > 90, RR > 20, temp > 38°C or < 36°C, altered mental status, hypotension. This changes pneumonia from a respiratory emergency to a multi-system crisis requiring aggressive fluid resuscitation."
          },
          {
            id: "aemt-pe-term-6",
            front: "Paroxysmal Nocturnal Dyspnea (PND)",
            back: "Sudden awakening from sleep with severe shortness of breath — classic for pulmonary edema. Occurs 2-4 hours after lying flat. Fluid redistributes from legs to lungs during sleep, eventually overwhelming the weakened heart."
          }
        ]
      }
    ]
  },
  {
    id: "aemt-pe-pn-ef-tools",
    title: "Advanced Differentiation Tools",
    content: `At the AEMT level, you have additional tools to confirm your differential assessment.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Capnography",
            content: "Capnography provides real-time feedback on ventilation and can support your differential diagnosis.",
            bullets: [
              "Pulmonary edema: normal or slightly elevated ETCO₂ early; rising ETCO₂ indicates worsening ventilation failure",
              "Pneumonia: ETCO₂ may be low (tachypnea blowing off CO₂) or high (fatigue/sepsis)",
              "Pleural effusion: reduced tidal volume may show low ETCO₂ values",
              "Shark-fin waveform: suggests bronchospasm component (may coexist with any condition)",
              "Trend monitoring: watch ETCO₂ response to CPAP — improvement confirms alveolar recruitment"
            ]
          },
          {
            label: "Auscultation Patterns",
            content: "Advanced auscultation goes beyond 'crackles vs. absent' to include specific patterns.",
            bullets: [
              "Bilateral basilar crackles that improve with CPAP = pulmonary edema responding",
              "Focal crackles with bronchial breath sounds = consolidation (pneumonia)",
              "E-to-A changes (egophony): patient says 'E,' you hear 'A' = consolidation",
              "Absent sounds with dullness to percussion = fluid (effusion)",
              "Compare side-to-side AND top-to-bottom systematically"
            ]
          },
          {
            label: "Clinical Decision Matrix",
            content: "Use this systematic approach when the presentation is unclear.",
            bullets: [
              "Heart history + bilateral crackles + hypertension → Pulmonary edema → CPAP + position",
              "Fever + focal crackles + productive cough → Pneumonia → O₂ + IV + monitor for sepsis",
              "Absent sounds + gradual onset + cancer/CHF history → Pleural effusion → O₂ + transport",
              "Mixed presentations: treat the most life-threatening component first",
              "Reassess after interventions — response confirms or refutes your working diagnosis"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "aemt-pe-pn-ef-assessment",
    title: "AEMT-Level Assessment Integration",
    content: `Your AEMT assessment integrates advanced tools into a systematic approach that builds on the EMT foundation.

**Systematic AEMT Assessment for Dyspnea:**

1. **Scene size-up and initial impression** — respiratory rate, work of breathing, skin color
2. **Apply pulse oximetry AND capnography** — continuous SpO₂ and ETCO₂ trending
3. **Focused history** — cardiac history (edema), infectious symptoms (pneumonia), gradual vs acute onset (effusion)
4. **Bilateral auscultation** — compare side-to-side at 3+ levels; note crackles, absent sounds, or bronchial sounds
5. **IV access** — establish early; your fluid decision depends on the diagnosis
6. **Intervention selection** — CPAP for edema, IV fluids for pneumonia/sepsis, positioning for effusion

**The Critical Fluid Decision:**
• **Pulmonary edema** = RESTRICT fluids (the patient already has too much fluid in the lungs)
• **Pneumonia with sepsis** = GIVE fluids aggressively (vasodilation needs volume replacement)
• **Pleural effusion** = Cautious fluids (depends on cause — CHF-related effusion needs restriction)

This is perhaps the most important differentiation at the AEMT level: the same chief complaint can require opposite fluid strategies.`,
    keyPoints: [
      "Capnography and SpO₂ trending add objective data to your assessment",
      "IV fluid decisions are OPPOSITE for edema (restrict) vs. pneumonia/sepsis (give)",
      "Reassess after every intervention to confirm your working diagnosis"
    ],
    rememberThis: "The wrong fluid decision can kill: giving fluids to a pulmonary edema patient floods the lungs further. Withholding fluids from a septic pneumonia patient lets them deteriorate. Get the diagnosis right FIRST."
  },
  {
    id: "aemt-pe-pn-ef-interventions",
    title: "AEMT Interventions",
    content: `Your AEMT toolkit adds powerful interventions. Here's how to apply them to each condition.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "aemt-pe-int-1",
            front: "CPAP Application (Pulmonary Edema)",
            back: "CPAP at 5-10 cmH₂O for pulmonary edema: positive pressure pushes fluid from alveoli back into capillaries, recruits collapsed alveoli, and reduces preload (decreasing venous return). Monitor: SpO₂ should improve within 5-10 minutes. If no improvement, consider BiPAP or intubation readiness."
          },
          {
            id: "aemt-pe-int-2",
            front: "IV Fluid Decisions",
            back: "Pulmonary edema: TKO rate only — NO fluid boluses (already fluid overloaded). Pneumonia with sepsis: 20 mL/kg NS bolus — vasodilation needs volume. Pleural effusion: TKO unless hypotensive from other cause. Wrong choice = patient deterioration."
          },
          {
            id: "aemt-pe-int-3",
            front: "Nebulizer (If Bronchospasm Present)",
            back: "Some patients have bronchospasm on top of their primary condition (cardiac asthma in edema, reactive airways in pneumonia). If wheezing is present alongside crackles, nebulized albuterol may help the bronchospasm component. Treat what you hear."
          },
          {
            id: "aemt-pe-int-4",
            front: "Positioning Strategies",
            back: "Pulmonary edema: high Fowler's (sitting upright, legs dependent) — reduces preload. Pneumonia: upright for comfort, affected lung up for better V/Q. Effusion: position of comfort, often upright; large effusions may benefit from affected side down."
          },
          {
            id: "aemt-pe-int-5",
            front: "Monitoring Response to Interventions",
            back: "Track: SpO₂ trend (improving = good), ETCO₂ trend (stabilizing = good), work of breathing (decreasing = good), mental status (improving = good). If not improving after 10 minutes of appropriate therapy, reassess your differential."
          },
          {
            id: "aemt-pe-int-6",
            front: "When to Withhold Fluids",
            back: "Withhold fluid boluses when: JVD is present (fluid backed up), bilateral crackles without fever (edema, not pneumonia), known CHF with acute worsening, or when CPAP is improving the patient. Giving fluids here adds to the flood."
          }
        ]
      }
    ]
  },
  {
    id: "aemt-pe-pn-ef-quiz",
    title: "Knowledge Check",
    content: `Apply your AEMT-level understanding to these clinical scenarios.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "aemt-pe-q1",
          question: "A CHF patient has bilateral crackles, SpO₂ 84%, and BP 196/110. After starting CPAP at 8 cmH₂O, SpO₂ improves to 92% in 5 minutes. What does this response tell you?",
          options: ["The patient has pneumonia", "CPAP is recruiting alveoli — confirms pulmonary edema", "The patient needs IV fluids", "CPAP is masking a pleural effusion"],
          correctIndex: 1,
          explanation: "Rapid SpO₂ improvement with CPAP confirms pulmonary edema — positive pressure is pushing fluid out of alveoli and recruiting collapsed air sacs. Pneumonia and effusion wouldn't respond this dramatically to CPAP."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-pe-q2",
          question: "A 62-year-old with pneumonia has HR 118, BP 88/54, RR 28, and temp 103.2°F. What is the MOST critical AEMT intervention?",
          options: ["CPAP application", "IV fluid bolus 20 mL/kg NS", "Restrict fluids to TKO", "Nebulized albuterol"],
          correctIndex: 1,
          explanation: "This patient has pneumonia complicated by sepsis (tachycardia, hypotension, fever, tachypnea). Sepsis causes vasodilation — the tank is empty, not overflowing. Aggressive IV fluid resuscitation is critical."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-pe-q3",
          question: "Why is CPAP generally NOT effective for pleural effusion?",
          options: ["The patient can't tolerate the mask", "Positive pressure can't drain fluid from the pleural space", "Pleural effusion patients don't have hypoxemia", "CPAP worsens the infection"],
          correctIndex: 1,
          explanation: "CPAP works by pushing fluid OUT of alveoli (edema) and keeping alveoli open. In pleural effusion, the fluid is OUTSIDE the lung in the pleural space — positive pressure can't reach it there. The fluid needs to be drained (thoracentesis at the hospital)."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-pe-q4",
          question: "Which Starling force mechanism explains pulmonary edema in CHF?",
          options: ["Decreased oncotic pressure in the alveoli", "Increased hydrostatic pressure in pulmonary capillaries", "Increased oncotic pressure in the interstitium", "Decreased hydrostatic pressure in the veins"],
          correctIndex: 1,
          explanation: "In CHF, the left ventricle fails → blood backs up into pulmonary veins → hydrostatic pressure in pulmonary capillaries rises → exceeds oncotic pressure → fluid leaks across the membrane into alveoli."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "aemt-pe-q5",
          question: "A patient has absent breath sounds on the left with dullness to percussion. ETCO₂ is 30 mmHg. The onset was gradual over 10 days. What's your working diagnosis?",
          options: ["Left-sided pneumothorax", "Pulmonary edema", "Left-sided pleural effusion", "Left mainstem bronchus obstruction"],
          correctIndex: 2,
          explanation: "Absent breath sounds + dullness to percussion + gradual onset over days = pleural effusion. Pneumothorax would be sudden onset with hyperresonance (not dullness). The low ETCO₂ reflects reduced lung volume from compression."
        }
      }
    ]
  },
  {
    id: "aemt-pe-pn-ef-wrapup",
    title: "AEMT Level Complete",
    content: `You've built a pathophysiology-driven framework for differentiating and treating these three conditions:

• **Pulmonary Edema**: Starling force imbalance → CPAP + fluid restriction + upright positioning
• **Pneumonia**: Inflammatory consolidation → O₂ + IV fluids (if septic) + monitor
• **Pleural Effusion**: Compressive fluid → O₂ + positioning + urgent transport

**What Paramedic Adds:**
At the paramedic level, you'll integrate:
• **Pharmacology**: Nitroglycerin for preload reduction, furosemide for diuresis, vasopressors for septic shock
• **Advanced ventilation**: BiPAP settings, lung-protective ventilation concepts
• **Light's criteria**: Differentiating transudative from exudative effusions
• **12-lead integration**: Identifying cardiac causes of pulmonary edema
• **Acid-base interpretation**: Metabolic acidosis in sepsis, respiratory acidosis in ventilation failure`,
    keyPoints: [
      "Pathophysiology guides your intervention selection",
      "Fluid decisions are the most critical AEMT-level differentiation",
      "CPAP response confirms pulmonary edema diagnosis",
      "Paramedic level adds pharmacology and advanced ventilation"
    ],
    rememberThis: "From EMT pattern recognition to AEMT pathophysiology — you're now making decisions based on WHY the patient is sick, not just WHAT they look like. That's clinical reasoning."
  }
];

// =====================================================
// Pulmonary Edema vs Pneumonia vs Pleural Effusion — Paramedic
// =====================================================

export const paramedicPulmonaryEdemaPneumoniaEffusionContent: TopicSection[] = [
  {
    id: "para-pe-pn-ef-intro",
    title: "Paramedic Mastery — Pharmacology Meets Pathophysiology",
    content: `You've built the foundation (EMT) and understood the mechanisms (AEMT). Now it's time to integrate **pharmacology, advanced ventilation, and clinical decision-making** at the highest level.

**Paramedic-Level Thinking:**
At this level, you're not just identifying the condition — you're managing it with targeted pharmacological interventions, advanced ventilation strategies, and the clinical reasoning to handle overlap presentations.

• **Pulmonary edema**: You'll use nitroglycerin, furosemide, and BiPAP — understanding which receptor each drug targets and why
• **Pneumonia**: You'll manage the sepsis cascade with vasopressors, recognize SIRS criteria, and make intubation decisions
• **Pleural effusion**: You'll understand Light's criteria, recognize tension physiology, and manage ventilation around reduced lung capacity

**The Key Shift:**
As a paramedic, you'll encounter patients who have **more than one of these conditions simultaneously**. A CHF patient may have pulmonary edema AND a pleural effusion. A pneumonia patient may develop both a parapneumonic effusion AND sepsis. Your job is to identify the primary driver and manage competing treatment priorities.`,
    keyPoints: [
      "Paramedic level integrates pharmacology with pathophysiology",
      "You'll manage overlap presentations and competing treatment priorities",
      "Advanced ventilation decisions require understanding lung mechanics"
    ]
  },
  {
    id: "para-pe-pn-ef-advanced-pathophys",
    title: "Advanced Pathophysiology",
    content: `Let's explore the deeper mechanisms and clinical concepts that drive paramedic-level decision-making.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "Pulmonary Edema",
            content: "At the paramedic level, you need to understand the neurohormonal activation that perpetuates pulmonary edema and the pharmacological targets for interrupting it.",
            bullets: [
              "Starling equation: Jv = Kf[(Pc - Pi) - σ(πc - πi)] — fluid movement depends on hydrostatic and oncotic pressure gradients",
              "Neurohormonal activation: failing heart triggers RAAS → Na/H₂O retention → more volume → more edema",
              "Flash pulmonary edema: acute hypertensive crisis overwhelms compensatory mechanisms in minutes",
              "ARDS overlap: non-cardiogenic edema from capillary membrane damage (trauma, sepsis, aspiration)",
              "BNP/NT-proBNP: hospital lab test that differentiates cardiac from non-cardiac causes"
            ]
          },
          {
            label: "Pneumonia",
            content: "Paramedic-level understanding connects pneumonia to the sepsis cascade and recognizes the systemic consequences of uncontrolled infection.",
            bullets: [
              "Sepsis cascade: local infection → systemic inflammation → vasodilation → distributive shock",
              "SIRS criteria: temp > 38°C or < 36°C, HR > 90, RR > 20, WBC > 12k or < 4k (2 of 4 = SIRS)",
              "Sepsis = SIRS + confirmed/suspected infection source",
              "Empyema formation: infected pleural effusion as pneumonia complication",
              "Refractory hypoxemia: true shunt physiology — O₂ won't help blood passing through consolidated lung"
            ]
          },
          {
            label: "Pleural Effusion",
            content: "Paramedic-level pleural effusion management includes understanding Light's criteria and recognizing tension physiology.",
            bullets: [
              "Light's criteria (hospital): differentiates transudative from exudative — pleural protein/serum protein > 0.5, pleural LDH/serum LDH > 0.6",
              "Tension physiology: massive effusion can compress mediastinum → reduced venous return → hypotension → cardiovascular collapse",
              "Malignant effusion: cancer-related, often bloody, tends to recur rapidly after drainage",
              "Parapneumonic effusion: effusion caused by adjacent pneumonia — can progress to empyema",
              "Thoracentesis: definitive hospital treatment — needle drainage of pleural fluid"
            ]
          }
        ]
      }
    ],
    keyPoints: [
      "Starling equation governs all fluid movement across membranes",
      "Sepsis cascade transforms pneumonia from respiratory to multi-system emergency",
      "Large effusions can cause tension physiology and cardiovascular compromise"
    ]
  },
  {
    id: "para-pe-pn-ef-pharm-terms",
    title: "Pharmacology Terminology",
    content: `These medications target specific pathophysiological mechanisms. Understanding the receptor-level action helps you choose the right drug.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "para-pe-pharm-1",
            front: "Nitroglycerin (Preload Reduction)",
            back: "Venodilator that reduces preload by pooling blood in the venous system. Less blood returns to the heart → lower pulmonary capillary pressure → less fluid leaking into alveoli. Start 0.4mg SL, can repeat q3-5min. Contraindicated if SBP < 90 or recent PDE5 inhibitor use."
          },
          {
            id: "para-pe-pharm-2",
            front: "Furosemide (Loop Diuretic)",
            back: "Blocks Na/K/Cl cotransporter in the Loop of Henle → massive water excretion. Reduces total body fluid volume, lowering pulmonary congestion. 40-80mg IV. Onset: 5 min IV (vasodilation effect before diuresis). Also reduces preload through venodilation."
          },
          {
            id: "para-pe-pharm-3",
            front: "Broad-Spectrum Antibiotics (Hospital)",
            back: "Not typically a prehospital intervention, but understanding the principle matters: empiric broad-spectrum coverage started early in sepsis reduces mortality. Every hour of delay increases mortality ~7%. Your role: rapid transport and early sepsis recognition."
          },
          {
            id: "para-pe-pharm-4",
            front: "BiPAP (Bilevel Positive Airway Pressure)",
            back: "Two pressure levels: higher on inspiration (IPAP 10-15 cmH₂O), lower on expiration (EPAP 5-8 cmH₂O). IPAP assists ventilation (moves air in), EPAP maintains alveolar recruitment. Superior to CPAP for pulmonary edema with hypercapnia."
          },
          {
            id: "para-pe-pharm-5",
            front: "Needle Decompression (Tension Effusion)",
            back: "Rarely needed for effusion (usually gradual), but massive rapid effusion or hemothorax can cause tension physiology. Standard needle decompression at 2nd ICS midclavicular or 5th ICS midaxillary. More commonly associated with pneumothorax but worth knowing."
          },
          {
            id: "para-pe-pharm-6",
            front: "Vasopressors (Septic Shock from Pneumonia)",
            back: "Norepinephrine is first-line for septic shock after fluid resuscitation. α1 agonism restores vascular tone lost to inflammatory vasodilation. Dose: 0.1-0.5 mcg/kg/min. Only after adequate fluid loading (30 mL/kg). Target MAP ≥ 65 mmHg."
          }
        ]
      }
    ]
  },
  {
    id: "para-pe-pn-ef-ventilation",
    title: "Ventilation Strategies",
    content: `Each condition requires a different ventilation approach. Choosing the wrong strategy can worsen the patient.`,
    blocks: [
      {
        type: "tabs",
        tabs: [
          {
            label: "BiPAP/CPAP for Edema",
            content: "Non-invasive positive pressure ventilation is first-line for acute pulmonary edema. Understanding the settings and monitoring response is critical.",
            bullets: [
              "BiPAP preferred over CPAP when hypercapnia is present (CO₂ > 45 mmHg)",
              "IPAP 10-15 cmH₂O: assists inspiration, improves tidal volume",
              "EPAP 5-8 cmH₂O: maintains alveolar recruitment, pushes fluid from alveoli",
              "Monitor: SpO₂ and ETCO₂ should improve within 10-15 minutes",
              "Failure indicators: worsening mental status, rising ETCO₂, no SpO₂ improvement → prepare for intubation"
            ]
          },
          {
            label: "Ventilation for Pneumonia",
            content: "Pneumonia patients with respiratory failure may need advanced airway management. Lung-protective ventilation principles apply.",
            bullets: [
              "Supplemental O₂ first — may be sufficient for mild-moderate pneumonia",
              "CPAP/BiPAP can help but won't treat the underlying infection",
              "If intubation needed: lung-protective volumes (6-8 mL/kg ideal body weight)",
              "High FiO₂ may be needed for shunt physiology — true shunt doesn't respond to O₂ alone",
              "PEEP: helps recruit collapsed alveoli adjacent to consolidated areas"
            ]
          },
          {
            label: "Managing Pleural Effusion",
            content: "Ventilation management for pleural effusion focuses on maximizing the remaining functional lung capacity.",
            bullets: [
              "Supplemental O₂ — often sufficient for small-moderate effusions",
              "Positioning: upright reduces compression effect; affected side down can improve V/Q in some cases",
              "CPAP/BiPAP: limited benefit — can't re-expand lung compressed by external fluid",
              "Large effusions may require emergent thoracentesis (hospital) before ventilation improves",
              "Transport decision: large effusion + hemodynamic compromise = emergent transport with minimal on-scene time"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "para-pe-pn-ef-clinical-assess",
    title: "Advanced Clinical Assessment",
    content: `Paramedic-level assessment integrates multiple data points into a comprehensive clinical picture.

**12-Lead ECG Integration:**
• Pulmonary edema from acute MI: look for ST elevation/depression, T-wave changes
• Right heart strain from massive effusion: right axis deviation, S1Q3T3 pattern
• Sepsis-related cardiac dysfunction: diffuse ST changes, tachyarrhythmias

**Acid-Base Assessment:**
• **Pulmonary edema**: initially respiratory alkalosis (tachypnea blowing off CO₂) → progresses to respiratory acidosis as patient fatigues
• **Pneumonia with sepsis**: metabolic acidosis from lactic acid production (poor perfusion) + respiratory compensation (tachypnea)
• **Pleural effusion**: respiratory acidosis if large (can't ventilate adequately)

**Serial Assessment:**
The paramedic advantage is **time with the patient**. Track trends:
• SpO₂ trajectory: improving, stable, or declining?
• ETCO₂ trajectory: normalizing or worsening?
• Mental status: improving or deteriorating?
• Response to interventions: confirming or refuting your diagnosis?

**Point-of-Care Ultrasound (Where Available):**
• Pulmonary edema: B-lines (vertical comet-tail artifacts) bilaterally
• Pneumonia: consolidation with air bronchograms
• Pleural effusion: anechoic fluid collection above the diaphragm`,
    keyPoints: [
      "12-lead ECG can reveal the cardiac cause of pulmonary edema",
      "Acid-base patterns differ: respiratory in edema/effusion, metabolic in sepsis",
      "Serial trending of SpO₂, ETCO₂, and mental status guides ongoing management",
      "Ultrasound can provide definitive visual confirmation when available"
    ],
    rememberThis: "The paramedic who tracks trends over time makes better decisions than the one who relies on a single snapshot. Reassess, reassess, reassess."
  },
  {
    id: "para-pe-pn-ef-interventions",
    title: "Paramedic Pharmacology Integration",
    content: `Integrate your pharmacological toolkit with pathophysiology-driven clinical reasoning.`,
    blocks: [
      {
        type: "flashcards",
        flashcards: [
          {
            id: "para-pe-int-1",
            front: "Pulmonary Edema Algorithm",
            back: "1. BiPAP/CPAP + high-flow O₂\n2. NTG 0.4mg SL q3-5min (SBP > 90)\n3. Furosemide 40-80mg IV (if chronic CHF)\n4. 12-lead ECG to rule out STEMI\n5. Monitor: SpO₂, ETCO₂, BP, mental status\n6. If failing: prepare for RSI\nGoal: reduce preload, improve oxygenation, identify cause"
          },
          {
            id: "para-pe-int-2",
            front: "Pneumonia/Sepsis Algorithm",
            back: "1. High-flow O₂ (titrate to SpO₂ ≥ 94%)\n2. IV access × 2 large bore\n3. NS bolus 30 mL/kg for sepsis\n4. Vasopressor (norepinephrine) if MAP < 65 after fluids\n5. Monitor: lactate proxy (ETCO₂), mental status, urine output\n6. Rapid transport — antibiotics within 1 hour is the hospital goal\nGoal: volume resuscitation, maintain perfusion, rapid transport"
          },
          {
            id: "para-pe-int-3",
            front: "Effusion Management",
            back: "1. Supplemental O₂ (titrate to SpO₂ ≥ 94%)\n2. Position of comfort (usually upright)\n3. IV access (TKO unless hemodynamically unstable)\n4. If tension physiology: consider needle decompression\n5. Transport for definitive care (thoracentesis)\n6. Monitor: breath sounds, BP, SpO₂, tracheal position\nGoal: support oxygenation, recognize tension, rapid transport"
          },
          {
            id: "para-pe-int-4",
            front: "Overlap Presentations",
            back: "CHF + Effusion: BiPAP + NTG for the edema component; effusion needs hospital drainage. Pneumonia + Effusion (parapneumonic): fluids for sepsis, but effusion limits lung expansion — prioritize transport. All three: treat the most acute threat first (usually the edema or sepsis)."
          },
          {
            id: "para-pe-int-5",
            front: "When Treatments Compete",
            back: "The classic conflict: edema needs fluid RESTRICTION, sepsis needs fluid RESUSCITATION. If both present: small fluid boluses (250 mL) with reassessment after each. Use vasopressors earlier to avoid excessive fluid loading. BiPAP can bridge oxygenation while you titrate fluids carefully."
          },
          {
            id: "para-pe-int-6",
            front: "Intubation Considerations",
            back: "Pulmonary edema: exhaust BiPAP first; post-intubation PEEP 8-10 cmH₂O. Pneumonia: lung-protective volumes; high PEEP for recruitment. Effusion: limited benefit if fluid can't be drained; may need higher pressures. All: RSI with ketamine (bronchodilator properties) or etomidate (hemodynamic stability)."
          }
        ]
      }
    ]
  },
  {
    id: "para-pe-pn-ef-quiz",
    title: "Knowledge Check",
    content: `Apply paramedic-level clinical reasoning to these complex scenarios.`,
    blocks: [
      {
        type: "quiz",
        quiz: {
          id: "para-pe-q1",
          question: "A pulmonary edema patient on BiPAP has SpO₂ 88%, ETCO₂ 55 mmHg, and is becoming somnolent despite 15 minutes of therapy. What's your next step?",
          options: ["Increase NTG dose", "Switch to nasal cannula", "Prepare for RSI and intubation", "Give a 500 mL fluid bolus"],
          correctIndex: 2,
          explanation: "Rising ETCO₂ + somnolence + failure to improve on BiPAP = non-invasive ventilation failure. This patient needs definitive airway management (RSI). The worsening mental status is the most concerning sign — CO₂ narcosis is developing."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-pe-q2",
          question: "A pneumonia patient received 2L NS for sepsis. BP improved from 78/40 to 92/58, but SpO₂ dropped from 91% to 86%. What's happening?",
          options: ["The fluids are causing pulmonary edema", "The patient is developing a pneumothorax", "The antibiotics are working", "Normal response to fluid resuscitation"],
          correctIndex: 0,
          explanation: "Fluid resuscitation in sepsis can worsen oxygenation if the damaged pulmonary capillaries leak fluid into the alveoli (ARDS-like picture). BP improved (fluids worked for hemodynamics) but lungs worsened. Consider slowing fluids, adding vasopressors, and applying CPAP/BiPAP."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-pe-q3",
          question: "Why is nitroglycerin effective for acute pulmonary edema?",
          options: ["It kills bacteria in the lungs", "It reduces preload by venodilation, lowering pulmonary capillary pressure", "It drains pleural fluid", "It increases cardiac contractility"],
          correctIndex: 1,
          explanation: "NTG causes venodilation → blood pools in the venous system → less blood returns to the heart → reduced preload → lower pulmonary capillary hydrostatic pressure → less fluid leaking into alveoli. It treats the Starling force imbalance directly."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-pe-q4",
          question: "A patient has bilateral crackles AND absent breath sounds on the right base. What combination do you suspect?",
          options: ["Bilateral pneumonia", "Pulmonary edema + right-sided pleural effusion", "Bilateral pleural effusion", "Right-sided pneumothorax + left pneumonia"],
          correctIndex: 1,
          explanation: "Bilateral crackles = pulmonary edema (fluid in alveoli). Absent sounds on the right base = pleural effusion (fluid around the lung). These commonly coexist in CHF — the failing heart causes both pulmonary venous congestion AND transudative effusions."
        }
      },
      {
        type: "quiz",
        quiz: {
          id: "para-pe-q5",
          question: "What is the first-line vasopressor for septic shock from pneumonia after adequate fluid resuscitation?",
          options: ["Epinephrine", "Dopamine", "Norepinephrine", "Phenylephrine"],
          correctIndex: 2,
          explanation: "Norepinephrine is first-line for septic shock per current guidelines. Its α1 agonism restores vascular tone lost to inflammatory vasodilation, while mild β1 effects support cardiac output. Start at 0.1-0.5 mcg/kg/min, titrate to MAP ≥ 65 mmHg."
        }
      }
    ]
  },
  {
    id: "para-pe-pn-ef-wrapup",
    title: "Complete Mastery — All Three Levels",
    content: `You've completed the full journey from EMT pattern recognition to paramedic-level clinical reasoning for three major causes of dyspnea:

**Your EMT Foundation:**
• Differentiate by lung sounds: bilateral crackles (edema), focal crackles + fever (pneumonia), absent sounds (effusion)
• Apply basic interventions: positioning, O₂, CPAP for edema

**Your AEMT Framework:**
• Understand the pathophysiology: Starling forces, V/Q mismatch, compressive physiology
• Make critical fluid decisions: restrict (edema) vs. resuscitate (sepsis)
• Use capnography and trending to guide and confirm treatment

**Your Paramedic Mastery:**
• Integrate pharmacology: NTG + furosemide for edema, vasopressors for sepsis, targeted ventilation for each
• Manage overlap presentations and competing treatment priorities
• Make advanced ventilation decisions: BiPAP settings, intubation timing, lung-protective strategies

**The Complete Clinical Reasoning Chain:**
Pattern recognition → Pathophysiology understanding → Pharmacological intervention → Continuous reassessment

Every level built on the last. You didn't just memorize — you understood WHY, and that understanding will serve you in every dyspnea call you run.`,
    keyPoints: [
      "EMT: pattern recognition and basic interventions",
      "AEMT: pathophysiology-driven assessment and fluid decisions",
      "Paramedic: pharmacology integration and advanced ventilation",
      "Clinical reasoning chain: recognize → understand → intervene → reassess"
    ],
    rememberThis: "From flooded basements and smoke-filled rooms to Starling equations and vasopressor titration — you've built a complete clinical reasoning framework for three of the most common causes of dyspnea. Every level built on the last. That's mastery."
  }
];

export const topicContentRegistry: Record<string, TopicSection[]> = {
  // EMT Level - topic slugs from topicsContent.ts
  "emt-foundations/anatomy-and-physiology-basics": emtAnatomyPhysiologyContent,
  "emt-foundations/heart-and-blood-flow-basics": emtHeartContent,
  "emt-foundations/respiratory-system-basics": emtRespiratoryContent,
  "emt-foundations/pharmacology-emt": emtPharmacologyContent,
  "emt-foundations/respiratory-emergencies-emt": emtRespiratoryEmergenciesContent,
  "emt-foundations/patient-assessment-emt": emtPatientAssessmentContent,
  "emt-foundations/shock-management-emt": emtShockManagementContent,
  "emt-foundations/pathophysiology-introduction": emtPathophysiologyContent,
  "emt-foundations/copd-vs-chf-emt": emtCopdVsChfContent,
  "emt-foundations/asthma-vs-anaphylaxis-emt": emtAsthmaAnaphylaxisContent,
  "emt-foundations/pulmonary-edema-vs-pneumonia-vs-effusion-emt": emtPulmonaryEdemaPneumoniaEffusionContent,
  
  // AEMT Level
  "aemt-foundations/anatomy-and-physiology-aemt": aemtAnatomyPhysiologyContent,
  "aemt-foundations/cardiac-monitoring-basics": aemtCardiacMonitoringContent,
  "aemt-foundations/respiratory-emergencies-advanced": aemtRespiratoryContent,
  "aemt-foundations/pharmacology-aemt": aemtPharmacologyContent,
  "aemt-foundations/respiratory-emergencies-aemt": aemtRespiratoryEmergenciesContent,
  "aemt-foundations/patient-assessment-aemt": aemtPatientAssessmentContent,
  "aemt-foundations/shock-management": aemtShockManagementContent,
  "aemt-foundations/pathophysiology-aemt": aemtPathophysiologyContent,
  "aemt-foundations/advanced-airway-management": aemtAdvancedAirwayContent,
  "aemt-foundations/copd-vs-chf-aemt": aemtCopdVsChfContent,
  "aemt-foundations/asthma-vs-anaphylaxis-aemt": aemtAsthmaAnaphylaxisContent,
  "aemt-foundations/pulmonary-edema-vs-pneumonia-vs-effusion-aemt": aemtPulmonaryEdemaPneumoniaEffusionContent,
  
  // Paramedic Level  
  "paramedic-foundations/anatomy-and-physiology-paramedic": paramedicAnatomyPhysiologyContent,
  "paramedic-foundations/advanced-cardiac-life-support": paramedicCardiacContent,
  "paramedic-foundations/advanced-airway-intubation": paramedicAdvancedAirwayContent,
  "paramedic-foundations/advanced-pharmacology": paramedicPharmacologyContent,
  "paramedic-foundations/respiratory-emergencies-paramedic": paramedicRespiratoryEmergenciesContent,
  "paramedic-foundations/patient-assessment-paramedic": paramedicPatientAssessmentContent,
  "paramedic-foundations/shock-management-paramedic": paramedicShockManagementContent,
  "paramedic-foundations/pathophysiology-deep-dive": paramedicPathophysiologyContent,
  "paramedic-foundations/12-lead-ecg-interpretation": paramedic12LeadContent,
  "paramedic-foundations/copd-vs-chf-paramedic": paramedicCopdVsChfContent,
  "paramedic-foundations/asthma-vs-anaphylaxis-paramedic": paramedicAsthmaAnaphylaxisContent,
  "paramedic-foundations/pulmonary-edema-vs-pneumonia-vs-effusion-paramedic": paramedicPulmonaryEdemaPneumoniaEffusionContent,
};

// Legacy subtopic content map (kept for backward compatibility)
export const subtopicContentMap: Record<string, Record<string, TopicSection[]>> = {
  "emt-foundations": {
    "anatomy-and-physiology-basics": emtAnatomyPhysiologyContent,
    "heart-and-blood-flow-basics": emtHeartContent,
    "respiratory-system-basics": emtRespiratoryContent,
    "pharmacology-emt": emtPharmacologyContent,
    "respiratory-emergencies-emt": emtRespiratoryEmergenciesContent,
    "patient-assessment-emt": emtPatientAssessmentContent,
    "shock-management-emt": emtShockManagementContent,
    "pathophysiology-introduction": emtPathophysiologyContent,
    "copd-vs-chf-emt": emtCopdVsChfContent,
    "asthma-vs-anaphylaxis-emt": emtAsthmaAnaphylaxisContent,
    "pulmonary-edema-vs-pneumonia-vs-effusion-emt": emtPulmonaryEdemaPneumoniaEffusionContent
  },
  "aemt-foundations": {
    "anatomy-and-physiology-aemt": aemtAnatomyPhysiologyContent,
    "cardiac-system-aemt": aemtCardiacContent,
    "respiratory-system-aemt": aemtRespiratoryContent,
    "pharmacology-aemt": aemtPharmacologyContent,
    "respiratory-emergencies-aemt": aemtRespiratoryEmergenciesContent,
    "patient-assessment-aemt": aemtPatientAssessmentContent,
    "shock-management": aemtShockManagementContent,
    "pathophysiology-aemt": aemtPathophysiologyContent,
    "advanced-airway-management": aemtAdvancedAirwayContent,
    "cardiac-monitoring-basics": aemtCardiacMonitoringContent,
    "copd-vs-chf-aemt": aemtCopdVsChfContent,
    "asthma-vs-anaphylaxis-aemt": aemtAsthmaAnaphylaxisContent,
    "pulmonary-edema-vs-pneumonia-vs-effusion-aemt": aemtPulmonaryEdemaPneumoniaEffusionContent
  },
  "paramedic-foundations": {
    "anatomy-and-physiology-paramedic": paramedicAnatomyPhysiologyContent,
    "cardiac-system-paramedic": paramedicCardiacContent,
    "respiratory-system-paramedic": paramedicRespiratoryContent,
    "advanced-airway-intubation": paramedicAdvancedAirwayContent,
    "advanced-pharmacology": paramedicPharmacologyContent,
    "respiratory-emergencies-paramedic": paramedicRespiratoryEmergenciesContent,
    "patient-assessment-paramedic": paramedicPatientAssessmentContent,
    "shock-management-paramedic": paramedicShockManagementContent,
    "pathophysiology-deep-dive": paramedicPathophysiologyContent,
    "12-lead-ecg-interpretation": paramedic12LeadContent,
    "copd-vs-chf-paramedic": paramedicCopdVsChfContent,
    "asthma-vs-anaphylaxis-paramedic": paramedicAsthmaAnaphylaxisContent,
    "pulmonary-edema-vs-pneumonia-vs-effusion-paramedic": paramedicPulmonaryEdemaPneumoniaEffusionContent
  }
};

/**
 * Get rich section content for a topic
 * @param categorySlug - The category slug (e.g., "emt-foundations")
 * @param topicSlug - The topic slug (e.g., "anatomy-and-physiology-basics")
 * @returns Array of TopicSection with interactive blocks, or undefined
 */
export function getTopicSections(
  categorySlug: string, 
  topicSlug: string
): TopicSection[] | undefined {
  const key = `${categorySlug}/${topicSlug}`;
  return topicContentRegistry[key];
}

// Legacy function kept for backward compatibility
export function getSubtopicContent(categorySlug: string, subtopicSlug: string): TopicSection[] | undefined {
  return subtopicContentMap[categorySlug]?.[subtopicSlug];
}
