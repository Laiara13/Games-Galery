let key = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '7a9f276c83msh3ec3bc3303ae41ep106a2cjsn8f9adc729f67',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', key)

let recebeElement = document.querySelector('#recebe')
let jogosContainer = document.querySelector('jogos')
let conteudo = document.querySelector(".conteudo");
let busca = document.querySelector("input[type='search']");

async function getallgames() {

  let response = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games');
  let game = await response.json();
  console.log(game);

  let container = document.querySelector(".conteudos");
  let inputSearch = document.querySelector("input[type='search']");

  /TRABALHANDO COM O SISTEMA DE PESQUISA/

  let items = [];

  inputSearch.oninput = () => {
    container.innerHTML = "";
    items
      .filter((item) =>
        item.toLowerCase().includes(inputSearch.value.toLowerCase())//é o vd para cada e o jogos para todos
      )
      .forEach((item) => addHTML(item));
  };

  function addHTML(item1, item2, item3, item4, item5, item6, item7, item8, item9){
    let div = document.createElement("div");
    let title = document.createElement("h1")
    let thumbnail = document.createElement("img")
    let short_description = document.createElement("h2")
    let publisher = document.createElement("p")
    let platform = document.createElement("p")
    let genre = document.createElement("p")
    let game_url = document.createElement("p")
    let developer = document.createElement("p")
    let release_date = document.createElement("p")

    title.innerHTML = item1;
    thumbnail.src = item2;
    short_description.innerHTML = item3;
    publisher.innerHTML = item4;
    platform.innerHTML = item5;
    genre.innerHTML = item6;
    game_url.innerHTML = item7;
    developer.innerHTML = item8;
    release_date.innerHTML = item9;

    div.appendChild(title)
    div.appendChild(thumbnail)
    div.appendChild(short_description)
    div.appendChild(developer)
    div.appendChild(publisher)
    div.appendChild(genre)
    div.appendChild(platform)
    div.appendChild(game_url)
    div.appendChild(release_date)
    
    container.append(div);
  }

  fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', key)
    .then((data) => data.json())
    .then((users) => {
      users.forEach((user) => {
        addHTML(user.title, user.thumbnail, user.short_description, user.publisher, user.platform, user.genre, user.game_url,
          user.developer, user.release_date);
        items.push(user.title, user.thumbnail, user.short_description, user.publisher, user.platform, user.genre, user.game_url,
          user.developer, user.release_date);
      });
    });


  /fIM DO SISTEMA/

  //name = title


}

getallgames();