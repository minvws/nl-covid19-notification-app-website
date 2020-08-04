---
layout: content
lang: nl
showHomeBtn: true
title: Privacyverklaring
permalink: /privacy
---

# Privacyverklaring

## Over CoronaMelder

CoronaMelder (app) is een technisch hulpmiddel dat helpt bij beperken van de verspreiding van het COVID-19 virus. Als u CoronaMelder op uw smartphone heeft geïnstalleerd ontvangt u een bericht als u enige tijd in de buurt bent geweest van iemand die positief getest is op COVID-19, en deze persoon CoronaMelder ook geïnstalleerd heeft. Wanneer u mogelijk besmet bent door een andere gebruiker van CoronaMelder geeft de app het advies om u bij klachten te laten testen. Hieronder wordt in het kort uitgelegd hoe Coronamelder werkt.

De app herkent via Bluetooth Low Energy andere smartphones waarop de app is geïnstalleerd. Het herkennen van de andere smartphones gebeurt aan de hand van willekeurige codes (getallenreeksen) die Rolling Proximity Indicators (RPIs) worden genoemd. Deze codes worden iedere 10 tot 20 minuten ververst, en zijn een afgeleide van zogenaamde Temporary Exposure Keys (TEKs). TEKs zijn ook willekeurige codes, maar deze codes worden per dag opnieuw gegenereerd, en 14 dagen op de telefoon van de gebruiker bewaard. 

Als uw smartphone langere tijd dichtbij een andere smartphone is waarop de app is geïnstalleerd, worden de verschillende RPIs uitgewisseld tussen die smartphones, en lokaal daarin opgeslagen. In het geval een gebruiker van de app positief getest is op COVID-19, kan de gebruiker er vrijwillig voor kiezen daarvan melding te maken in de app. Als daarvoor wordt gekozen stuurt de app de TEKs die de afgelopen 14 zijn aangemaakt, en lokaal bewaard op de smartphone, naar een centrale server. De centrale server accepteert verzonden TEKs alleen als de gebruiker en de GGD de verzending hebben bevestigd met een autorisatiecode. Op de centrale server worden de ontvangen TEKs omgezet in andere codes die Diagnosis Keys (DKs) worden genoemd. 

De centrale server stelt de DKs vervolgens beschikbaar, zodat deze automatisch kunnen worden opgehaald door de smartphones waarop de app is geïnstalleerd. Als uw smartphone de DKs heeft opgehaald van de server wordt de verbinding met de server verbroken. Dit geautomatiseerde proces herhaalt zich meerdere keren per dag. Vervolgens berekent uw smartphone aan de hand van de opgehaalde DKs of er een match is met de verschillende RPIs van andere smartphones waarbij uw smartphone in de buurt is geweest. Direct daarna worden de DKs van uw smartphone verwijderd. 

Als er een match is wordt er op basis van een aantal weegfactoren door de app bepaald of sprake is geweest van risicovol contact. Is dat het geval, met andere woorden bent u in de afgelopen tijd dichtbij een persoon geweest die besmet is met COVID-19, dan ontvangt u melding van uw verhoogde kans op besmetting. Ook geeft de app advies om u bij klachten te laten testen op besmetting met het virus.

