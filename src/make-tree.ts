import { shallow } from "./shallow";

export type Parental<V> = V & {
  children: Array<Parental<V>> | null;
};

interface Options<K, V> {
  keySelector(item: V): K;
  parentKeySelector(item: V): K | null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function makeTree<K, V extends Record<string, any>>(
  source: Array<V>,
  { keySelector, parentKeySelector }: Options<K, V>
): Array<Parental<V>> {
  return source
    .map(shallow)
    .map((item, _, arr) => {
      const key = keySelector(item);
      const children = arr.filter((item) => Object.is(parentKeySelector(item), key)) as Array<Parental<V>>;
      return Object.assign(item, { children: children.length > 0 ? children : null });
    })
    .filter((item) => Object.is(parentKeySelector(item), null));
}
