import express from 'express'
const app = express()

app.get('/users',(req,res) =>{
    console.log('Listagem de usuários')

    //JSON

    res.json([
        'Igor',
        'Diego',
        'Fernando',
        'Gabriel',
        'Daniel'
    ])
})

app.listen(3333)