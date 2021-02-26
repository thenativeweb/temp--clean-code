# Clean code

## Wozu braucht man Clean Code?

- Lesbarkeit, Verständlichkeit, Nachvollziehbarkeit
- Ziel: Code warten und weiterentwickeln zu können
- Für Deine Kolleginnen und Kollegen, im Zweifelsfall für Dein zukünftiges Ich


## Linter

- JSLint (historisch)
  - Douglas Crockford ("JavaScript: The Good Parts")
- JSHint (historisch)
  - Etwas umfangreicher, etwas höflicher, …
- ESLint
  - Nicolas C. Zakas
  - Plugin-basiert (Regeln sind Plugins, Parser sind Plugins, …)
  - Konfiguration zB https://www.npmjs.com/package/eslint-config-es
- TSLint (deprecated => ESLint)
  - Palantir
  - Fork von ESLint für TypeScript


## Dokumentation

- Vier Arten von Dokumentation
  - Tutorial (Lernen)
  - Konzepte (Verstehen)
  - Anleitungen (Problemlösung)
  - Referenz (Informationen)
- Zielgruppen
  - Anwenderinnen und Anwender
  - Entwicklerinnen und Entwickler
- Aspekte
  - Versionen
  - Sprachen (DE, EN, FR, …)
  - Sprachen (JavaScript, TypeScript, Go, …)
- Technische Herausforderungen
  - Suche (Stemming, Verschlagwortung, …)
- Code + Dokumentation nah beieinander
  - Doku mit im Repository
  - Offenes Format
    - Beschränkung bei Formatierung (Fokus auf Inhalt)
    - Bilder, Tabellen, Videos, Audio, …
    - Markdown


## Leitplanken und Prinzipien

- Dinge klein, kompakt und überschaubar halten!
  - Bezieht sich auf Code innerhalb von Dateien
    - 1 Datei enthält nur 1 exportiertes Etwas
    - 1 Datei sollte nicht länger als eine Bildschirmseite sein
  - Bezieht sich auch auf Datei- und Verzeichnisstrukturen
- Pfadfinderregel ("Hinterlasse einen Ort in einem besseren Zustand, als Du ihn vorgefunden hast")
  - Wenn etwas nicht passt, direkt aufräumen
  - Mit gutem Beispiel vorangehen
- Reflektieren
  - Einen Schritt zurücktreten, innerhalten und das große Ganze überdenken
  - Den "Problemlösungsmodus" mal verlassen und hinterfragen, was man da gerade macht
- Code-Reviews / Pair-Programming
  - Missstände ansprechen
  - Feedback einholen
  - Von Anfang an "richtig" machen (richtig im Sinne von, explizit, man hat darüber nachgedacht, bewusste Entscheidungen)
- Keep it simple and stupid (KISS)
  - Einfach, leichtgewichtig, schlank, strukturiert, elegant, schön, …
  - Messbar?
    - Lines of Code (LOC) => naja
    - Halstead-Metrik => naja
    - Zyklische Komplexität => naja
    - Code Coverage (Testabdeckung) => naja
  - Metrik optimieren statt Code optimieren?
  - Negative Aussage ist verlässlich, positive Aussage sagt praktisch nichts aus
- Don't Repeat Yourself (DRY)
  - Mehrfache auftretende Code-Blöcke auslagern, in Funktionen extrahieren
  - Direkt Tests dafür schreiben
- Automatisierte Tests
  - Ziel: Sicherheitsnetz für Änderungen am Code (wenn es vorher lief, dann auch danach)
  - Test Driven Development (TDD): Baby-Steps
  - Nicht nur Happy-Day-Fall testen, insbesondere auch Fehler- und auch Grenzfälle
- Versionsverwaltung
- Coderichtlinien
- Single Level of Abstraction (SLA)
  - Geschichte erzählen, auf einer Flughöhe unterwegs sein
  - Erst in Kommentare skizzieren, dann implementieren
- Iteratives Vorgehen
  - Es ist besser, 80% zu 100% zu haben als umgekehrt
  - Kleine Lösungen, die für sich schon einen Mehrwert schaffen
- Namensgebung
  - Kein `hfkhweru`, kein `i`, kein `viewModelDe`
  - Versuchen, fachliche und zutreffende Namen zu finden
    - Wenn es eine Fachsprache gibt, sich an der Fachsprache orientieren
- Broken-Windows-Theorie
  - Fehler sofort beheben, nicht aufschieben
  - Kurzfristig teuer oder langfristig richtig teuer
  - Nicht behaupten, man wäre "fertig", wenn man weiß, dass es Dinge gibt, die noch nicht fertig sind
- Issue-Tracking
  - Wenn Fehler bekannt sind, sollte man sich die notieren
  - Keine neuen Features, bevor nicht alle Bugs behoben sind
- Weiterbildung
  - Lesen, lesen, lesen, … (Zeitschriften, Bücher, Blogs, Artikel, YouTube, Podcasts, …)
  - Auf dem Laufenden bleiben (Zeitschriften, Blogs, Twitter, Hacker News, YouTube, Podcasts, …)
  - Austausch (Konferenzen, Meetups, StackOverflow, …)
  - Gemeinsam entwickeln (Pair-Programming, Reviews, …)
  - Proaktiv Wissen vermitteln und Erfahrung weitergeben (Links, Ideen, …)
- Feind: Zeitdruck


## Weiterführendes

- https://www.thenativeweb.io/
- https://www.youtube.com/channel/UC0BtS97KQR7I4Xqa9VYlkvg
