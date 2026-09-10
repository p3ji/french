import type { Question } from '../types';
export const writingQuestions: Question[] = [
  {
    "id": "wq-001",
    "theme": "training",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Formation professionnelle] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-002",
    "theme": "teamwork",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Travail d’équipe] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-003",
    "theme": "projects",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Gestion de projet] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-004",
    "theme": "telework",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Travail à distance] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-005",
    "theme": "leadership",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Direction et leadership] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-006",
    "theme": "conflict",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Règlement des différends] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-007",
    "theme": "policy",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Politiques et gouvernance] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-008",
    "theme": "procurement",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Approvisionnement et contrats] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-009",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Langues officielles] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-010",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Mobilisation des citoyens] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-011",
    "theme": "it-digital",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Numérique et technologies] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-012",
    "theme": "finance",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Gestion financière] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-013",
    "theme": "staffing",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Dotation et RH] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-014",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Gestion de crise] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-015",
    "theme": "audit",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Vérification et risques] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-016",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Planification stratégique] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-017",
    "theme": "services-canada",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Prestation de services] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-018",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Valeurs et éthique] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-019",
    "theme": "training",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Formation professionnelle] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-020",
    "theme": "teamwork",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Travail d’équipe] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-021",
    "theme": "projects",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Gestion de projet] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-022",
    "theme": "telework",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Travail à distance] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-023",
    "theme": "leadership",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Direction et leadership] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-024",
    "theme": "conflict",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Règlement des différends] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-025",
    "theme": "policy",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Politiques et gouvernance] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-026",
    "theme": "procurement",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Approvisionnement et contrats] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-027",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Langues officielles] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-028",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Mobilisation des citoyens] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-029",
    "theme": "it-digital",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Numérique et technologies] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-030",
    "theme": "finance",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Gestion financière] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-031",
    "theme": "staffing",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Dotation et RH] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-032",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Gestion de crise] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-033",
    "theme": "audit",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Vérification et risques] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-034",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Planification stratégique] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-035",
    "theme": "services-canada",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Prestation de services] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-036",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Valeurs et éthique] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-037",
    "theme": "training",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Formation professionnelle] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-038",
    "theme": "teamwork",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Travail d’équipe] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-039",
    "theme": "projects",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Gestion de projet] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-040",
    "theme": "telework",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Travail à distance] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-041",
    "theme": "leadership",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Direction et leadership] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-042",
    "theme": "conflict",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Règlement des différends] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-043",
    "theme": "policy",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Politiques et gouvernance] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-044",
    "theme": "procurement",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Approvisionnement et contrats] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-045",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Langues officielles] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-046",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Mobilisation des citoyens] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-047",
    "theme": "it-digital",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Numérique et technologies] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-048",
    "theme": "finance",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Gestion financière] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-049",
    "theme": "staffing",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Dotation et RH] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-050",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Gestion de crise] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-051",
    "theme": "audit",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Vérification et risques] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-052",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Planification stratégique] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-053",
    "theme": "services-canada",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Prestation de services] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-054",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Valeurs et éthique] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-055",
    "theme": "training",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Formation professionnelle] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-056",
    "theme": "teamwork",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Travail d’équipe] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-057",
    "theme": "projects",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Gestion de projet] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-058",
    "theme": "telework",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Travail à distance] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-059",
    "theme": "leadership",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Direction et leadership] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-060",
    "theme": "conflict",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Règlement des différends] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-061",
    "theme": "policy",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Politiques et gouvernance] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-062",
    "theme": "procurement",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Approvisionnement et contrats] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-063",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Langues officielles] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-064",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Mobilisation des citoyens] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-065",
    "theme": "it-digital",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Numérique et technologies] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-066",
    "theme": "finance",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Gestion financière] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-067",
    "theme": "staffing",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Dotation et RH] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-068",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Gestion de crise] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-069",
    "theme": "audit",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Vérification et risques] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-070",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Planification stratégique] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-071",
    "theme": "services-canada",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Prestation de services] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-072",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Valeurs et éthique] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-073",
    "theme": "training",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Formation professionnelle] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-074",
    "theme": "teamwork",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Travail d’équipe] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-075",
    "theme": "projects",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Gestion de projet] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-076",
    "theme": "telework",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Travail à distance] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-077",
    "theme": "leadership",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Direction et leadership] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-078",
    "theme": "conflict",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Règlement des différends] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-079",
    "theme": "policy",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Politiques et gouvernance] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-080",
    "theme": "procurement",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Approvisionnement et contrats] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-081",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Langues officielles] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-082",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Mobilisation des citoyens] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-083",
    "theme": "it-digital",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Numérique et technologies] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-084",
    "theme": "finance",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Gestion financière] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-085",
    "theme": "staffing",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Dotation et RH] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-086",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Gestion de crise] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-087",
    "theme": "audit",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Vérification et risques] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-088",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Planification stratégique] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-089",
    "theme": "services-canada",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Prestation de services] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-090",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Valeurs et éthique] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-091",
    "theme": "training",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Formation professionnelle] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-092",
    "theme": "teamwork",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Travail d’équipe] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-093",
    "theme": "projects",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Gestion de projet] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-094",
    "theme": "telework",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Travail à distance] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-095",
    "theme": "leadership",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Direction et leadership] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-096",
    "theme": "conflict",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Règlement des différends] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-097",
    "theme": "policy",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Politiques et gouvernance] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-098",
    "theme": "procurement",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Approvisionnement et contrats] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-099",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Langues officielles] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-100",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Mobilisation des citoyens] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-101",
    "theme": "it-digital",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Numérique et technologies] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-102",
    "theme": "finance",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Gestion financière] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-103",
    "theme": "staffing",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Dotation et RH] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-104",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Gestion de crise] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-105",
    "theme": "audit",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Vérification et risques] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-106",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Planification stratégique] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-107",
    "theme": "services-canada",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Prestation de services] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-108",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Valeurs et éthique] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-109",
    "theme": "training",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Formation professionnelle] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-110",
    "theme": "teamwork",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Travail d’équipe] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-111",
    "theme": "projects",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Gestion de projet] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-112",
    "theme": "telework",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Travail à distance] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-113",
    "theme": "leadership",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Direction et leadership] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-114",
    "theme": "conflict",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Règlement des différends] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-115",
    "theme": "policy",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Politiques et gouvernance] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-116",
    "theme": "procurement",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Approvisionnement et contrats] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-117",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Langues officielles] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-118",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Mobilisation des citoyens] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-119",
    "theme": "it-digital",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Numérique et technologies] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-120",
    "theme": "finance",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Gestion financière] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-121",
    "theme": "staffing",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Dotation et RH] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-122",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Gestion de crise] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-123",
    "theme": "audit",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Vérification et risques] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-124",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Planification stratégique] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-125",
    "theme": "services-canada",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Prestation de services] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-126",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Valeurs et éthique] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-127",
    "theme": "training",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Formation professionnelle] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-128",
    "theme": "teamwork",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Travail d’équipe] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-129",
    "theme": "projects",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Gestion de projet] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-130",
    "theme": "telework",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Travail à distance] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-131",
    "theme": "leadership",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Direction et leadership] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-132",
    "theme": "conflict",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Règlement des différends] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-133",
    "theme": "policy",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Politiques et gouvernance] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-134",
    "theme": "procurement",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Approvisionnement et contrats] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-135",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Langues officielles] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-136",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Mobilisation des citoyens] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-137",
    "theme": "it-digital",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Numérique et technologies] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-138",
    "theme": "finance",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Gestion financière] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-139",
    "theme": "staffing",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Dotation et RH] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-140",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Gestion de crise] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-141",
    "theme": "audit",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Vérification et risques] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-142",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Planification stratégique] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-143",
    "theme": "services-canada",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Prestation de services] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-144",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Valeurs et éthique] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-145",
    "theme": "training",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Formation professionnelle] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-146",
    "theme": "teamwork",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Travail d’équipe] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-147",
    "theme": "projects",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Gestion de projet] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-148",
    "theme": "telework",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Travail à distance] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-149",
    "theme": "leadership",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Direction et leadership] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-150",
    "theme": "conflict",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Règlement des différends] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-151",
    "theme": "policy",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Politiques et gouvernance] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-152",
    "theme": "procurement",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Approvisionnement et contrats] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-153",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Langues officielles] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-154",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Mobilisation des citoyens] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-155",
    "theme": "it-digital",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Numérique et technologies] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-156",
    "theme": "finance",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Gestion financière] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-157",
    "theme": "staffing",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Dotation et RH] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-158",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Gestion de crise] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-159",
    "theme": "audit",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Vérification et risques] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-160",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Planification stratégique] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-161",
    "theme": "services-canada",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Prestation de services] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-162",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Valeurs et éthique] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-163",
    "theme": "training",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Formation professionnelle] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-164",
    "theme": "teamwork",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Travail d’équipe] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-165",
    "theme": "projects",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Gestion de projet] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-166",
    "theme": "telework",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Travail à distance] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-167",
    "theme": "leadership",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Direction et leadership] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-168",
    "theme": "conflict",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Règlement des différends] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-169",
    "theme": "policy",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Politiques et gouvernance] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-170",
    "theme": "procurement",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Approvisionnement et contrats] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-171",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Langues officielles] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-172",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Mobilisation des citoyens] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-173",
    "theme": "it-digital",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Numérique et technologies] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-174",
    "theme": "finance",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Gestion financière] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-175",
    "theme": "staffing",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Dotation et RH] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-176",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Gestion de crise] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-177",
    "theme": "audit",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Vérification et risques] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-178",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Planification stratégique] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-179",
    "theme": "services-canada",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Prestation de services] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-180",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Valeurs et éthique] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-181",
    "theme": "training",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Formation professionnelle] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-182",
    "theme": "teamwork",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Travail d’équipe] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-183",
    "theme": "projects",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Gestion de projet] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-184",
    "theme": "telework",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Travail à distance] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-185",
    "theme": "leadership",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Direction et leadership] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-186",
    "theme": "conflict",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Règlement des différends] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-187",
    "theme": "policy",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Politiques et gouvernance] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-188",
    "theme": "procurement",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Approvisionnement et contrats] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-189",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Langues officielles] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-190",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Mobilisation des citoyens] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-191",
    "theme": "it-digital",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Numérique et technologies] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-192",
    "theme": "finance",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Gestion financière] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-193",
    "theme": "staffing",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Dotation et RH] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-194",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Gestion de crise] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-195",
    "theme": "audit",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Vérification et risques] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-196",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Planification stratégique] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-197",
    "theme": "services-canada",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Prestation de services] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-198",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Valeurs et éthique] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-199",
    "theme": "training",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Formation professionnelle] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-200",
    "theme": "teamwork",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Travail d’équipe] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-201",
    "theme": "projects",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Gestion de projet] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-202",
    "theme": "telework",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Travail à distance] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-203",
    "theme": "leadership",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Direction et leadership] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-204",
    "theme": "conflict",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Règlement des différends] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-205",
    "theme": "policy",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Politiques et gouvernance] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-206",
    "theme": "procurement",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Approvisionnement et contrats] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-207",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Langues officielles] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-208",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Mobilisation des citoyens] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-209",
    "theme": "it-digital",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Numérique et technologies] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-210",
    "theme": "finance",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Gestion financière] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-211",
    "theme": "staffing",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Dotation et RH] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-212",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Gestion de crise] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-213",
    "theme": "audit",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Vérification et risques] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-214",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Planification stratégique] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-215",
    "theme": "services-canada",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Prestation de services] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-216",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Valeurs et éthique] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-217",
    "theme": "training",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Formation professionnelle] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-218",
    "theme": "teamwork",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Travail d’équipe] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-219",
    "theme": "projects",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Gestion de projet] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-220",
    "theme": "telework",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Travail à distance] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-221",
    "theme": "leadership",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Direction et leadership] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-222",
    "theme": "conflict",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Règlement des différends] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-223",
    "theme": "policy",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Politiques et gouvernance] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-224",
    "theme": "procurement",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Approvisionnement et contrats] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-225",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Langues officielles] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-226",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Mobilisation des citoyens] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-227",
    "theme": "it-digital",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Numérique et technologies] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-228",
    "theme": "finance",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Gestion financière] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-229",
    "theme": "staffing",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Dotation et RH] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-230",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Gestion de crise] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-231",
    "theme": "audit",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Vérification et risques] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-232",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Planification stratégique] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-233",
    "theme": "services-canada",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Prestation de services] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-234",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Valeurs et éthique] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-235",
    "theme": "training",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Formation professionnelle] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-236",
    "theme": "teamwork",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Travail d’équipe] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-237",
    "theme": "projects",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Gestion de projet] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-238",
    "theme": "telework",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Travail à distance] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-239",
    "theme": "leadership",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Direction et leadership] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-240",
    "theme": "conflict",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Règlement des différends] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-241",
    "theme": "policy",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Politiques et gouvernance] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-242",
    "theme": "procurement",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Approvisionnement et contrats] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-243",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Langues officielles] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-244",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Mobilisation des citoyens] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-245",
    "theme": "it-digital",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Numérique et technologies] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-246",
    "theme": "finance",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Gestion financière] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-247",
    "theme": "staffing",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Dotation et RH] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-248",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Gestion de crise] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-249",
    "theme": "audit",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Vérification et risques] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-250",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Planification stratégique] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-251",
    "theme": "services-canada",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Prestation de services] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-252",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Valeurs et éthique] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-253",
    "theme": "training",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Formation professionnelle] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-254",
    "theme": "teamwork",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Travail d’équipe] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-255",
    "theme": "projects",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Gestion de projet] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-256",
    "theme": "telework",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Travail à distance] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-257",
    "theme": "leadership",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Direction et leadership] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-258",
    "theme": "conflict",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Règlement des différends] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-259",
    "theme": "policy",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Politiques et gouvernance] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-260",
    "theme": "procurement",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Approvisionnement et contrats] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-261",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Langues officielles] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-262",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Mobilisation des citoyens] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-263",
    "theme": "it-digital",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Numérique et technologies] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-264",
    "theme": "finance",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Gestion financière] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-265",
    "theme": "staffing",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Dotation et RH] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-266",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Gestion de crise] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-267",
    "theme": "audit",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Vérification et risques] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-268",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Planification stratégique] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-269",
    "theme": "services-canada",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Prestation de services] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-270",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Valeurs et éthique] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-271",
    "theme": "training",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Formation professionnelle] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-272",
    "theme": "teamwork",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Travail d’équipe] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-273",
    "theme": "projects",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Gestion de projet] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-274",
    "theme": "telework",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Travail à distance] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-275",
    "theme": "leadership",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Direction et leadership] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-276",
    "theme": "conflict",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Règlement des différends] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-277",
    "theme": "policy",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Politiques et gouvernance] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-278",
    "theme": "procurement",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Approvisionnement et contrats] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-279",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Langues officielles] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-280",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Mobilisation des citoyens] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-281",
    "theme": "it-digital",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Numérique et technologies] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-282",
    "theme": "finance",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Gestion financière] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-283",
    "theme": "staffing",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Dotation et RH] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-284",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Gestion de crise] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-285",
    "theme": "audit",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Vérification et risques] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-286",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Planification stratégique] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-287",
    "theme": "services-canada",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Prestation de services] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-288",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Valeurs et éthique] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-289",
    "theme": "training",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Formation professionnelle] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-290",
    "theme": "teamwork",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Travail d’équipe] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-291",
    "theme": "projects",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Gestion de projet] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-292",
    "theme": "telework",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Travail à distance] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-293",
    "theme": "leadership",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Direction et leadership] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-294",
    "theme": "conflict",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Règlement des différends] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-295",
    "theme": "policy",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Politiques et gouvernance] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-296",
    "theme": "procurement",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Approvisionnement et contrats] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-297",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Langues officielles] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-298",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Mobilisation des citoyens] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-299",
    "theme": "it-digital",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Numérique et technologies] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-300",
    "theme": "finance",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Gestion financière] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-301",
    "theme": "staffing",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Dotation et RH] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-302",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Gestion de crise] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-303",
    "theme": "audit",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Vérification et risques] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-304",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Planification stratégique] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-305",
    "theme": "services-canada",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Prestation de services] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-306",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Valeurs et éthique] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-307",
    "theme": "training",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Formation professionnelle] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-308",
    "theme": "teamwork",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Travail d’équipe] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-309",
    "theme": "projects",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Gestion de projet] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-310",
    "theme": "telework",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Travail à distance] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-311",
    "theme": "leadership",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Direction et leadership] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-312",
    "theme": "conflict",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Règlement des différends] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-313",
    "theme": "policy",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Politiques et gouvernance] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-314",
    "theme": "procurement",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Approvisionnement et contrats] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-315",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Langues officielles] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-316",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Mobilisation des citoyens] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-317",
    "theme": "it-digital",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Numérique et technologies] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-318",
    "theme": "finance",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Gestion financière] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-319",
    "theme": "staffing",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Dotation et RH] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-320",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Gestion de crise] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-321",
    "theme": "audit",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Vérification et risques] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-322",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Planification stratégique] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-323",
    "theme": "services-canada",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Prestation de services] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-324",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Valeurs et éthique] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-325",
    "theme": "training",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Formation professionnelle] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-326",
    "theme": "teamwork",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Travail d’équipe] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-327",
    "theme": "projects",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Gestion de projet] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-328",
    "theme": "telework",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Travail à distance] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-329",
    "theme": "leadership",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Direction et leadership] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-330",
    "theme": "conflict",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Règlement des différends] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-331",
    "theme": "policy",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Politiques et gouvernance] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-332",
    "theme": "procurement",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Approvisionnement et contrats] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-333",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Langues officielles] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-334",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Mobilisation des citoyens] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-335",
    "theme": "it-digital",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Numérique et technologies] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-336",
    "theme": "finance",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Gestion financière] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-337",
    "theme": "staffing",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Dotation et RH] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-338",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Gestion de crise] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-339",
    "theme": "audit",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Vérification et risques] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-340",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Planification stratégique] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-341",
    "theme": "services-canada",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Prestation de services] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-342",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Valeurs et éthique] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-343",
    "theme": "training",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Formation professionnelle] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-344",
    "theme": "teamwork",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Travail d’équipe] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-345",
    "theme": "projects",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Gestion de projet] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-346",
    "theme": "telework",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Travail à distance] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-347",
    "theme": "leadership",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Direction et leadership] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-348",
    "theme": "conflict",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Règlement des différends] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-349",
    "theme": "policy",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Politiques et gouvernance] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-350",
    "theme": "procurement",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Approvisionnement et contrats] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-351",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Langues officielles] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-352",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Mobilisation des citoyens] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-353",
    "theme": "it-digital",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Numérique et technologies] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-354",
    "theme": "finance",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Gestion financière] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-355",
    "theme": "staffing",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Dotation et RH] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-356",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Gestion de crise] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-357",
    "theme": "audit",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Vérification et risques] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-358",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Planification stratégique] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-359",
    "theme": "services-canada",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Prestation de services] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-360",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Valeurs et éthique] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-361",
    "theme": "training",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Formation professionnelle] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-362",
    "theme": "teamwork",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Travail d’équipe] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-363",
    "theme": "projects",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Gestion de projet] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-364",
    "theme": "telework",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Travail à distance] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-365",
    "theme": "leadership",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Direction et leadership] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-366",
    "theme": "conflict",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Règlement des différends] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-367",
    "theme": "policy",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Politiques et gouvernance] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-368",
    "theme": "procurement",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Approvisionnement et contrats] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-369",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Langues officielles] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-370",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Mobilisation des citoyens] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-371",
    "theme": "it-digital",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Numérique et technologies] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-372",
    "theme": "finance",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Gestion financière] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-373",
    "theme": "staffing",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Dotation et RH] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-374",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Gestion de crise] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-375",
    "theme": "audit",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Vérification et risques] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-376",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Planification stratégique] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-377",
    "theme": "services-canada",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Prestation de services] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-378",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Valeurs et éthique] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-379",
    "theme": "training",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Formation professionnelle] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-380",
    "theme": "teamwork",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Travail d’équipe] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-381",
    "theme": "projects",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Gestion de projet] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-382",
    "theme": "telework",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Travail à distance] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-383",
    "theme": "leadership",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Direction et leadership] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-384",
    "theme": "conflict",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Règlement des différends] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-385",
    "theme": "policy",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Politiques et gouvernance] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-386",
    "theme": "procurement",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Approvisionnement et contrats] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-387",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Langues officielles] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-388",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Mobilisation des citoyens] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-389",
    "theme": "it-digital",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Numérique et technologies] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-390",
    "theme": "finance",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Gestion financière] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-391",
    "theme": "staffing",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Dotation et RH] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-392",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Gestion de crise] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-393",
    "theme": "audit",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Vérification et risques] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-394",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Planification stratégique] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-395",
    "theme": "services-canada",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Prestation de services] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-396",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Valeurs et éthique] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-397",
    "theme": "training",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Formation professionnelle] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-398",
    "theme": "teamwork",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Travail d’équipe] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-399",
    "theme": "projects",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Gestion de projet] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-400",
    "theme": "telework",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Travail à distance] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-401",
    "theme": "leadership",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Direction et leadership] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-402",
    "theme": "conflict",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Règlement des différends] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-403",
    "theme": "policy",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Politiques et gouvernance] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-404",
    "theme": "procurement",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Approvisionnement et contrats] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-405",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Langues officielles] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-406",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Mobilisation des citoyens] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-407",
    "theme": "it-digital",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Numérique et technologies] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-408",
    "theme": "finance",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Gestion financière] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-409",
    "theme": "staffing",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Dotation et RH] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-410",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Gestion de crise] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-411",
    "theme": "audit",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Vérification et risques] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-412",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Planification stratégique] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-413",
    "theme": "services-canada",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Prestation de services] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-414",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Valeurs et éthique] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-415",
    "theme": "training",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Formation professionnelle] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-416",
    "theme": "teamwork",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Travail d’équipe] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-417",
    "theme": "projects",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Gestion de projet] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-418",
    "theme": "telework",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Travail à distance] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-419",
    "theme": "leadership",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Direction et leadership] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-420",
    "theme": "conflict",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Règlement des différends] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-421",
    "theme": "policy",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Politiques et gouvernance] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-422",
    "theme": "procurement",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Approvisionnement et contrats] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-423",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Langues officielles] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-424",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Mobilisation des citoyens] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-425",
    "theme": "it-digital",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Numérique et technologies] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-426",
    "theme": "finance",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Gestion financière] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-427",
    "theme": "staffing",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Dotation et RH] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-428",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Gestion de crise] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-429",
    "theme": "audit",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Vérification et risques] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-430",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Planification stratégique] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-431",
    "theme": "services-canada",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Prestation de services] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-432",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Valeurs et éthique] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-433",
    "theme": "training",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Formation professionnelle] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-434",
    "theme": "teamwork",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Travail d’équipe] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-435",
    "theme": "projects",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Gestion de projet] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-436",
    "theme": "telework",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Travail à distance] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-437",
    "theme": "leadership",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Direction et leadership] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-438",
    "theme": "conflict",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Règlement des différends] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-439",
    "theme": "policy",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Politiques et gouvernance] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-440",
    "theme": "procurement",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Approvisionnement et contrats] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-441",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Langues officielles] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-442",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Mobilisation des citoyens] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-443",
    "theme": "it-digital",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Numérique et technologies] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-444",
    "theme": "finance",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Gestion financière] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-445",
    "theme": "staffing",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Dotation et RH] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-446",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Gestion de crise] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-447",
    "theme": "audit",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Vérification et risques] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-448",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Planification stratégique] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-449",
    "theme": "services-canada",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Prestation de services] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-450",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Valeurs et éthique] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-451",
    "theme": "training",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Formation professionnelle] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-452",
    "theme": "teamwork",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Travail d’équipe] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-453",
    "theme": "projects",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Gestion de projet] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-454",
    "theme": "telework",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Travail à distance] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-455",
    "theme": "leadership",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Direction et leadership] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-456",
    "theme": "conflict",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Règlement des différends] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-457",
    "theme": "policy",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Politiques et gouvernance] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-458",
    "theme": "procurement",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Approvisionnement et contrats] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-459",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Langues officielles] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-460",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Mobilisation des citoyens] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-461",
    "theme": "it-digital",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Numérique et technologies] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-462",
    "theme": "finance",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Gestion financière] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-463",
    "theme": "staffing",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Dotation et RH] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-464",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Gestion de crise] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-465",
    "theme": "audit",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Vérification et risques] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-466",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Planification stratégique] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-467",
    "theme": "services-canada",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Prestation de services] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-468",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Valeurs et éthique] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-469",
    "theme": "training",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Formation professionnelle] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-470",
    "theme": "teamwork",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Travail d’équipe] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-471",
    "theme": "projects",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Gestion de projet] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-472",
    "theme": "telework",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Travail à distance] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-473",
    "theme": "leadership",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Direction et leadership] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-474",
    "theme": "conflict",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Règlement des différends] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-475",
    "theme": "policy",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Politiques et gouvernance] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-476",
    "theme": "procurement",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Approvisionnement et contrats] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-477",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Langues officielles] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-478",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Mobilisation des citoyens] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-479",
    "theme": "it-digital",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Numérique et technologies] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-480",
    "theme": "finance",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Gestion financière] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-481",
    "theme": "staffing",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Dotation et RH] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-482",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Gestion de crise] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-483",
    "theme": "audit",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Vérification et risques] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-484",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Planification stratégique] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-485",
    "theme": "services-canada",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Prestation de services] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-486",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Valeurs et éthique] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-487",
    "theme": "training",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Formation professionnelle] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-488",
    "theme": "teamwork",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Travail d’équipe] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-489",
    "theme": "projects",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Gestion de projet] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-490",
    "theme": "telework",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Travail à distance] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-491",
    "theme": "leadership",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Direction et leadership] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-492",
    "theme": "conflict",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Règlement des différends] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-493",
    "theme": "policy",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Politiques et gouvernance] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-494",
    "theme": "procurement",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Approvisionnement et contrats] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-495",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Langues officielles] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-496",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Mobilisation des citoyens] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-497",
    "theme": "it-digital",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Numérique et technologies] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-498",
    "theme": "finance",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Gestion financière] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-499",
    "theme": "staffing",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Dotation et RH] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-500",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Gestion de crise] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-501",
    "theme": "audit",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Vérification et risques] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-502",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Planification stratégique] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-503",
    "theme": "services-canada",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Prestation de services] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-504",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Valeurs et éthique] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-505",
    "theme": "training",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Formation professionnelle] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-506",
    "theme": "teamwork",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Travail d’équipe] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-507",
    "theme": "projects",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Gestion de projet] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-508",
    "theme": "telework",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Travail à distance] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-509",
    "theme": "leadership",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Direction et leadership] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-510",
    "theme": "conflict",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Règlement des différends] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-511",
    "theme": "policy",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Politiques et gouvernance] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-512",
    "theme": "procurement",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Approvisionnement et contrats] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-513",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Langues officielles] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-514",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Mobilisation des citoyens] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-515",
    "theme": "it-digital",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Numérique et technologies] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-516",
    "theme": "finance",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Gestion financière] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-517",
    "theme": "staffing",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Dotation et RH] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-518",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Gestion de crise] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-519",
    "theme": "audit",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Vérification et risques] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-520",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Planification stratégique] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-521",
    "theme": "services-canada",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Prestation de services] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-522",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Valeurs et éthique] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-523",
    "theme": "training",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Formation professionnelle] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-524",
    "theme": "teamwork",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Travail d’équipe] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-525",
    "theme": "projects",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Gestion de projet] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-526",
    "theme": "telework",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Travail à distance] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-527",
    "theme": "leadership",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Direction et leadership] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-528",
    "theme": "conflict",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Règlement des différends] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-529",
    "theme": "policy",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Politiques et gouvernance] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-530",
    "theme": "procurement",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Approvisionnement et contrats] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-531",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Langues officielles] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-532",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Mobilisation des citoyens] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-533",
    "theme": "it-digital",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Numérique et technologies] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-534",
    "theme": "finance",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Gestion financière] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-535",
    "theme": "staffing",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Dotation et RH] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-536",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Gestion de crise] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-537",
    "theme": "audit",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Vérification et risques] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-538",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Planification stratégique] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-539",
    "theme": "services-canada",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Prestation de services] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-540",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Valeurs et éthique] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-541",
    "theme": "training",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Formation professionnelle] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-542",
    "theme": "teamwork",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Travail d’équipe] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-543",
    "theme": "projects",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Gestion de projet] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-544",
    "theme": "telework",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Travail à distance] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-545",
    "theme": "leadership",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Direction et leadership] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-546",
    "theme": "conflict",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Règlement des différends] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-547",
    "theme": "policy",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Politiques et gouvernance] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-548",
    "theme": "procurement",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Approvisionnement et contrats] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-549",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Langues officielles] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-550",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Mobilisation des citoyens] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-551",
    "theme": "it-digital",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Numérique et technologies] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-552",
    "theme": "finance",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Gestion financière] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-553",
    "theme": "staffing",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Dotation et RH] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-554",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Gestion de crise] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-555",
    "theme": "audit",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Vérification et risques] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-556",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Planification stratégique] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-557",
    "theme": "services-canada",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Prestation de services] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-558",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Valeurs et éthique] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-559",
    "theme": "training",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Formation professionnelle] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-560",
    "theme": "teamwork",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Travail d’équipe] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-561",
    "theme": "projects",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Gestion de projet] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-562",
    "theme": "telework",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Travail à distance] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-563",
    "theme": "leadership",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Direction et leadership] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-564",
    "theme": "conflict",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Règlement des différends] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-565",
    "theme": "policy",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Politiques et gouvernance] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-566",
    "theme": "procurement",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Approvisionnement et contrats] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-567",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Langues officielles] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-568",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Mobilisation des citoyens] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-569",
    "theme": "it-digital",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Numérique et technologies] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-570",
    "theme": "finance",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Gestion financière] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-571",
    "theme": "staffing",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Dotation et RH] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-572",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Gestion de crise] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-573",
    "theme": "audit",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Vérification et risques] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-574",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Planification stratégique] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-575",
    "theme": "services-canada",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Prestation de services] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-576",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Valeurs et éthique] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-577",
    "theme": "training",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Formation professionnelle] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-578",
    "theme": "teamwork",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Travail d’équipe] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-579",
    "theme": "projects",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Gestion de projet] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-580",
    "theme": "telework",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Travail à distance] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-581",
    "theme": "leadership",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Direction et leadership] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-582",
    "theme": "conflict",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Règlement des différends] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-583",
    "theme": "policy",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Politiques et gouvernance] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-584",
    "theme": "procurement",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Approvisionnement et contrats] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-585",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Langues officielles] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-586",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Mobilisation des citoyens] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-587",
    "theme": "it-digital",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Numérique et technologies] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-588",
    "theme": "finance",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Gestion financière] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-589",
    "theme": "staffing",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Dotation et RH] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-590",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Gestion de crise] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-591",
    "theme": "audit",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Vérification et risques] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-592",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Planification stratégique] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-593",
    "theme": "services-canada",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Prestation de services] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-594",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Valeurs et éthique] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-595",
    "theme": "training",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Formation professionnelle] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-596",
    "theme": "teamwork",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Travail d’équipe] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-597",
    "theme": "projects",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Gestion de projet] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-598",
    "theme": "telework",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Travail à distance] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-599",
    "theme": "leadership",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Direction et leadership] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-600",
    "theme": "conflict",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Règlement des différends] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-601",
    "theme": "policy",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Politiques et gouvernance] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-602",
    "theme": "procurement",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Approvisionnement et contrats] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-603",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Langues officielles] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-604",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Mobilisation des citoyens] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-605",
    "theme": "it-digital",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Numérique et technologies] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-606",
    "theme": "finance",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Gestion financière] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-607",
    "theme": "staffing",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Dotation et RH] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-608",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Gestion de crise] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-609",
    "theme": "audit",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Vérification et risques] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-610",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Planification stratégique] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-611",
    "theme": "services-canada",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Prestation de services] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-612",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Valeurs et éthique] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-613",
    "theme": "training",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Formation professionnelle] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-614",
    "theme": "teamwork",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Travail d’équipe] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-615",
    "theme": "projects",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Gestion de projet] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-616",
    "theme": "telework",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Travail à distance] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-617",
    "theme": "leadership",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Direction et leadership] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-618",
    "theme": "conflict",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Règlement des différends] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-619",
    "theme": "policy",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Politiques et gouvernance] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-620",
    "theme": "procurement",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Approvisionnement et contrats] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-621",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Langues officielles] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-622",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Mobilisation des citoyens] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-623",
    "theme": "it-digital",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Numérique et technologies] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-624",
    "theme": "finance",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Gestion financière] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-625",
    "theme": "staffing",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Dotation et RH] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-626",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Gestion de crise] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-627",
    "theme": "audit",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Vérification et risques] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-628",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Planification stratégique] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-629",
    "theme": "services-canada",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Prestation de services] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-630",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Valeurs et éthique] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-631",
    "theme": "training",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Formation professionnelle] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-632",
    "theme": "teamwork",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Travail d’équipe] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-633",
    "theme": "projects",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Gestion de projet] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-634",
    "theme": "telework",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Travail à distance] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-635",
    "theme": "leadership",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Direction et leadership] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-636",
    "theme": "conflict",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Règlement des différends] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-637",
    "theme": "policy",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Politiques et gouvernance] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-638",
    "theme": "procurement",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Approvisionnement et contrats] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-639",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Langues officielles] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-640",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Mobilisation des citoyens] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-641",
    "theme": "it-digital",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Numérique et technologies] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-642",
    "theme": "finance",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Gestion financière] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-643",
    "theme": "staffing",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Dotation et RH] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-644",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Gestion de crise] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-645",
    "theme": "audit",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Vérification et risques] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-646",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Planification stratégique] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-647",
    "theme": "services-canada",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Prestation de services] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-648",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Valeurs et éthique] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-649",
    "theme": "training",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Formation professionnelle] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-650",
    "theme": "teamwork",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Travail d’équipe] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-651",
    "theme": "projects",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Gestion de projet] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-652",
    "theme": "telework",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Travail à distance] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-653",
    "theme": "leadership",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Direction et leadership] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-654",
    "theme": "conflict",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Règlement des différends] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-655",
    "theme": "policy",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Politiques et gouvernance] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-656",
    "theme": "procurement",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Approvisionnement et contrats] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-657",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Langues officielles] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-658",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Mobilisation des citoyens] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-659",
    "theme": "it-digital",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Numérique et technologies] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-660",
    "theme": "finance",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Gestion financière] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-661",
    "theme": "staffing",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Dotation et RH] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-662",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Gestion de crise] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-663",
    "theme": "audit",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Vérification et risques] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-664",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Planification stratégique] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-665",
    "theme": "services-canada",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Prestation de services] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-666",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Valeurs et éthique] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-667",
    "theme": "training",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Formation professionnelle] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-668",
    "theme": "teamwork",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Travail d’équipe] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-669",
    "theme": "projects",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Gestion de projet] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-670",
    "theme": "telework",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Travail à distance] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-671",
    "theme": "leadership",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Direction et leadership] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-672",
    "theme": "conflict",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Règlement des différends] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-673",
    "theme": "policy",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Politiques et gouvernance] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-674",
    "theme": "procurement",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Approvisionnement et contrats] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-675",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Langues officielles] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-676",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Mobilisation des citoyens] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-677",
    "theme": "it-digital",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Numérique et technologies] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-678",
    "theme": "finance",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Gestion financière] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-679",
    "theme": "staffing",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Dotation et RH] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-680",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Gestion de crise] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-681",
    "theme": "audit",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Vérification et risques] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-682",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Planification stratégique] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-683",
    "theme": "services-canada",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Prestation de services] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-684",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Valeurs et éthique] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-685",
    "theme": "training",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Formation professionnelle] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-686",
    "theme": "teamwork",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Travail d’équipe] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-687",
    "theme": "projects",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Gestion de projet] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-688",
    "theme": "telework",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Travail à distance] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-689",
    "theme": "leadership",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Direction et leadership] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-690",
    "theme": "conflict",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Règlement des différends] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-691",
    "theme": "policy",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Politiques et gouvernance] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-692",
    "theme": "procurement",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Approvisionnement et contrats] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-693",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Langues officielles] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-694",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Mobilisation des citoyens] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-695",
    "theme": "it-digital",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Numérique et technologies] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-696",
    "theme": "finance",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Gestion financière] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-697",
    "theme": "staffing",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Dotation et RH] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-698",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Gestion de crise] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-699",
    "theme": "audit",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Vérification et risques] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-700",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Planification stratégique] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-701",
    "theme": "services-canada",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Prestation de services] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-702",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Valeurs et éthique] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-703",
    "theme": "training",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Formation professionnelle] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-704",
    "theme": "teamwork",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Travail d’équipe] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-705",
    "theme": "projects",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Gestion de projet] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-706",
    "theme": "telework",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Travail à distance] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-707",
    "theme": "leadership",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Direction et leadership] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-708",
    "theme": "conflict",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Règlement des différends] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-709",
    "theme": "policy",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Politiques et gouvernance] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-710",
    "theme": "procurement",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Approvisionnement et contrats] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-711",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Langues officielles] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-712",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Mobilisation des citoyens] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-713",
    "theme": "it-digital",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Numérique et technologies] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-714",
    "theme": "finance",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Gestion financière] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-715",
    "theme": "staffing",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Dotation et RH] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-716",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Gestion de crise] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-717",
    "theme": "audit",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Vérification et risques] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-718",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Planification stratégique] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-719",
    "theme": "services-canada",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Prestation de services] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-720",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Valeurs et éthique] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-721",
    "theme": "training",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Formation professionnelle] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-722",
    "theme": "teamwork",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Travail d’équipe] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-723",
    "theme": "projects",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Gestion de projet] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-724",
    "theme": "telework",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Travail à distance] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-725",
    "theme": "leadership",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Direction et leadership] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-726",
    "theme": "conflict",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Règlement des différends] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-727",
    "theme": "policy",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Politiques et gouvernance] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-728",
    "theme": "procurement",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Approvisionnement et contrats] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-729",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Langues officielles] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-730",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Mobilisation des citoyens] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-731",
    "theme": "it-digital",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Numérique et technologies] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-732",
    "theme": "finance",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Gestion financière] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-733",
    "theme": "staffing",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Dotation et RH] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-734",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Gestion de crise] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-735",
    "theme": "audit",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Vérification et risques] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-736",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Planification stratégique] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-737",
    "theme": "services-canada",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Prestation de services] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-738",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Valeurs et éthique] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-739",
    "theme": "training",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Formation professionnelle] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-740",
    "theme": "teamwork",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Travail d’équipe] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-741",
    "theme": "projects",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Gestion de projet] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-742",
    "theme": "telework",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Travail à distance] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-743",
    "theme": "leadership",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Direction et leadership] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-744",
    "theme": "conflict",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Règlement des différends] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-745",
    "theme": "policy",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Politiques et gouvernance] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-746",
    "theme": "procurement",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Approvisionnement et contrats] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-747",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Langues officielles] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-748",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Mobilisation des citoyens] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-749",
    "theme": "it-digital",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Numérique et technologies] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-750",
    "theme": "finance",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Gestion financière] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-751",
    "theme": "staffing",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Dotation et RH] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-752",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Gestion de crise] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-753",
    "theme": "audit",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Vérification et risques] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-754",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Planification stratégique] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-755",
    "theme": "services-canada",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Prestation de services] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-756",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Valeurs et éthique] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-757",
    "theme": "training",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Formation professionnelle] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-758",
    "theme": "teamwork",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Travail d’équipe] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-759",
    "theme": "projects",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Gestion de projet] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-760",
    "theme": "telework",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Travail à distance] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-761",
    "theme": "leadership",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Direction et leadership] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-762",
    "theme": "conflict",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Règlement des différends] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-763",
    "theme": "policy",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Politiques et gouvernance] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-764",
    "theme": "procurement",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Approvisionnement et contrats] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-765",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Langues officielles] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-766",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Mobilisation des citoyens] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-767",
    "theme": "it-digital",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Numérique et technologies] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-768",
    "theme": "finance",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Gestion financière] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-769",
    "theme": "staffing",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Dotation et RH] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-770",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Gestion de crise] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-771",
    "theme": "audit",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Vérification et risques] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-772",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Planification stratégique] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-773",
    "theme": "services-canada",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Prestation de services] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-774",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Valeurs et éthique] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-775",
    "theme": "training",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Formation professionnelle] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-776",
    "theme": "teamwork",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Travail d’équipe] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-777",
    "theme": "projects",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Gestion de projet] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-778",
    "theme": "telework",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Travail à distance] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-779",
    "theme": "leadership",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Direction et leadership] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-780",
    "theme": "conflict",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Règlement des différends] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-781",
    "theme": "policy",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Politiques et gouvernance] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-782",
    "theme": "procurement",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Approvisionnement et contrats] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-783",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Langues officielles] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-784",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Mobilisation des citoyens] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-785",
    "theme": "it-digital",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Numérique et technologies] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-786",
    "theme": "finance",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Gestion financière] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-787",
    "theme": "staffing",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Dotation et RH] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-788",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Gestion de crise] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-789",
    "theme": "audit",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Vérification et risques] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-790",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Planification stratégique] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-791",
    "theme": "services-canada",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Prestation de services] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-792",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Valeurs et éthique] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-793",
    "theme": "training",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Formation professionnelle] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-794",
    "theme": "teamwork",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Travail d’équipe] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-795",
    "theme": "projects",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Gestion de projet] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-796",
    "theme": "telework",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Travail à distance] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-797",
    "theme": "leadership",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Direction et leadership] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-798",
    "theme": "conflict",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Règlement des différends] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-799",
    "theme": "policy",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Politiques et gouvernance] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-800",
    "theme": "procurement",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Approvisionnement et contrats] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-801",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Langues officielles] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-802",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Mobilisation des citoyens] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-803",
    "theme": "it-digital",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Numérique et technologies] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-804",
    "theme": "finance",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Gestion financière] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-805",
    "theme": "staffing",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Dotation et RH] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-806",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Gestion de crise] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-807",
    "theme": "audit",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Vérification et risques] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-808",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Planification stratégique] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-809",
    "theme": "services-canada",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Prestation de services] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-810",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Valeurs et éthique] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-811",
    "theme": "training",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Formation professionnelle] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-812",
    "theme": "teamwork",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Travail d’équipe] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-813",
    "theme": "projects",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Gestion de projet] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-814",
    "theme": "telework",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Travail à distance] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-815",
    "theme": "leadership",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Direction et leadership] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-816",
    "theme": "conflict",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Règlement des différends] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-817",
    "theme": "policy",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Politiques et gouvernance] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-818",
    "theme": "procurement",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Approvisionnement et contrats] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-819",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Langues officielles] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-820",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Mobilisation des citoyens] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-821",
    "theme": "it-digital",
    "skill": "writing",
    "level": "C",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Numérique et technologies] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-822",
    "theme": "finance",
    "skill": "writing",
    "level": "C",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Gestion financière] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-823",
    "theme": "staffing",
    "skill": "writing",
    "level": "C",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Dotation et RH] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-824",
    "theme": "crisis-mgmt",
    "skill": "writing",
    "level": "C",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Gestion de crise] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-825",
    "theme": "audit",
    "skill": "writing",
    "level": "C",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Vérification et risques] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-826",
    "theme": "strategic-planning",
    "skill": "writing",
    "level": "C",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Planification stratégique] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-827",
    "theme": "services-canada",
    "skill": "writing",
    "level": "C",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Prestation de services] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-828",
    "theme": "values-ethics",
    "skill": "writing",
    "level": "C",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Valeurs et éthique] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-829",
    "theme": "training",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Formation professionnelle] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-830",
    "theme": "teamwork",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Travail d’équipe] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-831",
    "theme": "projects",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Gestion de projet] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-832",
    "theme": "telework",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Travail à distance] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  },
  {
    "id": "wq-833",
    "theme": "leadership",
    "skill": "writing",
    "level": "B",
    "objective": "Preposition and infinitive agreement after purpose markers",
    "prompt": "[Direction et leadership] Choisissez la préposition correcte : « Pour ___ la formation, veuillez remplir le formulaire. »",
    "options": [
      "suivre",
      "suivi",
      "suivra"
    ],
    "answer": 0,
    "explanations": [
      "Après la préposition « pour », le verbe se met à l'infinitif (« suivre ») quand le sujet reste le même.",
      "« Suivi » est un participe passé ou un nom, incompatible immédiatement après « pour ».",
      "« Suivra » est au futur simple et ne peut s'insérer directement après une préposition."
    ]
  },
  {
    "id": "wq-834",
    "theme": "conflict",
    "skill": "writing",
    "level": "B",
    "objective": "Subjunctive mood after concession and purpose conjunctions",
    "prompt": "[Règlement des différends] Choisissez la forme correcte : « Bien que l'équipe ___ motivée, le projet accuse un léger retard. »",
    "options": [
      "soit",
      "est",
      "sera"
    ],
    "answer": 0,
    "explanations": [
      "« Bien que » exige le subjonctif (« soit »).",
      "« Est » est à l'indicatif, ce qui ne convient pas après « bien que ».",
      "« Sera » est au futur, alors que la concession nécessite le subjonctif."
    ]
  },
  {
    "id": "wq-835",
    "theme": "policy",
    "skill": "writing",
    "level": "B",
    "objective": "Past participle agreement with preceding direct object",
    "prompt": "[Politiques et gouvernance] Choisissez la forme correcte : « Les directives que la direction a ___ seront publiées demain. »",
    "options": [
      "adoptées",
      "adopté",
      "adopter"
    ],
    "answer": 0,
    "explanations": [
      "Le participe passé « adoptées » s'accorde avec le COD « que » (mis pour « les directives », féminin pluriel) placé avant l'auxiliaire avoir.",
      "« Adopté » au masculin singulier ne tient pas compte de l'accord avec le COD placé avant le verbe.",
      "« Adopter » est à l'infinitif et ne peut pas servir de participe passé."
    ]
  },
  {
    "id": "wq-836",
    "theme": "procurement",
    "skill": "writing",
    "level": "B",
    "objective": "Hypothetical condition structures (si + imparfait / plus-que-parfait)",
    "prompt": "[Approvisionnement et contrats] Complétez la phrase hypothétique : « Si nous ___ les données plus tôt, nous aurions évité cette erreur. »",
    "options": [
      "avions reçu",
      "avons reçu",
      "recevons"
    ],
    "answer": 0,
    "explanations": [
      "Pour exprimer une hypothèse non réalisée dans le passé, on utilise si + plus-que-parfait (« avions reçu ») suivi du conditionnel passé.",
      "« Avons reçu » au passé composé ne respecte pas la concordance des temps de l'hypothèse au passé.",
      "« Recevons » au présent ne correspond pas à l'action conditionnelle passée."
    ]
  },
  {
    "id": "wq-837",
    "theme": "bilingualism",
    "skill": "writing",
    "level": "B",
    "objective": "Correct relative pronoun selection (dont, auquel, duquel)",
    "prompt": "[Langues officielles] Complétez avec le pronom relatif approprié : « Le rapport ___ nous avons discuté hier contient plusieurs recommandations. »",
    "options": [
      "dont",
      "lequel",
      "auquel"
    ],
    "answer": 0,
    "explanations": [
      "Le verbe « discuter de » nécessite le pronom relatif « dont » (« discuter de quelque chose »).",
      "« Lequel » s'utilise après une préposition (par exemple « sur lequel ») mais pas pour remplacer « de ».",
      "« Auquel » s'utilise avec les verbes suivis de la préposition « à »."
    ]
  },
  {
    "id": "wq-838",
    "theme": "public-engagement",
    "skill": "writing",
    "level": "B",
    "objective": "Pronoun placement for direct and indirect object pronouns",
    "prompt": "[Mobilisation des citoyens] Choisissez la formulation correcte : « Les notes de service sont prêtes. Je ___ ai transmises ce matin. »",
    "options": [
      "les",
      "leur",
      "lui"
    ],
    "answer": 0,
    "explanations": [
      "Le pronom COD « les » remplace « les notes de service » (féminin pluriel).",
      "« Leur » est un pronom COI qui s'applique aux personnes (« envoyer à quelqu'un »).",
      "« Lui » est un pronom COI masculin/féminin singulier."
    ]
  },
  {
    "id": "wq-839",
    "theme": "it-digital",
    "skill": "writing",
    "level": "B",
    "objective": "Logical connectors for cause, consequence and restriction",
    "prompt": "[Numérique et technologies] Choisissez le connecteur approprié : « Le budget a été réduit ; ___, certains projets seront reportés. »",
    "options": [
      "par conséquent",
      "bien que",
      "toutefois"
    ],
    "answer": 0,
    "explanations": [
      "« Par conséquent » exprime la conséquence logique d'une décision budgétaire.",
      "« Bien que » est une conjonction de concession nécessitant une subordonnée au subjonctif.",
      "« Toutefois » marque une opposition et non une suite logique directe."
    ]
  },
  {
    "id": "wq-840",
    "theme": "finance",
    "skill": "writing",
    "level": "B",
    "objective": "Verbal nuance between permission, recommendation and obligation",
    "prompt": "[Gestion financière] Complétez avec la nuance de recommandation appropriée : « Il est ___ de réviser le document avant la réunion. »",
    "options": [
      "conseillé",
      "obligatoire",
      "interdit"
    ],
    "answer": 0,
    "explanations": [
      "« Conseillé » exprime une recommandation souple sans imposer une contrainte absolue.",
      "« Obligatoire » exprime une exigence stricte et non une simple suggestion.",
      "« Interdit » exprime une prohibition, ce qui contredit l'idée de réviser un document."
    ]
  }
];
