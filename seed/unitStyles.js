const db = require('../db')
const { UnitStyle } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const unitStyles = [
    {
      name: 'Bensy Cottage',
      sqFtMin: 950,
      sqFtMax: 1100,
      bedMin: 2,
      bedMax: 2,
      bathMin: 1,
      bathMax: 2,
      amenityOptions: ['walk-in closet','dishwasher','sink garbage disposal', 'gas cooktop', 'convection oven', 'microwave', 'washer', 'dryer', 'heating', 'a/c unit', 'engineered hardwood flooring','electric fireplace','keyless entry', 'private patio', 'one-floor'],
      spaceScore: 1,
      unitStyleImg: 'styleUrlHere.com'
    },
    {
      name: 'Tammy Home',
      sqFtMin: 1050,
      sqFtMax: 2200,
      bedMin: 2,
      bedMax: 4,
      bathMin: 2,
      bathMax: 3,
      amenityOptions: ['walk-in closet','dishwasher','sink garbage disposal', 'gas cooktop', 'convection oven', 'microwave', 'washer', 'dryer', 'heating', 'a/c unit', 'engineered hardwood flooring','electric fireplace','private balcony', 'keyless entry', 'private patio', '12 ft ceiling','two-floor'],
      spaceScore: 2,
      unitStyleImg: 'styleUrlHere.com'
    },
    {
      name: 'Georgie Flair',
      sqFtMin: 2500,
      sqFtMax: 2800,
      bedMin: 3,
      bedMax: 4,
      bathMin: 2.5,
      bathMax: 4,
      amenityOptions: ['walk-in closet','dishwasher','sink garbage disposal', 'gas cooktop', 'convection oven', 'microwave', 'washer', 'dryer', 'heating', 'a/c unit', 'engineered hardwood flooring','electric fireplace','two private balconies', 'keyless entry', 'private patio', '12 ft ceiling','two-floor', 'terrace'],
      spaceScore: 3,
      unitStyleImg: 'styleUrlHere.com'
    },
    {
      name: 'Dorsey Villa',
      sqFtMin: 3000,
      sqFtMax: 4500,
      bedMin: 4,
      bedMax: 5,
      bathMin: 3,
      bathMax: 5,
      amenityOptions: ['walk-in closet','dishwasher','sink garbage disposal', 'gas cooktop', 'convection oven', 'microwave', 'washer', 'dryer', 'heating', 'a/c unit', 'engineered hardwood flooring','electric fireplace','two private balconies', 'keyless entry', 'private patio', '12 ft ceiling','two-floor', 'terrace', '9 ft front door', 'attached garage', 'large windows'],
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