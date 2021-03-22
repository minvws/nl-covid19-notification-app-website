---
layout: content
lang: ro
showBreadCrumbs: true
title: Declarație privind confidențialitatea în cadrul testării aplicației CoronaMelder
---
## Despre CoronaMelder

CoronaMelder (aplicație) este un instrument tehnic care contribuie la limitarea răspândirii virusului ce provoacă boala COVID-19. După ce instalați CoronaMelder pe telefon, veți primi un mesaj în cazul în care ați fost o vreme în preajma unei persoane care a fost testată pozitiv pentru COVID-19 și care are și ea instalată aplicația CoronaMelder. Mai jos aveți o descriere succintă a modului în care funcționează CoronaMelder.

Aplicația recunoaște, prin Bluetooth, alte smartphone-uri pe care este instalată. Recunoașterea altor smartphone-uri are loc pe baza unor coduri aleatorii (serii de cifre) numite Rolling Proximity Indicators (RPI). Aceste coduri se reîmprospătează o dată la 10-20 de minute și sunt derivate din așa-numitele Temporary Exposure Keys (TEK). TEK sunt și ele coduri aleatorii, dar acestea se generează pentru câte o zi și se păstrează timp de 14 zile pe telefonul utilizatorului. 

Dacă smartphone-ul dvs. se află în apropierea altui smartphone pe care este instalată aplicația, cele două smartphone-uri fac schimb de RPI-uri și le salvează local. În cazul în care un utilizator al aplicației a fost testat pozitiv pentru COVID-19, utilizatorul poate alege în mod voluntar să anunțe acest lucru în cadrul aplicației. Dacă s-a optat pentru acest lucru, aplicația transmite către un server de back-end TEK-urile care au fost create în ultimele 14 zile și au fost salvate local. Serverul de back-end acceptă TEK-urile transmise numai dacă utilizatorul și Serviciul Municipal de Sănătate (GGD) au confirmat transmiterea cu ajutorul unui cod de validare. Pe serverul de back-end, TEK-urile recepționate sunt convertite în alte coduri, numite Diagnosis Keys (DK). 

Serverul de back-end face apoi disponibile DK-urile, astfel încât acestea să poată fi preluate automat de către smartphone-urile pe care este instalată aplicația. După ce smartphone-ul dvs. preia DK-urile de pe server, conexiunea la server se întrerupe. Acest proces automatizat se repetă de mai multe ori pe zi, pentru a avea o imagine actualizată a eventualelor riscuri de infectare. În continuare, pe baza DK-urilor preluate, smartphone-ul dvs. calculează dacă există o corelare cu diferitele RPI-uri de pe alte smartphone-uri în preajma cărora s-a aflat smartphone-ul dvs. Imediat după aceea, DK-urile sunt șterse de pe smartphone-ul dvs. 

Dacă există o corelare, se stabilește, pe baza câtorva criterii de evaluare, dacă s-a produs un contact riscant. În acel caz, adică dacă ați stat în ultimul timp aproape de o persoană infectată cu COVID-19, veți primi o notificare privind riscul dvs. ridicat de infectare. De asemenea, aplicația vă va recomanda ce să faceți după ce ați primit o notificare.

CoronaMelder se sincronizează, din 30 noiembrie 2020, cu aplicații de notificare ale altor țări europene. Acest lucru înseamnă că, dacă folosiți CoronaMelder și vă întâlniți cu cineva dintr-o altă țară a UE care folosește aplicația referitoare la coronavirus din țara respectivă, cele două aplicații fac schimb de RPI-uri. Acest lucru are loc în același fel ca între doi utilizatori ai aplicației CoronaMelder. Dacă unul dintre dvs. este testat pozitiv ulterior și anunță acest lucru prin intermediul aplicației, celălalt va primi o notificare.

Comisia Europeană a înființat o infrastructură digitală pentru cooperarea dintre aplicațiile privind coronavirusul din diferite țări, portalul federativ european (European Federation Gateway Service – EFGS). Acesta include un server comun, care face posibil schimbul de date între diferite aplicații referitoare la coronavirus.

