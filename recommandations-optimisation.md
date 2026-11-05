# Recommandations d'optimisation — Nina Carducci

## 1. Contexte et objectifs

Dans le cadre de l'optimisation du site portfolio de Nina Carducci, un audit initial a été réalisé le 27 octobre 2026 à l'aide de Google Lighthouse, en version mobile.

Cet audit a permis d'identifier plusieurs problèmes concernant les performances, le référencement naturel (SEO) et l'accessibilité du site.

### Résultats de l'audit initial

| Critère | Score initial |
|---|---|
| Performance | 64/100 |
| Accessibilité | 68/100 |
| Bonnes pratiques | Non renseigné |
| SEO | 73/100 |

### Objectifs de l'optimisation

- Améliorer les temps de chargement du site.
- Optimiser les images et les ressources CSS et JavaScript.
- Améliorer le référencement naturel grâce à une structure HTML adaptée.
- Rendre le site plus accessible aux utilisateurs.
- Atteindre un score Lighthouse d'au moins 90/100 en performance, accessibilité et SEO.
- Conserver l'apparence et les fonctionnalités du site existant.

Les recommandations suivantes s'appuient sur l'audit Lighthouse initial et l'analyse du code source fourni par OpenClassrooms.

## 2. Recommandations pour améliorer les performances

L'audit Lighthouse initial indique un score de **64/100 en performance** sur mobile.

L'analyse du code source montre plusieurs possibilités d'optimisation pour réduire les temps de chargement et améliorer l'expérience utilisateur.

### 2.1. Optimiser les images

**Problème identifié :**

Le site utilise de nombreuses images aux formats JPG et PNG, notamment dans le carrousel, la galerie et les sections de présentation.

Ces images peuvent être volumineuses et ralentir le chargement des pages, particulièrement sur mobile.

**Recommandations :**

- Convertir les images au format WebP pour réduire leur poids.
- Compresser les images tout en conservant une qualité visuelle satisfaisante.
- Utiliser les attributs `srcset` et `sizes` pour proposer des images adaptées aux différentes tailles d'écran.
- Ajouter `loading="lazy"` aux images situées en dehors de la zone visible au chargement.
- Donner la priorité au chargement de la première image du carrousel.

**Résultat attendu :**

Réduire la quantité de données téléchargées et améliorer la vitesse d'affichage des images.

### 2.2. Optimiser les fichiers CSS

**Problème identifié :**

Le site charge la feuille de style complète de Bootstrap, alors que toutes ses règles ne sont pas nécessairement utilisées.

**Recommandations :**

- Identifier les règles CSS réellement utilisées par le site.
- Supprimer les styles inutilisés à l'aide de PurgeCSS.
- Conserver les styles nécessaires au fonctionnement du carrousel, de la galerie et de l'affichage responsive.

**Résultat attendu :**

Réduire la taille des fichiers CSS téléchargés et limiter le travail nécessaire à leur traitement par le navigateur.

### 2.3. Optimiser le chargement du JavaScript

**Problème identifié :**

Les fichiers JavaScript sont chargés dans l'en-tête HTML sans attribut `defer`, ce qui peut bloquer l'analyse du document pendant leur chargement et leur exécution.

**Recommandations :**

- Ajouter l'attribut `defer` aux scripts compatibles.
- Conserver l'ordre de chargement des dépendances.
- Vérifier le fonctionnement du carrousel et de la galerie après modification.

**Résultat attendu :**

Permettre au navigateur d'analyser le HTML sans attendre l'exécution des scripts et améliorer la rapidité d'affichage.

### 2.4. Optimiser le chargement des polices

**Problème identifié :**

Les polices Google Fonts sont chargées à l'aide d'une feuille de style externe classique, susceptible de retarder l'affichage.

**Recommandations :**

- Préparer les connexions vers les domaines Google Fonts avec `preconnect`.
- Charger la feuille de style des polices de manière non bloquante, lorsque cela est approprié.
- Prévoir une solution de repli si les polices externes ne peuvent pas être chargées.

**Résultat attendu :**

