---
layout: content
lang: nl
showBreadCrumbs: true
title: Privacyverklaring praktijktest CoronaMelder
---

## Over CoronaMelder

CoronaMelder (app) is een technisch hulpmiddel dat helpt bij het beperken van de verspreiding van het COVID-19 virus. Als u CoronaMelder op uw smartphone heeft geïnstalleerd ontvangt u een bericht als u enige tijd in de buurt bent geweest van iemand die positief getest is op COVID-19, en deze persoon CoronaMelder ook geïnstalleerd heeft. Wanneer u mogelijk besmet bent door een andere gebruiker van CoronaMelder geeft de app het advies om u bij klachten te laten testen. Hieronder wordt in het kort uitgelegd hoe Coronamelder werkt.

De app herkent via Bluetooth Low Energy andere smartphones waarop de app is geïnstalleerd. Het herkennen van de andere smartphones gebeurt aan de hand van willekeurige codes (getallenreeksen) die Rolling Proximity Indicators (RPIs) worden genoemd. Deze codes worden iedere 10 tot 20 minuten ververst, en zijn een afgeleide van zogenaamde Temporary Exposure Keys (TEKs). TEKs zijn ook willekeurige codes, maar deze codes worden per dag opnieuw gegenereerd, en 14 dagen op de telefoon van de gebruiker bewaard. 

Als uw smartphone dichtbij een andere smartphone is waarop de app is geïnstalleerd, worden de verschillende RPIs uitgewisseld tussen die smartphones, en daarop lokaal opgeslagen. In het geval een gebruiker van de app positief getest is op COVID-19, kan de gebruiker er vrijwillig voor kiezen daarvan melding te maken in de app. Als daarvoor wordt gekozen stuurt de app de TEKs die de afgelopen 14 dagen zijn aangemaakt, en lokaal bewaard op de smartphone, naar een centrale server. De centrale server accepteert verzonden TEKs alleen als de gebruiker en de GGD de verzending hebben bevestigd met een autorisatiecode. Op de centrale server worden de ontvangen TEKs omgezet in andere codes die Diagnosis Keys (DKs) worden genoemd.

De centrale server stelt de DKs vervolgens beschikbaar, zodat deze automatisch kunnen worden opgehaald door de smartphones waarop de app is geïnstalleerd. Als uw smartphone de DKs heeft opgehaald van de server wordt de verbinding met de server verbroken. Dit geautomatiseerde proces herhaalt zich meerdere keren per dag om eventuele besmettingsrisico’s up-to-date te houden. Vervolgens berekent uw smartphone aan de hand van de opgehaalde DKs of er een match is met de verschillende RPIs van andere smartphones waarbij uw smartphone in de buurt is geweest. Direct daarna worden de DKs van uw smartphone verwijderd. 

Als er een match is, wordt er op basis van een aantal weegfactoren bepaald of sprake is geweest van risicovol contact. Is dat het geval, met andere woorden bent u in de afgelopen tijd dichtbij een persoon geweest die besmet is met COVID-19, dan ontvangt u melding van uw verhoogde kans op besmetting. Ook geeft de app advies om u bij klachten te laten testen op besmetting met het virus.

## De praktijktest

De praktijktest start op 17 augustus en wordt uitgevoerd in samenwerking met de GGD-en van Twente, Drenthe, Gelderland Zuid, Noord-Oost Gelderland en IJsselland. Andere GGD-en werken tijdens de praktijktest nog niet met CoronaMelder. CoronaMelder is wel voor iedereen beschikbaar in de app stores. Je kan CoronaMelder daarom ook downloaden als je niet in het werkveld van en van deze praktijktest regio’s woont. Alleen gebruikers die in het werkveld van de deelnemende regio GGD-regio’s vallen kunnen de TEKs succesvol uploaden naar de centrale server. Hiervoor is namelijk een autorisatiecode nodig van de GGD-en. De overige werking van CoronaMelder blijft gelijk.

### 1. Wie is verantwoordelijk voor de verwerking van de persoonsgegevens?

De Minister van Volksgezondheid, Welzijn en Sport is verwerkingsverantwoordelijk voor zover persoonsgegevens worden verwerkt bij de inrichting en het beheer van de CoronaMelder

