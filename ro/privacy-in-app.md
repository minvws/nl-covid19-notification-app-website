---
layout: in-app-content
lang: ro
title: Declarație privind confidențialitatea în cadrul testării aplicației CoronaMelder
---

## Despre CoronaMelder

CoronaMelder (aplicație) este un instrument tehnic care contribuie la limitarea răspândirii virusului ce provoacă boala COVID-19. După ce instalați CoronaMelder pe telefon, veți primi un mesaj în cazul în care ați fost o vreme în preajma unei persoane care a fost testată pozitiv pentru COVID-19 și care are și ea instalată aplicația CoronaMelder. Dacă există riscul să vă fi infectat de la un alt utilizator al CoronaMelder, aplicația vă recomandă să vă testați în cazul în care aveți simptome. Mai jos aveți o descriere succintă a modului în care funcționează CoronaMelder.

Aplicația recunoaște, prin Bluetooth Low Energy, alte smartphone-uri pe care este instalată. Recunoașterea altor smartphone-uri are loc pe baza unor coduri aleatorii (serii de cifre) numite Rolling Proximity Indicators (RPI). Aceste coduri se reîmprospătează o dată la 10-20 de minute și sunt derivate din așa-numitele Temporary Exposure Keys (TEK). TEK sunt și ele coduri aleatorii, dar acestea se generează pentru câte o zi și se păstrează timp de 14 zile pe telefonul utilizatorului. 

Dacă smartphone-ul dvs. se află în apropierea altui smartphone pe care este instalată aplicația, cele două smartphone-uri fac schimb de RPI-uri și le salvează local. În cazul în care un utilizator al aplicației a fost testat pozitiv pentru COVID-19, utilizatorul poate alege în mod voluntar să anunțe acest lucru în cadrul aplicației. Dacă s-a optat pentru acest lucru, aplicația transmite către un server de back-end TEK-urile care au fost create în ultimele 14 zile și au fost salvate local. Serverul de back-end acceptă TEK-urile transmise numai dacă utilizatorul și Serviciul Municipal de Sănătate (GGD) au confirmat transmiterea cu ajutorul unui cod de validare. Pe serverul de back-end, TEK-urile recepționate sunt convertite în alte coduri, numite Diagnosis Keys (DK). 

Serverul de back-end face apoi disponibile DK-urile, astfel încât acestea să poată fi preluate automat de către smartphone-urile pe care este instalată aplicația. După ce smartphone-ul dvs. preia DK-urile de pe server, conexiunea la server se întrerupe. Acest proces automatizat se repetă de mai multe ori pe zi, pentru a avea o imagine actualizată a eventualelor riscuri de infectare. În continuare, pe baza DK-urilor preluate, smartphone-ul dvs. calculează dacă există o corelare cu diferitele RPI-uri de pe alte smartphone-uri în preajma cărora s-a aflat smartphone-ul dvs. Imediat după aceea, DK-urile sunt șterse de pe smartphone-ul dvs. 
Dacă există o corelare, se stabilește, pe baza câtorva criterii de evaluare, dacă s-a produs un contact riscant. În acel caz, adică dacă ați stat în ultimul timp aproape de o persoană infectată cu COVID-19, veți primi o notificare privind riscul dvs. ridicat de infectare. De asemenea, aplicația vă va recomanda să vă testați pentru infecția cu acest virus dacă aveți simptome.

