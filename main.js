document.getElementById('first-class-increase').addEventListener('click', function () {
    handleCountChange('first', true);
});
document.getElementById('first-class-decrease').addEventListener('click', function () {
    handleCountChange('first', false);
});
document.getElementById('economy-class-increase').addEventListener('click', function () {
    handleCountChange('economy', true);
});
document.getElementById('economy-class-decrease').addEventListener('click', function () {
    handleCountChange('economy', false);
});

// calculate count

function handleCountChange(product, isIncrease) {
    const quantityCount = getInputValue(product);
    let quantityNewCount = quantityCount;
    if (isIncrease == true) {
        quantityNewCount = quantityCount + 1;
    }
    if (isIncrease == false && quantityCount > 0) {
        quantityNewCount = quantityCount - 1;
    }
    document.getElementById(product+'-count').value = quantityNewCount;
    calculateTotal();
}

// calculate total value

function calculateTotal() {
    const firstCount = getInputValue('first');
    const economyCount = getInputValue('economy');
    const totalPrice = firstCount * 150 + economyCount * 100;
    document.getElementById('total-price').innerText = '$' + totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = '$' + tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
}

// get product value

function getInputValue(product) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    return productCount;
}


function bookButton(){
    document.getElementById('main-section').style.display = "none";
    document.getElementById('print-ticket').style.display = "block";

    document.getElementById('flying-from').innerText = document.getElementById('fly-from').value;
    document.getElementById('flying-to').innerText = document.getElementById('fly-to').value;

    document.getElementById('departure').innerText = document.getElementById('departure-date').value;
    document.getElementById('return').innerText = document.getElementById('return-date').value;

    document.getElementById('first-class-ticket').innerText = document.getElementById('first-count').value;
    document.getElementById('economy-class-ticket').innerText = document.getElementById('economy-count').value;
    document.getElementById('total-amount').innerText = document.getElementById('grand-total').innerText;
}

