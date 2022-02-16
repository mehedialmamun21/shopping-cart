function caseCalculation(x, isPlus) {
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;

    const caseUpdateAmount = document.getElementById('case-update-amount');

    if (isPlus == true) {
        caseInput.value = parseInt(caseNumber) + 1;
    }
    else if (isPlus == false && caseInput.value > 0) {
        caseInput.value = parseInt(caseNumber) - 1;
    }
    caseUpdateAmount.innerText = caseInput.value * 59;
    return parseInt(caseUpdateAmount.innerText);
}

document.getElementById('case-plus').addEventListener('click', function () {

    const a = 0;
    caseCalculation(a, true);

})
document.getElementById('case-minus').addEventListener('click', function () {

    const b = 0;
    caseCalculation(b, false);

})

function phoneCalculation(x, isIncreasing) {
    const appleInput = document.getElementById('apple-number');
    const appleNumber = appleInput.value;

    const phoneUpdateAmount = document.getElementById('phone-update-amount');

    if (isIncreasing == true) {
        appleInput.value = parseInt(appleNumber) + 1;
    }
    else if (isIncreasing == false && appleInput.value > 0) {
        appleInput.value = parseInt(appleNumber) - 1;
    }
    phoneUpdateAmount.innerText = appleInput.value * 1219;
    return parseInt(phoneUpdateAmount.innerText);
}
document.getElementById('apple-plus').addEventListener('click', function () {
    const c = 0;
    phoneCalculation(c, true);
})
document.getElementById('apple-minus').addEventListener('click', function () {
    const d = 0;
    phoneCalculation(d, false);
})



document.getElementById('check-button').addEventListener('click', function () {

    const subTotal = document.getElementById('sub-total');

    const phoneAmount = phoneCalculation();
    const caseAmount = caseCalculation();
    subTotal.innerText = phoneAmount + caseAmount;

    const taxAmount = document.getElementById('tax-amount');
    taxAmount.innerText = (5 * parseInt(subTotal.innerText)) / 100;

    const totalAmount = document.getElementById('total-amount');
    const subTotalValue = parseFloat(subTotal.innerText);
    const taxValue = parseFloat(taxAmount.innerText);
    totalAmount.innerText = subTotalValue + taxValue;
})