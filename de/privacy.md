---
layout: content
lang: de
showBreadCrumbs: true
title: Datenschutzerklärung zum CoronaMelder
---
## Über den CoronaMelder

Der CoronaMelder (App) ist ein technisches Hilfsmittel, das beim Kampf gegen die Verbreitung des COVID-19-Virus helfen soll. Wenn Sie den CoronaMelder auf Ihrem Smartphone installiert haben, werden Sie informiert, falls Sie sich eine gewisse Zeit lang in der Nähe einer Person aufgehalten haben, die positiv auf COVID-19 getestet wurde, sofern die fragliche Person ebenfalls den CoronaMelder installiert hat. Nachstehend folgt eine kurze Erläuterung darüber, wie der CoronaMelder funktioniert.

Über Bluetooth erkennt die App andere Smartphones, auf denen die App installiert ist. Zur Erkennung der anderen Smartphones werden regelmäßig wechselnde Codes - die so genannten Rolling Proximity Indicators (RPIs) - ausgesendet, die aus zufälligen Zahlenfolgen bestehen. Diese Codes werden aus so genannten Temporary Exposure Keys (TEKs) erzeugt und sind nur jeweils 10 bis 20 Minuten lang gültig. Bei diesen TEKs handelt es sich ebenfalls um beliebige Codes, die einmal täglich nach dem Zufallsprinzip neu generiert und 14 Tage lang auf dem Telefon des Anwenders gespeichert werden.

Wenn sich Ihr Smartphone in der Nähe eines anderen Smartphones befindet, auf dem die App installiert ist, werden die einzelnen RPIs zwischen den Smartphones ausgetauscht und lokal auf ihnen gespeichert. Wenn der Anwender der App positiv auf COVID-19 getestet wurde, kann er dies freiwillig über die App melden. Wird dies so eingestellt, übermittelt die App die in den letzten 14 Tagen erstellten und lokal auf dem Smartphone gespeicherten TEKs an einen Backend-Server. Der Backend-Server akzeptiert die übermittelten TEKs nur dann, wenn der Anwender und die kommunale Gesundheitsbehörde (GGD) den Versand mit einem Validierungscode bestätigt haben. Auf dem Backend-Server werden die eingegangenen TEKs dann in andere Codes - die Diagnosis Keys (DKs) - umgewandelt.

Anschließend stellt der Backend-Server die DKs bereit, sodass sie automatisch von allen Smartphones abgerufen werden können, auf denen die App installiert ist. Sobald Ihr Smartphone die DKs vom Server abgerufen hat, wird die Verbindung zum Server abgebrochen. Dieser automatisierte Prozess wiederholt sich mehrmals täglich, um eventuelle Infektionsgefahren zu aktualisieren. Anschließend berechnet Ihr Smartphone anhand der abgerufenen DKs, ob eine Übereinstimmung mit den einzelnen RPIs anderer Smartphones vorliegt, in deren Nähe sich Ihr Smartphone befunden hat. Unmittelbar danach werden die DKs von Ihrem Smartphone gelöscht.

Wenn es Übereinstimmungen gibt, wird auf der Grundlage gewisser Bewertungsfaktoren festgestellt, ob es sich um einen Risikokontakt gehandelt hat. Sollte dies der Fall sein - anders ausgedrückt, wenn Sie sich in der letzten Zeit in der Nähe einer mit COVID-19 infizierten Person aufgehalten haben - erhalten Sie eine Mitteilung mit einem Hinweis auf Ihre erhöhte Infektionsgefahr. Auch erteilt die App Empfehlungen zum Vorgehen für den Fall, dass Sie eine Warnmeldung erhalten haben.

Der CoronaMelder ist mit Wirkung vom 30. November 2020 mit Warn-Apps anderer europäischer Länder kompatibel. Wenn Sie also den CoronaMelder verwenden und eine Person aus einem anderen EU-Land treffen, die die Corona-Warn-App jenes Landes verwendet, werden die beiden Warn-Apps ihre RPIs austauschen. Dies geschieht auf dieselbe Art und Weise wie zwischen Verwendern des CoronaMelders. Wenn einer von Ihnen anschließend positiv getestet wird und dies über die Warn-App mitteilt, wird die andere Person eine Warnmeldung erhalten.

