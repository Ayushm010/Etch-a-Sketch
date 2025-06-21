const container = document.querySelector(".container");
function createGrid(size) {
    
    let squareSize = 630 / size; //one div size = total size of the container divided by the total number of squares in the div
    

    for (let i = 0; i < size * size; i++) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.style.cssText = `border: 1px solid black; height:${squareSize}px ; width: ${squareSize}px`;
        container.appendChild(card);
        
        
    }
}


let btn = document.querySelector('#btn');

btn.addEventListener('click',(event) => {
   let size;
   while(!(size >= 1 && size <= 100)){
     size = prompt("Enter a num between 1-100");
   }
   createGrid(size);
});
