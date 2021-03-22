---
layout: in-app-content
lang: fr
title: Déclaration de protection de la vie privée concernant l’application CoronaMelder
---
## À propos de l’application CoronaMelder

L'application CoronaMelder est un outil qui contribue à limiter la propagation du virus COVID-19. Si vous avez installé CoronaMelder sur votre smartphone, vous recevrez un message si vous avez été pendant un moment à proximité d'une personne qui a été testée positive à la COVID-19, si cette personne a également installé CoronaMelder. Vous trouverez ci-après une courte explication du fonctionnement de l’application CoronaMelder.

L'application reconnaît les autres smartphones sur lesquels elle est installée via Bluetooth. Les autres smartphones sont identifiés au moyen de codes aléatoires (séries de chiffres) appelés « Rolling Proximity Indicators » (RPI). Ces codes sont actualisés toutes les 10 à 20 minutes et sont dérivés des clés dites Temporary Exposure Keys (TEK). Les TEK sont également des codes aléatoires, mais ces codes sont régénérés quotidiennement et stockés sur le téléphone de l'utilisateur pendant 14 jours. 

Si votre smartphone est proche d'un autre smartphone sur lequel l'application est installée, les différents RPI sont échangés entre ces smartphones, et stockés localement sur ceux-ci. Si un utilisateur de l'application a été testé positif à la COVID-19, il peut volontairement choisir de le signaler dans l'application. Si cette option est retenue, l'application envoie les TEK créées au cours des 14 derniers jours, et stockées localement sur le smartphone, à un serveur dorsal. Le serveur dorsal n'accepte les TEK envoyées que si l'utilisateur et le GGD (service municipal de santé) ont confirmé la transmission avec un code de validation. Sur le serveur dorsal, les TEK reçues sont converties en d'autres codes appelés Diagnosis Keys (DK). 

Le serveur dorsal met ensuite les DK à disposition pour qu'elles soient automatiquement récupérées par les smartphones sur lesquels l'application est installée. Si votre smartphone a récupéré les DK sur le serveur, la connexion au serveur est coupée. Ce processus automatisé se répète plusieurs fois par jour afin de tenir à jour les éventuels risques de contamination. Votre smartphone utilise ensuite les DK collectées pour calculer s'il y a une correspondance avec les différents RPI des autres smartphones dont votre smartphone s'est rapproché. Les DK sont ensuite directement supprimées de votre smartphone. 

En cas de concordance, un certain nombre de facteurs de pondération sont utilisés pour déterminer s'il y a eu un contact à risque. Si tel est le cas, en d'autres termes, si vous avez récemment été proche d'une personne atteinte de COVID-19, vous recevrez un rapport sur votre risque accru de contamination. L'application vous conseille également sur la démarche à suivre si vous avez reçu un signalement.

L'application CoronaMelder fonctionne à partir du 30 novembre 2020 avec les applications de notification d’autres pays européens. Autrement dit, si vous utilisez l’application CoronaMelder et si vous rencontrez un ressortissant d’un autre pays de l’Union Européenne qui utilise l’application Covid-19 de ce pays, les deux dispositifs vont échanger des RPI. Ceci se fait de la même manière qu’entre deux utilisateurs de l’application CoronaMelder. Si l’un d’entre vous deux est ensuite testé positif et le signale via l’application, l’autre recevra un signalement.

La Commission européenne a mis en place une infrastructure numérique pour la collaboration entre les applications Covid-19 de différents pays, le Service de Passerelle Fédérale Européenne (« *European Federation Gateway Service* » (EFGS)). Celle-ci se compose d’un serveur communautaire qui permet d’échanger des données entre les différentes applications Covid-19.

 
### 1. Qui est responsable du traitement des données à caractère personnel ? 