Limiter l'impact du chargement des polices sur l'affichage initial.

### 2.5. Réduire les décalages de mise en page

**Problème identifié :**

Les images du site ne possèdent pas de dimensions explicites dans le HTML. Le navigateur peut donc devoir ajuster la mise en page lorsque les images sont chargées.

**Recommandations :**

- Définir les attributs `width` et `height` sur les images.
- Préserver leur adaptation responsive grâce au CSS.
- Vérifier le Cumulative Layout Shift (CLS) dans Lighthouse.

**Résultat attendu :**

Améliorer la stabilité visuelle de la page et éviter les déplacements inattendus du contenu pendant le chargement.

## 3. Recommandations pour améliorer le référencement naturel (SEO)

L'audit Lighthouse initial du 27 octobre 2026 indique un score SEO de **73/100**.

L'analyse du code HTML d'origine révèle plusieurs éléments susceptibles de limiter la compréhension et le référencement du site par les moteurs de recherche.

### 3.1. Ajouter un titre de page

**Problème identifié :**

Le document HTML ne contient pas de balise `<title>`.

**Recommandation :**

Ajouter un titre descriptif précisant le nom de la photographe, son activité et sa localisation.

**Résultat attendu :**

Permettre aux moteurs de recherche et aux utilisateurs d'identifier plus facilement le contenu de la page.

### 3.2. Ajouter une meta description

**Problème identifié :**

Aucune balise `<meta name="description">` n'est présente dans le code d'origine.

**Recommandation :**

Rédiger une description courte et pertinente présentant les services photographiques de Nina Carducci.

**Résultat attendu :**

Améliorer la présentation du site dans les résultats de recherche lorsque les moteurs utilisent cette description.

### 3.3. Déclarer la langue du document

**Problème identifié :**

La balise `<html>` ne précise pas la langue de la page.

**Recommandation :**

Ajouter l'attribut `lang="fr"` à la balise `<html>`.

**Résultat attendu :**

Faciliter l'interprétation linguistique du contenu par les navigateurs, les technologies d'assistance et les moteurs de recherche.

### 3.4. Améliorer la structure des titres HTML

**Problème identifié :**

La hiérarchie des titres n'est pas cohérente. Certaines citations utilisent des balises `<h1>`, tandis que d'autres éléments utilisent des titres inadaptés à leur rôle, notamment un `<h6>` pour un texte d'introduction.

**Recommandations :**

- Utiliser les balises de titres pour structurer les sections du site.
- Prévoir un titre principal pertinent pour la page.
- Respecter une hiérarchie logique entre les titres.
- Utiliser des balises de paragraphe pour les textes qui ne sont pas des titres.

**Résultat attendu :**

Rendre la structure du contenu plus compréhensible pour les moteurs de recherche et les utilisateurs de technologies d'assistance.

### 3.5. Optimiser les descriptions des images

**Problème identifié :**

Plusieurs images ne possèdent pas d'attribut `alt` ou utilisent une description générique comme `alt="..."`.

**Recommandation :**

Ajouter un texte alternatif pertinent aux images informatives, en décrivant leur contenu sans accumulation artificielle de mots-clés. Utiliser `alt=""` pour les images purement décoratives.

**Résultat attendu :**

Améliorer l'accessibilité des images et aider les moteurs de recherche à comprendre leur contenu.

### 3.6. Améliorer le référencement local

**Problème identifié :**

Le code HTML d'origine ne contient pas de données structurées Schema.org décrivant l'activité professionnelle de Nina Carducci.

**Recommandations :**

- Ajouter des données structurées Schema.org adaptées à son activité de photographe.
- Renseigner uniquement les informations professionnelles vérifiées, notamment le nom, la localisation et les coordonnées disponibles.
- Vérifier les données structurées avec les outils de validation de Google.

**Résultat attendu :**

Faciliter la compréhension de l'activité et de sa localisation par les moteurs de recherche, sans garantir l'affichage d'un résultat enrichi.

### 3.7. Ajouter les métadonnées de partage social

**Problème identifié :**

