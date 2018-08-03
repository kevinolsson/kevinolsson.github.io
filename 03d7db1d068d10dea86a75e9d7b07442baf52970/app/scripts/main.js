// var sidebarContent = true;
console.log('\'Allo \'Allo!');

/* Sticky nav related stuff */
window.addEventListener('scroll', function(event) {
    var top = this.scrollY;

    let element = document.getElementsByClassName('categories')[0];
    let grid = document.getElementsByClassName('grid')[0];
    let width = window.innerWidth;

    if(width >= 767) {
        if( top >= 330 ) {
            element.className = 'categories categories--sticky';
            grid.classList.add('grid--sticky');
        } else {
            element.className = 'categories';
            grid.classList.remove('grid--sticky');
        }
    } else {
        if( top >= 282 ) { //282 because no bottom half of nav on mobile
            element.className = 'categories categories--sticky';
            grid.classList.add('grid--sticky');
        } else {
            element.className = 'categories';
            grid.classList.remove('grid--sticky');
        }  
    }

}, false);


window.addEventListener('resize', function(event) {
    setWrapperGridTemplateColumns(window.innerWidth);
}, false);


function setWrapperGridTemplateColumns(width) {

    if (document.getElementsByClassName('wrapper--has-sidebar')[0] !== undefined) {
        let wrapper = document.getElementsByClassName('wrapper--has-sidebar')[0];
        if(width <= 1879 && width >= 1505) {
            let spacing = 1879 - width;        
            wrapper.style.gridTemplateColumns = 'auto 1fr auto ' + spacing + 'px';
        } else {
            if(width > 1505) {
                wrapper.style.gridTemplateColumns = 'auto 1fr auto';
            } else {
                wrapper.style.gridTemplateColumns = 'auto 1fr auto 375px';
            }
        }
    } else {
        let wrapper = document.getElementsByClassName('wrapper')[0];
        wrapper.style.gridTemplateColumns = 'auto 1fr auto';
    }

}


// /* Scrolling related */
// window.onscroll = function () {
//     let navigationTop = document.getElementsByClassName('navigation__top')[0];
//     let navigationCat = document.getElementsByClassName('categories')[0];
//     if(this.scrollY > 64) {
//         navigationTop.classList.add('navigation__top--scrolling');     
//         // navigationCat.classList.add('categories--scrolling');     
//     }
   
// };

// // Setup isScrolling variable
// var isScrolling;

// // Listen for scroll events
// window.addEventListener('scroll', function ( event ) {

//     let navigationTop = document.getElementsByClassName('navigation__top')[0];
//     let navigationCat = document.getElementsByClassName('categories')[0];
//     if(this.scrollY < 64) {
//         navigationTop.classList.remove('navigation__top--scrolling');     
//     }
//     // if(this.scrollY < 350) {
//     //     navigationCat.classList.remove('categories--scrolling');     
//     // }


//     // Clear our timeout throughout the scroll
//     window.clearTimeout( isScrolling );

//     // Set a timeout to run after scrolling ends
//     isScrolling = setTimeout(function() {

//         // Run the callback
//         console.log( 'Scrolling has stopped.' );
//         navigationTop.classList.remove('navigation__top--scrolling');
//         navigationCat.classList.remove('categories--scrolling');     

//     }, 100);

// }, false);