Le ministère de la Santé, du Bien-être et des Sports est responsable du traitement dans la mesure où des données à caractère personnel sont traitées dans le cadre de la création, de la collaboration européenne avec d’autres applications de notification et de la gestion de l’application CoronaMelder. Le ministère de la Santé, du Bien-être et des Sports est responsable du traitement, conjointement avec les autorités désignées d’autres pays participants, pour l’EFGS. Vous trouverez un aperçu à jour des pays participants dans la partie « L’application CoronaMelder et l'étranger» dans les questions fréquemment posées sur CoronaMelder.nl.

Dans la mesure où le service municipal de santé (GGD) utilise les données à caractère personnel obtenues via l'application pour la recherche des sources et des contacts, le GGD de votre région est le responsable du traitement. Sur le site [www.GGD.nl](https://www.GGD.nl), découvrez de quel GGD vous relevez en saisissant le code postal de votre domicile. Si vous n’avez pas d’adresse aux Pays-Bas, vous pouvez saisir le code postal de votre lieu de résidence.

### 2. À quelle fin les données à caractère personnel sont-elles traitées ? 

Cette application a été développée pour compléter la recherche des sources et des contacts du GGD. Son objectif est d'informer rapidement et facilement les utilisateurs présentant un risque accru de contamination, en protégeant strictement votre vie privée. 

### 3. Fondement du traitement des données à caractère personnel 

Des données à caractère personnel peuvent être traitées dans l'application. Le traitement des données à caractère personnel repose sur l'accomplissement, en bref, d'une mission publique. Pour le ministère de la Santé, du Bien-être et des Sports, il s'agit de la mission publique de mener la lutte contre la COVID-19 et d'assurer le maintien et l'amélioration de la structure nationale de soutien. 

Pour les GGD, il s’agit de retrouver la source et le contact en cas de signalement d'une contamination par la COVID-19.  

L'introduction de l'application CoronaMelder comme outil de soutien à la localisation des sources et des contacts permet donc de mener à bien les missions publiques susmentionnées du ministère de la Santé, du Bien-être et du Sport et des GGD. Le déploiement de l'application CoronaMelder dans le cadre de cette mission publique est décrit à l'article 6d de la Loi sur la santé publique (Wet publieke gezondheid).

L’application CoronaMelder se télécharge et s’utilise toujours sur une base volontaire. Personne ne peut donc vous contraindre à utiliser cette application. 

### 4. Quelles sont les données à caractère personnel traitées ? 

Les données suivantes sont traitées dans le cadre de l’application :

- Rolling proximity indicators (RPI)
- Temporary Exposure Keys (TEK)
- Diagnosis Keys (DK)
- Pseudo adresse MAC
- Puissance du signal et durée du contact
- Premier jour de maladie
- Code de validation
- Exposure Risk Value (high, mid, low)
- Adresse IP

Ces données peuvent être des données à caractère personnel. 

Une TEK est une séquence de chiffres aléatoire générée par cryptographie qui sert de référence temporaire. Un RPI est généré toutes les 10 à 20 minutes sur la base des TEK, c'est-à-dire une séquence de chiffres temporaire, également générée par cryptographie. Ce RPI est échangé avec d'autres smartphones sur lesquels l'application est installée, et qui se trouvent à proximité du smartphone en question pendant une période déterminée. La réception et la transmission des RPI se font via Bluetooth Low energy. Le RPI est donc utilisé en combinaison avec la puissance du signal émis et reçu (pour déterminer la distance entre les utilisateurs), et la durée du contact (Bluetooth). Les RPI reçus sont retirés des smartphones après 14 jours. 

Les TEK, DK et RPI sont des clés d'identification pseudonymisées.

Pour minimiser le risque d'identification des utilisateurs, lors de l'échange de RPI, l'adresse MAC (un numéro de matériel unique de l'émetteur Bluetooth) du smartphone est remplacée par un code généré aléatoirement, une pseudo adresse MAC, qui, comme les RPI, change toutes les 10 à 20 minutes. 

