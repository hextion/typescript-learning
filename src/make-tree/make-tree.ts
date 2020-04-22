interface Parental<T> {
  children: Array<T & Parental<T>> | null;
}

interface Options<T> {
  keySelector(item: T): string | number;
  parentKeySelector(item: T): string | number | null;
}

export function makeTree<T>(arr: Array<T>, options: Options<T>): Array<T & Parental<T>> {
  const { keySelector, parentKeySelector } = options;
  const shallow = arr.map((item) => ({ ...item }));
  return shallow
    .map((item) => {
      const key = keySelector(item);
      let children: Array<T> | null = shallow.filter((item) => parentKeySelector(item) === key);
      children = children.length > 0 ? children : null;
      return Object.assign(item, { children }) as T & Parental<T>;
    })
    .filter((item) => parentKeySelector(item) === null);
}
