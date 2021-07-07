module.exports = getPuppiesData

const path = require('path')
const fs = require('fs')

function getPuppiesData (cb) {
  const filepath = path.join(__dirname, 'puppies.json')
  fs.readFile(filepath, 'utf8', (err, puppiesData) => {
    if (err) {
      console.error('Where are the puppies? Something has gone wrong')
      return
    }
    try {
      const viewData = JSON.parse(puppiesData)
      cb(viewData)
    } catch (parseErr) {
      console.error('Where are the puppies? Something has really gone wrong')
    }
  })
}
