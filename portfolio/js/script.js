
let nav = document.querySelector('nav')

let header = document.querySelector('header')

let parentContainer = document.querySelector('.info')

// navbar menu

function Menu(e){
   e.name === 'menu-outline' ? (e.name = 'close-outline', nav.classList.add('opacity-100'), header.classList.add('h-full')) : (e.name = 'menu-outline', nav.classList.remove('opacity-100'), header.classList.remove('h-full'))
}

// read more read less

parentContainer.addEventListener('click', event => {
    const current = event.target;
    const isReadMoreBtn = current.className.includes('read-more-btn');

    if(!isReadMoreBtn) return;
    const currentText = document.querySelector('.read-more-text');
    currentText.classList.toggle('read-more-text--show');
    
    if(current.textContent.includes('Read more')){
        current.innerHTML = 'Read less <i class="fa-solid fa-angles-left ml-1">';
    }
    else{
        current.innerHTML = 'Read more <i class="fa-solid fa-angles-right ml-1">';
    }
})
