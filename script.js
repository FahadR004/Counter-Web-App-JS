let count = 0; 

const counterValue = document.getElementById('counter-machine');
const counterContainer = document.getElementById('counter-container')

function decreaseValue() {
    count--;
    counterValue.textContent = count;
    addBorder(count, counterContainer);
}

function increaseValue() {
    count++;
    counterValue.textContent = count;
    addBorder(count, counterContainer)
}

function addBorder(count, counterContainer) {
    if (count > 0) {
        counterContainer.classList.remove('negative');
        counterContainer.classList.add('positive');
    } else if (count < 0) {
        counterContainer.classList.add('negative');
        counterContainer.classList.remove('positive');
    } else { 
        counterContainer.classList.remove('positive');
        counterContainer.classList.remove('negative');
    }
}

