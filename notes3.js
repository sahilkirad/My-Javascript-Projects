var notesContainer=document.querySelector(".notes-container");
var createBtn = document.querySelector(".btn");
var notes=document.querySelectorAll(".input-box");


function show()
{
    notesContainer.innerHTML=localStorage.getItem("notes");
}
show();
function updateStorage()
{
    localStorage.setItem("notes", notesContainer.innerHTML);
}
createBtn.addEventListener("click", ()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src="notes-app-img/images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG")
    {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName==="P")
    {
        notes=document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function()
            {
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown",event => {
    if(event.key==="Enter")
    {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})