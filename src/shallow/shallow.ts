export function shallow<T extends object>(source: T): T {
  return { ...source };
}
