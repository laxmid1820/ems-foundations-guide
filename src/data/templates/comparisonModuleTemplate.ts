import type { TopicSection } from "../topics";

export interface ComparisonCondition {
  name: string;
  mechanism: string;
}

export interface ComparisonModuleConfig {
  slug: string;
  title: string;
  description: string;
  estimatedMinutes: number;
  whatYoullLearn: string[];
  encouragingTagline: string;
  level: "emt" | "aemt" | "paramedic";
  conditionA: ComparisonCondition;
  conditionB: ComparisonCondition;
}

export function createComparisonModule(config: ComparisonModuleConfig): TopicSection[] {
  const { slug, level, conditionA, conditionB } = config;
  const a = conditionA.name;
  const b = conditionB.name;
  const prefix = `${level}-${slug}`;

  return [
    // 1. Intro
    {
      id: `${slug}-intro`,
      title: `Why ${a} vs ${b} Matters`,
      content: `[Placeholder: Explain why distinguishing ${a} from ${b} is critical in prehospital care at the ${level.toUpperCase()} level.]\n\n[Placeholder: Describe how confusing these two conditions can lead to incorrect treatment and worse patient outcomes.]`,
      keyPoints: [
        `[Placeholder: Key reason #1 why ${a} vs ${b} differentiation matters]`,
        `[Placeholder: Key reason #2]`,
        `[Placeholder: Key reason #3]`,
      ],
    },

    // 2. Core Concepts (Tabs)
    {
      id: `${slug}-core-concepts`,
      title: "Core Concepts",
      content: `Let's break down how each condition works at a fundamental level.`,
      blocks: [
        {
          type: "tabs",
          tabs: [
            {
              label: a,
              content: `[Placeholder: Describe ${a} mechanism]`,
              bullets: [
                `[Placeholder: ${a} pathophysiology point 1]`,
                `[Placeholder: ${a} pathophysiology point 2]`,
                `[Placeholder: ${a} pathophysiology point 3]`,
              ],
            },
            {
              label: b,
              content: `[Placeholder: Describe ${b} mechanism]`,
              bullets: [
                `[Placeholder: ${b} pathophysiology point 1]`,
                `[Placeholder: ${b} pathophysiology point 2]`,
                `[Placeholder: ${b} pathophysiology point 3]`,
              ],
            },
            {
              label: "Key Differences",
              content: `[Placeholder: Side-by-side comparison of ${a} vs ${b}]`,
              bullets: [
                `[Placeholder: Difference #1]`,
                `[Placeholder: Difference #2]`,
                `[Placeholder: Difference #3]`,
              ],
            },
          ],
        },
      ],
    },

    // 3. Terminology (Flashcards)
    {
      id: `${slug}-terminology`,
      title: "Key Terms",
      content: `Flip each card to learn the essential vocabulary for ${a} and ${b}.`,
      blocks: [
        {
          type: "flashcards",
          flashcards: [
            { id: `${prefix}-fc1`, front: `[Term 1 related to ${a}]`, back: `[Placeholder: Definition]` },
            { id: `${prefix}-fc2`, front: `[Term 2 related to ${b}]`, back: `[Placeholder: Definition]` },
            { id: `${prefix}-fc3`, front: `[Term 3 related to ${a}]`, back: `[Placeholder: Definition]` },
            { id: `${prefix}-fc4`, front: `[Term 4 related to ${b}]`, back: `[Placeholder: Definition]` },
            { id: `${prefix}-fc5`, front: `[Shared term 1]`, back: `[Placeholder: Definition]` },
            { id: `${prefix}-fc6`, front: `[Shared term 2]`, back: `[Placeholder: Definition]` },
          ],
        },
      ],
    },

    // 4. Classification (Tabs)
    {
      id: `${slug}-classification`,
      title: "Types and Classifications",
      content: `Understanding the subtypes of each condition helps you tailor your assessment and treatment.`,
      blocks: [
        {
          type: "tabs",
          tabs: [
            {
              label: `${a} Types`,
              content: `[Placeholder: Describe types/subtypes of ${a}]`,
              bullets: [
                `[Placeholder: ${a} type 1]`,
                `[Placeholder: ${a} type 2]`,
              ],
            },
            {
              label: `${b} Types`,
              content: `[Placeholder: Describe types/subtypes of ${b}]`,
              bullets: [
                `[Placeholder: ${b} type 1]`,
                `[Placeholder: ${b} type 2]`,
              ],
            },
            {
              label: "Acute vs Chronic",
              content: `[Placeholder: Compare acute vs chronic presentations of both conditions]`,
              bullets: [
                `[Placeholder: Acute presentation differences]`,
                `[Placeholder: Chronic presentation differences]`,
              ],
            },
          ],
        },
      ],
    },

    // 5. Assessment
    {
      id: `${slug}-assessment`,
      title: "Assessment — Reading the Clues",
      content: `[Placeholder: Describe the assessment approach for differentiating ${a} from ${b} in the field at the ${level.toUpperCase()} level.]\n\n[Placeholder: Walk through key assessment findings that point to each condition.]`,
      keyPoints: [
        `[Placeholder: Assessment finding that suggests ${a}]`,
        `[Placeholder: Assessment finding that suggests ${b}]`,
        `[Placeholder: Finding that could indicate either condition]`,
        `[Placeholder: Red flag to watch for]`,
      ],
      proTip: `[Placeholder: Clinical pearl for differentiating ${a} from ${b} in the field]`,
    },

    // 6. Interventions (Flashcards)
    {
      id: `${slug}-interventions`,
      title: "Interventions",
      content: `Review the key interventions for each condition at the ${level.toUpperCase()} scope of practice.`,
      blocks: [
        {
          type: "flashcards",
          flashcards: [
            { id: `${prefix}-int1`, front: `[${a} intervention 1]`, back: `[Placeholder: Description and rationale]` },
            { id: `${prefix}-int2`, front: `[${a} intervention 2]`, back: `[Placeholder: Description and rationale]` },
            { id: `${prefix}-int3`, front: `[${b} intervention 1]`, back: `[Placeholder: Description and rationale]` },
            { id: `${prefix}-int4`, front: `[${b} intervention 2]`, back: `[Placeholder: Description and rationale]` },
            { id: `${prefix}-int5`, front: `[Shared intervention 1]`, back: `[Placeholder: Description and rationale]` },
            { id: `${prefix}-int6`, front: `[Contraindication to know]`, back: `[Placeholder: What NOT to do and why]` },
          ],
        },
      ],
    },

    // 7. Quiz
    {
      id: `${slug}-quiz`,
      title: "Knowledge Check",
      content: `Test your understanding of ${a} vs ${b}. Choose the best answer for each question.`,
      blocks: [
        {
          type: "quiz",
          quiz: {
            id: `${prefix}-q1`,
            question: `[Placeholder: Question about differentiating ${a} from ${b}]`,
            options: [
              `[Placeholder: Option A]`,
              `[Placeholder: Option B]`,
              `[Placeholder: Option C]`,
              `[Placeholder: Option D]`,
            ],
            correctIndex: 0,
            explanation: `[Placeholder: Explanation for correct answer]`,
          },
        },
        {
          type: "quiz",
          quiz: {
            id: `${prefix}-q2`,
            question: `[Placeholder: Question about ${a} management]`,
            options: [
              `[Placeholder: Option A]`,
              `[Placeholder: Option B]`,
              `[Placeholder: Option C]`,
              `[Placeholder: Option D]`,
            ],
            correctIndex: 0,
            explanation: `[Placeholder: Explanation for correct answer]`,
          },
        },
        {
          type: "quiz",
          quiz: {
            id: `${prefix}-q3`,
            question: `[Placeholder: Question about ${b} assessment]`,
            options: [
              `[Placeholder: Option A]`,
              `[Placeholder: Option B]`,
              `[Placeholder: Option C]`,
              `[Placeholder: Option D]`,
            ],
            correctIndex: 0,
            explanation: `[Placeholder: Explanation for correct answer]`,
          },
        },
      ],
    },

    // 8. Wrap-up
    {
      id: `${slug}-wrapup`,
      title: "Wrapping Up",
      content: `[Placeholder: Summarize key takeaways about ${a} vs ${b} at the ${level.toUpperCase()} level.]\n\n[Placeholder: Encourage the learner and suggest what to study next.]`,
      keyPoints: [
        `[Placeholder: Takeaway #1]`,
        `[Placeholder: Takeaway #2]`,
        `[Placeholder: Takeaway #3]`,
      ],
      rememberThis: `[Placeholder: The single most important thing to remember about ${a} vs ${b}]`,
    },
  ];
}
