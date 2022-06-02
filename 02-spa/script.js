let pages = document.querySelectorAll('.page');

document.querySelector('#btn-page2')
    .addEventListener('click', function(){

        // hide all the pages first
        for (let p of pages) {
            p.classList.add('hidden');
            p.classList.remove('show');
        }

        // show page 2
        document.querySelector("#page-2").classList.add('show');
        document.querySelector("#page-2").classList.remove('hidden');

    })

    document.querySelector('#btn-page1')
    .addEventListener('click', function(){
        // show page 1
        document.querySelector("#page-1").classList.add('show');
        document.querySelector("#page-1").classList.remove('hidden');

        // hide all the pages first
        for (let p of pages) {
            p.classList.add('hidden');
            p.classList.remove('show');
        }
    })

    
document.querySelector('#btn-page3')
    .addEventListener('click', function(){
        // show page 1
        document.querySelector("#page-3").classList.add('show');
        document.querySelector("#page-3").classList.remove('hidden');

        // hide all the pages first
        for (let p of pages) {
            p.classList.add('hidden');
            p.classList.remove('show');
        }
    })