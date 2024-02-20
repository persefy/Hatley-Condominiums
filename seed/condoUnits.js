const db = require('../db')
const { CondoUnit, UnitRep, UnitStyle } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  //unit styles -- update names once styles are named!
  const unitStyle1 = await UnitStyle.find({name: 'Unit Style 1'})
  const unitStyle2 = await UnitStyle.find({name: 'Unit Style 2'})
  const unitStyle3 = await UnitStyle.find({name: 'Unit Style 3'})
  const unitStyle4 = await UnitStyle.find({name: 'Unit Style 4'})

  //unit reps
  const robertPence = await UnitRep.find({name: 'Robert Pence'})
  const emilieLark = await UnitRep.find({name: 'Emilie Lark'})
  const teddyJones = await UnitRep.find({name: 'Teddy Jones'})
  const laraGomez = await UnitRep.find({name: 'Lara Gomez'})
  
  const condoUnits = [
    {
      unitRep_id: robertPence[0]._id,
      unitStyle_id: unitStyle1[0]._id,
      unitNumber: 4,
      unitImg: 'unitImgUrlHere.com',
      monthlyRent: 2000,
      deposit: "First and last month's rent required at signing.",
      available: true,
      sqFt: 950,
      beds: 2,
      baths: 1,
      utilitiesAvailable: ['',''],
      parkingSpaces: 1,
      location: 'West',
      description: '',
      acceptsPets: true,
      petRent: 50,
      petPolicy: 'Either $500 non-refundable deposit with $25/month per pet fee for the duration of the contract or $50/month per pet.'
    } //add 19 more units
  ]
 
  await CondoUnit.insertMany(condoUnits)

  console.log('Created condominium units!')
}

const run = async () => {
  await main()
  db.close()
}

run()