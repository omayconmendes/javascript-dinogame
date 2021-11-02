// Selectors
const dino = document.querySelector('.dino');


// Events
document.addEventListener('keyup' , handleKeyup);


// Functions
function handleKeyup(event) {
    
    if(event.keyCode === 32){
        console.log('Pressionou espaço!')
    }

}