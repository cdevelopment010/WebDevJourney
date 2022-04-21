const burger = document.getElementById('burger'); 
const overlay = document.getElementById('overlay'); 
const closeNav = document.getElementById('closeNav'); 
const rightBox = document.querySelector('.box-right');
const leftBox = document.querySelector('.box-left');
const headerImage = document.getElementById('header-img'); 
const articles = document.querySelectorAll('article'); 
let position = 0; 

if (window.innerWidth < 600) {
    headerImage.src = './images/mobile-image-hero-1.jpg'; 
} else {
    headerImage.src = './images/desktop-image-hero-1.jpg'
}

burger.addEventListener('click', () => {
    let navItems =  document.querySelector('.sm-nav'); 
    navItems.classList.toggle('show-nav'); 
    overlay.style.display = 'block';

})
closeNav.addEventListener('click', () => {
    let navItems =  document.querySelector('.sm-nav'); 
    navItems.classList.toggle('show-nav');  
    overlay.style.display = 'none';

})

rightBox.addEventListener('click', () => {
    position = (position + 1) % 3; 
    if (window.innerWidth < 600) {
        headerImage.src = `./images/mobile-image-hero-${position+1}.jpg`; 
    } else {
        headerImage.src = `./images/desktop-image-hero-${position+1}.jpg`;
    }
    showArticle();
})
leftBox.addEventListener('click', () => {
    position = (position - 1 + 3) % 3; 
    if (window.innerWidth < 600) {
        headerImage.src = `./images/mobile-image-hero-${position+1}.jpg`; 
    } else {
        headerImage.src = `./images/desktop-image-hero-${position+1}.jpg`;
    }
    showArticle(); 
})




function showArticle() {
    //hide all articles
    articles.forEach(article => {
        article.classList.add('hidden')
    })
    //show only the current position article
    articles[position].classList.remove('hidden') 
}

