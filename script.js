let fact = document.getElementById("fact");
let userInput = document.getElementById("userInput");

function checking(event) {
    if (event.key === "Enter") {
        let url = "https://apis.ccbp.in/numbers-fact?number=" + event.target.value;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                fact.textContent = jsonData.fact;
            });
    }
}

userInput.addEventListener("keydown", checking);
