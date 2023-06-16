const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;

// Check the length of our right slides
// console.log(slidesLength);

let activeSlideIndex = 0

// Correctly aligninig left sides to each right side
slideLeft.style.top = `-${(slidesLength-1) * 100 }vh`

upButton.addEventListener('click',() => changeSlide('up'))
downButton.addEventListener('click',() => changeSlide('down'))

// Create changeSlide funcntion
const changeSlide = (direction) =>{
    const sliderHeight = sliderContainer.clientHeight
    // if direction is up
    if (direction ==='up'){
        activeSlideIndex++
        // If current slide index exceeds total slide length,set index to 0
        if (activeSlideIndex>slidesLength -1){
            activeSlideIndex = 0
        }
    } else if(direction === 'down'){
        activeSlideIndex--
        if (activeSlideIndex<0){
            activeSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`

    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`

}