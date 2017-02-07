let Base64 = require('js-base64').Base64;
let params = "UEFTU1BPUlQ9eXVsaWp1biZMT0dJTkNPREU9MjcxNTIzNEM2ODQ4RUY3M0ZEMTgwMzlCOTY2NDI4RDAmR0FNRUhBTExUWVBFPTImR0FNRUlEPTEwMzAmV0lEVEg9ODAwJkhFSUdIVD02MDAmSDU9MQ";
let content = Base64.decode(params);
console.log(content);

:;

// let a = {
//   hide:function(){
//     console.log("hide....");
//   }
// };
//
// a['hide'].apply(a);