Zie ook de [video 'Hoe werkt CoronaMelder?'](https://www.youtube.com/watch?v=mk7ZNygVW1E&feature=youtu.be) op YouTube.

### 1. Wie is verantwoordelijk voor de verwerking van de persoonsgegevens? 

De Minister van Volksgezondheid, Welzijn en Sport is verwerkingsverantwoordelijk voor zover persoonsgegevens worden verwerkt bij de inrichting en het beheer van de CoronaMelder

Voor zover de Gemeentelijke Gezondheidsdienst (GGD) bij de bron- en contactopsporing gebruik maakt van persoonsgegevens die via de app worden verkregen is de GGD verwerkingsverantwoordelijke.

### 2. Met welk doel worden persoonsgegevens verwerkt? 

Deze app is ontwikkeld als aanvulling op de bron- en contactopsporing van de GGD. Het doel ervan is om gebruikers met een verhoogde besmettingskans snel en op eenvoudige wijze te informeren, met een hoge mate van anonimiteit.

### 3. Grondslag voor het verwerken van persoonsgegevens 

In de app kunnen persoonsgegevens worden verwerkt. De grondslag voor het verwerken van persoonsgegevens is de toestemming die de gebruiker geeft voor de verwerking van zijn persoonsgegevens. De gebruiker moet toestemming geven voor het verwerken van zijn persoonsgegevens om de werking van de app te activeren. Als de toestemming niet gegeven wordt, kan de gebruiker de app niet gebruiken.

### 4. Welke persoonsgegevens worden verwerkt? 

In de app worden de volgende gegevens verwerkt:

- Rolling proximity indicators (RPIs)
- Temporary Exposure Keys (TEKs)
- Diagnosis Keys (DKs)
- pseudo MAC-adres
- signaalsterkte en de contactduur
- autorisatiecode
- TransmissionRiskValue (high, mid, low)
- IP-adres

Deze gegevens kunnen persoonsgegevens zijn. 

Een TEK is een willekeurig cryptografisch gegenereerde getallenreeks die dient als tijdelijke referentie. Op de centrale server worden de TEKs geconverteerd naar DKs. Daarnaast wordt elke 10 tot 20 minuten een RPI gegenereerd, dat wil zeggen een tijdelijke, eveneens cryptografisch gegenereerde getallenreeks. Deze getallenreeks is een afgeleide van een TEK, en wordt uitgewisseld met smartphones. 

Zowel de TEKs, DKs, als de RPIs zijn gepseudonimiseerde identificatiesleutels.

Om het risico op identificatie van gebruikers zoveel mogelijk uit te sluiten wordt bij de uitwisseling van TEKs het MAC-adres van de smartphone vervangen door een random gegenereerde code, een pseudo MAC-adres, die evenals de TEKs elke 10 tot 20 minuten verandert.

De RPI kan worden vastgelegd in andere smartphones waarop de app is geïnstalleerd, en die zich gedurende een vastgestelde tijdsduur binnen anderhalve meter van de betreffende smartphone bevinden. Het ontvangen en uitzenden van de RPIs gebeurt via bluetooth low energy. De RPI wordt dan ook gebruikt in combinatie met signaalsterkte zowel uitgezonden als ontvangen, en de duur van het bluetoothcontact. De ontvangen RPIs worden na 14 dagen van de smartphone verwijderd. 

De autorisatiecode wordt door de gebruiker zelf gegenereerd met behulp van een in de app aangeboden functionaliteit. De autorisatiecode wordt door de GGD gebruikt om de aan de GGD verstuurde TEKs te valideren. De GGD plaatst deze autorisatiecode, met de datum van de eerste ziektedag, in het GGD-portaal. Dit GGD-portaal is alleen toegankelijk voor GGD-medewerkers. De centrale server accepteert alleen TEKs van gebruikers als daarbij een autorisatiecode wordt aangeboden die op deze wijze door de GGD is gevalideerd. Tijdens de validatiefase worden voor beheers- en beveiligingsdoeleinden IP-adressen verwerkt.

Na de validatie wordt voor elke DK de datum van de eerste ziektedag vergeleken met de datum van de  nieuw ontvangen TEKs. Op basis daarvan wordt door de centrale server een TransmissionRiskValue (high, mid, low) bepaald.

In aanvulling op de DKs, eerste ziektedag en autorisatiecode wordt er ook het IP-adres van de smartphone van de gebruiker meegestuurd naar de centrale server -- dit is inherent aan het gebruik van internet en IP-technologie. Op de server wordt dit IP-adres evenwel verwijderd, zodat er op de centrale server geen IP-adressen van gebruikers worden vastgelegd en niet kan worden herleid wie welke informatie heeft verstuurd

### 5. Statistische informatie 

De met de app verzamelde gegevens worden uitsluitend gebruikt voor de in deze privacyverklaring genoemde doeleinden. Er wordt geen statische informatie gegenereerd.

### 6. Aan wie worden persoonsgegevens verstrekt?

Het verzamelen van de RPIs gebeurt lokaal op de smartphone. Als een besmetting is vastgesteld kan de gebruiker ervoor kiezen zijn of haar TEKs, tezamen met een unieke autorisatiecode, naar de centrale server te sturen. De centrale server wordt beheert door het CIBG met KPN als onderaannemer (verwerker).

De GGD verwerkt de authenticatiecode, met de datum van de eerste ziektedag, in het GGD-portaal van de app, welk portaal alleen toegankelijk is voor geautoriseerde GGD-medewerkers.

De smartphones van andere gebruikers halen periodiek, enkele keren per dag, de gegevens op die op deze centrale server staan. De app controleert of er een match is tussen de op de betreffende smartphone opgeslagen RPIs. Dit gebeurt lokaal op de smartphone. 

### 7. Bewaren van persoonsgegevens

De gegevens die lokaal zijn opgeslagen op uw smartphone worden 14 dagen bewaard. Na deze 14 dagen worden deze gegevens automatisch en permanent verwijderd. U kunt ook zelf, op elk gewenst moment, de opgeslagen gegevens verwijderen. De opgeslagen gegevens worden ook verwijderd als u overgaat tot het de-installeren van de app. 

Voor zover uw gegevens op de centrale server zijn opgeslagen, geldt daarvoor een bewaartermijn van 14 dagen. Na deze 14 dagen worden de gegevens permanent verwijderd. 

### 8. Uw rechten ten aanzien van uw persoonsgegevens 

U heeft een aantal rechten om controle te houden over uw persoonsgegevens. Deze kunt u [hier](https://autoriteitpersoonsgegevens.nl/nl/onderwerpen/algemene-informatie-avg/rechten-van-betrokkenen) vinden op de site van de Autoriteit Persoonsgegevens.

Uw verzoek waarin u een beroep doet op een uw privacy rechten kunt u sturen naar [dienstpostbusavg@minvws.nl](mailto:dienstpostbusavg@minvws.nl).

U hebt altijd het recht een klacht over de verwerking van uw persoonsgegevens in te dienen bij de Autoriteit Persoonsgegevens of bij de rechter. Meer informatie daarover vindt u [hier](https://autoriteitpersoonsgegevens.nl/nl/zelf-doen/gebruik-uw-privacyrechten/klacht-melden-bij-de-ap). 

### 9. Beveiliging van uw persoonsgegevens

De Minister van Volksgezondheid, Welzijn en Sport en de GGD nemen de bescherming van uw gegevens serieus en nemen passende maatregelen om misbruik, verlies, onbevoegde toegang, ongewenste openbaarmaking en ongeoorloofde wijziging tegen te gaan.

### 10. Wijziging privacyverklaring

Deze privacyverklaring kan worden gewijzigd. In dat geval zullen wij de gewijzigde privacyverklaring op onze website publiceren, waarna deze privacyverklaring direct van kracht is. Als de wijzigingen voor u van belang zijn, zullen wij u via de berichtgeving in de app daarop attenderen. U kunt dan ook de eerdere versies van deze privacyverklaring raadplegen via [archief-functie]
