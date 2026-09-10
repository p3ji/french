import type { Theme } from '../types';

export const themes: Theme[] = [
  {
    id: 'training',
    title: 'Training',
    french: 'Apprendre au travail.',
    description: 'Training requests, professional development, and putting new skills to work.',
    lessons: [
      {
        title: 'Find the condition before you act',
        explanation: 'A workplace message often gives a condition before an action. Repérez « à condition de », « sous réserve de » and « avant de ». They tell you what must happen first. In writing, pour is followed by an infinitive when the subject stays the same.',
        example: 'Pour suivre cette formation, vous devez obtenir l’accord de votre gestionnaire.',
        translation: 'To take this training, you must obtain your manager’s approval.'
      },
      {
        title: 'Purpose and concession',
        explanation: 'Pour que introduces a purpose with a conjugated verb in the subjunctive. Bien que also takes the subjunctive and signals a concession: something remains true despite another fact. Do not turn a recommendation into a requirement when reading.',
        example: 'Bien que la formation soit facultative, elle est recommandée pour que chacun puisse utiliser le nouvel outil.',
        translation: 'Although the training is optional, it is recommended so that everyone can use the new tool.'
      }
    ]
  },
  {
    id: 'teamwork',
    title: 'Teamwork',
    french: 'Avancer ensemble.',
    description: 'Shared responsibilities, useful feedback, and clear handovers.',
    lessons: [
      {
        title: 'Who does what?',
        explanation: 'Identify the person responsible for each action. Nous, vous and leur can refer to different groups in a message. An indirect object introduced by à becomes lui or leur; it does not agree with the object being sent.',
        example: 'Les collègues attendent le compte rendu. Je leur envoie le document cet après-midi.',
        translation: 'The colleagues are waiting for the minutes. I am sending them the document this afternoon.'
      },
      {
        title: 'Make the connection',
        explanation: 'Toutefois introduces a limitation; par conséquent introduces a result. Distinguishing those links helps you follow the argument. In writing, the past participle with avoir agrees with a direct object placed before the verb.',
        example: 'Les tâches que nous avons réparties seront revues vendredi; toutefois, les responsables restent les mêmes.',
        translation: 'The tasks we allocated will be reviewed on Friday; however, the people responsible remain the same.'
      }
    ]
  },
  {
    id: 'projects',
    title: 'Projects',
    french: 'Du plan à l’action.',
    description: 'Milestones, deadlines, budgets, and the decisions behind them.',
    lessons: [
      {
        title: 'Read dates precisely',
        explanation: 'D’ici vendredi sets a deadline. Depuis describes something that began in the past and continues. Pendant gives a duration. A postponement changes the date; a cancellation ends the activity. Check which one the text actually says.',
        example: 'Le projet se poursuit depuis mars. Le rapport doit être remis d’ici vendredi.',
        translation: 'The project has been ongoing since March. The report must be submitted by Friday.'
      },
      {
        title: 'Conditions and consequences',
        explanation: 'For a hypothetical present or future situation, use si + imparfait, then the conditional. For an unreal past situation, use si + plus-que-parfait, then the past conditional. A risk described as possible is not a confirmed outcome.',
        example: 'Si nous avions reçu les données plus tôt, nous aurions terminé l’analyse.',
        translation: 'If we had received the data earlier, we would have finished the analysis.'
      }
    ]
  },
  {
    id: 'telework',
    title: 'Telework',
    french: 'Travailler autrement.',
    description: 'Work arrangements, availability, and effective communication at a distance.',
    lessons: [
      {
        title: 'Separate rules from suggestions',
        explanation: 'Il faut and devoir express an obligation. Il est conseillé de expresses advice. Pouvoir expresses possibility or permission. Notice whether a rule applies to everyone or just one team.',
        example: 'Il est conseillé de réserver un bureau; les visiteurs doivent toutefois s’inscrire à l’accueil.',
        translation: 'Booking a desk is recommended; visitors must nevertheless register at reception.'
      },
      {
        title: 'Read a balanced argument',
        explanation: 'Certes… mais… acknowledges one point before qualifying it. Ne… que means only, not a full negation. Conditional forms can soften a proposal without making it an established policy.',
        example: 'Certes, le travail à distance facilite la concentration, mais il ne convient qu’à certaines tâches.',
        translation: 'Admittedly, remote work makes concentration easier, but it is suitable only for certain tasks.'
      }
    ]
  },
  {
    id: 'leadership',
    title: 'Leadership',
    french: 'Donner le cap.',
    description: 'Delegation, fair decisions, recognition, and leading through change.',
    lessons: [
      {
        title: 'Understand the purpose',
        explanation: 'A message can inform, invite, request, or announce a decision. Look at its main action rather than a single detail. In polite requests, pourriez-vous is less direct than devez-vous.',
        example: 'Pourriez-vous proposer deux priorités pour notre prochaine rencontre?',
        translation: 'Could you suggest two priorities for our next meeting?'
      },
      {
        title: 'Keep the nuance',
        explanation: 'A nuanced argument can support a measure while limiting its scope. Pour autant does not mean automatically. Dont replaces a phrase introduced by de, including avoir besoin de and être responsible de.',
        example: 'L’autonomie dont l’équipe a need ne dispense pas la gestionnaire de préciser les attentes.',
        translation: 'The autonomy the team needs does not relieve the manager of clarifying expectations.'
      }
    ]
  },
  {
    id: 'conflict',
    title: 'Conflict resolution',
    french: 'Trouver un terrain d’entente.',
    description: 'Clarifying concerns, listening carefully, and agreeing on next steps.',
    lessons: [
      {
        title: 'Describe facts without assigning blame',
        explanation: 'Neutral language describes an observable event rather than a person’s character. Avant de and après avoir place actions in order. A meeting to clarify facts does not imply that a complaint has already been upheld.',
        example: 'Avant de proposer une solution, nous allons clarifier les attentes de chacun.',
        translation: 'Before suggesting a solution, we will clarify everyone’s expectations.'
      },
      {
        title: 'Disagree constructively',
        explanation: 'Bien que concedes a point; à moins que introduces an exception and takes the subjunctive. A proposal in the conditional is not a promise. Read both what an agreement resolves and what it leaves open.',
        example: 'Bien que nos points de vue diffèrent, nous pourrions convenir d’une période d’essai.',
        translation: 'Although our views differ, we could agree on a trial period.'
      }
    ]
  },
  {
    id: 'policy',
    title: 'Policy & Governance',
    french: 'Politiques et gouvernance.',
    description: 'Directives, policy briefs, treasury board submissions, and legislative compliance.',
    lessons: [
      {
        title: 'Distinguish mandatory directives from guidelines',
        explanation: 'Terms like « doit », « est tenu de » indicate legal obligation. Terms like « est invité à » or « dans la mesure du possible » indicate guidelines.',
        example: 'Le ministère doit publier son rapport annuel avant le 31 mars.',
        translation: 'The department must publish its annual report before March 31.'
      },
      {
        title: 'Trace administrative consultations',
        explanation: 'Prepositions like « conformément à », « en vertu de » cite authority. Conjunctions like « afin de » indicate objectives.',
        example: 'Conformément à la directive, nous avons consulté les parties prenantes afin d’établir les normes.',
        translation: 'In accordance with the directive, we consulted stakeholders to establish standard norms.'
      }
    ]
  },
  {
    id: 'procurement',
    title: 'Procurement & Contracting',
    french: 'Approvisionnement et contrats.',
    description: 'RFPs, vendor management, statement of work, and standing offers.',
    lessons: [
      {
        title: 'Understand contract requirements',
        explanation: 'Statements of work use strict verbs: « devra fournir », « est responsable de la livraison ». Clarify deliverables versus timelines.',
        example: 'Le fournisseur devra livrer les prototypes dans un délai de trente jours.',
        translation: 'The vendor must deliver the prototypes within thirty days.'
      },
      {
        title: 'Evaluate tendering criteria',
        explanation: 'Criteria descriptions use comparative structures: « l’offre la plus avantageuse », « répondant aux exigences minimales ».',
        example: 'Le contrat sera attribué au soumissionnaire répondant à tous les critères obligatoires.',
        translation: 'The contract will be awarded to the bidder meeting all mandatory criteria.'
      }
    ]
  },
  {
    id: 'bilingualism',
    title: 'Official Languages & Culture',
    french: 'Langues officielles et culture.',
    description: 'Language of work, service to the public, and bilingual workplace rights.',
    lessons: [
      {
        title: 'Identify designated bilingual positions',
        explanation: 'Understand language obligations in communications with the public (« offrir le service dans les deux langues officielles »).',
        example: 'Les employés situés dans une région désignée ont le droit de travailler dans la langue officielle de leur choix.',
        translation: 'Employees located in a designated region have the right to work in the official language of their choice.'
      },
      {
        title: 'Respect language rights in meetings',
        explanation: 'Active offer « offre active » means greeting clients and colleagues in both official languages from the outset.',
        example: 'L’offre active exige de saluer le public en français et en anglais dès le premier contact.',
        translation: 'Active offer requires greeting the public in French and English upon first contact.'
      }
    ]
  },
  {
    id: 'public-engagement',
    title: 'Public Engagement',
    french: 'Mobilisation des citoyens.',
    description: 'Town halls, stakeholder feedback, public consultations, and press releases.',
    lessons: [
      {
        title: 'Synthesize feedback trends',
        explanation: 'Notice expressions summarizing public sentiment: « la majorité des répondants », « certains participants soulignent ».',
        example: 'Bien que la majorité soutienne le projet, plusieurs citoyens expriment des réserves.',
        translation: 'Although the majority supports the project, several citizens express reservations.'
      },
      {
        title: 'Craft neutral public announcements',
        explanation: 'Public service communications maintain objectivity using passive voice or third-person phrasing (« il est porté à l’attention du public »).',
        example: 'Les modifications réglementaires entreront en vigueur le premier octobre prochain.',
        translation: 'The regulatory changes will take effect next October first.'
      }
    ]
  },
  {
    id: 'it-digital',
    title: 'IT & Digital Transformation',
    french: 'Numérique et technologies.',
    description: 'Cloud migration, cybersecurity, accessibility, and modernizing legacy systems.',
    lessons: [
      {
        title: 'Track technical implementation milestones',
        explanation: 'Follow sequence adverbs: « d’abord », « en second lieu », « à terme ». Distinguish technical requirements from user training.',
        example: 'À terme, la nouvelle plateforme remplacera l’ensemble des anciens systèmes de gestion.',
        translation: 'Eventually, the new platform will replace all legacy management systems.'
      },
      {
        title: 'Security directives vs user compliance',
        explanation: 'Conditional instructions like « en cas d’incident, veuillez informer » detail security response steps.',
        example: 'En cas de doute sur la sécurité d’un courriel, ne cliquez sur aucun lien.',
        translation: 'If in doubt about email security, do not click on any links.'
      }
    ]
  },
  {
    id: 'finance',
    title: 'Resource & Financial Management',
    french: 'Gestion financière et ressources.',
    description: 'Fiscal year variance, budget allocations, audits, and cost projections.',
    lessons: [
      {
        title: 'Analyze budget reports',
        explanation: 'Financial vocabulary: « écart budgétaire », « crédits accordés », « dépenses réelles ». Compare projections to actual expenditures.',
        example: 'Malgré les dépenses imprévues au deuxième trimestre, le budget demeure équilibré.',
        translation: 'Despite unforeseen expenses in Q2, the budget remains balanced.'
      },
      {
        title: 'Cost controls and approval thresholds',
        explanation: 'Approval limits use comparative thresholds: « pour tout montant supérieur à », « jusqu’à concurrence de ».',
        example: 'Toute dépense dépassant dix mille dollars requiert l’autorisation de la direction.',
        translation: 'Any expenditure exceeding ten thousand dollars requires management authorization.'
      }
    ]
  },
  {
    id: 'staffing',
    title: 'Staffing & Human Resources',
    french: 'Dotation et ressources humaines.',
    description: 'Job postings, merit criteria, hiring boards, and performance appraisals.',
    lessons: [
      {
        title: 'Evaluate candidate qualifications',
        explanation: 'Merit criteria distinguish essential qualifications (« qualifications essentielles ») from asset qualifications (« qualifications constituant un atout »).',
        example: 'L’expérience en gestion de projet est une qualification essentielle pour ce poste.',
        translation: 'Project management experience is an essential qualification for this position.'
      },
      {
        title: 'Conduct fair performance reviews',
        explanation: 'Constructive performance evaluations use objective indicators and action verbs (« atteindre les objectifs », « favoriser le perfectionnement »).',
        example: 'L’employé a atteint tous ses objectifs annuels tout en perfectionnant ses compétences.',
        translation: 'The employee met all annual goals while enhancing their skills.'
      }
    ]
  },
  {
    id: 'crisis-mgmt',
    title: 'Crisis & Emergency Response',
    french: 'Gestion de crise et urgences.',
    description: 'Business continuity plans, rapid triage, risk mitigation, and emergency comms.',
    lessons: [
      {
        title: 'Identify emergency priorities',
        explanation: 'Imperative and urgent modal verbs (« il est impératif de », « immédiatement ») signify critical crisis protocols.',
        example: 'Il est impératif d’activer le plan de continuité des activités dès la confirmation de l’incident.',
        translation: 'It is imperative to activate the business continuity plan as soon as the incident is confirmed.'
      },
      {
        title: 'Communicate during operational disruptions',
        explanation: 'Status updates clarify active measures versus pending assessments (« les équipes évaluent », « les services essentiels restent maintenus »).',
        example: 'Bien que l’édifice soit fermé, les services essentiels demeurent accessibles en ligne.',
        translation: 'Although the building is closed, essential services remain accessible online.'
      }
    ]
  },
  {
    id: 'audit',
    title: 'Audit, Risk & Evaluation',
    french: 'Vérification et gestion des risques.',
    description: 'Compliance audits, risk registries, recommendations, and management action plans.',
    lessons: [
      {
        title: 'Interpret audit findings',
        explanation: 'Audit reports balance findings with recommendations: « la vérification a révélé que », « il est recommandé de ».',
        example: 'La vérification a révélé des lacunes mineures dans le suivi des dossiers.',
        translation: 'The audit revealed minor gaps in file tracking.'
      },
      {
        title: 'Implement management action plans',
        explanation: 'Action plans assign accountability and target completion dates (« la direction s’engage à », « d’ici le trimestre prochain »).',
        example: 'La direction s’engage à mettre à jour les procédures avant la fin de l’exercice financier.',
        translation: 'Management undertakes to update procedures before the end of the fiscal year.'
      }
    ]
  },
  {
    id: 'strategic-planning',
    title: 'Strategic Planning',
    french: 'Planification stratégique.',
    description: 'Departmental plans, key performance indicators, strategic priorities, and vision.',
    lessons: [
      {
        title: 'Align operational goals with strategic vision',
        explanation: 'Strategic documents link high-level goals to concrete indicators (« afin d’atteindre la vision », « mesuré par »).',
        example: 'Le plan stratégique vise à moderniser les services publics sur une période de cinq ans.',
        translation: 'The strategic plan aims to modernize public services over a five-year period.'
      },
      {
        title: 'Monitor Key Performance Indicators (KPIs)',
        explanation: 'Progress tracking compares targets to achievements (« par rapport aux cibles fixées »).',
        example: 'Les résultats obtenus dépassent les cibles fixées lors de la planification initiale.',
        translation: 'The results obtained exceed the targets set during initial planning.'
      }
    ]
  },
  {
    id: 'services-canada',
    title: 'Service Delivery & Client Relations',
    french: 'Prestation de services aux citoyens.',
    description: 'Service standards, accessibility, client satisfaction, and omnichannel support.',
    lessons: [
      {
        title: 'Uphold public service standards',
        explanation: 'Service standards communicate clear expectations to citizens (« traitement des demandes en dix jours ouvrables »).',
        example: 'Nous nous engageons à traiter les demandes d’information dans un délai de 48 heures.',
        translation: 'We are committed to processing requests for information within 48 hours.'
      },
      {
        title: 'Handle client feedback with professionalism',
        explanation: 'Client service messaging prioritizes active listening and resolution (« prendre en note la préoccupation », « proposer un suivi »).',
        example: 'Afin d’améliorer nos services, nous prenons en considération tous les commentaires reçus.',
        translation: 'In order to improve our services, we take into consideration all feedback received.'
      }
    ]
  },
  {
    id: 'values-ethics',
    title: 'Values & Ethics in Public Service',
    french: 'Valeurs et éthique de la fonction publique.',
    description: 'Conflict of interest, stewardship, respect for democracy, and integrity.',
    lessons: [
      {
        title: 'Navigate conflicts of interest',
        explanation: 'Ethical guidelines require proactive disclosure (« déclarer toute situation », « prévenir les conflits d’intérêts »).',
        example: 'Tout fonctionnaire doit déclarer sans délai les activités pouvant créer un conflit d’intérêts.',
        translation: 'Every public servant must declare without delay activities that could create a conflict of interest.'
      },
      {
        title: 'Stewardship of public funds and trust',
        explanation: 'Public service ethics emphasize integrity and transparency (« agir avec probité », « préserver la confiance du public »).',
        example: 'L’utilisation responsable des ressources publiques préserve la confiance des citoyens.',
        translation: 'The responsible use of public resources preserves citizen trust.'
      }
    ]
  }
];
