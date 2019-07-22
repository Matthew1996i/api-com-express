const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')
router.get('/', (req, res)=>{
        const url = `http://files.cod3r.com.br/curso-js/funcionarios.json`
        
        fetch(url)
        .then(resp => resp.json())
        .then(pessoas =>{        
            const nome = pessoas.slice(0, 100).map(item=>{
                return item                          
            })
            res.render('funcionarios/index', {funcionario: nome})
        })
})

router.get('/:id', (req, res)=>{
    const id = req.params.id
    const url = `http://files.cod3r.com.br/curso-js/funcionarios.json`
        
        fetch(url)
        .then(resp => resp.json())
        .then(pessoas =>{        
            const certaPessoa = pessoas.map(funcionarios =>{
                return funcionarios
            }).filter(pessoa =>{
                return pessoa.id == id
            })
            
            res.render('funcionarios/funcionario', {certaPessoa})
        })
})

module.exports = router