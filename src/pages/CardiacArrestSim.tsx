import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DisclaimerBanner } from "@/components/topics/DisclaimerBanner";
import { TopicCallout } from "@/components/topics/TopicCallout";
import { useAuth } from "@/contexts/AuthContext";
import { useProgress } from "@/hooks/useProgress";
import {
  Heart,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Clock,
  Award,
  Lightbulb,
  Play,
  RefreshCw,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Scenario steps for the simulation
interface ScenarioStep {
  id: string;
  title: string;
  description: string;
  question: string;
  options: { label: string; correct: boolean; feedback: string }[];
  proTip?: string;
}

const scenarioSteps: ScenarioStep[] = [
  {
    id: "scene-safety",
    title: "Step 1: Scene Safety",
    description:
      "You arrive at a residence. Family members are frantic, pointing to the living room where a 62-year-old male is lying on the floor, unresponsive.",
    question: "What is your FIRST priority?",
    options: [
      {
        label: "Rush to the patient immediately",
        correct: false,
        feedback:
          "While speed is important, scene safety must come first. If you become a victim, you can't help anyone.",
      },
      {
        label: "Assess scene safety before approaching",
        correct: true,
        feedback:
          "Correct! Always ensure the scene is safe before approaching. Look for hazards, assess the environment, and protect yourself first.",
      },
      {
        label: "Start asking the family medical questions",
        correct: false,
        feedback:
          "Gathering history is important, but scene safety is always the first step in any emergency response.",
      },
    ],
    proTip:
      "Scene safety becomes second nature. With practice, you'll do a quick mental checklist without even thinking about it—hazards, BSI, number of patients.",
  },
  {
    id: "check-responsiveness",
    title: "Step 2: Check Responsiveness",
    description:
      "The scene is safe. You approach the patient. He's lying supine on the carpet. His eyes are closed and he's not moving.",
    question: "How do you check if the patient is responsive?",
    options: [
      {
        label: "Shake the patient vigorously and shout",
        correct: false,
        feedback:
          "Too aggressive. We tap and shout—firm but not rough. Think 'tap the shoulders and speak loudly.'",
      },
      {
        label: "Tap the shoulders firmly and shout 'Are you okay?'",
        correct: true,
        feedback:
          "Perfect! Tap the shoulders firmly and shout clearly. This gives a painful stimulus and auditory stimulus without being harmful.",
      },
      {
        label: "Check for a pulse first",
        correct: false,
        feedback:
          "Close, but responsiveness comes first. The sequence is: responsiveness → breathing/pulse → interventions.",
      },
    ],
    proTip:
      "A loud, clear voice ensures they hear you if they're just deeply asleep or sedated. Tap firmly on the shoulders—be confident.",
  },
  {
    id: "activate-ems",
    title: "Step 3: Activate EMS & Get AED",
    description:
      "The patient doesn't respond. He's not breathing normally—just occasional gasping (agonal respirations).",
    question: "What should happen next?",
    options: [
      {
        label: "Start CPR immediately without calling for help",
        correct: false,
        feedback:
          "CPR is critical, but you need backup. Point to someone: 'You—call 911 and get an AED!' Then start CPR.",
      },
      {
        label: "Have someone call 911 and get AED while you start CPR",
        correct: true,
        feedback:
          "Exactly right! Early CPR + Early defibrillation = Best survival outcomes. Delegate the call, get an AED coming, and start compressions.",
      },
      {
        label: "Wait to see if the patient starts breathing on their own",
        correct: false,
        feedback:
          "Agonal gasps are NOT adequate breathing. This patient is in cardiac arrest and needs immediate intervention.",
      },
    ],
    proTip:
      "Point to a specific person when delegating. 'Somebody call 911' often leads to everyone assuming someone else will do it.",
  },
  {
    id: "start-cpr",
    title: "Step 4: Start High-Quality CPR",
    description:
      "Help is on the way and an AED is being retrieved. You're ready to start chest compressions.",
    question: "What are the key elements of high-quality adult CPR?",
    options: [
      {
        label: "Push hard and fast: 100-120/min, 2 inches deep, full recoil",
        correct: true,
        feedback:
          "Correct! Rate: 100-120/min. Depth: at least 2 inches (5cm). Allow full chest recoil. Minimize interruptions.",
      },
      {
        label: "Push gently to avoid hurting the patient: 60/min, 1 inch deep",
        correct: false,
        feedback:
          "Too slow and too shallow. Effective CPR requires pushing hard enough to circulate blood. Broken ribs can heal—brain damage cannot.",
      },
      {
        label: "Push as fast as possible: 150/min, 3 inches deep",
        correct: false,
        feedback:
          "Too fast and too deep. At 150/min, there isn't enough time for the chest to refill with blood. Stick to 100-120.",
      },
    ],
    proTip:
      "The song 'Stayin' Alive' by the Bee Gees is about 100-110 BPM—perfect for timing your compressions!",
  },
  {
    id: "aed-arrives",
    title: "Step 5: AED Arrives",
    description:
      "The AED arrives. A bystander is doing compressions. You take over the AED operation.",
    question: "What is your next step with the AED?",
    options: [
      {
        label: "Stop CPR, turn on AED, attach pads, follow prompts",
        correct: true,
        feedback:
          "Correct! Turn it on, attach the pads (bare chest), let it analyze, and follow the voice prompts. Minimize interruptions.",
      },
      {
        label: "Keep doing CPR—don't stop until paramedics arrive",
        correct: false,
        feedback:
          "Early defibrillation is crucial. The AED can shock a shockable rhythm, which CPR alone cannot fix. Use it!",
      },
      {
        label: "Wait for paramedics to use the AED",
        correct: false,
        feedback:
          "Every minute without defibrillation, survival drops 7-10%. Don't wait—early defib saves lives.",
      },
    ],
    proTip:
      "AEDs are designed for anyone to use. They give clear voice instructions and won't shock unless it's needed. Trust the technology!",
  },
];

// Quiz questions at the end
const quizQuestions = [
  {
    id: "quiz-1",
    question: "What is the correct compression rate for adult CPR?",
    options: ["60-80 per minute", "80-100 per minute", "100-120 per minute", "120-140 per minute"],
    correctIndex: 2,
    explanation: "The AHA recommends 100-120 compressions per minute for adult CPR.",
  },
  {
    id: "quiz-2",
    question: "How deep should compressions be for an adult?",
    options: ["At least 1 inch", "At least 2 inches", "At least 3 inches", "As deep as possible"],
    correctIndex: 1,
    explanation: "Adult compressions should be at least 2 inches (5 cm) deep, but not more than 2.4 inches.",
  },
  {
    id: "quiz-3",
    question: "What are agonal respirations a sign of?",
    options: [
      "Normal recovery breathing",
      "Adequate ventilation",
      "Cardiac arrest—start CPR",
      "Allergic reaction",
    ],
    correctIndex: 2,
    explanation:
      "Agonal gasps are NOT adequate breathing. They are a sign of cardiac arrest and the patient needs immediate CPR.",
  },
];

const CardiacArrestSim = () => {
  const navigate = useNavigate();
  const { user, profile } = useAuth();
  const { incrementProgress, getProgress } = useProgress();

  // Simulation state
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [stepResults, setStepResults] = useState<boolean[]>([]);
  const [simCompleted, setSimCompleted] = useState(false);

  // Quiz state
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<(number | null)[]>(
    new Array(quizQuestions.length).fill(null)
  );
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  // Calculate overall progress
  const currentProgress = getProgress("cardiac_arrest_sim_progress");
  const isLoggedIn = !!user;

  const handleAnswerSelect = (optionLabel: string) => {
    if (showFeedback) return;
    setSelectedAnswer(optionLabel);
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) return;

    const step = scenarioSteps[currentStep];
    const selectedOption = step.options.find((opt) => opt.label === selectedAnswer);
    const isCorrect = selectedOption?.correct || false;

    setStepResults([...stepResults, isCorrect]);
    setShowFeedback(true);

    // Update progress if logged in (20% per correct scenario step)
    if (isCorrect && isLoggedIn && currentProgress < 100) {
      incrementProgress("cardiac_arrest_sim_progress", 10);
    }
  };

  const handleNextStep = () => {
    if (currentStep < scenarioSteps.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setSimCompleted(true);
    }
  };

  const handleQuizAnswer = (questionIndex: number, answerIndex: number) => {
    if (quizSubmitted) return;
    const newAnswers = [...quizAnswers];
    newAnswers[questionIndex] = answerIndex;
    setQuizAnswers(newAnswers);
  };

  const handleSubmitQuiz = () => {
    const correctCount = quizQuestions.reduce((count, q, idx) => {
      return count + (quizAnswers[idx] === q.correctIndex ? 1 : 0);
    }, 0);

    setQuizScore(correctCount);
    setQuizSubmitted(true);

    // If passed (>= 80%), add progress
    const passThreshold = Math.ceil(quizQuestions.length * 0.8);
    if (correctCount >= passThreshold && isLoggedIn) {
      incrementProgress("cardiac_arrest_sim_progress", 30);
    }
  };

  const handleRetryQuiz = () => {
    setQuizAnswers(new Array(quizQuestions.length).fill(null));
    setQuizSubmitted(false);
    setQuizScore(0);
  };

  const progressPercent = Math.round(
    ((stepResults.length + (quizSubmitted ? 1 : 0)) / (scenarioSteps.length + 1)) * 100
  );

  const step = scenarioSteps[currentStep];
  const selectedOption = step?.options.find((opt) => opt.label === selectedAnswer);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6 sm:py-8 sm:px-6 lg:px-8 max-w-3xl">
        {/* Disclaimer */}
        <DisclaimerBanner variant="top" />

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/simulations" className="hover:text-foreground flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              Back to Simulations
            </Link>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
              <Heart className="h-7 w-7" />
            </div>
            <div>
              <Badge variant="outline" className="mb-1">
                BLS Scenario
              </Badge>
              <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Cardiac Arrest Walkthrough
              </h1>
            </div>
          </div>

          <p className="text-muted-foreground mb-4">
            Let's save a life step by step. This guided scenario walks you through a BLS cardiac
            arrest response with explanations at each decision point.
          </p>

          {/* Progress */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">Progress</span>
            <Progress value={progressPercent} className="flex-1 h-2" />
            <span className="text-sm font-medium">{progressPercent}%</span>
          </div>

          {!isLoggedIn && (
            <div className="mt-4 p-3 rounded-lg bg-warning/10 border border-warning/20 text-warning text-sm flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 shrink-0" />
              <span>
                <Link to="/auth" className="font-medium underline">
                  Sign in
                </Link>{" "}
                to save your progress!
              </span>
            </div>
          )}
        </header>

        {/* Scenario Steps */}
        {!simCompleted && !quizStarted && (
          <Card className="mb-8">
            <CardContent className="p-6">
              {/* Step indicator */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Clock className="h-4 w-4" />
                <span>
                  Step {currentStep + 1} of {scenarioSteps.length}
                </span>
              </div>

              <h2 className="text-xl font-bold text-foreground mb-4">{step.title}</h2>

              {/* Scenario description */}
              <div className="bg-secondary/50 rounded-lg p-4 mb-6">
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>

              {/* Question */}
              <p className="font-semibold text-foreground mb-4">{step.question}</p>

              {/* Options */}
              <RadioGroup
                value={selectedAnswer || ""}
                className="space-y-3"
              >
                {step.options.map((option, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleAnswerSelect(option.label)}
                    className={cn(
                      "flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-all",
                      selectedAnswer === option.label
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50",
                      showFeedback && option.correct && "border-success bg-success/10",
                      showFeedback &&
                        selectedAnswer === option.label &&
                        !option.correct &&
                        "border-destructive bg-destructive/10"
                    )}
                  >
                    <RadioGroupItem
                      value={option.label}
                      id={`option-${idx}`}
                      disabled={showFeedback}
                    />
                    <Label
                      htmlFor={`option-${idx}`}
                      className="flex-1 cursor-pointer text-foreground"
                    >
                      {option.label}
                    </Label>
                    {showFeedback && option.correct && (
                      <CheckCircle2 className="h-5 w-5 text-success shrink-0" />
                    )}
                    {showFeedback && selectedAnswer === option.label && !option.correct && (
                      <XCircle className="h-5 w-5 text-destructive shrink-0" />
                    )}
                  </div>
                ))}
              </RadioGroup>

              {/* Feedback */}
              {showFeedback && selectedOption && (
                <div
                  className={cn(
                    "mt-6 p-4 rounded-lg",
                    selectedOption.correct
                      ? "bg-success/10 border border-success/20"
                      : "bg-destructive/10 border border-destructive/20"
                  )}
                >
                  <p
                    className={cn(
                      "font-medium mb-2",
                      selectedOption.correct ? "text-success" : "text-destructive"
                    )}
                  >
                    {selectedOption.correct ? "Correct!" : "Not quite..."}
                  </p>
                  <p className="text-muted-foreground">{selectedOption.feedback}</p>
                </div>
              )}

              {/* Pro Tip */}
              {showFeedback && step.proTip && (
                <div className="mt-4">
                  <TopicCallout type="proTip">{step.proTip}</TopicCallout>
                </div>
              )}

              {/* Actions */}
              <div className="mt-6 flex gap-3">
                {!showFeedback ? (
                  <Button onClick={handleSubmitAnswer} disabled={!selectedAnswer}>
                    Check Answer
                  </Button>
                ) : (
                  <Button onClick={handleNextStep} className="gap-2">
                    {currentStep < scenarioSteps.length - 1 ? (
                      <>
                        Next Step
                        <ArrowRight className="h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Continue to Quiz
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Simulation Complete - Show Quiz */}
        {simCompleted && !quizStarted && (
          <Card className="mb-8">
            <CardContent className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Scenario Complete!</h2>
              <p className="text-muted-foreground mb-6">
                You made it through the cardiac arrest walkthrough. Now let's test your knowledge
                with a quick quiz.
              </p>
              <Button onClick={() => setQuizStarted(true)} className="gap-2">
                <Play className="h-4 w-4" />
                Start Knowledge Check
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Quiz Section */}
        {quizStarted && !quizSubmitted && (
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-foreground mb-6">Knowledge Check</h2>
              <p className="text-muted-foreground mb-6">
                Answer at least {Math.ceil(quizQuestions.length * 0.8)} of {quizQuestions.length}{" "}
                correctly to pass.
              </p>

              <div className="space-y-8">
                {quizQuestions.map((q, qIdx) => (
                  <div key={q.id} className="border-b border-border pb-6 last:border-0">
                    <p className="font-semibold text-foreground mb-4">
                      {qIdx + 1}. {q.question}
                    </p>
                    <RadioGroup
                      value={quizAnswers[qIdx]?.toString() || ""}
                      onValueChange={(val) => handleQuizAnswer(qIdx, parseInt(val))}
                      className="space-y-2"
                    >
                      {q.options.map((opt, oIdx) => (
                        <div
                          key={oIdx}
                          className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/50 cursor-pointer"
                        >
                          <RadioGroupItem value={oIdx.toString()} id={`q${qIdx}-o${oIdx}`} />
                          <Label htmlFor={`q${qIdx}-o${oIdx}`} className="flex-1 cursor-pointer">
                            {opt}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                ))}
              </div>

              <Button
                onClick={handleSubmitQuiz}
                disabled={quizAnswers.some((a) => a === null)}
                className="mt-6"
              >
                Submit Quiz
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Quiz Results */}
        {quizSubmitted && (
          <Card className="mb-8">
            <CardContent className="p-6">
              {quizScore >= Math.ceil(quizQuestions.length * 0.8) ? (
                <div className="text-center mb-6">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success">
                    <Award className="h-8 w-8" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Excellent Work!</h2>
                  <p className="text-muted-foreground">
                    You scored {quizScore}/{quizQuestions.length}. You've mastered the basics of BLS
                    cardiac arrest response!
                  </p>
                </div>
              ) : (
                <div className="text-center mb-6">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-warning/10 text-warning">
                    <RefreshCw className="h-8 w-8" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Almost There!</h2>
                  <p className="text-muted-foreground">
                    You scored {quizScore}/{quizQuestions.length}. Review the explanations below and
                    try again.
                  </p>
                </div>
              )}

              {/* Show explanations */}
              <div className="space-y-4 mb-6">
                {quizQuestions.map((q, qIdx) => {
                  const isCorrect = quizAnswers[qIdx] === q.correctIndex;
                  return (
                    <div
                      key={q.id}
                      className={cn(
                        "p-4 rounded-lg border",
                        isCorrect ? "border-success/30 bg-success/5" : "border-destructive/30 bg-destructive/5"
                      )}
                    >
                      <div className="flex items-start gap-2 mb-2">
                        {isCorrect ? (
                          <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                        )}
                        <p className="font-medium text-foreground">{q.question}</p>
                      </div>
                      <p className="text-sm text-muted-foreground ml-7">
                        <span className="font-medium">Correct answer:</span> {q.options[q.correctIndex]}
                      </p>
                      <p className="text-sm text-muted-foreground ml-7 mt-1">{q.explanation}</p>
                    </div>
                  );
                })}
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                {quizScore < Math.ceil(quizQuestions.length * 0.8) ? (
                  <Button onClick={handleRetryQuiz} className="gap-2">
                    <RefreshCw className="h-4 w-4" />
                    Try Again
                  </Button>
                ) : null}
                <Button variant="outline" asChild>
                  <Link to="/dashboard">Back to Dashboard</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Summary Accordion (always visible after starting) */}
        {(simCompleted || quizStarted) && (
          <Accordion type="single" collapsible className="mb-8">
            <AccordionItem value="summary">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  Cardiac Arrest Quick Reference
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Chain of Survival</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Early recognition and 911 activation</li>
                      <li>Early high-quality CPR</li>
                      <li>Early defibrillation</li>
                      <li>Advanced life support</li>
                      <li>Post-cardiac arrest care</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">CPR Quality Metrics</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Rate: 100-120 compressions/minute</li>
                      <li>Depth: At least 2 inches (5 cm) for adults</li>
                      <li>Allow full chest recoil between compressions</li>
                      <li>Minimize interruptions (&lt;10 seconds)</li>
                      <li>Avoid excessive ventilation</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}

        {/* Disclaimer */}
        <DisclaimerBanner variant="bottom" />
      </div>
    </Layout>
  );
};

export default CardiacArrestSim;
