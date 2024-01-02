import { match, Pattern } from 'ts-pattern';

const toString = (value: unknown): string =>
  match(value)
    .with(Pattern.string, (str) => str)
    .with(Pattern.number, (num) => num.toFixed(2))
    .with(Pattern.boolean, (bool) => `${bool}`)
    .otherwise(() => 'Unknown');

