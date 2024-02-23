//Global Variables
const navBtn = document.querySelector('#navBtn');
const navBar = document.querySelector('#navBar');

//Available Unit page
const unitDisplayHolder = document.querySelector('#unitDisplayHolder');



//Populate Data
//#unitDisplayHolder should display each unit marked as available
const populateUnits = async () => {
    console.log('JS is working')
    

    let response = await axios.get(`http://localhost:3001/condoUnit`);
    console.log(response.data)


    for (let i=0; i < response.data.length; i++) {
        //get data for dynamic entry
        let unitStyle = await axios.get(`http://localhost:3001/unitStyle/${response.data[i].unitStyle_id}`);
        let unitRep = await axios.get(`http://localhost:3001/unitRep/${response.data[i].unitRep_id}`);

        let unitStyleName = unitStyle.data.name;
        let unitRepName = unitRep.data.name;
        let unitRent = response.data[i].monthlyRent;
        let unitBeds = response.data[i].beds;
        let unitBaths = response.data[i].baths;
        let unitSqFt = response.data[i].sqFt;
        let unitLocation = response.data[i].location;
        let unitNumber = response.data[i].unitNumber;
        let unitDeposit = response.data[i].deposit;
        let unitUtilities = response.data[i].utilitiesAvailable;
        let unitParking = response.data[i].parkingSpaces;
        let unitPetRent = response.data[i].petRent;
        let unitPetPolicy = response.data[i].petPolicy;
        let unitDescription = response.data[i].description;
        let unitAvailable = response.data[i].available;
        let unitAcceptsPets = response.data[i].acceptsPets;

        //define Div's to be created
        let newUnitDisplayDiv = document.createElement("div"); //unit container
        let newUnitImgDiv = document.createElement("div"); //unit img div container
        let newPetTag = document.createElement("div"); //unit img pet tag div
        let newUnitImg = document.createElement("div"); //unit img tag
        
        let newUnitInfo = document.createElement("div"); //unit info div container
        let newUnitRent = document.createElement("div"); //unit rent amount div
        let newUnitStyle = document.createElement("div"); //unit style tag
        let newUnitBeds = document.createElement("div"); // unit beds
        let newUnitBedsIcon = document.createElement("div"); // unit beds icon
        let newUnitBaths = document.createElement("div"); //unit baths
        let newUnitBathsIcon = document.createElement("div"); //unit baths icon
        let newUnitSqFt = document.createElement("div"); //unit sqFt
        let newUnitSqFtIcon = document.createElement("div"); //unit sqFt icon
        let newAddressLocation = document.createElement("div"); //unit address location (i.e., E, W, or N)
        let newUnitNumber = document.createElement("div"); //unit number
        let newDepositPolicy = document.createElement("div"); //deposit policy
        
        let newAdditionalDetailsHeading = document.createElement("div"); //bolded in-between text
        
        let newUtilitiesAvailable = document.createElement("div"); //utilities available
        let newParkingSpaces = document.createElement("div"); //parking spaces
        
        let newPetsHeading = document.createElement("div"); //Pets heading
        let newPetRent = document.createElement("div"); //Pets rent
        let newPetPolicy = document.createElement("div"); //Pet policy
        let newContactBlurb = document.createElement("div"); //contact text

    
        //Add Content
        newUnitRent.innerHTML = `&dollar;${unitRent}&#47;mo`;
        newUnitStyle.innerHTML = `${unitStyleName}`;
        newUnitBeds.innerHTML = `${unitBeds}bd`;
        newUnitBaths.innerHTML = `${unitBaths}ba`;
        newUnitSqFt.innerHTML = `${unitSqFt} sqft`;
        newAddressLocation.innerHTML = `Hatley Rd ${unitLocation}`;
        newUnitNumber.innerHTML =`Unit #${unitNumber}`;
        newDepositPolicy.innerHTML =`Deposit Policy: ${unitDeposit}`;
        newParkingSpaces.innerHTML = `Parking Spaces: ${unitParking}`;
        newPetRent.innerHTML = `&dollar;${unitPetRent}&#47;mo`;
        newPetPolicy.innerHTML = `Pet Policy: ${unitPetPolicy}`;
        newContactBlurb.innerHTML =`For more information, contact the unit representative ${unitRepName}`


        //Add to DOM
        unitDisplayHolder.append(newUnitDisplayDiv);
        newUnitDisplayDiv.append(newUnitRent);
        newUnitDisplayDiv.classList.add('unitDisplay');
        newUnitDisplayDiv.append(newUnitStyle);
        newUnitDisplayDiv.append(newUnitBeds);
        newUnitDisplayDiv.append(newUnitBaths);
        newUnitDisplayDiv.append(newUnitSqFt);
        newUnitDisplayDiv.append(newAddressLocation);
        newUnitDisplayDiv.append(newUnitNumber);
        newUnitDisplayDiv.append(newDepositPolicy);
        newUnitDisplayDiv.append(newParkingSpaces);
        newUnitDisplayDiv.append(newPetRent);
        newUnitDisplayDiv.append(newPetPolicy);
        newUnitDisplayDiv.append(newContactBlurb);

        }   
}


//     unitDisplayHolder.append(`
//     <div class="unitDisplay">
//     <div class="unitImg">
//         <div class="petTag">Pet Friendly</div>
//         <img src="https://morguefile.nyc3.cdn.digitaloceanspaces.com/imageData/public/files/o/o0o0xmods0o0o/preview/fldr_2008_11_28/file000658805796.jpg" alt="unit image">
//     </div>

//     <div class="unitInfo">
//         <div class="unitRent">&dollar;<span class="dynamicData">2000</span>&#47;mo</div>
//         <div class="styleTag"><span class="dynamicData">Bensy Cottage</span></div>
//         <div class="unitBeds"><img src="#" alt="beds icon"/> <span class="dynamicData">2</span> bd</div>
//         <div class="unitBaths"><img src="#" alt="baths icon"/> <span class="dynamicData">2</span> bd</div>
//         <div class="unitSqFt"><img src="#" alt="sqft icon"/> <span class="dynamicData">950</span> sqft</div>
//         <div class="Address">
//             <img src="#" alt="location icon"/> Hatley Rd <span class="dynamicData">W</span>,
//             Unit # <span class="dynamicData">1</span><br>
//             Pinn City, CT
//         </div>
//         <div class="unitDeposit">Deposit Policy <span class="dynamicData">Policy Here</span> </div>
//         <div>Additional Details:</div>
//         <div class="unitUtilities">Utilities Available: <span class="dynamicData">Utilities Here</span></div>
//         <div class="unitParking">Parking Spaces: <span class="dynamicData">1</span></div>
//         <div>Pets:</div>
//         <div class="petRent">&dollar;<span class="dynamicData">20</span>&#47;mo</div>
//         <div class="petPolicy">Pet Policy:<span class="dynamicData">policy here</span></div>
//         <div class="unitRep">
//             For more information, contact the unit representative <span class="dynamicData">Robert P</span>
//             <button>Get in touch</button>
//         </div>
//         <button class="showMore">See More</button>
//     </div>
// </div>
// `
//     )
    
//}
document.body.onload = populateUnits;

//Events
navBtn.addEventListener('click', () => {
    if (navBar.style.display == 'none') {
        navBar.style.display = 'block';
    } else if (navBar.style.display == 'block') {
            navBar.style.display = 'none';
    } else {
        console.log('error with nav bar toggle!')
    }
});