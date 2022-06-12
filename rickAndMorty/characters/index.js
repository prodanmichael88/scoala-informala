
let topContainer = document.querySelector('.top-container');
let bottomContainer = document.querySelector('.bottom-container');
let leftArrow = document.querySelector('.left');
let rightArrow = document.querySelector('.right');
let leftArrowBottom = document.querySelector('.left-bottom');
let rightArrowBottom = document.querySelector('.right-bottom');

function moveContainerRight(container,pos){

    container.style.left = `${container.offsetLeft - pos}px`;
    container.style.transition = '0.8s';

    }
function moveContainerLeft(container,pos){

    container.style.left = `${container.offsetLeft + pos}px`;
    container.style.transition = '0.8s';

    }



function showEpisodeList(){
    fetch('https://rickandmortyapi.com/api/episode/')
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        data.results.forEach(result => {
        //console.log(result);
            
    let itemContainer = document.createElement('div');
    itemContainer.classList.add('item-container');
    let nameContainer = document.createElement('div');
    nameContainer.classList.add('name-container');
    let imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    let img = document.createElement('img');
    img.src = 'rickandmorty.jpg';
    let airDateContainer = document.createElement('div');
    airDateContainer.classList.add('air-date-container');
    let episodeContainer = document.createElement('div');
    episodeContainer.classList.add('episode-container');
    let linkButton = document.createElement('button');
    linkButton.innerText = `See ${result.characters.length} characters`;
    nameContainer.innerText = result.name;
    airDateContainer.innerText = result.air_date;
    episodeContainer.innerText = result.episode;
    imgContainer.appendChild(img);
    itemContainer.append(nameContainer,imgContainer,airDateContainer,episodeContainer,linkButton);
    topContainer.appendChild(itemContainer);
                //console.log(result.characters);        
    linkButton.onclick = function() {

    itemContainer.style.position = 'relative';
    itemContainer.style.top = '15px'
    itemContainer.style.transform = `scale(1.2)`;
    
    for(let i=0;i<result.characters.length;i++){
                
    fetch(result.characters[i])
    .then(response => response.json())
    .then(character => {
                    
                    //console.log(character);
    let characterContainer = document.createElement('div');
    characterContainer.classList.add('character-container');
    let characterNameContainer = document.createElement('div');
    characterNameContainer.innerText = character.name;
    characterNameContainer.style.color = 'white';
    characterNameContainer.style.padding = '5px';
    let characterImgContainer = document.createElement('div');
    let characterImg = document.createElement('img');
    characterImg.src = character.image;
    characterImgContainer.appendChild(characterImg);
    characterContainer.append(characterNameContainer,characterImgContainer);
    bottomContainer.appendChild(characterContainer);
    leftArrowBottom.style.visibility = 'visible';
    rightArrowBottom.style.visibility = 'visible';
    })
    }
    }
    })
})
}

showEpisodeList();