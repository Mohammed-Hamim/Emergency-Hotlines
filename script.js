// function for increasing heart click count 
function increaseHeartCount(id) {
    const heartCount = document.getElementById(id);
    let heartCountValue = parseInt(heartCount.innerText);
    heartCountValue++;
    heartCount.innerText = heartCountValue;
}


// heart icon count click evenListener functionality
document.getElementById('heart-icon1')
    .addEventListener('click', function () {
        increaseHeartCount('heart-number')
    })
document.getElementById('heart-icon2')
    .addEventListener('click', function () {
        increaseHeartCount('heart-number')
    })
document.getElementById('heart-icon3')
    .addEventListener('click', function () {
        increaseHeartCount('heart-number')
    })
document.getElementById('heart-icon4')
    .addEventListener('click', function () {
        increaseHeartCount('heart-number')
    })
document.getElementById('heart-icon5')
    .addEventListener('click', function () {
        increaseHeartCount('heart-number')
    })
document.getElementById('heart-icon6')
    .addEventListener('click', function () {
        increaseHeartCount('heart-number')
    })
document.getElementById('heart-icon7')
    .addEventListener('click', function () {
        increaseHeartCount('heart-number')
    })
document.getElementById('heart-icon8')
    .addEventListener('click', function () {
        increaseHeartCount('heart-number')
    })
document.getElementById('heart-icon9')
    .addEventListener('click', function () {
        increaseHeartCount('heart-number')
    })



// call history btn functionality
document.getElementById('call-history-btn')
    .addEventListener('click', function () {
        console.log("btn clicked")
        document.getElementById('card-container').style.display = 'none';
        document.getElementById('call-history').style.display = 'block';
    })

// back btn functionality
document.getElementById('back-btn')
    .addEventListener('click', function () {
        document.getElementById('card-container').style.display = 'grid';
        document.getElementById('call-history').style.display = 'none';
    })

// function for getting service name and number 

function getServiceName(id) {
    const serviceName = document.getElementById(id);
    const serviceNameValue = serviceName.innerText;
    return serviceNameValue;
}

// function for getting service helpline number
function getServiceNum(id) {
    const serviceNum = document.getElementById(id);
    const serviceNumValue = serviceNum.innerText;
    return serviceNumValue;
}


// calling and alert and coin cut function
function callNow(id, name, num) {
    const serviceName = getServiceName(name);
    const serviceNumber = getServiceNum(num);
    const availableCoin = document.getElementById(id);
    const availableCoinValueNum = parseInt(availableCoin.innerText);
    if (availableCoinValueNum >= 20) {
        alert('📞 calling ' + serviceName + " " + serviceNumber);
    }
    else {
        alert("You do not have enough coin. At least 20 coin need for call");
        return;
    }

    const newAvailableCoinValueNum = availableCoinValueNum - 20;
    document.getElementById('coin-number').innerText = newAvailableCoinValueNum;

}

//  // function for creating dynamic call history

// variable for saving call data
const callData = [];

// dynamic element creator for showing call data
function dynamicElementCreator() {
    const callHistoryContainer = document.getElementById('call-history-container');
    callHistoryContainer.innerText = '';
    console.log(callHistoryContainer)
    for (const data of callData) {
        const div = document.createElement('div');
        console.log(div)
        div.innerHTML = `
            <div class="flex justify-between py-3 items-center mt-4 bg-gray-50 rounded-lg">
                    <div>
                        <h2 class="font-bold text-[18px]">${data.name}</h2>
                        <p>${data.number}</p>
                    </div>
                    <p>${data.date}</p>
                </div>
            `
        callHistoryContainer.appendChild(div)
    }
}

// function for getting call title and number 

function getCallTitleAndNumber(title, helpline) {
    const getCallTitle = document.getElementById(title).innerText;
    const getCallNum = document.getElementById(helpline).innerText;
    console.log(getCallTitle, getCallNum)
    const data = {
        name: getCallTitle,
        number: getCallNum,
        date: new Date().toLocaleTimeString()
    }
    callData.push(data);
}




// click evenListener call button functionality
document.getElementById('call-btn1')
    .addEventListener('click', function () {
        callNow('coin-number', 'service-name1', 'emergency-helpline');
        getCallTitleAndNumber("serviceTitle1", "emergency-helpline");
        dynamicElementCreator()
    })

