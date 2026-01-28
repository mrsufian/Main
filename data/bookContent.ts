export interface Topic {
  id: string;
  title: string;
  content: string;
  keyPoints: string[];
}

export interface Chapter {
  id: number;
  title: string;
  description: string;
  topics: Topic[];
}

export const bookContent: Chapter[] = [
  {
    id: 1,
    title: "What is Epidemiology?",
    description: "Introduction to epidemiology and its fundamental concepts",
    topics: [
      {
        id: "1-1",
        title: "Definition and Scope of Epidemiology",
        content: "Epidemiology is the study of the distribution and determinants of health-related states or events in specified populations, and the application of this study to the control of health problems. It serves as the foundation of public health by providing methods to investigate disease patterns and inform health policy decisions.",
        keyPoints: [
          "Studies distribution of disease in populations",
          "Identifies determinants and risk factors",
          "Applies findings to disease control and prevention",
          "Forms the scientific basis for public health practice"
        ]
      },
      {
        id: "1-2",
        title: "Historical Development of Epidemiology",
        content: "Epidemiology has evolved from early disease tracking to sophisticated modern methods. Key historical milestones include John Snow's investigation of cholera in London (1854), the development of infectious disease epidemiology, and expansion into chronic disease and environmental epidemiology.",
        keyPoints: [
          "John Snow and the cholera outbreak investigation",
          "Development of germ theory",
          "Shift from infectious to chronic disease focus",
          "Modern expansion to genetic and molecular epidemiology"
        ]
      },
      {
        id: "1-3",
        title: "Uses and Applications of Epidemiology",
        content: "Epidemiology is used to study health and disease patterns, identify risk factors, evaluate interventions, and guide health policy. Applications include outbreak investigation, disease surveillance, clinical trials, health program evaluation, and policy development.",
        keyPoints: [
          "Disease surveillance and monitoring",
          "Outbreak investigation and response",
          "Identifying disease risk factors",
          "Evaluating interventions and treatments",
          "Informing health policy and planning"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Measuring Health and Disease",
    description: "Fundamental measures used in epidemiology",
    topics: [
      {
        id: "2-1",
        title: "Incidence and Prevalence",
        content: "Incidence measures the number of new cases of disease occurring in a population during a specified time period. Prevalence measures the total number of cases (both new and existing) at a specific point in time. Incidence reflects disease risk, while prevalence reflects disease burden.",
        keyPoints: [
          "Incidence = new cases / population at risk × time",
          "Prevalence = total cases / total population at a point in time",
          "Incidence measures disease risk",
          "Prevalence measures disease burden",
          "Relationship: Prevalence ≈ Incidence × Duration"
        ]
      },
      {
        id: "2-2",
        title: "Mortality Rates and Ratios",
        content: "Mortality rates measure deaths in a population. Common measures include crude death rate, age-specific death rates, cause-specific death rates, and case fatality rate. These measures help assess population health status and compare health across populations.",
        keyPoints: [
          "Crude death rate: total deaths / total population",
          "Age-specific death rates account for age structure",
          "Cause-specific rates focus on particular diseases",
          "Case fatality rate: deaths from disease / total cases",
          "Standardization allows fair comparison across populations"
        ]
      },
      {
        id: "2-3",
        title: "Morbidity Measures",
        content: "Morbidity refers to illness or disease in a population. Key morbidity measures include attack rate, secondary attack rate, and person-time incidence rates. These measures help quantify disease occurrence and transmission patterns.",
        keyPoints: [
          "Attack rate in outbreak investigations",
          "Secondary attack rate for transmission assessment",
          "Person-time rates for varying observation periods",
          "Incidence density accounts for different follow-up times"
        ]
      },
      {
        id: "2-4",
        title: "Standardization of Rates",
        content: "Standardization is a technique to adjust rates to allow fair comparisons between populations with different age structures or other characteristics. Direct standardization applies the age-specific rates to a standard population. Indirect standardization uses a standard set of rates.",
        keyPoints: [
          "Removes confounding effects of age or other factors",
          "Direct method uses standard population structure",
          "Indirect method uses standard rates (SMR)",
          "Essential for valid population comparisons"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Patterns of Disease: Time, Place, and Person",
    description: "Descriptive epidemiology and disease distribution patterns",
    topics: [
      {
        id: "3-1",
        title: "Temporal Patterns",
        content: "Disease occurrence varies over time in several patterns: secular trends (long-term changes over years or decades), periodic changes (seasonal or cyclic patterns), and epidemic patterns (sudden increases). Understanding temporal patterns helps identify disease determinants and predict future occurrences.",
        keyPoints: [
          "Secular trends show long-term changes",
          "Seasonal variations linked to environmental factors",
          "Epidemic curves reveal outbreak characteristics",
          "Point source vs. propagated epidemics",
          "Cyclic patterns may indicate immunity dynamics"
        ]
      },
      {
        id: "3-2",
        title: "Geographic Distribution",
        content: "Disease patterns vary by geographic location due to environmental factors, population characteristics, healthcare access, and cultural practices. Mapping disease occurrence helps identify clusters, environmental hazards, and healthcare disparities.",
        keyPoints: [
          "Disease mapping reveals geographic clusters",
          "Environmental factors influence distribution",
          "Urban vs. rural disease patterns",
          "International variations reflect diverse exposures",
          "Spatial analysis identifies risk areas"
        ]
      },
      {
        id: "3-3",
        title: "Personal Characteristics",
        content: "Disease occurrence varies by personal characteristics including age, sex, race/ethnicity, occupation, and socioeconomic status. These patterns provide clues about disease etiology and identify high-risk populations for targeted interventions.",
        keyPoints: [
          "Age-specific patterns reveal susceptibility periods",
          "Sex differences may indicate biological or behavioral factors",
          "Racial/ethnic variations reflect genetic and social factors",
          "Occupational patterns suggest workplace exposures",
          "Socioeconomic gradients show health inequities"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Investigating an Epidemic",
    description: "Steps and methods for outbreak investigation",
    topics: [
      {
        id: "4-1",
        title: "Steps in Outbreak Investigation",
        content: "Outbreak investigation follows systematic steps: prepare for fieldwork, establish the existence of an outbreak, verify the diagnosis, define and identify cases, describe the epidemic by time/place/person, develop hypotheses, evaluate hypotheses, refine hypotheses, implement control measures, and communicate findings.",
        keyPoints: [
          "Confirm the outbreak exists",
          "Establish case definitions",
          "Find and count cases systematically",
          "Create epidemic curve and spot map",
          "Generate and test hypotheses about source",
          "Implement control measures promptly",
          "Document and communicate findings"
        ]
      },
      {
        id: "4-2",
        title: "Epidemic Curves and Their Interpretation",
        content: "The epidemic curve is a histogram showing the number of cases over time. Its shape reveals important information about the outbreak: point source epidemics show a sharp rise and fall, propagated epidemics show successive waves, and continuous source epidemics show a plateau pattern.",
        keyPoints: [
          "Point source: single exposure creates peaked curve",
          "Propagated: person-to-person transmission shows waves",
          "Continuous source: ongoing exposure creates plateau",
          "Incubation period can be estimated from curve",
          "Time of exposure can be inferred"
        ]
      },
      {
        id: "4-3",
        title: "Case Definitions and Case Finding",
        content: "A case definition is a set of standard criteria for deciding whether a person has a particular disease. It typically includes clinical criteria, confirmatory tests, time, place, and person characteristics. Case finding involves actively searching for cases using the case definition.",
        keyPoints: [
          "Clear case definitions ensure consistency",
          "Include clinical, laboratory, and epidemiologic criteria",
          "May use confirmed, probable, and possible categories",
          "Active surveillance finds more cases than passive",
          "Line listing organizes case information systematically"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Study Designs in Epidemiology",
    description: "Overview of major epidemiological study designs",
    topics: [
      {
        id: "5-1",
        title: "Observational vs. Experimental Studies",
        content: "Epidemiological studies are either observational (researcher observes without intervention) or experimental (researcher assigns exposures or interventions). Observational studies include descriptive and analytical designs. Experimental studies include clinical trials and community trials.",
        keyPoints: [
          "Observational: no intervention by researcher",
          "Experimental: researcher controls exposure",
          "Observational studies more common in epidemiology",
          "Experimental studies provide strongest evidence",
          "Ethical constraints often limit experimental designs"
        ]
      },
      {
        id: "5-2",
        title: "Cross-Sectional Studies",
        content: "Cross-sectional studies examine the relationship between diseases and other variables in a defined population at a single point in time. They measure both exposure and outcome simultaneously, making them useful for estimating prevalence and generating hypotheses but unable to establish temporal sequence.",
        keyPoints: [
          "Data collected at one point in time",
          "Measures prevalence, not incidence",
          "Cannot establish causation due to timing",
          "Quick and relatively inexpensive",
          "Good for generating hypotheses"
        ]
      },
      {
        id: "5-3",
        title: "Ecological Studies",
        content: "Ecological studies examine associations between exposure and outcome at the population or group level rather than individual level. They use aggregate data and are useful for generating hypotheses but prone to ecological fallacy—incorrectly assuming group-level associations apply to individuals.",
        keyPoints: [
          "Uses population-level rather than individual data",
          "Can examine multiple populations or time periods",
          "Efficient use of existing data",
          "Risk of ecological fallacy",
          "Useful for hypothesis generation, not causal inference"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Cohort Studies",
    description: "Design, conduct, and analysis of cohort studies",
    topics: [
      {
        id: "6-1",
        title: "Cohort Study Design and Types",
        content: "Cohort studies follow groups of individuals over time to compare disease incidence between exposed and unexposed groups. They can be prospective (follow forward from present) or retrospective (use historical data). Cohort studies directly measure incidence and can examine multiple outcomes.",
        keyPoints: [
          "Follow defined populations over time",
          "Compare exposed vs. unexposed groups",
          "Prospective cohorts follow into future",
          "Retrospective cohorts use historical records",
          "Can study multiple outcomes from one exposure"
        ]
      },
      {
        id: "6-2",
        title: "Measures of Association: Relative Risk",
        content: "Relative risk (RR) or risk ratio compares the incidence of disease in exposed versus unexposed groups. RR = incidence in exposed / incidence in unexposed. An RR of 1 indicates no association, RR > 1 indicates increased risk, and RR < 1 indicates decreased risk (protective effect).",
        keyPoints: [
          "RR measures strength of association",
          "RR = 1: no association",
          "RR > 1: exposure increases risk",
          "RR < 1: exposure is protective",
          "Can calculate confidence intervals for precision"
        ]
      },
      {
        id: "6-3",
        title: "Advantages and Limitations of Cohort Studies",
        content: "Advantages include clear temporal sequence, direct calculation of incidence rates, ability to study multiple outcomes, and suitability for rare exposures. Limitations include expense, time requirements, loss to follow-up, and inefficiency for rare diseases.",
        keyPoints: [
          "Establish temporal sequence clearly",
          "Calculate true incidence rates",
          "Study rare exposures effectively",
          "Expensive and time-consuming",
          "Inefficient for rare diseases",
          "Loss to follow-up can bias results"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Case-Control Studies",
    description: "Design and analysis of case-control studies",
    topics: [
      {
        id: "7-1",
        title: "Case-Control Study Design",
        content: "Case-control studies compare exposure histories of people with disease (cases) to people without disease (controls). They work backward from effect to cause, making them efficient for studying rare diseases. Selection of appropriate controls is critical to study validity.",
        keyPoints: [
          "Start with disease status, look back at exposure",
          "Cases have the disease of interest",
          "Controls should represent source population",
          "Efficient for rare diseases",
          "Cannot directly calculate incidence",
          "Prone to recall and selection bias"
        ]
      },
      {
        id: "7-2",
        title: "Selecting Cases and Controls",
        content: "Cases should be clearly defined using specific diagnostic criteria. Controls should be selected from the same source population that produced the cases and should be at risk of becoming cases. Common control sources include hospital controls, neighborhood controls, and population-based controls.",
        keyPoints: [
          "Cases must meet strict diagnostic criteria",
          "Controls must be from same source population",
          "Controls should be at risk of disease",
          "Multiple control sources may be used",
          "Matching may reduce confounding"
        ]
      },
      {
        id: "7-3",
        title: "Odds Ratio as Measure of Association",
        content: "The odds ratio (OR) approximates relative risk in case-control studies. OR = (odds of exposure in cases) / (odds of exposure in controls). When disease is rare, the OR closely estimates the RR. OR > 1 suggests exposure increases disease risk, OR < 1 suggests protective effect.",
        keyPoints: [
          "OR estimates relative risk when disease is rare",
          "OR = (a×d) / (b×c) in 2×2 table",
          "OR = 1: no association",
          "OR > 1: exposure associated with disease",
          "OR < 1: exposure is protective",
          "Calculate confidence intervals for statistical significance"
        ]
      },
      {
        id: "7-4",
        title: "Advantages and Limitations",
        content: "Case-control studies are efficient for rare diseases, quick to conduct, and require fewer subjects than cohort studies. Limitations include inability to calculate incidence, susceptibility to selection and recall bias, and difficulty establishing temporal sequence. They can study only one outcome per study.",
        keyPoints: [
          "Excellent for rare diseases",
          "Quick and relatively inexpensive",
          "Cannot calculate true incidence rates",
          "Selection bias is major concern",
          "Recall bias may distort exposure history",
          "Study only one disease at a time"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Randomized Controlled Trials",
    description: "Experimental study designs and clinical trials",
    topics: [
      {
        id: "8-1",
        title: "Principles of Randomized Controlled Trials",
        content: "Randomized controlled trials (RCTs) are experimental studies where participants are randomly allocated to intervention or control groups. Randomization ensures groups are comparable at baseline, minimizing confounding. RCTs provide the strongest evidence for causal relationships and treatment efficacy.",
        keyPoints: [
          "Random allocation to treatment groups",
          "Experimental control of exposure",
          "Comparison with control/placebo group",
          "Prospective follow-up for outcomes",
          "Strongest design for establishing causation",
          "Gold standard for evaluating interventions"
        ]
      },
      {
        id: "8-2",
        title: "Randomization and Blinding",
        content: "Randomization eliminates selection bias and balances confounders between groups. Blinding (masking) prevents bias in outcome assessment and treatment administration. Single-blind means participants don't know their assignment; double-blind means neither participants nor investigators know; triple-blind includes blinded data analysts.",
        keyPoints: [
          "Randomization creates comparable groups",
          "Eliminates selection bias",
          "Balances known and unknown confounders",
          "Blinding prevents information bias",
          "Double-blind preferred when feasible",
          "Placebo controls improve blinding"
        ]
      },
      {
        id: "8-3",
        title: "Ethical Considerations in RCTs",
        content: "RCTs must meet ethical standards including informed consent, equipoise (genuine uncertainty about which treatment is better), favorable risk-benefit ratio, and provisions for participant safety. Ethics committees review and approve trials. Participants can withdraw at any time.",
        keyPoints: [
          "Informed consent is mandatory",
          "Equipoise must exist",
          "Benefits must outweigh risks",
          "Independent ethics review required",
          "Safety monitoring throughout trial",
          "Right to withdraw without penalty"
        ]
      },
      {
        id: "8-4",
        title: "Analysis and Interpretation",
        content: "RCT analysis typically uses intention-to-treat principle, analyzing participants in their assigned groups regardless of compliance. This preserves randomization benefits. Per-protocol analysis examining only compliant participants may be done secondarily but can introduce bias.",
        keyPoints: [
          "Intention-to-treat preserves randomization",
          "All randomized participants included in analysis",
          "Maintains groups' comparability",
          "Per-protocol analysis is secondary",
          "Effect size and confidence intervals reported",
          "Statistical and clinical significance both important"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Bias in Epidemiological Studies",
    description: "Types of bias and strategies to minimize them",
    topics: [
      {
        id: "9-1",
        title: "Selection Bias",
        content: "Selection bias occurs when the selection of study participants or their continued participation is related to both exposure and outcome. Common types include volunteer bias, loss to follow-up bias, and healthy worker effect. Selection bias can make associations appear stronger or weaker than they truly are.",
        keyPoints: [
          "Occurs in subject selection or retention",
          "Relates to both exposure and outcome",
          "Cannot be corrected in analysis",
          "Prevention is critical",
          "High participation rates reduce risk",
          "Random selection from defined population helps"
        ]
      },
      {
        id: "9-2",
        title: "Information Bias",
        content: "Information bias results from errors in measuring exposure or outcome. Types include recall bias (differential memory between cases and controls), interviewer bias (differential questioning), and misclassification (incorrect categorization of exposure or disease status). Blinding and objective measures reduce information bias.",
        keyPoints: [
          "Errors in measurement of variables",
          "Recall bias in case-control studies",
          "Observer bias in outcome assessment",
          "Misclassification can be differential or non-differential",
          "Blinding reduces information bias",
          "Objective measurements preferred"
        ]
      },
      {
        id: "9-3",
        title: "Confounding",
        content: "Confounding occurs when an extraneous factor is associated with both the exposure and outcome, distorting the true relationship. Confounders must be associated with exposure, be risk factors for disease, and not be on the causal pathway. Age, sex, and smoking are common confounders.",
        keyPoints: [
          "Third variable associated with exposure and outcome",
          "Distorts true association",
          "Not on causal pathway",
          "Control through design: randomization, restriction, matching",
          "Control in analysis: stratification, multivariable adjustment",
          "Residual confounding may remain"
        ]
      },
      {
        id: "9-4",
        title: "Strategies to Minimize Bias",
        content: "Bias prevention strategies include careful study design, random selection and allocation, blinding, standardized data collection, objective outcome measures, and validation studies. In analysis, sensitivity analyses can assess bias impact. Prevention is always preferable to analytical correction.",
        keyPoints: [
          "Prevention in design is most effective",
          "Randomization controls confounding",
          "Blinding prevents information bias",
          "Standardized protocols reduce variability",
          "Objective measures less prone to bias",
          "High response rates prevent selection bias",
          "Multiple control groups can detect selection bias"
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Assessing Causation",
    description: "Criteria and frameworks for causal inference",
    topics: [
      {
        id: "10-1",
        title: "Bradford Hill Criteria for Causation",
        content: "Bradford Hill proposed criteria to help judge whether an association is causal: strength of association, consistency, specificity, temporality, biological gradient (dose-response), plausibility, coherence, experiment, and analogy. Temporality (exposure precedes outcome) is the only essential criterion.",
        keyPoints: [
          "Strength: stronger associations more likely causal",
          "Consistency: reproducibility across studies",
          "Specificity: one cause, one effect",
          "Temporality: exposure must precede disease (essential)",
          "Biological gradient: dose-response relationship",
          "Plausibility: biological mechanism makes sense",
          "Coherence: fits existing knowledge",
          "Experiment: intervention changes outcome",
          "Analogy: similar cause-effect relationships exist"
        ]
      },
      {
        id: "10-2",
        title: "Types of Causal Relationships",
        content: "Causal relationships can be direct (exposure directly causes disease) or indirect (exposure acts through intermediates). Sufficient causes produce disease by themselves; necessary causes must be present for disease to occur. Multiple causes often interact (multifactorial causation). Component causes combine in causal mechanisms.",
        keyPoints: [
          "Direct causation: no intermediates",
          "Indirect: acts through mediators",
          "Sufficient cause: alone produces disease",
          "Necessary cause: required for disease",
          "Most diseases have multiple causes",
          "Component causes combine in sufficient causes"
        ]
      },
      {
        id: "10-3",
        title: "Alternative Explanations for Associations",
        content: "An observed association between exposure and disease may be due to: true causal relationship, chance (random error), bias (systematic error), or confounding. Statistical tests assess chance, study design addresses bias, and analytical methods control confounding. Only after excluding these alternatives can causation be inferred.",
        keyPoints: [
          "Chance: random variation in sampling",
          "Bias: systematic error in design or measurement",
          "Confounding: mixing of effects",
          "True causal association",
          "Must systematically exclude non-causal explanations",
          "Statistical significance doesn't prove causation"
        ]
      }
    ]
  },
  {
    id: 11,
    title: "Screening for Disease",
    description: "Principles and evaluation of screening programs",
    topics: [
      {
        id: "11-1",
        title: "Principles of Screening",
        content: "Screening identifies apparently healthy people who may have disease. It differs from diagnosis (applied to symptomatic people). Effective screening requires: important health problem, accepted treatment, facilities for diagnosis and treatment, recognizable early stage, suitable test, acceptable test, natural history understood, agreed policy on whom to treat, economically balanced costs, and continuous process.",
        keyPoints: [
          "Applied to asymptomatic populations",
          "Aims for early detection",
          "Requires treatable disease with detectable preclinical phase",
          "Test must be acceptable, safe, and accurate",
          "Cost-effective relative to benefits",
          "Requires infrastructure for follow-up"
        ]
      },
      {
        id: "11-2",
        title: "Sensitivity, Specificity, and Predictive Values",
        content: "Sensitivity is the proportion of diseased people correctly identified by the test (true positive rate). Specificity is the proportion of disease-free people correctly identified (true negative rate). Positive predictive value (PPV) is the probability that a person with a positive test has disease. Negative predictive value (NPV) is the probability that a person with negative test is disease-free.",
        keyPoints: [
          "Sensitivity = TP / (TP + FN): detects true positives",
          "Specificity = TN / (TN + FP): detects true negatives",
          "PPV = TP / (TP + FP): probability of disease given positive test",
          "NPV = TN / (TN + FN): probability of no disease given negative test",
          "PPV and NPV depend on disease prevalence",
          "Trade-off between sensitivity and specificity"
        ]
      },
      {
        id: "11-3",
        title: "Evaluation of Screening Programs",
        content: "Screening programs must demonstrate benefit through reduced morbidity or mortality. Evaluation challenges include lead time bias (early detection without life extension), length bias (screening preferentially detects slow-growing cases), and overdiagnosis (detection of non-progressive disease). Randomized trials provide best evidence for screening effectiveness.",
        keyPoints: [
          "Must reduce morbidity or mortality, not just detect early",
          "Lead time bias: earlier diagnosis doesn't mean longer survival",
          "Length bias: screens detect slower-growing tumors",
          "Overdiagnosis: detecting disease that wouldn't cause harm",
          "Randomized trials needed for evaluation",
          "Measure mortality, not just survival from diagnosis"
        ]
      }
    ]
  },
  {
    id: 12,
    title: "Infectious Disease Epidemiology",
    description: "Concepts specific to infectious disease epidemiology",
    topics: [
      {
        id: "12-1",
        title: "Chain of Infection",
        content: "Infectious disease transmission requires: infectious agent, reservoir (where agent lives), portal of exit, mode of transmission, portal of entry, and susceptible host. Breaking any link in this chain prevents disease transmission. Understanding the chain guides prevention strategies.",
        keyPoints: [
          "Infectious agent: pathogen causing disease",
          "Reservoir: habitat where agent lives and multiplies",
          "Portal of exit: how agent leaves reservoir",
          "Transmission: direct or indirect spread",
          "Portal of entry: how agent enters new host",
          "Susceptible host: can become infected",
          "Breaking any link stops transmission"
        ]
      },
      {
        id: "12-2",
        title: "Modes of Transmission",
        content: "Direct transmission includes person-to-person contact, droplet spread, and transplacental. Indirect transmission includes airborne, vehicle-borne (food, water, fomites), and vector-borne (mechanical or biological). Understanding transmission mode is essential for designing effective control measures.",
        keyPoints: [
          "Direct: immediate transfer from source",
          "Indirect: intermediate vehicle or vector",
          "Airborne: droplet nuclei or dust particles",
          "Vehicle: food, water, or objects",
          "Vector: insects or animals",
          "Different modes require different control strategies"
        ]
      },
      {
        id: "12-3",
        title: "Herd Immunity and Vaccination",
        content: "Herd immunity occurs when a sufficient proportion of a population is immune, reducing disease transmission and protecting susceptible individuals. The herd immunity threshold depends on the basic reproduction number (R0). Vaccination programs aim to achieve herd immunity levels to eliminate disease transmission.",
        keyPoints: [
          "Population-level immunity protects individuals",
          "Threshold depends on R0: 1 - (1/R0)",
          "Higher R0 requires higher vaccination coverage",
          "Protects those who cannot be vaccinated",
          "Can lead to disease elimination",
          "Requires sustained high coverage"
        ]
      },
      {
        id: "12-4",
        title: "Epidemic Investigation for Infectious Diseases",
        content: "Investigating infectious disease outbreaks requires identifying the source, mode of transmission, and exposed population. Key steps include creating epidemic curves to determine outbreak type, calculating attack rates, identifying index and secondary cases, and determining the infectious period. Control measures target the chain of infection.",
        keyPoints: [
          "Identify source and vehicle of infection",
          "Determine mode of transmission",
          "Calculate attack rates and secondary attack rates",
          "Identify index case and transmission patterns",
          "Trace contacts of cases",
          "Implement immediate control measures",
          "Environmental investigation when appropriate"
        ]
      }
    ]
  },
  {
    id: 13,
    title: "Chronic Disease Epidemiology",
    description: "Epidemiological approaches to chronic diseases",
    topics: [
      {
        id: "13-1",
        title: "Characteristics of Chronic Diseases",
        content: "Chronic diseases are non-communicable, long-duration conditions with slow progression. They include cardiovascular disease, cancer, diabetes, and respiratory diseases. Unlike infectious diseases, they have multiple risk factors, long latency periods, and complex causation requiring long-term studies to investigate.",
        keyPoints: [
          "Non-communicable and long-lasting",
          "Multifactorial causation",
          "Long latency and induction periods",
          "Slow, progressive course",
          "Major causes of morbidity and mortality",
          "Require long-term cohort studies"
        ]
      },
      {
        id: "13-2",
        title: "Risk Factors for Chronic Diseases",
        content: "Chronic disease risk factors include modifiable behaviors (smoking, diet, physical inactivity, alcohol), biological factors (hypertension, cholesterol, obesity, diabetes), and non-modifiable factors (age, sex, genetics). Risk factors often cluster and interact synergistically, amplifying disease risk.",
        keyPoints: [
          "Behavioral: smoking, diet, exercise, alcohol",
          "Biological: blood pressure, cholesterol, glucose",
          "Demographic: age, sex, family history",
          "Socioeconomic factors influence exposure",
          "Multiple risk factors often coexist",
          "Synergistic effects common"
        ]
      },
      {
        id: "13-3",
        title: "Prevention Strategies",
        content: "Primary prevention prevents disease onset (health promotion, vaccination). Secondary prevention detects disease early (screening programs). Tertiary prevention reduces complications and disability in those with disease (treatment, rehabilitation). Population strategies target whole populations; high-risk strategies target high-risk individuals.",
        keyPoints: [
          "Primary: prevent disease occurrence",
          "Secondary: early detection and treatment",
          "Tertiary: reduce complications and disability",
          "Population approach: shift entire risk distribution",
          "High-risk approach: target high-risk individuals",
          "Combination strategies often most effective"
        ]
      }
    ]
  },
  {
    id: 14,
    title: "Environmental and Occupational Epidemiology",
    description: "Investigating environmental and workplace health hazards",
    topics: [
      {
        id: "14-1",
        title: "Environmental Exposures and Health",
        content: "Environmental epidemiology studies health effects of environmental exposures including air pollution, water contamination, toxic substances, radiation, and climate factors. Challenges include low-level exposures, long latency periods, multiple exposures, and difficulty measuring individual exposure accurately.",
        keyPoints: [
          "Studies air, water, soil contamination effects",
          "Assesses chemical, physical, biological hazards",
          "Long latency complicates causal inference",
          "Exposure assessment challenging",
          "Geographic correlation studies common",
          "Biomarkers improve exposure measurement"
        ]
      },
      {
        id: "14-2",
        title: "Occupational Health Studies",
        content: "Occupational epidemiology investigates workplace health hazards. Workers experience higher exposures to specific agents, making them sentinel populations. Studies use industrial cohorts, examine specific exposures, and must account for healthy worker effect (workers healthier than general population). Dose-response relationships are key evidence.",
        keyPoints: [
          "Studies workplace exposures and diseases",
          "Workers have higher, documented exposures",
          "Healthy worker effect biases results",
          "Cohort studies of industrial populations common",
          "Dose-response evidence strengthens causation",
          "Occupational limits protect workers"
        ]
      },
      {
        id: "14-3",
        title: "Assessing Environmental Hazards",
        content: "Environmental risk assessment includes hazard identification, dose-response assessment, exposure assessment, and risk characterization. Epidemiological studies contribute evidence for hazard identification and dose-response. Challenges include confounding by lifestyle factors, misclassification of exposure, and ethical constraints on human studies.",
        keyPoints: [
          "Hazard identification: does it cause harm?",
          "Dose-response: relationship between exposure and effect",
          "Exposure assessment: who is exposed, how much?",
          "Risk characterization: probability and magnitude of harm",
          "Epidemiology provides human evidence",
          "Toxicology studies supplement human data"
        ]
      }
    ]
  },
  {
    id: 15,
    title: "Epidemiology and Health Policy",
    description: "Using epidemiology to inform public health decisions",
    topics: [
      {
        id: "15-1",
        title: "Evidence-Based Public Health",
        content: "Evidence-based public health applies the best available scientific evidence to public health decision-making. It integrates epidemiological data, community preferences, and resource considerations. The process includes: defining the problem, systematic review of evidence, assessing applicability, implementing interventions, and evaluating outcomes.",
        keyPoints: [
          "Uses best available scientific evidence",
          "Systematic approach to decision-making",
          "Considers effectiveness and cost-effectiveness",
          "Incorporates community values",
          "Requires ongoing evaluation",
          "Balances evidence with practical constraints"
        ]
      },
      {
        id: "15-2",
        title: "Surveillance Systems",
        content: "Public health surveillance is the ongoing systematic collection, analysis, and interpretation of health data for planning, implementing, and evaluating public health practice. Types include passive surveillance (routine reporting), active surveillance (proactive case finding), and sentinel surveillance (selected reporting sites). Surveillance guides priority-setting and evaluates interventions.",
        keyPoints: [
          "Continuous monitoring of disease occurrence",
          "Passive: routine case reporting",
          "Active: systematic case finding",
          "Sentinel: selected sites report",
          "Detects outbreaks and trends",
          "Guides resource allocation and interventions",
          "Evaluates program effectiveness"
        ]
      },
      {
        id: "15-3",
        title: "Translating Evidence to Policy",
        content: "Translating epidemiological evidence into policy requires considering scientific validity, public health importance, feasibility, acceptability, cost-effectiveness, and equity. Policymakers weigh evidence against political, economic, and social factors. Epidemiologists must communicate findings clearly and acknowledge uncertainties.",
        keyPoints: [
          "Scientific evidence is necessary but not sufficient",
          "Consider magnitude of public health impact",
          "Assess intervention feasibility and acceptability",
          "Economic evaluation guides resource allocation",
          "Address equity and vulnerable populations",
          "Clear communication essential",
          "Acknowledge limitations and uncertainties"
        ]
      }
    ]
  }
];

export const getChapterById = (id: number): Chapter | undefined => {
  return bookContent.find(chapter => chapter.id === id);
};

export const getTopicById = (topicId: string): { chapter: Chapter; topic: Topic } | undefined => {
  for (const chapter of bookContent) {
    const topic = chapter.topics.find(t => t.id === topicId);
    if (topic) {
      return { chapter, topic };
    }
  }
  return undefined;
};

export const getAllTopics = (): Array<{ chapterId: number; topic: Topic }> => {
  const allTopics: Array<{ chapterId: number; topic: Topic }> = [];
  bookContent.forEach(chapter => {
    chapter.topics.forEach(topic => {
      allTopics.push({ chapterId: chapter.id, topic });
    });
  });
  return allTopics;
};
