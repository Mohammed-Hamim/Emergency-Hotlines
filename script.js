// call history btn functiontality
document.getElementById('call-history-btn')
    .addEventListener('click', function () {
        console.log("btn clicked")
        document.getElementById('card-container').style.display = 'none'
        document.getElementById('call-history').style.display = 'block'
    })

// back btn functionality
document.getElementById('back-btn')
    .addEventListener('click', function () {
        document.getElementById('card-container').style.display = 'grid'
        document.getElementById('call-history').style.display = 'none'
    })



function callNow(id) {
    const availableCoin = document.getElementById(id);
    const availableCoinValueNum = parseInt(availableCoin.innerText);
    if (availableCoinValueNum >= 20) {
        alert('cost 20 coin for every call')
    }
    else {
        alert("not enough coin")
        return;
    }

    const newavailableCoinValueNum = availableCoinValueNum - 20;
    document.getElementById('coin-number').innerText = newavailableCoinValueNum;
    console.log(newavailableCoinValueNum)
}

// call button functionality
document.getElementById('call-btn1')
    .addEventListener('click', function () {
        callNow('coin-number')
    })
document.getElementById('call-btn2')
    .addEventListener('click', function () {
        callNow('coin-number')
    })
document.getElementById('call-btn3')
    .addEventListener('click', function () {
        callNow('coin-number')
    })
document.getElementById('call-btn4')
    .addEventListener('click', function () {
        callNow('coin-number')
    })
document.getElementById('call-btn5')
    .addEventListener('click', function () {
        callNow('coin-number')
    })
document.getElementById('call-btn6')
    .addEventListener('click', function () {
        callNow('coin-number')
    })
document.getElementById('call-btn7')
    .addEventListener('click', function () {
        callNow('coin-number')
    })
document.getElementById('call-btn8')
    .addEventListener('click', function () {
        callNow('coin-number')
    })
document.getElementById('call-btn9')
    .addEventListener('click', function () {
        callNow('coin-number')
    })