'use strict';
const https = require('https');

const insertCustomEvent = (eventName, data, callback) => {
    const requestOptions = {
        host: 'insights-collector.newrelic.com',
        headers: {
            'Content-Type': 'application/json',
            'X-Insert-Key': process.env.NEWRELIC_KEY,
        },
        method: 'POST',
        path: `/v1/accounts/${process.env.NEWRELIC_ACCOUNT}/events`,
    };

    const request = https.request(requestOptions, (response) => {
        response.setEncoding('utf8');
        let body = '';
        response.on('data', (chunk) => { body += chunk; });
        response.on('end', () => { callback(null, { info: body }); });
    })
    .on('error', (err) => { callback(err, null); });

    request.write(JSON.stringify(
        [
            Object.assign({ 'eventType': eventName }, data),
        ]
    ));
    request.end();
}

module.exports = {
    insertCustomEvent,
};