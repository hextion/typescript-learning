export interface Parental<T> {
  value: T;
  children?: Array<Parental<T>>;
}

type BaseNode = Record<string, unknown>;

export interface NodeKeySelector<K, V extends BaseNode> {
  (node: V): K;
}

export type Options<K, V extends BaseNode> = Record<"nodeKeySelector" | "parentNodeKeySelector", NodeKeySelector<K, V>>;

export function makeTree<K, V extends BaseNode>(
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
