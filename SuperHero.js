let button = document.getElementById("submit");

button.addEventListener('click', printHero);


function printHero() {
    let heroName = document.getElementById("SuperheroInput").value;
    let url = 'https://superheroapi.com/api/2586005088149765/search/' + heroName;
    let proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetch(proxyurl + url)
    .then((res) => res.json())
    .then((data) => {
        let size = data.results.length;
        let img = data.results[(size - 1)].image.url;
    
        let fullName = data.results[0].biography["full-name"];
        let birthPlace = data.results[0].biography["place-of-birth"];
        let firstAppearance = data.results[0].biography["first-appearance"];
        let realName = heroName.charAt(0).toUpperCase() + heroName.substring(1);

        let output = `
        <h2 id="heroNameOutput"> ${realName} </h2>
        <img src="${img}" id="heroImg">
        <ul id="list">
            <li><strong>Full name</strong>: ${fullName}</li>
            <li><strong>Birth Place</strong>: ${birthPlace}</li>
            <li><strong>First Apprearance</strong>: ${firstAppearance}</li>

        </ul>
        `
        document.getElementById("placement").innerHTML = output;
    })
    .catch(function(error) {
        console.log('Looks like there was a problem: \n', error);
    })
}