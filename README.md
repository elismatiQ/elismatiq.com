# <a id="english"></a>David Elisma | Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-3.0-4baaaa.svg)](CODE_OF_CONDUCT.md)
[![Built with Eleventy](https://img.shields.io/badge/Built%20with-Eleventy-red.svg)](https://www.11ty.dev/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/3fdcf52d-a4fc-477c-9550-7f3147f04109/deploy-status)](https://app.netlify.com/projects/elismatiq/deploys)

*[Français ci-dessous](#français)*

This is the source code for the personal portfolio website of **David Elisma**.

The site is built with [Eleventy](https://www.11ty.dev/), a simpler static site generator.

## 🚀 Tech Stack

- **Static Site Generator:** [Eleventy (11ty) v3](https://www.11ty.dev/)
- **Templating:** Nunjucks (`.njk`), Markdown (`.md`)
- **CMS:** Decap CMS
- **Deployment:** Netlify

## 🛠️ Features

- **Multilingual Support:** Content is structured for English (`src/en/`) and French (`src/fr/`) with custom filters for localization.
- **Data Management:** Uses YAML files in `src/_data/` for global site data and localization strings.
- **Asset Pipeline:** Passthrough copy for images, fonts, and JS.
- **Date Formatting:** Uses `luxon` for localized date formatting.

## 📂 Project Structure

```text
.
├── .eleventy.js        # Eleventy configuration
├── package.json        # Project dependencies and scripts
├── netlify.toml        # Netlify deployment settings
├── admin/              # CMS configuration
├── public/             # Static files copied to root (favicon, etc.)
└── src/                # Source files
    ├── _data/          # Global data files (site info, locales)
    ├── _includes/      # Layouts and partials
    ├── assets/         # CSS, JS, Images
    ├── en/             # English content
    └── fr/             # French content
```

## ⚡ Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/elismatiQ/11ty.elismatiq.com.git
   cd 11ty.elismatiq.com
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the local development server with hot-reloading:

```bash
npm run dev
```

The site will be available at `http://localhost:4749`.

### Build

Build the site for production:

```bash
npm run build
```

The output will be generated in the `_site/` directory.

### Clean

Remove the output directory:

```bash
npm run clean
```

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## 📄 License

This project is licensed under the MIT License.

---

# <a id="français"></a>David Elisma | Portfolio

*[English above](#english)*

Ceci est le code source du site web personnel de portfolio de **David Elisma**.

Le site est construit avec [Eleventy](https://www.11ty.dev/), un générateur de site statique plus simple.

## 🚀 Pile Technologique

- **Générateur de Site Statique :** [Eleventy (11ty) v3](https://www.11ty.dev/)
- **Modèles (Templating) :** Nunjucks (`.njk`), Markdown (`.md`)
- **CMS :** Decap CMS
- **Déploiement :** Netlify

## 🛠️ Fonctionnalités

- **Support Multilingue :** Le contenu est structuré pour l'anglais (`src/en/`) et le français (`src/fr/`) avec des filtres personnalisés pour la localisation.
- **Gestion des Données :** Utilise des fichiers YAML dans `src/_data/` pour les données globales du site et les chaînes de localisation.
- **Pipeline d'Assets :** Copie directe (Passthrough copy) pour les images, les polices et le JS.
- **Formatage des Dates :** Utilise `luxon` pour le formatage localisé des dates.

## 📂 Structure du Projet

```text
.
├── .eleventy.js        # Configuration Eleventy
├── package.json        # Dépendances du projet et scripts
├── netlify.toml        # Paramètres de déploiement Netlify
├── admin/              # Configuration du CMS
├── public/             # Fichiers statiques copiés à la racine (favicon, etc.)
└── src/                # Fichiers sources
    ├── _data/          # Fichiers de données globaux (infos site, locales)
    ├── _includes/      # Mises en page et partiels
    ├── assets/         # CSS, JS, Images
    ├── en/             # Contenu en anglais
    └── fr/             # Contenu en français
```

## ⚡ Pour Commencer

### Prérequis

- Node.js (Dernière version LTS recommandée)
- npm

### Installation

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/elismatiQ/11ty.elismatiq.com.git
   cd 11ty.elismatiq.com
   ```

2. Installer les dépendances :
   ```bash
   npm install
   ```

### Développement

Démarrer le serveur de développement local avec rechargement à chaud :

```bash
npm run dev
```

Le site sera disponible à l'adresse `http://localhost:4749`.

### Construction (Build)

Construire le site pour la production :

```bash
npm run build
```

La sortie sera générée dans le répertoire `_site/`.

### Nettoyage

Supprimer le répertoire de sortie :

```bash
npm run clean
```

## 🤝 Contribuer

Les contributions sont les bienvenues ! Veuillez lire [CONTRIBUTING.md](CONTRIBUTING.md) pour plus de détails sur notre code de conduite et le processus de soumission des pull requests.

## 📄 Licence

Ce projet est sous licence MIT.
