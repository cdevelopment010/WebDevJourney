const slider = document.getElementById('myRange'); 
const priceInput = document.getElementById('price-input'); 
const pageViews = document.querySelector('.pageviews');
const toggleSwitch = document.getElementById('toggle');
const pricesViews = {
    0: {
        views: '10K', 
        price: '$8'
    },
    1: {
        views: '50K', 
        price: '$12'
    },
    2: {
        views: '100K', 
        price: '$16'
    },
    3: {
        views: '500K', 
        price: '$24'
    },
    4: {
        views: '1M', 
        price: '$36'
    },
}

updateSlider.bind(slider)(); 
slider.addEventListener('input', updateSlider)
toggleSwitch.addEventListener('click', updatePrice); 

function updateSlider() {
    slider.style.setProperty('--left', this.value/4 * 100);
    if (toggleSwitch.checked) {
        priceInput.innerText = '$'+(pricesViews[slider.value].price).split('$')[1]*0.75;
    } else {
        priceInput.innerText = (pricesViews[slider.value].price)
    } 
    pageViews.innerText = pricesViews[this.value].views + ' pageviews';

}

function updatePrice() {
    if (toggleSwitch.checked) {
        priceInput.innerText = '$'+(pricesViews[slider.value].price).split('$')[1]*0.75;
    } else {
        priceInput.innerText = (pricesViews[slider.value].price)
    }
}

