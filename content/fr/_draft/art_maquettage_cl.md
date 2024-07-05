# Maquetter une checklist :
Faire un scénario conforme (OK)

    - Miguel, Filipe, Gorges et Paul sont dans un local en sous_sol pour une réunion sportive
    - une alerte est annoncée pour un risque d'innondation importante
    - il n'ont que le temps de remonter pour se mettre à l'abri
    - ils ont du laisser toutes leurs affaires
    - suite à ce sinistre, ils font chacun une déclaration de sinistre à l'assurance de l'association 
    - l'assurance fait une consolidation avec les 4 déclarations qui contient des photos, des RIB...
    - la checklist conforme met des vérifications sur les points critiques qui peuvent être falsifiés, usurpés...et elle statut que tout est conforme 
 
Lister tous les points importants qui seront renseignés dans la maquette (noms, prénoms, dates, signatures, IBAN, coordonnées GPS des photos, etc...)

## Checklist conforme :

Voici en image la vue de la checklist conforme

![](/images/images_maq_cl/sini_cl_ok.png)

Voici la façon de procéder pour obtenir ce résultat:

Ouvrir un fichier .yaml

Comme cela implique plusieurs sinistrés, le premier paragraphe est la liste des sinistrés avec le premier nom : Miguel

![](/images/images_maq_cl/sini_liste.png)

Pour cela un children a été créé afin que Miguel ne soit pas au même niveau que Liste des sinistrés

On doit effectuer plusieurs vérifications qui seront toutes au même niveau
    - Conformité IBAN
    - Conformité date sinistre
    - Conformité données GPS
    - Conformité n° du contrat d'assurance
    - Signature de Miguel

Pour cela on recré un children à Miguel : Conformité IBAN

![](/images/images_maq_cl/sini_conf_iban.png)

Puis on descend de plus en plus dans la conformité IBAN en créant des petits enfants et ainsi de suite

![](/images/images_maq_cl/sini_iban_bic.png)

Pour la Conformité Date sinistre, on le met au même niveau que Conformité IBAN (pas besoin de mettre un children)

![](/images/images_maq_cl/sini_date.png)

Pour la Conformité données GPS, on le met au même niveau que Conformité IBAN (pas besoin non plus de mettre un children)

On compare les données GPS du lieu du sinistre avec les photos qui ont été prise par les sinistrés

![](/images/images_maq_cl/sini_donnees_gps.png)

On fait de même pour le n° de contrat d'assurance

La signature électronique de Miguel doit être sur le document, pour cela il y a une recherche de la clé publique

![](/images/images_maq_cl/sini_cle_pub_mig.png)

On note que la clé publique de Miguel a été trouvée

Ensuite on fait pareil pour les autres sinistrés

    - Filipe
    - Gorges
    - Paul

## Checlist non conforme

Faire un scénario non-conforme (KO) : usurpation d'identité

    - Miguel, Filipe, Gorges et Paul sont dans un local en sous_sol pour une réunion sportive
    - une alerte est annoncée pour un risque d'innondation importante
    - il n'ont que le temps de remonter pour se mettre à l'abri
    - ils ont du laisser toutes leurs affaires
    - suite à ce sinistre, ils font chacun une déclaration de sinistre à l'assurance de l'association 
    - l'assurance fait une consolidation avec les 4 déclarations qui contient des photos, des RIB...
    - la checklist non conforme met des vérifications sur les points critiques qui peuvent être falsifiés, usurpés...et elle statut qu'une personne mal intentionnée a usurpé l'identité de Gorges.
    Et que Filipe n'a pas signé sa déclaration de sinistre.

Voici en image la vue de la checklist non conforme

![](/images/images_maq_cl/sini_cl_ko.png)

Copier la checklist OK et la coller dans un autre fichier .yaml

2 paragraphes sont à revoir, celui de Gorges et de Filipe

Pour Gorges, indiquer un KO dans le parent

![](/images/images_maq_cl/sini_gorges_ko.png)

Puis pour Conformité IBAN, indiquer l'IBAN de Gorges(celui qui est enregistré chez l'assureur et celui dans le document)

![](/images/images_maq_cl/sini_iban_gorges_ko.png)

Conformité Date, indiquer que la date du sinistre est antérieur à la date de ou des photos

Conformité GPS, indiquer les coordonnées GPS du sinistre et celles enregistrées sur les photos

![](/images/images_maq_cl/sini_date_gps_ko.png)

Et enfin pour la Signature de Gorges, indiquer que la clé publique de Gorges n'a pas été trouvée

![](/images/images_maq_cl/sini_sign_gorges_ko.png)

Pour Filipe

Pour Filipe, indiquer un KO dans le parent

Puis pour la Signature, indiquer que la clé publique n'a pas été trouvée

![](/images/images_maq_cl/sini_sign_filipe_ko.png)

## A quoi sert la maquette checklist ?

Maquetter une checklist sert à déterminer les points de vérifications que l'on veut appliquer lors d'une analyse de document.

Chaque corps de métier est différent et les vérifications ne sont pas les mêmes, en faisant des maquettes OK et KO suivant des scénarios établis pour son secteur d'activité, cela permet aux développeurs de pouvoir faire des modules de checklist et les rendre dynamiques.   

