const dragdivs = document.querySelectorAll("#drag-container div");

Array.from(dragdivs).forEach((dragdiv) => {
  dragdiv.addEventListener("dragstart", (event) => {
    event.target.classList.add("dragging");

    event.dataTransfer.effectAllowed = "move";

    const className = event.target.getAttribute("data-image");
    event.dataTransfer.setData("text/plain", className);
  });

  dragdiv.addEventListener("dragend", (event) => {
    event.target.classList.remove("dragging");

    event.target.remove();
  });
});

// dragstart
// drag
// dragend

const dropdivs = document.querySelectorAll("#drop-container div"); //bcz dropdiv is a arraylike not a array so we cant use for loop on that

Array.from(dropdivs).forEach((dropdiv) => {
  dropdiv.addEventListener("dragenter", (event) => {
    event.target.classList.add("drop-select");

    event.dataTransfer.dropEffect = "move";
  });

  dropdiv.addEventListener("dragleave", (event) => {
    event.target.classList.remove("drop-select");
  });

  dropdiv.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  dropdiv.addEventListener("drop", (event) => {
    const className = event.dataTransfer.getData("text/plain");
    event.stopPropagation();

    event.target.classList.add(className);
    event.target.classList.remove("drop-select");
  });
});

// dragenter;
// dragover;
// dragleave;
// drop;
