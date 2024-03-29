---
layout: in-app-content
lang: bg
title: Декларация за поверителност за CoronaMelder
---
## Относно CoronaMelder

CoronaMelder (приложение) е технически инструмент, който помага да се ограничи разпространението на вируса COVID-19. Ако сте инсталирали CoronaMelder на Вашия смартфон, ще получите съобщение, ако известно време сте били в близост до някой, който е дал положителен тест за COVID-19, и този човек също е инсталирал CoronaMelder. По-долу следва кратко разяснение как работи CoronaМelder.

Приложението разпознава чрез Bluetooth други смартфони, на които е инсталирано приложението. Останалите смартфони се разпознават въз основа на произволни кодове (серия от числа), наречени Rolling Proximity Indicators (RPI). Тези кодове се обновяват на всеки 10 до 20 минути и се извличат от така наречените ключове за временна експозиция (TEKs). TEK също са случайни кодове, но тези кодове се регенерират всеки ден и се съхраняват на телефона на потребителя в продължение на 14 дни.

Ако Вашият смартфон е близо до друг смартфон, на който е инсталирано приложението, различните RPI се обменят между тези смартфони и се съхраняват локално върху тях. В случай че потребител на приложението е дал положителен тест за COVID-19, потребителят може доброволно да избере да докладва това в приложението. Ако направи такъв избор, приложението изпраща до бекенд сървър създадените през последните 14 дни и съхранявани локално на смартфона TEK. Бекенд сървърът ще приема изпратени TEK само ако потребителят и Общинската здравна служба (GGD) са потвърдили изпращането с код за потвърждение. На бекенд сървъра получените TEK се преобразуват в други кодове, наречени диагностични ключове (DК).

След това бекенд сървърът предоставя на разположение диагностичните ключове, така че те могат да бъдат автоматично извлечени от смартфоните, на които е инсталирано приложението. Когато Вашият смартфон извлече диагностичните ключове от сървъра, връзката със сървъра ще бъде прекратена. Този автоматизиран процес се повтаря няколко пъти на ден, за да се актуализират евентуални рискове от заразяване. След това Вашият смартфон изчислява въз основа на изтеглените DК дали има съвпадение с различните RPI на други смартфони, до които е бил в близост Вашият смартфон. Веднага след това DК ще бъдат изтрити от Вашия смартфон.

Ако има съвпадение, въз основа на редица коефициенти се определя дали е имало рискован контакт. Ако е така, с други думи, ако наскоро сте били близо до човек, заразен с COVID-19, ще бъдете уведомени за Вашия повишен риск от заразяване. Приложението също така изпраща препоръка за това, какво да правите след получаване на известие.

Ог 30.11.2020 CoronaMelder си сътрудничи с приложения за известяване от други европейски държави. Това означава, че ако Вие използвате CorornaMelder и срещнете някого от друга държава членка на ЕС, който използва приложение за коронавируса от тази страна, двете приложения ще си обменят RPI. Това става по същия начин като между потребителите на CoronaMelder. Ако някой от двама Ви впоследствие бъде диагностициран с коронавирус и съобщи за това чрез приложението, другият ще получи предупредително известие.

За да улесни сътрудничеството между различните приложения за коронавируса от отделните страни, Европейската комисия изгради дигиталната инфраструктура Еuropean Federation Gateway Service (EFGS). Тя се състои от общ сървър, който осъществява обмена на данни между различните приложенията за коронавируса.  

### 1. Кой е отговорен за обработката на лични данни?

Министърът на здравеопазването, благосъстоянието и спорта е отговорен за обработката, доколкото при проектирането, европейското сътрудничество с други приложения за известяване и управлението на CoronaMelder се обработват лични данни. Министърът на здравеопазването, благосъстоянието и спорта е отговорен заедно с компетентните органи от останалите участващи страни за обработката за EFGS. Актуален списък на участващите страни ще откриете в раздел „CoronaMelder и чужбина“ в Често задавани въпроси на CoronaMelder.nl.

