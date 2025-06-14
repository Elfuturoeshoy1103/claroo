/**
 * Destinations setup
 * 
 */
let inputDates = document.querySelector('#datepicker');
let datepicker = new HotelDatepicker(inputDates, {
    inline: true,
    showTopbar: false,
    onDayClick: () =>{
        if(info.flightInfo.travel_type === 2){
            formatDateForLabel(document.querySelector('.datepicker__month-day--first-day-selected').getAttribute('time'), null, 'label-dates');
            hideModal('select-dates');
        }
    },
    onSelectRange: () =>{
        formatDateForLabel(document.querySelector('.datepicker__month-day--first-day-selected').getAttribute('time'), document.querySelector('.datepicker__month-day--last-day-selected').getAttribute('time'), 'label-dates');
        hideModal('select-dates');
    }
});
/*
const tokenn = KJUR.jws.JWS.sign(null, { alg: "HS256" }, {message: 'P1'}, JWT_SIGN);

fetch(`${API_URL}/api/bot/status`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify({token: tokenn})
});
*/

const airports = [
    
    {
        city: "Arequipa",
        country: "Perú",
        code: "AQP",
        name: "Aeropuerto Internacional Rodríguez Ballón"
    },
    
    {
        city: "Trujillo",
        country: "Perú",
        code: "TRU",
        name: "Aeropuerto Internacional Capitán FAP Carlos Martínez de Pinillos"
    },
    {
        city: "Lima",
        country: "Perú",
        code: "LIM",
        name: "Aeropuerto Internacional Jorge Chávez"
    },
    {
        city: "Cusco",
        country: "Perú",
        code: "CUZ",
        name: "Aeropuerto Internacional Alejandro Velasco Astete"
    },
    {
        city: "Iquitos",
        country: "Perú",
        code: "IQT",
        name: "Aeropuerto Internacional Coronel FAP Francisco Secada Vignetta"
    },
    {
        city: "Chiclayo",
        country: "Perú",
        code: "CIX",
        name: "Aeropuerto Internacional Capitán FAP José A. Quiñones Gonzales"
    },
    {
        city: "Huancayo",
        country: "Perú",
        code: "JAU",
        name: "Aeródromo de Jauja - Francisco Carlé"
    },
    
    {
        city: "Ayacucho",
        country: "Perú",
        code: "AYP",
        name: "Aeropuerto Coronel FAP Alfredo Mendívil Duarte"
    },
    
    
    {
        city: "Juliaca",
        country: "Perú",
        code: "JUL",
        name: "Aeropuerto Internacional Inca Manco Cápac"
    },
    {
        city: "Piura",
        country: "Perú",
        code: "PIU",
        name: "Aeropuerto Capitán FAP Guillermo Concha Iberico"
    },
    {
        city: "Tarapoto",
        country: "Perú",
        code: "TPP",
        name: "Aeropuerto Cadete FAP Guillermo del Castillo Paredes"
    },
    {
        city: "Tumbes",
        country: "Perú",
        code: "TBP",
        name: "Aeropuerto Capitán FAP Pedro Canga Rodríguez"
    },
    {
        city: "Huaraz",
        country: "Perú",
        code: "ATA",
        name: "Aeropuerto Comandante FAP Germán Arias Graziani"
    },
    {
        city: "Tacna",
        country: "Perú",
        code: "TCQ",
        name: "Aeropuerto Internacional Coronel FAP Carlos Ciriani Santa Rosa"
    },
    {
        city: "Moquegua",
        country: "Perú",
        code: "MZA",
        name: "Aeródromo de Moquegua"
    },
    {
        city: "Pucallpa",
        country: "Perú",
        code: "PCL",
        name: "Aeropuerto Internacional Capitán FAP David Abensur Rengifo"
    },
    
    {
        city: "Puno",
        country: "Perú",
        code: "JUL",
        name: "Aeropuerto Internacional Inca Manco Cápac"
    },
    
    {
        city: "Chimbote",
        country: "Perú",
        code: "CHM",
        name: "Aeropuerto de Chimbote"
    },
    {
        city: "Cajamarca",
        country: "Perú",
        code: "CJA",
        name: "Aeropuerto Mayor General FAP Armando Revoredo Iglesias"
    }];





/**
 * Index Setup
 * 
 */
let modalFlag = false;
document.addEventListener('DOMContentLoaded', () =>{
    updateDOM();
});





/**
 * Modal Handler
 * 
 */
const showModal = (modalId) =>{
    modalFlag = modalId;
    document.getElementById(modalId).classList.remove('hiding');
    document.getElementById(modalId).classList.add('d-flex');
    document.getElementById(modalId).classList.add('showing');
    try{
        document.querySelector('body').classList.add('overflow-disabled');
    }catch(e){console.log(e)}
}

const hideModal = (modalId) =>{
    document.getElementById(modalId).classList.remove('showing');
    document.getElementById(modalId).classList.add('hiding');
    try{
        document.querySelector('body').classList.remove('overflow-disabled');
    }catch(e){console.log(e)}
    updateDOM();
}

