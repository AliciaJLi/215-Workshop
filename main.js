// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {

    var button = document.getElementById('click-button');
    var img = document.getElementById('puppy-image');

    var buttonPressed = 0; //starts OFF

    button.addEventListener('click', function(){

        if(buttonPressed === 0){
            buttonPressed = 1
            img.classList.add('opacity-0');
            button.classList.add('bounce-animation');
        } else {
            buttonPressed = 0
            img.classList.remove('opacity-0');
            button.classList.remove('bounce-animation');
        }

    })
});