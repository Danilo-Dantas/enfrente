const app = require("./configs/server.js")
const porta = 1409


app.get('/', function (req, res) {
    let result =
        [
            {
                cod_mercado: 1,
                nome_mercado: "Guto's vendinhas",
            },
            {
                cod_mercado: 2,
                nome_mercado: "Gafa's vendinhas",
            }
        ]


    res.render("mercado", {
        Mercados: result
    })
})

app.post('/doacao', function (req, res) {
    res.render("doacao")
})

app.listen(porta, function () {
    console.log('ESTAMOS NO FODENDO ONLINE DA INTERNET!!!!!')
})

