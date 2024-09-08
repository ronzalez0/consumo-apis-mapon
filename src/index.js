const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/doble/:num',(req,  res)=>{
    console.log(req.params);
    const doble ={
        "num" : req.params.num,
        "resultado" : req.params.num*2
    }
    res.json(doble);
})

app.get('/estudiantes',(req, res) => {
    const  estudiantes = [
       {
            "nombre" : "Pedro",
            "correo" : "pedro@.com"
       },
       {
        "nombre" : "Lalo",
        "correo" : "lalo@.com"
       }]
    
    res.json(estudiantes);
})



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})