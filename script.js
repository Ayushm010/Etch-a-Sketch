const container = document.querySelector(".container");
function createGrid(size) {
  //one div size = total size of the container divided by the total number of squares in the div
  let squareSize = 630 / size;

  //for clearing the child nodes/elements
  container.replaceChildren();

  for (let i = 0; i < size * size; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.cssText = `border: 1px solid black; height:${squareSize}px ; width: ${squareSize}px`;


    //Adding the hover effect
    card.addEventListener("mouseenter", () => {
      card.style.backgroundColor = "purple";
    });

    container.appendChild(card);//adding the card div to the container
  }
}

//gets the input from the fuser
function setupResetButton() {

  let btn = document.querySelector('#btn');

  btn.addEventListener('click', (event) => {
    let size;
    while (!(size >= 1 && size <= 100)) {
      size = parseInt(prompt("Enter a num between 1–100"));
    }
    createGrid(size);
  });
}

createGrid(16);//default grid
setupResetButton();
