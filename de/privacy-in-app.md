---
layout: in-app-content
lang: de
title: Datenschutzerklärung zum CoronaMelder
---

## Über den CoronaMelder
Der CoronaMelder (App) ist ein technisches Hilfsmittel, das beim Kampf gegen die Verbreitung des COVID-19-Virus helfen soll. Wenn Sie den CoronaMelder auf Ihrem Smartphone installiert haben, werden Sie informiert, falls Sie sich eine gewisse Zeit lang in der Nähe einer Person aufgehalten haben, die positiv auf COVID-19 getestet wurde, sofern die fragliche Person ebenfalls den CoronaMelder installiert hat. Besteht die Möglichkeit einer Infektion durch einen anderen Anwender von CoronaMelder, empfiehlt Ihnen die App, im Fall von Beschwerden einen Test durchführen zu lassen. Nachstehend folgt eine kurze Erläuterung darüber, wie der CoronaMelder funktioniert.
Über Bluetooth Low Energy erkennt die App andere Smartphones, auf denen die App installiert ist. Zur Erkennung der anderen Smartphones werden regelmäßig wechselnde Codes - die so genannten Rolling Proximity Indicators (RPIs) - ausgesendet, die aus zufälligen Zahlenfolgen bestehen. Diese Codes werden aus so genannten Temporary Exposure Keys (TEKs) erzeugt und sind nur jeweils 10 bis 20 Minuten lang gültig. Bei diesen TEKs handelt es sich ebenfalls um beliebige Codes, die einmal täglich nach dem Zufallsprinzip neu generiert und 14 Tage lang auf dem Telefon des Anwenders gespeichert werden.
Wenn sich Ihr Smartphone in der Nähe eines anderen Smartphones befindet, auf dem die App installiert ist, werden die einzelnen RPIs zwischen den Smartphones ausgetauscht und lokal auf ihnen gespeichert. Wenn der Anwender der App positiv auf COVID-19 getestet wurde, kann er dies freiwillig über die App melden. Wird dies so eingestellt, übermittelt die App die in den letzten 14 Tagen erstellten und lokal auf dem Smartphone gespeicherten TEKs an einen Backend-Server. Der Backend-Server akzeptiert die übermittelten TEKs nur dann, wenn der Anwender und die kommunale Gesundheitsbehörde (GGD) den Versand mit einem Validierungscode bestätigt haben. Auf dem Backend-Server werden die eingegangenen TEKs dann in andere Codes - die Diagnosis Keys (DKs) - umgewandelt.
Anschließend stellt der Backend-Server die DKs bereit, sodass sie automatisch von allen Smartphones abgerufen werden können, auf denen die App installiert ist. Sobald Ihr Smartphone die DKs vom Server abgerufen hat, wird die Verbindung zum Server abgebrochen. Dieser automatisierte Prozess wiederholt sich mehrmals täglich, um eventuelle Infektionsgefahren zu aktualisieren. Anschließend berechnet Ihr Smartphone anhand der abgerufenen DKs, ob eine Übereinstimmung mit den einzelnen RPIs anderer Smartphones vorliegt, in deren Nähe sich Ihr Smartphone befunden hat. Unmittelbar danach werden die DKs von Ihrem Smartphone gelöscht.
Wenn es Übereinstimmungen gibt, wird auf der Grundlage gewisser Bewertungsfaktoren festgestellt, ob es sich um einen Risikokontakt gehandelt hat. Sollte dies der Fall sein - anders ausgedrückt, wenn Sie sich in der letzten Zeit in der Nähe einer mit COVID-19 infizierten Person aufgehalten haben –, erhalten Sie eine Mitteilung mit einem Hinweis auf Ihre erhöhte Infektionsgefahr. Zudem empfiehlt Ihnen die App, sich bei Beschwerden auf eine Virusinfektion testen zu lassen.

