//Ejercicio 1

const getPeopleSW = async () => {
  const result = await fetch("https://swapi.dev/api/people");
  const data = await result.json();
  console.log(data);
};

getPeopleSW();

//Eejercicio 2

const getDarthVader = async () => {
  const result = await fetch("https://swapi.dev/api/people");
  const data = await result.json();

  const characterDv = data.results.find(character => character.name === "Darth Vader")
  
  console.log(characterDv);
};

getDarthVader();

const getFilmsLuke= async () =>{
    const result = await fetch('https://swapi.dev/api/people')
    const data = await result.json()

    const characterLuke = data.results.find(character => character.name === "Luke Skywalker")

    const lukeFilmsUrls = characterLuke.films
    const lukeFilmsData = await Promise.all(lukeFilmsUrls.map(url => fetch(url).then(response => response.json())));

    lukeFilmsData.forEach(filmData => {
        console.log(`Título: ${filmData.title}`);
        console.log(`Episodio:, ${filmData.episode_id}`);
        console.log(`Director:, ${filmData.director}`);
        console.log("---------------------");
        
      });
      }
    
getFilmsLuke()

//Ejercicio 4

const getPlanetLeia = async () =>{
    const result = await fetch('https://swapi.dev/api/people')
    const data = await result.json()

    const characterLeia = data.results.find(character => character.name === "Leia Organa")

    const planetUrl = characterLeia.homeworld
    const leiaPlanet = await fetch(planetUrl)

    const leiaPlanetData =await leiaPlanet.json()
    console.log('Leia es del planeta:', leiaPlanetData.name);
    console.log('Con un diametro de:', leiaPlanetData.diameter);
    console.log('Y con un clima de:', leiaPlanetData.climate);
     
}

getPlanetLeia()

//Ejercicio 5

async function fetchCharacterData() {
    
      
      const charactersResponse = await fetch('https://swapi.dev/api/people/');
      const charactersData = await charactersResponse.json();
      
      
      const c3poData = charactersData.results.find(character => character.name === 'C-3PO');
      const c3poFilmsUrls = c3poData.films;
  
      
      const c3poFilmsData = await Promise.all(c3poFilmsUrls.map(url => fetch(url).then(response => response.json())));
  
    
      c3poFilmsData.forEach(filmData => {
        console.log(`Título: ${filmData.title}`);
        console.log(`Episodio:, ${filmData.episode_id}`);
        console.log(`Director:, ${filmData.director}`);
        console.log("---------------------");
      });
      }
      fetchCharacterData()