Voor zover de Gemeentelijke Gezondheidsdienst (GGD) bij de bron- en contactopsporing gebruik maakt van persoonsgegevens die via de app worden verkregen is de GGD van jouw regio de verwerkingsverantwoordelijke. Op [www.GGD.nl](https://www.ggd.nl) kun je vinden onder welke GGD je valt door de postcode van je woonadres in te voeren.

### 2. Met welk doel worden persoonsgegevens verwerkt?

Deze app is ontwikkeld als aanvulling op de bron- en contactopsporing van de GGD. Het doel ervan is om gebruikers met een verhoogde besmettingskans snel en op eenvoudige wijze te informeren, met een hoge mate van anonimiteit. 

### 3. Grondslag voor het verwerken van persoonsgegevens

In de app kunnen persoonsgegevens worden verwerkt. De grondslag voor het verwerken van persoonsgegevens is de expliciete toestemming die de gebruiker geeft voor de verwerking van zijn persoonsgegevens. De gebruiker moet expliciete toestemming geven voordat de app kan worden gebruikt, en voordat de gebruiker – bij een positieve test - zijn gegevens met de GGD kan delen. Als de toestemming niet wordt gegeven, kan de app niet worden gebruikt. 

### 4. Welke persoonsgegevens worden verwerkt?

In de app worden de volgende gegevens verwerkt:

- Rolling proximity indicators (RPIs)
- Temporary Exposure Keys (TEKs)
- Diagnosis Keys (DKs)
- pseudo MAC-adres
- signaalsterkte en de contactduur
- autorisatiecode
- Exposure Risk Value (high, mid, low)
- IP-adres

Deze gegevens kunnen persoonsgegevens zijn.

Een TEK is een willekeurig cryptografisch gegenereerde getallenreeks die dient als tijdelijke referentie. Op de centrale server worden de TEKs geconverteerd naar DKs. Daarnaast wordt elke 10 tot 20 minuten een RPI gegenereerd, dat wil zeggen een tijdelijke, eveneens cryptografisch gegenereerde getallenreeks. Deze getallenreeks is een afgeleide van een TEK, en wordt uitgewisseld met andere smartphones waarop de app is geïnstalleerd, en die gedurende een vastgestelde tijdspanne in de buurt zijn geweest van de betreffende smartphone. Het ontvangen en uitzenden van de RPIs gebeurt via Bluetooth Low energy. De RPI wordt dan ook gebruikt in combinatie met signaalsterkte zowel uitgezonden als ontvangen (om afstand tussen gebruikers te bepalen), en de duur van het (Bluetooth)contact. De ontvangen RPIs worden na 14 dagen van de smartphones verwijderd. 

Zowel de TEKs, DKs, als de RPIs zijn gepseudonimiseerde identificatiesleutels.

Om het risico op identificatie van gebruikers zoveel mogelijk uit te sluiten wordt bij de uitwisseling van TEKs het MAC-adres (een uniek hardware nummer van de Bluetooth-transmitter) van de smartphone vervangen door een random gegenereerde code, een pseudo MAC-adres, die evenals de TEKs elke 10 tot 20 minuten verandert. 

De autorisatiecode wordt gegenereerd met behulp van een in de app aangeboden functionaliteit en in de app getoond. De autorisatiecode wordt door de GGD gebruikt om de aan de GGD verstuurde TEKs te valideren. De GGD plaatst deze autorisatiecode, met de datum van de eerste ziektedag, in het GGD-portaal. Dit GGD-portaal is alleen toegankelijk voor GGD-medewerkers. De centrale server accepteert alleen TEKs van gebruikers als daarbij een autorisatiecode wordt aangeboden die op deze wijze door de GGD is gevalideerd. Tijdens de validatiefase worden voor beheers- en beveiligingsdoeleinden IP-adressen verwerkt.

Na de validatie wordt voor elke DK de datum van de eerste ziektedag vergeleken met de datum van de nieuw ontvangen TEKs. Op basis daarvan wordt door de centrale server een Exposure Risk Value (high, mid, low) bepaald.

In aanvulling op de DKs, eerste ziektedag, en autorisatiecode wordt ook het IP-adres van de smartphone van de gebruiker meegestuurd naar de centrale server. Dit is inherent aan het gebruik van internet en IP-technologie. Het IP-adres wordt gescheiden opgeslagen van de andere gegevens, zodat er op de centrale server geen IP-adressen worden opgeslagen. Hierdoor kan niet worden herleid wie welke informatie heeft verstuurd.

### 5. Statistische informatie

De met de app verzamelde gegevens worden uitsluitend gebruikt voor de in deze privacyverklaring genoemde doeleinden. Er wordt geen statistische informatie gegenereerd. 

### 6. Aan wie worden persoonsgegevens verstrekt?

HeHet uitzenden en ontvangen van de RPIs gebeurt lokaal op de smartphones. Als een besmetting is vastgesteld kan de gebruiker ervoor kiezen zijn of haar TEKs, tezamen met een unieke autorisatiecode, naar de centrale server te sturen. De centrale server wordt beheerd door het CIBG met KPN als onderaannemer (verwerker).

De GGD verwerkt de authenticatiecode, met de datum van de eerste ziektedag, in het GGD-portaal van de app, welk portaal alleen toegankelijk is voor geautoriseerde GGD-medewerkers.

De smartphones van andere gebruikers halen periodiek, enkele keren per dag, de gegevens op die op deze centrale server staan

### 7. Bewaren van persoonsgegevens

De gegevens die lokaal zijn opgeslagen op jouw smartphone worden 14 dagen bewaard. Na deze 14 dagen worden deze gegevens automatisch en permanent verwijderd. Je kunt ook zelf, op elk gewenst moment, de opgeslagen gegevens verwijderen. 

Voor zover jouw gegevens op de centrale server zijn opgeslagen, worden de gegevens vanaf het moment van uploaden 14 dagen bewaard. Na deze 14 dagen worden de gegevens permanent verwijderd. 

IP-adressen die voor beheers- en beveiligingsdoeleinden worden verwerkt, zullen na maximaal 7 dagen worden verwijderd.

### 8. Uw rechten ten aanzien van uw persoonsgegevens

U heeft een aantal rechten om controle te houden over uw persoonsgegevens. Deze kunt u [hier](https://autoriteitpersoonsgegevens.nl/nl/onderwerpen/algemene-informatie-avg/rechten-van-betrokkenen) vinden op de site van de Autoriteit Persoonsgegevens.

Van belang daarbij is dat zo lang je als gebruiker niet in contact bent gekomen met een besmet persoon of er niet mee hebt ingestemd om gegevens te verstrekken aan de backend server, VWS en de GGD-en geen (persoons)gegevens van jou als gebruiker verwerken. De gegevens worden dan namelijk enkel op de telefoon van de gebruikers opgeslagen. In dat stadium kunnen de bovengenoemde rechten dus nog niet worden uitgeoefend bij VWS en de GGD-en. 

Door het privacy by design karakter van de app is het na het uploaden van de TEKs (later DKs) niet mogelijk om te achterhalen welke codes op de besmette gebruiker betrekking hebben. Het is voor VWS en de GGD-en technisch niet mogelijk om de codes die (tijdelijk) op de centrale server zijn opgeslagen, te koppelen aan de gebruiker die zijn TEKs heeft geupload.
Ook voor de gebruiker zelf is dat technisch onmogelijk, aangezien geen inzicht wordt verkregen in aan de notificatie ten grondslag liggende gegevens en berekeningen. Daarbij komt dat de TEKs van de gebruiker geautomatiseerd en periodiek (na 14 dagen) worden verwijderd. Vanwege de onmogelijkheid om de gebruiker te identificeren aan de hand van de codes is er, na het uploaden van de TEKs naar de centrale server, op grond van artikel 11 lid 2 AVG, geen aanleiding om uitvoering te geven aan de rechten van betrokkene als bedoeld in artikel 15 t/m 20 AVG. 

De mogelijkheid om een verzoek waarin u een beroep doet op een uw privacy rechten blijft echter bestaan. U kunt uw verzoek sturen naar de GGD die verantwoordelijk is in uw woonplaats. Op [www.GGD.nl](https://www.ggd.nl) kunt u de postcode van uw woonadres invullen om te zien welke GGD verantwoordelijk is in uw woonplaats.

U hebt altijd het recht een klacht over de verwerking van uw persoonsgegevens in te dienen bij de Autoriteit Persoonsgegevens of bij de rechter. Meer informatie daarover vindt u [hier](https://autoriteitpersoonsgegevens.nl/nl/zelf-doen/gebruik-uw-privacyrechten/klacht-melden-bij-de-ap).

### 9. Beveiliging van uw persoonsgegevens

De Minister van Volksgezondheid, Welzijn en Sport en de GGD nemen de bescherming van uw gegevens serieus en nemen passende maatregelen om misbruik, verlies, onbevoegde toegang, ongewenste openbaarmaking en ongeoorloofde wijziging tegen te gaan.

### 10. Wijziging privacyverklaring

Deze privacyverklaring kan worden gewijzigd. In dat geval zullen wij de gewijzigde privacyverklaring op onze website publiceren, waarna deze privacyverklaring direct van kracht is. Als de wijzigingen voor u van belang zijn, zullen wij u via de berichtgeving in de app daarop attenderen. 
Laatste update: 12 augustus 2020