### 1. Wer ist für die Verarbeitung der personenbezogenen Daten verantwortlich?
Die für die Verarbeitung verantwortliche Stelle ist das niederländische Ministerium für Gesundheit, Gemeinwohl und Sport, insofern als bei der Einrichtung und Verwaltung von CoronaMelder personenbezogene Daten verarbeitet werden.
Insofern als die kommunale Gesundheitsbehörde (GGD) bei der Nachverfolgung der Quellen und Kontakte personenbezogene Daten verwendet, die über die App erfasst werden, gilt die kommunale Gesundheitsbehörde (GGD) Ihrer Region als die für die Verarbeitung verantwortliche Stelle. Unter [www.GGD.nl](https://www.ggd.nl) können Sie durch Eingabe der Postleitzahl Ihres Wohnorts feststellen, welche kommunale Gesundheitsbehörde (GGD) für Sie zuständig ist. Sofern Sie über keinen Wohnsitz in den Niederlanden verfügen, können Sie die Postleitzahl Ihres Aufenthaltsortes in den Niederlanden eingeben.

### 2. Zu welchem Zweck werden personenbezogene Daten verarbeitet?
Diese App wurde als Ergänzung zur Nachverfolgung der Quellen und Kontakte der kommunalen Gesundheitsbehörde (GGD) entwickelt. Damit sollen Anwender mit erhöhtem Infektionsrisiko schnell und einfach informiert werden, wobei ein hohes Maß an Anonymität gewährleistet ist.

### 3. Grundlage der Verarbeitung personenbezogener Daten
Mit der App können personenbezogene Daten verarbeitet werden. Grundlage der Verarbeitung personenbezogener Daten ist, kurz gesagt, die Erfüllung einer öffentlichen Aufgabe. Für das niederländische Ministerium für Gesundheit, Gemeinwohl und Sport handelt es sich dabei, kurz gesagt, um die öffentliche Aufgabe, die Bekämpfung von COVID-19 zu leiten und die Instandhaltung und Verbesserung der nationalen Unterstützungsstruktur sicherzustellen. 
Für die kommunalen Gesundheitsbehörden (GGD) handelt es sich um die Aufgabe, im Falle von Meldungen einer Infektion mit COVID-19 die Quellen und Kontakte nachzuverfolgen.  
Mit der Einführung von CoronaMelder als unterstützendes Instrument zur Nachverfolgung der Quellen und Kontakte werden also die vorstehend genannten öffentlichen Aufgaben des niederländischen Ministeriums für Gesundheit, Gemeinwohl und Sport und der kommunalen Gesundheitsbehörden (GGD) umgesetzt.
Die Verwendung von CoronaMelder erfolgt auf freiwilliger Grundlage. Der CoronaMelder bittet deshalb um Ihre Zustimmung, ehe Sie die App verwenden. Wenn Sie diese Zustimmung nicht erteilen, können Sie den CoronaMelder nicht verwenden. Sie werden auch um Ihre Zustimmung gebeten, ehe Sie – im Falle eines positiven Tests – Ihre Daten mit der kommunalen Gesundheitsbehörde (GGD) teilen können.

### 4. Welche personenbezogenen Daten werden verarbeitet?
Mit der App werden die folgenden Daten verarbeitet:

* Rolling Proximity Indicators (RPIs)
* Temporary Exposure Keys (TEKs)
* Diagnosis Keys (DKs)
* Pseudo-MAC-Adressen
* Signalstärke und Dauer des Kontakts
* Datum des Krankheitsbeginns
* Validierungscode
* Exposure Risk Value (high, mid, low)
* IP-Adresse

Bei diesen Daten kann es sich um personenbezogene Daten handeln.
Ein TEK ist eine nach dem Zufallsprinzip kryptografisch generierte Zahlenfolge, die zeitlich begrenzt als Referenz dient. Auf dem Backend-Server werden die TEKs in DKs umgewandelt. Zudem wird alle 10 bis 20 Minuten ein RPI generiert - eine temporäre, ebenfalls kryptografisch generierte Zahlenfolge. Diese Zahlenfolge wird aus einem TEK erzeugt und mit anderen Smartphones ausgetauscht, auf denen die App ebenfalls installiert ist und die sich während einer festgesetzten Zeitspanne in der Nähe des betreffenden Smartphones befanden. Die RPIs werden über Bluetooth Low energy empfangen und versendet. Somit gelangen die RPIs auch in Kombination mit der Signalstärke beim Versenden und Empfangen (zur Bestimmung des Abstands zwischen den Anwendern) sowie der Dauer des (Bluetooth-)Kontakts zur Anwendung. Die empfangenen RPIs werden nach 14 Tagen von den Smartphones gelöscht.
Die TEKs, DKs und RPIs sind pseudonymisierte Identifizierungsschlüssel.
Um das Risiko einer Identifizierung der Anwender nach Möglichkeit auszuschließen, wird beim Austausch der RPIs die MAC-Adresse (die eindeutige Hardwarenummer des Bluetooth-Transmitters) des Smartphones in einen nach dem Zufallsprinzip generierten Code umgewandelt - eine Pseudo-MAC-Adresse, die sich ebenso wie die RPIs alle 10 bis 20 Minuten ändert.
Der Validierungscode wird mithilfe einer in der App enthaltenen Funktionalität generiert und erscheint auch in der App. Der Validierungscode wird von der kommunalen Gesundheitsbehörde (GGD) zur Validierung der an die kommunale Gesundheitsbehörde verschickten TEKs verwendet. Die kommunale Gesundheitsbehörde stellt diesen Validierungscode zusammen mit dem Datum des Krankheitsbeginns in das GGD-Portal ein. Zugriff auf dieses GGD-Portal haben ausschließlich Mitarbeiter der GGD. Der Backend-Server akzeptiert nur TEKs von Anwendern, wenn zugleich ein Validierungscode eingegeben wird, der auf diese Weise von der kommunalen Gesundheitsbehörde (GGD) validiert worden ist. Während der Validierungsphase werden IP-Adressen zum Zweck der Verwaltung und Sicherung verarbeitet.

Abgesehen von den DKs, dem Krankheitsbeginn und dem Validierungscode wird auch die IP-Adresse an den Backend-Server übermittelt. Dies ist der Verwendung des Internets und der IP-Technologie eigen. Die IP-Adresse wird getrennt von den anderen Daten gespeichert; somit werden auf dem Backend-Server keine IP-Adressen hinterlegt. Somit lässt sich im Nachhinein nicht mehr feststellen, wer welche Informationen verschickt hat.

### 5. Statistische Informationen
Die mit der App erfassten Daten werden ausschließlich für die in dieser Datenschutzerklärung genannten Zwecke verwendet. Es werden keine statistischen Informationen generiert.

### 6. An wen werden die personenbezogenen Daten weitergeleitet?
Das Versenden und Empfangen der RPIs erfolgt lokal über die Smartphones. Wenn eine Infektion festgestellt worden ist, kann der/die Anwender/in seine oder ihre TEKs zusammen mit einem eindeutigen Validierungscode an den Backend-Server übermitteln. Der Backend-Server untersteht dem CIBG, wobei KPN als Nachunternehmer (Verarbeiter) gilt.
Die kommunale Gesundheitsbehörde (GGD) verarbeitet den Validierungscode mit dem Datum des Krankheitsbeginns im GGD-Portal der App. Zugriff auf dieses Portal haben ausschließlich autorisierte Mitarbeiter der kommunalen Gesundheitsbehörde (GGD).
Die Smartphones anderer Anwender rufen die auf diesem Backend-Server befindlichen DKs regelmäßig - mehrmals täglich - ab.

### 7. Speicherung personenbezogener Daten
Die lokal auf Ihrem  Smartphone gespeicherten Daten werden 14 Tage lang abgelegt. Nach Ablauf dieser 14 Tage werden die fraglichen Daten automatisch und endgültig gelöscht. Sie können die gespeicherten Daten jederzeit auch selbst löschen.
Insofern als Ihre Daten auf dem Backend-Server abgelegt sind, werden die Daten ab dem Zeitpunkt des Hochladens 14 Tage lang gespeichert. Nach Ablauf dieser 14 Tage werden die Daten gelöscht.
Für Verwaltungs- und Sicherungszwecke verarbeitete IP-Adressen werden nach maximal 7 Tagen gelöscht.

### 8. Ihre Rechte bezüglich Ihrer personenbezogenen Daten
Sie haben bestimmte Rechte zur Kontrolle Ihrer personenbezogenen Daten. Diese finden Sie hier auf der Website der niederländischen Datenschutzbehörde.

Da der CoronaMelder gemäß den Ausgangspunkten der Datenminimierung und des Privacy-by-Design-Prinzips gestaltet worden ist, können Sie sich nur beschränkt auf Ihre Rechte aus der DSGVO berufen. Es werden schließlich nur beschränkt Daten verarbeitet. Die Daten sind außerdem nahezu nicht rückverfolgbar und werden nur kurz aufbewahrt. Aus Artikel 11 DSGVO ergibt sich, dass die Rechte aus den Artikeln 15 bis 20 DSGVO nicht anwendbar sind, wenn der für die Verarbeitung Verantwortliche die betroffene Person nicht (mehr) identifizieren kann.    

In der ersten Phase – ehe Anwender TEKs zum Backend-Server hochladen – werden ausschließlich Daten auf den Smartphones von Anwendern von CoronaMelder verarbeitet. Das niederländische Ministerium für Gesundheit, Gemeinwohl und Sport und die kommunalen Gesundheitsbehörden (GGD) haben auf jene Daten keinen Zugriff. In dieser Phase kann also beispielsweise einem Ersuchen auf Änderung oder Löschung von Daten nicht entsprochen werden, wobei selbstverständlich schon gilt, dass diese Daten nach höchstens vierzehn Tagen automatisch von dem Smartphone entfernt werden.
Dank des Privacy-by-Design-Prinzips der App lässt sich auch nach dem Hochladen der TEKs (und später der DKs) nicht mehr feststellen, welche Codes sich auf den infizierten Anwender beziehen. Das niederländische Ministerium für Gesundheit, Gemeinwohl und Sport (VWS) sowie die kommunalen Gesundheitsbehörden (GGD) sind technisch nicht in der Lage, die Codes, die (vorübergehend) auf dem Backend-Server gespeichert sind, mit einem bestimmten Anwender zu verknüpfen, der seine oder ihre TEKs hochgeladen hat.  Angesichts der Unmöglichkeit, den Anwender anhand der Codes zu identifizieren, finden die Rechte aus den Artikeln 15 bis 20 der DSGVO keine Anwendung.
Die Umsetzung der Rechte aus der DSGVO wird also insgesamt nur beschränkt erforderlich sein, da sich die Daten nicht oder nur äußerst beschränkt zu Personen herleiten lassen beziehungsweise da diese Daten wegen der kurzen Aufbewahrungsdauer nicht mehr vorhanden sind. Somit greift Artikel 11 der DSGVO, aus dem sich ergibt, dass die in den Artikeln 15 bis 20 der DSGVO enthaltenen Rechte keine Anwendung finden, wenn sich die betroffenen Personen nicht mehr identifizieren lassen.
Allerdings bietet sich dennoch auch weiterhin die Möglichkeit, einen Antrag auf Wahrnehmung Ihrer Datenschutzrechte einzureichen. Diesen Antrag senden Sie bitte an die für Ihren Wohnort zuständige kommunale Gesundheitsbehörde (GGD). Unter [www.GGD.nl](https://www.ggd.nl) können Sie die Postleitzahl Ihrer Wohnadresse eintragen, um festzustellen, welche kommunale Gesundheitsbehörde (GGD) für Ihren Wohnort zuständig ist. Sofern Sie über keinen Wohnsitz in den Niederlanden verfügen, können Sie die Postleitzahl Ihres Aufenthaltsortes in den Niederlanden eingeben.
Sie sind jederzeit berechtigt, bei der niederländischen Datenschutzbehörde oder bei einem Gericht eine Beschwerde im Zusammenhang mit der Verarbeitung Ihrer personenbezogenen Daten einzureichen. Weitere Informationen zu diesem Thema finden Sie hier.

Kontaktangaben zu dem in Ihrem Wohnort zuständigen Datenschutzverantwortlichen der kommunalen Gesundheitsbehörde (GGD) können Sie der GGD-Website entnehmen.
 [www.GGD.nl](https://www.ggd.nl)

Kontaktangaben zu dem Datenschutzverantwortlichen des niederländischen Ministeriums für Gesundheit, Gemeinwohl und Sport finden Sie auf der Website des Ministeriums.
 [Functionaris voor Gegevensbescherming](https://www.rijksoverheid.nl/ministeries/ministerie-van-volksgezondheid-welzijn-en-sport/avg/contact/functionaris-gegevensbescherming)

### 9. Schutz Ihrer personenbezogenen Daten
Das niederländische Ministerium für Gesundheit, Gemeinwohl und Sport sowie die kommunalen Gesundheitsbehörden (GGD) nehmen den Schutz Ihrer Daten ernst und ergreifen geeignete Maßnahmen, um dem Missbrauch beziehungsweise Verlust, dem unbefugten Zugriff, der unerwünschten Veröffentlichung und der unzulässigen Änderung dieser Daten entgegenzuwirken.

### 10. Änderung der Datenschutzerklärung
Diese Datenschutzerklärung kann geändert werden. In diesem Fall veröffentlichen wir die geänderte Datenschutzerklärung auf unserer Website. Damit erlangt die neue Datenschutzerklärung ihre Wirksamkeit. Zuletzt aktualisiert am: 10. September 2020
