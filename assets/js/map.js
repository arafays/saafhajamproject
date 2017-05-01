'use strict';
var map,
    para = document.querySelector('#myId'),
    detailWindow = document.querySelector('.barberDetail'),
    mainImage = document.querySelector('.barberDetail img'), 
    areaWindow = document.querySelector('.areaDetail'), 
    nameId = document.querySelector('#nameId'), 
    age = document.querySelector('#age'), 
    experience = document.querySelector('#experience'), 
    timings = document.querySelector('#timings'), 
    dailyCostumers = document.querySelector('#dailyCostumers'), 
    Charges = document.querySelector('#Charges'), 
    bladesPerCustomer = document.querySelector('#bladesPerCustomer'), 
    bladeDisposal = document.querySelector('#bladeDisposal'), 
    alum = document.querySelector('#alum'), 
    towel = document.querySelector('#towel'), 
    equipmentClean = document.querySelector('#equipmentClean'), 
    scissors = document.querySelector('#scissors'), 
    brushes = document.querySelector('#brushes'), 
    trimmers = document.querySelector('#trimmers'), 
    combs = document.querySelector('#combs'), 
    ustara = document.querySelector('#ustara');


    // Create markers.
var i = 0,
    selected  = {
        riaz: {
            name: 'Riaz',
            age: '37 years',
            experience:'8 Years',
            timings: '10 am - 5 pm',
            dailyCostumers: '20 - 25',
            Charges: '30 - 60',
            bladesPerCustomer: '1',
            bladeDisposal: 'Almost Safe',
            alum: 'Yes',
            towel: '2 - 3',
            equipmentClean: 'water/dettol',
            scissors: 'One year',
            brushes: 'Half Yearly',
            trimmers: 'Never',
            combs: '2 Months',
            ustara: 'One Year',
            image: 'barberRiaz.jpg'
        },
        aslam: {
            name: 'M. Aslam',
            age: '40 - 42 years',
            experience:'5 Years',
            timings: '9 am - 5:30 pm',
            dailyCostumers: '15 - 20',
            Charges: '30 - 50',
            bladesPerCustomer: '1 - 2',
            bladeDisposal: 'Dangerous',
            alum: 'Yes',
            towel: '2 - 3',
            equipmentClean: 'water',
            scissors: 'Never',
            brushes: 'Yearly',
            trimmers: 'Never',
            combs: '3 - 4 Months',
            ustara: 'Never',
            image: 'barberAslam.jpg'
        },
        ikram: {
            name: 'M. Ikram',
            age: '36 years',
            experience:'3 Years',
            timings: '10 am - 6 pm',
            dailyCostumers: '25 - 30',
            Charges: '30 - 50',
            bladesPerCustomer: '1 - 2',
            bladeDisposal: 'Dangerous',
            alum: 'No',
            towel: '4 - 5',
            equipmentClean: 'water',
            scissors: 'Never',
            brushes: 'Yearly',
            trimmers: 'Never',
            combs: '2 - 3 Months',
            ustara: 'Yearly',
            image: 'barberIkram.jpg'
        },
        zahoor: {
            name: 'Malik Zahoor',
            age: '45 - 46 years',
            experience:'12 Years',
            timings: '10 am - 6 pm',
            dailyCostumers: '30 - 35',
            Charges: '30 - 50',
            bladesPerCustomer: '2 - 3',
            bladeDisposal: 'Almost Dangerous',
            alum: 'Yes',
            towel: '2 -4',
            equipmentClean: 'water',
            scissors: 'Never',
            brushes: 'Yearly',
            trimmers: 'Never',
            combs: 'Every Month',
            ustara: 'Yearly',
            image: 'barberZahoor.jpg'
        },
        altaf: {
            name: 'Altaf Hussain',
            age: '40 years',
            experience:'15 Years',
            timings: '9:30 am - 5:30 pm',
            dailyCostumers: '30',
            Charges: '40 - 60',
            bladesPerCustomer: '1',
            bladeDisposal: 'Almost Safe',
            alum: 'Yes',
            towel: '1',
            equipmentClean: 'water',
            scissors: 'Yearly',
            brushes: '6 Months',
            trimmers: 'Yearly',
            combs: '1 - 2 months',
            ustara: 'Yearly',
            image: 'barberAltaf.jpg'
        },
        nazik: {
            name: 'Nazik',
            age: '34 years',
            experience:'16 Years',
            timings: '9 am - Maghrib',
            dailyCostumers: '15 - 20',
            Charges: '30 - 50',
            bladesPerCustomer: '1',
            bladeDisposal: 'Almost Safe',
            alum: 'Yes',
            towel: '2',
            equipmentClean: 'water / dettol',
            scissors: 'Yearly',
            brushes: '6 Months',
            trimmers: 'never',
            combs: '2 - 3 months',
            ustara: 'Yearly',
            image: 'barberNazik.jpg'
        },
        ajmal: {
            name: 'Ajmal',
            age: '30 years',
            experience:'11 Years',
            timings: '8:30 am - 10 pm',
            dailyCostumers: '60 - 70',
            Charges: '40 - 60',
            bladesPerCustomer: '1',
            bladeDisposal: 'Dangerous',
            alum: 'Yes',
            towel: '2',
            equipmentClean: 'water',
            scissors: 'Yearly',
            brushes: 'Yearly',
            trimmers: 'never',
            combs: '2 months',
            ustara: 'Yearly',
            image: 'barberAjmal.jpg'
        },
        mian: {
            name: 'Mian Sahab',
            age: '53 years',
            experience:'28 Years',
            timings: '11 am - 5 pm',
            dailyCostumers: '15 - 20',
            Charges: '30 - 50',
            bladesPerCustomer: '2',
            bladeDisposal: 'Dangerous',
            alum: 'Yes',
            towel: 'None',
            equipmentClean: 'water',
            scissors: 'Yearly',
            brushes: 'Yearly',
            trimmers: 'never',
            combs: '3 months',
            ustara: 'Yearly',
            image: 'barberMian.jpg'
        },
        mazhar: {
            name: 'Mazhar Abbas',
            age: '43 years',
            experience:'15 Years',
            timings: '10 am - 5:30 pm',
            dailyCostumers: '20 - 25',
            Charges: '30 - 50',
            bladesPerCustomer: '1',
            bladeDisposal: 'Almost Safe',
            alum: 'Yes',
            towel: '1',
            equipmentClean: 'water / dettol',
            scissors: 'Yearly',
            brushes: '4 - 6 months',
            trimmers: 'Yearly',
            combs: '1 - 2 months',
            ustara: 'Yearly',
            image: 'barberMazhar.jpg'
        },
        iftikhar: {
            name: 'Iftikhar',
            age: '47 years',
            experience:'6 Years',
            timings: '11 am - 5 pm',
            dailyCostumers: '10 - 15',
            Charges: '30 - 50',
            bladesPerCustomer: '2 - 3',
            bladeDisposal: 'Vary Dangerous',
            alum: 'Yes',
            towel: '3 - 4',
            equipmentClean: 'water',
            scissors: 'Yearly',
            brushes: 'Yearly',
            trimmers: 'Never',
            combs: '1 - 2 months',
            ustara: 'Yearly',
            image: 'barberIftikhar.jpg'
        },
        shaukat: {
            name: 'Shaukat',
            age: '28 years',
            experience:'7 - 8 Years',
            timings: '10:30 am - 5 pm',
            dailyCostumers: '20 - 25',
            Charges: '30 - 50',
            bladesPerCustomer: '1',
            bladeDisposal: 'Almost Dangerous',
            alum: 'Yes',
            towel: '2',
            equipmentClean: 'water',
            scissors: 'Yearly',
            brushes: '4 - 5 months',
            trimmers: 'Never',
            combs: '2 months',
            ustara: 'Yearly',
            image: 'barberShaukat.jpg'
        }
    },
    mapOtions = {
        center: {
            lat: 24.9356285,
            lng: 67.0576661
        },
        zoom: 15,
        disableDefaultUI: true,
        mapTypeId: 'satellite'
    },
    iconLocal = '../assets/images/pins/',
    icons = {
        ajmal: {
            icon: iconLocal + 'pinAjmal.png'
        },
        altaf: {
            icon: iconLocal + 'pinAltaf.png'
        },
        aslam: {
            icon: iconLocal + 'pinAslam.png'
        },
        iftikhar: {
            icon: iconLocal + 'pinIftikhar.png'
        },
        ikram: {
            icon: iconLocal + 'pinIkram.png'
        },
        mazhar: {
            icon: iconLocal + 'pinMazhar.png'
        },
        mian: {
            icon: iconLocal + 'pinMian.png'
        },
        nazik: {
            icon: iconLocal + 'pinNazik.png'
        },
        riaz: {
            icon: iconLocal + 'pinRiaz.png'
        },
        shaukat: {
            icon: iconLocal + 'pinShaukat.png'
        },
        zahoor: {
            icon: iconLocal + 'pinZahoor.png'
        }
    },
    features = [
        {
            position: {lat: 24.939481,lng: 67.058297,},
            type: 'ajmal'
        }, {
            position: {lat: 24.943082,lng: 67.048497,},
            type: 'altaf'
        }, {
            position: {lat: 24.937620,lng: 67.065671,},
            type: 'aslam'
        }, {
            position: {lat: 24.936497,lng: 67.056623,},
            type: 'iftikhar'
        }, {
            position: {lat: 24.936736,lng: 67.054839,},
            type: 'ikram'
        }, {
            position: {lat: 24.930698,lng: 67.057528,},
            type: 'mazhar'
        }, {
            position: {lat: 24.925094,lng: 67.046292,},
            type: 'mian'
        }, {
            position: {lat: 24.930844,lng: 67.065920,},
            type: 'nazik'
        }, {
            position: {lat: 24.936170,lng: 67.064725,},
            type: 'riaz'
        }, {
            position: {lat: 24.925435,lng: 67.050742,},
            type: 'shaukat'
        }, {
            position: {lat: 24.937476,lng: 67.055526,},
            type: 'zahoor'
        }
    ];
    
