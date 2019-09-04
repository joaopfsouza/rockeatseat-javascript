var buttonElemnent = document.querySelector('#app button');
var inputElement = document.querySelector('#app input');
var listElement = document.querySelector('#app ul');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

// var todos = ['Fazer café',
//     'Estudar Javascript',
//     'Acessar comunidade da Rocktseat'
// ];

function RenderTodos() {
    listElement.innerHTML = '';
    for (todo of todos) {
        var todoElement = document.createElement("li");
        var todoText = document.createTextNode(todo + '    |');
        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');
        var pos = todos.indexOf(todo);

        linkElement.setAttribute('href', "#");
        linkElement.setAttribute('onclick', 'DeleteTodo(' + pos + ')');

        todoElement.appendChild(todoText);
        linkElement.appendChild(linkText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

function AdicionarTodos() {
    var todoText = inputElement.value;
    if (todoText) {
        todos.push(todoText);
        inputElement.value = '';
        RenderTodos();
        SaveToStorage();
    }

}

function DeleteTodo(pos) {
    todos.splice(pos, 1);
    RenderTodos();
    SaveToStorage();
}

function SaveToStorage(){
    localStorage.setItem('list_todos',JSON.stringify(todos));
}

buttonElemnent.onclick = AdicionarTodos;
RenderTodos();