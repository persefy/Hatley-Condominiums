//Global Variables
const navBtn = document.querySelector('#navBtn');
const navBar = document.querySelector('#navBar');

const sortBtn = document.querySelector('#unitSort');
const sortBar = document.querySelector('#unitSorting');

const sortByRent = document.querySelector('#sortByRent');
const sortBySqFt = document.querySelector('#sortBySqFt');
const sortbyBeds = document.querySelector('#sortbyBeds');
const sortByBaths = document.querySelector('#sortByBaths');
const sortByParkingCount = document.querySelector('#sortByParkingCount');
const sortByPetsYesNo = document.querySelector('#sortByYesNo');

const bensyCottageName = document.querySelector('#bensyCottage .name');
const bensyCottageImg = document.querySelector('#bensyCottage img');

const tammyHomeName = document.querySelector('#tammyHome .name');
const tammyHomeImg = document.querySelector('#tammyHome img');

const georgieFlairName = document.querySelector('#georgieFlair .name');
const georgieFlairImg = document.querySelector('#georgieFlair img');

const dorseyVillaName = document.querySelector('#dorseyVilla .name');
const dorseyVillaImg = document.querySelector('#dorseyVilla img');

const robertPenceName = document.querySelector('#robertPence.infoHolder .name');
const robertPencePhone = document.querySelector('#robertPence.infoHolder .phone');

const emilieLarkName = document.querySelector('#emilieLark.infoHolder .name');
const emilieLarkPhone = document.querySelector('#emilieLark.infoHolder .phone');

const teddyJonesName = document.querySelector('#teddyJones.infoHolder .name');
const teddyJonesPhone = document.querySelector('#teddyJones.infoHolder .phone');

const laraGomezName = document.querySelector('#laraGomez.infoHolder .name');
const laraGomezPhone = document.querySelector('#laraGomez.infoHolder .phone');

//Available Unit page
const unitDisplayHolder = document.querySelector('#unitDisplayHolder');


