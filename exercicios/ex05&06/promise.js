var buttonElement = document.querySelector('div#app button');
var inputElement = document.querySelector('div#app input');
var listElement = document.querySelector('div#app ul');
var xhr = new XMLHttpRequest();

buttonElement.onclick = () => {
    var user = inputElement.value;
    FindRepos(user)
        .then((response) => {
                console.log(user);
                if (response.length > 0) {
                    RenderRepos(response);
                } else {
                    listElement.innerHTML = `Usuário <b>${user}</b> não tem repositórios criados`;
                }
            }

        )
        .catch((reject) => {
            listElement.innerHTML = `Usuário <b>${user}</b> não encontrado`;
        })
};

function FindRepos(user) {
    return new Promise((resolve, reject) => {

        listElement.innerHTML = 'Carregando...';

        xhr.open('GET', 'https://api.github.com/users/' + user + '/repos');
        xhr.send(null);

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var repo = JSON.parse(xhr.responseText)
                resolve(repo);

            } else if (xhr.readyState === 4 && xhr.status === 404) {
                reject();
            }
        }
    });
}

function RenderRepos(repos) {
    listElement.innerHTML = '';
    for (repo of repos) {
        CreateRepoName(repo.full_name)
    }

}

function CreateRepoName(repoName) {
    var repoList = document.createElement('li');
    var repoText = document.createTextNode(repoName);

    repoList.appendChild(repoText);
    listElement.appendChild(repoList);
}