function attachEvent(marker) {
    marker.addListener('click', function() {
        mainImage.src = `../assets/images/${marker.metadata.details.image}`;
        detailWindow.classList.remove('closed');
        detailWindow.style.opacity = 1;
        document.body.classList.add('barber-open');
        // $('#myModal').modal('show')
        nameId.innerHTML = marker.metadata.details.name;
        age.innerHTML = marker.metadata.details.age;
        experience.innerHTML = marker.metadata.details.experience;
        timings.innerHTML = marker.metadata.details.timings;
        dailyCostumers.innerHTML = marker.metadata.details.dailyCostumers;
        Charges.innerHTML = marker.metadata.details.Charges;
        bladesPerCustomer.innerHTML = marker.metadata.details.bladesPerCustomer;
        bladeDisposal.innerHTML = marker.metadata.details.bladeDisposal;
        alum.innerHTML = marker.metadata.details.alum;
        towel.innerHTML = marker.metadata.details.towel;
        equipmentClean.innerHTML = marker.metadata.details.equipmentClean;
        scissors.innerHTML = marker.metadata.details.scissors;
        brushes.innerHTML = marker.metadata.details.brushes;
        trimmers.innerHTML = marker.metadata.details.trimmers;
        combs.innerHTML = marker.metadata.details.combs;
        ustara.innerHTML = marker.metadata.details.ustara;
    });
}
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), mapOtions);
    map.addListener('click', () => {
        if (!detailWindow.classList.contains('closed')) {
            detailWindow.classList.add('closed');
            detailWindow.style.opacity = 0
        }
        if (!areaWindow.classList.contains('close')) {
            areaWindow.classList.add('close');
        }
    })
    map.addListener('drag', () => {
        if (!detailWindow.classList.contains('closed')) {
            detailWindow.classList.add('closed');
            detailWindow.style.opacity = 0
        }
        if (!areaWindow.classList.contains('close')) {
            areaWindow.classList.add('close');
        }
    })
    map.addListener('zoom_changed', () => {
        if (!detailWindow.classList.contains('closed')) {
            detailWindow.classList.add('closed');
            detailWindow.style.opacity = 0
        }
        if (!areaWindow.classList.contains('close')) {
            areaWindow.classList.add('close');
        }
    })

    //loaded fullyconsole.log('done');
    features.forEach(function(feature ,index ) {
            i++;
        window.setTimeout(function() {
            let marker = new google.maps.Marker({
                position: feature.position,
                icon: icons[feature.type].icon,
                metadata: {
                    id: i,
                    details: selected[feature.type]
                },
                map: map,
                animation: google.maps.Animation.DROP
            });
            attachEvent(marker)
        },index * 200);
    });
    addLoadEvent(preloader);
}

