---
layout: content
lang: pl
showBreadCrumbs: true
title: Oświadczenie o ochronie prywatności CoronaMelder
---

## O CoronaMelder

(Aplikacja) CoronaMelder jest technicznym środkiem pomagającym ograniczyć rozprzestrzenianie się wirusa Covid-19. Użytkownik otrzymuje wiadomość, jeśli zainstalował CoronaMelder na swoim smartfonie oraz przebywał w ostatnim czasie w pobliżu osoby, która również zainstalowała CoronaMelder oraz której test na obecność wirusa Covid-19 dał wynik pozytywny. Aplikacja radzi użytkownikowi, który być może został zarażony przez innego użytkownika CoronaMelder, aby w przypadku dolegliwości zrobił test na obecność koronawirusa. Poniżej znajduje się krótkie wyjaśnienie dotyczące działania CoronaMelder.

Za pomocą technologii Bluetooth Low Energy aplikacja rozpoznaje inne smartfony, na których zainstalowano CoronaMelder. Inne smartfony są rozpoznawane na podstawie losowych kodów (ciągów cyfr), zwanych wskaźnikami RPI (Rolling Proximity Indicators). Kody te są odświeżane co 10 do 20 minut. Są one pochodną tzw. kluczy TEK (Temporary Exposure Keys). Klucze TEK to również losowe kody, jednak są generowane raz dziennie i przechowywane na telefonie użytkownika przez 14 dni. 

Jeśli smartfon użytkownika znajduje się w pobliżu innego smartfonu, na którym jest zainstalowana ta aplikacja, wymieniają one różne wskaźniki RPI, które zostają zapisane lokalnie. W przypadku, gdy użytkownik otrzyma pozytywny wynik testu na obecność wirusa Covid-19, może on dobrowolnie zdecydować się na zgłoszenie tego w aplikacji. Jeżeli użytkownik podejmie taką decyzję, aplikacja przesyła na backendowy serwer klucze TEK utworzone w przeciągu ostatnich 14 dni i przechowywane na smartfonie. Backendowy serwer zatwierdza wysłane klucze TEK tylko wtedy, gdy zarówno użytkownik, jak i GGD potwierdzą transmisję kodem weryfikacyjnym. Na serwerze backendowym otrzymane klucze TEK są konwertowane na inne kody, zwane kluczami DK (Diagnosis Keys). 

Następnie serwer backendowy udostępnia klucze DK tak, aby zostały one automatycznie pobrane przez smartfony, na których zainstalowana jest aplikacja. Gdy smartfon użytkownika pobierze klucze DK, połączenie z serwerem zostaje zakończone. Ten zautomatyzowany proces powtarza się parę razy dziennie, aby kontrolować ewentualne ryzyko zarażenia. Następnie na podstawie pobranych kluczy DK smartfon użytkownika sprawdza, czy istnieje zgodność z różnymi wskaźnikami RPI innych smartfonów, w pobliżu których się znajdował. Zaraz po tym, klucze DK są usuwane ze smartfonu użytkownika. 

Jeśli istnieje zgodność, na podstawie szeregu współczynników wagowych, określa się, czy doszło do kontaktu niosącego ze sobą ryzyko. Innymi słowy, jeśli użytkownik przebywał w ostatnim czasie blisko osoby zarażonej wirusem Covid-19, otrzyma powiadomienie informujące o narażeniu na zwiększone ryzyko zarażenia. Aplikacja radzi również, aby w przypadku dolegliwości zrobić test na obecność koronawirusa.


### 1. Kto jest odpowiedzialny za przetwarzanie danych osobowych? 
Minister Zdrowia, Opieki Społecznej i Sportu jest administratorem danych osobowych w zakresie, w jakim są one przetwarzane przy tworzeniu i zarządzaniu aplikacją CoronaMelder.