Le code HTML d'origine ne contient pas de métadonnées Open Graph ni de Twitter Cards.

**Recommandations :**

- Ajouter les balises Open Graph pour définir le titre, la description, l'image et l'URL de la page lors d'un partage.
- Ajouter les métadonnées Twitter Cards adaptées.
- Utiliser des informations cohérentes avec le contenu réel du site.

**Résultat attendu :**

Améliorer la présentation des liens partagés sur les réseaux sociaux.


## 4. Recommandations pour améliorer l'accessibilité

L'audit Lighthouse initial du 27 octobre 2026 indique un score d'accessibilité de **68/100**.

L'analyse du code HTML d'origine révèle plusieurs problèmes pouvant compliquer l'utilisation du site par les personnes ayant recours à des technologies d'assistance.

### 4.1. Ajouter des textes alternatifs aux images

**Problème identifié :**

Plusieurs images du site ne possèdent pas d'attribut `alt`, notamment les images de la galerie, le portrait de Nina Carducci et l'image de l'appareil photo.

Certaines images du carrousel utilisent également un texte alternatif générique : `alt="..."`.

**Recommandations :**

- Ajouter un texte alternatif descriptif aux images qui transmettent une information.
- Utiliser `alt=""` pour les images purement décoratives.
- Éviter les descriptions trop longues ou sans rapport avec l'image.

**Résultat attendu :**

Permettre aux utilisateurs de lecteurs d'écran de comprendre le contenu des images importantes.

### 4.2. Associer les étiquettes aux champs du formulaire

**Problème identifié :**

Les éléments `<label>` du formulaire de contact ne possèdent pas d'attribut `for` permettant de les associer explicitement aux champs correspondants.

**Recommandation :**

Ajouter un attribut `for` à chaque étiquette, avec une valeur identique à l'attribut `id` du champ concerné.

**Résultat attendu :**

Faciliter l'identification des champs par les technologies d'assistance et améliorer l'utilisation du formulaire.

### 4.3. Corriger la hiérarchie des titres

**Problème identifié :**

La structure des titres HTML n'est pas cohérente. Des citations sont présentées avec des balises `<h1>`, tandis qu'un paragraphe d'introduction utilise une balise `<h6>`.

**Recommandations :**

- Organiser les titres dans un ordre logique.
- Utiliser les titres pour identifier les sections importantes.
- Remplacer les balises de titres utilisées uniquement pour leur apparence par des éléments HTML appropriés.

**Résultat attendu :**

Faciliter la navigation dans les différentes sections du site, notamment avec un lecteur d'écran.

### 4.4. Vérifier les contrastes de couleurs

**Point à vérifier :**

Le contraste entre certains textes et leurs arrière-plans doit être contrôlé à l'aide d'un outil d'audit d'accessibilité.

**Recommandations :**

- Vérifier les contrastes avec Lighthouse et WAVE.
- Ajuster les couleurs lorsque le contraste est insuffisant.
- Préserver autant que possible l'identité visuelle du site.

**Résultat attendu :**

Améliorer la lisibilité des textes, notamment pour les personnes ayant une déficience visuelle.

### 4.5. Améliorer la structure sémantique de la page

**Problème identifié :**

Le HTML d'origine ne contient pas de balise `<main>` permettant d'identifier explicitement le contenu principal.

**Recommandations :**

- Encadrer le contenu principal dans une balise `<main>`.
- Employer les éléments HTML sémantiques adaptés aux différentes parties de la page.
- Vérifier que les liens et les boutons possèdent des noms accessibles compréhensibles.

**Résultat attendu :**

Faciliter la navigation et la compréhension de la structure du site par les technologies d'assistance.

### 4.6. Vérifier l'accessibilité avec WAVE

**Recommandations :**

- Analyser la version optimisée du site avec WAVE.
- Identifier et corriger les erreurs détectées.
- Effectuer un nouveau contrôle après les corrections.
- Conserver une capture d'écran du rapport WAVE final.

**Résultat attendu :**

Obtenir un rapport WAVE ne présentant aucune erreur détectée et disposer d'une preuve de vérification pour le dossier OpenClassrooms.

