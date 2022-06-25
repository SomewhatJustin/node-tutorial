const { createReadStream } = require('fs')

const stream = createReadStream('./content/big.txt', { highWaterMark: 90000, encoding: 'utf8' })

stream.on('data', (result) => { // https://nodejs.org/dist/latest-v16.x/docs/api/stream.html#event-data
  console.log(result)
})

stream.on('error', (err) => {
  console.log(err)
})