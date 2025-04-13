function makeGrid(rows, columns) {
    const mainContainer = document.getElementById("main-container");
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