## 5. Conclusion et priorités d'optimisation

L'audit initial du site de Nina Carducci a permis d'identifier plusieurs axes d'amélioration concernant les performances, le référencement naturel et l'accessibilité.

Afin d'organiser les interventions, les optimisations sont classées selon leur priorité.

| Priorité | Optimisation recommandée | Objectif |
|---|---|---|
| Haute | Optimisation et compression des images | Améliorer les temps de chargement |
| Haute | Correction des textes alternatifs et des étiquettes du formulaire | Améliorer l'accessibilité |
| Haute | Ajout du titre, de la meta description et de la langue du document | Améliorer le SEO |
| Haute | Correction de la structure HTML et des titres | Améliorer la compréhension du contenu |
| Moyenne | Suppression des règles CSS inutilisées | Réduire les ressources téléchargées |
| Moyenne | Optimisation du chargement des scripts et des polices | Améliorer l'affichage initial |
| Moyenne | Définition des dimensions des images | Limiter les décalages de mise en page |
| Moyenne | Ajout des données structurées Schema.org | Améliorer le référencement local |
| Moyenne | Ajout des métadonnées Open Graph et Twitter Cards | Améliorer le partage sur les réseaux sociaux |

Ces recommandations serviront de base aux modifications techniques apportées au site.

Une fois les optimisations réalisées, de nouveaux audits Lighthouse et WAVE permettront de mesurer les améliorations obtenues et de vérifier les résultats par rapport aux objectifs du projet.

## 6. Optimisations SEO complémentaires réalisées

### Données structurées Schema.org

Ajout de données structurées au format JSON-LD avec le type `ProfessionalService`, permettant aux moteurs de recherche de mieux comprendre l'activité de Nina Carducci.

Les informations renseignées comprennent :
- Le nom et la description de l'activité
- L'adresse professionnelle et le numéro de téléphone
- Le tarif de départ des prestations
- L'image représentant la photographe
- L'URL officielle du site

**Validation :** test effectué avec l'outil Google Rich Results Test. Résultat : 2 éléments valides détectés (Commerces et services à proximité et Organisation), sans problème signalé.

### Métadonnées Open Graph et Twitter Cards

Ajout de métadonnées permettant d'améliorer la présentation du site lors du partage de son URL sur les réseaux sociaux.

Les informations définies comprennent le titre, la description, l'URL et l'image de présentation du site.

### URL canonique

Ajout d'une balise `rel="canonical"` afin d'indiquer aux moteurs de recherche l'URL de référence de la page d'accueil et de limiter les risques liés aux contenus dupliqués.

### Mise en ligne et vérification

Les modifications ont été enregistrées dans le dépôt GitHub et publiées sur GitHub Pages.

La présence des nouvelles métadonnées Open Graph a été vérifiée dans le code source de la version en ligne.

**Preuve de validation :** capture d'écran `schema-org-validation.png`.

## 7. Résultats des tests Lighthouse après optimisation

Un nouvel audit Lighthouse a été réalisé sur la version en ligne du site, en configuration mobile, après les différentes optimisations.

| Critère | Score initial | Score final |
|---|---|---|
| Performance | 64/100 | 99/100 |
| Accessibilité | 68/100 | 100/100 |
| Bonnes pratiques | Non relevé | 100/100 |
| SEO | 73/100 | 100/100 |

### Analyse des résultats

Les optimisations réalisées ont permis d'améliorer significativement les performances du site, notamment grâce à la compression et à l'adaptation des images, à l'optimisation des ressources CSS et au chargement différé des scripts.

Le score de performance est passé de 64 à 99 sur mobile, soit une progression de 35 points lors de l'audit retenu.

Les scores d'accessibilité, de bonnes pratiques et de SEO atteignent 100/100.

Les résultats Lighthouse peuvent varier légèrement entre plusieurs audits selon les conditions de mesure. Les scores présentés correspondent à un audit réalisé après optimisation.

**Justificatif :** capture d'écran du rapport Lighthouse final en configuration mobile.