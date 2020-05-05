var Client = require('./zapi_jwt');


//include library
var Client = require('zapi_nodejs');

//set credentials
var BASE_URL = 'https://prod-api.zephyr4jiracloud.com/connect'
var ACCESS_KEY = 'NDc0ZjE1NjMtMzNkMi0zNTZhLWJmNjUtNmJhOTVjOWE2Mjc5IDVkOGFlZTNhNzMyNDcwMGM5ZjVmZmQ5NyBVU0VSX0RFRkFVTFRfTkFNRQ'
var SECRET_KEY = '89rPei44rpYTo5vBSkQcIlauYw664zlj0-f8fgogk0g'
var ACCOUNT_ID = '5d8aee3a7324700c9f5ffd97'

//create client
var JwtClient = new Client(BASE_URL, ACCESS_KEY, SECRET_KEY, ACCOUNT_ID);


//Get List of Cycles
var METHOD = "POST"
//var API_URI = 'https://prod-api.zephyr4jiracloud.com/connect/public/rest/api/1.0/executions?issueId=14329&projectId=10050'
var API_URI = 'https://prod-api.zephyr4jiracloud.com/connect/public/rest/api/1.0/executions/search?maxRecords=50&executionId='
var JWT_EXPIRE = 14400

var token = JwtClient.generateJWT(METHOD, API_URI, JWT_EXPIRE);
console.log(token)
var request = require('request');
console.log(API_URI)
request({
    method: 'POST',
    url: API_URI,
    headers: {
        'Authorization': 'JWT '+ token,
        'zapiAccessKey': ACCESS_KEY,
        'User-Agent': 'ZAPI',
    }}, function (error, response, body) {
    console.log('Status:', response.statusCode);
    console.log('Headers:', JSON.stringify(response.headers));
    console.log('Response:', body);
});