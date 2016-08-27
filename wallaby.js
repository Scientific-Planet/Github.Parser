module.exports = function (wallaby) {
  return {
    files: [
      'source/entities/*.ts',
      'source/markdown/sample.md'
    ],
    tests: [
      'test/*.test.ts'
    ],
    testFramework: 'mocha',
    env: {
        type: 'node'
    },
    debug: true
  };
};