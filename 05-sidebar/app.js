const aside = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');

toggleBtn.addEventListener('click', function(){
    // if(aside.classList.contains('show-sidebar')){
    //     aside.classList.remove('show-sidebar');
    // }
    // else{
    //     aside.classList.add('show-sidebar');
    // }
        aside.classList.toggle('show-sidebar');
})

closeBtn.addEventListener('click', function(){
    if(aside.classList.contains('show-sidebar')){
        aside.classList.remove('show-sidebar');
    }
})


