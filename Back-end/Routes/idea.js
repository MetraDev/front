const router = require('express').Router();
const mongoose = require('mongoose');
const Idea = require('../Models/idea');
const authorization = require('../middlewares/authorization');

/*router.get('/' ,(req,res) => res.json({code:200 , response :'get city'}));
router.post('/' ,(req,res) => res.json({code:200 , response :'post city' }));
router.put('/' ,(req,res) => res.json({code:200 , response :'put city'}));
router.delete('/' ,(req,res) => res.json({code:200 , response :'delete city'}));*/



router.get('/',authorization, (req, res) => {
    Idea.find({}).then(data => {
        // req.user // tenemos acceso a la informacin de quien ha hecho la peticion
        res.send(data);
    });
});

router.post('/',authorization, (req,res)=>{

    if(!req.body )
        return res.status(404).send(`El cuerpo esta vacio`)
    const data = req.body;
    new Idea({...data}).save().then(data=>{
        res.send(data);
    })
})
router.get('/:id',authorization, (req, res) => {
    Idea.findById(req.params.id).then(data => {
        if(!data) return res.status(404).send(`No existe un rol con _id: ${req.params.id}`)

        res.send(data);
    })
});
router.delete('/:id', authorization,(req,res)=>{
    if(!mongoose.Types.ObjectId.isValid(req.params.id))
        return res.status(404).send(`No existe _id`)


    Idea.findByIdAndDelete(req.params.id).then(data=>{
        if(!data) return res.status(404).send(`No existe un rol con _id: ${req.params.id}`)
        res.send(data)
    })


})

router.put('/:id',authorization, (req,res)=>{
    if(req.body.name || req.body.isDemium ){
        Idea.findByIdAndUpdate(req.params.id,{$set:{ ...req.body}},
            {new:true, overwrite:true, runValidator:true} ).then(data=> res.send(data))}

})


module.exports= router;