document.getElementById('call-btn2')
    .addEventListener('click', function () {
        callNow('coin-number', 'service-name2', 'police-helpline');
        getCallTitleAndNumber("serviceTitle2", "police-helpline");
        dynamicElementCreator()
    })
document.getElementById('call-btn3')
    .addEventListener('click', function () {
        callNow('coin-number', 'service-name3', 'fire-service-helpline');
        getCallTitleAndNumber("serviceTitle3", "fire-service-helpline");
        dynamicElementCreator()
    })
document.getElementById('call-btn4')
    .addEventListener('click', function () {
        callNow('coin-number', 'service-name4', 'ambulance-helpline');
        getCallTitleAndNumber("serviceTitle4", "ambulance-helpline");
        dynamicElementCreator()
    })
document.getElementById('call-btn5')
    .addEventListener('click', function () {
        callNow('coin-number', 'service-name5', 'womenChild-helpline');
        getCallTitleAndNumber("serviceTitle5", "womenChild-helpline");
        dynamicElementCreator()
    })
document.getElementById('call-btn6')
    .addEventListener('click', function () {
        callNow('coin-number', 'service-name6', 'anti-corruption-helpline');
        getCallTitleAndNumber("serviceTitle6", "anti-corruption-helpline");
        dynamicElementCreator()
    })
document.getElementById('call-btn7')
    .addEventListener('click', function () {
        callNow('coin-number', 'service-name7', 'electricity-helpline');
        getCallTitleAndNumber("serviceTitle7", "electricity-helpline");
        dynamicElementCreator()
    })
document.getElementById('call-btn8')
    .addEventListener('click', function () {
        callNow('coin-number', 'service-name8', 'brac-helpline');
        getCallTitleAndNumber("serviceTitle8", "brac-helpline");
        dynamicElementCreator()
    })
document.getElementById('call-btn9')
    .addEventListener('click', function () {
        callNow('coin-number', 'service-name9', 'railway-helpline');
        getCallTitleAndNumber("serviceTitle9", "railway-helpline");
        dynamicElementCreator()
    })



// function for increasing copy button  click count 
function increaseHeartCount(id) {
    const copyClickCount = document.getElementById(id);
    let copyClickCountValue = parseInt(copyClickCount.innerText);
    copyClickCountValue++;
    copyClickCount.innerText = copyClickCountValue;
}

// function for copying number 
function copyNumber(id) {
    const copyText = document.getElementById(id).innerText;
    navigator.clipboard.writeText(copyText);
    alert('The number is copied successfully: ' + copyText)
}



//click evenListener  functionality of copy btn click 
document.getElementById('copyBtn-1')
    .addEventListener('click', function () {
        increaseHeartCount('copy-number');
        copyNumber('emergency-helpline')
    })
document.getElementById('copyBtn-2')
    .addEventListener('click', function () {
        increaseHeartCount('copy-number');
        copyNumber('ambulance-helpline');
        copyNumber('police-helpline');
    })
document.getElementById('copyBtn-3')
    .addEventListener('click', function () {
        increaseHeartCount('copy-number');
        copyNumber('fire-service-helpline');
    })
document.getElementById('copyBtn-4')
    .addEventListener('click', function () {
        increaseHeartCount('copy-number');
        copyNumber('ambulance-helpline');
    })
document.getElementById('copyBtn-5')
    .addEventListener('click', function () {
        increaseHeartCount('copy-number');
        copyNumber('womenChild-helpline');
    })
document.getElementById('copyBtn-6')
    .addEventListener('click', function () {
        increaseHeartCount('copy-number');
        copyNumber('anti-corruption-helpline');
    })
document.getElementById('copyBtn-7')
    .addEventListener('click', function () {
        increaseHeartCount('copy-number');
        copyNumber('electricity-helpline');
    })
document.getElementById('copyBtn-8')
    .addEventListener('click', function () {
        increaseHeartCount('copy-number');
        copyNumber('brac-helpline');
    })
document.getElementById('copyBtn-9')
    .addEventListener('click', function () {
        increaseHeartCount('copy-number');
        copyNumber('railway-helpline');
    })


