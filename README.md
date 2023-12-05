# Vue.js README

### Table of Contents

- [Vue.js README](#vuejs-readme)
    - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Development](#development)
    - [Production](#production)
  - [Project Structure](#project-structure)
    - [Usage](#usage)
    - [Configuration](#configuration)

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Before you begin, make sure you have the following installed on your system:

- Node.js: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```shell
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```shell
   cd <project-directory>
   ```

3. Install project dependencies
   ```shell
   npm install
   ```
4. Project structure
   /
   ├── public/ # Static assets
   ├── src/ # Vue.js source code
   │ ├── assets/ # Images, fonts, and other assets
   │ ├── components/ # Vue components
   │ ├── views/ # Vue views (pages)
   │ ├── App.vue # Root Vue component
   │ └── main.js # Entry point for the Vue application
   ├── .gitignore # Git ignore file
   ├── package.json # Project configuration and dependencies
   ├── README.md # Project README (this file)
   └── ... # Other configuration and development files

### Development

To start the development server and work on the project, run the following command:

```shell
npm run serve
```

### Production

To build the project for production, run:

```shell
npm run build
```

## Project Structure

/
├── src/ # Node.js source code
│ ├── controllers/ # Controllers handling route logic
│ ├── models/ # Data models or schemas
│ ├── routes/ # API route definitions
│ ├── config.js # Configuration settings
│ ├── app.js # Main application file
│ └── ...
├── tests/ # Test files and suites
├── public/ # Public assets (if applicable)
├── README.md # Project README (this file)
├── package.json # Project configuration and dependencies
└── ...

### Usage

To start the server run:

```shell
npm run dev
```

### Configuration

Add .env file with the below parameters

VUE_APP_NAME=VISA CRYPTO CARD
VUE_APP_API=http://127.0.0.1:3000
VUE_APP_UI=http://127.0.0.1:8080
VUE_APP_LOGGER_API=null
VUE_APP_LOG_LEVEL=debug
VUE_APP_ENV=development
NODE_ENV=development


bible-lense/
npm run build
git add dist && git commit -m "add build"  
git subtree push --prefix dist origin gh-pages