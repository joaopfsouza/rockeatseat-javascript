var apiUrl = 'https://api.github.com/users/joaopfsouza';

function AjaxRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users/joaopfsouza');
    xhr.send(null);
    xhr.onreadystatechange = function () {
        console.log(this.readyState);
        if (xhr.readyState === 4) {
            console.log(JSON.parse(xhr.responseText));
        }
    };
}

var MyPromise = function () {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/joaopfsouza');
        xhr.send(null);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro requisição');
                }
            }
        }
    });
};

// MyPromise()
// .then(function(response){
//     console.log(response);
// })
// .catch(function(error){
//     console.warn(error)
// });

axios.get(apiUrl)
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.warn(error)
});