//Populate Data
const populateUnits = async () => {
    console.log('JS is working')
    

    let response = await axios.get(`http://localhost:3001/condoUnit`);
    console.log(response.data)


    for (let i=0; i < response.data.length; i++) {
        //get data for dynamic entry
        
        let unitAvailable = response.data[i].available;
        let unitNumber = response.data[i].unitNumber;

        if (unitAvailable) {
        
        let unitStyle = await axios.get(`http://localhost:3001/unitStyle/${response.data[i].unitStyle_id}`);
        let unitRep = await axios.get(`http://localhost:3001/unitRep/${response.data[i].unitRep_id}`);

        let unitStyleName = unitStyle.data.name;
        let unitRepName = unitRep.data.name;
        let unitRent = response.data[i].monthlyRent;
        let unitBeds = response.data[i].beds;
        let unitBaths = response.data[i].baths;
        let unitSqFt = response.data[i].sqFt;
        let unitLocation = response.data[i].location;
        let unitDeposit = response.data[i].deposit;
        let unitUtilities = response.data[i].utilitiesAvailable;
        let unitParking = response.data[i].parkingSpaces;
        let unitPetRent = response.data[i].petRent;
        let unitPetPolicy = response.data[i].petPolicy;
        let unitDescription = response.data[i].description;
        
        let unitAcceptsPets = response.data[i].acceptsPets;
        let unitImgLink = response.data[i].unitImg;

        //define Div's to be created
        let newUnitDisplayDiv = document.createElement("div"); //unit container
        let newUnitImgDiv = document.createElement("div"); //unit img div container
        let newPetTag = document.createElement("div"); //unit img pet tag div
        let newUnitImg = document.createElement("img"); //unit img tag
        let newUnitInfo = document.createElement("div"); //unit info div container
        let newUnitRent = document.createElement("div"); //unit rent amount div
        let newUnitStyle = document.createElement("div"); //unit style tag
        let newUnitLine1Style = document.createElement("div"); //wrap around rent and style
        let newUnitBeds = document.createElement("div"); // unit beds
        let newUnitBedsIcon = document.createElement("div"); // unit beds icon
        let newUnitBaths = document.createElement("div"); //unit baths
        let newUnitBathsIcon = document.createElement("div"); //unit baths icon
        let newUnitSqFt = document.createElement("div"); //unit sqFt
        let newUnitSqFtIcon = document.createElement("div"); //unit sqFt icon
        let newUnitLine2Style = document.createElement("div") //wrap around beds,baths, and sqFt
        let newAddressLocation = document.createElement("div"); //unit address location (i.e., E, W, or N)
        let newUnitNumber = document.createElement("div"); //unit number
        let newDepositPolicy = document.createElement("div"); //deposit policy
        let newUtilitiesAvailable = document.createElement("div"); //utilities available
        let newParkingSpaces = document.createElement("div"); //parking spaces
        let newPetRent = document.createElement("div"); //Pets rent
        let newPetPolicy = document.createElement("div"); //Pet policy
        let newContactBlurb = document.createElement("div"); //contact text
        let newContactBtn = document.createElement("a"); //contact text

        //Add Content
        newPetTag.innerHTML = 'Pet Friendly';
        newUnitImg.setAttribute('src',`${unitImgLink}`);
        newUnitRent.innerHTML = `&dollar;${unitRent}&#47;mo`;
        newUnitStyle.innerHTML = `${unitStyleName}`;
        newUnitBeds.innerHTML = `<strong>${unitBeds}</strong>bd`;
        newUnitBaths.innerHTML = `<strong>${unitBaths}</strong>ba`;
        newUnitSqFt.innerHTML = `<strong>${unitSqFt}</strong> sqft`;
        newAddressLocation.innerHTML = `Hatley Rd <strong>${unitLocation}</strong>, Pinn City, CT`;
        newUnitNumber.innerHTML =`<strong>Unit #</strong>${unitNumber}`;
        newDepositPolicy.innerHTML =`Deposit Policy: ${unitDeposit}`;
        newParkingSpaces.innerHTML = `<strong>Parking Spaces:</strong> ${unitParking}`;
        newPetRent.innerHTML = `<strong>Pet Rent:</strong> &dollar;${unitPetRent}&#47;mo`;
        newPetPolicy.innerHTML = `<strong>Pet Policy:</strong> ${unitPetPolicy}`;
        newContactBlurb.innerHTML =`For more information, contact the unit representative <strong>${unitRepName}</strong>`
        newUtilitiesAvailable.innerHTML =`<strong>Utilities: </strong>${unitUtilities}`
        newContactBtn.innerHTML = 'Contact Unit Representative'
        //Add to DOM
        unitDisplayHolder.append(newUnitDisplayDiv);
        newUnitDisplayDiv.classList.add('unitDisplay');

        newUnitDisplayDiv.append(newUnitImgDiv);
        if (unitAcceptsPets) {
            newUnitImgDiv.append(newPetTag);
        } 
        newUnitImgDiv.classList.add('unitImg');
        newPetTag.classList.add('petTag');
        newUnitImgDiv.append(newUnitImg);

        newUnitDisplayDiv.append(newUnitInfo);
        newUnitInfo.classList.add('unitInfo')
        newUnitInfo.append(newUnitLine1Style);
        newUnitLine1Style.classList.add('wrap')
        newUnitLine1Style.append(newUnitRent);
        newUnitRent.classList.add('unitRent');
        newUnitLine1Style.append(newUnitStyle);
        newUnitStyle.classList.add('unitStyleTag')

        newUnitInfo.append(newUnitLine2Style);
        newUnitLine2Style.classList.add('wrap');
        newUnitLine2Style.append(newUnitBeds);
        newUnitLine2Style.append(newUnitBaths);
        newUnitLine2Style.append(newUnitSqFt);

        newUnitInfo.append(newUnitNumber);
        newUnitInfo.append(newAddressLocation);
        newUnitInfo.append(newDepositPolicy);
        newUnitInfo.append(newParkingSpaces);
        // newUnitInfo.append(newUtilitiesAvailable);
        newUnitInfo.append(newPetRent);
        newUnitInfo.append(newPetPolicy);
        newUnitInfo.append(newContactBlurb);
        newUnitInfo.append(newContactBtn)
        newContactBtn.classList.add('btn');
        newContactBtn.setAttribute('href','../pages/contact.html')

        } else {
            console.log(`Not displaying unavailable unit # ${unitNumber}`);
        }
    } 
}