Le code de validation est généré à l'aide d'une fonctionnalité offerte dans l'application et affichée dans l'application. Le code de validation est utilisé par le GGD pour valider les TEK envoyées au GGD. Le GGD place ce code de validation, avec la date du premier jour de maladie, dans le portail GGD. Ce portail GGD est uniquement accessible aux collaborateurs du GGD. Le serveur dorsal n'acceptera les TEK des utilisateurs que si un code de validation est proposé et validé de cette manière par le GGD. Sur le serveur dorsal, les TEK sont converties en DK.

En plus des DK, du premier jour de maladie et du code de validation, l'adresse IP est également envoyée au serveur dorsal. Ceci est inhérent à l'utilisation de l'Internet et de la technologie IP. L’adresse IP est uniquement traitée à des fins de gestion et de sécurisation. L'adresse IP est stockée séparément des autres données, de sorte qu'aucune adresse IP n'est stockée sur le serveur dorsal. Il est donc impossible de savoir qui a envoyé quelle information.

### 5. Informations statistiques 

Les données collectées avec l'application ne seront utilisées qu'aux fins mentionnées dans la présente déclaration de protection de la vie privée. 

### 6. À qui sont fournies les données à caractère personnel ?

L'émission et la réception des RPI se font localement sur les smartphones. En cas de détection d'une contamination, l'utilisateur peut choisir d'envoyer ses TEK, accompagnées d'un code de validation unique, au serveur dorsal. Le serveur dorsal est géré par le CIBG (service du Ministère de la Santé, du Bien-être et des Sports) avec KPN comme sous-traitant.

Le GGD traite le code de validation, avec la date du premier jour de maladie, dans le portail GGD de l'application, qui n'est accessible qu'au personnel autorisé du GGD.

Les DK sont échangés via le Service de Passerelle Fédérale Européenne (« *European Federation Gateway Service* » (EFGS)) avec d’autres pays européens qui disposent d’une application avec un niveau de sécurisation comparable et ont adhéré à l’EFGS. La connexion à l'EFGS se fait étape par étape. Vous trouverez un aperçu à jour des pays participants dans la section « CoronaMelder en het buitenland » (L’application CoronaMelder et l'étranger) dans les questions fréquemment posées sur CoronaMelder.nl. L'EGFS est géré par la Commission européenne (sous-traitant). Les conditions techniques et organisationnelles pour adhérer à l'EFGS sont définies dans la Décision d’exécution européenne en ce qui concerne l'échange transfrontière. De plus amples informations sur l'interopérabilité avec d'autres pays sont disponibles sur le site https://ec.europa.eu/health/ehealth/covid-19.

Les smartphones des autres utilisateurs récupèrent périodiquement, plusieurs fois par jour, les DK stockées sur ce serveur dorsal. 

### 7. Conservation des données à caractère personnel

Les données stockées localement sur votre smartphone sont conservées pendant 14 jours. Après ces 14 jours, ces données sont automatiquement et définitivement supprimées. Vous pouvez également supprimer vous-même à tout moment les données stockées. 

Dans la mesure où vos données sont stockées sur le serveur dorsal/EFGS, elles seront conservées pendant 14 jours à partir du moment où elles sont téléchargées. Après ces 14 jours, ces données sont supprimées. 

Les adresses IP traitées à des fins de gestion et de sécurité sont supprimées après 7 jours au maximum.

### 8. Vos droits en ce qui concerne vos données à caractère personnel 

Vous disposez d'un certain nombre de droits pour contrôler vos données à caractère personnel. Vous les trouverez [ici](https://autoriteitpersoonsgegevens.nl/nl/onderwerpen/algemene-informatie-avg/rechten-van-betrokkenen), sur le site du Conseil néerlandais pour la protection des données à caractère personnel (Autoriteit Persoonsgegevens).

