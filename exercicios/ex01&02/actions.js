var btnElement = document.querySelector('#create');
var appElement = document.querySelector('#app');
var containerElement = document.querySelector('#container');

containerElement.style.display="none";

btnElement.onclick = () => {
    CreateSquare(appElement);
    containerElement.style.display="block";
};

function CreateSquare(destElement) {
    var squareElement = document.createElement('div');

    squareElement.setAttribute('class', 'square');

    squareElement.style.width = '100px';
    squareElement.style.height = '100px';
    squareElement.style.margin = '5px';
    squareElement.style.backgroundColor = 'red';
    squareElement.onmouseover = ()=>{squareElement.style.backgroundColor = getRandomColor()  };

    destElement.appendChild(squareElement);

}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
   }