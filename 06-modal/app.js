// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay
const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

const styles = `
    visibility: visible;
    z-index: 0;
  `

modalBtn.addEventListener('click', function(){
    // if(modalOverlay.style.visibility = "hidden"){
    //     modalOverlay.style.cssText = styles;
    // }
    modalOverlay.classList.add('open-modal');
})

closeBtn.addEventListener('click', function(){
    // if(modalOverlay.style.visibility = "visible"){
    //     modalOverlay.style.visibility = "hidden";
    //     modalOverlay.style.zindex = -10;
    // }
    modalOverlay.classList.remove('open-modal');
})

