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
      unitStyleImg: 'https://villageatfoxriver.com/wp-content/uploads/2-Bedroom-G-1-scaled.jpg'
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
      unitStyleImg: 'https://medialibrarycfo.entrata.com/15027/MLv3/4/22/2022/3/26/9776/61041c7ad796b5.17929451607.jpg'
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
      unitStyleImg: 'https://d5caq35prpanp.cloudfront.net/files/20667/carousel_photo/the-20sonoma-20coase-3d.jpg?1630958500'
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
      unitStyleImg: 'https://southduff.com/wp-content/uploads/2022/05/E1_5BED_3BATH_SouthDuff.png'
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