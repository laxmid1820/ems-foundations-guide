import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Trophy, Sparkles, TrendingUp } from "lucide-react";
import type { CategoryLevel } from "@/data/topicsContent";

interface LevelProgressionButtonProps {
  currentLevel: CategoryLevel;
  topicSlug: string;
  variant?: "card" | "inline";
}

const progressionMap: Record<string, {
  nextPath: string | null;
  nextLabel: string;
  nextLabelShort: string;
  message: string;
  isComplete: boolean;
  prevPath?: string | null;
  prevLabel?: string;
  prevMessage?: string;
}> = {
  "emt-foundations/anatomy-and-physiology-basics": {
    nextPath: "/topics/aemt-foundations/anatomy-and-physiology-aemt/cardiac-output-and-hemodynamics",
    nextLabel: "AEMT Anatomy & Physiology",
    nextLabelShort: "AEMT A&P",
    message: "Ready to go deeper? Continue your journey with AEMT-level physiology.",
    isComplete: false,
    prevPath: null,
  },
  "aemt-foundations/anatomy-and-physiology-aemt": {
    nextPath: "/topics/paramedic-foundations/anatomy-and-physiology-paramedic/cellular-metabolism-and-atp",
    nextLabel: "Paramedic Anatomy & Physiology",
    nextLabelShort: "Paramedic A&P",
    message: "Ready for paramedic-level thinking? Take on cellular metabolism, acid-base, and more.",
    isComplete: false,
    prevPath: "/topics/emt-foundations/anatomy-and-physiology-basics",
    prevLabel: "EMT Level",
    prevMessage: "The foundation never gets old — revisit where it all clicked.",
  },
  "paramedic-foundations/anatomy-and-physiology-paramedic": {
    nextPath: null,
    nextLabel: "",
    nextLabelShort: "",
    message: "Congratulations! You've mastered anatomy and physiology across all three certification levels!",
    isComplete: true,
    prevPath: "/topics/aemt-foundations/anatomy-and-physiology-aemt/cardiac-output-and-hemodynamics",
    prevLabel: "AEMT Level",
    prevMessage: "Even cellular metabolism started with basic anatomy — honor the journey.",
  },
  // Pharmacology progression
  "emt-foundations/pharmacology-emt": {
    nextPath: "/topics/aemt-foundations/pharmacology-aemt/pharmacokinetics-basics",
    nextLabel: "AEMT Pharmacology",
    nextLabelShort: "AEMT Pharm",
    message: "Ready to expand your medication knowledge? Continue to AEMT Pharmacology.",
    isComplete: false,
    prevPath: null,
  },
  "aemt-foundations/pharmacology-aemt": {
    nextPath: "/topics/paramedic-foundations/advanced-pharmacology/pharmacodynamics",
    nextLabel: "Paramedic Advanced Pharmacology",
    nextLabelShort: "Paramedic Pharm",
    message: "Ready for paramedic-level pharmacology? Dive into drug classes, mechanisms, and protocols.",
    isComplete: false,
    prevPath: "/topics/emt-foundations/pharmacology-emt",
    prevLabel: "EMT Level",
    prevMessage: "Six rights, one big heart — the EMT meds still matter.",
  },
  "paramedic-foundations/advanced-pharmacology": {
    nextPath: null,
    nextLabel: "",
    nextLabelShort: "",
    message: "Congratulations! You've mastered pharmacology across all three certification levels!",
    isComplete: true,
    prevPath: "/topics/aemt-foundations/pharmacology-aemt/pharmacokinetics-basics",
    prevLabel: "AEMT Level",
    prevMessage: "Before you push RSI drugs, make sure the AEMT layer is solid.",
  },
  // Pathophysiology progression
  "emt-foundations/pathophysiology-introduction": {
    nextPath: "/topics/aemt-foundations/pathophysiology-aemt/cellular-adaptation-and-stress",
    nextLabel: "AEMT Pathophysiology",
    nextLabelShort: "AEMT Patho",
    message: "Ready to understand cellular adaptation and systemic responses? Continue to AEMT Pathophysiology.",
    isComplete: false,
    prevPath: null,
  },
  "aemt-foundations/pathophysiology-aemt": {
    nextPath: "/topics/paramedic-foundations/pathophysiology-deep-dive/cellular-metabolism-under-stress",
    nextLabel: "Paramedic Pathophysiology Deep Dive",
    nextLabelShort: "Paramedic Patho",
    message: "Ready for acid-base interpretation and SIRS-sepsis-MODS? Continue to Paramedic Pathophysiology.",
    isComplete: false,
    prevPath: "/topics/emt-foundations/pathophysiology-introduction",
    prevLabel: "EMT Level",
    prevMessage: "Cellular stress starts with understanding the normal — circle back anytime.",
  },
  "paramedic-foundations/pathophysiology-deep-dive": {
    nextPath: null,
    nextLabel: "",
    nextLabelShort: "",
    message: "Congratulations! You've mastered pathophysiology across all three certification levels!",
    isComplete: true,
    prevPath: "/topics/aemt-foundations/pathophysiology-aemt/cellular-adaptation-and-stress",
    prevLabel: "AEMT Level",
    prevMessage: "SIRS and sepsis make more sense when you've nailed the AEMT basics.",
  },
  // COPD vs CHF progression
  "emt-foundations/copd-vs-chf-emt": {
    nextPath: "/topics/aemt-foundations/copd-vs-chf-aemt/pathophysiology-copd-chf",
    nextLabel: "AEMT COPD vs CHF",
    nextLabelShort: "AEMT COPD/CHF",
    message: "Ready to explore the pathophysiology behind these conditions? Continue to AEMT COPD vs CHF.",
    isComplete: false,
    prevPath: null,
  },
  "aemt-foundations/copd-vs-chf-aemt": {
    nextPath: "/topics/paramedic-foundations/copd-vs-chf-paramedic/advanced-pathophysiology-copd-chf",
    nextLabel: "Paramedic COPD vs CHF",
    nextLabelShort: "Paramedic COPD/CHF",
    message: "Ready for pharmacology integration and BiPAP strategies? Continue to Paramedic COPD vs CHF.",
    isComplete: false,
    prevPath: "/topics/emt-foundations/copd-vs-chf-emt",
    prevLabel: "EMT Level",
    prevMessage: "Sometimes the basics hit different the second time around.",
  },
  "paramedic-foundations/copd-vs-chf-paramedic": {
    nextPath: null,
    nextLabel: "",
    nextLabelShort: "",
    message: "Congratulations! You've mastered COPD vs CHF differentiation and management across all three certification levels!",
    isComplete: true,
    prevPath: "/topics/aemt-foundations/copd-vs-chf-aemt/pathophysiology-copd-chf",
    prevLabel: "AEMT Level",
    prevMessage: "Even seasoned medics circle back — wisdom is knowing what you forgot.",
  },
  // Advanced Airway progression
  "aemt-foundations/advanced-airway-management": {
    nextPath: "/topics/paramedic-foundations/advanced-airway-intubation/the-definitive-airway",
    nextLabel: "Paramedic Advanced Airway & Intubation",
    nextLabelShort: "Paramedic Airway",
    message: "Ready for endotracheal intubation and RSI? Continue to Paramedic Advanced Airway.",
    isComplete: false,
    prevPath: null,
  },
  "paramedic-foundations/advanced-airway-intubation": {
    nextPath: null,
    nextLabel: "",
    nextLabelShort: "",
    message: "Congratulations! You've mastered airway management across all three certification levels!",
    isComplete: true,
    prevPath: "/topics/aemt-foundations/advanced-airway-management",
    prevLabel: "AEMT Level",
    prevMessage: "Supraglottics before ET tubes — the AEMT airway is always worth a second look.",
  },
  // Cardiac Monitoring → 12-Lead ECG progression
  "aemt-foundations/cardiac-monitoring-basics": {
    nextPath: "/topics/paramedic-foundations/12-lead-ecg-interpretation/from-3-lead-to-12-lead",
    nextLabel: "Paramedic 12-Lead ECG Interpretation",
    nextLabelShort: "Paramedic 12-Lead",
    message: "Ready to master 12-lead ECG interpretation? Continue to Paramedic-level cardiac diagnostics.",
    isComplete: false,
    prevPath: null,
  },
  "paramedic-foundations/12-lead-ecg-interpretation": {
    nextPath: null,
    nextLabel: "",
    nextLabelShort: "",
    message: "Congratulations! You've mastered cardiac monitoring and ECG interpretation across all levels!",
    isComplete: true,
    prevPath: "/topics/aemt-foundations/cardiac-monitoring-basics",
    prevLabel: "AEMT Level",
    prevMessage: "Before you interpret ST elevation, make sure your 3-lead game is tight.",
  },
  // Respiratory Emergencies progression
  "emt-foundations/respiratory-emergencies-emt": {
    nextPath: "/topics/aemt-foundations/respiratory-emergencies-aemt/advanced-assessment-techniques",
    nextLabel: "AEMT Respiratory Emergencies",
    nextLabelShort: "AEMT Resp",
    message: "Ready to add CPAP and advanced assessment to your toolkit? Continue to AEMT Respiratory Emergencies.",
    isComplete: false,
    prevPath: null,
  },
  "aemt-foundations/respiratory-emergencies-aemt": {
    nextPath: "/topics/paramedic-foundations/respiratory-emergencies-paramedic/respiratory-pathophysiology",
    nextLabel: "Paramedic Respiratory Emergencies",
    nextLabelShort: "Paramedic Resp",
    message: "Ready for ventilators and advanced airway decisions? Continue to Paramedic Respiratory Emergencies.",
    isComplete: false,
    prevPath: "/topics/emt-foundations/respiratory-emergencies-emt",
    prevLabel: "EMT Level",
    prevMessage: "CPAP is powerful, but the basics of O2 therapy got you here.",
  },
  "paramedic-foundations/respiratory-emergencies-paramedic": {
    nextPath: null,
    nextLabel: "",
    nextLabelShort: "",
    message: "Congratulations! You've mastered respiratory emergencies across all three certification levels!",
    isComplete: true,
    prevPath: "/topics/aemt-foundations/respiratory-emergencies-aemt/advanced-assessment-techniques",
    prevLabel: "AEMT Level",
    prevMessage: "Ventilators are great — but do you still remember when to reach for CPAP first?",
  },
  // Patient Assessment progression
  "emt-foundations/patient-assessment-emt": {
    nextPath: "/topics/aemt-foundations/patient-assessment-aemt/advanced-vital-signs",
    nextLabel: "AEMT Patient Assessment",
    nextLabelShort: "AEMT Assessment",
    message: "Ready to add advanced monitoring to your assessment toolkit? Continue to AEMT Patient Assessment.",
    isComplete: false,
    prevPath: null,
  },
  "aemt-foundations/patient-assessment-aemt": {
    nextPath: "/topics/paramedic-foundations/patient-assessment-paramedic/differential-diagnosis",
    nextLabel: "Paramedic Patient Assessment",
    nextLabelShort: "Paramedic Assessment",
    message: "Ready for clinical reasoning and differential diagnosis? Continue to Paramedic Patient Assessment.",
    isComplete: false,
    prevPath: "/topics/emt-foundations/patient-assessment-emt",
    prevLabel: "EMT Level",
    prevMessage: "Advanced vitals mean nothing without a solid primary survey.",
  },
  "paramedic-foundations/patient-assessment-paramedic": {
    nextPath: null,
    nextLabel: "",
    nextLabelShort: "",
    message: "Congratulations! You've mastered patient assessment across all three certification levels!",
    isComplete: true,
    prevPath: "/topics/aemt-foundations/patient-assessment-aemt/advanced-vital-signs",
    prevLabel: "AEMT Level",
    prevMessage: "Differential diagnosis starts with the data you learned to gather at AEMT.",
  },
  // Shock Management progression
  "emt-foundations/shock-management-emt": {
    nextPath: "/topics/aemt-foundations/shock-management/shock-physiology-deep-dive",
    nextLabel: "AEMT Shock Management",
    nextLabelShort: "AEMT Shock",
    message: "Ready to add IV resuscitation to your shock toolkit? Continue to AEMT Shock Management.",
    isComplete: false,
    prevPath: null,
  },
  "aemt-foundations/shock-management": {
    nextPath: "/topics/paramedic-foundations/shock-management-paramedic/advanced-shock-pathophysiology",
    nextLabel: "Paramedic Shock Management",
    nextLabelShort: "Paramedic Shock",
    message: "Ready for vasopressors and advanced hemodynamics? Continue to Paramedic Shock Management.",
    isComplete: false,
    prevPath: "/topics/emt-foundations/shock-management-emt",
    prevLabel: "EMT Level",
    prevMessage: "IVs are just tools — the EMT recognition skills are what save lives.",
  },
  "paramedic-foundations/shock-management-paramedic": {
    nextPath: null,
    nextLabel: "",
    nextLabelShort: "",
    message: "Congratulations! You've mastered shock management across all three certification levels!",
    isComplete: true,
    prevPath: "/topics/aemt-foundations/shock-management/shock-physiology-deep-dive",
    prevLabel: "AEMT Level",
    prevMessage: "Vasopressors won't help if you missed the early signs — revisit AEMT shock.",
  },
  // Asthma vs Anaphylaxis progression
  "emt-foundations/asthma-vs-anaphylaxis-emt": {
    nextPath: "/topics/aemt-foundations/asthma-vs-anaphylaxis-aemt",
    nextLabel: "AEMT Asthma vs Anaphylaxis",
    nextLabelShort: "AEMT Asthma/Anaph",
    message: "Ready to explore the pathophysiology behind these conditions? Continue to AEMT Asthma vs Anaphylaxis.",
    isComplete: false,
    prevPath: null,
  },
  "aemt-foundations/asthma-vs-anaphylaxis-aemt": {
    nextPath: "/topics/paramedic-foundations/asthma-vs-anaphylaxis-paramedic",
    nextLabel: "Paramedic Asthma vs Anaphylaxis",
    nextLabelShort: "Paramedic Asthma/Anaph",
    message: "Ready for advanced pharmacology and airway management strategies? Continue to Paramedic Asthma vs Anaphylaxis.",
    isComplete: false,
    prevPath: "/topics/emt-foundations/asthma-vs-anaphylaxis-emt",
    prevLabel: "EMT Level",
    prevMessage: "Back to where it all started — the fundamentals never get old.",
  },
  "paramedic-foundations/asthma-vs-anaphylaxis-paramedic": {
    nextPath: null,
    nextLabel: "",
    nextLabelShort: "",
    message: "Congratulations! You've mastered Asthma vs Anaphylaxis differentiation and management across all three certification levels!",
    isComplete: true,
    prevPath: "/topics/aemt-foundations/asthma-vs-anaphylaxis-aemt",
    prevLabel: "AEMT Level",
    prevMessage: "A quick detour to AEMT? Call it a tactical review.",
  },
  // Pulmonary Edema vs Pneumonia vs Pleural Effusion progression
  "emt-foundations/pulmonary-edema-vs-pneumonia-vs-effusion-emt": {
    nextPath: "/topics/aemt-foundations/pulmonary-edema-vs-pneumonia-vs-effusion-aemt",
    nextLabel: "AEMT Pulmonary Edema vs Pneumonia vs Effusion",
    nextLabelShort: "AEMT PE/PNA/Eff",
    message: "Ready to explore the pathophysiology behind these conditions? Continue to AEMT-level differentiation.",
    isComplete: false,
    prevPath: null,
  },
  "aemt-foundations/pulmonary-edema-vs-pneumonia-vs-effusion-aemt": {
    nextPath: "/topics/paramedic-foundations/pulmonary-edema-vs-pneumonia-vs-effusion-paramedic",
    nextLabel: "Paramedic Pulmonary Edema vs Pneumonia vs Effusion",
    nextLabelShort: "Paramedic PE/PNA/Eff",
    message: "Ready for pharmacology integration and ventilation strategies? Continue to Paramedic-level mastery.",
    isComplete: false,
    prevPath: "/topics/emt-foundations/pulmonary-edema-vs-pneumonia-vs-effusion-emt",
    prevLabel: "EMT Level",
    prevMessage: "Revisiting EMT basics? Smart move — strong roots, strong clinician.",
  },
  "paramedic-foundations/pulmonary-edema-vs-pneumonia-vs-effusion-paramedic": {
    nextPath: null,
    nextLabel: "",
    nextLabelShort: "",
    message: "Congratulations! You've mastered Pulmonary Edema vs Pneumonia vs Pleural Effusion differentiation and management across all three certification levels!",
    isComplete: true,
    prevPath: "/topics/aemt-foundations/pulmonary-edema-vs-pneumonia-vs-effusion-aemt",
    prevLabel: "AEMT Level",
    prevMessage: "Need to double-check the AEMT layer? Even experts audit their knowledge.",
  }
};

