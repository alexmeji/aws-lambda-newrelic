const newRelic = require('./index');

newRelic.insertCustomEvent('TestEvent', { a: 1, b: 2 }, () => {});