Доколкото при проследяването на източници и контакти Общинската здравна служба (ОЗС) използва лични данни, получавани чрез приложението, ОЗС на Вашия регион е отговорникът за обработката. На [www.GGD.nl](https://www.GGD.nl) можете да намерите към коя ОЗС спадате, като въведете пощенския код на домашния си адрес. Ако нямате адрес на местоживеене в Нидерландия, може да въведете пощенския код на местопребиваването си.

### 2. С каква цел се обработват личните данни?

Това приложение е разработено като допълнение към проследяването на източници и контакти на ОЗС. Целта му е да информира потребителите с повишен риск от заразяване бързо и лесно, с висока степен на защита на Вашите лични данни.

### **3. Обосновка за обработка на лични **данни

В приложението могат да бъдат обработвани лични данни. Обосновката за обработка на лични данни е изпълнението на – накратко казано, една обществена задача. За министъра на здравеопазването, благосъстоянието и спорта това е обусловено от обществената задача – накратко казано, да стои начело на борбата срещу COVID-19 и да гарантира поддържането и подобряването на националната структура за подкрепа.

При ОЗС това е обусловено от задачата да се извършва проследяване на източници и контакти при известия за заразяване с COVID-19.

Следователно с въвеждането на CoronaMelder като помощен инструмент за проследяване на източници и контакти се изпълняват гореспоменатите обществени задачи на министъра на здравеопазването, благосъстоянието и спорта и на ОЗС. Ангажиментът на CoronaMelder да изпълнява това обществено поръчение е регламентиран в член 6а от Закона за общественото здраве.

Свалянето и използването на CoronaMelder е и остава доброволно. Това означава, че никой не може да Ви задължи да го използвате. 

### 4. Кои лични данни се обработват?

В рамките на приложението се обработват следните данни:

- Подвижни индикатори за близост (RPI)
- Ключове за временна експозиция (TEK)
- Диагностични ключове (DK)
- Псевдо MAC-адрес
- Сила на сигнала и продължителност на контактаПърви ден на заболяване

- Код за потвърждение
- Стойност на риска от експозиция (висока, средна, ниска)
- IP адрес

Тези данни могат да бъдат лични данни.

TEK е произволна, криптографски генерирана последователност от числа, която служи като временна справка.. Въз основа на ТЕК на всеки 10 до 20 минути се генерира RPI, т.е. временна, също криптографски генерирана серия от числа. Този RPI се обменя с други смартфони, на които е инсталирано приложението и които са били в близост до съответния смартфон за определен период от време. RPI се приемат и предават чрез Bluetooth Low energy. RPI се използва и в комбинация със силата на сигнала, както предаван, така и получаван (за определяне на разстоянието между потребителите), и продължителността на (Bluetooth) контакта. Получените RPI ще бъдат изтрити от смартфоните след 14 дни.

Както TEK и DK, така и RPI са псевдонимизирани идентификационни ключове.

За да се елиминира максимално рискът за идентифициране на потребителите, при размяна на RPI MAC адресът (уникален хардуерен номер на Bluetooth предавателя) на смартфона се заменя с произволно генериран код, псевдо MAC адрес, който както и RPI се променя на всеки 10 до 20 минути.

Кодът за потвърждение се генерира с помощта на функционалност, предлагана в приложението, и се показва в приложението. Кодът за потвърждение се използва от ОЗС за валидиране на TEK, изпратени към ОЗС. ОЗС въвежда този код на потвърждение, заедно с датата на първия ден на заболяване, в портала на ОСЗ. Този портал на ОЗС е достъпен само за служители на ОЗС. Бекенд сървърът приема TEK от потребители само ако е представен код за потвърждение, който е валидиран по този начин от ОСЗ. На бекенд сървъра ТЕК се конвертират в DK.

В допълнение към DK, първия ден на заболяването и кода за потвърждение, и IP адресът се изпраща до бекенд сървъра. Това е присъщо за използването на интернет и IP технологията. IP адресът се обработва единствено за целите на управлението и сигурността. IP адресът се съхранява отделно от останалите данни, така че на бекенд сървъра не се съхраняват IP адреси. В резултат на това не може да се проследи кой коя информация е изпратил.

### 5. Статистическа информация

Данните, събрани с приложението, ще бъдат използвани само за целите, посочени в тази декларация за поверителност.

### 6. На кого се предоставят лични данни?

Изпращането и получаването на RPI се извършва локално на смартфоните. Ако бъде установено заразяване, потребителят може да избере да изпрати своите TEK, заедно с уникален код за потвърждение, на бакенд сървъра. Бакенд сървърът се управлява от CIBG (част от Министерството на здравеопазването, благосъстоянието и спорта) с KPN като подизпълнител (обработчик).

ОЗС обработва кода за потвърждение, с датата на първия ден на заболяване, в портала на ОЗС на приложението, който портал е достъпен само за оторизирани служители на ОЗС.

DK се обменят посредством Еuropean Federation Gateway Service (EFGS) с други европейски държави, които имат приложение със съпоставимо ниво на сигурност и са се присъединили към EFGS. Включването към EFGS става поетапно. Актуален списък на участващите страни ще откриете в раздел „CoronaMelder и чужбина“ в Често задавани въпроси на CoronaMelder.nl. EFGS се управлява от Европейската комисия (обработчик). Техническите и организационни условия за присъединяване към EFGS са посочени в Европейското решение за изпълнение на трансграничен обмен на данни. Повече информация за оперативната съвместимост с други страни ще намерите на https://ec.europa.eu/health/ehealth/covid-19.

Смартфоните на други потребители периодично, няколко пъти на ден, извличат DK-тата, които са на този централен сървър.

### 7. Съхраняване на лични данни

Данните, които са запазени локално на Вашия смартфон, се съхраняват 14 дни. След тези 14 дни тези данни ще бъдат автоматично и окончателно изтрити. Можете и сами по всяко време да изтриете съхранените данни.

Доколкото Вашите данни се съхраняват на бекенд сървъра/ЕFGS, данните ще се съхраняват в продължение на 14 дни от момента на качването. След тези 14 дни данните ще бъдат изтрити.

IP адреси, които се обработват с цел управление и сигурност, ще бъдат изтрити след максимум 7 дни.

### **8. Вашите права по отношение на личните Ви **данни

Имате редица права за осъществяване на контрол на личните си данни. Можете да ги откриете тук на уебсайта на Нидерландския орган за защита на данните.

Тъй като CoronaMelder е проектиран в съответствие с принципите на минимизиране на данните и „защита на личните данни още при проектирането“, само в ограничена степен можете да са позовете на Вашите права по Общия регламент за защита на личните данни (GDPR). В крайна сметка се обработват само ограничени данни. Освен това данните са практически непроследими и се съхраняват само за кратко. От член 11 от GDPR следва, че правата от членове 15 до 20 от GDPR не са приложими, ако отговорникът за обработката не може (вече) да идентифицира субекта на данните.

В първата фаза – преди потребителите да качат ТЕК на бекенд сървъра, се обработват данни единствено на смартфоните на потребителите на CoronaMelder. Министерството на здравеопазването, благосъстоянието и спорта и ОЗС нямат достъп до тях. Следователно в тази фаза не може да бъде изпълнена молба за промяна или изтриване на данни, като, разбира се, остава валидно, че след най-много четиринадесет дни тези данни се изтриват автоматично от смартфона.

Поради принципа на „защита на личните данни още при проектирането“, заложен в приложението, и след качване на TEK-тата (по-късни DK) не е възможно да се проследи кои кодове са свързани със заразения потребител. За МЗБС и ОЗС технически не е възможно да свържат кодовете, които (временно) се съхраняват на бекенд сървъра, с потребителя, който е качил своите TEK.

Поради невъзможността да се идентифицира потребителят въз основа на кодовете, не са приложими правата по смисъла на членове 15 до 20 от GDPR.

Общо взето, прилагането на правата по GDPR ще бъде необходимо само в ограничена степен, просто защото данните не могат или само в много ограничена степен могат да бъдат проследени до лица, или пък защото тези данни вече не са налични поради кратките срокове на съхранение. Това е в съответствие с изискванията на член 11 от GDPR, от което следва, че правата, включени в членове 15 до 20 от GDPR, не са приложими, ако субектите на данни вече не могат да бъдат идентифицирани.

Остава обаче възможността да изпратите молба, в която се позовавате на правата си за защита на личните данни. Можете да изпратите молбата си до отговорната ОЗС по адреса Ви на местоживеене. На [www.GGD.nl](https://www.GGD.nl) можете да въведете пощенския код на адреса си на местоживеене, за да видите коя ОЗС е отговорна във Вашето населено място. Ако нямате адрес на местоживеене в Нидерландия, може да въведете пощенския код на местопребиваването си.

Винаги имате право да подадете жалба относно обработването на личните Ви данни пред Нидерландския орган за защита на данните или пред съда. Повече информация за това ще откриете [тук](https://autoriteitpersoonsgegevens.nl/nl/zelf-doen/gebruik-uw-privacyrechten/klacht-melden-bij-de-ap).

Данните за връзка с длъжностното лице по защита на данните на ОЗС, което отговаря за Вашето населено място, може да откриете през уебсайта на съответната ОЗС.

Данни за контакт на длъжностното лице по защита на данните на Министерството на здравеопазването, благосъстоянието и спорта ще откриете на уебсайта на това министерство.

### 9. Защита на Вашите лични данни

Министърът на здравеопазването, благосъстоянието и спорта и ОЗС се отнасят сериозно към защитата на Вашите данни и предприемат подходящи мерки за предотвратяване на злоупотреба, загуба, неоторизиран достъп, нежелано разкриване и неразрешени промени.

### 10. Промяна на декларацията за поверителност

Тази декларация за поверителност подлежи на промяна. В този случай ние ще публикуваме изменената декларация за поверителност на нашия уебсайт, след което тази декларация за поверителност незабавно влиза в сила. Последна актуализация: 15 март 2021 г.
