const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");

const TODO_KEY = "todos";

let toDoArr = [];

function saveToDo(){
    localStorage.setItem(TODO_KEY,JSON.stringify(toDoArr));
}

function deleteToDo(event){
    li = event.target.parentNode;
    const removeTarget = li.id;
    li.remove();

    //remove todo
    toDoArr = toDoArr.filter(item => String(item.id)!==removeTarget);

    saveToDo();
}

function paintToDo(newTodoObj){

    const list = document.createElement("li");
    const tmpSpan = document.createElement("span");
    const tmpButton = document.createElement("button");

    tmpButton.innerText = "✔️";
    tmpSpan.innerText = newTodoObj.text;
    list.id = newTodoObj.id;
    tmpButton.addEventListener("click",deleteToDo);

    //push todo

    list.appendChild(tmpButton);
    list.appendChild(tmpSpan);
    toDoList.appendChild(list);
}

function todoSubmit(event){
    event.preventDefault();
    const newToDo = event.path[0][0].value;
    event.path[0][0].value = "";

    const newTodoObj = {
        id:Date.now(),
        text:newToDo,
    };
    toDoArr.push(newTodoObj);

    paintToDo(newTodoObj);
    saveToDo();
}

toDoForm.addEventListener("submit",todoSubmit);

const savedTodo = localStorage.getItem(TODO_KEY);
if(savedTodo !== null) {
    const parsedTodo = JSON.parse(savedTodo);
    toDoArr = parsedTodo;
    parsedTodo.forEach(paintToDo);
}