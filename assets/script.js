if (document.readyState === "loading"){
    document.addEventListener('DOMContentLoaded', ready());
}else {
    ready();
}

function ready(){
    let overlays = Array.from(document.getElementsByClassName("overlay-text"));
    let basketballs = Array.from(document.getElementsByClassName("basketballs"));

    overlays.forEach( overlays => {
        overlays.addEventListener('click', () =>{
            overlays.classList.remove('visible');

            //game.StartGame

        });
        
    });
}