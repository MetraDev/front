
const router = require('express').Router();


router.get('/' ,(req,res) => res.json({code:200 , response :'get teams'}));
router.post('/' ,(req,res) => res.json({code:200 , response :'get teams' }));
router.put('/' ,(req,res) => res.json({code:200 , response :'hola mundo cruel'}));
router.delete('/' ,(req,res) => res.json({code:200 , response :'hola mundo cruel'}));


module.exports = router