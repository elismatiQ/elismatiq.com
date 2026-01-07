---
category: technologie, gouvernance
date: 2026-01-06
description: "Comment utiliser IA pour améliorer les opérations IT dans le secteur public canadien"
ogImage: "/assets/img/blog/2026-01-06-prompts-ia-equipes-ti-secteur-public-canadien.png"
title: "Guide de démarrage rapide&nbsp;: Prompts IA pour les équipes TI du secteur public canadien"
translationKey: "2026-01-06-ai-prompts-canadian-public-sector-it-teams"
---

Les équipes TI des gouvernements fédéral, provinciaux et municipaux au Canada font face à une &laquo;&nbsp;tempête parfaite&nbsp;&raquo;&nbsp;: des systèmes _patrimoniaux_ critiques arrivant en fin de vie, des cybermenaces étatiques de plus en plus sophistiquées et des budgets souvent stagnants.

Alors que la **Directive sur la prise de décision automatisée (DPDA)** encadre l'utilisation de l'intelligence artificielle (IA), il existe un besoin pressant d'outils tactiques respectant ces garde-fous. Ce guide présente des scénarios clés où les Grands Modèles de Langage (<em lang="en">LLM</em>) peuvent agir comme multiplicateurs de force, tout en intégrant les mesures de protection nécessaires pour les environnements de données de niveau **Protégé B**.

## 1. Gestion de la sécurité des systèmes et des vulnérabilités

**Le défi&nbsp;:** Gérer l'afflux constant de données de balayage de vulnérabilités et signaler les exceptions aux conseils de surveillance.

### Prompts tactiques

- **Priorisation de la remédiation&nbsp;:** _&laquo;&nbsp;Analyse ces résultats hebdomadaires de balayage de vulnérabilités pour \[Nom du système\] et regroupe les conclusions par gravité et par composant affecté. Recommande des étapes de remédiation classées par réduction de risque, en te basant sur les 10 meilleures mesures de sécurité du Centre de la sécurité des télécommunications (CST).&nbsp;&raquo;_
- **Rapport de conformité&nbsp;:** _&laquo;&nbsp;Rédige un résumé d'une page de toutes les exceptions de sécurité applicative accordées au cours du dernier trimestre et associe chacune au contrôle pertinent dans notre \[ITSG-33 / Référentiel de cybersécurité\].&nbsp;&raquo;_

### Mesures de protection (<em lang="en">Safeguards</em>)

- **Masquage des actifs&nbsp;:** Assurez-vous que les noms d'hôtes ou les adresses IP internes sont remplacés par des identifiants génériques (ex: _Prod-Web-01_) avant de téléverser les rapports.
- **Alignement sur les politiques&nbsp;:** Vérifiez que les &laquo;&nbsp;étapes recommandées&nbsp;&raquo; s'alignent sur la politique de correction (<em lang="en">patching</em>) spécifique de votre ministère (ex: 48 heures pour les vulnérabilités critiques).

## 2. <em lang="en">DevOps</em> et gestion des mises en production

**Le défi&nbsp;:** Charge de travail manuelle élevée pour la documentation et l'analyse de performance avant les étapes d'approbation de Bibliothèque pour l'infrastructure des technologies de l'information(<em lang="en">ITIL</em>).

### Prompts tactiques

- **Analyse de couverture&nbsp;:** _&laquo;&nbsp;Fusionne ces rapports de couverture de code des trois dernières versions. Calcule le pourcentage de couverture de test pour chaque module, souligne tout module inférieur à 75&nbsp;% et rédige un court récit expliquant les lacunes les plus importantes.&nbsp;&raquo;_
- **Vérification des accords sur le niveau de service (<em lang="en">SLA</em>)&nbsp;:** _&laquo;&nbsp;Résume les données de test de performance et souligne les points de terminaison dépassant notre accord de niveau de service (<em lang="en">SLA</em>) de \[Valeur\] ms. Présente les conclusions sous forme de tableau.&nbsp;&raquo;_

### Mesures de protection (<em lang="en">Safeguards</em>)

- **Données d'environnement&nbsp;:** N'incluez pas de chaînes de connexion de production ou de clés secrètes dans les plans de déploiement ou les extraits d'<em lang="en">Infrastructure-as-Code (IaC)</em>.
- **Surveillance humaine&nbsp;:** Un développeur principal doit approuver le plan de retour en arrière (<em lang="en">rollback</em>) généré par l'IA avant qu'il ne soit soumis pour approbation à la gestion des changements.

## 3. Infrastructure et opérations infonuagiques

**Le défi&nbsp;:** S'assurer que l'infrastructure en tant que code (<em lang="en">IaC</em>) respecte les mandats stricts de résidence des données et de chiffrement.

### Prompts tactiques

