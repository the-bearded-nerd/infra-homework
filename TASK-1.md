# Добавить в node.js поддержку .yml файлов

Необходимо добавить в ноду возможность подключать .yml файлы через обычный вызов require или import.

Для этого нужно реализовать лоадеры в `build/loader.cjs` / `build/loader.mjs` (два варианта для cjs и esm модулей).

Вся необходимая обвязка для вызова лоадеров уже написана, для проверки используйте скрипты из package.json `yarn test:cjs` и `yarn test:esm`.

Необходимо подключать yaml как json, для этого используйте библиотеку yaml (она уже есть в зависимостях, не забудьте их установить `yarn`).

## Подсказки

Сначала реализуйте loader.cjs, а затем уже loader.mjs.

[Документация](https://nodejs.org/api/modules.html#requireextensions) по .cjs модулям.

[json5 node loader](https://github.com/json5/json5)

[Докуменатация](https://nodejs.org/api/module.html#hooks) по .esm модулям.

[ts-node loader](https://github.com/TypeStrong/ts-node/blob/main/src/esm.ts#L203)
