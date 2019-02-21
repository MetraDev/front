const bcrypt  = require('bcrypt')


const plaintext =[

    'pass1',
    'micontraseña'
]
const saltRround= 10 ;

bcrypt.genSalt(saltRround,(err,salt)=>{


    bcrypt.hash(plaintext[0], salt,(err,hash)=>{
        if(err) throw new error (err);
        console.log('salt' , salt)
        console.log('salt' , hash)
        bcrypt.compare( plaintext[0],hash ,(err, res)=>{

            console.log(res)
            if(res){
                console.log('Lo guardamos')
            }else{console.log('El texto no coincide')}
        })
    })

})

/*bcrypt.genSalt(saltRround,(err,salt)=>{

    if(err) throw new error (err);
    console.log('salt' , salt)
})*/