Die Europäische Kommission hat für den Datenabgleich zwischen den Corona-Warn-Apps aus verschiedenen Ländern eine digitale Infrastruktur eingerichtet, den sogenannten *European Federation Gateway Service* (EFGS). Dieser besteht aus einem gemeinsamen Server, der es ermöglicht, Daten zwischen den verschiedenen Corona-Warn-Apps auszutauschen.

### 1. Wer ist für die Verarbeitung der personenbezogenen Daten verantwortlich?

Die für die Verarbeitung verantwortliche Stelle ist das niederländische Ministerium für Gesundheit, Gemeinwohl und Sport, insofern als bei der Einrichtung, dem europäischen Austausch mit anderen Warn-Apps und der Verwaltung des CoronaMelders personenbezogene Daten verarbeitet werden. Das niederländische Ministerium für Gesundheit, Gemeinwohl und Sport ist gemeinsam mit den zuständigen Behörden anderer teilnehmender Länder der gemeinsame Verantwortliche für den EFGS. Eine aktuelle Übersicht über die teilnehmenden Länder können Sie dem Abschnitt „[Der CoronaMelder und das Ausland](https://coronamelder.nl/nl/faq/13-gebruik-app-uit-ander-land/)“ im FAQ unter CoronaMelder.nl entnehmen.

Insofern als die kommunale Gesundheitsbehörde (GGD) bei der Nachverfolgung der Quellen und Kontakte personenbezogene Daten verwendet, die über die App erfasst werden, gilt die kommunale Gesundheitsbehörde (GGD) Ihrer Region als die für die Verarbeitung verantwortliche Stelle. Unter [www.GGD.nl](https://www.ggd.nl/) können Sie durch Eingabe der Postleitzahl Ihres Wohnorts feststellen, welche kommunale Gesundheitsbehörde (GGD) für Sie zuständig ist. Sofern Sie über keinen Wohnsitz in den Niederlanden verfügen, können Sie die Postleitzahl Ihres Aufenthaltsortes in den Niederlanden eingeben.

### 2. Zu welchem Zweck werden personenbezogene Daten verarbeitet?

Diese App wurde als Ergänzung zur Nachverfolgung der Quellen und Kontakte der kommunalen Gesundheitsbehörde (GGD) entwickelt. Damit sollen Anwender mit erhöhtem Infektionsrisiko schnell und einfach informiert werden, wobei ein sehr hohes Maß an Datenschutz gewährleistet ist.

### 3. Grundlage der Verarbeitung personenbezogener Daten

Mit der App können personenbezogene Daten verarbeitet werden. Grundlage der Verarbeitung personenbezogener Daten ist, kurz gesagt, die Erfüllung einer öffentlichen Aufgabe. Für das niederländische Ministerium für Gesundheit, Gemeinwohl und Sport handelt es sich dabei, kurz gesagt, um die öffentliche Aufgabe, die Bekämpfung von COVID-19 zu leiten und die Instandhaltung und Verbesserung der nationalen Unterstützungsstruktur sicherzustellen.

Für die kommunalen Gesundheitsbehörden (GGD) handelt es sich um die Aufgabe, im Falle von Meldungen einer Infektion mit COVID-19 die Quellen und Kontakte nachzuverfolgen.

Mit der Einführung des CoronaMelders als unterstützendes Instrument zur Nachverfolgung der Quellen und Kontakte werden also die vorstehend genannten öffentlichen Aufgaben des niederländischen Ministeriums für Gesundheit, Gemeinwohl und Sport und der kommunalen Gesundheitsbehörden (GGD) umgesetzt. Der Einsatz des CoronaMelders zur Umsetzung dieser öffentlichen Aufgabe ergibt sich aus Artikel 6d des niederländischen Gesetzes über die öffentliche Gesundheit ([*Wet publieke gezondheid*](https://wetten.overheid.nl/BWBR0024705/2020-10-10)).

Das Herunterladen und die Verwendung des CoronaMelders erfolgt jetzt und in Zukunft auf freiwilliger Grundlage. Das heißt, dass niemand Sie zur Verwendung des CoronaMelders zwingen darf.

### 4. Welche personenbezogenen Daten werden verarbeitet?

Im Rahmen der App werden die folgenden Daten verarbeitet:

- Rolling Proximity Indicators (RPIs)
- Temporary Exposure Keys (TEKs)
- Diagnosis Keys (DKs)
- Pseudo-MAC-Adressen
- Signalstärke und Dauer des Kontakts
- Datum des Krankheitsbeginns
- Validierungscode
- Exposure Risk Value (high, mid, low)
- IP-Adresse

Bei diesen Daten kann es sich um personenbezogene Daten handeln.

Ein TEK ist eine nach dem Zufallsprinzip kryptografisch generierte Zahlenfolge, die zeitlich begrenzt als Referenz dient. Auf der Grundlage des TEK wird alle 10 bis 20 Minuten ein RPI generiert - eine temporäre, ebenfalls kryptografisch generierte Zahlenfolge. Dieser RPI wird mit anderen Smartphones ausgetauscht, auf denen die App ebenfalls installiert ist und die sich während einer festgesetzten Zeitspanne in der Nähe des betreffenden Smartphones befanden. Die RPIs werden über Bluetooth Low energy empfangen und versendet. Somit gelangen die RPIs auch in Kombination mit der Signalstärke beim Versenden und Empfangen (zur Bestimmung des Abstands zwischen den Anwendern) sowie der Dauer des (Bluetooth-) Kontakts zur Anwendung. Die empfangenen RPIs werden nach 14 Tagen von den Smartphones gelöscht.

Die TEKs, DKs und RPIs sind pseudonymisierte Identifizierungsschlüssel.

Um das Risiko einer Identifizierung der Anwender nach Möglichkeit auszuschließen, wird beim Austausch der RPIs die MAC-Adresse (die eindeutige Hardwarenummer des Bluetooth-Transmitters) des Smartphones in einen nach dem Zufallsprinzip generierten Code umgewandelt - eine Pseudo-MAC-Adresse, die sich - ebenso wie die RPIs - alle 10 bis 20 Minuten ändert.

Der Validierungscode wird mithilfe einer in der App enthaltenen Funktionalität generiert und erscheint auch in der App. Der Validierungscode wird von der kommunalen Gesundheitsbehörde (GGD) zur Validierung der an die kommunale Gesundheitsbehörde verschickten TEKs verwendet. Die kommunale Gesundheitsbehörde stellt diesen Validierungscode zusammen mit dem Datum des Krankheitsbeginns in das GGD-Portal ein. Zugriff auf dieses GGD-Portal haben ausschließlich Mitarbeiter der GGD. Der Backend-Server akzeptiert nur TEKs von Anwendern, wenn zugleich ein Validierungscode eingegeben wird, der auf diese Weise von der kommunalen Gesundheitsbehörde (GGD) validiert worden ist. Auf dem Backend-Server werden die TEKs in DKs umgewandelt.

Abgesehen von den DKs, dem Krankheitsbeginn und dem Validierungscode wird auch die IP-Adresse an den Backend-Server übermittelt. Dies ist inhärent mit der Verwendung des Internets und der IP-Technologie verbunden. Die IP-Adresse wird ausschließlich zu Verwaltungs- und Sicherungszwecken verarbeitet. Die IP-Adresse wird getrennt von den anderen Daten gespeichert; somit werden auf dem Backend-Server keine IP-Adressen hinterlegt. Somit lässt sich im Nachhinein nicht mehr feststellen, wer welche Informationen verschickt hat.

### 5. Statistische Informationen

Die mit der App erfassten Daten werden ausschließlich für die in dieser Datenschutzerklärung genannten Zwecke verwendet. 

### 6. An wen werden die personenbezogenen Daten weitergeleitet?

Das Versenden und Empfangen der RPIs erfolgt lokal über die Smartphones. Wenn eine Infektion festgestellt worden ist, kann der/die Anwender/in seine oder ihre TEKs zusammen mit einem eindeutigen Validierungscode an den Backend-Server übermitteln. Der Backend-Server untersteht dem CIBG (Bestandteil des niederländischen Ministeriums für Gesundheit, Gemeinwohl und Sport), wobei KPN als Nachunternehmer (Verarbeiter) gilt.

Die kommunale Gesundheitsbehörde (GGD) verarbeitet den Validierungscode mit dem Datum des Krankheitsbeginns im GGD-Portal der App. Zugriff auf dieses Portal haben ausschließlich autorisierte Mitarbeiter der kommunalen Gesundheitsbehörde (GGD).

Die DKs werden über den *European Federation Gateway Service* (EFGS) mit anderen europäischen Ländern, die eine App mit einem ähnlichen Sicherheitsniveau haben und sich dem EFGS angeschlossen haben, ausgetauscht. Die Teilnahme am EFGS erfolgt schrittweise. Eine aktuelle Übersicht über die teilnehmenden Länder können Sie dem Abschnitt „[Der CoronaMelder und das Ausland](https://coronamelder.nl/nl/faq/13-gebruik-app-uit-ander-land/)“ im FAQ unter CoronaMelder.nl entnehmen. Der EFGS wird von der Europäischen Kommission verwaltet (Auftragsverarbeiter). Die technischen und organisatorischen Voraussetzungen zur Teilnahme am EFGS finden sich im [Europäischen Durchführungsbeschluss hinsichtlich des grenzüberschreitenden Datenaustausch](https://eur-lex.europa.eu/eli/dec_impl/2020/1023/oj)s. Weitere Informationen zur Interoperabilität können Sie finden unter: https://ec.europa.eu/health/ehealth/covid-19.

Die Smartphones anderer Anwender rufen die auf diesem Backend-Server befindlichen DKs regelmäßig - mehrmals täglich - ab.

### 7. Speicherung personenbezogener Daten

Die lokal auf Ihrem Smartphone gespeicherten Daten werden 14 Tage lang abgelegt. Nach Ablauf dieser 14 Tage werden die fraglichen Daten automatisch und endgültig gelöscht. Sie können die gespeicherten Daten jederzeit auch selbst löschen.

Insofern als Ihre Daten auf dem Backend-Server/EFGS abgelegt sind, werden die Daten ab dem Zeitpunkt des Hochladens 14 Tage lang gespeichert. Nach Ablauf dieser 14 Tage werden die Daten gelöscht.

Für Verwaltungs- und Sicherungszwecke verarbeitete IP-Adressen werden nach maximal 7 Tagen gelöscht.

### 8. Ihre Rechte bezüglich Ihrer personenbezogenen Daten

Sie haben bestimmte Rechte zur Kontrolle Ihrer personenbezogenen Daten. Diese finden Sie [hier](https://autoriteitpersoonsgegevens.nl/nl/onderwerpen/algemene-informatie-avg/rechten-van-betrokkenen) auf der Website der niederländischen Datenschutzbehörde.

Da der CoronaMelder gemäß den Ausgangspunkten der Datenminimierung und des *Privacy by Design* - Prinzips gestaltet worden ist, können Sie sich nur beschränkt auf Ihre Rechte aus der DSGVO berufen. Es werden schließlich nur beschränkt Daten verarbeitet. Die Daten sind außerdem nahezu nicht rückverfolgbar und werden nur kurz aufbewahrt. Aus Artikel 11 DSGVO ergibt sich, dass die Rechte aus den Artikeln 15 bis 20 DSGVO nicht anwendbar sind, wenn der für die Verarbeitung Verantwortliche die betroffene Person nicht (mehr) identifizieren kann.

In der ersten Phase – ehe Anwender TEKs zum Backend-Server hochladen – werden ausschließlich Daten auf den Smartphones von Anwendern des CoronaMelders verarbeitet. Das niederländische Ministerium für Gesundheit, Gemeinwohl und Sport und die kommunalen Gesundheitsbehörden (GGD) haben auf jene Daten keinen Zugriff. In dieser Phase kann also beispielsweise einem Ersuchen auf Änderung oder Löschung von Daten nicht entsprochen werden, wobei selbstverständlich schon gilt, dass diese Daten nach höchstens vierzehn Tagen automatisch von dem Smartphone entfernt werden.

Dank des *Privacy by Design* - Prinzips der App lässt sich auch nach dem Hochladen der TEKs (und später der DKs) nicht mehr feststellen, welche Codes sich auf den infizierten Anwender beziehen. Das niederländische Ministerium für Gesundheit, Gemeinwohl und Sport (VWS) sowie die kommunalen Gesundheitsbehörden (GGD) sind technisch nicht in der Lage, die Codes, die (vorübergehend) auf dem Backend-Server gespeichert sind, mit einem bestimmten Anwender zu verknüpfen, der seine oder ihre TEKs hochgeladen hat. Angesichts der Unmöglichkeit, den Anwender anhand der Codes zu identifizieren, finden die Rechte aus den Artikeln 15 bis 20 der DSGVO keine Anwendung.

Die Umsetzung der Rechte aus der DSGVO wird also insgesamt nur beschränkt erforderlich sein, da sich die Daten nicht oder nur äußerst beschränkt zu Personen herleiten lassen beziehungsweise da diese Daten wegen der kurzen Aufbewahrungsdauer nicht mehr vorhanden sind. Somit greift Artikel 11 der DSGVO, aus dem sich ergibt, dass die in den Artikeln 15 bis 20 der DSGVO enthaltenden Rechte keine Anwendung finden, wenn sich die betroffenen Personen nicht mehr identifizieren lassen.

Allerdings bietet sich dennoch auch weiterhin die Möglichkeit, einen Antrag auf Wahrnehmung Ihrer Datenschutzrechte einzureichen. Diesen Antrag senden Sie bitte an die für Ihren Wohnort zuständige kommunale Gesundheitsbehörde (GGD). Unter [www.GGD.nl](https://www.ggd.nl/) können Sie die Postleitzahl Ihrer Wohnadresse eintragen, um festzustellen, welche kommunale Gesundheitsbehörde (GGD) für Ihren Wohnort zuständig ist. Sofern Sie über keinen Wohnsitz in den Niederlanden verfügen, können Sie die Postleitzahl Ihres Aufenthaltsortes in den Niederlanden eingeben.

Sie sind jederzeit berechtigt, bei der niederländischen Datenschutzbehörde oder bei einem Gericht eine Beschwerde im Zusammenhang mit der Verarbeitung Ihrer personenbezogenen Daten einzureichen. Weitere Informationen zu diesem Thema finden Sie [hier](https://autoriteitpersoonsgegevens.nl/nl/zelf-doen/gebruik-uw-privacyrechten/klacht-melden-bij-de-ap).

Kontaktangaben zu dem in Ihrem Wohnort zuständigen Datenschutzverantwortlichen der kommunalen Gesundheitsbehörde (GGD) können Sie der GGD-Website entnehmen.

Kontaktangaben zu dem Datenschutzverantwortlichen des niederländischen Ministeriums für Gesundheit, Gemeinwohl und Sport finden Sie auf der Website des Ministeriums.

### 9. Schutz Ihrer personenbezogenen Daten

Das niederländische Ministerium für Gesundheit, Gemeinwohl und Sport sowie die kommunalen Gesundheitsbehörden (GGD) nehmen den Schutz Ihrer Daten ernst und ergreifen geeignete Maßnahmen, um dem Missbrauch beziehungsweise Verlust, dem unbefugten Zugriff, der unerwünschten Veröffentlichung und der unzulässigen Änderung dieser Daten entgegenzuwirken.

### 10. Änderung der Datenschutzerklärung

Diese Datenschutzerklärung kann geändert werden. In diesem Fall veröffentlichen wir die geänderte Datenschutzerklärung auf unserer Website. Damit erlangt die neue Datenschutzerklärung ihre Wirksamkeit. Zuletzt aktualisiert am: 15. März 2021.
