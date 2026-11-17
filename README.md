# lekalo-typescript-drizzle

Пакет правил Drizzle ORM для [lekalo-typescript](https://github.com/ichinya/lekalo-typescript).

## Статус

Репозиторий подготовлен для выделения существующей реализации. Код ещё не перенесён; пакет пока не готов к установке или использованию.

- Перенос реализации: [#1](https://github.com/ichinya/lekalo-typescript-drizzle/issues/1).
- Общий план: [lekalo#241](https://github.com/ichinya/lekalo/issues/241).

## Ответственность пакета

- Извлечение ORM schema evidence: таблицы, столбцы, отношения и привязки к symbols.
- Drizzle-specific bindings/projection mappings и закреплённые declarations поддерживаемых версий ORM.
- Тесты и фикстуры Drizzle для поддерживаемых SQL dialects.

## Источник переноса

`lekalo-typescript/adapters/node-typescript/src/drizzle-evidence.mjs`, Drizzle-ветки `scanner.mjs`, declaration closure в `build.mjs` и связанные tests/fixtures.

## Границы

Drizzle ORM и движок базы данных — разные зависимости. PostgreSQL DDL и engine version policy принадлежат [lekalo-postgres](https://github.com/ichinya/lekalo-postgres). Compiler и общая проверка source custody остаются у runtime/host.

Версия пакета, версия provider/protocol API и версия языка или движка приложения фиксируются отдельно. Сборка и тесты должны быть автономными; источники и зависимости закрепляются точными версиями и digest. Выбор произвольного совместимого Git/local package и загрузка его зависимостей отслеживаются в [lekalo#239](https://github.com/ichinya/lekalo/issues/239).
