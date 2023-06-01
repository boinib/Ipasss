document.querySelector("#postAfs").addEventListener("click", function (event) {
    event.preventDefault();
    let request = {};
    let form = document.querySelector("#POSTafspraak");

    new FormData(form).forEach((value, key) => {
        request[key] = value;
    });

    fetch("http://localhost:8080/restservices/fiets/nieuweAfspraak", {
        method: "POST",
        body: JSON.stringify(request),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.json())
        .then(myJson => console.log(myJson))
        .catch(error => console.log(error));
});