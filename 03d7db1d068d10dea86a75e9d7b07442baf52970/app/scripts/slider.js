/* Slider related stuff */
let nextSliderSmall = document.getElementById('nextSliderSmall');
nextSliderSmall.addEventListener('click', function(event) {
    moveSlider('sliderSmall','positive', 126)
}, false);

let prevSliderSmall = document.getElementById('prevSliderSmall');
prevSliderSmall.addEventListener('click', function(event) {
    moveSlider('sliderSmall','negative', 126)
}, false);

let nextSliderBig = document.getElementById('nextSliderBig');
nextSliderBig.addEventListener('click', function(event) {
    moveSlider('sliderBig','positive', 292)
}, false);

let prevSliderBig = document.getElementById('prevSliderBig');
prevSliderBig.addEventListener('click', function(event) {
    moveSlider('sliderBig','negative', 292)
}, false);


function moveSlider(target, direction, amount) {
    let slider = document.getElementById(target);
    let wrapper = slider.getElementsByClassName('slider__wrapper')[0];
    if(direction == 'positive') {
        wrapper.scrollTo(wrapper.scrollLeft + amount,0);    
    } else {
        wrapper.scrollTo(wrapper.scrollLeft - amount,0);
    }
}