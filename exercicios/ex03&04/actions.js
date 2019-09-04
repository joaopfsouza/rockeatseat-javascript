var inputElement = document.querySelector("input[name=nome]");
var containerElement = document.querySelector('#container');
var btnElement = document.querySelector('#create');
var listElement = document.querySelector('#list');
var appElement = document.querySelector('#app');



containerElement.style.display="none";

btnElement.onclick = () => {
    containerElement.style.display="block";
    name = inputElement.value;
    AddList(name,listElement);
    inputElement.value = '';
}

function AddList(name, list) {
    var nameElement = document.createElement('li');
    var textNameElement = document.createTextNode(name);

    nameElement.appendChild(textNameElement);
    list.appendChild(nameElement);
}