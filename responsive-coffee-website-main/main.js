/*=============== LOADER ================*/
onload = () => {
    const loader = document.getElementById('load');

    setTimeout(() =>{
        load.style.display = 'none';
    }, 1000);
}


/*=============== Show Menu ================*/
const navMenu = document.getElementById('nav-menu'), 
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/*=============== Menu Show ================*/

if(navToggle){
    navToggle.addEventListener('click', ()=> {
        navMenu.classList.add('show-menu')
    });
};

/*=============== Menu Hidden ================*/

if(navClose){
    navClose.addEventListener('click', ()=> {
        navMenu.classList.remove('show-menu')
    });
};

/*=============== Remove Menu Mobile ================*/

const navLink = document.querySelectorAll('.nav_link')

function linkAction (){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu');
};

navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ================*/

function scrollHeader(){
    const header = document.getElementById('header');

    if(this.scrollY >= 50){
        header.classList.add('scroll-header');
    }else{
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

/*=============== MIXITUP FILTER PRODUCTS ================*/

let mixerProducts = mixitup('.products_content', {
    selectors: {
        target: '.products_card'
    },
    animation: {
        duration: 300
    }
});


/*=============== Default FILTER PRODUCTS ================*/

mixerProducts.filter('.delicacies')

/*=============== Link active PRODUCTS ================*/

const linkProducts = document.querySelectorAll('.products_item')

function activeProducts(){
    linkProducts.forEach(l=>l.classList.remove('active_product'));
    this.classList.add('active_product');
}

linkProducts.forEach(l=>l.addEventListener('click', activeProducts));

/*=============== SHOW SCROLL UP ================*/

function scrollUp (){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 350 ){
        scrollUp.classList.add('show-scroll');
    }else{
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUp);





/*=============== SCROLL SECTIONS ACTIVE LINK ================*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
    
}

window.addEventListener('scroll', scrollActive)


