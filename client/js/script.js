//Global Variables
const navBtn = document.querySelector('#navBtn');
const navBar = document.querySelector('#navBar');

const sortBtn = document.querySelector('#unitSort');
const sortBar = document.querySelector('#unitSorting')

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
        newContactBtn.setAttribute('href','../pages/about.html')

        } else {
            console.log(`Not displaying unavailable unit # ${unitNumber}`);
        }
    } 
}

//document.body.onload = populateUnits;
populateUnits()

//Events
navBar.style.display='none';
navBtn.addEventListener('click', () => {
    if (navBar.style.display == 'none') {
        navBar.style.display = 'block';
    } else if (navBar.style.display == 'block') {
            navBar.style.display = 'none';
    } else {
        console.log('error with nav bar toggle!')
    }
});

sortBar.style.display ='none';
sortBtn.addEventListener('click', () => {
    if (sortBar.style.display == 'none') {
        sortBar.style.display = 'block';
    } else if (sortBar.style.display == 'block') {
        sortBar.style.display = 'none';
    } else {
        console.log('error with sort bar toggle!')
    }
});