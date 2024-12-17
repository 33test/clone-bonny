# BonnyandRead-Front End Clone

本專案為飾品商 BonnyRead 的網站的前端復刻版,重現了該網站上的排版、資訊和功能等元素，並依據飾品購買者的共同需求增加了新的功能。
技術上以[VSCode](https://code.visualstudio.com/) 搭配 Vue3+Vite 開發，並輔以開發套件如 pinia,axios, vue-router 等。

## Requirements

- IDE: Visual Studio Code version 1.93.0 or higher
- Extensions:
  - Volar (Vue support)
  - Disable Vetur if installed.
  - Vue3 version 3.5.12 or higher.
  - Vite version 5.4.10 or higher.
  - Pinia version 2.1.6 or higher.
  - Axios version 1.7.8 or higher.
  - Zod version 3.23.8 or higher.
  - Swiper version 11.1.15 or higher.
  - Font Awesome version 6.6.0 or higher.
  - TailwindCSS version 3.4.15 or higher.

## Project Setup

Clone the repository:

```sh
git clone https://github.com/33test/clone-bonny.git
cd clone-bonny
```

### Install Dependencies

```sh
npm install
```

### Development

To start a development server with hot-reload:

```sh
npm run dev
```

### Compile and Minify for Production

To compile and minify for production:

```sh
npm run build
```

### Project Structure

```sh
clone-bonny/
├── public/                # Static assets
├── src/                   # Source code
│   ├── assets/            # Images, fonts, etc.
│   ├── components/        # Reusable Vue components
│   ├── views/             # Page-level components
│   ├── router/            # Vue Router configuration
│   ├── main.js            # Entry point
│   └── App.vue            # Root component
├── index.html             # Base HTML file
├── package.json           # Project dependencies
└── vite.config.js         # Vite configuration
```
