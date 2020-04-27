expect.extend({
  toDeepEqual(received, expected) {
    // see https://jestjs.io/docs/en/expect#toequalvalue
    if (Buffer.from(received).equals(Buffer.from(expected))) {
      return {
        message: "expected is deep equal to received",
        pass: true,
      };
    } else {
      return {
        message: "expected is not (deep) equal to received",
        pass: false,
      };
    }
  },
});
