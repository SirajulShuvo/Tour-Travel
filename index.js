// Responsive menubar
function menuBar(){
    let menuClicked = document.getElementById('menuClicked');
    let closeIcon = document.getElementById('closeIcon');
    let mainMenu = document.getElementById('responsive')

    menuClicked.addEventListener('click',(e) =>{
    mainMenu.classList.toggle('menuCome');
    })
}
menuBar();


// select slide and button
function bannerSlider(){
    const slideBtn = document.querySelector('.slideBtn');
    const allSlide = Array.from(document.querySelectorAll('.slideA'));
    // by default slide1 is visible...
    allSlide.forEach((slide, index) => {
        if (index === 0) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
    // 
    slideBtn.addEventListener('click',(e) => {
        if(e.target.dataset.category !== undefined){
            slideFilter(e.target.dataset.category);
        }
    })

    function slideFilter(value) {
        allSlide.forEach((currEle,index) =>{
            // console.log(currEle.dataset.category || index === 0);
            if(currEle.dataset.category === value){
                currEle.style.display = 'block';
            }else{
                currEle.style.display = 'none';
            }
        })
    }
}
bannerSlider();


// hover effect using js
function priceSlider(){
    const allPrice = document.querySelectorAll('.allPrice');
    const length = allPrice.length;
    const next = document.getElementById('Next');
    const previous = document.getElementById('Previous');
    let sliderNumber = 0;

    function changePosition(){
        allPrice.forEach((element,index) => {
            element.style.left = `${index * 100}%`;
        });
    }
    changePosition();

    next.addEventListener('click',(e) => {
        if(sliderNumber < length - 1){
            sliderNumber++;
        } else {
            sliderNumber = 0;
        }
        slideAllDive();
    });

    previous.addEventListener('click',(e) => {
        if(sliderNumber > 0){
            sliderNumber--;
        } else {
            sliderNumber = length - 1;
        }
        slideAllDive();
    });

    function slideAllDive() {
        allPrice.forEach((element,index) => {
            element.style.transform = `translateX(-${sliderNumber * 100}%)`;
        });
    }
}
priceSlider();


// review slider
function reviewSliderAll(){
    const reviewAllSlider = document.querySelectorAll('.context')
    const reviewDot = document.querySelector('.review-dot');
    for(let i = 0 ; i < reviewAllSlider.length; i++){
        const dot = document.createElement('div');
        dot.className = 'dotBtn';
        reviewDot.appendChild(dot);
    }

    function changeReview(){
        reviewAllSlider.forEach((element,index) => {
            element.style.left = `${index * 100}%`;
        });
    }
    changeReview();

    const dotBtn = Array.from(document.querySelectorAll('.dotBtn'))
    dotBtn[0].style.background = '#1DC3AD';
    function changeDotColor(selectedIndex) {
        dotBtn.forEach((button, index) => {
            button.style.background = index === selectedIndex ? '#1DC3AD' : 'transparent';
        });
    }

    dotBtn.forEach((element,index) => {
        element.addEventListener('click',(e) => {
            reviewAllSlider.forEach((ele,i) =>{
                ele.style.transform = `translateX(-${index*100}%)`;
            })
            changeDotColor(index);
        })
    })
}

reviewSliderAll();

function hoverPlace() {
    const placeImg = Array.from(document.querySelectorAll('.place-img'));
    const originalInnerHtmlMap = new Map();
    placeImg.forEach((element) => {
        const imgContent = element.querySelector('.img-content');
        const imgDescription = element.querySelector('.img-decription');
        originalInnerHtmlMap.set(element, imgContent.innerHTML);

        element.addEventListener('mouseover', (e) => {
            imgDescription.classList.add('active1');
            imgContent.classList.add('active2');
            imgContent.innerHTML = 'Discover now >>';
        });

        element.addEventListener('mouseleave', (e) => {
            imgDescription.classList.remove('active1');
            imgContent.classList.remove('active2');
            imgContent.innerHTML = originalInnerHtmlMap.get(element);
        });
    });
}
hoverPlace();


// card hover effect 
function cardHover() {
    const cardHoverAll = Array.from(document.querySelectorAll('.card-hover'));
    cardHoverAll.forEach((element) => {
        element.addEventListener('mouseover', (e) => {
            element.classList.add('cardActive');
        });

        element.addEventListener('mouseleave', (e) => {
            element.classList.remove('cardActive');
        });
    });
}
cardHover();


// footer hovereffect
function foterHover(){
    const hoterLike = Array.from(document.querySelectorAll('#fotLinke'))
    hoterLike.forEach((element) =>  {
        element.addEventListener('mouseover',(e) => {
            element.classList.add('footerActive');
        })
        element.addEventListener('mouseleave',(e) => {
            element.classList.remove('footerActive');
        })
    })
}

foterHover();