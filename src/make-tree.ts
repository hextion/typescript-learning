export interface Parental<T> {
  value: T;
  children?: Array<Parental<T>>;
}

export interface Options<K, V> {
  keySelector(item: V): K;
  parentKeySelector(item: V): K;
}

export function makeTree<K, V extends Record<string, unknown>>(
  source: Array<V>,
  { keySelector, parentKeySelector }: Options<K, V>
): Array<Parental<V>> {
  return source
    .map((item) => ({ value: item }))
    .map((node, _, arr) => {
      const key = keySelector(node.value);
      const children = arr.filter((node) => Object.is(parentKeySelector(node.value), key));
      return children.length > 0 ? Object.assign(node, { children }) : node;
    })
    .filter(({ value }) => Object.is(parentKeySelector(value), null));
}
