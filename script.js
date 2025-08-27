// function for increasing heart click count 
function increaseHeartCount(id) {
    const heartCount = document.getElementById(id);
    let heartCountValue = parseInt(heartCount.innerText);
    heartCountValue++;
    heartCount.innerText = heartCountValue;


}
// heart icon count 
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

//

// calling and alert function
function callNow(id, name, num) {
    const serviceName = getServiceName(name);
    const serviceNumber = getServiceNum(num);
    const availableCoin = document.getElementById(id);
    const availableCoinValueNum = parseInt(availableCoin.innerText);
    if (availableCoinValueNum >= 20) {
        alert('📞 calling ' + serviceName + " " + serviceNumber);
    }
    else {
        alert("You do not have enough coin. At least 20 coin needed for call");
        return;
    }

    const newAvailableCoinValueNum = availableCoinValueNum - 20;
    document.getElementById('coin-number').innerText = newAvailableCoinValueNum;

}



// call button functionality
document.getElementById('call-btn1')
    .addEventListener('click', function () {
        callNow('coin-number', 'service-name1', 'emergency-helpline');
    })

document.getElementById('call-btn2')
    .addEventListener('click', function () {
        callNow('coin-number', 'service-name2', 'police-helpline');
    })
document.getElementById('call-btn3')
    .addEventListener('click', function () {
        callNow('coin-number', 'service-name3', 'fire-service-helpline')
    })
document.getElementById('call-btn4')
    .addEventListener('click', function () {
        callNow('coin-number', 'service-name4', 'ambulance-helpline');
    })
document.getElementById('call-btn5')
    .addEventListener('click', function () {
        callNow('coin-number', 'service-name5', 'womenChild-helpline');
    })
document.getElementById('call-btn6')
    .addEventListener('click', function () {
        callNow('coin-number', 'service-name6', 'anty-corruption-helpline');
    })
document.getElementById('call-btn7')
    .addEventListener('click', function () {
        callNow('coin-number', 'service-name7', 'electricity-helpline');
    })
document.getElementById('call-btn8')
    .addEventListener('click', function () {
        callNow('coin-number', 'service-name8', 'brac-helpline')
    })
document.getElementById('call-btn9')
    .addEventListener('click', function () {
        callNow('coin-number', 'service-name9', 'railway-helpline');
    })

// function for increasing copy button  click count 
function increaseHeartCount(id) {
    const copyClickCount = document.getElementById(id);
    let copyClickCountValue = parseInt(copyClickCount.innerText);
    copyClickCountValue++;
    copyClickCount.innerText = copyClickCountValue;


}

// functionality of copy btn click 
document.getElementById('copyBtn-1')
    .addEventListener('click', function () {
        increaseHeartCount('copy-number');
    })
document.getElementById('copyBtn-2')
    .addEventListener('click', function () {
        increaseHeartCount('copy-number');
    })
document.getElementById('copyBtn-3')
    .addEventListener('click', function () {
        increaseHeartCount('copy-number');
    })
document.getElementById('copyBtn-4')
    .addEventListener('click', function () {
        increaseHeartCount('copy-number');
    })
document.getElementById('copyBtn-5')
    .addEventListener('click', function () {
        increaseHeartCount('copy-number');
    })
document.getElementById('copyBtn-6')
    .addEventListener('click', function () {
        increaseHeartCount('copy-number');
    })
document.getElementById('copyBtn-7')
    .addEventListener('click', function () {
        increaseHeartCount('copy-number');
    })
document.getElementById('copyBtn-8')
    .addEventListener('click', function () {
        increaseHeartCount('copy-number');
    })
document.getElementById('copyBtn-9')
    .addEventListener('click', function () {
        increaseHeartCount('copy-number');
    })

