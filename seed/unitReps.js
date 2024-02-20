const db = require('../db')
const { UnitRep } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const unitReps = [

    //add slogans!
    
    {
      name: 'Robert Pence',
      owner: false,
      repPhone: '111-222-3344',
      officeAddress: '123 W Darcy ST, Pinn City, CT',
      officeHours: 'By Appointment Only',
      officeDays: 'M - F',
      unitRepImg: 'urlHere.com',
      unitRepSlogan: ''
    },
    {
      name: 'Emilie Lark',
      owner: true,
      repPhone: '333-112-1212',
      officeAddress: '123 W Darcy ST, Pinn City, CT',
      officeHours: '9am-12pm',
      officeDays: 'M, W',
      unitRepImg: 'urlHere.com',
      unitRepSlogan: ''
    },
    {
      name: 'Teddy Jones',
      owner: false,
      repPhone: '223-332-4444',
      officeAddress: '123 W Darcy ST, Pinn City, CT',
      officeHours: '10am-12pm, 1pm-3pm',
      officeDays: 'M, T, W',
      unitRepImg: 'urlHere.com',
      unitRepSlogan: ''
    },
    {
      name: 'Lara Gomez',
      owner: false,
      repPhone: '444-777-8181',
      officeAddress: '34 SW Pevington Dr, Pinn City, CT',
      officeHours: '8am-3pm, by Appointment',
      officeDays: 'M - F',
      unitRepImg: 'urlHere.com',
      unitRepSlogan: ''
    }
  ]
  await UnitRep.insertMany(unitReps)

  console.log('Added unit representatives!')
}

const run = async () => {
  await main()
  db.close()
}

run()