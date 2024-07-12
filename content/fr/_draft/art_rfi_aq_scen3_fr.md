---
model: atelier
title: Rapport de Fin d'Intervention
description: Je détecte une signature manquante dans le dossier AQ 
image: https://media.paxpar.tech/20240605_RFI_fr.png
aside: false
date: 2024-06-27
---



# Paxpar et la gestion de documents complexes

Un des principaux atoûts de la plateforme Paxpar est la gestion de documents complexes, de **plusieurs centaines** de pages.

Pour vérifier les documents fournis, notre solution fait appel à une liste de contrôle qui est spécifique à chaque document et qui vérifie la **conformité** de points précis.

L'outil Paxpar permet une visualisation graphique de ces documents complexes et de ses différentes pièces jointes sous la forme d'une marguerite.

![image](/custom/assu_sini/documents/20240616-RFI-VuePiecesJointes.png)

Ainsi, il est plus facile de comprendre les documents principaux, les documents joints et les fichiers associés.


##  Contexte : le Rapport de Fin d'Intervention (RFI)

Ce document, issu du domaine du nucléaire, est **complexe** et **volumineux**. Il est composé d'une centaine de sous-documents, répartie en 5 dossiers, qui sont eux-mêmes constitués de plusieurs sous-dossiers.
Lorsque que l'on doit tout vérifier manuellement, il y a de quoi perdre la tête !

Le RFI en quelques chiffres c'est : 
- **50** intervenants
- **100** documents
- **2500** signatures

Lors de la création de ce document, chaque responsable doit s'assurer de la conformité des pièces qu'il reçoit et/ou transmet pour que le Rapport soit complet et conforme.


## Cas concret : le Dossier Assurance Qualité (DAQ)

Notre exemple fait intervenir trois acteurs :

![](https://media.paxpar.tech/RFI_kpi-isa.png) responsable du dossier assurance qualité

Patrick : responsable du dossier de Suivi d'Intervention

Méliane Croquet : chargé de travaux Nuclear Business


## Mise en scène


### **Isabelle** :

> Je dois vérifier mon Dossier Assurance Qualité avant de l'envoyer, pour cela je le dépose sur la plateforme paxpar dans la rubrique _"Check"_.

![image](/custom/assu_sini/documents/DAQ-removebg-preview.png)

- La checklist me signale une erreur !
![image](/custom/assu_sini/documents/pp_check1.png)

- Je clique sur _"Vue de base"_ ou _"Vue non-conformité"_ pour trouver la cause.
![image](/custom/assu_sini/documents/pp_check2.png)

- Ce n'est pas la signature de Méliane qui est dans sur le fichier _DI001_
- Je ne peux pas accepter le dossier DSI 

![image](/custom/RFI/scenarios/rfi_dsi_sign_ko.png)

> Je contacte Patrick pour qu'il vérifie et me renvoie un DSI conforme.


### Patrick

- Je dois générer un DSI correct pour Isabelle. <br>
- Isabelle m'a indiqué que ce n'est pas Méliane qui a signé la séquence 6 dans la fiche DI001)

> Je la contacte 

## Méliane

- Je n'ai pas eu connaissance de ce document et pour cause, j'étais absente à cette période.
- Ma collègue a signé à ma place alors qu'elle n'est pas habilitée à le faire.
- Je vérifie le document, je constate son intégrité.
- Je note qu'il y a eu une irrégularité sur la signature.
- Je le signe et le renvoie à Patrick

(Mettre l'image du doc à signer)

## Patrick

- J'ai reçu la version signée par Méliane.
- Pour générer un nouveau DSI.
- Je vais sur la rubrique _"Craft"_ dans Paxpar.

![image](/custom/RFI/scenarios/rfi_craft_dsi.png)

- Je dépose l'ancienne version DSI

![image](/custom/RFI/scenarios/rfi_dsi_depot.png)

- Je supprime le fichier DI001

![image](/custom/RFI/scenarios/rfi_dsi_di001_sup.png)

- Je dépose le fichier envoyé par Méliane

(mettre image du doc signé)

- Je vérifie, c'est vert.
- Je peux l'envoyer à Isabelle.

![image](/custom/RFI/scenarios/rfi_vue_simplifie.png)

### Isabelle

> J'ai bien reçu la nouvelle version du DSI.

- Je vais générer un nouveau dossier Assurance Qualité.
- Je vais sur la rubrique _"Craft"_ dans Paxpar.


![](/custom/assu_sini/documents/001_craft_aq.png)

- Je dépose l'ancien PDF "Assurance qualité".

![](/custom/assu_sini/documents/002_pdf.png)

- Je supprime l'ancien DSI.

![](/custom/RFI/scenarios/rfi_dsi_sup.png)

- Je dépose le nouveau DSI.

![](/custom/assu_sini/documents/002_pdf.png)

- Je supprime la ligne du premier DSI

![](/custom/RFI/scenarios/rfi_dsi_ligne_sup.png)

- C'est fait

![](/custom/RFI/scenarios/rfi_dsi_ligne_sup_fait.png)

- Je vérifie.
- Tout est vert !    

![](/custom/RFI/scenarios/rfi_aq_verif.png)

- Je finalise en signant mon dossier Assurance Qualité

> J'obtiens le PDF _aq.pdf_ conforme ! <br>
Je peux, dés à présent, envoyer ce dossier Assurance Qualité à mon responsable, en toute confiance.
