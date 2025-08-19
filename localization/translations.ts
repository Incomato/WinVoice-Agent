export const translations = {
  en: {
    sidebar: {
      title: 'WinVoice Agent',
      subtitle: 'Local-First Mode',
      nav: {
        chat: 'Agent Chat',
        logs: 'Audit Logs',
        policies: 'Security Policy',
      },
      status: {
        title: 'System Status',
        stt: 'STT (Offline)',
        tts: 'TTS (Offline)',
        nlu: 'NLU (Local)',
        online: 'Online',
        offline: 'Offline',
      },
      language: 'Language',
    },
    chat: {
      initialMessage: 'WinVoice Agent initialized. Ready for your instructions. Type `help` to see examples.',
      placeholder: "Enter command (e.g., 'start Notepad')",
      processing: 'Processing...',
      system: {
        confirmed: 'Action confirmed. Executing...',
        cancelled: 'Action cancelled.',
      }
    },
    confirmationModal: {
      title: 'Confirm Action',
      areYouSure: 'Are you sure you want to proceed?',
      intent: 'Intent',
      action: 'Action',
      parameters: 'Parameters',
      cancel: 'Cancel',
      confirm: 'Confirm & Execute',
    },
    auditLog: {
      loading: 'Loading audit logs...',
      title: 'Audit Log',
      header: {
        timestamp: 'Timestamp',
        intent: 'Intent',
        action: 'Action',
        parameters: 'Parameters',
        result: 'Result',
        details: 'Details',
      },
    },
    policy: {
      loading: 'Loading security policy...',
      error: 'Could not load policy.',
      title: 'Security Policy',
      description: 'This is a read-only view of the active security whitelist. Only actions defined here are permitted.',
      allowedApps: 'Allowed Applications',
      allowedPowershell: 'Allowed PowerShell Commands',
      allowedReadPaths: 'Allowed File Paths (Read)',
      allowedWritePaths: 'Allowed File Paths (Write)',
      allowedUris: 'Allowed Settings URIs',
    },
    api: {
      help: `
**Command Examples:**

- **Apps:** "start Notepad", "close Calculator"
- **Window Management:** "maximize", "minimize", "snap window right"
- **Explorer & Taskbar:** "open explorer", "show desktop"
- **Browser Control:** "open new tab", "close tab" (confirms)
- **Mouse Control:** "move mouse to top left", "click", "double click", "scroll down"
- **Text Input:** 'type "Hello World"', 'press control a'
- **Web Browsing:** "open https://google.com", "search for cute cat pictures"
- **Files:** "create folder 'Projects' on Desktop", "delete file 'temp.txt' from Desktop" (confirms)
- **System:** "set volume to 50%", "lock screen", "shutdown computer" (confirms)
- **PowerShell:** "show running processes" (confirms)
`,
      summary: {
        app: {
          start: "I will start the application '{app_name}'.",
          close: "I will close the application '{app_name}'.",
        },
        window: {
          maximize: 'I will maximize the active window.',
          minimize: 'I will minimize the active window.',
          snap: 'I will snap the active window to the {direction}.'
        },
        explorer: {
          open: 'I will open a new Windows Explorer window.'
        },
        taskbar: {
          show_desktop: 'I will show the desktop.'
        },
        browser: {
          new_tab: 'I will open a new tab in your browser.',
          close_tab: 'I will close the current tab in your browser.'
        },
        mouse: {
          move_corner: 'I will move the mouse to the {corner} of the screen.',
          click: 'I will perform a {button} click.',
          double_click: 'I will perform a double click.',
          scroll: 'I will scroll {direction}.',
        },
        input: {
          type_text: 'I will type the text: "{text}".',
          press_keys: 'I will press the key combination: {keys}.'
        },
        web: {
          open_url: "I will open the URL '{url}' in your default browser.",
          search: "I will search for '{query}' on Google.",
        },
        file: {
          delete: "I will move the file at '{path}' to the recycle bin.",
          create_folder: "I will create the folder '{folderName}' in '{location}'.",
        },
        system: {
          set_volume: 'I will set the system volume to {level}%.',
          take_screenshot: 'I will take a screenshot of the main screen and save it to the Desktop.',
          lock_screen: 'I will lock the screen.',
          shutdown: 'I will shut down the computer. This is a critical action.',
          restart: 'I will restart the computer. This is a critical action.',
        },
        powershell: {
          execute: "I will execute the PowerShell command 'get-process' to list running processes.",
        },
      },
      error: {
        unknownCommand: 'Command not understood. Type `help` for examples.',
        unexpected: 'An unexpected error occurred.',
      },
      execute: {
        dryRun: "[DRY RUN] Action '{action}' with parameters {params} would have been executed.",
        startError: "Error starting {app_name}: Application not found.",
        success: "Action '{action}' executed successfully.",
      },
      log: {
        app: { start: { success: 'Application "{app_name}" started successfully.' } },
        system: { 
          set_volume: { success: 'Volume set to {level}%.' },
          shutdown: { success: 'Shutdown command executed successfully.' },
        },
        file: { delete: { failure: 'File not found.' } },
        mouse: { move: { success: 'Mouse moved to {position}.' } },
        web: { search: { success: 'Performed web search for "{query}".' } },
        explorer: { open: { success: 'Opened a new Explorer window.' } },
        browser: { new_tab: { success: 'Opened a new browser tab.' } }
      },
    },
  },
  de: {
    sidebar: {
      title: 'WinVoice Agent',
      subtitle: 'Lokal-First Modus',
      nav: {
        chat: 'Agent-Chat',
        logs: 'Audit-Logs',
        policies: 'Sicherheits-Policy',
      },
      status: {
        title: 'Systemstatus',
        stt: 'STT (Offline)',
        tts: 'TTS (Offline)',
        nlu: 'NLU (Lokal)',
        online: 'Online',
        offline: 'Offline',
      },
      language: 'Sprache',
    },
    chat: {
      initialMessage: 'WinVoice Agent initialisiert. Bereit für Ihre Anweisungen. Geben Sie `hilfe` ein, um Beispiele zu sehen.',
      placeholder: "Befehl eingeben (z.B. 'starte Notepad')",
      processing: 'Verarbeite...',
      system: {
        confirmed: 'Aktion bestätigt. Führe aus...',
        cancelled: 'Aktion abgebrochen.',
      }
    },
    confirmationModal: {
      title: 'Aktion bestätigen',
      areYouSure: 'Sind Sie sicher, dass Sie fortfahren möchten?',
      intent: 'Intent',
      action: 'Aktion',
      parameters: 'Parameter',
      cancel: 'Abbrechen',
      confirm: 'Bestätigen & Ausführen',
    },
    auditLog: {
      loading: 'Lade Audit-Logs...',
      title: 'Audit-Log',
      header: {
        timestamp: 'Zeitstempel',
        intent: 'Intent',
        action: 'Aktion',
        parameters: 'Parameter',
        result: 'Ergebnis',
        details: 'Details',
      },
    },
    policy: {
      loading: 'Lade Sicherheits-Policy...',
      error: 'Policy konnte nicht geladen werden.',
      title: 'Sicherheits-Policy',
      description: 'Dies ist eine schreibgeschützte Ansicht der aktiven Sicherheits-Whitelist. Nur hier definierte Aktionen sind erlaubt.',
      allowedApps: 'Erlaubte Anwendungen',
      allowedPowershell: 'Erlaubte PowerShell-Befehle',
      allowedReadPaths: 'Erlaubte Dateipfade (Lesen)',
      allowedWritePaths: 'Erlaubte Dateipfade (Schreiben)',
      allowedUris: 'Erlaubte Einstellungs-URIs',
    },
    api: {
      help: `
**Beispiele für Befehle:**

- **Apps:** "starte Notepad", "schließe Rechner"
- **Fensterverwaltung:** "maximiere", "minimiere", "docke Fenster rechts an"
- **Explorer & Taskleiste:** "öffne Explorer", "zeige Desktop"
- **Browser-Steuerung:** "öffne neuen Tab", "schließe Tab" (bestätigt)
- **Maussteuerung:** "bewege Maus nach oben links", "klick", "doppelklick", "scrolle nach unten"
- **Texteingabe:** 'tippe "Hallo Welt"', 'drücke steuerung a'
- **Web-Browsing:** "öffne https://google.de", "suche nach süßen Katzenbildern"
- **Dateien:** "erstelle Ordner 'Projekte' auf dem Desktop", "lösche Datei 'temp.txt' vom Desktop" (bestätigt)
- **System:** "setze Lautstärke auf 50%", "sperre den Bildschirm", "fahre den Computer herunter" (bestätigt)
- **PowerShell:** "zeige laufende Prozesse" (bestätigt)
`,
      summary: {
        app: {
          start: "Ich werde die Anwendung '{app_name}' starten.",
          close: "Ich werde die Anwendung '{app_name}' beenden.",
        },
        window: {
          maximize: 'Ich werde das aktive Fenster maximieren.',
          minimize: 'Ich werde das aktive Fenster minimieren.',
          snap: 'Ich werde das aktive Fenster nach {direction} andocken.'
        },
        explorer: {
          open: 'Ich werde ein neues Windows Explorer-Fenster öffnen.'
        },
        taskbar: {
          show_desktop: 'Ich werde den Desktop anzeigen.'
        },
        browser: {
          new_tab: 'Ich werde einen neuen Tab im Browser öffnen.',
          close_tab: 'Ich werde den aktuellen Tab im Browser schließen.'
        },
        mouse: {
          move_corner: 'Ich werde die Maus in die {corner} Bildschirmecke bewegen.',
          click: 'Ich werde einen {button}klick ausführen.',
          double_click: 'Ich werde einen Doppelklick ausführen.',
          scroll: 'Ich werde nach {direction} scrollen.',
        },
        input: {
          type_text: 'Ich werde den Text tippen: "{text}".',
          press_keys: 'Ich werde die Tastenkombination drücken: {keys}.'
        },
        web: {
          open_url: "Ich werde die URL '{url}' im Standardbrowser öffnen.",
          search: "Ich werde auf Google nach '{query}' suchen.",
        },
        file: {
          delete: "Ich werde die Datei unter '{path}' in den Papierkorb verschieben.",
          create_folder: "Ich werde den Ordner '{folderName}' in '{location}' erstellen.",
        },
        system: {
          set_volume: 'Ich werde die Systemlautstärke auf {level}% setzen.',
          take_screenshot: 'Ich werde einen Screenshot des Hauptbildschirms erstellen und auf dem Desktop speichern.',
          lock_screen: 'Ich werde den Bildschirm sperren.',
          shutdown: 'Ich werde den Computer herunterfahren. Dies ist eine kritische Aktion.',
          restart: 'Ich werde den Computer neustarten. Dies ist eine kritische Aktion.',
        },
        powershell: {
          execute: "Ich werde den PowerShell-Befehl 'get-process' ausführen, um laufende Prozesse aufzulisten.",
        },
      },
      error: {
        unknownCommand: 'Befehl nicht verstanden. Geben Sie `hilfe` für Beispiele ein.',
        unexpected: 'Ein unerwarteter Fehler ist aufgetreten.',
      },
      execute: {
        dryRun: "[DRY RUN] Aktion '{action}' mit Parametern {params} wäre ausgeführt worden.",
        startError: "Fehler beim Starten von {app_name}: Anwendung nicht gefunden.",
        success: "Aktion '{action}' erfolgreich ausgeführt.",
      },
      log: {
        app: { start: { success: 'Anwendung "{app_name}" erfolgreich gestartet.' } },
        system: {
          set_volume: { success: 'Lautstärke auf {level}% gesetzt.' },
          shutdown: { success: 'Befehl zum Herunterfahren erfolgreich ausgeführt.' },
        },
        file: { delete: { failure: 'Datei nicht gefunden.' } },
        mouse: { move: { success: 'Maus nach {position} bewegt.' } },
        web: { search: { success: 'Websuche nach "{query}" durchgeführt.' } },
        explorer: { open: { success: 'Neues Explorer-Fenster geöffnet.' } },
        browser: { new_tab: { success: 'Neuen Browser-Tab geöffnet.' } }
      },
    },
  },
  it: {
    sidebar: {
      title: 'Agente WinVoice',
      subtitle: 'Modalità Locale-Prima',
      nav: {
        chat: 'Chat Agente',
        logs: 'Log di Audit',
        policies: 'Policy di Sicurezza',
      },
      status: {
        title: 'Stato del Sistema',
        stt: 'STT (Offline)',
        tts: 'TTS (Offline)',
        nlu: 'NLU (Locale)',
        online: 'Online',
        offline: 'Offline',
      },
      language: 'Lingua',
    },
    chat: {
      initialMessage: 'Agente WinVoice inizializzato. Pronto per le tue istruzioni. Digita `aiuto` per vedere esempi.',
      placeholder: "Inserisci comando (es. 'avvia Blocco note')",
      processing: 'Elaborazione...',
      system: {
        confirmed: 'Azione confermata. In esecuzione...',
        cancelled: 'Azione annullata.',
      }
    },
    confirmationModal: {
      title: 'Conferma Azione',
      areYouSure: 'Sei sicuro di voler procedere?',
      intent: 'Intento',
      action: 'Azione',
      parameters: 'Parametri',
      cancel: 'Annulla',
      confirm: 'Conferma ed Esegui',
    },
    auditLog: {
      loading: 'Caricamento log di audit...',
      title: 'Log di Audit',
      header: {
        timestamp: 'Timestamp',
        intent: 'Intento',
        action: 'Azione',
        parameters: 'Parametri',
        result: 'Risultato',
        details: 'Dettagli',
      },
    },
    policy: {
      loading: 'Caricamento policy di sicurezza...',
      error: 'Impossibile caricare la policy.',
      title: 'Policy di Sicurezza',
      description: 'Questa è una vista di sola lettura della whitelist di sicurezza attiva. Sono consentite solo le azioni definite qui.',
      allowedApps: 'Applicazioni Consentite',
      allowedPowershell: 'Comandi PowerShell Consentiti',
      allowedReadPaths: 'Percorsi File Consentiti (Lettura)',
      allowedWritePaths: 'Percorsi File Consentiti (Scrittura)',
      allowedUris: 'URI Impostazioni Consentiti',
    },
    api: {
      help: `
**Esempi di Comandi:**

- **App:** "avvia Blocco note", "chiudi Calcolatrice"
- **Gestione Finestre:** "massimizza", "minimizza", "ancora finestra a destra"
- **Explorer & Barra delle Applicazioni:** "apri esplora risorse", "mostra desktop"
- **Controllo Browser:** "apri nuova scheda", "chiudi scheda" (conferma)
- **Controllo Mouse:** "sposta il mouse in alto a sinistra", "clic", "doppio clic", "scorri verso il basso"
- **Input Testo:** 'scrivi "Ciao Mondo"', 'premi control a'
- **Navigazione Web:** "apri https://google.it", "cerca immagini di gattini carini"
- **File:** "crea cartella 'Progetti' sul Desktop", "elimina file 'temp.txt' dal Desktop" (conferma)
- **Sistema:** "imposta volume a 50%", "blocca schermo", "spegni il computer" (conferma)
- **PowerShell:** "mostra processi in esecuzione" (conferma)
`,
      summary: {
        app: {
          start: "Avvierò l'applicazione '{app_name}'.",
          close: "Chiuderò l'applicazione '{app_name}'.",
        },
        window: {
          maximize: 'Massimizzerò la finestra attiva.',
          minimize: 'Ridurrà a icona la finestra attiva.',
          snap: 'Ancorerò la finestra attiva a {direction}.'
        },
        explorer: {
          open: 'Aprirò una nuova finestra di Esplora Risorse.'
        },
        taskbar: {
          show_desktop: 'Mostrerò il desktop.'
        },
        browser: {
          new_tab: 'Aprirò una nuova scheda nel browser.',
          close_tab: 'Chiuderò la scheda corrente nel browser.'
        },
        mouse: {
          move_corner: "Sposterò il mouse nell'angolo {corner} dello schermo.",
          click: 'Eseguirò un {button} clic.',
          double_click: 'Eseguirò un doppio clic.',
          scroll: 'Scorrerò verso {direction}.',
        },
        input: {
          type_text: 'Digiterò il testo: "{text}".',
          press_keys: 'Premerò la combinazione di tasti: {keys}.'
        },
        web: {
          open_url: "Aprirò l'URL '{url}' nel tuo browser predefinito.",
          search: "Cercherò '{query}' su Google.",
        },
        file: {
          delete: "Sposterò il file in '{path}' nel cestino.",
          create_folder: "Creerò la cartella '{folderName}' in '{location}'.",
        },
        system: {
          set_volume: 'Imposterò il volume di sistema al {level}%.',
          take_screenshot: 'Farò uno screenshot dello schermo principale e lo salverò sul Desktop.',
          lock_screen: 'Bloccherò lo schermo.',
          shutdown: 'Spegnerò il computer. Questa è un\'azione critica.',
          restart: 'Riavvierò il computer. Questa è un\'azione critica.',
        },
        powershell: {
          execute: "Eseguirò il comando PowerShell 'get-process' per elencare i processi in esecuzione.",
        },
      },
      error: {
        unknownCommand: 'Comando non riconosciuto. Digita `aiuto` per esempi.',
        unexpected: 'Si è verificato un errore imprevisto.',
      },
      execute: {
        dryRun: "[DRY RUN] L'azione '{action}' con parametri {params} sarebbe stata eseguita.",
        startError: "Errore durante l'avvio di {app_name}: Applicazione non trovata.",
        success: "Azione '{action}' eseguita con successo.",
      },
      log: {
        app: { start: { success: 'Applicazione "{app_name}" avviata con successo.' } },
        system: {
          set_volume: { success: 'Volume impostato al {level}%.' },
          shutdown: { success: 'Comando di spegnimento eseguito con successo.' },
        },
        file: { delete: { failure: 'File non trovato.' } },
        mouse: { move: { success: 'Mouse spostato in {position}.' } },
        web: { search: { success: 'Eseguita ricerca web per "{query}".' } },
        explorer: { open: { success: 'Aperta una nuova finestra di Esplora Risorse.' } },
        browser: { new_tab: { success: 'Aperta una nuova scheda del browser.' } }
      },
    },
  },
  fr: {
    sidebar: {
      title: 'Agent WinVoice',
      subtitle: 'Mode Local-First',
      nav: {
        chat: 'Chat de l\'Agent',
        logs: 'Journaux d\'Audit',
        policies: 'Politique de Sécurité',
      },
      status: {
        title: 'État du Système',
        stt: 'STT (Hors ligne)',
        tts: 'TTS (Hors ligne)',
        nlu: 'NLU (Local)',
        online: 'En ligne',
        offline: 'Hors ligne',
      },
      language: 'Langue',
    },
    chat: {
      initialMessage: 'Agent WinVoice initialisé. Prêt pour vos instructions. Tapez `aide` pour voir des exemples.',
      placeholder: "Entrez une commande (ex: 'lance Notepad')",
      processing: 'Traitement...',
      system: {
        confirmed: 'Action confirmée. Exécution...',
        cancelled: 'Action annulée.',
      }
    },
    confirmationModal: {
      title: 'Confirmer l\'Action',
      areYouSure: 'Êtes-vous sûr de vouloir continuer ?',
      intent: 'Intention',
      action: 'Action',
      parameters: 'Paramètres',
      cancel: 'Annuler',
      confirm: 'Confirmer & Exécuter',
    },
    auditLog: {
      loading: 'Chargement des journaux d\'audit...',
      title: 'Journal d\'Audit',
      header: {
        timestamp: 'Horodatage',
        intent: 'Intention',
        action: 'Action',
        parameters: 'Paramètres',
        result: 'Résultat',
        details: 'Détails',
      },
    },
    policy: {
      loading: 'Chargement de la politique de sécurité...',
      error: 'Impossible de charger la politique.',
      title: 'Politique de Sécurité',
      description: 'Ceci est une vue en lecture seule de la liste blanche de sécurité active. Seules les actions définies ici sont autorisées.',
      allowedApps: 'Applications Autorisées',
      allowedPowershell: 'Commandes PowerShell Autorisées',
      allowedReadPaths: 'Chemins de Fichiers Autorisés (Lecture)',
      allowedWritePaths: 'Chemins de Fichiers Autorisés (Écriture)',
      allowedUris: 'URIs de Paramètres Autorisés',
    },
    api: {
      help: `
**Exemples de Commandes :**

- **Applications :** "lance Notepad", "ferme Calculatrice"
- **Gestion de Fenêtre :** "agrandis", "réduis", "ancrer la fenêtre à droite"
- **Explorateur & Barre des Tâches :** "ouvre l'explorateur", "affiche le bureau"
- **Contrôle du Navigateur :** "ouvre un nouvel onglet", "ferme l'onglet" (confirme)
- **Contrôle de la Souris :** "déplace la souris en haut à gauche", "clic", "double-clic", "défile vers le bas"
- **Saisie de Texte :** 'tape "Bonjour le monde"', 'appuie sur contrôle a'
- **Navigation Web :** "ouvre https://google.fr", "recherche des photos de chats mignons"
- **Fichiers :** "crée le dossier 'Projets' sur le Bureau", "supprime le fichier 'temp.txt' du Bureau" (confirme)
- **Système :** "mets le volume à 50%", "verrouille l'écran", "éteins l'ordinateur" (confirme)
- **PowerShell :** "affiche les processus en cours" (confirme)
`,
      summary: {
        app: {
          start: "Je vais lancer l'application '{app_name}'.",
          close: "Je vais fermer l'application '{app_name}'.",
        },
        window: {
          maximize: 'Je vais agrandir la fenêtre active.',
          minimize: 'Je vais réduire la fenêtre active.',
          snap: 'Je vais ancrer la fenêtre active à {direction}.'
        },
        explorer: {
          open: 'Je vais ouvrir une nouvelle fenêtre de l\'Explorateur Windows.'
        },
        taskbar: {
          show_desktop: 'Je vais afficher le bureau.'
        },
        browser: {
          new_tab: 'Je vais ouvrir un nouvel onglet dans votre navigateur.',
          close_tab: 'Je vais fermer l\'onglet actuel de votre navigateur.'
        },
        mouse: {
          move_corner: "Je vais déplacer la souris dans le coin {corner} de l'écran.",
          click: "Je vais effectuer un clic {button}.",
          double_click: 'Je vais effectuer un double-clic.',
          scroll: 'Je vais faire défiler vers le {direction}.',
        },
        input: {
          type_text: 'Je vais taper le texte : "{text}".',
          press_keys: 'Je vais appuyer sur la combinaison de touches : {keys}.'
        },
        web: {
          open_url: "Je vais ouvrir l'URL '{url}' dans votre navigateur par défaut.",
          search: "Je vais rechercher '{query}' sur Google.",
        },
        file: {
          delete: "Je vais déplacer le fichier situé à '{path}' vers la corbeille.",
          create_folder: "Je vais créer le dossier '{folderName}' dans '{location}'.",
        },
        system: {
          set_volume: 'Je vais régler le volume système à {level}%.',
          take_screenshot: 'Je vais faire une capture de l\'écran principal et l\'enregistrer sur le Bureau.',
          lock_screen: "Je vais verrouiller l'écran.",
          shutdown: "Je vais éteindre l'ordinateur. C'est une action critique.",
          restart: "Je vais redémarrer l'ordinateur. C'est une action critique.",
        },
        powershell: {
          execute: "Je vais exécuter la commande PowerShell 'get-process' pour lister les processus en cours.",
        },
      },
      error: {
        unknownCommand: 'Commande non comprise. Tapez `aide` pour des exemples.',
        unexpected: 'Une erreur inattendue est survenue.',
      },
      execute: {
        dryRun: "[DRY RUN] L'action '{action}' avec les paramètres {params} aurait été exécutée.",
        startError: "Erreur lors du lancement de {app_name}: Application non trouvée.",
        success: "L'action '{action}' a été exécutée avec succès.",
      },
      log: {
        app: { start: { success: 'Application "{app_name}" lancée avec succès.' } },
        system: {
          set_volume: { success: 'Volume réglé à {level}%.' },
          shutdown: { success: 'La commande d\'arrêt a été exécutée avec succès.' },
        },
        file: { delete: { failure: 'Fichier non trouvé.' } },
        mouse: { move: { success: 'Souris déplacée vers {position}.' } },
        web: { search: { success: 'Recherche Web effectuée pour "{query}".' } },
        explorer: { open: { success: 'Nouvelle fenêtre de l\'Explorateur ouverte.' } },
        browser: { new_tab: { success: 'Nouvel onglet du navigateur ouvert.' } }
      },
    },
  },
};
