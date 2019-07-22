const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

const trazerNomes = () =>{
  const url = `http://files.cod3r.com.br/curso-js/funcionarios.json`
  fetch(url)
  .then(resp => resp.json())
  .then(item =>{
      this.nome = item.slice(0, 100).map(item=>{
          return item
      })
  })
}
trazerNomes()

router.get('/', (req, res)=>{
  res.render('funcionarios/index', {funcionario: this.nome})
})

router.get('/:id', (req, res)=>{
    const id = req.params.id

    const certaPessoa = this.nome.filter(pessoa =>{
        return pessoa.id == id
    })

    res.render('funcionarios/funcionario', {certaPessoa})
  })

module.exports = router
