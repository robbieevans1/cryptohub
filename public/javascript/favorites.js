let cryptoButtonContainer = document.querySelector('#CryptoSearchedContainer')

function specificCoinNav () {
    document.location.replace('/specific/coin/');

}

function favoriteHandler () {
    let coinFavorite = (this.closest('.card-body'))
    let coinText = coinFavorite.children[0].innerText;

    console.log(coinFavorite);

    localStorage.setItem(JSON.stringify(coinFavorite), JSON.stringify(coinFavorite));

    let coinButtonEl = document.createElement('button');
    coinButtonEl.textContent = coinText;
    coinButtonEl.classList.add('searchedButtons');
    cryptoButtonContainer.appendChild(coinButtonEl);
    coinButtonEl.addEventListener('click', specificCoinNav)
};

// coinButtonEl.addEventListener('click', specificCoinNav)




let heart = document.querySelectorAll('.card-body');
console.log(heart[2].children)
heart.forEach(heart => {
    heart.children[2].addEventListener('click', favoriteHandler)
})
// heart.addEventListener('click', favoriteHandler);