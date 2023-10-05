let addToDoButton= document.getElementById("addToDo");
let modal=document.getElementById("modal");
let listBox=document.getElementById("listBox");
let modalButton=document.getElementById("modalButton");
let modalInput=document.getElementById("newToDo");
let noStatusBox=document.getElementById("noStatus");
let notStartedBox=document.getElementById("notStarted");
let inProgressBox=document.getElementById("inProgress");
let completedBox=document.getElementById("completed");

//showing modal
addToDoButton.addEventListener("click", showModal);
function showModal(){
modal.style.display="block";
listBox.style.filter="blur(2px)";
modalInput.focus();    
modalInput.value="";
}
//adding a new toDo using button
modalButton.addEventListener("click", addNewToDoUsingButton);
let draggedToDo;
function addNewToDoUsingButton(){
    let newToDo=modalInput.value;
    modal.style.display="none";
    listBox.style.filter="blur(0)";
    let newPElem=document.createElement("p");
    newPElem.innerHTML=newToDo+"<i class=\"fa-solid fa-xmark removeToDo\"></i>";
    newPElem.classList.add("toDo");
    noStatusBox.append(newPElem);
    newPElem.setAttribute("draggable","true");
    newPElem.addEventListener("dragstart", (e)=>{
        e.dataTransfer.setData('Text',newPElem.innerHTML);
    });
    newPElem.addEventListener("dragend", (e)=>{
        e.target.remove();
    });
    newPElem.firstElementChild.addEventListener("click", function(event){
        event.target.parentElement.remove();
    });

}
//adding a new toDo using enter
modalInput.addEventListener("keydown", addNewToDoUsingEnter);
function addNewToDoUsingEnter(event){
    if(event.key=="Enter"){
        let newToDo=modalInput.value;
    modal.style.display="none";
    listBox.style.filter="blur(0)";
    let newPElem=document.createElement("p");
    newPElem.innerHTML=newToDo+"<i class=\"fa-solid fa-xmark removeToDo\"></i>";
    newPElem.classList.add("toDo");
    noStatusBox.append(newPElem);
    newPElem.setAttribute("draggable","true");
    newPElem.addEventListener("dragstart", (e)=>{
        e.dataTransfer.setData('Text',newPElem.innerHTML);
    });
    newPElem.addEventListener("dragend", (e)=>{
        e.target.remove();
    });
    newPElem.firstElementChild.addEventListener("click", function(event){
        event.target.parentElement.remove();
    });
    }
}

//dropping a toDo in a box
document.querySelectorAll('.toDoList .subDiv div').forEach(div=>{
    div.addEventListener('dragover', (e)=>e.preventDefault());
    div.addEventListener('drop', (e)=>{
      let newPElem=document.createElement("p");
      newPElem.innerHTML=e.dataTransfer.getData('text');
      newPElem.classList.add("toDo");
      div.append(newPElem);
      newPElem.setAttribute("draggable","true");
      newPElem.addEventListener("dragstart", (e)=>{
          e.dataTransfer.setData('Text',newPElem.innerHTML);
      });
      newPElem.addEventListener("dragend", (e)=>{
          e.target.remove();
      });
      newPElem.firstElementChild.addEventListener("click", function(event){
          event.target.parentElement.remove();
      });
    })

})






