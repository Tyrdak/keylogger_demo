# README

## Utilisation de la faille et du keylogger

Ce projet démontre comment exploiter une faille de sécurité pour injecter un keylogger dans une page web. Vous trouverez ci-dessous les étapes détaillées pour lancer le serveur Python et utiliser le keylogger.

### Prérequis
Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :
- Python 3
- Un navigateur web (comme Google Chrome, Firefox, etc.)

### Structure des dossiers
Le projet est organisé de la manière suivante :

KEYLOGGER_DEMO/ ├── site_hack_nonpossible/ │ ├── hack.html │ ├── index.html ├── site_hack_possible/ │ └── site/ │ ├── hack.html │ ├── index.html │ ├── keylogger.js │ └── script-injection.js


- **site_hack_nonpossible/** : Contient des fichiers HTML où l'injection du keylogger n'est pas possible.
- **site_hack_possible/** : Contient des fichiers HTML où l'injection du keylogger est possible. Le dossier `site/` contient les fichiers nécessaires pour démontrer l'injection.

### Étape 1 : Lancer le serveur Python

Pour lancer un serveur HTTP simple avec Python, suivez les étapes ci-dessous :

1. **Ouvrez votre terminal ou invite de commandes.**

2. **Naviguez jusqu'au répertoire racine du projet (`KEYLOGGER_DEMO`).**

   ```bash
   cd /chemin/vers/KEYLOGGER_DEMO

3. **Utilisez la commande suivante pour démarrer le serveur HTTP sur le port 8000 :**
    ```bash
    python3 -m http.server 8000

Cette commande démarre un serveur HTTP qui permet d'accéder aux fichiers du projet via http://localhost:8000. Vous pouvez ouvrir cette URL dans votre navigateur pour voir les fichiers.

### Étape 2 : Récuperer le Keylogger

Le fichier script-injection.js contient les lignes de code nécessaires pour l'injection du keylogger. Voici comment procéder :

Ouvrez le fichier script-injection.js dans un éditeur de texte (comme Visual Studio Code, Sublime Text, etc.).

Vous trouverez les lignes de code suivantes en commentaire :

    ```bash
    // Execucter dans le terminal : python3 -m http.server 8000  

    // Executer dans le terminal navigateur la ligne suivante :

### Étape 3 : Injecter le Keylogger

Pour tester l'injection du keylogger, suivez les étapes ci-dessous :
Assurez-vous que le serveur Python est en cours d'exécution.

Ouvrez votre navigateur et accédez à http://localhost:8000/site_hack_possible/site/index.html.

Interagissez avec la page web (par exemple, en tapant des touches) et vérifiez la console du navigateur pour voir les données capturées par le keylogger.