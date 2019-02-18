
const router = require('express').Router();


router.get('/' ,(req,res) => res.json({code:200 , response :'get city'}));
router.post('/' ,(req,res) => res.json({code:200 , response :'post city' }));
router.put('/' ,(req,res) => res.json({code:200 , response :'put city'}));
router.delete('/' ,(req,res) => res.json({code:200 , response :'delete city'}));


module.exports = router