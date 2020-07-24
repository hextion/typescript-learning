expect.extend({
  toDeepEqual(received, expected) {
    // see https://jestjs.io/docs/en/expect#toequalvalue
    return Buffer.from(received).equals(Buffer.from(expected))
      ? {
          message: "expected is deep equal to received",
          pass: true,
        }
      : {
          message: "expected is not (deep) equal to received",
          pass: false,
        };
  },
});
