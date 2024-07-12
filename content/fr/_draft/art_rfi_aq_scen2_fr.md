---
model: atelier
title: Rapport de Fin d'Intervention
description: Je cours un risque pour ma sécurité, mon habilitation HN2 est expirée. 
image: https://media.paxpar.tech/20240605_RFI_fr.png
aside: false
date: 2024-06-26
---



# Paxpar et la gestion de documents complexes

Un des principaux atoûts de la plateforme Paxpar est la gestion de documents complexes, de **plusieurs centaines** de pages.

Pour vérifier les documents fournis, notre solution fait appel à une liste de contrôle qui est spécifique à chaque document et qui vérifie la **conformité** de points précis.

L'outil Paxpar permet une visualisation graphique de ces documents complexes et de ses différentes pièces jointes sous la forme d'une marguerite.

![image](/custom/assu_sini/documents/20240616-RFI-VuePiecesJointes.png)

Ainsi, il est plus facile de comprendre les documents principaux, les documents joints et les fichiers associés.


##  Contexte : le Rapport de Fin d'Intervention (RFI)

Ce document, issu du domaine du nucléaire, est **complexe** et **volumineux**. Il est composé d'une centaine de sous-documents, répartie en 6 dossiers, qui sont eux-mêmes constitués de plusieurs sous-dossiers.
Lorsque que l'on doit tout vérifier manuellement, il y a de quoi perdre la tête !

Le RFI en quelques chiffres c'est : 
- **50** intervenants
- **100** documents
- **2500** signatures

Lors de la création de ce document, chaque responsable doit s'assurer de la conformité des pièces qu'il reçoit et/ou transmet pour que le Rapport soit complet et conforme.


## Cas concret : le Dossier Assurance Qualité (DAQ)

Notre exemple fait intervenir 3 acteurs :

![](https://media.paxpar.tech/RFI_kpi-isa.png) responsable du dossier assurance qualité

Alain : responsable chez Nuclear Business de l'organigramme des sous-traitants

Vitorino Silva : directeur de la société Silva

## Mise en scène


### **Isabelle** :

> Je dois vérifier mon Dossier Assurance Qualité avant de l'envoyer, pour cela je le dépose sur la plateforme paxpar dans la rubrique _"Check"_.

![image](/custom/assu_sini/documents/DAQ-removebg-preview.png)

:ppw-pdf-link{href="/documents/aqc.pdf"}

- La checklist me signale une erreur !
![image](/custom/assu_sini/documents/pp_check1.png)

- Je clique sur _"Vue de base"_ ou _"Vue non-conformité"_ pour trouver la cause.
![image](/custom/assu_sini/documents/pp_check2.png)

- Je constate que le dossier sous-traitants n'est pas conforme.   

![image](/custom/RFI/scenarios/rfi_silva_date_ko_NM.png)

> Je contacte Alain le responsable du dossier sous-traitants pour qu'il m'en renvoie un correct.  

## Alain

- Effectivement, je n'ai pas pris le temps de vérifier tous mes dossiers sous-traitants avant de constituer mon dossier final.
- Je check le dossier que j'ai envoyé à Isabelle et qui n'est pas correct.

:ppw-pdf-link{href="/documents/sstc.pdf"}

![image](/custom/RFI/scenarios/rfi_org_ss_traitant.png)

- C'est le dossier Silva qui pose problème.

> Je contacte Vitorino et lui indique que l'habilitation HN2 de N Malherbe a expiré depuis le 23-12-2016 et que la prestation est encore en-cours.

### Vitorino Silva

- Je dois générer un organigramme correct de ma société. <br>
- Nicolas a fait son recyclage HN2 et j'ai oublié d'actualisé son carnet d'habilitations.
- Je vais générer une nouvelle version.
- Je vais sur la rubrique "Craft" dans Paxpar.

![](/custom/RFI/scenarios/rfi_craft_carnet.png)

 je dépose l'ancienne version sur la plateforme pour ne pas avoir à re-saisir tous les champs.

:ppw-pdf-link{href="/documents/carnet_malherbec.pdf"}

- Je supprime l'ancienne habilitation HN2.

- Je dépose l'attestation de recyclage.

:ppw-pdf-link{href="/documents/hn2_malherbe.pdf"}

- Je finalise le document en le signant.
- Je l'envoie à Nicolas pour signature.
- Après réception de la nouvelle habilitation

:ppw-pdf-link{href="/documents/carnet_malherbe.pdf"}

- Je vais maintenant générer une nouvelle version de mon organigramme.
- Je vais sur la rubrique "Craft" dans Paxpar.

![](/custom/RFI/scenarios/rfi_org.png)

- Je dépose mon dossier organigramme non correct

![](/custom/RFI/scenarios/rfi_org_silva.png)

- Je supprime l'ancien carnet de Nicolas.

![](/custom/RFI/scenarios/rfi_org_silva_malherbe_sup.png)

- Je dépose le nouveau.

:ppw-pdf-link{href="/documents/sst_silva.pdf"}

- Je finalise le document et l'envoie à Alain.

## Alain

- J'ai reçu le dossier Silva.
- Pour générer une nouvelle version de mon dossier organigramme sous-traitants.
- Je vais sur la rubrique "Craft" dans Paxpar.

![](/custom/RFI/scenarios/rfi_craft_sst.png)

- Je dépose l'ancienne version sur la plateforme pour ne pas avoir à re-saisir tous les champs.

![](/custom/RFI/scenarios/rfi_sst_saisie.png)

- Je supprime l'ancien dossier Silva

![](/custom/RFI/scenarios/rfi_sst_sup_silva.png)

- Je dépose celui que Vitorino m'a envoyé.

![](/custom/RFI/scenarios/rfi_sst_depot.png)

- Je supprime la première version Silva dans Saisir 

- Je vérifie mon document.

![](/custom/RFI/scenarios/rfi_vue_simplifie.png)

- Cette fois-çi c'est vert.
- Je finalise et l'envoie à Isabelle.

:ppw-pdf-link{href="/documents/sst.pdf"}

## Isabelle

- J'a reçu le dossier sous-traitants envoyé par Alain.
- Je vais générer un nouveau dossier Assurance Qualité.
- Je vais sur la rubrique "Craft" dans Paxpar.

![](/custom/assu_sini/documents/001_craft_aq.png)

 je dépose l'ancienne version.

![](/custom/assu_sini/documents/002_pdf.png)

- Je supprime le dossier sous-traitants.

![](/custom/RFI/scenarios/rfi_aq_sst_sup.png)

- Je dépose la nouvelle version 

:ppw-pdf-link{href="/documents/sst.pdf"}

- Je supprime la ligne du premier organigramme des sous-traitants (XXX - à repréciser)

![](/custom/assu_sini/documents/005_liste_docs.png)

- Je vérifie.
- Tout est vert !    

![](/custom/assu_sini/documents/006_verif.png)

- Je finalise en signant mon dossier Assurance Qualité

- J'obtiens le PDF _aq.pdf_ conforme ! <br>
- Je peux, dés à présent, envoyer ce dossier Assurance Qualité à mon responsable, en toute confiance.
