async function fetchData() {
    try {
        const characterNum = document.getElementById("characterName").value.toLowerCase();
        const response = await fetch(`https://swapi.dev/api/people/${characterNum}/`);

        if (!response.ok) {
            throw new Error("Could not fetch data!");
        }

        const data = await response.json();
        const characterName = data.name;
        const nameDisplay = document.getElementById("nameDispay");
        nameDisplay.textContent = characterName;
        console.log(characterName);

        const heightDisplay = document.getElementById("height");
        heightDisplay.textContent = data.height;

        const homeDisplay = document.getElementById("home");

        
        const planetResponse = await fetch(data.homeworld);
        const planetData = await planetResponse.json();
        homeDisplay.textContent = planetData.name;
    } catch (error) {
        console.error(error);
    }
}

fetchData()
