const router = require('express').Router();

router.route('/').get( (req, res)=>{
    msg = `Microservicio para operaciones entre 2 numeros`
    res.json({msg});
});

router.route('/:operacion').get((req, res)=>{
    switch (req.params.operacion) {
        case "suma":
            msg = `El resultado de la suma es de ${req.body.a + req.body.b}`
            break;
        
        case "resta":
            msg = `El resultado de la resta es de ${req.body.a - req.body.b}`
            break;

        case "multiplicacion":
            msg = `El resultado de la multiplicacion es: ${req.body.a * req.body.b}`
            break;

        case "division":
            if(req.body.b === 0) res.send("No se puede dividir por cero")
            msg = `El resultado de la suma es de ${req.body.a / req.body.b}`
            break;

        default:
            res.send("no selecionaste nada")
            break;
    }

    res.json({msg})
})

module.exports = router;