export interface QuizQuestion {
  id: string;
  topicId: string;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const quizQuestions: QuizQuestion[] = [
  // Chapter 1: What is Epidemiology?
  {
    id: "q1-1-1",
    topicId: "1-1",
    question: "What is the primary focus of epidemiology?",
    options: {
      A: "Treatment of individual patients in clinical settings",
      B: "Study of disease distribution and determinants in populations",
      C: "Development of new pharmaceutical drugs",
      D: "Management of hospital operations"
    },
    correctAnswer: "B",
    explanation: "Epidemiology focuses on studying the distribution and determinants of health-related states in specified populations, forming the foundation of public health.",
    difficulty: "Easy"
  },
  {
    id: "q1-1-2",
    topicId: "1-1",
    question: "Which of the following is NOT a core component of epidemiology?",
    options: {
      A: "Distribution of disease",
      B: "Determinants of health events",
      C: "Surgical procedures",
      D: "Application to disease control"
    },
    correctAnswer: "C",
    explanation: "Surgical procedures are part of clinical medicine, not epidemiology. Epidemiology focuses on disease distribution, determinants, and applying findings to control health problems.",
    difficulty: "Medium"
  },
  {
    id: "q1-2-1",
    topicId: "1-2",
    question: "John Snow's investigation of cholera in London (1854) is famous for:",
    options: {
      A: "Discovering the cholera vaccine",
      B: "Identifying contaminated water as the source through mapping cases",
      C: "Developing the first antibiotic",
      D: "Creating the microscope to see bacteria"
    },
    correctAnswer: "B",
    explanation: "John Snow used epidemiological methods including mapping cases to identify the Broad Street pump as the source of cholera, demonstrating waterborne transmission before the germ theory was established.",
    difficulty: "Easy"
  },
  {
    id: "q1-2-2",
    topicId: "1-2",
    question: "The historical shift in epidemiology from infectious to chronic diseases occurred primarily because:",
    options: {
      A: "Infectious diseases were completely eradicated",
      B: "Chronic diseases became more prevalent as populations aged and infectious disease mortality declined",
      C: "Scientists lost interest in infectious diseases",
      D: "Chronic diseases are easier to study"
    },
    correctAnswer: "B",
    explanation: "As public health measures and medical advances reduced infectious disease mortality, populations lived longer and chronic diseases became the dominant health burden, shifting epidemiological focus.",
    difficulty: "Medium"
  },
  {
    id: "q1-3-1",
    topicId: "1-3",
    question: "Which application of epidemiology involves investigating a sudden increase in disease cases?",
    options: {
      A: "Health policy development",
      B: "Outbreak investigation",
      C: "Clinical trials",
      D: "Disease surveillance"
    },
    correctAnswer: "B",
    explanation: "Outbreak investigation is the epidemiological application focused on investigating and responding to sudden increases in disease occurrence to identify the source and control transmission.",
    difficulty: "Easy"
  },
  {
    id: "q1-3-2",
    topicId: "1-3",
    question: "Disease surveillance in epidemiology serves to:",
    options: {
      A: "Only track infectious disease outbreaks",
      B: "Continuously monitor disease patterns to guide public health action",
      C: "Replace the need for clinical diagnosis",
      D: "Eliminate the need for health policy"
    },
    correctAnswer: "B",
    explanation: "Disease surveillance involves ongoing systematic monitoring of disease occurrence and distribution to detect trends, guide interventions, and evaluate public health programs.",
    difficulty: "Medium"
  },

  // Chapter 2: Measuring Health and Disease
  {
    id: "q2-1-1",
    topicId: "2-1",
    question: "Incidence measures:",
    options: {
      A: "Total cases of disease at a specific time",
      B: "New cases of disease during a specified period",
      C: "Deaths from a disease",
      D: "Duration of disease"
    },
    correctAnswer: "B",
    explanation: "Incidence measures the number of new cases occurring in a population during a specified time period, reflecting disease risk.",
    difficulty: "Easy"
  },
  {
    id: "q2-1-2",
    topicId: "2-1",
    question: "If a disease has high incidence but low prevalence, this suggests:",
    options: {
      A: "High mortality or short disease duration",
      B: "Low mortality and long disease duration",
      C: "The disease is not serious",
      D: "Measurement error occurred"
    },
    correctAnswer: "A",
    explanation: "High incidence with low prevalence indicates people are developing the disease but not living long with it, suggesting either high mortality or rapid recovery (short duration).",
    difficulty: "Hard"
  },
  {
    id: "q2-1-3",
    topicId: "2-1",
    question: "The relationship between prevalence, incidence, and duration is approximately:",
    options: {
      A: "Prevalence = Incidence + Duration",
      B: "Prevalence = Incidence × Duration",
      C: "Prevalence = Incidence / Duration",
      D: "Prevalence = Duration / Incidence"
    },
    correctAnswer: "B",
    explanation: "Prevalence is approximately equal to incidence multiplied by average disease duration (P ≈ I × D) when the disease is in steady state.",
    difficulty: "Medium"
  },
  {
    id: "q2-2-1",
    topicId: "2-2",
    question: "Case fatality rate measures:",
    options: {
      A: "Deaths in the total population",
      B: "Proportion of people with a disease who die from it",
      C: "New cases of fatal diseases",
      D: "Years of life lost"
    },
    correctAnswer: "B",
    explanation: "Case fatality rate is the proportion of people diagnosed with a disease who die from that disease, indicating disease severity.",
    difficulty: "Easy"
  },
  {
    id: "q2-2-2",
    topicId: "2-2",
    question: "Why is age-specific mortality rate often more useful than crude death rate?",
    options: {
      A: "It's easier to calculate",
      B: "It accounts for differences in age distribution between populations",
      C: "It includes only adults",
      D: "It measures only preventable deaths"
    },
    correctAnswer: "B",
    explanation: "Age-specific rates account for age distribution differences between populations, allowing fairer comparisons since mortality risk varies greatly with age.",
    difficulty: "Medium"
  },
  {
    id: "q2-3-1",
    topicId: "2-3",
    question: "Attack rate is most commonly used in:",
    options: {
      A: "Chronic disease studies",
      B: "Outbreak investigations",
      C: "Cancer screening programs",
      D: "Mortality statistics"
    },
    correctAnswer: "B",
    explanation: "Attack rate measures the proportion of people who become ill among those exposed during an outbreak, making it particularly useful in outbreak investigations.",
    difficulty: "Easy"
  },
  {
    id: "q2-3-2",
    topicId: "2-3",
    question: "Person-time incidence rates are advantageous because they:",
    options: {
      A: "Are easier to calculate than other rates",
      B: "Account for varying lengths of observation for different individuals",
      C: "Only measure severe diseases",
      D: "Eliminate the need for a denominator"
    },
    correctAnswer: "B",
    explanation: "Person-time rates use person-years or person-months as the denominator, appropriately accounting for individuals followed for different time periods.",
    difficulty: "Medium"
  },
  {
    id: "q2-4-1",
    topicId: "2-4",
    question: "The primary purpose of standardization is to:",
    options: {
      A: "Make all rates equal",
      B: "Remove confounding effects when comparing populations",
      C: "Calculate crude rates",
      D: "Measure disease incidence"
    },
    correctAnswer: "B",
    explanation: "Standardization adjusts rates to remove confounding effects (typically age) to allow valid comparisons between populations with different structures.",
    difficulty: "Easy"
  },
  {
    id: "q2-4-2",
    topicId: "2-4",
    question: "Direct standardization applies:",
    options: {
      A: "Study population's rates to a standard population structure",
      B: "Standard rates to study population structure",
      C: "No adjustment to rates",
      D: "Only to mortality data"
    },
    correctAnswer: "A",
    explanation: "Direct standardization applies the age-specific rates from the study populations to a standard population structure to create comparable summary rates.",
    difficulty: "Medium"
  },

  // Chapter 3: Patterns of Disease
  {
    id: "q3-1-1",
    topicId: "3-1",
    question: "Secular trends in disease refer to:",
    options: {
      A: "Daily variations",
      B: "Long-term changes over years or decades",
      C: "Seasonal patterns",
      D: "Geographic differences"
    },
    correctAnswer: "B",
    explanation: "Secular trends describe long-term changes in disease occurrence over extended periods (years or decades), reflecting major shifts in disease patterns.",
    difficulty: "Easy"
  },
  {
    id: "q3-1-2",
    topicId: "3-1",
    question: "A point source epidemic is characterized by:",
    options: {
      A: "Gradual increase over months",
      B: "Sudden sharp peak followed by rapid decline",
      C: "Multiple waves of cases",
      D: "Constant number of cases over time"
    },
    correctAnswer: "B",
    explanation: "Point source epidemics result from simultaneous exposure of many people, creating a sharp peak and rapid decline on the epidemic curve.",
    difficulty: "Medium"
  },
  {
    id: "q3-1-3",
    topicId: "3-1",
    question: "Seasonal variations in influenza incidence are an example of:",
    options: {
      A: "Secular trend",
      B: "Epidemic pattern",
      C: "Periodic change",
      D: "Random variation"
    },
    correctAnswer: "C",
    explanation: "Influenza's regular seasonal patterns (winter peaks) represent periodic or cyclic changes that recur predictably.",
    difficulty: "Easy"
  },
  {
    id: "q3-2-1",
    topicId: "3-2",
    question: "Disease mapping is useful for:",
    options: {
      A: "Treating individual patients",
      B: "Identifying geographic clusters and potential environmental hazards",
      C: "Determining genetic causes only",
      D: "Calculating mortality rates"
    },
    correctAnswer: "B",
    explanation: "Geographic mapping reveals spatial patterns, clusters, and potential environmental sources of disease, guiding targeted interventions.",
    difficulty: "Easy"
  },
  {
    id: "q3-2-2",
    topicId: "3-2",
    question: "Urban-rural differences in disease patterns may reflect:",
    options: {
      A: "Only population density",
      B: "Differences in environmental exposures, lifestyle, and healthcare access",
      C: "Genetic differences exclusively",
      D: "No meaningful variation"
    },
    correctAnswer: "B",
    explanation: "Urban-rural disease pattern differences arise from multiple factors including environmental exposures, occupational hazards, lifestyle behaviors, and healthcare access variations.",
    difficulty: "Medium"
  },
  {
    id: "q3-3-1",
    topicId: "3-3",
    question: "Age-specific disease patterns are important because they:",
    options: {
      A: "Only affect elderly populations",
      B: "Reveal periods of susceptibility and provide etiologic clues",
      C: "Are irrelevant to disease prevention",
      D: "Only matter for infectious diseases"
    },
    correctAnswer: "B",
    explanation: "Age-specific patterns identify when people are most susceptible, provide clues about disease etiology, and guide targeted prevention strategies.",
    difficulty: "Easy"
  },
  {
    id: "q3-3-2",
    topicId: "3-3",
    question: "Sex differences in disease occurrence may indicate:",
    options: {
      A: "Only hormonal factors",
      B: "Biological factors, behavioral differences, or occupational exposures",
      C: "Measurement error exclusively",
      D: "Random variation"
    },
    correctAnswer: "B",
    explanation: "Sex differences in disease can reflect biological factors (hormones, genetics), behavioral differences (smoking, diet), or differential exposures (occupational hazards).",
    difficulty: "Medium"
  },

  // Chapter 4: Investigating an Epidemic
  {
    id: "q4-1-1",
    topicId: "4-1",
    question: "The first step in investigating an outbreak should be:",
    options: {
      A: "Implementing control measures",
      B: "Confirming the outbreak exists and verifying the diagnosis",
      C: "Conducting laboratory tests",
      D: "Interviewing all cases"
    },
    correctAnswer: "B",
    explanation: "Before investing resources, investigators must confirm an outbreak truly exists (cases exceed expected) and verify the diagnosis is correct.",
    difficulty: "Easy"
  },
  {
    id: "q4-1-2",
    topicId: "4-1",
    question: "Why is establishing a case definition important in outbreak investigation?",
    options: {
      A: "To reduce the number of cases",
      B: "To ensure systematic and consistent case identification",
      C: "To eliminate laboratory confirmation needs",
      D: "To assign blame for the outbreak"
    },
    correctAnswer: "B",
    explanation: "A clear case definition ensures all investigators identify cases systematically and consistently, enabling accurate case counts and pattern recognition.",
    difficulty: "Medium"
  },
  {
    id: "q4-1-3",
    topicId: "4-1",
    question: "Control measures in an outbreak should ideally be implemented:",
    options: {
      A: "Only after the investigation is completely finished",
      B: "As soon as the source is identified, even before hypothesis testing is complete",
      C: "Never, as outbreaks resolve naturally",
      D: "Only if the outbreak affects more than 100 people"
    },
    correctAnswer: "B",
    explanation: "Control measures should be implemented as soon as a likely source is identified to prevent additional cases, even while the investigation continues.",
    difficulty: "Medium"
  },
  {
    id: "q4-2-1",
    topicId: "4-2",
    question: "An epidemic curve with a sharp rise and fall suggests:",
    options: {
      A: "Continuous source exposure",
      B: "Person-to-person transmission",
      C: "Point source exposure",
      D: "No exposure occurred"
    },
    correctAnswer: "C",
    explanation: "A sharp peak followed by rapid decline indicates simultaneous exposure of many people to a single source at one point in time.",
    difficulty: "Easy"
  },
  {
    id: "q4-2-2",
    topicId: "4-2",
    question: "An epidemic curve showing successive waves of increasing size suggests:",
    options: {
      A: "Point source outbreak",
      B: "Propagated outbreak with person-to-person transmission",
      C: "Declining outbreak",
      D: "Laboratory error"
    },
    correctAnswer: "B",
    explanation: "Successive waves reflect person-to-person transmission, with each generation of cases infecting the next, creating multiple peaks.",
    difficulty: "Medium"
  },
  {
    id: "q4-3-1",
    topicId: "4-3",
    question: "A case definition typically includes:",
    options: {
      A: "Only laboratory confirmation",
      B: "Clinical criteria, person, place, and time characteristics",
      C: "Only symptoms",
      D: "Only demographic information"
    },
    correctAnswer: "B",
    explanation: "Comprehensive case definitions include clinical criteria, laboratory findings when available, and restrictions by person, place, and time to identify outbreak-related cases.",
    difficulty: "Easy"
  },
  {
    id: "q4-3-2",
    topicId: "4-3",
    question: "Active surveillance in outbreak investigation means:",
    options: {
      A: "Waiting for cases to be reported",
      B: "Actively searching for cases by contacting healthcare providers and reviewing records",
      C: "Only investigating severe cases",
      D: "Using automated computer systems only"
    },
    correctAnswer: "B",
    explanation: "Active surveillance involves proactively seeking cases through systematic contact with potential sources (hospitals, clinics, labs) rather than relying on passive reporting.",
    difficulty: "Medium"
  },

  // Chapter 5: Study Designs
  {
    id: "q5-1-1",
    topicId: "5-1",
    question: "The key difference between observational and experimental studies is:",
    options: {
      A: "Sample size",
      B: "Researcher controls exposure in experimental but not observational studies",
      C: "Cost",
      D: "Duration"
    },
    correctAnswer: "B",
    explanation: "In experimental studies, researchers assign exposures or interventions; in observational studies, researchers observe without intervening.",
    difficulty: "Easy"
  },
  {
    id: "q5-1-2",
    topicId: "5-1",
    question: "Randomized controlled trials are generally considered superior because:",
    options: {
      A: "They are less expensive",
      B: "They eliminate confounding through randomization",
      C: "They require fewer participants",
      D: "They can be completed quickly"
    },
    correctAnswer: "B",
    explanation: "Randomization in RCTs balances both known and unknown confounders between groups, providing the strongest evidence for causation.",
    difficulty: "Medium"
  },
  {
    id: "q5-2-1",
    topicId: "5-2",
    question: "Cross-sectional studies measure exposure and outcome:",
    options: {
      A: "Sequentially over time",
      B: "Simultaneously at one point in time",
      C: "Only for diseased individuals",
      D: "In the past only"
    },
    correctAnswer: "B",
    explanation: "Cross-sectional studies assess both exposure and outcome at the same time, providing a snapshot of the population.",
    difficulty: "Easy"
  },
  {
    id: "q5-2-2",
    topicId: "5-2",
    question: "A major limitation of cross-sectional studies is:",
    options: {
      A: "They are too expensive",
      B: "They cannot establish temporal sequence between exposure and outcome",
      C: "They require too many subjects",
      D: "They take too long to complete"
    },
    correctAnswer: "B",
    explanation: "Because exposure and outcome are measured simultaneously, cross-sectional studies cannot determine whether exposure preceded disease, limiting causal inference.",
    difficulty: "Medium"
  },
  {
    id: "q5-3-1",
    topicId: "5-3",
    question: "Ecological fallacy refers to:",
    options: {
      A: "Studying only environmental factors",
      B: "Incorrectly assuming associations at group level apply to individuals",
      C: "Measuring individual exposures",
      D: "Random measurement error"
    },
    correctAnswer: "B",
    explanation: "Ecological fallacy occurs when group-level associations are incorrectly assumed to hold at the individual level, a key limitation of ecological studies.",
    difficulty: "Medium"
  },
  {
    id: "q5-3-2",
    topicId: "5-3",
    question: "Ecological studies are useful for:",
    options: {
      A: "Proving causation definitively",
      B: "Generating hypotheses efficiently using existing data",
      C: "Replacing individual-level studies",
      D: "Clinical diagnosis"
    },
    correctAnswer: "B",
    explanation: "Ecological studies efficiently use existing population-level data to generate hypotheses, which should then be tested with individual-level studies.",
    difficulty: "Easy"
  },

  // Chapter 6: Cohort Studies
  {
    id: "q6-1-1",
    topicId: "6-1",
    question: "In a cohort study, participants are selected based on:",
    options: {
      A: "Disease status",
      B: "Exposure status",
      C: "Age only",
      D: "Geographic location only"
    },
    correctAnswer: "B",
    explanation: "Cohort studies select participants based on exposure status (exposed vs. unexposed) and follow them to compare disease incidence.",
    difficulty: "Easy"
  },
  {
    id: "q6-1-2",
    topicId: "6-1",
    question: "A prospective cohort study:",
    options: {
      A: "Uses only historical records",
      B: "Follows participants forward from the present into the future",
      C: "Works backward from disease to exposure",
      D: "Is the same as a case-control study"
    },
    correctAnswer: "B",
    explanation: "Prospective cohort studies identify exposed and unexposed groups in the present and follow them forward over time to observe disease occurrence.",
    difficulty: "Easy"
  },
  {
    id: "q6-1-3",
    topicId: "6-1",
    question: "An advantage of cohort studies over case-control studies is:",
    options: {
      A: "Lower cost",
      B: "Ability to directly calculate incidence rates and study multiple outcomes",
      C: "Better for rare diseases",
      D: "Faster completion"
    },
    correctAnswer: "B",
    explanation: "Cohort studies directly measure incidence and can examine multiple outcomes from a single exposure, advantages not available in case-control designs.",
    difficulty: "Medium"
  },
  {
    id: "q6-2-1",
    topicId: "6-2",
    question: "A relative risk of 3.0 means:",
    options: {
      A: "Exposure has no effect on disease",
      B: "Exposed group has three times the disease risk of unexposed group",
      C: "Three people developed disease",
      D: "The study had three times as many subjects"
    },
    correctAnswer: "B",
    explanation: "Relative risk (RR) of 3.0 indicates the exposed group has three times higher disease incidence than the unexposed group.",
    difficulty: "Easy"
  },
  {
    id: "q6-2-2",
    topicId: "6-2",
    question: "What does a relative risk of 0.5 indicate?",
    options: {
      A: "Exposure increases disease risk",
      B: "Exposure has a protective effect, reducing disease risk by half",
      C: "No association exists",
      D: "The study was invalid"
    },
    correctAnswer: "B",
    explanation: "RR < 1 indicates reduced risk; RR = 0.5 means the exposed group has half the disease risk, suggesting a protective effect.",
    difficulty: "Medium"
  },
  {
    id: "q6-3-1",
    topicId: "6-3",
    question: "Cohort studies are particularly efficient for studying:",
    options: {
      A: "Rare diseases",
      B: "Rare exposures",
      C: "Common outcomes only",
      D: "Only infectious diseases"
    },
    correctAnswer: "B",
    explanation: "Cohort studies are ideal for rare exposures because investigators can identify and follow exposed individuals, whereas rare diseases require case-control designs.",
    difficulty: "Medium"
  },
  {
    id: "q6-3-2",
    topicId: "6-3",
    question: "Loss to follow-up in cohort studies can cause:",
    options: {
      A: "No problems if less than 100%",
      B: "Selection bias if related to exposure and outcome",
      C: "Improved study validity",
      D: "Lower costs"
    },
    correctAnswer: "B",
    explanation: "Loss to follow-up creates selection bias if those lost differ systematically from those retained in ways related to both exposure and outcome.",
    difficulty: "Hard"
  },

  // Chapter 7: Case-Control Studies
  {
    id: "q7-1-1",
    topicId: "7-1",
    question: "In case-control studies, investigators:",
    options: {
      A: "Start with disease status and look back at exposures",
      B: "Start with exposure status and follow forward",
      C: "Randomly assign exposures",
      D: "Only study healthy people"
    },
    correctAnswer: "A",
    explanation: "Case-control studies begin with disease status (cases and controls) and retrospectively assess exposure histories.",
    difficulty: "Easy"
  },
  {
    id: "q7-1-2",
    topicId: "7-1",
    question: "Case-control studies are most efficient for:",
    options: {
      A: "Common diseases",
      B: "Rare diseases with long latency periods",
      C: "Diseases that develop immediately after exposure",
      D: "Diseases with 100% mortality"
    },
    correctAnswer: "B",
    explanation: "Case-control studies excel at investigating rare diseases and those with long latency because investigators can identify existing cases without waiting for disease to develop.",
    difficulty: "Medium"
  },
  {
    id: "q7-2-1",
    topicId: "7-2",
    question: "Controls in case-control studies should:",
    options: {
      A: "Have the disease of interest",
      B: "Represent the population that gave rise to the cases",
      C: "Be matched on the outcome",
      D: "Only be family members"
    },
    correctAnswer: "B",
    explanation: "Controls must come from the same source population as cases and should represent exposure distribution in the population that produced the cases.",
    difficulty: "Medium"
  },
  {
    id: "q7-2-2",
    topicId: "7-2",
    question: "What is the purpose of matching in case-control studies?",
    options: {
      A: "To make cases and controls identical",
      B: "To control for confounding by matching variables",
      C: "To increase sample size",
      D: "To eliminate all bias"
    },
    correctAnswer: "B",
    explanation: "Matching controls to cases on potential confounders (like age, sex) ensures these factors won't confound the exposure-disease association.",
    difficulty: "Medium"
  },
  {
    id: "q7-3-1",
    topicId: "7-3",
    question: "In case-control studies, the odds ratio:",
    options: {
      A: "Directly measures incidence",
      B: "Approximates relative risk when disease is rare",
      C: "Is always equal to 1",
      D: "Cannot be calculated"
    },
    correctAnswer: "B",
    explanation: "When disease is rare (< 10% prevalence), the odds ratio from case-control studies closely approximates the relative risk from cohort studies.",
    difficulty: "Medium"
  },
  {
    id: "q7-3-2",
    topicId: "7-3",
    question: "An odds ratio of 4.0 in a case-control study suggests:",
    options: {
      A: "No association",
      B: "Exposure is associated with four times higher odds of disease",
      C: "Four people were exposed",
      D: "Protective effect of exposure"
    },
    correctAnswer: "B",
    explanation: "OR = 4.0 indicates cases have four times higher odds of having been exposed compared to controls, suggesting exposure increases disease risk.",
    difficulty: "Easy"
  },
  {
    id: "q7-4-1",
    topicId: "7-4",
    question: "A major limitation of case-control studies is:",
    options: {
      A: "They are too expensive",
      B: "Susceptibility to recall bias in exposure assessment",
      C: "They take too long to complete",
      D: "They require too many subjects"
    },
    correctAnswer: "B",
    explanation: "Recall bias—differential memory of exposures between cases and controls—is a significant concern in case-control studies relying on self-reported past exposures.",
    difficulty: "Medium"
  },
  {
    id: "q7-4-2",
    topicId: "7-4",
    question: "Unlike cohort studies, case-control studies:",
    options: {
      A: "Can study multiple diseases from one exposure",
      B: "Cannot directly calculate disease incidence",
      C: "Are better for rare exposures",
      D: "Take longer to complete"
    },
    correctAnswer: "B",
    explanation: "Case-control studies select on disease status, so they cannot calculate true incidence rates in exposed and unexposed groups.",
    difficulty: "Medium"
  },

  // Chapter 8: Randomized Controlled Trials
  {
    id: "q8-1-1",
    topicId: "8-1",
    question: "The primary purpose of randomization in RCTs is to:",
    options: {
      A: "Increase sample size",
      B: "Eliminate selection bias and balance confounders",
      C: "Reduce study costs",
      D: "Speed up recruitment"
    },
    correctAnswer: "B",
    explanation: "Randomization ensures treatment groups are comparable at baseline by distributing both known and unknown confounders equally between groups.",
    difficulty: "Easy"
  },
  {
    id: "q8-1-2",
    topicId: "8-1",
    question: "RCTs are considered the gold standard because they:",
    options: {
      A: "Are the least expensive studies",
      B: "Provide the strongest evidence for causal effects through experimental control",
      C: "Can be completed quickly",
      D: "Require no ethical approval"
    },
    correctAnswer: "B",
    explanation: "RCTs' experimental control and randomization provide the strongest scientific evidence for determining whether interventions cause observed effects.",
    difficulty: "Medium"
  },
  {
    id: "q8-2-1",
    topicId: "8-2",
    question: "Double-blind trials mean:",
    options: {
      A: "Two studies are conducted simultaneously",
      B: "Neither participants nor investigators know treatment assignments",
      C: "The study is conducted in darkness",
      D: "Two different placebos are used"
    },
    correctAnswer: "B",
    explanation: "Double-blinding conceals treatment allocation from both participants and investigators/assessors to prevent bias in treatment delivery and outcome assessment.",
    difficulty: "Easy"
  },
  {
    id: "q8-2-2",
    topicId: "8-2",
    question: "Placebo controls are used to:",
    options: {
      A: "Replace the need for randomization",
      B: "Control for non-specific effects and maintain blinding",
      C: "Reduce sample size requirements",
      D: "Eliminate the need for informed consent"
    },
    correctAnswer: "B",
    explanation: "Placebos control for psychological and non-specific treatment effects while helping maintain blinding, ensuring observed effects are due to the active intervention.",
    difficulty: "Medium"
  },
  {
    id: "q8-3-1",
    topicId: "8-3",
    question: "Equipoise in clinical trials means:",
    options: {
      A: "Equal numbers in each group",
      B: "Genuine uncertainty about which treatment is better",
      C: "Equal costs for all treatments",
      D: "Both treatments are placebos"
    },
    correctAnswer: "B",
    explanation: "Equipoise—genuine uncertainty in the medical community about which treatment is superior—is ethically required to justify randomizing participants to different treatments.",
    difficulty: "Medium"
  },
  {
    id: "q8-3-2",
    topicId: "8-3",
    question: "Informed consent in RCTs requires:",
    options: {
      A: "Only verbal agreement",
      B: "Participants understand risks, benefits, and alternatives and voluntarily agree",
      C: "Family permission only",
      D: "No documentation"
    },
    correctAnswer: "B",
    explanation: "Informed consent requires participants receive adequate information about risks, benefits, and alternatives, comprehend it, and voluntarily agree to participate.",
    difficulty: "Easy"
  },
  {
    id: "q8-4-1",
    topicId: "8-4",
    question: "Intention-to-treat analysis includes:",
    options: {
      A: "Only participants who completed treatment",
      B: "All randomized participants in their assigned groups regardless of compliance",
      C: "Only participants who responded to treatment",
      D: "Only participants without side effects"
    },
    correctAnswer: "B",
    explanation: "Intention-to-treat analyzes all randomized participants according to their assigned treatment group, preserving randomization benefits and providing conservative, practical estimates.",
    difficulty: "Medium"
  },
  {
    id: "q8-4-2",
    topicId: "8-4",
    question: "Per-protocol analysis:",
    options: {
      A: "Is the primary analysis in RCTs",
      B: "Includes only participants who completed treatment as assigned",
      C: "Is superior to intention-to-treat",
      D: "Is required by ethics committees"
    },
    correctAnswer: "B",
    explanation: "Per-protocol analysis examines only participants who completed treatment according to protocol, potentially introducing bias but showing treatment effects under ideal conditions.",
    difficulty: "Hard"
  },

  // Chapter 9: Bias
  {
    id: "q9-1-1",
    topicId: "9-1",
    question: "Selection bias occurs when:",
    options: {
      A: "Random sampling is used",
      B: "Study participation is related to both exposure and outcome",
      C: "Sample size is small",
      D: "Measurements are inaccurate"
    },
    correctAnswer: "B",
    explanation: "Selection bias arises when the selection or retention of participants is associated with both the exposure and outcome being studied.",
    difficulty: "Medium"
  },
  {
    id: "q9-1-2",
    topicId: "9-1",
    question: "The healthy worker effect is an example of:",
    options: {
      A: "Information bias",
      B: "Selection bias",
      C: "Confounding",
      D: "Random error"
    },
    correctAnswer: "B",
    explanation: "Healthy worker effect is selection bias occurring because workers are generally healthier than the general population, making occupational risks appear lower than they are.",
    difficulty: "Medium"
  },
  {
    id: "q9-2-1",
    topicId: "9-2",
    question: "Recall bias is most problematic in:",
    options: {
      A: "Randomized controlled trials",
      B: "Case-control studies using self-reported past exposures",
      C: "Prospective cohort studies",
      D: "Cross-sectional studies with biomarkers"
    },
    correctAnswer: "B",
    explanation: "Recall bias—differential accuracy of exposure memory—particularly affects case-control studies where cases may remember exposures differently than controls.",
    difficulty: "Easy"
  },
  {
    id: "q9-2-2",
    topicId: "9-2",
    question: "Non-differential misclassification typically:",
    options: {
      A: "Strengthens associations",
      B: "Biases associations toward the null",
      C: "Has no effect",
      D: "Always invalidates the study"
    },
    correctAnswer: "B",
    explanation: "Non-differential misclassification (random errors affecting all groups equally) generally biases results toward the null, underestimating true associations.",
    difficulty: "Hard"
  },
  {
    id: "q9-3-1",
    topicId: "9-3",
    question: "For a variable to be a confounder, it must:",
    options: {
      A: "Be on the causal pathway",
      B: "Be associated with exposure and be an independent risk factor for disease",
      C: "Be measured with error",
      D: "Be randomly distributed"
    },
    correctAnswer: "B",
    explanation: "Confounders must be associated with the exposure, independently affect disease risk, and NOT be on the causal pathway between exposure and disease.",
    difficulty: "Medium"
  },
  {
    id: "q9-3-2",
    topicId: "9-3",
    question: "Which study design best controls confounding?",
    options: {
      A: "Cross-sectional studies",
      B: "Randomized controlled trials through randomization",
      C: "Case reports",
      D: "Ecological studies"
    },
    correctAnswer: "B",
    explanation: "Randomization in RCTs balances both known and unknown confounders between groups, providing the best control of confounding.",
    difficulty: "Easy"
  },
  {
    id: "q9-4-1",
    topicId: "9-4",
    question: "The most effective approach to minimizing bias is:",
    options: {
      A: "Correcting it statistically after data collection",
      B: "Preventing it through careful study design",
      C: "Ignoring it",
      D: "Increasing sample size"
    },
    correctAnswer: "B",
    explanation: "Prevention through rigorous study design is always superior to attempted analytical correction, as some biases cannot be adequately corrected after they occur.",
    difficulty: "Easy"
  },
  {
    id: "q9-4-2",
    topicId: "9-4",
    question: "Blinding in studies primarily prevents:",
    options: {
      A: "Selection bias",
      B: "Information bias",
      C: "Confounding",
      D: "Random error"
    },
    correctAnswer: "B",
    explanation: "Blinding prevents information bias by ensuring that knowledge of exposure or treatment status doesn't influence outcome assessment or participant behavior.",
    difficulty: "Medium"
  },

  // Chapter 10: Causation
  {
    id: "q10-1-1",
    topicId: "10-1",
    question: "Which Bradford Hill criterion is considered absolutely essential for causation?",
    options: {
      A: "Strength of association",
      B: "Temporality - exposure precedes outcome",
      C: "Biological plausibility",
      D: "Consistency"
    },
    correctAnswer: "B",
    explanation: "Temporality—exposure must precede disease—is the only essential criterion; an effect cannot precede its cause.",
    difficulty: "Easy"
  },
  {
    id: "q10-1-2",
    topicId: "10-1",
    question: "A dose-response relationship supports causation because:",
    options: {
      A: "It's easy to measure",
      B: "It shows increasing exposure is associated with increasing disease risk",
      C: "It proves causation",
      D: "It eliminates all bias"
    },
    correctAnswer: "B",
    explanation: "Biological gradient (dose-response) strengthens causal inference by showing that higher exposure levels produce proportionally greater effects, consistent with causal mechanisms.",
    difficulty: "Medium"
  },
  {
    id: "q10-1-3",
    topicId: "10-1",
    question: "Consistency in the Bradford Hill criteria refers to:",
    options: {
      A: "Reproducibility of association across different studies and populations",
      B: "Consistent measurement tools",
      C: "Constant disease rates",
      D: "Agreement among researchers"
    },
    correctAnswer: "A",
    explanation: "Consistency means the association is observed repeatedly in different populations, settings, and study designs, strengthening causal inference.",
    difficulty: "Medium"
  },
  {
    id: "q10-2-1",
    topicId: "10-2",
    question: "A necessary cause is one that:",
    options: {
      A: "Always produces disease",
      B: "Must be present for disease to occur",
      C: "Is the only cause of disease",
      D: "Acts through other factors"
    },
    correctAnswer: "B",
    explanation: "A necessary cause must be present for disease to occur, though it may not be sufficient by itself to cause disease.",
    difficulty: "Medium"
  },
  {
    id: "q10-2-2",
    topicId: "10-2",
    question: "Most chronic diseases have:",
    options: {
      A: "Single sufficient causes",
      B: "No identifiable causes",
      C: "Multiple component causes acting together (multifactorial causation)",
      D: "Only genetic causes"
    },
    correctAnswer: "C",
    explanation: "Chronic diseases typically result from multiple component causes (genetic, environmental, behavioral) acting together, reflecting multifactorial causation.",
    difficulty: "Easy"
  },
  {
    id: "q10-3-1",
    topicId: "10-3",
    question: "Before concluding an association is causal, we must rule out:",
    options: {
      A: "Only bias",
      B: "Chance, bias, and confounding as alternative explanations",
      C: "Only confounding",
      D: "Statistical significance"
    },
    correctAnswer: "B",
    explanation: "Causal inference requires systematically excluding chance (random error), bias (systematic error), and confounding as alternative explanations for observed associations.",
    difficulty: "Medium"
  },
  {
    id: "q10-3-2",
    topicId: "10-3",
    question: "Statistical significance:",
    options: {
      A: "Proves causation",
      B: "Indicates the result is unlikely due to chance alone",
      C: "Eliminates bias",
      D: "Controls confounding"
    },
    correctAnswer: "B",
    explanation: "Statistical significance only addresses the role of chance; it doesn't prove causation or rule out bias and confounding.",
    difficulty: "Easy"
  },

  // Chapter 11: Screening
  {
    id: "q11-1-1",
    topicId: "11-1",
    question: "Screening differs from diagnosis in that screening:",
    options: {
      A: "Is applied to symptomatic people",
      B: "Is applied to apparently healthy people to detect disease early",
      C: "Is more accurate",
      D: "Requires no follow-up"
    },
    correctAnswer: "B",
    explanation: "Screening targets apparently healthy populations to identify unrecognized disease, while diagnosis evaluates symptomatic individuals.",
    difficulty: "Easy"
  },
  {
    id: "q11-1-2",
    topicId: "11-1",
    question: "For screening to be justified, the disease should have:",
    options: {
      A: "No available treatment",
      B: "A detectable preclinical phase with effective treatment available",
      C: "100% mortality",
      D: "Extremely low prevalence"
    },
    correctAnswer: "B",
    explanation: "Effective screening requires a detectable preclinical phase during which treatment can improve outcomes compared to treatment after symptoms appear.",
    difficulty: "Medium"
  },
  {
    id: "q11-2-1",
    topicId: "11-2",
    question: "A screening test with high sensitivity:",
    options: {
      A: "Has few false negatives and detects most people with disease",
      B: "Has few false positives",
      C: "Is always expensive",
      D: "Is never wrong"
    },
    correctAnswer: "A",
    explanation: "High sensitivity means the test correctly identifies most people with disease (high true positive rate, low false negative rate).",
    difficulty: "Easy"
  },
  {
    id: "q11-2-2",
    topicId: "11-2",
    question: "Positive predictive value depends on:",
    options: {
      A: "Only test sensitivity",
      B: "Disease prevalence in the screened population",
      C: "Only test specificity",
      D: "Sample size only"
    },
    correctAnswer: "B",
    explanation: "PPV (probability that positive test means disease) depends heavily on disease prevalence: higher prevalence increases PPV even with the same test characteristics.",
    difficulty: "Medium"
  },
  {
    id: "q11-2-3",
    topicId: "11-2",
    question: "A test with 95% specificity means:",
    options: {
      A: "95% of diseased people test positive",
      B: "95% of disease-free people correctly test negative",
      C: "The test is 95% accurate",
      D: "PPV is 95%"
    },
    correctAnswer: "B",
    explanation: "Specificity is the proportion of truly disease-free people who test negative (true negative rate); 95% specificity means 5% false positive rate.",
    difficulty: "Medium"
  },
  {
    id: "q11-3-1",
    topicId: "11-3",
    question: "Lead time bias in screening evaluation occurs when:",
    options: {
      A: "Screening detects disease earlier but doesn't extend life",
      B: "The screening test is too sensitive",
      C: "Follow-up is inadequate",
      D: "Costs are too high"
    },
    correctAnswer: "A",
    explanation: "Lead time bias makes survival appear longer simply because diagnosis is earlier, even if screening doesn't actually postpone death.",
    difficulty: "Medium"
  },
  {
    id: "q11-3-2",
    topicId: "11-3",
    question: "Length bias in screening means:",
    options: {
      A: "The screening test takes too long",
      B: "Screening preferentially detects slow-growing, less aggressive cases",
      C: "Follow-up periods are too long",
      D: "Sample size is insufficient"
    },
    correctAnswer: "B",
    explanation: "Length bias occurs because screening is more likely to detect slow-progressing diseases with long preclinical phases, making outcomes appear better than they are.",
    difficulty: "Hard"
  },
  {
    id: "q11-3-3",
    topicId: "11-3",
    question: "The best evidence for screening effectiveness comes from:",
    options: {
      A: "Case series",
      B: "Randomized controlled trials comparing screened to unscreened populations",
      C: "Expert opinion",
      D: "Five-year survival rates"
    },
    correctAnswer: "B",
    explanation: "Randomized trials comparing mortality in screened versus unscreened groups provide the strongest evidence, avoiding lead time and length bias.",
    difficulty: "Easy"
  },

  // Chapter 12: Infectious Disease Epidemiology
  {
    id: "q12-1-1",
    topicId: "12-1",
    question: "The chain of infection includes all EXCEPT:",
    options: {
      A: "Infectious agent",
      B: "Susceptible host",
      C: "Genetic counseling",
      D: "Mode of transmission"
    },
    correctAnswer: "C",
    explanation: "The chain of infection includes: agent, reservoir, portal of exit, transmission, portal of entry, and susceptible host. Genetic counseling is not part of this chain.",
    difficulty: "Easy"
  },
  {
    id: "q12-1-2",
    topicId: "12-1",
    question: "Breaking the chain of infection prevents disease transmission by:",
    options: {
      A: "Treating all cases",
      B: "Interrupting any link in the transmission pathway",
      C: "Developing new antibiotics",
      D: "Increasing surveillance only"
    },
    correctAnswer: "B",
    explanation: "Interrupting any single link in the chain (eliminating reservoir, blocking transmission, protecting susceptible hosts) prevents disease transmission.",
    difficulty: "Medium"
  },
  {
    id: "q12-2-1",
    topicId: "12-2",
    question: "Airborne transmission occurs through:",
    options: {
      A: "Direct physical contact",
      B: "Droplet nuclei or dust particles suspended in air",
      C: "Contaminated food",
      D: "Insect bites"
    },
    correctAnswer: "B",
    explanation: "Airborne transmission involves infectious particles small enough to remain suspended in air and be inhaled over distances, unlike larger droplets.",
    difficulty: "Easy"
  },
  {
    id: "q12-2-2",
    topicId: "12-2",
    question: "Vector-borne transmission involves:",
    options: {
      A: "Direct person-to-person contact",
      B: "Insects or animals transferring pathogens",
      C: "Airborne spread only",
      D: "Contaminated surfaces"
    },
    correctAnswer: "B",
    explanation: "Vector-borne transmission uses insects (mosquitoes, ticks) or animals to carry and transmit pathogens from one host to another.",
    difficulty: "Easy"
  },
  {
    id: "q12-3-1",
    topicId: "12-3",
    question: "Herd immunity protects populations by:",
    options: {
      A: "Vaccinating 100% of the population",
      B: "Reducing transmission when sufficient proportion is immune",
      C: "Treating all infections",
      D: "Quarantining all susceptible individuals"
    },
    correctAnswer: "B",
    explanation: "When enough people are immune, disease transmission is interrupted, protecting even non-immune individuals through reduced exposure opportunities.",
    difficulty: "Easy"
  },
  {
    id: "q12-3-2",
    topicId: "12-3",
    question: "The herd immunity threshold depends on:",
    options: {
      A: "Population size only",
      B: "The basic reproduction number (R0) of the disease",
      C: "Healthcare capacity",
      D: "Geographic location only"
    },
    correctAnswer: "B",
    explanation: "The herd immunity threshold (1 - 1/R0) depends on R0: diseases with higher R0 require higher immunity levels to interrupt transmission.",
    difficulty: "Medium"
  },
  {
    id: "q12-4-1",
    topicId: "12-4",
    question: "The secondary attack rate measures:",
    options: {
      A: "All disease cases in a population",
      B: "Transmission from primary cases to susceptible contacts",
      C: "Only fatal cases",
      D: "Environmental contamination"
    },
    correctAnswer: "B",
    explanation: "Secondary attack rate measures the proportion of susceptible contacts who become infected after exposure to primary cases, indicating transmission efficiency.",
    difficulty: "Medium"
  },
  {
    id: "q12-4-2",
    topicId: "12-4",
    question: "The index case in an outbreak is:",
    options: {
      A: "The most severe case",
      B: "The first case to come to attention",
      C: "The last case in the outbreak",
      D: "Always the source of infection"
    },
    correctAnswer: "B",
    explanation: "The index case is the first case identified and brought to investigators' attention, though it may not be the actual first case (primary case) in the outbreak.",
    difficulty: "Easy"
  },

  // Chapter 13: Chronic Disease Epidemiology
  {
    id: "q13-1-1",
    topicId: "13-1",
    question: "Chronic diseases differ from infectious diseases in having:",
    options: {
      A: "Single causative agents",
      B: "Multiple risk factors and long latency periods",
      C: "Short duration",
      D: "Person-to-person transmission"
    },
    correctAnswer: "B",
    explanation: "Chronic diseases are characterized by multifactorial causation, long latency periods, and slow progression, unlike infectious diseases.",
    difficulty: "Easy"
  },
  {
    id: "q13-1-2",
    topicId: "13-1",
    question: "The long latency period of chronic diseases means:",
    options: {
      A: "They develop within days of exposure",
      B: "Long time between exposure and disease onset requires extended follow-up studies",
      C: "They cannot be studied",
      D: "They have no risk factors"
    },
    correctAnswer: "B",
    explanation: "Long latency requires cohort studies with extended follow-up to capture the relationship between exposures and disease development occurring years later.",
    difficulty: "Medium"
  },
  {
    id: "q13-2-1",
    topicId: "13-2",
    question: "Which is a modifiable risk factor for chronic disease?",
    options: {
      A: "Age",
      B: "Genetic background",
      C: "Tobacco smoking",
      D: "Family history"
    },
    correctAnswer: "C",
    explanation: "Smoking is a modifiable behavioral risk factor that can be changed through interventions, unlike non-modifiable factors like age and genetics.",
    difficulty: "Easy"
  },
  {
    id: "q13-2-2",
    topicId: "13-2",
    question: "Risk factors for chronic diseases often show synergistic effects, meaning:",
    options: {
      A: "They cancel each other out",
      B: "Combined effects exceed the sum of individual effects",
      C: "Only one factor matters",
      D: "They have no interaction"
    },
    correctAnswer: "B",
    explanation: "Synergistic effects occur when multiple risk factors together produce greater risk than expected from adding their individual effects, as seen with smoking and asbestos exposure.",
    difficulty: "Medium"
  },
  {
    id: "q13-3-1",
    topicId: "13-3",
    question: "Primary prevention aims to:",
    options: {
      A: "Detect disease early",
      B: "Prevent disease occurrence before it develops",
      C: "Reduce complications in existing disease",
      D: "Rehabilitate patients"
    },
    correctAnswer: "B",
    explanation: "Primary prevention prevents disease onset through measures like health promotion, vaccination, and reducing exposure to risk factors.",
    difficulty: "Easy"
  },
  {
    id: "q13-3-2",
    topicId: "13-3",
    question: "The population approach to prevention:",
    options: {
      A: "Targets only high-risk individuals",
      B: "Shifts the entire population's risk distribution",
      C: "Is always more effective than high-risk approach",
      D: "Requires individual screening"
    },
    correctAnswer: "B",
    explanation: "Population strategies (like reducing salt in processed foods) shift the entire population's risk distribution, potentially preventing more cases than targeting only high-risk individuals.",
    difficulty: "Medium"
  },

  // Chapter 14: Environmental and Occupational Epidemiology
  {
    id: "q14-1-1",
    topicId: "14-1",
    question: "A major challenge in environmental epidemiology is:",
    options: {
      A: "Lack of environmental exposures",
      B: "Accurate measurement of individual exposure levels",
      C: "Too many study participants",
      D: "Immediate disease onset"
    },
    correctAnswer: "B",
    explanation: "Measuring individual environmental exposures accurately is challenging due to low levels, multiple sources, temporal variation, and difficulty reconstructing historical exposures.",
    difficulty: "Medium"
  },
  {
    id: "q14-1-2",
    topicId: "14-1",
    question: "Long latency periods in environmental disease studies complicate:",
    options: {
      A: "Laboratory analysis",
      B: "Establishing causal relationships and measuring past exposures",
      C: "Statistical calculations",
      D: "Sample size determination"
    },
    correctAnswer: "B",
    explanation: "Decades between environmental exposure and disease onset make it difficult to accurately measure historical exposures and establish causal links.",
    difficulty: "Medium"
  },
  {
    id: "q14-2-1",
    topicId: "14-2",
    question: "The healthy worker effect in occupational studies means:",
    options: {
      A: "Workers are randomly selected",
      B: "Employed workers are healthier than the general population, potentially underestimating risks",
      C: "All workers are healthy",
      D: "Occupational hazards don't exist"
    },
    correctAnswer: "B",
    explanation: "Workers are generally healthier than the general population (including unemployed and disabled), creating selection bias that may underestimate true occupational risks.",
    difficulty: "Medium"
  },
  {
    id: "q14-2-2",
    topicId: "14-2",
    question: "Occupational cohorts are valuable because:",
    options: {
      A: "Workers have lower exposures than the general public",
      B: "Higher, documented exposures allow dose-response assessment",
      C: "They are inexpensive to study",
      D: "Results don't apply to environmental exposures"
    },
    correctAnswer: "B",
    explanation: "Workers often experience higher, better-documented exposures than the general population, providing opportunities to detect effects and establish dose-response relationships.",
    difficulty: "Easy"
  },
  {
    id: "q14-3-1",
    topicId: "14-3",
    question: "Environmental risk assessment includes:",
    options: {
      A: "Only laboratory studies",
      B: "Hazard identification, dose-response assessment, exposure assessment, and risk characterization",
      C: "Only epidemiological studies",
      D: "Personal opinion only"
    },
    correctAnswer: "B",
    explanation: "Comprehensive risk assessment systematically evaluates whether a hazard exists, the dose-response relationship, population exposures, and overall risk magnitude.",
    difficulty: "Medium"
  },
  {
    id: "q14-3-2",
    topicId: "14-3",
    question: "Epidemiology contributes to environmental risk assessment by:",
    options: {
      A: "Replacing toxicology studies",
      B: "Providing direct evidence of effects in human populations",
      C: "Eliminating the need for exposure monitoring",
      D: "Only studying animals"
    },
    correctAnswer: "B",
    explanation: "Epidemiological studies provide crucial direct evidence of environmental hazard effects in actual human populations, complementing experimental toxicology.",
    difficulty: "Easy"
  },

  // Chapter 15: Epidemiology and Health Policy
  {
    id: "q15-1-1",
    topicId: "15-1",
    question: "Evidence-based public health integrates:",
    options: {
      A: "Only scientific evidence",
      B: "Scientific evidence, community preferences, and resource considerations",
      C: "Only expert opinion",
      D: "Only cost considerations"
    },
    correctAnswer: "B",
    explanation: "Evidence-based public health balances best scientific evidence with community values, resource availability, and practical feasibility.",
    difficulty: "Easy"
  },
  {
    id: "q15-1-2",
    topicId: "15-1",
    question: "Systematic reviews in evidence-based practice:",
    options: {
      A: "Review only one study",
      B: "Comprehensively identify and synthesize all relevant research on a question",
      C: "Replace the need for new research",
      D: "Only include randomized trials"
    },
    correctAnswer: "B",
    explanation: "Systematic reviews use explicit methods to comprehensively find, evaluate, and synthesize all available evidence on a specific question, providing the strongest evidence summary.",
    difficulty: "Medium"
  },
  {
    id: "q15-2-1",
    topicId: "15-2",
    question: "Active surveillance differs from passive surveillance in that it:",
    options: {
      A: "Costs less",
      B: "Proactively seeks cases rather than waiting for routine reports",
      C: "Is less accurate",
      D: "Requires no staffing"
    },
    correctAnswer: "B",
    explanation: "Active surveillance involves systematic, proactive case-finding efforts (contacting providers, reviewing records), detecting more cases than passive reporting systems.",
    difficulty: "Easy"
  },
  {
    id: "q15-2-2",
    topicId: "15-2",
    question: "Surveillance systems serve to:",
    options: {
      A: "Replace research studies",
      B: "Guide priority-setting, detect outbreaks, and evaluate interventions",
      C: "Only diagnose individual cases",
      D: "Eliminate the need for epidemiologists"
    },
    correctAnswer: "B",
    explanation: "Surveillance provides ongoing data to set priorities, detect disease trends and outbreaks early, allocate resources, and evaluate public health program effectiveness.",
    difficulty: "Medium"
  },
  {
    id: "q15-3-1",
    topicId: "15-3",
    question: "Translating epidemiological evidence to policy requires considering:",
    options: {
      A: "Only scientific validity",
      B: "Scientific evidence, feasibility, cost-effectiveness, and equity",
      C: "Only political factors",
      D: "Only economic costs"
    },
    correctAnswer: "B",
    explanation: "Policy translation requires balancing scientific evidence with practical feasibility, economic evaluation, political realities, and equity considerations.",
    difficulty: "Medium"
  },
  {
    id: "q15-3-2",
    topicId: "15-3",
    question: "When communicating epidemiological findings to policymakers, scientists should:",
    options: {
      A: "Exaggerate certainty to be convincing",
      B: "Present evidence clearly while acknowledging limitations and uncertainties",
      C: "Avoid discussing limitations",
      D: "Only present positive findings"
    },
    correctAnswer: "B",
    explanation: "Credible scientific communication requires clearly presenting findings and their implications while honestly acknowledging study limitations, uncertainties, and alternative interpretations.",
    difficulty: "Easy"
  }
];

export const getQuestionsByTopicId = (topicId: string): QuizQuestion[] => {
  return quizQuestions.filter(q => q.topicId === topicId);
};

export const getQuestionsByChapter = (chapterId: number): QuizQuestion[] => {
  return quizQuestions.filter(q => q.topicId.startsWith(`${chapterId}-`));
};

export const getRandomQuestions = (topicId: string, count: number): QuizQuestion[] => {
  const questions = getQuestionsByTopicId(topicId);
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
};
