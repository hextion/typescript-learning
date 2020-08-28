import { shallow } from "./shallow";

export type Parental<T> = T & {
  children: Array<Parental<T>> | null;
};

type Key = string | number;

interface Options<T> {
  keySelector(item: T): Key;
  parentKeySelector(item: T): Key | null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function makeTree<T extends Record<string, any>>(
  source: Array<T>,
  { keySelector, parentKeySelector }: Options<T>
): Array<Parental<T>> {
  return source
    .map(shallow)
    .map((item, _, arr) => {
      const key = keySelector(item);
      const children = arr.filter((item) => Object.is(parentKeySelector(item), key)) as Array<Parental<T>>;
      return Object.assign(item, { children: children.length > 0 ? children : null });
    })
    .filter((item) => Object.is(parentKeySelector(item), null));
}
