let pages = document.querySelectorAll('.page');
let pageButtons = document.querySelectorAll('.btn-page');

for (let button of pageButtons) {
    // the first argument to the callback func is 
    // an event object. It stores all the properties
    // of the event, such as mouse position clicked
    // BUT most the target property
    // target will be the element that the event
    // happened on
    button.addEventListener('click', function(e){

        let page = e.target.dataset.page;
        // hide all the pages first
        for (let p of pages) {
            p.classList.add('hidden');
            p.classList.remove('show');
        }

        // show whatever page is stored in the page variable
        document.querySelector("#"+page).classList.add('show');
        document.querySelector("#"+page).classList.remove('hidden');

    })

   
}