GGD w regionie danego użytkownika jest administratorem danych w zakresie, w jakim Gminna Służba Zdrowia (GGD) korzysta z danych osobowych uzyskanych za pośrednictwem aplikacji podczas swoich działań. Na stronie [www.GGD.nl](https://www.ggd.nl) użytkownik może dowiedzieć się, do którego oddziału GGD przynależy, wpisując kod pocztowy swojego miejsca zamieszkania. Jeśli użytkownik nie posiada adresu zamieszkania w Holandii, może wpisać kod pocztowy swojego miejsca pobytu.

### 2. W jakim celu przetwarzane są dane osobowe? 
Ta aplikacja została opracowana w celu uzupełnienia działań GGD. Jej celem jest szybkie i łatwe informowanie użytkowników o narażeniu na zwiększone ryzyko zarażenia, przy zachowaniu wysokiego stopnia anonimowości. 

### 3. Podstawa do przetwarzania danych osobowych 
Aplikacja może przetwarzać dane osobowe. Podstawą do przetwarzania danych osobowych jest krótko mówiąc wypełnianie zadania publicznego, którym dla Ministra Zdrowia, Opieki Społecznej i Sportu jest zwalczanie wirusa Covid-19. Wiąże się z tym zapewnienie utrzymania i poprawy krajowej struktury wsparcia.

Dla GGD oznacza to analizę źródła oraz kontaktów, do których doszło, w momencie zgłoszenia zarażenia Covid-19.

Wdrożenie aplikacji CoronaMelder jako narzędzia pomocniczego, wykorzystywanego w działaniach GGD stanowi zatem realizację wyżej wymienionych zdań publicznych zarówno Ministra Zdrowia, Opieki Społecznej i Sportu, jak i GGD.

Korzystanie z CoronaMelder jest dobrowolne. Z tego powodu aplikacja prosi użytkownika o wyrażenie zgody przed rozpoczęciem korzystania z CoronaMelder. W przypadku niewyrażenia zgody, użytkownik nie może korzystać z aplikacji. Konieczne jest wyrażenie zgody również w przypadku pozytywnego wyniku testu na obecność koronawirusa, zanim użytkownik udostępni swoje dane GGD. 

### 4. Jakie dane osobowe są przetwarzane? 
Aplikacja przetwarza następujące dane:

* Wskaźniki RPI (Rolling proximity indicators)
* Klucze TEK (Temporary Exposure Keys)
* Klucze DK (Diagnosis Keys)
* Pseudo adres MAC
* Siła sygnału i czas trwania kontaktu
* Pierwszy dzień choroby
* Kod weryfikacyjny
* Poziom Narażenia na Ryzyko (Exposure Risk Value) (wysoki, średni, niski)
* Adres IP

Mogą to być dane osobowe. 

Klucz TEK jest losowym, kryptograficznie wygenerowanym ciągiem cyfr, który służy jako tymczasowe odniesienie. Na serwerze backendowym klucze TEK są konwertowane na klucze DK. Ponadto co 10 do 20 minut generowany jest wskaźnik RPI, czyli tymczasowy, również kryptograficznie generowany ciąg cyfr. Te ciągi cyfr są pochodną klucza TEK i są wymieniane z innymi smartfonami, na których została zainstalowana aplikacja, a które znajdowały się w pobliżu danego smartfonu przez określony czas. Otrzymywanie i wysyłanie wskaźników RPI odbywa się za pomocą technologii Bluetooth Low Energy. Wskaźnik RPI jest zatem używany w połączeniu z siłą sygnału zarówno nadawanego, jak i odbieranego (w celu określenia odległości między użytkownikami) oraz czasu trwania kontaktu (Bluetooth). Otrzymane wskaźniki RPI są usuwane ze smartfonów po 14 dniach. 

Zarówno klucze TEK i DK, jak i wskaźniki RPI są spseudonimizowanymi kluczami identyfikacyjnymi.

Aby zminimalizować ryzyko identyfikacji użytkowników, podczas wymiany wskaźników RPI adres MAC (unikalny numer nadajnika Bluetooth) smartfonu jest zastępowany losowo wygenerowanym kodem, pseudo adresem MAC, który podobnie jak wskaźniki RPI zmienia się co 10 do 20 minut. 

Kod weryfikacyjny jest generowany za pomocą funkcjonalności oferowanej w aplikacji i tam wyświetlany. Kod weryfikacyjny jest wykorzystywany przez GGD w celu weryfikacji przesłanych do GGD kluczy TEK. GGD umieszcza ten kod weryfikacyjny, z datą pierwszego dnia choroby, na portalu GGD. Portal GGD jest dostępny tylko dla pracowników GGD. Backendowy serwer akceptuje klucze TEK od użytkowników wyłącznie wtedy, gdy został podany kod weryfikacyjny. Oznacza to, że zostały one zweryfikowane przed GGD. Adresy IP są podczas weryfikacji przetwarzane w celach administracyjnych i związanych z bezpieczeństwem.

Oprócz kluczy DK, daty pierwszego dnia choroby i kodu weryfikacyjnego, do backendowego serwera wysyłany jest również adres IP. Jest to nieodłącznie związane z korzystaniem z Internetu i technologii IP. Adres IP jest przechowywany oddzielnie od innych danych, dzięki czemu na backendowym serwerze nie są przechowywane żadne adresy IP. To uniemożliwia zidentyfikowanie, kto wysłał jaką informację.

### 5. Informacje statystyczne 
Dane zebrane za pomocą aplikacji są wykorzystywane wyłącznie do celów wymienionych w niniejszym oświadczeniu o ochronie prywatności. Nie są generowane żadne informacje statystyczne. 

### 6. Komu udostępniane są dane osobowe?
Wysyłanie i odbiór wskaźników RPI odbywa się lokalnie na smartfonach. W przypadku potwierdzenia zarażenia, użytkownik może zdecydować się wysłać swoje klucze TEK wraz z unikalnym kodem weryfikacyjnym na backendowy serwer. Backendowy serwer jest zarządzany przez CIBG wraz z KPN jako podwykonawcą (podmiot przetwarzający).

GGD przetwarza kod weryfikacyjny, z datą pierwszego dnia choroby, na portalu GGD aplikacji, który jest dostępny tylko dla upoważnionych pracowników GGD.

Smartfony innych użytkowników okresowo, kilka razy dziennie, pobierają klucze DK przechowywane na tym backendowym serwerze. 

### 7. Przechowywanie danych osobowych
Dane zapisane lokalnie na smartfonie użytkownika są przechowywane przez 14 dni. Po 14 dniach dane te są automatycznie i trwale usuwane. Zapisane dane można również w każdej chwili usunąć samodzielnie. 

O ile dane użytkownika są zapisane na backendowym serwerze, będą one przechowywane przez 14 dni od momentu ich załadowania. Po 14 dniach dane te są usuwane. 

Adresy IP przetwarzane w celach administracyjnych i związanych z bezpieczeństwem, są usuwane po maksymalnie 7 dniach.

### 8. Prawa użytkownika odnośnie jego danych osobowych 
Użytkownik ma szereg praw odnoszących się do jego danych osobowych. Można je tutaj znaleźć na stronie internetowej holenderskiego Organu Ochrony Danych Osobowych (Autoriteit Persoonsgegevens).

Dzięki temu, że projekt aplikacji CoronaMelder opiera się na zasadzie „privacy by design” oraz minimalizacji danych, powoływanie się na swoje prawa związane z rozporządzeniem ogólnym o ochronie danych (RODO) jest możliwe tylko w ograniczonym zakresie. Przetwarzane są bowiem ograniczone dane. Ponadto dane nie dają prawie w ogóle możliwości zidentyfikowania danej osoby i są przechowywane przez krótki okres. Z art. 11 RODO wynika, że prawa zainteresowanego, o których mowa w art. 15-20 RODO, nie mają zastosowania, jeżeli administrator danych nie może (dłużej) zidentyfikować osoby, której dane dotyczą. 

W pierwszej fazie – przed załadowaniem kluczy TEK na serwer backendowy – wszystkie dane są przetwarzane wyłącznie na smartfonach użytkowników CoronaMelder. Nie mają do nich dostępu Minister Zdrowia, Opieki Społecznej i Sportu ani GGD. Na tym etapie nie jest zatem możliwe na przykład zastosowanie się do wniosku o zmianę lub usunięcie danych, choć oczywiście dane te zostaną automatycznie usunięte ze smartfona po maksymalnie czternastu dniach.

Ze względu na charakter aplikacji opierający się na zasadzie „privacy by design”, również po załadowaniu kluczy TEK (później kluczy DK) nie jest możliwe ustalenie, które kody odnoszą się do zarażonego użytkownika. Technicznie nie jest możliwe, aby holenderskie Ministerstwo Zdrowia, Opieki Społecznej i Sportu (VWS) ani GGD powiązały kody, które (tymczasowo) zostały zapisane na backendowym serwerze z użytkownikiem, który załadował swoje klucze TEK. Ze względu na brak możliwości identyfikacji użytkownika za pomocą kodów, prawa, o których mowa w art. 15-20 RODO, nie mają zastosowania.

Reasumując, wdrożenie praw związanych z RODO będzie zatem konieczne tylko w ograniczonym zakresie, ponieważ połączenie danych z danymi osobami jest niemożliwe lub możliwe w bardzo małym stopniu, jak również dlatego, że dane te już nie istnieją ze względu na krótki okres przechowywania. Jest to zgodne z art. 11 RODO, z którego wynika, że prawa, o których mowa w art. 15-20 RODO, nie mają zastosowania, jeżeli niemożliwe jest zidentyfikowanie zainteresowanego.

Pozostaje jednak możliwość złożenia wniosku, w którym użytkownik powołuje się na swoje prawo do prywatności. Użytkownik może przesłać wniosek do oddziału GGD odpowiedniego dla jego miejsca zamieszkania. Na stronie [www.GGD.nl](https://www.ggd.nl) użytkownik może dowiedzieć się, do którego oddziału GGD przynależy, wpisując kod pocztowy swojego miejsca zamieszkania. Jeśli użytkownik nie posiada adresu zamieszkania w Holandii, może wpisać kod pocztowy swojego miejsca pobytu.
Użytkownik zawsze ma prawo do złożenia skargi dotyczącej przetwarzania danych do holenderskiego Urzędu Ochrony Danych lub sądu. Więcej informacji na ten temat można znaleźć tutaj.

Dane kontaktowe właściwego inspektora ochrony danych osobowych GGD dla danego miejsca zamieszkania znajdują się na stronie internetowej GGD.
Dane kontaktowe inspektora ochrony danych osobowych Ministerstwa Zdrowia, Opieki Społecznej i Sportu znajdują się na stronie internetowej tego ministerstwa.

### 9. Ochrona danych osobowych użytkownika
Minister Zdrowia, Opieki Społecznej i Sportu oraz GGD poważnie traktują ochronę danych użytkownika i podejmują odpowiednie środki, aby zapobiec ich niewłaściwemu wykorzystaniu, utracie, nieuprawnionemu dostępowi, niepożądanemu ujawnieniu i nieuprawnionym modyfikacjom.

### 10. Zmiany w oświadczeniu o ochronie prywatności
Niniejsze oświadczenie o ochronie prywatności może ulec zmianie. W takim przypadku opublikujemy zmienione oświadczenie o ochronie prywatności na naszej stronie internetowej, po czym oświadczenie to będzie miało natychmiastowe zastosowanie.
Ostatnia aktualizacja: wrzesień 2020 r.
