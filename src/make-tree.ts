import { shallow } from "./shallow";

interface Parental<T> {
  children: Array<T & Parental<T>> | null;
}

type Key = string | number;

interface Options<T> {
  keySelector(item: T): Key;
  parentKeySelector(item: T): Key | null;
}

export function makeTree<T extends Record<string, unknown>>(
  source: Array<T>,
  { keySelector, parentKeySelector }: Options<T>
): Array<T & Parental<T>> {
  return source
    .map(shallow)
    .map((item, _, arr) => {
      const key = keySelector(item);
      const children = arr.filter((item) => Object.is(parentKeySelector(item), key));
      return Object.assign(item, { children: children.length > 0 ? children : null } as Parental<T>);
    })
    .filter((item) => Object.is(parentKeySelector(item), null));
}
