document.querySelector('#btnAnimate').addEventListener('click', function(){
    let theBox = document.querySelector('#thebox');
    // every HTML element object has this array of CSS classes
    theBox.classList.add('stretch');
})

/* add the stretch class to theBox element after 1s */
setTimeout(function(){
    let theBox = document.querySelector('#thebox');
    theBox.classList.add('stretch');
}, 1000)