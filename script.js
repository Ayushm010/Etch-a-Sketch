const container = document.querySelector(".container");
function createGrid(size) {
  let squareSize = 630 / size;//total size of the container / size of a single grid

  //for clearing the child nodes/elements
  container.replaceChildren();

  for (let i = 0; i < size * size; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.cssText = `border: 1px solid black; height:${squareSize}px ; width: ${squareSize}px`;


    //Adding the hover effect
    card.addEventListener("mouseenter", () => {
      const randomColor = getRandomRgbColor();

      card.style.backgroundColor = `${randomColor}`;
    });

    //Adding click effect
    card.addEventListener("click",()=>{
      card.style.backgroundColor = "#e26e6e";
    })

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

function getRandomRgbColor() {
  const r = Math.floor(Math.random() * 256); // Generates a random integer for Red (0-255)
  const g = Math.floor(Math.random() * 256); // Generates a random integer for Green (0-255)
  const b = Math.floor(Math.random() * 256); // Generates a random integer for Blue (0-255)

  return `rgb(${r},${g},${b})`; // Returns the RGB color string
}



createGrid(16);//default grid
setupResetButton();
