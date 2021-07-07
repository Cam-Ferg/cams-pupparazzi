const express = require('express')
const router = express.Router()

module.exports = router

const { getPuppyData, updatePuppyData } = require('./utils')

router.get('/:id', (req, res) => {
  getPuppyData((puppies) => {
    const puppyId = parseInt(req.params.id)
    const selectedPuppy = (puppies.puppies).find(item => item.id === puppyId)
    res.render('details', selectedPuppy)
  })
})

router.get('/:id/edit', (req, res) => {
  getPuppyData((editInfo) => {
    const pupId = parseInt(req.params.id)
    const newData = editInfo.puppies.find(item => item.id === pupId)
    res.render('edit', newData)
  })
})

router.post('/:id/edit', (req, res) => {
  updatePuppyData(req.body, () => {
    res.redirect(`/puppies/${req.body.id}`)
  })
})
