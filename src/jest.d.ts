declare namespace jest {
  interface Matchers<R> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    toDeepEqual<E = any>(expected: E): R;
  }
}
