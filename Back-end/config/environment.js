const environments = {
    development : "development",
    produccion: "production",
    test:"test",
    preproduccion:"preproduction"


}
const ENV = process.env.NODE_ENV || environments.development;


const config ={

    [environments.development]:{
        MongoDB:{
            URI: "localhost:27017/unicorn_dev",
            host:"localhost",
            port:"27017",
            db:"unicorn"
        },
        PORT:8080

    },[environments.preproduccion]:{

    MongoDB:{
        URI: "localhost:27017/unicorn",
            host:"localhost",
            port:"27017",
            db:"unicorn"
    },
    PORT:80

    },[environments.produccion]:{

    },[environments.test]:{

    MongoDB:{
        URI: "localhost:27017/unicorn_test",
            host:"localhost",
            port:"27017",
            db:"unicorn"
    },
    PORT:8080

    },
}

console.log(ENV)


process.env= {

    ...process.env,
    ...config[ENV]
}