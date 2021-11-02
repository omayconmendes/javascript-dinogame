// Selectors
const dino = document.querySelector('.dino');


// Events
document.addEventListener('keyup' , handleKeyup);


// Functions
function handleKeyup(event) {
    
    if(event.keyCode === 32){
        console.log('Pressionou espaço!')
    }

    jump();

}


function jump() {
    
    let position = 0;

    let upInterval = setInterval( () => {
        if (position >= 150) {
            clearInterval(upInterval);

            let downInterval = setInterval( () => {
                if(position <= 0) {
                    clearInterval(downInterval);
                } else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            } , 20);
        } else {
            position += 20;
            dino.style.bottom = position + 'px';
        }
    } , 20);
    
}