areaWindow.addEventListener('click', () => {
    areaWindow.classList.remove('close');
})
function preloader() {
	if (document.images) {
		var img1 = new Image(),
		    img2 = new Image(),
		    img3 = new Image(),
		    img4 = new Image(),
		    img5 = new Image(),
		    img6 = new Image(),
		    img7 = new Image(),
		    img8 = new Image(),
		    img9 = new Image(),
		    img10 = new Image(),
		    img11 = new Image();

		img1.src = "../assets/images/barberRiaz.jpg";
		img2.src = "../assets/images/barberAslam.jpg";
		img3.src = "../assets/images/barberIkram.jpg";
		img4.src = "../assets/images/barberZahoor.jpg";
		img5.src = "../assets/images/barberAltaf.jpg";
		img6.src = "../assets/images/barberNazik.jpg";
		img7.src = "../assets/images/barberAjmal.jpg";
		img8.src = "../assets/images/barberMian.jpg";
		img9.src = "../assets/images/barberMazhar.jpg";
		img10.src = "../assets/images/barberIftikhar.jpg";
		img11.src = "../assets/images/barberShaukat.jpg";
	}
}
$('.barberDetail button.close').click(()=>{
    $('.barberDetail').addClass('closed');
    $('body').removeClass('barber-open');
})
$('.barberDetail .barberMainDetail').click(()=> {
    $('body').removeClass('needMore');
})
$('.barberDetail .moreDetail').click(()=> {
    $('body').addClass('needMore');
})
