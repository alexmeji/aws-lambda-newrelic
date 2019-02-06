# Lambda Newrelic Integration
When you create your a AWS Lambda and you need to send customEvents to Insights, you can use this library to make this task easy.

## Installation
`npm install --save aws-lambda-newrelic`

## How to Use
This packet have a function called **insertCustomEvent**, this function receive 3 parameters:
* **eventName**: a string to define the name to the Custom Event.
* **data**: JSON object structure.
* **callback**: a callback function to receive (error, data).


Additional, this newrelic integration need to use two environment variables:
* **NEWRELIC_KEY**: NewRelic Insert Key
* **NEWRELIC_ACCOUNT**: NewRelic Account to insert

## Example

```javascript
  const lambdaNewRelic = require('aws-lambda-newrelic');
 
  exports.handler = (event, context, callback) => {
    // method needs at least 3 parameters
    // eventName, data, callback
    lambdaNewRelic.insertCustomEvent('Test Event', {"name": "Alex Mejicanos"}, (error, data) => {});
    
    callback(null, 'Its Ok');
  };
  ```