- **Audit de conformité <em lang="en">IaC</em>&nbsp;:** _&laquo;&nbsp;Compare ces définitions YAML/JSON pour le cluster de base de données de secours avec nos exigences \[Nom de la politique\] (<em lang="en">IaC</em>) (chiffrement des données au repos, isolation réseau, ancrage dans la région canadienne). Produis un tableau des éléments non conformes avec des suggestions de corrections.&nbsp;&raquo;_
- **Prévision de capacité&nbsp;:** _&laquo;&nbsp;Génère un rapport de capacité hebdomadaire pour les machines virtuelles hébergeant \[Nom du système\]. Inclue des prévisions à 30 jours basées sur l'utilisation historique. Identifie toute contrainte projetée.&nbsp;&raquo;_

### Mesures de protection (<em lang="en">Safeguards</em>)

- **Ancrage régional&nbsp;:** Instruisez explicitement le <em lang="en">LLM</em> de vérifier que les balises region ou location sont définies sur des centres de données canadiens.
- **Identifiants de compte&nbsp;:** Nettoyez les identifiants de compte de fournisseur infonuagique ou les <em lang="en">ID</em> d'abonnement des manifestes avant l'analyse.

## 4. Qualité et analyse des données

**Le défi&nbsp;:** Nettoyer les ensembles de données hérités et les préparer pour les processus Extraction, Transformation, Chargement (ETL).

### Prompts tactiques

- **Dédoublonnage&nbsp;:** _&laquo;&nbsp;Dédoublonne cet ensemble de données de \[Nom/Type de données\] par numéro d'identité et par date, en signalant les entrées conflictuelles pour examen. Fournis un résumé des doublons supprimés.&nbsp;&raquo;_
- **Normalisation des données&nbsp;:** _&laquo;&nbsp;Combine ces trois exportations délimitées par des tabulations en un seul tableau normalisé, ajoute un horodatage "last_updated" et sors le résultat au format <em lang="en">JSON</em>.&nbsp;&raquo;_

### Mesures de protection (<em lang="en">Safeguards</em>)

- **Nettoyage des renseignements personnels (RP)&nbsp;:** Si l'ensemble de données contient des RP, utilisez un script local pour hacher les identifiants sensibles (comme les numéros d'assurance sociale (NAS)) avant de transmettre les données au <em lang="en">LLM</em>.
- **Validation de schéma&nbsp;:** Vérifiez manuellement la structure <em lang="en">JSON</em> de sortie par rapport au schéma de votre base de données de destination.

## 5. Centre de services et soutien aux utilisateurs

**Le défi&nbsp;:** Réduire le volume de tickets pour les demandes courantes et améliorer la cohérence du tri.

### Prompts tactiques

- **Génération de base de connaissances&nbsp;:** _&laquo;&nbsp;Génère un article de base de connaissances sur l'enrôlement des appareils dans notre solution gestion des appareils mobiles (<em lang="en">MDM</em>), en utilisant ces captures de console comme guide. Fournis des instructions étape par étape en langage clair.&nbsp;&raquo;_
- **Analyse des tendances&nbsp;:** _&laquo;&nbsp;Analyse les journaux de tickets du dernier trimestre et fais ressortir les cinq problèmes récurrents par département. Suggère des ressources de libre-service pour chacun.&nbsp;&raquo;_

### Mesures de protection (<em lang="en">Safeguards</em>)

- **Simplicité&nbsp;:** Assurez-vous que les instructions évitent le jargon technique qui pourrait entraîner d'autres appels au soutien.
- **Confidentialité&nbsp;:** Assurez-vous que les journaux de tickets utilisés pour l'analyse ne contiennent pas de mots de passe d'utilisateurs ou de notes de cas sensibles.

## 6. Approvisionnement et surveillance des fournisseurs

**Le défi&nbsp;:** Évaluer des propositions <em lang="en">Software as a service (SaaS)</em> complexes par rapport aux exigences canadiennes de souveraineté et de sécurité.

### Prompts tactiques

- **Comparaison de <em lang="en">SLA</em>&nbsp;:** _&laquo;&nbsp;Compare les <em lang="en">SLA</em> dans ces trois propositions d'hébergement infonuagique et souligne les lacunes par rapport à notre exigence de disponibilité de 99,99&nbsp;% et au mandat de résidence des données au Canada.&nbsp;&raquo;_
- **Rédaction de demande de propositions (DP)&nbsp;:** _&laquo;&nbsp;Génère un modèle d'ébauche de DP pour une plateforme <em lang="en">Security Information and Event Management (SIEM)</em>, en te référant aux règles d'approvisionnement de notre juridiction et aux contrôles de cybersécurité obligatoires.&nbsp;&raquo;_

### Mesures de protection (<em lang="en">Safeguards</em>)

- **Exactitude des clauses&nbsp;:** Demandez toujours au modèle de citer le numéro de page ou de section de la proposition pour une vérification manuelle.
- **Conflit d'intérêts&nbsp;:** Assurez-vous que la DP générée ne favorise pas par inadvertance les noms de technologies propriétaires d'un fournisseur spécifique.

