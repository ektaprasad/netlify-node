// const promise1 = new Promise((resolve,reject) =>{
//     if(resolve) console.log('promise 1 resolved');
//     else console.log('1 not resolved');  
// })

// const promise2 = new Promise((resolve,reject) =>{
//     if(2+2 == 5) resolve(console.log('promise 2 resolved'));
//     else reject(new Error('error from 2nd promise') )
// })

// Promise.all([promise1,promise2])
// .then(console.log('resolved'))
// .catch( err => {
//     console.log(err)
// });

// const error1 = {
//     message : 'Invalid'
// }

const express = require('express');
const route = require('./routes/route');
const app = express();
const serverless = require('serverless-http');

app.use('/.netlify/functions/path',route);

app.listen(4000,() => {
    console.log('app runs');
    
});

module.exports.handler = serverless(app);