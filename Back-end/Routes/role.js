const router = require('express').Router();
const Role = require('../Models/Role');
const mongoose = require('mongoose');

const authorization = require('../middlewares/authorization');

router.get('/', authorization, (req, res) => {
    Role.find({}).then(data => {
        // req.user // tenemos acceso a la informacin de quien ha hecho la peticion
        res.send(data);
    });
});

router.post('/', (req,res)=>{

    if(!req.body )
        return res.status(404).send(`El cuerpo esta vacio`)
    const data = req.body;
    new Role({...data}).save().then(data=>{
        res.send(data);
    })
})
router.get('/:id', (req, res) => {
    Role.findById(req.params.id).then(data => {
        if(!data) return res.status(404).send(`No existe un rol con _id: ${req.params.id}`)

        res.send(data);
    })
});
router.delete('/:id', (req,res)=>{
    if(!mongoose.Types.ObjectId.isValid(req.params.id))
        return res.status(404).send(`No existe _id`)


    Role.findByIdAndDelete(req.params.id).then(data=>{
        if(!data) return res.status(404).send(`No existe un rol con _id: ${req.params.id}`)
        res.send(data)
    })


})

router.put('/:id', (req,res)=>{
    if(req.body.name || req.body.isDemium ){
        Role.findByIdAndUpdate(req.params.id,{$set:{ ...req.body}},
            {new:true, overwrite:true, runValidator:true} ).then(data=> res.send(data))}

})


module.exports= router;