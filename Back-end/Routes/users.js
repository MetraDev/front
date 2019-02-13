

const router = require('express').Router();


router.get('/teams' ,(req,res) => res.json({code:200 , response :'get teams'}));
router.post('/teams' ,(req,res) => res.json({code:200 , response :'get teams' }));
router.put('/teams' ,(req,res) => res.json({code:200 , response :'hola mundo cruel'}));
router.delete('/teams' ,(req,res) => res.json({code:200 , response :'hola mundo cruel'}));


module.exports = router





