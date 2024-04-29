// Responsive menubar

let menuClicked = document.getElementById('menuClicked');
let closeIcon = document.getElementById('closeIcon');
let mainMenu = document.getElementById('responsive')


menuClicked.addEventListener('click',(e) =>{
   mainMenu.classList.toggle('menuCome');
})

// select slide and button
const slideBtn = document.querySelector('.slideBtn');
const allSlide = Array.from(document.querySelectorAll('.slideA'));
// console.log(allSlide);


// by default slide1 is visible
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


// hover effect using js
const aboutImg = document.querySelector('.about-img');
const aboutImg2 = document.querySelector('.about-img2');