const populateUnitStyles = async () => {
    //pull dynamic data
    let response = await axios.get(`http://localhost:3001/unitStyle`);
    console.log(response.data[0].name)

    //Bensy Cottage
    let unitStyle0Name = response.data[0].name;
    let unitStyle0ImgUrl = response.data[0].unitStyleImg;

    //Tammy Home
    let unitStyle1Name = response.data[1].name;
    let unitStyle1ImgUrl = response.data[1].unitStyleImg;

    //Georgie Flair
    let unitStyle2Name = response.data[2].name;
    let unitStyle2ImgUrl = response.data[2].unitStyleImg;

    //Dorsey Villa
    let unitStyle3Name = response.data[3].name;
    let unitStyle3ImgUrl = response.data[3].unitStyleImg;

    //add dynamic data
    bensyCottageName.innerHTML = `${unitStyle0Name}`
    bensyCottageImg.setAttribute('src', `${unitStyle0ImgUrl}`);

    tammyHomeName.innerHTML = `${unitStyle1Name}`
    tammyHomeImg.setAttribute('src', `${unitStyle1ImgUrl}`);

    georgieFlairName.innerHTML = `${unitStyle2Name}`
    georgieFlairImg.setAttribute('src', `${unitStyle2ImgUrl}`);

    dorseyVillaName.innerHTML = `${unitStyle3Name}`
    dorseyVillaImg.setAttribute('src', `${unitStyle3ImgUrl}`);

}

const populateUnitReps = async () => {
    //pull dynamic data
    let response = await axios.get(`http://localhost:3001/unitRep`);
    console.log(response.data[0].name)

    let rep0Name = response.data[0].name;
    let rep0Phone = response.data[0].repPhone;

    let rep1Name = response.data[1].name;
    let rep1Phone = response.data[1].repPhone;

    let rep2Name = response.data[2].name;
    let rep2Phone = response.data[2].repPhone;

    let rep3Name = response.data[3].name;
    let rep3Phone = response.data[3].repPhone;

    robertPenceName.innerHTML = `${rep0Name}`;
    robertPencePhone.append(rep0Phone)

    emilieLarkName.innerHTML = `${rep1Name}`;
    emilieLarkPhone.append(rep1Phone)

    teddyJonesName.innerHTML = `${rep2Name}`;
    teddyJonesPhone.append(rep2Phone)

    laraGomezName.innerHTML = `${rep3Name}`;
    laraGomezPhone.append(rep3Phone)

}
//run functions
populateUnits()
populateUnitStyles()
populateUnitReps()

//Events

if (screen.width < 449) { 
    navBar.style.display='none';
    sortBar.style.display ='none';
}
if (screen.width > 450) {
    navBar.style.display='flex';
    sortBar.style.display ='flex';
    console.log('greater than 450px');
}
navBtn.addEventListener('click', () => {
    if (navBar.style.display == 'none') {
        navBar.style.display = 'block';
    } else if (navBar.style.display == 'block') {
            navBar.style.display = 'none';
    } else {
        console.log('error with nav bar toggle!')
    }
});

sortBtn.addEventListener('click', () => {
    if (sortBar.style.display == 'none') {
        sortBar.style.display = 'block';
    } else if (sortBar.style.display == 'block') {
        sortBar.style.display = 'none';
    } else {
        console.log('error with sort bar toggle!')
    }
});

// console.log(unitDisplayHolder.children)
// //sorting functions for units page
// sortByRent.addEventListener('click', () => { 

// });

//sortBySqFt
// sortbyBeds 
// sortByBaths
// sortByParkingCount
// sortByPetsYesNo