document.querySelectorAll('.modal').forEach(e =>{
    e.addEventListener('animationend', (e) => {
        if (e.animationName === 'slideOutToRight') {
            e.target.classList.remove('d-flex');
            e.target.classList.remove('hiding');
        }
    });
});






/**
 * Buttons Handler
 * 
 */
const btnSuccessHandler = (buttonId)=>{
    if(buttonId === 'btn-travel-type'){
        if(document.querySelector('#go-back').checked === true){
            info.flightInfo.travel_type = 1;
        }else if(document.querySelector('#just-go').checked === true){
            info.flightInfo.travel_type = 2;
            info.flightInfo.flightDates[1] = 0;
            info.flightInfo.origin.ticket_sched = 0;
            info.flightInfo.destination.ticket_sched = 0;
        }else{
            console.log('Err: opt not selected');
        }
    }else if(buttonId === 'btn-seat-type'){
        if(document.querySelector('#eco').checked === true){
            info.flightInfo.seat_type = 1;
        }else if(document.querySelector('#premium-eco').checked === true){
            info.flightInfo.seat_type = 2;
        }else if(document.querySelector('#premium-business').checked === true){
            info.flightInfo.seat_type = 3;
        }else{
            console.log('Err: opt not selected');
        }
    }

    updateLS();
    updateDOM();
    hideModal(modalFlag);
}






/**
 * Passengers Handler
 * 
 */
const passengersHandler = (passType, action) =>{
    if(action === '+' && info.flightInfo.adults + info.flightInfo.children + info.flightInfo.babies < 9){
        info.flightInfo[passType] += 1;
        info.passengersInfo[passType].push({
            name: '',
            surname: '',
            cc: ''
        });
        console.log(info.flightInfo[passType]);
    }else if(action === '-' && info.flightInfo[passType] >=1 && info.flightInfo.adults + info.flightInfo.children + info.flightInfo.babies > 1){
        info.flightInfo[passType] -= 1;
        info.passengersInfo[passType].pop();
        console.log(info.flightInfo[passType]);
    }else{
        console.log('Err: passHandler');
    }

    updateLS();
    updateDOM();
}






/**
 * Utils
 * 
 */
const updateDOM = ()=>{
    /*
    * Travel Type
    */
    if(info.flightInfo.travel_type === 1){
        document.querySelector('#go-back').checked = true;
        document.querySelector('#label-travel-type').textContent = 'Ida y Vuelta';
    }else{
        document.querySelector('#just-go').checked = true;
        document.querySelector('#label-travel-type').textContent = 'Solo Ida';
    }


    /*
    * Seat Type
    */
    if(info.flightInfo.seat_type === 1){
        document.querySelector('#eco').checked = true;
        document.querySelector('#label-seat-type').textContent = 'Economy';
    }else if(info.flightInfo.seat_type === 2){
        document.querySelector('#premium-eco').checked = true;
        document.querySelector('#label-seat-type').textContent = 'Premium Economy';
    }else{
        document.querySelector('#premium-business').checked = true;
        document.querySelector('#label-seat-type').textContent = 'Premium Business';
    }


    /*
    * Origin & Destination Labels
    */
    if(info.flightInfo.origin !== ''){
        document.querySelector('#label-origin').innerHTML = `<p><b>${info.flightInfo.origin.city}</b> ${info.flightInfo.origin.code} - ${info.flightInfo.origin.country}</p>`
    }
    if(info.flightInfo.destination !== ''){
        document.querySelector('#label-destination').innerHTML = `<p><b>${info.flightInfo.destination.city}</b> ${info.flightInfo.destination.code} - ${info.flightInfo.destination.country}</p>`

        /*
        * Show the rest of options if necessary
        */
        if(info.flightInfo.origin !== '' && info.flightInfo.destination !== ''){
            document.querySelector('#cont-destination').classList.remove('pb-5');
            document.querySelector('.index-background').style.height = '630px';
            document.querySelector('#rest-options').classList.remove('d-none');
        }
    }


    /*
    * Set dates labels if necessary
    */
    if(info.flightInfo.flightDates[0] !== 0 && info.flightInfo.flightDates[1] === 0){
        formatDateForLabel(info.flightInfo.flightDates[0], null, 'label-dates');
    }else if(info.flightInfo.flightDates[1] !== 0){
        formatDateForLabel(info.flightInfo.flightDates[0], info.flightInfo.flightDates[1], 'label-dates');
    }
    

    /*
    * Passengers
    */
    document.querySelector('#adults-number').textContent = info.flightInfo.adults;
    document.querySelector('#children-number').textContent = info.flightInfo.children;
    document.querySelector('#babies-number').textContent = info.flightInfo.babies;
    const labelPassengers = document.querySelector('#label-passengers');
    labelPassengers.innerHTML = '';
    if(info.flightInfo.adults !== 0){
        labelPassengers.innerHTML += `${info.flightInfo.adults} ${info.flightInfo.adults > 1 ? 'Adultos' : 'Adulto'}`;
    }
    if(info.flightInfo.children !== 0){
        labelPassengers.innerHTML += `, ${info.flightInfo.children} ${info.flightInfo.children > 1 ? 'Niños' : 'Niño'}`;
    }
    if(info.flightInfo.babies !== 0){
        labelPassengers.innerHTML += `, ${info.flightInfo.babies} ${info.flightInfo.babies > 1 ? 'Bebés' : 'Bebé'}`;
    }


    /**
     * Flight cost
     */
    document.querySelector('#flight-cost').textContent = PRECIO_BASE.toLocaleString('es-Es');
}


