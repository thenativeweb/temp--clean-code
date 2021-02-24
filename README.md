# Clean code

## Wozu braucht man Clean Code?

- Lesbarkeit, Verständlichkeit, Nachvollziehbarkeit
- Ziel: Code warten und weiterentwickeln zu können
- Für Deine Kolleginnen und Kollegen, im Zweifelsfall für Dein zukünftiges Ich


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
- Feind: Zeitdruck
