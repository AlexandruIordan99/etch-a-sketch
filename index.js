const mainContainer = document.getElementById("main-container");

function makeGrid(rows, columns) {
    for (let i =0; i < rows; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.className = "row";
        mainContainer.appendChild(rowDiv);
        for (let j =0; j < columns; j++){
            const columnDiv = document.createElement("div");
            columnDiv.className = "column";
            columnDiv.addEventListener("mouseover", () =>{
                columnDiv.classList.add("trail");
            });

            rowDiv.appendChild(columnDiv);
        }
    }

}

makeGrid(16,16)

const startButton = document.createElement("button");

const header = document.getElementById("header");

startButton.textContent = "Open a new Container";
startButton.addEventListener("click", () =>{
   //ask for number of rows and columns
    const  numberOfGrids= prompt("How many rows and columns should the new grid have?")
    mainContainer.innerHTML = ""
    makeGrid(numberOfGrids, numberOfGrids);
})

header.appendChild(startButton);

