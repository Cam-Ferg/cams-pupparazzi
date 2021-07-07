const path = require('path')
const fs = require('fs')

module.exports = {
  getPuppyData,
  updatePuppyData
}

function getPuppyData (cb) {
  const filePath = path.join(__dirname, 'puppies.json')
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Shame on you')
      // return
    }
    try {
      const realData = JSON.parse(data)
      cb(realData)
    } catch (parseErr) {
      console.error('Not parsing')
    }
  })
}

function updatePuppyData (updatedPuppyData, cb) {
  const pupIndex = Number(updatedPuppyData.id) - 1
  getPuppyData(viewData => {
    const newPuppyData = {
      ...viewData
    }
    newPuppyData.puppies[pupIndex].name = updatedPuppyData.name
    newPuppyData.puppies[pupIndex].owner = updatedPuppyData.owner
    newPuppyData.puppies[pupIndex].breed = updatedPuppyData.breed

    try {
      const puppyStr = JSON.stringify(newPuppyData, null, 2)
      const filePath = path.join(__dirname, 'puppies.json')
      fs.writeFile(filePath, puppyStr, 'utf8', (err) => {
        if (err) {
          console.error('did this work?')
        }
        cb()
      })
    } catch (stringifyErr) {
      console.log('Try again')
    }
  })
}
