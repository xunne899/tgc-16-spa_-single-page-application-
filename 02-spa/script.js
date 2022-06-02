document.querySelector('#btn-page2')
 .addEventListener('click',function(){

    // show page 2
     document.querySelector("#page-2").classList.add('show');
     document.querySelector("#page-2").classList.remove('hidden');

    // hide page 1
     document.querySelector("#page-1").classList.remove('show');
     document.querySelector("#page-1").classList.add('hidden')


     // hide page 3
     document.querySelector("#page-3").classList.remove('show');
     document.querySelector("#page-3").classList.add('hidden')
 })