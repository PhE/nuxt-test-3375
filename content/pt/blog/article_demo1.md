---
model: atelier
title: Relatório Final de Intervenção (RFI)
description: Simplificar a verificação da conformidade dos seus ficheiros RFI e de todos os documentos associados a este relatório. Simplificar a geração de ficheiros RFI. 
image: /images/images_articles/demo_1/image_accueil_article_demo_1.png
date: 2024-06-18
---

## Paxpar.tech e a gestao de documentos complexos

Uma das principais vantagens da plataforma **paxpar.tech** é a sua capacidade de gerir documentos complexos de **várias centenas** de páginas.

Para controlar os documentos fornecidos,  utilizamos uma lista de controlo específica para cada documento e verifica a **conformidade** de pontos precisos.

A ferramenta **paxpar.tech** apresenta estes documentos complexos sob a forma de uma cadeia.

![marguerite](/images/images_articles/demo_1/marguerite.png)


Isto facilita a compreensão dos documentos principais, dos documentos anexos e dos ficheiros associados.


## Antecedentes: o Relatório Final de Intervenção (RFI)

Este documento, do sector nuclear, é **complexo** e **volumoso**. É composto por cerca de uma centena de subdocumentos, divididos em 5 pastas, que por sua vez são compostas por várias subpastas.
Quando se tem de verificar tudo manualmente, é o suficiente para perder a cabeça!

RFI em alguns numeros é:
- **50** intervenientes
- **100** documentos
- **2500** assinaturas

Ao criar este documento, cada gestor deve certificar-se de que os documentos que recebe e/ou transmite cumprem os requisitos para garantir que o Relatório está completo e em conformidade.

## Estudo pratico: o Dossier de Garantia de Qualidade (DGQs)

O nosso exemplo envolve dois atores :

![personagem](/images/images_articles/demo_1/illus_persos_pt.png)

## Encenação

### **Isabelle** :

> Preciso de verificar o meu ficheiro de garantia de qualidade antes de o enviar ao meu superior.

- **1.** Para isso carrego-o para a plataforma **paxpar.tech** sob o titulo _"Check"_ .

:ppw-pdf-link{href="/documents/aqb1.pdf"}

- **2.** A lista de controlo avisa-me de um erro!
![erreur_checklist](/images/images_articles/demo_1/isa_1_001.png)

- **3.** Clico na _"Vue de base"_ ou na _"Vue non-conformité"_ para encontrar a causa.
![menu_vues](/images/images_articles/demo_1/isa_1_002.png)

- **4.** Falta uma linha na LDA.
- **5.** Tenho um ficheiro _DI002_ no ficheiro de acompanhamento do trabalho (DSI), mas a linha não foi introduzida no LDA.

![erreurLDA_DSI](/images/images_articles/demo_1/isa_1_003.png)


> Telefono a Jacques para que ele possa verificar e enviar-me um documento conforme.


### **Jacques** :

> Preciso de gerar um LDA correto para o Isabelle.

- **1.** Giro a minha lista de documentos LDA num ficheiro Excel.

![excel_old](/images/images_articles/demo_1/jacques_001.png)


- **2.** Quando comparo o LDA e o DSI, apercebo-me de que falta uma linha DI002 no LDA, quando tenho o ficheiro PDF no DSI.
- **3.** Gero imediatamente um novo LDA e enviá-lo a Isabelle.  
- **4.** Acrescento a linha DI002 ao meu ficheiro Excel.

![excel_fixed](/images/images_articles/demo_1/jacques_002.png)


- **5.** Para gerar uma nova versão, insiro a antiga para não ter de voltar a introduzir todos os campos.

:ppw-pdf-link{href="/documents/LDA.pdf"}

- **6.** Submeto também a versão corrigida do meu ficheiro Excel.   

> Finalizo o meu documento. Posso agora enviá-lo a Isabelle.

:ppw-pdf-link{href="/documents/LDA-fixed.pdf"}

### **Isabelle** :

> Recebi uma nova versao de LDA <br>
> Vou gerar um novo ficheiro de garantia de qualidade 

- **1.** Vou à secção _"Craft"_ do **paxpar.tech**.

![rubrique_craft](/images/images_articles/demo_1/isa_2_001.png)

- **2.** Apresento o PDF "DGQ" não conforme.

![depot_ancien_aq](/images/images_articles/demo_1/isa_2_002.png)

- **3.** Apresento o novo LDA.

![nouvelle_lda](/images/images_articles/demo_1/isa_2_003.png)

- **4.1.** Estou a apagar a antiga LDA.

![suppr_lda_1](/images/images_articles/demo_1/isa_2_004.png)

- **4.2.** Estou a apagar a antiga LDA.

![suppr_lda_2](/images/images_articles/demo_1/isa_2_005.png)

- **5.** Verifico. 
- **6.** Está tudo verde!

![check_vert](/images/images_articles/demo_1/isa_2_006.png)

- **7.** Por fim, assino o meu "DGQ"

> Recebo o PDF _aq.pdf_ correto!

:ppw-pdf-link{href="/documents/aq_final.pdf"}

**Posso agora enviar este Dossier de Garantia de Qualidade ao meu gestor com toda a confiança.**
