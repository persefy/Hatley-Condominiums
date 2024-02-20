const db = require('../db')
const { UnitStyle } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const unitStyles = [
    {
      name: '',
      sqFtMin: 950,
      sqFtMax: 1100,
      bedMin: 2,
      bedMax: 2,
      bathMin: 1,
      bathMax: 2,
      amenityOptions: ['x','y','z'],
      spaceScore: 1,
      unitStyleImg: 'styleUrlHere.com'
    },
    {
      name: '',
      sqFtMin: 1050,
      sqFtMax: 2200,
      bedMin: 2,
      bedMax: 4,
      bathMin: 2,
      bathMax: 3,
      amenityOptions: ['x','y','z'],
      spaceScore: 2,
      unitStyleImg: 'styleUrlHere.com'
    },
    {
      name: '',
      sqFtMin: 2500,
      sqFtMax: 2800,
      bedMin: 3,
      bedMax: 4,
      bathMin: 2.5,
      bathMax: 4,
      amenityOptions: ['x','y','z'],
      spaceScore: 3,
      unitStyleImg: 'styleUrlHere.com'
    },
    {
      name: '',
      sqFtMin: 3000,
      sqFtMax: 4500,
      bedMin: 4,
      bedMax: 5,
      bathMin: 3,
      bathMax: 5,
      amenityOptions: ['x','y','z'],
      spaceScore: 4,
      unitStyleImg: 'styleUrlHere.com'
    },
  ]

  await UnitStyle.insertMany(unitStyles)

  console.log('Added unit styles!')
}

const run = async () => {
  await main()
  db.close()
}

run()