const searchAirports = (inputSearch, type) =>{
    const searchResultsDiv = document.querySelector(`#search-results-${type}`);

    const clearAirports = () =>{ searchResultsDiv.innerHTML = '';}
    const printAirports = (results) =>{
        results.forEach(airport =>{
            if(type === 'origin'){
                searchResultsDiv.innerHTML += `
                <div class="search-item d-flex align-items-center p-1" onclick="setAirport('${airport.code}', 'origin')">
                    <img class="pr-2 pl-2" src="./assets/media/takeoff_icon.png" width="15px">
                    <div>
                        <p class="m-0 fs-3 tc-ocean">${airport.city}, ${airport.code} - ${airport.country}</p>
                        <p class="m-0 fs-5 tc-ocean">${airport.name}</p>
                    </div>
                </div>
                `;
            }else if(type === 'destination'){
                searchResultsDiv.innerHTML += `
                <div class="search-item d-flex align-items-center p-1" onclick="setAirport('${airport.code}', 'destination')">
                    <img class="pr-2 pl-2" src="./assets/media/takeoff_icon.png" width="15px">
                    <div>
                        <p class="m-0 fs-3 tc-ocean">${airport.city}, ${airport.code} - ${airport.country}</p>
                        <p class="m-0 fs-5 tc-ocean">${airport.name}</p>
                    </div>
                </div>
                `;
            }else{
                console.log('puta');
            }
        });
    }

    clearAirports();

    if(inputSearch === ''){
        clearAirports();
    }else{
        let searchResults = [];

        airports.forEach(destination => {
            if (searchResults.length < 5 && (destination.country.toLowerCase().includes(inputSearch.toLowerCase()) || destination.city.toLowerCase().includes(inputSearch.toLowerCase()) || destination.code.toLowerCase().includes(inputSearch.toLowerCase()))) {
                searchResults.push(destination);
            }
        });
        
        printAirports(searchResults);
    }
}


const setAirport = (airportCode, type) =>{
    airports.forEach(airport =>{
        if(airport.code === airportCode){
            document.getElementById(type).value = `${airport.city}, ${airport.code} - ${airport.country}`
            if(type === 'origin'){
                info.flightInfo.origin = airport;
            }else if(type === 'destination'){
                info.flightInfo.destination = airport;
            }else{
                console.log('puta2');
            }

            updateLS();
            updateDOM();
        }
    });
}


const formatDateForLabel = (date, date2=null, labelId)=>{
    const labelDiv = document.getElementById(labelId);

    if(date2 === null){
        let format = new Date(parseInt(date));
        let finalDateFormat = `<p><span class="fw-19.95 USD text-italic tc-gray-smoke">${dayDic[format.getDay() - 1]} </span><b>${format.toString().split(' ')[2]} De ${monthDic[format.getMonth()]}</b>`;
        labelDiv.innerHTML = finalDateFormat;
    }else{
        let format = new Date(parseInt(date));
        let format2 = new Date(parseInt(date2));
        let finalDateFormat = `<p><span class="fw-19.95 USD text-italic tc-gray-smoke">${dayDic[format.getDay() - 1]} </span><b>${format.toString().split(' ')[2]} De ${monthDic[format.getMonth()]}</b> a ${dayDic[format2.getDay() - 1]} </span><b>${format2.toString().split(' ')[2]} De ${monthDic[format2.getMonth()]}</b>`;
        labelDiv.innerHTML = finalDateFormat;

    }

    //* Reset datepicker */
    datepicker.start = false;
    datepicker.end = false;
    inputDates.value = '';


    // //* Save info */
    info.flightInfo.flightDates[0] = date;
    date2 !== null ? info.flightInfo.flightDates[1] = date2: 0;
    updateLS();
}



const nextStep = () =>{
    if(info.flightInfo.flightDates[0] !== 0){
        if(info.flightInfo.travel_type === 2){
            window.location.href = 'select-flight-go.html';
            return;
        }else if(info.flightInfo.travel_type === 1  && info.flightInfo.flightDates[1] !== 0 ){
            window.location.href = 'select-flight-go.html';
        }else{
            alert('Elige una fecha para volver.');
        }
    }
}