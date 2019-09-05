function checaIdade(idade) {
    return new Promise((resolve, reject) => {
        if (idade >= 18) {
            resolve();
        } else {
            reject();
        }
    });
}

function PromiseTimeout() {
    setTimeout(() => {
        checaIdade(20)
            .then(() => {
                console.log("Maior que 18 anos");
            })
            .catch(() => {
                console.log("Menor que 18");
            });
    }, 2000);
}

var buttonElement = document.querySelector('div#app button');
var inputElement = document.querySelector('div#app input');
var listElement = document.querySelector('div#app ul');
var xhr = new XMLHttpRequest();

buttonElement.onclick = FindRepos;

function FindRepos() {
    listElement.innerHTML = 'Carregando...';
    var user = inputElement.value;
    xhr.open('GET', 'https://api.github.com/users/' + user + '/repos');
    xhr.send(null);

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var repo = JSON.parse(xhr.responseText)
            if(repo.length>0){
                RenderRepos(repo);

            }else{
                listElement.innerHTML = `Usuário <b>${user}</b> não tem repositórios criados`;
            }
        } else if(xhr.readyState === 4 && xhr.status === 404){
            listElement.innerHTML = `Usuário <b>${user}</b> não encontrado`;
        }
    }
}

function RenderRepos(repos){
    listElement.innerHTML ='';
    for(repo of repos){
        CreateRepoName(repo.full_name)
    }
    
}

function CreateRepoName(repoName){
    var repoList = document.createElement('li');
    var repoText = document.createTextNode(repoName);

    repoList.appendChild(repoText);
    listElement.appendChild(repoList);
}