Comme l'application CoronaMelder a été conçue selon les principes de minimisation des données et de respect de la vie privée dès la conception (« privacy by design »), vous ne pourrez compter sur vos droits en vertu du RGPD que dans une mesure limitée. Après tout, les données ne sont traitées que de manière limitée. Les données sont également pratiquement introuvables et ne sont stockées que pendant une courte période. Il résulte de l'article 11 du RGPD que les droits énoncés aux articles 15 à 20 inclus du RGPD ne s'appliquent pas si le responsable du traitement ne peut pas (ou plus) identifier la personne concernée. 

Dans la première phase - avant que les utilisateurs ne téléchargent les TEK sur le serveur dorsal - seules des données sont traitées sur les smartphones des utilisateurs de CoronaMelder. Le ministère de la Santé, du Bien-être et du Sport et les GGD n'y ont pas accès. À ce stade, il n'est donc pas possible, par exemple, de donner suite à une demande de modification ou de suppression de données, bien que ces données soient bien entendu automatiquement supprimées du smartphone après un délai maximum de quatorze jours.

En raison de la nature « privacy by design » de l'application, il n'est pas possible non plus, après avoir téléchargé les TEK (puis les DK), de savoir quels codes concernent l'utilisateur contaminé. Il est techniquement impossible pour le ministère du Bien-être, de la Santé et des Sports et les GGD de relier les codes (temporairement) stockés sur le serveur dorsal à l'utilisateur qui a téléchargé ses TEK.

Comme il est impossible d'identifier l'utilisateur au moyen des codes, les droits en vertu des articles 15 à 20 inclus du RGPD ne sont donc pas applicables.

Les droits en vertu du RGPD n’auront donc en règle générale qu’à être appliqués de manière limitée, tout simplement parce que les données ne peuvent pas ou ne peuvent permettre de remonter à des personnes que de manière très limitée, ou parce que ces données n’existent plus dans la mesure où elles ne sont conservées que pour des courtes périodes. Ceci permet de respecter l’article 11 du RGPD, en vertu duquel les droits figurant aux articles 15 à 20 inclus de ce règlement ne sont plus applicables lorsque les personnes concernées ne peuvent plus être identifiées.

Il est toutefois toujours possible de présenter un recours en invoquant votre droit à la protection de la vie privée. Vous pouvez adresser votre demande au GGD compétent de votre lieu de résidence. Vous pouvez compléter le code postal de votre domicile sur [www.GGD.nl](https://www.GGD.nl) pour identifier le GGD compétent pour votre lieu de résidence. Si vous n’avez pas d’adresse de résidence aux Pays-Bas, vous pouvez saisir le code postal de votre lieu de résidence.

Vous êtes toujours en droit de déposer une réclamation à propos du traitement de vos données à caractère personnel auprès du Conseil néerlandais pour la protection des données à caractère personnel (Autoriteit Persoonsgegevens) ou auprès des tribunaux. Vous trouverez plus d’informations [ici](https://autoriteitpersoonsgegevens.nl/nl/zelf-doen/gebruik-uw-privacyrechten/klacht-melden-bij-de-ap). 

Vous trouverez les coordonnées du Responsable de protection des données du GGD pour votre lieu de résidence sur le site Web du GGD compétent.

Vous trouverez les coordonnées du Responsable de protection des données du ministère de la Santé, du Bien-être et des Sports sur le site Web de ce ministère.

## 9. Sécurisation de vos données à caractère personnel

Le ministère de la Santé, du Bien-être et des Sports et les GGD prennent la protection de vos données au sérieux et adoptent des mesures appropriées pour prévenir les abus, les pertes, les accès non autorisés, les divulgations non souhaitées et les modifications non autorisées.

### 10. Modification de la déclaration de protection de la vie privée

La présente Déclaration de protection de la vie privée peut être modifiée. Dans ce cas, nous publierons la déclaration de protection de la vie privée modifiée sur notre site web, après quoi, cette déclaration de confidentialité sera immédiatement applicable. 

Dernière mise à jour : 15 mars 2021.
