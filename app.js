const app = require("./configs/server.js")
const porta = 1409
let Db = require("./configs/DbConfig.js")

app.get('/', function(req, res){ 
        Db("SELECT * FROM MERCADOS", function(result){
        res.render("mercado", {
            Mercados: result
        })
    }) 
})

app.post('/doacao', function(req, res){
    res.render("doacao")
})

app.listen(porta, function(){
    console.log('ESTAMOS NO FODENDO ONLINE DA INTERNET!!!!!')
})

