/**
 * Initialize a `Runner` for the given `suite`.
 *   - `start`  execution started
 *   - `end`  execution complete
 *   - `suite`  (suite) test suite execution started
 *   - `suite end`  (suite) all tests (and sub-suites) have finished
 *   - `test`  (test) test execution started
 *   - `test end`  (test) test completed
 *   - `hook`  (hook) hook execution started
 *   - `hook end`  (hook) hook complete
 *   - `pass`  (test) test passed
 *   - `fail`  (test, err) test failed
 *   - `pending`  (test) test pending
 */
function Adapter(runner) {
  var passes = 0;
  var failures = 0;

  runner.on('pass', function(test){
    passes++;
    console.log(test.fullTitle());
    if (passes == 13){
        console.log(test);
    } 
  });

  runner.on('fail', function(test, err){
    failures++;
    console.log('fail: %s -- error: %s', test.fullTitle(), err.message);
  });

  runner.on('end', function(some){
    console.log(some);
    console.log('end: %d/%d', passes, passes + failures);
    process.exit(failures);
  });
}

module.exports = Adapater;
