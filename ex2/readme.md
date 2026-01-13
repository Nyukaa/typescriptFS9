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
