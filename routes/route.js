const app = require('express');
const router = app.Router();
const get = require('../controller/get')
const fetch = require('node-fetch');
const api = fetch('http://api.plos.org/search?q=title:DNA');


const authenticate = async (req,res,next) => {
    console.log('passing');
    next();
}

router.get('/', authenticate, (req,res) => {
    const result = await api;
    const data = await result.json();    
    res.status(200).send({success:true,data:data.response.docs})
}
);

module.exports = router;