export function LevelProgressionButton({ currentLevel, topicSlug, variant = "card" }: LevelProgressionButtonProps) {
  const key = `${currentLevel}-foundations/${topicSlug}`;
  const progression = progressionMap[key];

  if (!progression) return null;

  // For inline variant, don't show anything if complete (paramedic level)
  if (variant === "inline" && progression.isComplete) return null;

  // Inline variant - compact button
  if (variant === "inline") {
    return (
      <Button 
        asChild 
        variant="outline" 
        size="sm"
        className="gap-1.5 text-primary border-primary/30 hover:bg-primary/10 hover:border-primary/50"
      >
        <Link to={progression.nextPath!}>
          <TrendingUp className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Level Up:</span> {progression.nextLabelShort}
        </Link>
      </Button>
    );
  }

  // Witty return button helper
  const wittyReturnButton = progression.prevPath ? (
    <div className="mt-3 flex justify-center">
      <Button asChild variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
        <Link to={progression.prevPath}>
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to {progression.prevLabel} — "{progression.prevMessage}"
        </Link>
      </Button>
    </div>
  ) : null;

  // Card variant - completion celebration (only for paramedic)
  if (progression.isComplete) {
    return (
      <>
        <div className="mt-8 p-6 rounded-lg bg-gradient-to-r from-purple-500/10 via-primary/10 to-success/10 border border-purple-500/20">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-success to-primary text-primary-foreground">
              <Trophy className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg text-foreground mb-1">
                🎉 Complete Mastery Achieved!
              </h3>
              <p className="text-muted-foreground">
                {progression.message}
              </p>
            </div>
          </div>
        </div>
        {wittyReturnButton}
      </>
    );
  }

  // Card variant - level up prompt
  return (
    <>
      <div className="mt-8 p-5 sm:p-6 rounded-lg bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-start gap-3 flex-1">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">
                Level Up Available
              </h3>
              <p className="text-sm text-muted-foreground">
                {progression.message}
              </p>
            </div>
          </div>
          <Button asChild className="shrink-0">
            <Link to={progression.nextPath!}>
              Continue to {progression.nextLabel}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
      {wittyReturnButton}
    </>
  );
}
