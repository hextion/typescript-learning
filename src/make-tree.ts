export interface Parental<T> {
  value: T;
  children?: Array<Parental<T>>;
}

export interface NodeKeySelector<K, V> {
  (node: V): K;
}

export type Options<K, V> = Record<"nodeKeySelector" | "parentNodeKeySelector", NodeKeySelector<K, V>>;

export function makeTree<K, V>(
  source: Array<V>,
  { nodeKeySelector, parentNodeKeySelector }: Options<K, V>,
  withParentNodeKey: ReturnType<typeof parentNodeKeySelector>
): Array<Parental<V>> {
  return source
    .map((item) => ({ value: item }))
    .map((node, _, arr) => {
      const key = nodeKeySelector(node.value);
      const children = arr.filter((node) => Object.is(parentNodeKeySelector(node.value), key));
      return children.length > 0 ? Object.assign(node, { children }) : node;
    })
    .filter(({ value }) => Object.is(parentNodeKeySelector(value), withParentNodeKey));
}
