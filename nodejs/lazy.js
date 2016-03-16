var Base64 = require('js-base64').Base64;
var params = "UEFTU1BPUlQ9eXVsaWp1biZMT0dJTkNPREU9MjcxNTIzNEM2ODQ4RUY3M0ZEMTgwMzlCOTY2NDI4RDAmR0FNRUhBTExUWVBFPTImR0FNRUlEPTEwMzAmV0lEVEg9ODAwJkhFSUdIVD02MDAmSDU9MQ";
var content = Base64.decode(params);
console.log(content);
