export interface Parental<T> {
  value: T;
  children?: Array<Parental<T>>;
}

type BaseNode = Record<string, unknown>;

export interface NodeKeySelector<K, V extends BaseNode> {
  (node: V): K;
}

export interface Options<K, V extends BaseNode> {
  nodeKeySelector: NodeKeySelector<K, V>;
  parentNodeKeySelector: NodeKeySelector<K, V>;
}

export function makeTree<K, V extends BaseNode>(
  source: Array<V>,
  { nodeKeySelector, parentNodeKeySelector }: Options<K, V>
): Array<Parental<V>> {
  return source
    .map((item) => ({ value: item }))
    .map((node, _, arr) => {
      const key = nodeKeySelector(node.value);
      const children = arr.filter((node) => Object.is(parentNodeKeySelector(node.value), key));
      return children.length > 0 ? Object.assign(node, { children }) : node;
    })
    .filter(({ value }) => Object.is(parentNodeKeySelector(value), null));
}
