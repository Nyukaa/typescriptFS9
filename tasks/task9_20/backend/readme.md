Using real typescript

!! Вариант 1: глобально install globally

```
npm install --location=global ts-node typescript
```

Вариант 2 (рекомендуемый): локально в проекте

```
npm init -y
npm install --save-dev ts-node typescript
npm run ts-node file.ts -- -s --someoption
```

for running
npm run ts-node file.ts -- -s --someoption
Инициализируем tsconfig.json

```
npm run tsc -- --init
```

Установка Express и ESlint

```
npm install express
npm install --save-dev eslint @eslint/js typescript-eslint @stylistic/eslint-plugin @types/express @types/eslint\_\_js
```

Для девелопмента используем ts-node-dev

```
npm install --save-dev ts-node-dev
```

библиотека для валидатора схем в TypeScript

```
npm install zod
```
