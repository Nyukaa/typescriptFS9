to run

```
npm run ts-node file.ts

npm run ts-node -- multiplier.ts
```

if we have "scripts": {
"multiply": "ts-node multiplier.ts",
then can run as

```
npm run multiply 5 2
```

to install TS

```
npm init -y

npm install --save-dev ts-node typescript

Создай файл tsconfig.json с таким содержимым:

{
  "compilerOptions": {
    "noImplicitAny": true
  }
}
```

Если передаёте аргументы, используйте --:

npm run ts-node file.ts -- -s --someoption
! install only if version npm < 7
npm install --save-dev @types/react @types/express @types/lodash @types/jest @types/mongoose
---Express---
Установка типов для Express

```
npm install --save-dev @types/express
```

Авто-перезапуск сервера для разработки

```
npm install --save-dev ts-node-dev
```

"dev": "ts-node-dev index.ts"