### 1. Cine este operatorul de date cu caracter personal? 
Ministerul Sănătății, Bunăstării și Sportului (VWS) este operatorul în ceea ce privește datele cu caracter personal prelucrate la configurarea și gestionarea aplicației CoronaMelder.
În măsura în care Serviciul Municipal de Sănătate (GGD) utilizează, pentru identificarea focarelor și a contacților, date cu caracter personal obținute prin intermediul aplicației, operatorul de date cu caracter personal din regiunea dvs. este GGD . Pe [www.GGD.nl](https://www.ggd.nl) puteți găsi unitatea GGD de care aparțineți introducând codul poștal al adresei dvs. de domiciliu. Dacă nu aveți adresă de domiciliu în Olanda, puteți introduce codul poștal al adresei spațiului de cazare.

### 2. În ce scop sunt prelucrate datele cu caracter personal? 
Această aplicație a fost dezvoltată pentru a veni în completarea activității GGD de identificare a focarelor și a contacților. Scopul acesteia este de a informa rapid și simplu utilizatorii cu risc ridicat de infectare, păstrând un nivel ridicat de anonimat. 

### 3. Temeiul prelucrării datelor cu caracter personal 
În aplicație pot fi prelucrate date cu caracter personal. Temeiul prelucrării datelor cu caracter personal este, pe scurt, îndeplinirea unei misiuni de serviciu public. Pentru ministrul sănătății, bunăstării și sportului este vorba, pe scurt, despre serviciul public de a conduce demersurile de combatere a COVID-19 și de a asigura menținerea și perfecționarea structurii naționale de sprijin.
Pentru GGD este vorba despre misiunea de a identifica focarele și contacții în cazul raportărilor privind o infecție cu COVID-19.
Prin introducerea aplicației CoronaMelder ca mijloc de sprijin pentru identificarea focarelor și a contacților sunt duse la îndeplinire, așadar, misiunile de serviciu public sus-menționate ale ministrului sănătății publice, bunăstării și sportului și celor ale unităților GGD.
Utilizarea aplicației CoronaMelder este voluntară. De aceea, CoronaMelder vă solicită consimțământul înainte de a putea să utilizați aplicația. Dacă nu vă dați consimțământul, nu puteți utiliza CoronaMelder. Vi se solicită consimțământul și înainte de a vă putea transmite datele către GGD – în cazul unui rezultat pozitiv al testului.

### 4. Ce date cu caracter personal se prelucrează? 
În aplicație se prelucrează următoarele date:

* Rolling proximity indicators (RPI);
* Temporary Exposure Keys (TEK);
* Diagnosis Keys (DK);
* pseudoadresa MAC;
* puterea semnalului și durata contactului;
* codul de validare;
* gradul riscului de expunere (ridicat, mediu, scăzut);
* adresa IP.

Aceste date pot fi date cu caracter personal. 
Un TEK este o serie de cifre generate în mod criptat și aleatoriu, cu rol de referință temporară. Pe serverul de back-end, TEK-urile sunt convertite în DK-uri. În plus, o dată la 10-20 de minute se generează un RPI, adică o serie temporară de cifre generate tot în mod criptat. Această serie de cifre este derivată dintr-un TEK și este schimbată cu alte smartphone-uri pe care este instalată aplicația și care s-au aflat, într-un interval de timp stabilit, în apropierea smartphone-ului în cauză. Recepționarea și transmiterea de RPI-uri se face prin Bluetooth Low Energy. RPI-ul se utilizează în combinație cu puterea semnalului, atât de recepție, cât și de transmisie (pentru a determina distanța dintre utilizatori), și cu durata contactului (Bluetooth). RPI-urile recepționate sunt șterse de pe smartphone-uri după 14 zile. 
Atât TEK-urile, cât și DK-urile și RPI-urile sunt chei de identificare pseudonimizate.
Pentru a exclude, pe cât posibil, riscul identificării utilizatorilor, la schimbul de RPI-uri se folosește adresa MAC (un cod hardware unic al transmițătorului Bluetooth) a smartphone-ului înlocuită cu un cod generat aleatoriu, adică o pseudoadresă MAC, care, ca și RPI-urile, se modifică o dată la 10-20 de minute. 
Codul de validare se generează cu ajutorul unei funcționalități integrate și afișate în aplicație. GGD utilizează codul de autorizare pentru a valida TEK-urile transmise către GGD. GGD plasează acest cod de validare, cu data primei zile de îmbolnăvire, în portalul GGD. Acest portal GGD este accesibil numai angajaților GGD. Serverul de back-end acceptă TEK-uri de la utilizatori numai dacă acestea sunt însoțite de un cod de validare care a fost validat astfel de GGD. În etapa de validare se prelucrează adrese IP în scopuri de administrare și de securizare.
Pe lângă DK-uri, prima zi de boală și codul de validare, se trimite către serverul de back-end și adresa IP. Acest proces este inerent utilizării internetului și tehnologiei IP. Adresa IP este stocată separat de celelalte date, astfel că pe serverul de back-end nu se stochează adrese IP. În felul acesta nu se poate urmări cine ce informații a transmis.

### 5. Informații statistice 
Datele colectate cu ajutorul aplicației se utilizează exclusiv în scopurile precizate în această declarație privind confidențialitatea. Nu se generează informații statistice. 

### 6. Cui îi sunt puse la dispoziție datele?
Transmiterea și recepționarea de RPI-uri au loc la nivel local pe smartphone-uri. Dacă s-a stabilit o infectare, utilizatorul poate alege să transmită către serverul de back-end TEK-urile sale, însoțite de un cod de validare unic. Serverul de back-end este administrat de CIBG, KPN acționând ca subcontractant (persoană autorizată de către operatorul de date).
GGD prelucrează codul de validare, cu data primei zile de boală, în portalul GGD al aplicației, portal accesibil numai angajaților autorizați ai GGD.
Smartphone-urile altor utilizatori preiau periodic, de câteva ori pe zi, DK-urile aflate pe acest server de back-end. 

### 7. Stocarea datelor cu caracter personal
Datele stocate local pe smartphone-ul dvs. se păstrează timp de 14 zile. După aceste 14 zile, aceste date sunt șterse automat și definitiv. Puteți șterge și dvs. în orice moment datele stocate. 
În măsura în care datele dvs. au fost stocate pe serverul de back-end, acestea sunt păstrate timp de 14 zile de la momentul încărcării. După aceste 14 zile, datele sunt șterse. 
Adresele IP prelucrate în scopuri de administrare și de securizare sunt șterse după maximum 7 zile.

### 8. Drepturile care vă revin în legătură cu datele dvs. cu caracter personal 
Aveți unele drepturi pentru a păstra controlul asupra datelor dvs. cu caracter personal. Le puteți regăsi aici, pe site-ul Autorității privind Datele cu Caracter Personal.
Deoarece aplicația CoronaMelder a fost concepută pornind de la principiul minimizării datelor și al confidențialității încă din stadiul de proiectare, puteți invoca numai într-o măsură limitată drepturile pe care vi le conferă RGPD. Se prelucrează date numai într-o măsură limitată. În plus, este aproape imposibil de urmărit sursa datelor, iar acestea se păstrează numai o perioadă scurtă. Conform articolului 11 din RGPD, drepturile care decurg din articolele 15-20 ale RGPD nu se aplică dacă operatorul de date nu (mai) poate identifica persoana în cauză.
În prima fază – înainte ca utilizatorii să încarce TEK-uri pe serverul de back-end –, toate datele se prelucrează pe smartphone-urile utilizatorilor aplicației CoronaMelder. Ministrul VWS și unitățile GGD nu au acces la acestea. În această fază nu se poate da curs, de exemplu, unei solicitări de modificare sau de ștergere a datelor, aplicându-se, evident, regula că aceste date sunt șterse automat de pe smartphone după maximum paisprezece zile.
Datorită caracterului de confidențialitate încă din stadiul de proiect al aplicației, nici după încărcarea TEK-urilor (ulterior a DK-urilor) nu se poate stabili care coduri se referă la utilizatorul infectat. VWS și unitățile GGD nu au capacitatea tehnică de a corela codurile stocate (temporar) pe serverul de back-end cu utilizatorul care și-a încărcat TEK-urile. Datorită imposibilității identificării utilizatorului pe baza codurilor, nu se aplică drepturile care decurg din articolele 15-20 ale RGPD.
Aplicarea drepturilor conferite de RGPD va fi deci necesară numai într-o măsură limitată, pur și simplu deoarece nu se poate stabili sau se poate stabili numai într-o măsură limitată legătura dintre date și persoane sau deoarece aceste date nu mai există, având în vedere termenele scurte de păstrare. Se face trimitere aici la articolul 11 din RGPD, conform căruia nu se aplică drepturile precizate în articolele 15-20 din RGPD dacă persoanele în cauză nu mai pot fi identificate.
Rămâne însă valabilă posibilitatea de a transmite o cerere prin care invocați un drept care vă revine în ceea ce privește confidențialitatea. Puteți trimite cererea dvs. la unitatea GGD de care aparține localitatea dvs. Pe [www.GGD.nl](https://www.ggd.nl) puteți completa codul poștal al adresei dvs. de domiciliu pentru a vedea de care unitate GGD aparține localitatea dvs. Dacă nu aveți adresă de domiciliu în Olanda, puteți introduce codul poștal al adresei spațiului de cazare.
Aveți permanent dreptul de a depune o plângere în legătură cu prelucrarea datelor dvs. cu caracter personal la Autoritatea privind Datele cu Caracter Personal. Puteți găsi mai multe informații despre acest lucru aici.
Pe site-ul unității GGD din localitatea dvs. puteți găsi datele de contact ale responsabilului cu protecția datelor din cadrul respectivei unități GGD.
Pe site-ul Ministerului Sănătății Publice, Bunăstării și Sportului puteți găsi datele de contact ale responsabilului cu protecția datelor din cadrul ministerului respectiv.

### 9. Securizarea datelor dvs. cu caracter personal
Ministerul Sănătății, Bunăstării și Sportului și unitățile GGD tratează cu seriozitate protecția datelor dvs. și iau măsuri adecvate pentru a împiedica utilizarea abuzivă, pierderea, accesarea nepermisă, divulgarea nedorită și modificarea neautorizată.

### 10. Modificarea declarației privind confidențialitatea
Această declarație privind confidențialitatea poate suferi modificări. În acest caz, vom publica pe site-ul nostru versiunea modificată a declarației privind confidențialitatea, aceasta intrând apoi imediat în vigoare. Ultima actualizare: 10 septembrie 2020
