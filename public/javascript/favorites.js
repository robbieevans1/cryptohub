let id;

let cryptoButtonContainer = document.querySelector('#CryptoSearchedContainer')

let newButtonNav = function specificCoinNav () {
        
    document.location.replace(`/specific-coin/${id}`);
    }

let newButtonNavStorage = function specificCoinNav (e) {
        console.log(e.currentTarget.myParam)
    document.location.replace(`/specific-coin/${e.currentTarget.myParam}`);
    }

function favoriteHandler () {
    let coinFavorite = (this.closest('.card-body'))
    let coinText = coinFavorite.children[0].innerText;

    id = coinFavorite.children[2].id;
    // let id 

    localStorage.setItem(JSON.stringify({coinText, id}), JSON.stringify({coinText, id}));

    let coinButtonEl = document.createElement('button');
    coinButtonEl.textContent = coinText;
    coinButtonEl.classList.add('searchedButtons');
    cryptoButtonContainer.appendChild(coinButtonEl);

    

    coinButtonEl.addEventListener('click', newButtonNav)
};

// coinButtonEl.addEventListener('click', specificCoinNav)
function loadButtons () {
    // if (localStorage.length !== 0) {
    //     searchContainerEl.classList.remove('is-invisible');
    // }

    for (let i = 0; i < localStorage.length; i++) {
    let coinButton = document.createElement('button');
    let storedCoins = JSON.parse(localStorage.getItem(localStorage.key(i)));

    console.log(storedCoins)
    coinButton.textContent = storedCoins.coinText;
    coinButton.classList.add("searchedButtons");
    coinButton.addEventListener('click', newButtonNavStorage, false)
    coinButton.myParam = storedCoins.id
    cryptoButtonContainer.appendChild(coinButton);

    // id = storedCoins.id;
    // coinButton.id = id;
}
}



let heart = document.querySelectorAll('.card-body');
console.log(heart[2].children)
heart.forEach(heart => {
    heart.children[2].addEventListener('click', favoriteHandler)
})
// heart.addEventListener('click', favoriteHandler);

loadButtons();