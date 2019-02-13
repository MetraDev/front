const router = require('express').Router();
const Role = require('../models/Role');
const mongoose = require('mongoose');

router.get('/', (req, res) => {
    Role.find({}).then(data => {
        // req.user // tenemos acceso a la informacin de quien ha hecho la peticion
        res.send(data);
    });
});

router.get('/:id', (req, res) => {
    Role.findById(req.params.id).then(data => {
        if (!data) return res.status(404).send(`No existe un rol con _id: ${req.params.id}`)

        res.send(data);
    })
});

module.exports= router;