### 1. Cine este operatorul de date cu caracter personal? 

Ministerul Sănătății, Bunăstării și Sportului (VWS) este operatorul în ceea ce privește datele cu caracter personal prelucrate la configurare, la sincronizarea europeană cu alte aplicații de notificare și la gestionarea aplicației CoronaMelder. Ministrul VWS și autoritățile desemnate ale altor țări participante îndeplinesc împreună rolul de operator de date pentru EFGS. Puteți găsi o listă actualizată a țărilor participante în partea privind „CoronaMelder și străinătatea” din secțiunea de întrebări frecvente de pe CoronaMelder.nl.

În măsura în care Serviciul Municipal de Sănătate (GGD) utilizează, pentru identificarea focarelor și a contacților, date cu caracter personal obținute prin intermediul aplicației, operatorul de date cu caracter personal din regiunea dvs. este GGD. Pe [www.GGD.nl](http://www.GGD.nl) puteți găsi unitatea GGD de care aparțineți introducând codul poștal al adresei dvs. de domiciliu. Dacă nu aveți adresă de domiciliu în Olanda, puteți introduce codul poștal al adresei spațiului de cazare.

### 2. În ce scop sunt prelucrate datele cu caracter personal? 

Această aplicație a fost dezvoltată pentru a veni în completarea activității GGD de identificare a focarelor și a contacților. Scopul acesteia este de a informa rapid și simplu utilizatorii cu risc ridicat de infectare, păstrând un nivel foarte ridicat de protecție a vieții dvs. private. 

### 3. Temeiul prelucrării datelor cu caracter personal 

În aplicație pot fi prelucrate date cu caracter personal. Temeiul prelucrării datelor cu caracter personal este, pe scurt, îndeplinirea unei misiuni de serviciu public. Pentru ministrul sănătății, bunăstării și sportului este vorba, pe scurt, despre serviciul public de a conduce demersurile de combatere a COVID-19 și de a asigura menținerea și perfecționarea structurii naționale de sprijin.

Pentru GGD este vorba despre misiunea de a identifica focarele și contacții în cazul raportărilor privind o infecție cu COVID-19.

Prin introducerea aplicației CoronaMelder ca mijloc de sprijin pentru identificarea focarelor și a contacților sunt duse la îndeplinire, așadar, misiunile de serviciu public sus-menționate ale ministrului sănătății publice, bunăstării și sportului și celor ale unităților GGD. Utilizarea CoronaMelder pentru îndeplinirea acestei misiuni de serviciu public se întemeiază pe articolul 6d din Legea sănătății publice.

Descărcarea și utilizarea aplicației CoronaMelder sunt și vor rămâne voluntare. Acest lucru înseamnă că nimeni nu vă poate obliga să utilizați CoronaMelder.

### 4. Ce date cu caracter personal se prelucrează? 

În contextul aplicației se prelucrează următoarele date:

- Rolling proximity indicators (RPI);
- Temporary Exposure Keys (TEK);
- Diagnosis Keys (DK);
- pseudoadresa MAC;
- puterea semnalului și durata contactului;
- codul de validare;
- gradul riscului de expunere (ridicat, mediu, scăzut);
- adresa IP.

Aceste date pot fi date cu caracter personal. 

Un TEK este o serie de cifre generate în mod criptat și aleatoriu, cu rol de referință temporară. Pe baza TEK-ului, o dată la 10-20 de minute se generează un RPI, adică o serie temporară de cifre generate tot în mod criptat. Acest RPI face obiectul unui schimb cu alte smartphone-uri pe care este instalată aplicația și care s-au aflat, într-un interval de timp stabilit, în apropierea smartphone-ului în cauză. Recepționarea și transmiterea de RPI-uri se face prin Bluetooth Low Energy. RPI-ul se utilizează în combinație cu puterea semnalului, atât de recepție, cât și de transmisie (pentru a determina distanța dintre utilizatori), și cu durata contactului (Bluetooth). RPI-urile recepționate sunt șterse de pe smartphone-uri după 14 zile.

Atât TEK-urile, cât și DK-urile și RPI-urile sunt chei de identificare pseudonimizate.

Pentru a exclude, pe cât posibil, riscul identificării utilizatorilor, la schimbul de RPI-uri se folosește adresa MAC (un cod hardware unic al transmițătorului Bluetooth) a smartphone-ului înlocuită cu un cod generat aleatoriu, adică o pseudoadresă MAC, care, ca și RPI-urile, se modifică o dată la 10-20 de minute. 

Codul de validare se generează cu ajutorul unei funcționalități integrate și afișate în aplicație. GGD utilizează codul de autorizare pentru a valida TEK-urile transmise către GGD. GGD plasează acest cod de validare, cu data primei zile de îmbolnăvire, în portalul GGD. Acest portal GGD este accesibil numai angajaților GGD. Serverul de back-end acceptă TEK-uri de la utilizatori numai dacă acestea sunt însoțite de un cod de validare care a fost validat astfel de GGD. Pe serverul de back-end, TEK-urile sunt convertite în DK-uri.

Pe lângă DK-uri, prima zi de boală și codul de validare, se trimite către serverul de back-end și adresa IP. Acest proces este inerent utilizării internetului și tehnologiei IP. Adresa IP este prelucrată numai în scopuri de administrare și securizare. Adresa IP este stocată separat de celelalte date, astfel că pe serverul de back-end nu se stochează adrese IP. În felul acesta nu se poate urmări cine ce informații a transmis.

### 5. Informații statistice 

Datele colectate cu ajutorul aplicației se utilizează exclusiv în scopurile precizate în această declarație privind confidențialitatea.

### 6. Cui îi sunt puse la dispoziție datele?

Transmiterea și recepționarea de RPI-uri au loc la nivel local pe smartphone-uri. Dacă s-a stabilit o infectare, utilizatorul poate alege să transmită către serverul de back-end TEK-urile sale, însoțite de un cod de validare unic. Serverul de back-end este administrat de CIBG (care face parte di Ministerul Sănătății Publice, Bunăstării și Sportului), KPN acționând ca subcontractant (persoană autorizată de către operatorul de date).

GGD prelucrează codul de validare, cu data primei zile de boală, în portalul GGD al aplicației, portal accesibil numai angajaților autorizați ai GGD.

Prin intermediul portalului federativ european (EFGS), DK-urile fac obiectul unui schimb cu alte țări europene care au aplicații cu un nivel de securitate comparabil și s-au alăturat EFGS. Aderarea la EFGS se face pas cu pas. Puteți găsi o listă actualizată a țărilor participante în partea privind „CoronaMelder și străinătatea” din secțiunea de întrebări frecvente de pe CoronaMelder.nl. EFGS este gestionat de Comisia Europeană (operator). Condițiile tehnice și organizatorice de participare la EFGS sunt precizate în decizia europeană de punere în aplicare privind schimburile transfrontaliere. Puteți găsi informații suplimentare despre interoperabilitatea cu alte țări pe https://ec.europa.eu/health/ehealth/covid-19.

Smartphone-urile altor utilizatori preiau periodic, de câteva ori pe zi, DK-urile aflate pe acest server de back-end. 

### 7. Stocarea datelor cu caracter personal

Datele stocate local pe smartphone-ul dvs. se păstrează timp de 14 zile. După aceste 14 zile, aceste date sunt șterse automat și definitiv. Puteți șterge și dvs. în orice moment datele stocate. 

În măsura în care datele dvs. au fost stocate pe serverul de back-end/în EFGS, acestea sunt păstrate timp de 14 zile de la momentul încărcării. După aceste 14 zile, datele sunt șterse. 

Adresele IP prelucrate în scopuri de administrare și de securizare sunt șterse după maximum 7 zile.

### 8. Drepturile care vă revin în legătură cu datele dvs. cu caracter personal 

Aveți unele drepturi pentru a păstra controlul asupra datelor dvs. cu caracter personal. Le puteți regăsi [aici](https://autoriteitpersoonsgegevens.nl/nl/onderwerpen/algemene-informatie-avg/rechten-van-betrokkenen), pe site-ul Autorității privind Datele cu Caracter Personal.

Deoarece aplicația CoronaMelder a fost concepută pornind de la principiul minimizării datelor și al confidențialității încă din stadiul de proiectare, puteți invoca numai într-o măsură limitată drepturile pe care vi le conferă RGPD. Se prelucrează date numai într-o măsură limitată. În plus, este aproape imposibil de urmărit sursa datelor, iar acestea se păstrează numai o perioadă scurtă. Conform articolului 11 din RGPD, drepturile care decurg din articolele 15-20 ale RGPD nu se aplică dacă operatorul de date nu (mai) poate identifica persoana în cauză.

În prima fază – înainte ca utilizatorii să încarce TEK-uri pe serverul de back-end –, toate datele se prelucrează pe smartphone-urile utilizatorilor aplicației CoronaMelder. Ministrul VWS și unitățile GGD nu au acces la acestea. În această fază nu se poate da curs, de exemplu, unei solicitări de modificare sau de ștergere a datelor, aplicându-se, evident, regula că aceste date sunt șterse automat de pe smartphone după maximum paisprezece zile.

Datorită caracterului de confidențialitate încă din stadiul de proiect al aplicației, nici după încărcarea TEK-urilor (ulterior a DK-urilor) nu se poate stabili care coduri se referă la utilizatorul infectat. VWS și unitățile GGD nu au capacitatea tehnică de a corela codurile stocate (temporar) pe serverul de back-end cu utilizatorul care și-a încărcat TEK-urile. Datorită imposibilității identificării utilizatorului pe baza codurilor, nu se aplică drepturile care decurg din articolele 15-20 ale RGPD.

Aplicarea drepturilor conferite de RGPD va fi deci necesară numai într-o măsură limitată, pur și simplu deoarece nu se poate stabili sau se poate stabili numai într-o măsură limitată legătura dintre date și persoane sau deoarece aceste date nu mai există, având în vedere termenele scurte de păstrare. Se face trimitere aici la articolul 11 din RGPD, conform căruia nu se aplică drepturile precizate în articolele 15-20 din RGPD dacă persoanele în cauză nu mai pot fi identificate.

Rămâne însă valabilă posibilitatea de a transmite o cerere prin care invocați un drept care vă revine în ceea ce privește confidențialitatea. Puteți trimite cererea dvs. la unitatea GGD de care aparține localitatea dvs. Pe [www.GGD.nl](http://www.GGD.nl) puteți completa codul poștal al adresei dvs. de domiciliu pentru a vedea de care unitate GGD aparține localitatea dvs. Dacă nu aveți adresă de domiciliu în Olanda, puteți introduce codul poștal al adresei spațiului de cazare.

Aveți permanent dreptul de a depune o plângere în legătură cu prelucrarea datelor dvs. cu caracter personal la Autoritatea privind Datele cu Caracter Personal. Puteți găsi mai multe informații despre acest lucru [aici](https://autoriteitpersoonsgegevens.nl/nl/zelf-doen/gebruik-uw-privacyrechten/klacht-melden-bij-de-ap).

Pe site-ul unității GGD din localitatea dvs. puteți găsi datele de contact ale responsabilului cu protecția datelor din cadrul respectivei unități GGD.

Pe site-ul Ministerului Sănătății Publice, Bunăstării și Sportului puteți găsi datele de contact ale responsabilului cu protecția datelor din cadrul ministerului respectiv.

### 9. Securizarea datelor dvs. cu caracter personal

Ministerul Sănătății, Bunăstării și Sportului și unitățile GGD tratează cu seriozitate protecția datelor dvs. și iau măsuri adecvate pentru a împiedica utilizarea abuzivă, pierderea, accesarea nepermisă, divulgarea nedorită și modificarea neautorizată.

### 10. Modificarea declarației privind confidențialitatea

Această declarație privind confidențialitatea poate suferi modificări. În acest caz, vom publica pe site-ul nostru versiunea modificată a declarației privind confidențialitatea, aceasta intrând apoi imediat în vigoare. Ultima actualizare: 15 martie 2020