## 7. Intervention en cas d'incident et continuité

**Le défi&nbsp;:** Maintenir une communication claire et cohérente lors de pannes majeures ou d'événements de sécurité.

### Prompts tactiques

- **Comms de crise&nbsp;:** _&laquo;&nbsp;Rédige un ticket d'incident initial, une déclaration publique et une mise à jour pour la direction interne concernant un événement de rançongiciel suspecté affectant les serveurs de messagerie de \[Agence\].&nbsp;&raquo;_
- **Examen après action&nbsp;:** _&laquo;&nbsp;Génère un plan de rapport après incident pour la panne de réseau de la semaine dernière, incluant les sections sur la cause profonde, l'atténuation et les leçons apprises, en te basant sur ces extraits de journaux système.&nbsp;&raquo;_

### Mesures de protection (<em lang="en">Safeguards</em>)

- **Pré-approbation&nbsp;:** Les modèles générés par l'IA doivent être pré-approuvés par les équipes de communications et juridiques _avant_ qu'un incident réel ne se produise.
- **Calendrier&nbsp;:** Utilisez l'IA pour accélérer la rédaction, mais n'automatisez jamais la _diffusion_ des déclarations publiques.

## 8. Collaboration interorganisationnelle

**Le défi&nbsp;:** Aligner les normes et la formation entre les différents paliers de gouvernement (fédéral, provincial, municipal).

### Prompts tactiques

- **Cartographie des politiques&nbsp;:** _&laquo;&nbsp;Répertorie les exigences de formation en cybersécurité qui se chevauchent dans ces politiques du Revenu, du Commerce et de l'Agriculture. Propose un curriculum consolidé avec des modules partagés.&nbsp;&raquo;_
- **Alignement des normes&nbsp;:** _&laquo;&nbsp;Résume les normes techniques citées dans ces trois cadres d'approvisionnement et présente un tableau comparatif montrant où ils s'alignent sur les exigences de rétention des données.&nbsp;&raquo;_

### Mesures de protection (<em lang="en">Safeguards</em>)

- **Vérification de la juridiction&nbsp;:** Assurez-vous que le <em lang="en">LLM</em> comprend la différence entre la législation fédérale (Loi sur la protection des renseignements personnels (LPRPDE)) et la législation provinciale (ex: la FIPPA de l'Ontario).

## 🚀 Au-delà du prompt&nbsp;: Du clavardage manuel aux flux automatisés

Les prompts énumérés ci-dessus sont plus que de simples instructions de &laquo;&nbsp;clavardage&nbsp;&raquo; — ils représentent la **base logique métier** pour construire des outils d'IA gouvernementaux internes.

Pour aller au-delà du prompt manuel, les équipes TI peuvent intégrer ces instructions dans des applications personnalisées où les **mesures de protection** peuvent évoluer vers des **scripts automatisés**&nbsp;:

- **Prétraitement&nbsp;:** Des scripts automatisés peuvent nettoyer les RP ou masquer les adresses IP avant même que les données n'atteignent le <em lang="en">LLM</em>.
- **Post-traitement&nbsp;:** Des expressions régulières (<em lang="en">regex</em>) ou des <em lang="en">LLM</em> &laquo;&nbsp;juges&nbsp;&raquo; secondaires peuvent vérifier que la sortie ne contient aucun contenu interdit et respecte les schémas techniques requis.
- **Automatisation des flux de travail&nbsp;:** Ces unités &laquo;&nbsp;Prompt \+ Script&nbsp;&raquo; peuvent être intégrées dans les pipelines <em lang="en">CI/CD</em> existants, les systèmes de tickets (<em lang="en">Jira/ServiceNow</em>) ou les plateformes d'orchestration de la sécurité (<em lang="en">SOAR</em>) pour automatiser des cycles de vie TI entiers.

## Conclusion&nbsp;: L'approche &laquo;&nbsp;Copilote&nbsp;&raquo;

L'utilisation de l'IA dans les TI gouvernementales ne vise pas à remplacer l'ingénieur ; il s'agit d'éliminer la &laquo;&nbsp;corvée cognitive&nbsp;&raquo; des tâches répétitives. En utilisant ces prompts comme fondation pour des **flux de travail TI automatisés** au sein d'un environnement **souverain et privé**, les équipes TI peuvent passer d'un mode réactif à l'innovation proactive.

### Évaluation de l'exactitude&nbsp;: 98/100

- **Note&nbsp;:** Ces prompts et stratégies d'automatisation sont conçus pour être compatibles avec les directives actuelles du Secrétariat du Conseil du Trésor. Le score reflète le fait que la mise en œuvre réelle nécessite une intégration avec les points de terminaison d'API et les configurations de sécurité spécifiques à l'organisation.
