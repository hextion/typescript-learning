export interface Parental<T> {
  value: T;
  children?: Array<Parental<T>>;
}

interface Options<K, V> {
  keySelector(item: V): K;
  parentKeySelector(item: V): K | null;
}

export function makeTree<K, V extends Record<string, unknown>>(
  source: Array<V>,
  { keySelector, parentKeySelector }: Options<K, V>
): Array<Parental<V>> {
  return source
    .map((item) => ({ value: item } as Parental<typeof item>))
    .map((node, _, arr) => {
      const key = keySelector(node.value);
      const children = arr.filter((node) => Object.is(parentKeySelector(node.value), key));
      if (children.length > 0) {
        return Object.assign(node, { children });
      }
      return node;
    })
    .filter(({ value }) => Object.is(parentKeySelector(value), null));
}
