// const e = require("express");
let id;
let cryptoButtonContainer = document.querySelector('#CryptoSearchedContainer')

let newButtonNav = function specificCoinNav () {
    
    document.location.replace(`/specific-coin/${id}`);
}

function favoriteHandler () {
    let coinFavorite = (this.closest('.card-body'))
    let coinText = coinFavorite.children[0].innerText;

    id = coinFavorite.children[2].id;
    // let id 

    // localStorage.setItem(JSON.stringify(coinFavorite), JSON.stringify(coinFavorite));

    let coinButtonEl = document.createElement('button');
    coinButtonEl.textContent = coinText;
    coinButtonEl.classList.add('searchedButtons');
    cryptoButtonContainer.appendChild(coinButtonEl);

    

    coinButtonEl.addEventListener('click', newButtonNav)
};

// coinButtonEl.addEventListener('click', specificCoinNav)




let heart = document.querySelectorAll('.card-body');
console.log(heart[2].children)
heart.forEach(heart => {
    heart.children[2].addEventListener('click', favoriteHandler)
})
// heart.addEventListener('click', favoriteHandler);