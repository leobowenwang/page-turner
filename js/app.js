const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let hpCharacters = [];

searchBar.addEventListener('keyup', (e) => { //same as Lambda expressions in prog 2
    const searchString = e.target.value.toLowerCase(); //for search we need to filter

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) ||
            character.house.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
    try {
        const res = await fetch('https://hp-api.herokuapp.com/api/characters'); //Await makes JavaScript wait until the promise returns a result.
        hpCharacters = await res.json(); //same here
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="list-unstyled">
                <h3>${character.name}</h3>
                <h5>House: ${character.house}</h5>
                <img src="${character.image}" width="200"/>
            </li>
            <hr>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();
