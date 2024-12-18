# TODO-APP 📋

**Современное и адаптивное приложение для управления задачами с поддержкой светлой и тёмной темы, построенное с использованием React, Vite, Zustand и Tailwind CSS.**

---

## 🌟 **Функциональность**
- Добавление, удаление и отметка задач как выполненные.
- Сохранение задач для конкретного пользователя.
- Переключение между **светлой** и **тёмной** темой.
- Адаптивный дизайн: приложение корректно отображается как на мобильных устройствах, так и на компьютерах.

---

## 🖥️ **Демонстрация проекта**



---

## 🚀 **Технологии**
- **React**: Библиотека для создания пользовательских интерфейсов.
- **Vite**: Быстрая сборка и оптимизация проекта.
- **Zustand**: Лёгкий и эффективный стейт-менеджмент.
- **Tailwind CSS**: Утилитарный CSS для быстрой стилизации.
- **TypeScript**: Добавляет статическую типизацию к проекту.

---

## 📦 **Запуск проекта**

1. **Клонируйте репозиторий**:
   ```bash
   git clone https://github.com/username/repository-name.git
   cd repository-name










# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
