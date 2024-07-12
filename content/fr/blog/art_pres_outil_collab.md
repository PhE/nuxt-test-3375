---
title: Les outils collaboratifs utilisés
description: Présentation d'outils collaboratifs utilisés par l'équipe 
image: https://media.paxpar.tech/20240605_RFI_fr.png # à changer
aside: false
date: 2024-07-11
---


## Demo code front

### Contexte 

Camille demande à Alcal de développer une nouvelle fonctionnalité Web.

### Mise en scène 

#### Camille

1. Je crée un ticket avec la description de la fonctionnalité et je l'assigne à Alcal.

#### Alcal 

1. Je vois le nouveau ticket sur mes tâches assignés.

2. Je crée une nouvelle branche à partir de la branche `main` pour développer.

3. Je lance un serveur local pour tester mes modifications en direct : 

    3.1. J'exécute la commande `bun run dev` <br>
    3.2. J'ouvre une nouvelle fenêtre dans un navigateur et j'entre l'URL http://localhost:3000 <br>
    3.3 Je peux maintenant visualiser mes modifications en direct, pour cela, je n'ai qu'à enregistrer les modifications et la page s'actualise automatiquement.

4. Une fois ma fonctionnalité terminée, je commit mes modiifications.

5. Je mentionne @Camille dans le ticket avec le lien de déploiement de la branche pour lui demander de vérifier que la fonctionnalité est bien celle attendue.

6. Camille à validé ma fonctionnalité, je peux maintenant créer une merge request. Je peux aussi ajouter Philippe en tant que Reviewer pour qu'il vérifie mon code. 

#### Philippe 

> Alcal m'a demandé via la merge request de vérifier son code.

1. Je passe en revue le code d'Alcal.

2. Si tout est validé pour moi, je valide la merge request, incorporant la nouvelle fonctionnalité à la branche `main` et détruisant la branche temporaire de développement d'Alcal.

<!-- 
présenter 
- les tickets et les to-do (git), affecter à alcal
- into le code sur une nouvelle branche (sa branche à lui)
- into la visualisation
- into la merge request
- into la revue code
- into le merge


Camille créer une demande à Alcal pour une nouvelle fonctionnalité front.
Alcal voit le ticket, créer une nouvelle branche. 
Il commence à coder cette fonctionnalité. Il souhaite visualiser en direct ses modifications.
Donc il lance paxpar en local (préciser sa branche à lui).
Il fini sa fonctionnalité, commit les modifs et demande à Camille de vérifier le résultat. (en tagant Camille dans un commentaire sur le ticket (et avec le lien vers l'url de sa branche)).
Camille voit le tag dans la section to-do de gitlab. Va sur le ticket, puis sur l'url. Elle est satisfaite du résultat.
Alcal créer une merge request (il peut affecter Philippe à la merge request, pour qu'il fasse une revue de code).
Philippe fait sa revue de code et valide la merge request. Et merge les 2 branches (par défaut, la branche d'alcal est supprimé).
-->

<br/>

## Demo article

### Contexte

Je veux que Camille écrive un article sur les factures au format Factur-X

### Mise en scène 

#### Thierry

1. Je crée un ticket que j'assigne à Camille avec les détails de l'article.

#### Camille 

1. Je regarde mes tâches à réaliser dans les tickets qui me sont assignés.

2. Je vois que Thierry m'a affecté la rédaction d'un nouvel article.

3. Je vais dans VS Code, dans la branche `content` de `pp-front`.

4. Je crée un nouveau fichier .md dans `pp-front/content/fr/blog`.

5. Je lance le serveur local pour visualiser la branche en direct.
    
    5.1. J'exécute la commande `bun run dev` <br>
    5.2. J'ouvre une nouvelle fenêtre dans un navigateur et j'entre l'URL http://localhost:3000 <br>
    5.3 Je peux maintenant visualiser mes modifications en direct, pour cela, je n'ai qu'à enregistrer les modifications et la page s'actualise automatiquement.

6. Je rédige mon article et je commit les modifications.

7. Je rédige un commentaire dans le ticket, en mentionnant @Thierry et en donnant l'url associé à la branche `content` pour qu'il relise l'article.

#### Thierry

1. Je regarde dans ma To-Do list et constate que Camille m'a mentionné.

2. Je vais donc relire son article en utilisant le lien associé à la branche `content`.

3. J'effectue, si besoin, des modifications.

4. Je commit mes modifications.

5. L'article est fini. Je veux qu'il soit pulié.

> Info : Je n'ai pas besoin de créer une merge request entre la branche `content` et la branche `main` car celle-ci est déjà créée et ouverte sur `pp-front`.

6. Je demande simplement à Philippe qu'il réalise le merge, sans supprimer la branche `content`.










<!-- 
Thierry donne fait une demande à Camille (un ticket) afin de rédiger un article sur XXXX.
Camille voit le ticket, commence la rédaction sur la branche "content" de pp-front. Elle souhaite visualiser en direct ses modifications.
Donc elle lance paxpar en local (la procédure en court, la branche content).
Elle rédige son article, commit les modifs et demande à Thierry de le relire.
Thierry va sur l'url dédié à la branche "content", vu que les modifs ont été commiter, il voit son article et le corrige.
Thierry commit ses modifs.
Quand les deux protagoniste sont d'accord sur l'article.

Camille veut que son article soit publié. 
La merge request étant déjà créer et tout le temps ouverte, pour le merge entre la branche "content" et "main".
Il suffit à Camille de demander à Philippe de merge la branche "content" avec la branche "main".
Philippe merge les 2 branches, sans supprimer la branche content.
-->
