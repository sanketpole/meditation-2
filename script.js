const boxes = document.querySelectorAll(".box")
const image = document.querySelector(".image")

image.addEventListener("dragstart", dragStart);
image.addEventListener("dragend", dragEnd);

for(const box of boxes){
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', dragDrop);
}

function dragStart(){
    // console.log("dragged")
    // this.className+= ' box';
    setTimeout(()=> this.className = 'invisible' ,0);
}

function dragEnd(){
    // console.log("ended")
    this.className = "image"
}

function dragOver(e){
    e.preventDefault()
}

function dragEnter(e){
    e.preventDefault();
}

function dragLeave(){
    
}

function dragDrop(){
    this.className = 'box'
    this.append(image)
}