const input = getElementById("input");
const button = getElementById("submit");
const list = getElementById("list");

button.addEventListener('click',addChapter)

function addChapter(){
if (input != 0) {
    listItem = document.createElement("li")
    list.innerHTML(listItem)
    const deleteButton = createElement("button").textContent = "❌";
    deleteButton.addEventListener('click',deleteChapter)


}
}

function deleteChapter(){
    
}