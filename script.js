let btn = document.querySelector("button");
let mainResult = document.querySelector(".main-result");
let img = document.querySelector("img");

function getPokemon() {
    let number = document.querySelector("input").value; // ✅ moved inside

    const url = `https://pokeapi.co/api/v2/pokemon/${number}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            mainResult.innerHTML = data.name.toUpperCase();
            img.src = data.sprites.front_default;
        })
        .catch(err => {
            mainResult.innerHTML = "{Pokemon Not Found}";
            img.src = "";
        });
}
